import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, User, BookOpen, Heart, Globe, Flame, GraduationCap, ClipboardCheck, Home, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/useAuth';
import { useUserProgress } from '@/hooks/useUserProgress';
import { supabase } from '@/integrations/supabase/client';

const languages = [
  { code: 'fr', label: '🇫🇷 Français' },
  { code: 'en', label: '🇬🇧 English' },
  { code: 'es', label: '🇪🇸 Español' },
  { code: 'de', label: '🇩🇪 Deutsch' },
  { code: 'it', label: '🇮🇹 Italiano' },
  { code: 'ru', label: '🇷🇺 Русский' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { user, signOut } = useAuth();
  const { totalXP, cecrLevel } = useUserProgress();
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!user) { setAvatarUrl(null); return; }
    supabase.from('profiles').select('avatar_url').eq('user_id', user.id).maybeSingle()
      .then(({ data }) => { if (data?.avatar_url) setAvatarUrl(data.avatar_url); });
  }, [user]);

  const navItems = [
    { label: t('nav.home'), href: '/', icon: Home },
    { label: t('nav.catalogue'), href: '/catalogue', icon: BookOpen },
    { label: t('nav.test'), href: '/test-niveau', icon: ClipboardCheck },
    { label: t('nav.favorites'), href: '/favoris', icon: Heart },
    { label: t('nav.glossary'), href: '/glossaire', icon: GraduationCap },
  ];

  const changeLang = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b-2 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 relative overflow-hidden">
        {/* CIA logo watermark background */}
        <img
          src="/cia-logo-2.jpg"
          alt=""
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-20 opacity-[0.06] pointer-events-none select-none"
          aria-hidden="true"
        />
        <div className="container relative flex h-16 items-center justify-between gap-2">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <img src="/cia-logo-2.jpg" alt="CIA" className="h-9" style={{ mixBlendMode: 'multiply' }} />
            <div className="hidden sm:block">
              <p className="font-display text-sm leading-tight text-primary">CIA</p>
              <p className="text-[10px] text-muted-foreground font-semibold">E-Learning</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const active = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                    active
                      ? 'bg-primary text-primary-foreground scale-105'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1.5">
            {/* Gamification stats */}
            <div className="hidden lg:flex items-center gap-1.5">
              <div className="stat-bubble bg-cia-streak/15 text-cia-streak">
                <Flame className="h-3.5 w-3.5" />
                <span className="text-xs">{cecrLevel}</span>
              </div>
              <div className="stat-bubble bg-cia-xp/15 text-cia-xp">
                <span className="text-xs">⚡ {totalXP}</span>
              </div>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground rounded-xl h-9 w-9">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-xl">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLang(lang.code)}
                    className={`rounded-lg ${i18n.language === lang.code ? 'bg-muted font-bold' : ''}`}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {user ? (
              <div className="flex items-center gap-2">
                <Link to="/connexion">
                  {avatarUrl ? (
                    <img src={avatarUrl} alt="Avatar" className="h-8 w-8 rounded-full object-cover border-2 border-primary/30" />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary border-2 border-primary/30">
                      {user.email?.[0]?.toUpperCase() || '?'}
                    </div>
                  )}
                </Link>
                <Button variant="ghost" size="icon" className="hidden sm:flex rounded-xl h-9 w-9 text-muted-foreground" onClick={signOut}>
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Link to="/connexion">
                <Button size="sm" className="hidden sm:flex gap-2 btn-duo rounded-xl text-xs font-bold">
                  <User className="h-3.5 w-3.5" />
                  {t('nav.login')}
                </Button>
              </Link>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-card p-4 animate-slide-up relative">
            <div className="flex gap-2 mb-4 pb-4 border-b">
              <div className="stat-bubble bg-cia-streak/15 text-cia-streak text-xs">
                <Flame className="h-3.5 w-3.5" /> {cecrLevel}
              </div>
              <div className="stat-bubble bg-cia-xp/15 text-cia-xp text-xs">
                ⚡ {totalXP} XP
              </div>
            </div>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold transition-all ${
                    location.pathname === item.href
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-muted'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              ))}
              {user ? (
                <button
                  onClick={() => { signOut(); setMobileMenuOpen(false); }}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-muted-foreground hover:bg-muted mt-2 border-t pt-4"
                >
                  <LogOut className="h-5 w-5" />
                  Déconnexion
                </button>
              ) : (
                <Link
                  to="/connexion"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-muted-foreground hover:bg-muted mt-2 border-t pt-4"
                >
                  <User className="h-5 w-5" />
                  {t('nav.login')}
                </Link>
              )}
            </nav>
          </div>
        )}
      </header>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t-2 bg-card/95 backdrop-blur safe-bottom">
        <div className="flex justify-around py-1.5">
          {navItems.slice(0, 5).map((item) => {
            const active = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg text-[10px] font-bold transition-all ${
                  active ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                <item.icon className={`h-5 w-5 ${active ? 'text-primary' : ''}`} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
