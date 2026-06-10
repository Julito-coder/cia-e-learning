
-- Add Stripe columns to subscriptions
ALTER TABLE public.subscriptions
  ADD COLUMN IF NOT EXISTS stripe_subscription_id TEXT,
  ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT,
  ADD COLUMN IF NOT EXISTS price_id TEXT,
  ADD COLUMN IF NOT EXISTS product_id TEXT,
  ADD COLUMN IF NOT EXISTS current_period_start TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS current_period_end TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS cancel_at_period_end BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS environment TEXT NOT NULL DEFAULT 'sandbox';

-- Loosen status check to support full Stripe statuses
ALTER TABLE public.subscriptions DROP CONSTRAINT IF EXISTS subscriptions_status_check;
ALTER TABLE public.subscriptions ADD CONSTRAINT subscriptions_status_check
  CHECK (status = ANY (ARRAY['active','trialing','past_due','canceled','cancelled','incomplete','incomplete_expired','unpaid','paused','expired']));

CREATE UNIQUE INDEX IF NOT EXISTS subscriptions_stripe_sub_unique
  ON public.subscriptions (stripe_subscription_id) WHERE stripe_subscription_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS subscriptions_user_env_idx
  ON public.subscriptions (user_id, environment);

GRANT ALL ON public.subscriptions TO service_role;

-- Service role policy so the payments-webhook edge function can write
DROP POLICY IF EXISTS "Service role can manage subscriptions" ON public.subscriptions;
CREATE POLICY "Service role can manage subscriptions"
  ON public.subscriptions FOR ALL
  TO service_role
  USING (true) WITH CHECK (true);

-- Add phone column to profiles if missing
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS phone TEXT;
