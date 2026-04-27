-- 1. Add columns to profiles
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS league text NOT NULL DEFAULT 'bronze',
  ADD COLUMN IF NOT EXISTS weekly_xp integer NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS weekly_period_start date;

-- 2. League history table
CREATE TABLE IF NOT EXISTS public.league_history (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  week_start date NOT NULL,
  league_before text NOT NULL,
  league_after text NOT NULL,
  final_rank integer NOT NULL,
  weekly_xp_total integer NOT NULL DEFAULT 0,
  outcome text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.league_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own league history"
  ON public.league_history FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage league history"
  ON public.league_history FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE INDEX IF NOT EXISTS idx_league_history_user ON public.league_history(user_id, week_start DESC);
CREATE INDEX IF NOT EXISTS idx_profiles_league_weekly_xp ON public.profiles(league, weekly_xp DESC);

-- 3. Helper: ISO Monday for a given date (Europe/Paris)
CREATE OR REPLACE FUNCTION public.current_week_monday()
RETURNS date
LANGUAGE sql
STABLE
SET search_path = public
AS $$
  SELECT (date_trunc('week', (now() AT TIME ZONE 'Europe/Paris'))::date);
$$;

-- 4. add_weekly_xp: atomic increment + lazy weekly reset
CREATE OR REPLACE FUNCTION public.add_weekly_xp(_user_id uuid, _amount integer)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _monday date := public.current_week_monday();
  _current_period date;
BEGIN
  SELECT weekly_period_start INTO _current_period
  FROM public.profiles
  WHERE user_id = _user_id;

  IF _current_period IS NULL OR _current_period < _monday THEN
    UPDATE public.profiles
       SET weekly_xp = GREATEST(_amount, 0),
           weekly_period_start = _monday
     WHERE user_id = _user_id;
  ELSE
    UPDATE public.profiles
       SET weekly_xp = GREATEST(weekly_xp + _amount, 0)
     WHERE user_id = _user_id;
  END IF;
END;
$$;