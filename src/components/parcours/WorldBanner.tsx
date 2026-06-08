import { AnimatePresence, motion } from 'framer-motion';
import { WORLD_AMBIANCE } from '@/lib/parcoursUniverses';
import type { CECRLevel } from '@/data/demo-courses';

interface WorldBannerProps {
  /** Niveau du monde à annoncer. Si `null`, le banner est démonté. */
  level: CECRLevel | null;
}

/**
 * Panneau de bienvenue d'univers (Bloc 4) — déclenché par la transition
 * d'unité. Glisse depuis le haut, reste visible ~1.5 s, fond out smooth.
 *
 * Sobre, fond blanc charte + bordure ink-100, palette typo standard.
 * Pointer-events-none → ne bloque jamais l'interaction.
 */
export function WorldBanner({ level }: WorldBannerProps) {
  return (
    <AnimatePresence>
      {level && (
        <motion.div
          key={level}
          className="fixed top-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          initial={{ opacity: 0, y: -16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{
            opacity: { duration: 0.5, ease: 'easeOut' },
            y: { type: 'spring', stiffness: 220, damping: 24 },
            scale: { type: 'spring', stiffness: 220, damping: 24 },
          }}
        >
          <div className="bg-card/95 backdrop-blur-md border border-ink-100 rounded-2xl px-6 py-3 shadow-elev-lg text-center">
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground">
              Bienvenue dans
            </p>
            <p className="font-display font-extrabold text-base sm:text-lg text-foreground tracking-[-0.01em]">
              {WORLD_AMBIANCE[level]?.label ?? level}
              <span className="ml-2 text-cia-blue-500 text-sm font-mono">· {level}</span>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
