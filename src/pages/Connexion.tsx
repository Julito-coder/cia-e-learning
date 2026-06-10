import { useState, useEffect, FormEvent } from 'react';
import { lovable } from '@/integrations/lovable/index';
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

import { toast } from 'sonner';
import { AuthShell } from '@/components/auth/AuthShell';
import { AuthTabs } from '@/components/auth/AuthTabs';
import { PasswordStrength } from '@/components/auth/PasswordStrength';
import { signInSchema, signUpSchema } from '@/lib/validators/auth';

type Tab = 'login' | 'signup';

const INTERESTED_PLAN_LS_KEY = 'cia-interested-plan';
type InterestedPlan = 'premium' | 'school' | 'cia';
const VALID_PLANS: InterestedPlan[] = ['premium', 'school', 'cia'];


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

  const handleOAuthSignIn = async (provider: 'google' | 'apple') => {
    const result = await lovable.auth.signInWithOAuth(provider, {
      redirect_uri: `${window.location.origin}${redirectTo}`,
    });
    if (result.error) {
      toast.error(result.error.message || `Erreur de connexion ${provider}`);
    }
    // redirected = browser handles the redirect flow
  };

  return (
    <AuthShell
      title={isLogin ? t('auth.welcomeTitle') : t('auth.createAccount')}
      subtitle={isLogin ? t('auth.loginSubtitle') : t('auth.signupSubtitle')}
    >
      <Card className="border-border/60 shadow-xl rounded-2xl">
        <CardContent className="p-6 space-y-4">
          <AuthTabs value={tab} onChange={switchTab} />


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
