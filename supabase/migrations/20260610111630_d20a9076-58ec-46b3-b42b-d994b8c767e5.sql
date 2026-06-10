
-- A) Profiles leaderboard PII exposure
DROP POLICY IF EXISTS "Authenticated users can view leaderboard data" ON public.profiles;

DROP VIEW IF EXISTS public.leaderboard;
CREATE VIEW public.leaderboard
WITH (security_invoker = false, security_barrier = true)
AS
SELECT user_id, first_name, last_name, avatar_url, total_xp, weekly_xp,
       daily_streak, cecr_level, league
FROM public.profiles
WHERE is_active = true;

REVOKE ALL ON public.leaderboard FROM PUBLIC;
GRANT SELECT ON public.leaderboard TO authenticated;

-- B) user_roles: explicit admin-only write policies
DROP POLICY IF EXISTS "Admins can manage roles" ON public.user_roles;
CREATE POLICY "Admins can insert roles" ON public.user_roles
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update roles" ON public.user_roles
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete roles" ON public.user_roles
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- C) tts_usage_log: no client writes
REVOKE INSERT, UPDATE, DELETE ON public.tts_usage_log FROM anon, authenticated;

-- D) Move pg_net out of public (drop + recreate in extensions schema)
CREATE SCHEMA IF NOT EXISTS extensions;
GRANT USAGE ON SCHEMA extensions TO postgres, anon, authenticated, service_role;
DROP EXTENSION IF EXISTS pg_net;
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- E) Lock down SECURITY DEFINER functions
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.protect_gameplay_columns() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.add_weekly_xp(uuid, integer) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.rotate_weekly_leagues() FROM PUBLIC, anon, authenticated;

REVOKE EXECUTE ON FUNCTION public.award_xp(integer, text, text) FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.mark_daily_done() FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.mark_onboarding_done() FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.set_cecr_level(text) FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.set_placement_level(text) FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.current_week_monday() FROM PUBLIC, anon;

-- F) Drop broad SELECT policies on public storage buckets (files still served via public URL)
DROP POLICY IF EXISTS "Course media is publicly accessible" ON storage.objects;
DROP POLICY IF EXISTS "Avatar images are publicly accessible" ON storage.objects;
