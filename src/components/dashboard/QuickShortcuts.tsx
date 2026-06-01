import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ClipboardCheck, Trophy, User, BookOpen, type LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ShortcutDef {
  to: string;
  icon: LucideIcon;
  labelKey: string;
  descKey: string;
}

const SHORTCUTS: ShortcutDef[] = [
  { to: '/test-niveau',  icon: ClipboardCheck, labelKey: 'dashboard.shortcuts.placement.label', descKey: 'dashboard.shortcuts.placement.desc' },
  { to: '/classement',   icon: Trophy,         labelKey: 'dashboard.shortcuts.leaderboard.label', descKey: 'dashboard.shortcuts.leaderboard.desc' },
  { to: '/profil',       icon: User,           labelKey: 'dashboard.shortcuts.profile.label', descKey: 'dashboard.shortcuts.profile.desc' },
  { to: '/glossaire',    icon: BookOpen,       labelKey: 'dashboard.shortcuts.glossary.label', descKey: 'dashboard.shortcuts.glossary.desc' },
];

export function QuickShortcuts() {
  const { t } = useTranslation();
  return (
    <section className="rounded-3xl bg-ink-50 dark:bg-card/40 p-5 md:p-7">
      <h2 className="font-display font-bold text-lg md:text-xl mb-4">
        {t('dashboard.shortcuts.title')}
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {SHORTCUTS.map(({ to, icon: Icon, labelKey, descKey }, i) => (
          <motion.div
            key={to}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.04 * i }}
          >
            <Link to={to} className="block group">
              <Card interactive className="p-4 h-full flex flex-col gap-2">
                <div className="h-10 w-10 rounded-xl bg-cia-blue-50 dark:bg-cia-blue-900/30 flex items-center justify-center text-cia-blue-700 dark:text-cia-blue-300 transition-colors group-hover:bg-cia-blue-100 dark:group-hover:bg-cia-blue-800/40">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-display font-bold text-sm">{t(labelKey)}</p>
                <p className="text-[11px] text-muted-foreground leading-snug">{t(descKey)}</p>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
