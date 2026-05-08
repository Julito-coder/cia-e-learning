
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS onboarding_completed_at TIMESTAMPTZ;

CREATE OR REPLACE FUNCTION public.protect_gameplay_columns()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
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
  IF NEW.onboarding_completed_at IS DISTINCT FROM OLD.onboarding_completed_at THEN
    RAISE EXCEPTION 'Modification directe de onboarding_completed_at interdite (utiliser mark_onboarding_done)'; END IF;
  RETURN NEW;
END $function$;

DROP TRIGGER IF EXISTS protect_gameplay_columns_trigger ON public.profiles;
CREATE TRIGGER protect_gameplay_columns_trigger
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.protect_gameplay_columns();

CREATE OR REPLACE FUNCTION public.mark_onboarding_done()
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  _uid UUID := auth.uid();
  _already TIMESTAMPTZ;
  _bonus CONSTANT INTEGER := 50;
  _award JSONB;
BEGIN
  IF _uid IS NULL THEN RAISE EXCEPTION 'Non authentifié'; END IF;
  SELECT onboarding_completed_at INTO _already FROM public.profiles WHERE user_id = _uid;
  IF _already IS NOT NULL THEN
    RETURN jsonb_build_object('awarded', false, 'reason', 'already_done', 'completed_at', _already);
  END IF;
  PERFORM set_config('app.bypass_xp_protection', 'true', true);
  UPDATE public.profiles SET onboarding_completed_at = now() WHERE user_id = _uid;
  _award := public.award_xp(_bonus, 'onboarding', 'welcome_bonus');
  RETURN jsonb_build_object(
    'awarded', true,
    'xp_awarded', _bonus,
    'completed_at', now(),
    'total_xp_after', (_award->>'xp_after')::integer,
    'level_after', _award->>'level_after'
  );
END $function$;
