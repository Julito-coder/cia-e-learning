-- Colonne one-shot du test de placement
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS placement_test_taken_at TIMESTAMPTZ;

-- Audit log XP
CREATE TABLE IF NOT EXISTS public.xp_audit_log (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  amount      INTEGER NOT NULL,
  source      TEXT NOT NULL,
  source_ref  TEXT,
  xp_before   INTEGER NOT NULL,
  xp_after    INTEGER NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.xp_audit_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own XP audit"
  ON public.xp_audit_log FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Admins can view all XP audit"
  ON public.xp_audit_log FOR SELECT USING (public.has_role(auth.uid(), 'admin'));
CREATE INDEX IF NOT EXISTS idx_xp_audit_user_date
  ON public.xp_audit_log (user_id, created_at DESC);

-- Trigger de protection des colonnes gameplay
CREATE OR REPLACE FUNCTION public.protect_gameplay_columns()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF public.has_role(auth.uid(), 'admin') THEN RETURN NEW; END IF;
  IF current_setting('app.bypass_xp_protection', true) = 'true' THEN RETURN NEW; END IF;
  IF NEW.total_xp IS DISTINCT FROM OLD.total_xp THEN
    RAISE EXCEPTION 'Modification directe de total_xp interdite (utiliser RPC award_xp)'; END IF;
  IF NEW.weekly_xp IS DISTINCT FROM OLD.weekly_xp THEN
    RAISE EXCEPTION 'Modification directe de weekly_xp interdite'; END IF;
  IF NEW.weekly_period_start IS DISTINCT FROM OLD.weekly_period_start THEN
    RAISE EXCEPTION 'Modification directe de weekly_period_start interdite'; END IF;
  IF NEW.cecr_level IS DISTINCT FROM OLD.cecr_level THEN
    RAISE EXCEPTION 'Modification directe de cecr_level interdite (utiliser set_cecr_level ou set_placement_level)'; END IF;
  IF NEW.placement_test_taken_at IS DISTINCT FROM OLD.placement_test_taken_at THEN
    RAISE EXCEPTION 'Modification directe de placement_test_taken_at interdite'; END IF;
  IF NEW.daily_streak IS DISTINCT FROM OLD.daily_streak THEN
    RAISE EXCEPTION 'Modification directe de daily_streak interdite (utiliser mark_daily_done)'; END IF;
  IF NEW.last_daily_completed_at IS DISTINCT FROM OLD.last_daily_completed_at THEN
    RAISE EXCEPTION 'Modification directe de last_daily_completed_at interdite'; END IF;
  IF NEW.league IS DISTINCT FROM OLD.league THEN
    RAISE EXCEPTION 'Modification directe de league interdite (rotation hebdo)'; END IF;
  IF NEW.is_cia_student IS DISTINCT FROM OLD.is_cia_student THEN
    RAISE EXCEPTION 'Modification de is_cia_student réservée admin'; END IF;
  IF NEW.is_active IS DISTINCT FROM OLD.is_active THEN
    RAISE EXCEPTION 'Modification de is_active réservée admin'; END IF;
  RETURN NEW;
END $$;
DROP TRIGGER IF EXISTS protect_profiles_gameplay ON public.profiles;
CREATE TRIGGER protect_profiles_gameplay BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.protect_gameplay_columns();

-- RPC award_xp
CREATE OR REPLACE FUNCTION public.award_xp(_amount INTEGER, _source TEXT, _source_ref TEXT DEFAULT NULL)
RETURNS JSONB LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  _uid UUID := auth.uid();
  _xp_before INTEGER; _xp_after INTEGER;
  _level_before TEXT; _level_after TEXT;
  _xp_per_level CONSTANT INTEGER := 5000;
  _levels CONSTANT TEXT[] := ARRAY['A1','A2','B1','B2','C1','C2'];
  _level_idx INTEGER;
  _monday DATE := public.current_week_monday();
  _current_period DATE;
BEGIN
  IF _uid IS NULL THEN RAISE EXCEPTION 'Non authentifié'; END IF;
  IF _amount IS NULL OR _amount <= 0 THEN RAISE EXCEPTION 'Montant invalide'; END IF;
  IF _amount > 500 THEN RAISE EXCEPTION 'Dépasse le plafond par appel (500)'; END IF;
  IF _source IS NULL OR length(_source) = 0 OR length(_source) > 50 THEN
    RAISE EXCEPTION 'Source invalide'; END IF;
  SELECT total_xp, cecr_level INTO _xp_before, _level_before
    FROM public.profiles WHERE user_id = _uid;
  IF _xp_before IS NULL THEN _xp_before := 0; END IF;
  IF _level_before IS NULL THEN _level_before := 'A1'; END IF;
  _xp_after := _xp_before + _amount;
  _level_idx := LEAST(_xp_after / _xp_per_level, array_length(_levels, 1) - 1);
  _level_after := _levels[_level_idx + 1];
  PERFORM set_config('app.bypass_xp_protection', 'true', true);
  UPDATE public.profiles SET total_xp = _xp_after, cecr_level = _level_after WHERE user_id = _uid;
  SELECT weekly_period_start INTO _current_period FROM public.profiles WHERE user_id = _uid;
  IF _current_period IS NULL OR _current_period < _monday THEN
    UPDATE public.profiles SET weekly_xp = _amount, weekly_period_start = _monday WHERE user_id = _uid;
  ELSE
    UPDATE public.profiles SET weekly_xp = weekly_xp + _amount WHERE user_id = _uid;
  END IF;
  INSERT INTO public.xp_audit_log (user_id, amount, source, source_ref, xp_before, xp_after)
    VALUES (_uid, _amount, _source, _source_ref, _xp_before, _xp_after);
  RETURN jsonb_build_object(
    'xp_before', _xp_before, 'xp_after', _xp_after,
    'level_before', _level_before, 'level_after', _level_after,
    'leveled_up', _level_after IS DISTINCT FROM _level_before
  );
END $$;
REVOKE EXECUTE ON FUNCTION public.award_xp(INTEGER, TEXT, TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.award_xp(INTEGER, TEXT, TEXT) TO authenticated;

-- RPC mark_daily_done
CREATE OR REPLACE FUNCTION public.mark_daily_done()
RETURNS JSONB LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  _uid UUID := auth.uid();
  _today DATE := (now() AT TIME ZONE 'Europe/Paris')::date;
  _last_done DATE; _current_streak INTEGER; _new_streak INTEGER;
  _streak_bonus CONSTANT INTEGER := 25;
  _award_result JSONB;
BEGIN
  IF _uid IS NULL THEN RAISE EXCEPTION 'Non authentifié'; END IF;
  SELECT last_daily_completed_at, daily_streak INTO _last_done, _current_streak
    FROM public.profiles WHERE user_id = _uid;
  IF _current_streak IS NULL THEN _current_streak := 0; END IF;
  IF _last_done = _today THEN
    RETURN jsonb_build_object('awarded', false, 'reason', 'already_done_today', 'streak', _current_streak);
  END IF;
  IF _last_done = _today - INTERVAL '1 day' THEN
    _new_streak := _current_streak + 1;
  ELSE
    _new_streak := 1;
  END IF;
  PERFORM set_config('app.bypass_xp_protection', 'true', true);
  UPDATE public.profiles SET daily_streak = _new_streak, last_daily_completed_at = _today
    WHERE user_id = _uid;
  _award_result := public.award_xp(_streak_bonus, 'daily_challenge', _today::text);
  RETURN jsonb_build_object(
    'awarded', true, 'xp_awarded', _streak_bonus, 'streak', _new_streak,
    'total_xp_after', (_award_result->>'xp_after')::integer,
    'level_after', _award_result->>'level_after',
    'leveled_up', (_award_result->>'leveled_up')::boolean
  );
END $$;
REVOKE EXECUTE ON FUNCTION public.mark_daily_done() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.mark_daily_done() TO authenticated;

-- RPC set_placement_level (one-shot)
CREATE OR REPLACE FUNCTION public.set_placement_level(_level TEXT)
RETURNS JSONB LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  _uid UUID := auth.uid();
  _xp_per_level CONSTANT INTEGER := 5000;
  _levels CONSTANT TEXT[] := ARRAY['A1','A2','B1','B2','C1','C2'];
  _level_idx INTEGER; _bootstrap_xp INTEGER; _current_xp INTEGER;
  _previous_test TIMESTAMPTZ; _final_xp INTEGER;
BEGIN
  IF _uid IS NULL THEN RAISE EXCEPTION 'Non authentifié'; END IF;
  IF _level IS NULL OR NOT (_level = ANY(_levels)) THEN RAISE EXCEPTION 'Niveau invalide'; END IF;
  SELECT placement_test_taken_at, total_xp INTO _previous_test, _current_xp
    FROM public.profiles WHERE user_id = _uid;
  IF _previous_test IS NOT NULL THEN
    RAISE EXCEPTION 'Test de placement déjà passé le %', _previous_test;
  END IF;
  IF _current_xp IS NULL THEN _current_xp := 0; END IF;
  _level_idx := array_position(_levels, _level) - 1;
  _bootstrap_xp := _level_idx * _xp_per_level;
  _final_xp := GREATEST(_current_xp, _bootstrap_xp);
  PERFORM set_config('app.bypass_xp_protection', 'true', true);
  UPDATE public.profiles SET cecr_level = _level, total_xp = _final_xp,
    placement_test_taken_at = now() WHERE user_id = _uid;
  INSERT INTO public.xp_audit_log (user_id, amount, source, source_ref, xp_before, xp_after)
    VALUES (_uid, _final_xp - _current_xp, 'placement_test', _level, _current_xp, _final_xp);
  RETURN jsonb_build_object('level', _level, 'total_xp', _final_xp, 'taken_at', now());
END $$;
REVOKE EXECUTE ON FUNCTION public.set_placement_level(TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.set_placement_level(TEXT) TO authenticated;

-- RPC set_cecr_level (auto-progression, multi-appel)
CREATE OR REPLACE FUNCTION public.set_cecr_level(_level TEXT)
RETURNS JSONB LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  _uid UUID := auth.uid();
  _levels CONSTANT TEXT[] := ARRAY['A1','A2','B1','B2','C1','C2'];
BEGIN
  IF _uid IS NULL THEN RAISE EXCEPTION 'Non authentifié'; END IF;
  IF _level IS NULL OR NOT (_level = ANY(_levels)) THEN RAISE EXCEPTION 'Niveau invalide'; END IF;
  PERFORM set_config('app.bypass_xp_protection', 'true', true);
  UPDATE public.profiles SET cecr_level = _level WHERE user_id = _uid;
  RETURN jsonb_build_object('level', _level);
END $$;
REVOKE EXECUTE ON FUNCTION public.set_cecr_level(TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.set_cecr_level(TEXT) TO authenticated;

-- Lock down de add_weekly_xp existante (l'exploit principal hors RPC)
REVOKE EXECUTE ON FUNCTION public.add_weekly_xp(UUID, INTEGER) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.add_weekly_xp(UUID, INTEGER) FROM authenticated;