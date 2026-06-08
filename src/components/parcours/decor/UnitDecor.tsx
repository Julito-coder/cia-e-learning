import { motion } from 'framer-motion';
import type { ComponentType } from 'react';
import { useParallaxY } from '@/hooks/useParallaxY';
import { DecorSail } from './DecorSail';
import { DecorSun } from './DecorSun';
import { DecorPalm } from './DecorPalm';
import { DecorWaves } from './DecorWaves';
import { DecorRamparts } from './DecorRamparts';
import { DecorParasol } from './DecorParasol';
import type { CECRLevel } from '@/data/demo-courses';

/**
 * UnitDecor — habille les gouttières latérales du Parcours avec des
 * motifs SVG flat Côte d'Azur, palette charte CIA. Aucun asset externe.
 *
 * Charte v2 anti-cheap : opacité 8-14 %, derrière les nœuds (z-0), avec
 * parallax léger (0.3-0.5×) pour la profondeur sans gadget.
 *
 * Le décor est **dérivé du niveau** : chaque section CECR a sa palette
 * thématique. Le décor est purement décoratif → `aria-hidden`.
 */

interface UnitDecorProps {
  level: CECRLevel;
  /** Hauteur disponible pour le décor (= hauteur de la spline). */
  height: number;
}

interface Placement {
  Decor: ComponentType<{ size?: number }>;
  side: 'left' | 'right';
  /** Position verticale en % de la hauteur de la section. */
  top: number;
  size: number;
  /** Multiplicateur parallax (strength). */
  parallax: number;
  /** Opacité finale (charte 0.08-0.16). */
  opacity: number;
}

const A1_DECOR: Placement[] = [
  { Decor: DecorSun,    side: 'right', top: 10, size: 84, parallax: -0.20, opacity: 0.14 },
  { Decor: DecorWaves,  side: 'left',  top: 65, size: 96, parallax: -0.30, opacity: 0.12 },
  { Decor: DecorSail,   side: 'right', top: 85, size: 64, parallax: -0.40, opacity: 0.12 },
];

const A2_DECOR: Placement[] = [
  { Decor: DecorPalm,   side: 'left',  top:  8, size: 88, parallax: -0.25, opacity: 0.13 },
  { Decor: DecorWaves,  side: 'right', top: 45, size: 100, parallax: -0.30, opacity: 0.10 },
  { Decor: DecorPalm,   side: 'right', top: 78, size: 72, parallax: -0.45, opacity: 0.11 },
];

const B1_DECOR: Placement[] = [
  { Decor: DecorRamparts, side: 'left',  top: 12, size: 100, parallax: -0.22, opacity: 0.14 },
  { Decor: DecorSun,      side: 'right', top: 48, size: 72,  parallax: -0.35, opacity: 0.12 },
  { Decor: DecorRamparts, side: 'right', top: 80, size: 80,  parallax: -0.40, opacity: 0.10 },
];

const B2_DECOR: Placement[] = [
  { Decor: DecorParasol, side: 'right', top: 14, size: 80, parallax: -0.22, opacity: 0.14 },
  { Decor: DecorSail,    side: 'left',  top: 50, size: 88, parallax: -0.35, opacity: 0.12 },
  { Decor: DecorWaves,   side: 'right', top: 82, size: 96, parallax: -0.45, opacity: 0.10 },
];

const C1_DECOR: Placement[] = [
  { Decor: DecorRamparts, side: 'right', top: 10, size: 92, parallax: -0.22, opacity: 0.13 },
  { Decor: DecorPalm,     side: 'left',  top: 45, size: 80, parallax: -0.35, opacity: 0.12 },
  { Decor: DecorSail,     side: 'right', top: 78, size: 64, parallax: -0.45, opacity: 0.11 },
];

const C2_DECOR: Placement[] = [
  { Decor: DecorSun,     side: 'left',  top: 12, size: 92,  parallax: -0.22, opacity: 0.16 },
  { Decor: DecorWaves,   side: 'right', top: 50, size: 100, parallax: -0.35, opacity: 0.12 },
  { Decor: DecorParasol, side: 'left',  top: 82, size: 80,  parallax: -0.45, opacity: 0.14 },
];

const DECOR_BY_LEVEL: Record<CECRLevel, Placement[]> = {
  A0: A1_DECOR, // fallback
  A1: A1_DECOR,
  A2: A2_DECOR,
  B1: B1_DECOR,
  B2: B2_DECOR,
  C1: C1_DECOR,
  C2: C2_DECOR,
};

function DecorItem({ placement, height }: { placement: Placement; height: number }) {
  const y = useParallaxY(placement.parallax);
  const sideStyle =
    placement.side === 'left'
      ? { left: '-1rem' }
      : { right: '-1rem' };
  return (
    <motion.div
      aria-hidden="true"
      className="absolute pointer-events-none"
      style={{
        ...sideStyle,
        top: `${(placement.top / 100) * height}px`,
        opacity: placement.opacity,
        y,
        // Force le compositing GPU (perf)
        willChange: 'transform',
      }}
    >
      <placement.Decor size={placement.size} />
    </motion.div>
  );
}

export function UnitDecor({ level, height }: UnitDecorProps) {
  const placements = DECOR_BY_LEVEL[level] ?? A1_DECOR;
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
      // z-0 : sous la spline et les nœuds
      style={{ zIndex: 0 }}
    >
      {placements.map((p, i) => (
        <DecorItem key={i} placement={p} height={height} />
      ))}
    </div>
  );
}
