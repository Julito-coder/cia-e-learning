CREATE EXTENSION IF NOT EXISTS supabase_vault;

DO $$
DECLARE
  _existing_id UUID;
  _generated_value TEXT;
BEGIN
  SELECT id INTO _existing_id FROM vault.secrets WHERE name = 'cron_secret' LIMIT 1;
  IF _existing_id IS NULL THEN
    _generated_value := encode(gen_random_bytes(32), 'base64');
    PERFORM vault.create_secret(_generated_value, 'cron_secret', 'Authentifie les appels cron vers les edge functions');
    RAISE NOTICE '────────────────────────────────────────────────────────────────';
    RAISE NOTICE 'CRON_SECRET généré : %', _generated_value;
    RAISE NOTICE 'Copier dans Project Settings → Edge Functions → Secrets';
    RAISE NOTICE 'Nom : CRON_SECRET — Valeur : (la chaîne ci-dessus)';
    RAISE NOTICE '────────────────────────────────────────────────────────────────';
  ELSE
    RAISE NOTICE 'cron_secret déjà présent dans Vault — pas de régénération';
  END IF;
END $$;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM cron.job WHERE jobname = 'weekly-league-rotation') THEN
    PERFORM cron.unschedule('weekly-league-rotation');
  END IF;
END $$;

SELECT cron.schedule(
  'weekly-league-rotation',
  '5 22 * * 0',
  $cron$
    SELECT net.http_post(
      url := 'https://ciflsfzlbpyffgtjtljz.supabase.co/functions/v1/weekly-league-rotation',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || (
          SELECT decrypted_secret FROM vault.decrypted_secrets WHERE name = 'cron_secret' LIMIT 1
        )
      ),
      body := jsonb_build_object('trigger', 'cron', 'time', now())
    );
  $cron$
);

CREATE OR REPLACE FUNCTION public.rotate_weekly_leagues()
RETURNS JSONB LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  _now_paris TIMESTAMPTZ := (now() AT TIME ZONE 'Europe/Paris');
  _this_monday DATE := date_trunc('week', _now_paris)::date;
  _prev_monday DATE := _this_monday - INTERVAL '7 days';
  _summary JSONB;
BEGIN
  PERFORM set_config('app.bypass_xp_protection', 'true', true);

  WITH ranked AS (
    SELECT user_id, league AS league_before, COALESCE(weekly_xp, 0) AS weekly_xp,
      ROW_NUMBER() OVER (PARTITION BY league ORDER BY COALESCE(weekly_xp, 0) DESC, user_id) AS rank,
      COUNT(*) OVER (PARTITION BY league) AS league_size
    FROM public.profiles WHERE is_active = true AND league IS NOT NULL
  ),
  with_slots AS (
    SELECT *,
      CASE WHEN league_size >= 6 THEN 3 WHEN league_size >= 2 THEN 1 ELSE 0 END AS promote_slots,
      CASE WHEN league_size >= 6 THEN 3 WHEN league_size >= 2 THEN 1 ELSE 0 END AS demote_slots
    FROM ranked
  ),
  with_outcome AS (
    SELECT user_id, league_before, weekly_xp, rank,
      CASE
        WHEN rank <= promote_slots AND league_before <> 'or' THEN 'promoted'
        WHEN rank > league_size - demote_slots AND league_before <> 'bronze' THEN 'demoted'
        ELSE 'stayed'
      END AS outcome,
      CASE
        WHEN rank <= promote_slots AND league_before = 'bronze' THEN 'argent'
        WHEN rank <= promote_slots AND league_before = 'argent' THEN 'or'
        WHEN rank > league_size - demote_slots AND league_before = 'or' THEN 'argent'
        WHEN rank > league_size - demote_slots AND league_before = 'argent' THEN 'bronze'
        ELSE league_before
      END AS league_after
    FROM with_slots
  ),
  inserted AS (
    INSERT INTO public.league_history (user_id, week_start, league_before, league_after, final_rank, weekly_xp_total, outcome)
    SELECT user_id, _prev_monday, league_before, league_after, rank, weekly_xp, outcome FROM with_outcome
    RETURNING 1
  ),
  updated AS (
    UPDATE public.profiles p
    SET league = wo.league_after, weekly_xp = 0, weekly_period_start = _this_monday
    FROM with_outcome wo WHERE p.user_id = wo.user_id
    RETURNING 1
  )
  SELECT jsonb_build_object(
    'week_start', _prev_monday, 'next_period', _this_monday,
    'users_rotated', (SELECT COUNT(*) FROM with_outcome),
    'breakdown', (
      SELECT jsonb_object_agg(league_before, jsonb_build_object(
        'promoted', SUM(CASE WHEN outcome='promoted' THEN 1 ELSE 0 END),
        'demoted',  SUM(CASE WHEN outcome='demoted'  THEN 1 ELSE 0 END),
        'stayed',   SUM(CASE WHEN outcome='stayed'   THEN 1 ELSE 0 END)
      ))
      FROM with_outcome GROUP BY league_before
    )
  ) INTO _summary;
  RETURN _summary;
END $$;
REVOKE EXECUTE ON FUNCTION public.rotate_weekly_leagues() FROM PUBLIC;

CREATE TABLE IF NOT EXISTS public.tts_usage_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  text_length INTEGER NOT NULL,
  voice_id TEXT,
  status TEXT NOT NULL,
  error_msg TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.tts_usage_log ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Admins can view TTS usage" ON public.tts_usage_log;
CREATE POLICY "Admins can view TTS usage"
  ON public.tts_usage_log FOR SELECT USING (public.has_role(auth.uid(), 'admin'));
CREATE INDEX IF NOT EXISTS idx_tts_usage_user_date ON public.tts_usage_log (user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_tts_usage_date ON public.tts_usage_log (created_at DESC);