import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';
import { useUserProgress } from '@/hooks/useUserProgress';
import { AvatarUpload } from '@/components/profile/AvatarUpload';
import { Progress } from '@/components/ui/progress';
import { supabase } from '@/integrations/supabase/client';
import { getEarnedBadges } from '@/hooks/useModuleUnlock';
import { toast } from 'sonner';

export default function Connexion() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const { signIn, signUp, user, isAdmin, signOut } = useAuth();
  const { totalXP, cecrLevel, xpProgress } = useUserProgress();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    supabase.from('profiles').select('avatar_url').eq('user_id', user.id).maybeSingle()
      .then(({ data }) => { if (data?.avatar_url) setAvatarUrl(data.avatar_url); });
  }, [user]);

  const earnedBadges = getEarnedBadges();

  if (user) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 animate-fade-in">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 space-y-6">
            <div className="flex flex-col items-center gap-3">
              <AvatarUpload currentUrl={avatarUrl} onUploaded={setAvatarUrl} size={96} />
              <p className="text-lg font-medium">{user.email}</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-bold">Niveau {cecrLevel}</span>
                <span className="text-muted-foreground">{totalXP} XP</span>
              </div>
              <Progress value={xpProgress.progress} className="h-3" />
              <p className="text-xs text-muted-foreground text-center">
                {xpProgress.current} / {xpProgress.needed} XP vers le niveau suivant
              </p>
            </div>

            {/* Earned badges */}
            {earnedBadges.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-bold">🏅 Badges obtenus ({earnedBadges.length})</p>
                <div className="flex flex-wrap gap-2">
                  {earnedBadges.map(b => (
                    <div key={b.moduleId} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold">
                      <span>{b.badgeEmoji}</span>
                      <span>{b.badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {isAdmin && (
              <Link to="/admin">
                <Button className="w-full">Accéder au back-office</Button>
              </Link>
            )}
            <Link to="/">
              <Button variant="outline" className="w-full">Retour à la plateforme</Button>
            </Link>
            <Button variant="ghost" className="w-full text-destructive" onClick={signOut}>
              Déconnexion
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (isLogin) {
      const { error } = await signIn(email, password);
      if (error) toast.error(error.message);
      else { toast.success('Connexion réussie'); navigate('/'); }
    } else {
      const { error } = await signUp(email, password, { first_name: firstName, last_name: lastName });
      if (error) toast.error(error.message);
      else {
        toast.success('Bienvenue ! On démarre ton aventure 🇫🇷');
        navigate('/?welcome=1');
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 animate-fade-in">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src="/cia-logo-2.jpg" alt="CIA" className="h-16 mx-auto rounded mb-4" />
          <h1 className="font-display text-2xl font-bold text-primary">
            {isLogin ? 'Bienvenue !' : 'Créer un compte'}
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            {isLogin ? 'Connectez-vous pour accéder à vos cours' : 'Rejoignez la plateforme e-learning du CIA'}
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Marie" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Dupont" />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="votre@email.com" className="pl-10" required />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Mot de passe</Label>
                  {isLogin && (
                    <Link to="/mot-de-passe-oublie" className="text-xs text-accent hover:underline">Mot de passe oublié ?</Link>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="password" type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="pl-10 pr-10" required minLength={6} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? 'Chargement...' : isLogin ? 'Se connecter' : "S'inscrire"}
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                {isLogin ? (
                  <>Pas encore de compte ? <button type="button" onClick={() => setIsLogin(false)} className="text-accent hover:underline font-medium">S'inscrire</button></>
                ) : (
                  <>Déjà un compte ? <button type="button" onClick={() => setIsLogin(true)} className="text-accent hover:underline font-medium">Se connecter</button></>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
