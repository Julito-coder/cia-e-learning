import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Sparkles, Flame, Crown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { staggerContainer, staggerItem } from '@/lib/animations';

function CountUp({ to, duration = 2 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v).toLocaleString('fr-FR'));

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, to, { duration, ease: [0.16, 1, 0.3, 1] });
      return () => controls.stop();
    }
  }, [inView, motionValue, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function GamificationShowcase() {
  const { t } = useTranslation();
  return (
    <section className="py-20 lg:py-24 bg-cia-blue-900 text-white">
      <div className="container">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-center mb-14 tracking-tight">
          {t('landing.gamification.title')}
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* XP */}
          <motion.div variants={staggerItem} className="rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur">
            <div className="h-12 w-12 rounded-2xl bg-xp/20 text-xp flex items-center justify-center mb-5">
              <Sparkles className="h-6 w-6" />
            </div>
            <p className="font-display text-4xl mb-1">
              <CountUp to={1250} /> <span className="text-base text-white/60 font-sans">XP</span>
            </p>
            <h3 className="font-display text-lg mt-4">{t('landing.gamification.xp_title')}</h3>
            <p className="text-sm text-white/70 mt-2 leading-relaxed">{t('landing.gamification.xp_desc')}</p>
          </motion.div>

          {/* Daily */}
          <motion.div variants={staggerItem} className="rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur">
            <div className="h-12 w-12 rounded-2xl bg-streak/20 text-streak flex items-center justify-center mb-5">
              <Flame className="h-6 w-6 animate-streak-flame" />
            </div>
            <p className="font-display text-4xl mb-1">
              <CountUp to={42} /> <span className="text-base text-white/60 font-sans">jours</span>
            </p>
            <h3 className="font-display text-lg mt-4">{t('landing.gamification.daily_title')}</h3>
            <p className="text-sm text-white/70 mt-2 leading-relaxed">{t('landing.gamification.daily_desc')}</p>
          </motion.div>

          {/* League */}
          <motion.div variants={staggerItem} className="rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur">
            <div className="h-12 w-12 rounded-2xl bg-cia-gold/20 text-cia-gold flex items-center justify-center mb-5">
              <Crown className="h-6 w-6" />
            </div>
            <p className="font-display text-4xl mb-1 text-cia-gold">Ligue Or</p>
            <h3 className="font-display text-lg mt-4">{t('landing.gamification.league_title')}</h3>
            <p className="text-sm text-white/70 mt-2 leading-relaxed">{t('landing.gamification.league_desc')}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
