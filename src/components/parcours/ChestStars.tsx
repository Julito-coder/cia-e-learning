import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

interface ChestStarsProps {
  /** Cap dur à 20 (perf). */
  count?: number;
}

interface StarParticle {
  id: number;
  angle: number;
  distance: number;
  delay: number;
  size: number;
  /** 0 = or (gradient), 1 = spark (bleu clair), 2 = blanc. */
  palette: 0 | 1 | 2;
  rotation: number;
}

function buildParticles(count: number): StarParticle[] {
  return Array.from({ length: count }, (_, i) => {
    const baseAngle = (i / count) * Math.PI * 2;
    return {
      id: i,
      angle: baseAngle + (Math.random() - 0.5) * 0.5,
      distance: 45 + Math.random() * 35,
      delay: i * 20 + Math.random() * 60,
      size: 8 + Math.random() * 8,
      palette: (i % 3) as 0 | 1 | 2,
      rotation: (Math.random() - 0.5) * 360,
    };
  });
}

/**
 * Sparkles / étoiles jaillissantes pour l'ouverture du coffre XP (Bloc 4).
 *
 * Cap 20 (`Math.min(count, 20)`), `transform`/`opacity` only,
 * désactivé sous `useReducedMotion`. Auto-cleanup via durée finie.
 *
 * Palette charte stricte :
 *   - or (via gradient SVG g-sun)
 *   - cia-spark-mid (#1E90FF)
 *   - blanc
 */
export function ChestStars({ count = 15 }: ChestStarsProps) {
  const reduced = useReducedMotion();
  const safeCount = Math.min(count, 20);
  const particles = useMemo(() => buildParticles(safeCount), [safeCount]);

  if (reduced) return null;

  return (
    <div
      className="absolute inset-0 pointer-events-none flex items-center justify-center"
      aria-hidden="true"
      style={{ willChange: 'transform' }}
    >
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient id="chest-star-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(45 100% 83%)" />
            <stop offset="60%" stopColor="hsl(var(--cia-gold-300))" />
            <stop offset="100%" stopColor="hsl(var(--cia-gold-500))" />
          </linearGradient>
        </defs>
      </svg>
      {particles.map((p) => {
        const dx = Math.cos(p.angle) * p.distance;
        // y trajectory : arc up then down (gravity)
        const peakY = Math.sin(p.angle - Math.PI / 2) * p.distance * 0.6;
        const finalY = peakY + p.distance * 0.7;
        const fill =
          p.palette === 0 ? 'url(#chest-star-gold)'
          : p.palette === 1 ? 'hsl(var(--cia-spark-mid))'
          : 'white';

        return (
          <motion.svg
            key={p.id}
            viewBox="0 0 24 24"
            width={p.size}
            height={p.size}
            className="absolute"
            initial={{ x: 0, y: 0, opacity: 0, scale: 0, rotate: 0 }}
            animate={{
              x: [0, dx * 0.6, dx],
              y: [0, peakY, finalY],
              opacity: [0, 1, 1, 0],
              scale: [0, 1.1, 1, 0.6],
              rotate: [0, p.rotation * 0.5, p.rotation],
            }}
            transition={{
              duration: 1.1,
              delay: p.delay / 1000,
              times: [0, 0.2, 0.7, 1],
              ease: [0.18, 0.7, 0.32, 1],
            }}
            style={{
              filter: p.palette === 2
                ? 'drop-shadow(0 0 4px hsl(var(--cia-spark-mid) / 0.6))'
                : undefined,
              willChange: 'transform, opacity',
            }}
          >
            <polygon
              points="12,2 14,10 22,10 16,14 18,22 12,17 6,22 8,14 2,10 10,10"
              fill={fill}
            />
          </motion.svg>
        );
      })}
    </div>
  );
}
