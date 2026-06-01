import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Spark } from '@/components/spark/Spark';

interface Props {
  firstName?: string | null;
  streak?: number;
  isFirstTime?: boolean;
}

export function DashboardHero({ firstName, streak = 0, isFirstTime = false }: Props) {
  const { t } = useTranslation();
  const displayName = firstName?.trim() || t('dashboard.hero.fallback_name');

  const subtitle = (() => {
    if (isFirstTime) return t('dashboard.hero.subtitle_first');
    if (streak >= 3) return t('dashboard.hero.subtitle_streak', { count: streak });
    return t('dashboard.hero.subtitle_default');
  })();

  return (
    <section className="relative overflow-hidden rounded-3xl bg-g-mistral border border-border/30 p-6 md:p-10">
      {/* Decorative glow behind Spark, hidden from a11y */}
      <div
        className="absolute -top-12 -right-16 w-64 h-64 rounded-full bg-cia-gold-300/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative grid grid-cols-1 md:grid-cols-[1.4fr_1fr] items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-[11px] uppercase tracking-wider text-cia-blue-500 mb-2">
            {t('dashboard.hero.tag')}
          </p>
          <h1 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-cia-blue-900 dark:text-foreground leading-tight">
            {t('dashboard.hero.greeting', { name: displayName })} <span aria-hidden="true">👋</span>
          </h1>
          <p className="mt-3 text-base md:text-lg text-ink-600 dark:text-muted-foreground max-w-xl">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', damping: 14, stiffness: 180, delay: 0.15 }}
          className="flex justify-center md:justify-end"
        >
          <div className="hidden md:block">
            <Spark mood="encouraging" size={140} embers />
          </div>
          <div className="md:hidden">
            <Spark mood="encouraging" size={96} embers />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
