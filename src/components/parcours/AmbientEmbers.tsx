import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useIsVisible } from '@/hooks/useIsVisible';

interface AmbientEmbersProps {
  /** Nombre de braises actives simultanément. Capé à 6 pour la perf. */
  count?: number;
  /** Hauteur de la zone d'émission en px. */
  height?: number;
}

/**
 * Braises bleu clair (#7CC3FF) qui montent en ambiance, autour de la zone
 * d'émission. Réutilise la teinte charte `cia-spark-ember`.
 *
 * Performance :
 * - Cap dur à 6 braises (charte « cap strict »).
 * - Pause hors viewport via `useIsVisible` (IntersectionObserver).
 * - Uniquement `transform` + `opacity` (GPU).
 * - Désactivé sous `prefers-reduced-motion: reduce`.
 */
export function AmbientEmbers({ count = 4, height = 220 }: AmbientEmbersProps) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useIsVisible(ref, { rootMargin: '200px' });
  const reduced = useReducedMotion();
  const safeCount = Math.min(count, 6);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute pointer-events-none"
      style={{ height, width: 90, willChange: 'transform' }}
    >
      {Array.from({ length: safeCount }, (_, i) => {
        const xOffset = (i / Math.max(1, safeCount - 1)) * 60 + 10;
        const size = 3 + (i % 2) * 2;
        const duration = 5 + (i % 3) * 1.5;
        const delay = (i / safeCount) * duration;

        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-cia-spark-ember"
            style={{
              left: xOffset,
              bottom: 0,
              width: size,
              height: size,
              filter: 'blur(0.5px)',
              willChange: 'transform, opacity',
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={
              reduced || !visible
                ? { y: 0, opacity: 0 }
                : {
                    y: -height * 0.95,
                    opacity: [0, 0.65, 0.5, 0],
                  }
            }
            transition={
              reduced || !visible
                ? { duration: 0 }
                : {
                    duration,
                    delay,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }
            }
          />
        );
      })}
    </div>
  );
}
