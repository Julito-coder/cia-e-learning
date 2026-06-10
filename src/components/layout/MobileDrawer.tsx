import { BookOpen, Map, Trophy, Flame, Heart, Book, User, LogOut, ClipboardCheck, Home, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { UserIndicators } from './UserIndicators';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useAuth } from '@/hooks/useAuth';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

interface NavItem {
  to: string;
  icon: LucideIcon;
  key: string;
  onboard?: string;
}

const NAV_ITEMS: NavItem[] = [
  { to: '/',             icon: Home,           key: 'nav.home' },
  { to: '/catalogue',    icon: BookOpen,       key: 'nav.catalogue',       onboard: 'nav-catalogue' },
  { to: '/programme',    icon: Map,            key: 'nav.curriculum',      onboard: 'nav-programme' },
  { to: '/classement',   icon: Trophy,         key: 'nav.leaderboard',     onboard: 'nav-classement' },
  { to: '/defi-du-jour', icon: Flame,          key: 'nav.daily_challenge', onboard: 'nav-daily' },
  { to: '/test-niveau',  icon: ClipboardCheck, key: 'nav.test' },
];

const SECONDARY_ITEMS = [
  { to: '/profil',    icon: User, key: 'nav.profile' },
  { to: '/favoris',   icon: Heart, key: 'nav.favorites' },
  { to: '/glossaire', icon: Book,  key: 'nav.glossary' },
];

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const { t } = useTranslation();
  const { user, signOut } = useAuth();

  return (
    <Sheet open={open} onOpenChange={(v) => { if (!v) onClose(); }}>
      <SheetContent
        side="left"
        className="w-[85%] max-w-sm p-0 flex flex-col gap-0"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-border/40">
              <div className="flex items-center gap-2">
                <img src="/picto.png" alt="Centre International d'Antibes — E-Learning" className="h-12 w-auto" loading="lazy" decoding="async" />
              </div>
            </div>

            {user && (
              <div className="px-5 py-4 border-b border-border/40">
                <UserIndicators align="horizontal" />
              </div>
            )}

            <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
              {NAV_ITEMS.map(({ to, icon: Icon, key, onboard }) => (
                <Link
                  key={to}
                  to={to}
                  data-onboard={onboard}
                  onClick={onClose}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-foreground hover:bg-muted transition-colors"
                >
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  {t(key)}
                </Link>
              ))}

              <Separator className="my-3" />

              {SECONDARY_ITEMS.map(({ to, icon: Icon, key }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={onClose}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-muted-foreground hover:bg-muted transition-colors"
                >
                  <Icon className="h-5 w-5" />
                  {t(key)}
                </Link>
              ))}

              <Separator className="my-3" />

              <div className="px-3">
                <LanguageSwitcher compact={false} />
              </div>
            </nav>

            <div className="px-5 py-4 border-t border-border/40">
              {user ? (
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 font-bold"
                  onClick={async () => { await signOut(); onClose(); }}
                >
                  <LogOut className="h-5 w-5" />
                  {t('nav.logout')}
                </Button>
              ) : (
                <Link to="/connexion" onClick={onClose}>
                  <Button className="w-full gap-2 btn-duo rounded-xl font-bold">
                    <User className="h-4 w-4" />
                    {t('nav.login')}
                  </Button>
                </Link>
              )}
            </div>
      </SheetContent>
    </Sheet>
  );
}
