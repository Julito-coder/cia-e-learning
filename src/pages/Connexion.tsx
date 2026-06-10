import { useState, useEffect, FormEvent } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Lock, Eye, EyeOff, Loader2, User as UserIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { lovable } from '@/integrations/lovable';
import { toast } from 'sonner';
import { AuthShell } from '@/components/auth/AuthShell';
import { AuthTabs } from '@/components/auth/AuthTabs';
import { PasswordStrength } from '@/components/auth/PasswordStrength';
import { signInSchema, signUpSchema } from '@/lib/validators/auth';

type Tab = 'login' | 'signup';

const INTERESTED_PLAN_LS_KEY = 'cia-interested-plan';
type InterestedPlan = 'premium' | 'school' | 'cia';
const VALID_PLANS: InterestedPlan[] = ['premium', 'school', 'cia'];

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.28-4.74 3.28-8.09Z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"/>
      <path fill="#FBBC05" d="M5.84 14.11A6.62 6.62 0 0 1 5.48 12c0-.73.13-1.44.36-2.11V7.05H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.95l3.66-2.84Z"/>
      <path fill="#EA4335" d="M12 4.75c1.61 0 3.06.55 4.21 1.64l3.15-3.15C17.45 1.47 14.97.5 12 .5A11 11 0 0 0 2.18 7.05l3.66 2.84C6.71 7.28 9.14 4.75 12 4.75Z"/>
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
      <path d="M16.36 12.71c.02-2.4 1.96-3.55 2.05-3.6-1.12-1.63-2.86-1.85-3.48-1.88-1.48-.15-2.89.87-3.65.87-.76 0-1.92-.85-3.16-.83-1.62.02-3.13.94-3.97 2.39-1.69 2.93-.43 7.27 1.22 9.65.81 1.17 1.78 2.48 3.04 2.44 1.22-.05 1.69-.79 3.17-.79 1.48 0 1.9.79 3.18.77 1.32-.02 2.16-1.19 2.96-2.36.93-1.36 1.32-2.69 1.35-2.76-.03-.01-2.59-1-2.61-3.96ZM14.04 5.66c.66-.81 1.11-1.93.99-3.05-.96.04-2.13.64-2.81 1.45-.62.72-1.16 1.87-1.02 2.97 1.07.08 2.18-.55 2.84-1.37Z"/>
    </svg>
  );
}

export default function Connexion() {
  const { t } = useTranslation();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const initialTab: Tab = location.pathname === '/inscription' ? 'signup' : 'login';
  const [tab, setTab] = useState<Tab>(initialTab);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [appleLoading, setAppleLoading] = useState(false);
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();

  // Capture interest in a paid plan when coming from Pricing CTAs.
  // TODO(sprint-4): persist this in `subscriptions.interested_plan` once
  // the BDD migration is done, instead of localStorage.
  useEffect(() => {
    const plan = searchParams.get('plan') ?? searchParams.get('context');
    if (plan && VALID_PLANS.includes(plan as InterestedPlan)) {
      try {
        localStorage.setItem(INTERESTED_PLAN_LS_KEY, plan);
      } catch {
        /* localStorage disabled in private mode — silently ignore */
      }
    }
  }, [searchParams]);

  const redirectTo = searchParams.get('redirect') || '/dashboard';

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    const result = await lovable.auth.signInWithOAuth('google', {
      redirect_uri: `${window.location.origin}${redirectTo}`,
    });
    if (result.error) {
      toast.error(t('auth.googleError', { message: result.error.message ?? String(result.error) }));
      setGoogleLoading(false);
    }
  };

  const handleAppleSignIn = async () => {
    setAppleLoading(true);
    const result = await lovable.auth.signInWithOAuth('apple', {
      redirect_uri: `${window.location.origin}${redirectTo}`,
    });
    if (result.error) {
      toast.error(t('auth.appleError', { message: result.error.message ?? String(result.error) }));
      setAppleLoading(false);
    }
  };

  useEffect(() => {
    if (user) navigate(redirectTo, { replace: true });
  }, [user, navigate, redirectTo]);

  if (user) return null;

  const isLogin = tab === 'login';

  const validate = () => {
    const schema = isLogin ? signInSchema : signUpSchema;
    const payload = isLogin
      ? { email, password }
      : { email, password, firstName, lastName };
    const result = schema.safeParse(payload);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as string;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) toast.error(error.message);
        else {
          toast.success(t('auth.loginSuccess'));
          navigate(redirectTo);
        }
      } else {
        const interestedPlan = (() => {
          try {
            return localStorage.getItem(INTERESTED_PLAN_LS_KEY) ?? undefined;
          } catch {
            return undefined;
          }
        })();
        const { error } = await signUp(email, password, {
          first_name: firstName,
          last_name: lastName,
          ...(interestedPlan ? { interested_plan: interestedPlan } : {}),
        });
        if (error) toast.error(error.message);
        else {
          toast.success(t('auth.signupSuccess'));
          navigate('/dashboard?welcome=1');
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const switchTab = (v: Tab) => {
    setTab(v);
    setErrors({});
  };

  return (
    <AuthShell
      title={isLogin ? t('auth.welcomeTitle') : t('auth.createAccount')}
      subtitle={isLogin ? t('auth.loginSubtitle') : t('auth.signupSubtitle')}
    >
      <Card className="border-border/60 shadow-xl rounded-2xl">
        <CardContent className="p-6 space-y-4">
          <AuthTabs value={tab} onChange={switchTab} />

          {/* SSO — Apple + Google managés par Lovable Cloud. */}
          <div className="space-y-2">
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="w-full gap-2"
              onClick={handleGoogleSignIn}
              disabled={googleLoading || loading}
            >
              {googleLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <GoogleIcon />}
              {t('auth.continueWithGoogle')}
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="w-full gap-2"
              onClick={handleAppleSignIn}
              disabled={appleLoading || loading}
            >
              {appleLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <AppleIcon />}
              {t('auth.continueWithApple')}
            </Button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-card px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {t('auth.orWithEmail')}
              </span>
            </div>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.form
              key={tab}
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0, x: isLogin ? -16 : 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isLogin ? 16 : -16 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              {!isLogin && (
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="firstName">{t('auth.firstName')}</Label>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder={t('auth.firstNamePlaceholder')}
                        className="pl-9"
                        maxLength={50}
                        aria-invalid={!!errors.firstName}
                      />
                    </div>
                    {errors.firstName && (
                      <p className="text-xs text-destructive">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="lastName">{t('auth.lastName')}</Label>
                    <Input
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder={t('auth.lastNamePlaceholder')}
                      maxLength={50}
                      aria-invalid={!!errors.lastName}
                    />
                    {errors.lastName && (
                      <p className="text-xs text-destructive">{errors.lastName}</p>
                    )}
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <Label htmlFor="email">{t('auth.email')}</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('auth.emailPlaceholder')}
                    className="pl-10"
                    autoComplete="email"
                    required
                    aria-invalid={!!errors.email}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">{t('auth.password')}</Label>
                  {isLogin && (
                    <Link
                      to="/mot-de-passe-oublie"
                      className="text-xs text-accent hover:underline"
                    >
                      {t('auth.forgotPassword')}
                    </Link>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                    autoComplete={isLogin ? 'current-password' : 'new-password'}
                    required
                    minLength={isLogin ? undefined : 6}
                    aria-invalid={!!errors.password}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label={showPassword ? t('auth.hide') : t('auth.show')}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-xs text-destructive">{errors.password}</p>
                )}
                {!isLogin && <PasswordStrength value={password} />}
              </div>

              <motion.div whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      {isLogin ? t('auth.signingIn') : t('auth.signingUp')}
                    </>
                  ) : isLogin ? (
                    t('auth.signIn')
                  ) : (
                    t('auth.signUp')
                  )}
                </Button>
              </motion.div>

              {!isLogin && (
                <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
                  {t('auth.legalPrefix')}{' '}
                  {/* TODO(sprint-3): wire /cgu and /confidentialite routes when legal copy is ready */}
                  <a href="/cgu" className="underline hover:text-foreground">{t('auth.legalTerms')}</a>
                  {' '}{t('auth.legalAnd')}{' '}
                  <a href="/confidentialite" className="underline hover:text-foreground">
                    {t('auth.legalPrivacy')}
                  </a>
                  .
                </p>
              )}

              <div className="text-center text-sm text-muted-foreground">
                {isLogin ? (
                  <>
                    {t('auth.noAccountYet')}{' '}
                    <button
                      type="button"
                      onClick={() => switchTab('signup')}
                      className="text-accent hover:underline font-medium"
                    >
                      {t('auth.signUp')}
                    </button>
                  </>
                ) : (
                  <>
                    {t('auth.alreadyAccount')}{' '}
                    <button
                      type="button"
                      onClick={() => switchTab('login')}
                      className="text-accent hover:underline font-medium"
                    >
                      {t('auth.signIn')}
                    </button>
                  </>
                )}
              </div>
            </motion.form>
          </AnimatePresence>
        </CardContent>
      </Card>
    </AuthShell>
  );
}
