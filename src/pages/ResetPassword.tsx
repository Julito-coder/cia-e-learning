import { useState, useEffect, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff, CheckCircle, Loader2, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { AuthShell } from '@/components/auth/AuthShell';
import { PasswordStrength } from '@/components/auth/PasswordStrength';
import { resetSchema } from '@/lib/validators/auth';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [isValidSession, setIsValidSession] = useState(false);
  const [checking, setChecking] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        setIsValidSession(true);
        setChecking(false);
      }
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) setIsValidSession(true);
      setChecking(false);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!success) return;
    if (countdown <= 0) {
      navigate('/connexion');
      return;
    }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [success, countdown, navigate]);

  const matchesState =
    !confirmPassword ? null : password === confirmPassword ? 'match' : 'mismatch';

  const canSubmit =
    password.length >= 6 && password === confirmPassword && !loading;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = resetSchema.safeParse({ password, confirmPassword });
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    if (error) toast.error(error.message);
    else setSuccess(true);
    setLoading(false);
  };

  if (checking) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!isValidSession) {
    return (
      <AuthShell title="Lien invalide" subtitle="Ce lien de réinitialisation n'est plus valide.">
        <Card className="border-border/60 shadow-xl rounded-2xl">
          <CardContent className="p-6 text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Veuillez demander un nouveau lien pour réinitialiser votre mot de passe.
            </p>
            <Button onClick={() => navigate('/mot-de-passe-oublie')} className="w-full">
              Demander un nouveau lien
            </Button>
          </CardContent>
        </Card>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      title="Nouveau mot de passe"
      subtitle="Choisissez un nouveau mot de passe sécurisé"
    >
      <Card className="border-border/60 shadow-xl rounded-2xl">
        <CardContent className="p-6">
          <AnimatePresence mode="wait" initial={false}>
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-4 py-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="mx-auto h-16 w-16 rounded-full bg-cia-success/10 flex items-center justify-center"
                >
                  <CheckCircle className="h-8 w-8 text-cia-success" />
                </motion.div>
                <h2 className="text-lg font-semibold text-foreground">
                  Mot de passe modifié !
                </h2>
                <p className="text-sm text-muted-foreground">
                  Redirection dans {countdown}…
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="space-y-1.5">
                  <Label htmlFor="password">Nouveau mot de passe</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="pl-10 pr-10"
                      autoComplete="new-password"
                      required
                      minLength={6}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      aria-label={showPassword ? 'Masquer' : 'Afficher'}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  <PasswordStrength value={password} />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type={showPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      className="pl-10"
                      autoComplete="new-password"
                      required
                      minLength={6}
                      aria-invalid={matchesState === 'mismatch'}
                    />
                  </div>
                  {matchesState === 'match' && (
                    <p className="text-[11px] text-cia-success flex items-center gap-1">
                      <Check className="h-3 w-3" /> Les mots de passe correspondent
                    </p>
                  )}
                  {matchesState === 'mismatch' && (
                    <p className="text-[11px] text-destructive flex items-center gap-1">
                      <X className="h-3 w-3" /> Les mots de passe ne correspondent pas
                    </p>
                  )}
                </div>

                <motion.div whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={!canSubmit}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Modification…
                      </>
                    ) : (
                      'Modifier le mot de passe'
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </AuthShell>
  );
}