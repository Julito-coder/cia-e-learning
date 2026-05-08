import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
type Level = typeof LEVELS[number];

export function CECRJourney() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [hovered, setHovered] = useState<Level | null>(null);

  return (
    <section ref={ref} className="py-20 lg:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight">{t('landing.cecr.title')}</h2>
          <p className="mt-3 text-lg text-muted-foreground">{t('landing.cecr.subtitle')}</p>
        </div>

        {/* Desktop : ligne horizontale */}
        <div className="hidden md:block relative">
          <svg className="absolute left-0 right-0 top-7 w-full h-1" viewBox="0 0 1000 4" preserveAspectRatio="none">
            <defs>
              <linearGradient id="pathGradient" x1="0%" x2="100%">
                <stop offset="0%" stopColor="hsl(var(--cia-blue-500))" />
                <stop offset="100%" stopColor="hsl(var(--cia-gold))" />
              </linearGradient>
            </defs>
            <motion.line
              x1="0" y1="2" x2="1000" y2="2"
              stroke="url(#pathGradient)" strokeWidth="3" strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>

          <div className="relative grid grid-cols-6 gap-4">
            {LEVELS.map((level, i) => (
              <motion.button
                key={level}
                onMouseEnter={() => setHovered(level)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(level)}
                onBlur={() => setHovered(null)}
                className="relative flex flex-col items-center group focus:outline-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <div className="h-14 w-14 rounded-full bg-card border-2 border-cia-blue-500/40 shadow-sm flex items-center justify-center font-display text-base text-cia-blue-700 group-hover:border-cia-gold group-hover:scale-110 transition-all">
                  {level}
                </div>
                <p className="mt-3 text-sm font-bold text-foreground">{t(`landing.cecr.${level.toLowerCase()}_label`)}</p>
                {hovered === level && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-2 w-56 px-3 py-2 rounded-xl bg-card border border-border/60 shadow-lg z-10"
                  >
                    <p className="text-xs text-muted-foreground leading-relaxed">{t(`landing.cecr.${level.toLowerCase()}_desc`)}</p>
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Mobile : timeline verticale */}
        <div className="md:hidden space-y-6 relative">
          <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cia-blue-500 to-cia-gold" />
          {LEVELS.map((level, i) => (
            <motion.div
              key={level}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="relative flex gap-4 items-start"
            >
              <div className="relative h-14 w-14 shrink-0 rounded-full bg-card border-2 border-cia-blue-500/40 shadow-sm flex items-center justify-center font-display text-base text-cia-blue-700 z-10">
                {level}
              </div>
              <div className="pt-1.5">
                <p className="font-bold text-foreground">{t(`landing.cecr.${level.toLowerCase()}_label`)}</p>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{t(`landing.cecr.${level.toLowerCase()}_desc`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
