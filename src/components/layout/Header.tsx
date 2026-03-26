import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, User, BookOpen, Heart, Globe, Flame, GraduationCap, ClipboardCheck, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'fr', label: '🇫🇷 Français' },
  { code: 'en', label: '🇬🇧 English' },
  { code: 'es', label: '🇪🇸 Español' },
  { code: 'de', label: '🇩🇪 Deutsch' },
  { code: 'it', label: '🇮🇹 Italiano' },
  { code: 'ru', label: '🇷🇺 Русский' },
];

const demoStats = { streak: 5, xp: 1250, gems: 42 };

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

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
      <header className="sticky top-0 z-50 border-b-2 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container flex h-16 items-center justify-between gap-2">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <img src="/cia-logo-2.jpg" alt="CIA" className="h-9 rounded-lg" />
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
                <span className="text-xs">{demoStats.streak}</span>
              </div>
              <div className="stat-bubble bg-cia-xp/15 text-cia-xp">
                <span className="text-xs">⚡ {demoStats.xp}</span>
              </div>
              <div className="stat-bubble bg-cia-gems/15 text-cia-gems">
                <span className="text-xs">💎 {demoStats.gems}</span>
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

            <Link to="/connexion">
              <Button size="sm" className="hidden sm:flex gap-2 btn-duo rounded-xl text-xs font-bold">
                <User className="h-3.5 w-3.5" />
                {t('nav.login')}
              </Button>
            </Link>

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
          <div className="md:hidden border-t bg-card p-4 animate-slide-up">
            <div className="flex gap-2 mb-4 pb-4 border-b">
              <div className="stat-bubble bg-cia-streak/15 text-cia-streak text-xs">
                <Flame className="h-3.5 w-3.5" /> {demoStats.streak}
              </div>
              <div className="stat-bubble bg-cia-xp/15 text-cia-xp text-xs">
                ⚡ {demoStats.xp} XP
              </div>
              <div className="stat-bubble bg-cia-gems/15 text-cia-gems text-xs">
                💎 {demoStats.gems}
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
              <Link
                to="/connexion"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-muted-foreground hover:bg-muted mt-2 border-t pt-4"
              >
                <User className="h-5 w-5" />
                {t('nav.login')}
              </Link>
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
