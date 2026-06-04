import { motion, useReducedMotion } from 'framer-motion';

interface ZigzagPathProps {
  modulesCount: number;
  /** Number of completed modules — drives the solid fill ratio
   *  on top of the dashed track. Default 0. */
  completedCount?: number;
}

const X_LEFT  = 22;
const X_RIGHT = 78;
const Y_STEP  = 100;
const Y_START = 50;

function generateZigzagPath(modulesCount: number): string {
  if (modulesCount < 2) return '';

  const positions = Array.from({ length: modulesCount }, (_, i) => ({
    x: i % 2 === 0 ? X_LEFT : X_RIGHT,
    y: Y_START + i * Y_STEP,
  }));

  let path = `M ${positions[0].x} ${positions[0].y}`;
  for (let i = 1; i < positions.length; i++) {
    const prev = positions[i - 1];
    const curr = positions[i];
    const cp1x = prev.x;
    const cp1y = prev.y + Y_STEP * 0.5;
    const cp2x = curr.x;
    const cp2y = curr.y - Y_STEP * 0.5;
    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
  }
  return path;
}

/**
 * Charte v2 §8 / §13.2 — chemin pointillé du curriculum.
 * Stroke `cia-blue-500` à 35 % d'opacité, `stroke-dasharray: 2 12`,
 * `linecap: round`. Se dessine au scroll (whileInView) sur 2.4 s ease-out-expo.
 *
 * Un second tracé en **plein** se superpose pour matérialiser les segments
 * déjà parcourus (modules completed), avec `pathLength = completedCount /
 * (modulesCount - 1)` animé via spring quand le compteur change.
 */
export function ZigzagPath({ modulesCount, completedCount = 0 }: ZigzagPathProps) {
  const reduced = useReducedMotion();
  if (modulesCount < 2) return null;

  const pathD = generateZigzagPath(modulesCount);
  const viewBoxHeight = Y_START * 2 + (modulesCount - 1) * Y_STEP;
  const fillRatio = Math.min(1, Math.max(0, completedCount / (modulesCount - 1)));

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 100 ${viewBoxHeight}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Tracé pointillé global (charte v2 §8 « stroke-dasharray: 2 12 ») */}
      <motion.path
        d={pathD}
        stroke="hsl(var(--cia-blue-500))"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="2 12"
        fill="none"
        opacity="0.35"
        initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={reduced ? {} : { pathLength: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
      />
      {/* Tracé plein qui remplit la portion déjà parcourue */}
      <motion.path
        d={pathD}
        stroke="hsl(var(--cia-blue-500))"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: fillRatio }}
        transition={
          reduced
            ? { duration: 0 }
            : { type: 'spring', stiffness: 90, damping: 20, delay: 0.2 }
        }
      />
    </svg>
  );
}
