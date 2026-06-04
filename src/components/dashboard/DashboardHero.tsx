import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Spark } from '@/components/spark/Spark';

interface Props {
  firstName?: string | null;
  streak?: number;
  isFirstTime?: boolean;
}

/**
 * Premium spring used for the hero reveal sequence.
 * Eyebrow → h1 → sub → Spark (with gentle overshoot), all staggered 70ms.
 */
const SPRING = { type: 'spring' as const, stiffness: 260, damping: 26 };
const SPRING_BOUNCE = { type: 'spring' as const, stiffness: 220, damping: 18 };

export function DashboardHero({ firstName, streak = 0, isFirstTime = false }: Props) {
  const { t } = useTranslation();
  const reduced = useReducedMotion();
  const displayName = firstName?.trim() || t('dashboard.hero.fallback_name');

  const subtitle = (() => {
    if (isFirstTime) return t('dashboard.hero.subtitle_first');
    if (streak >= 3) return t('dashboard.hero.subtitle_streak', { count: streak });
    return t('dashboard.hero.subtitle_default');
  })();

  const item = reduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: SPRING } };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduced ? 0 : 0.07 } },
      }}
      className="relative overflow-hidden rounded-3xl bg-card border border-ink-100 dark:border-ink-700/40 shadow-elev-lg p-8 md:p-12 lg:p-14"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr] items-center gap-8 md:gap-10">
        {/* Left — eyebrow + h1 + sub */}
        <div className="space-y-5">
          <motion.p
            variants={item}
            className="font-mono text-[11px] uppercase tracking-[.2em] text-cia-blue-500"
          >
            {t('dashboard.hero.tag')}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-cia-blue-900 dark:text-foreground tracking-[-0.02em] leading-[1.05]"
          >
            {t('dashboard.hero.greeting', { name: displayName })}{' '}
            <span aria-hidden="true">👋</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-base md:text-lg text-ink-600 dark:text-muted-foreground max-w-xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Right — Spark Lottie v2 inside its blue halo (charte v2 §2) */}
        <motion.div
          variants={
            reduced
              ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
              : {
                  hidden: { opacity: 0, scale: 0.85 },
                  visible: { opacity: 1, scale: 1, transition: SPRING_BOUNCE },
                }
          }
          className="relative flex justify-center md:justify-end items-center"
        >
          {/* Extended blue halo behind Spark — pulses subtly.
              Composes with Spark's internal halo to widen the glow on the hero. */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 -m-10 md:-m-14 rounded-full bg-g-spark opacity-50 blur-2xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: reduced ? 0.4 : 0.5 }}
            transition={{ delay: reduced ? 0 : 0.45, duration: 0.6 }}
          >
            {!reduced && (
              <motion.div
                className="absolute inset-0 rounded-full bg-g-spark"
                animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.85, 0.6] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
          </motion.div>

          <div className="relative hidden md:block">
            <Spark mood="encouraging" size={220} embers />
          </div>
          <div className="relative md:hidden">
            <Spark mood="encouraging" size={160} embers />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
