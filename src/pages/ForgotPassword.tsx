import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, MailCheck, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { AuthShell } from '@/components/auth/AuthShell';
import { emailSchema } from '@/lib/validators/auth';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (loading || sent) return;
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }
    setError(null);
    setLoading(true);
    const { error: err } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reinitialiser-mot-de-passe`,
    });
    if (err) toast.error(err.message);
    else setSent(true);
    setLoading(false);
  };

  return (
    <AuthShell
      title="Mot de passe oublié"
      subtitle="Entrez votre adresse email pour recevoir un lien de réinitialisation"
    >
      <Card className="border-border/60 shadow-xl rounded-2xl">
        <CardContent className="p-6">
          <AnimatePresence mode="wait" initial={false}>
            {sent ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center space-y-4 py-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="mx-auto h-16 w-16 rounded-full bg-cia-success/10 flex items-center justify-center"
                >
                  <MailCheck className="h-8 w-8 text-cia-success" />
                </motion.div>
                <h2 className="text-lg font-semibold text-foreground">Email envoyé !</h2>
                <p className="text-sm text-muted-foreground">
                  Si un compte existe avec l'adresse <strong>{email}</strong>, vous
                  recevrez un lien de réinitialisation dans quelques minutes.
                </p>
                <p className="text-xs text-muted-foreground">
                  Pensez à vérifier vos spams.
                </p>
                <Link to="/connexion">
                  <Button variant="outline" className="w-full mt-2">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Retour à la connexion
                  </Button>
                </Link>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="space-y-1.5">
                  <Label htmlFor="email">Adresse email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError(null);
                      }}
                      placeholder="votre@email.com"
                      className="pl-10"
                      autoComplete="email"
                      required
                      aria-invalid={!!error}
                    />
                  </div>
                  {error && <p className="text-[11px] text-destructive">{error}</p>}
                </div>

                <motion.div whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={loading || !email}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Envoi en cours…
                      </>
                    ) : (
                      'Envoyer le lien'
                    )}
                  </Button>
                </motion.div>

                <Link
                  to="/connexion"
                  className="block text-center text-sm text-accent hover:underline"
                >
                  <ArrowLeft className="inline h-3 w-3 mr-1" />
                  Retour à la connexion
                </Link>
              </motion.form>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </AuthShell>
  );
}