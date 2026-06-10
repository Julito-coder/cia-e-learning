
-- 1) Switch leaderboard view to security_invoker so RLS applies as the calling user
DROP VIEW IF EXISTS public.leaderboard;
CREATE VIEW public.leaderboard
WITH (security_invoker = true, security_barrier = true)
AS
SELECT user_id, first_name, last_name, avatar_url, total_xp, weekly_xp,
       daily_streak, cecr_level, league
FROM public.profiles
WHERE is_active = true;
GRANT SELECT ON public.leaderboard TO authenticated;

-- 2) Allow authenticated users to SELECT active profile rows (needed for view + leaderboard queries),
--    but restrict columns via column-level GRANTs (email/phone/nationality stay private).
CREATE POLICY "Authenticated can view active profiles"
  ON public.profiles
  FOR SELECT TO authenticated
  USING (is_active = true);

REVOKE SELECT ON public.profiles FROM anon, authenticated;
GRANT SELECT
  (id, user_id, first_name, last_name, avatar_url, cecr_level,
   interface_language, is_cia_student, created_at, updated_at,
   total_xp, daily_streak, last_daily_completed_at, league,
   weekly_xp, weekly_period_start, placement_test_taken_at,
   onboarding_completed_at, is_active)
  ON public.profiles TO authenticated;

-- 3) SECURITY DEFINER RPC for own full profile (returns email/phone/nationality)
CREATE OR REPLACE FUNCTION public.get_my_profile()
RETURNS public.profiles
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT * FROM public.profiles WHERE user_id = auth.uid()
$$;
REVOKE EXECUTE ON FUNCTION public.get_my_profile() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_my_profile() TO authenticated;

-- 4) SECURITY DEFINER RPC for admins to list full profiles
CREATE OR REPLACE FUNCTION public.admin_list_profiles(_level text DEFAULT NULL)
RETURNS SETOF public.profiles
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'forbidden';
  END IF;
  RETURN QUERY
    SELECT * FROM public.profiles
    WHERE _level IS NULL OR cecr_level = _level
    ORDER BY created_at DESC;
END $$;
REVOKE EXECUTE ON FUNCTION public.admin_list_profiles(text) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.admin_list_profiles(text) TO authenticated;
