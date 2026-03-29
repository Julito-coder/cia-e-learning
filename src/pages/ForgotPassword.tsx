import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reinitialiser-mot-de-passe`,
    });
    if (error) {
      toast.error(error.message);
    } else {
      setSent(true);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 animate-fade-in">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src="/cia-logo-2.jpg" alt="CIA" className="h-16 mx-auto rounded mb-4" />
          <h1 className="font-display text-2xl font-bold text-primary">Mot de passe oublié</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Entrez votre adresse email pour recevoir un lien de réinitialisation
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            {sent ? (
              <div className="text-center space-y-4 py-4">
                <CheckCircle className="h-12 w-12 text-cia-success mx-auto" />
                <h2 className="text-lg font-semibold text-foreground">Email envoyé !</h2>
                <p className="text-sm text-muted-foreground">
                  Si un compte existe avec l'adresse <strong>{email}</strong>, vous recevrez un lien de réinitialisation dans quelques minutes.
                </p>
                <p className="text-xs text-muted-foreground">Pensez à vérifier vos spams.</p>
                <Link to="/connexion">
                  <Button variant="outline" className="w-full mt-4">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Retour à la connexion
                  </Button>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Adresse email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={loading}>
                  {loading ? 'Envoi en cours...' : 'Envoyer le lien'}
                </Button>

                <Link to="/connexion" className="block text-center text-sm text-accent hover:underline">
                  <ArrowLeft className="inline h-3 w-3 mr-1" />
                  Retour à la connexion
                </Link>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
