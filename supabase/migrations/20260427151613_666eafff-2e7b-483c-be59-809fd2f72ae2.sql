CREATE POLICY "Authenticated users can view leaderboard data"
ON public.profiles
FOR SELECT
TO authenticated
USING (is_active = true);