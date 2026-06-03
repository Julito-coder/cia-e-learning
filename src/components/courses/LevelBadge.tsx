import { cn } from '@/lib/utils';
import type { CECRLevel } from '@/data/demo-courses';

/**
 * LevelBadge — hexagone CECR propriétaire (charte v2 §8).
 * Couleurs progressives :
 *   A1 / A2 → success-500 (vert)
 *   B1 / B2 → cia-blue-500 (bleu CIA)
 *   C1      → cia-blue-700 (bleu profond)
 *   C2      → cia-red-500 (rouge — sommet)
 *   A0      → ink-400 (gris neutre, initiation hors progression)
 */

const LEVEL_FILL: Record<CECRLevel, string> = {
  A0: 'hsl(var(--ink-400))',
  A1: 'hsl(var(--success-500))',
  A2: 'hsl(var(--success-500))',
  B1: 'hsl(var(--cia-blue-500))',
  B2: 'hsl(var(--cia-blue-500))',
  C1: 'hsl(var(--cia-blue-700))',
  C2: 'hsl(var(--cia-red-500))',
};

interface LevelBadgeProps {
  level: CECRLevel;
  /** Square size in px. Default 40. */
  size?: number;
  className?: string;
}

export function LevelBadge({ level, size = 40, className }: LevelBadgeProps) {
  const fill = LEVEL_FILL[level];
  return (
    <span
      className={cn('relative inline-flex items-center justify-center select-none', className)}
      style={{ width: size, height: size }}
      aria-label={`Niveau ${level}`}
      role="img"
    >
      {/* Hexagone propriétaire — viewBox 100×100, hex orientation pointy-top */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full drop-shadow-[0_2px_4px_hsl(var(--cia-blue-500)/0.2)]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <polygon
          points="50,4 92,27 92,73 50,96 8,73 8,27"
          fill={fill}
          stroke="white"
          strokeWidth="2"
        />
      </svg>
      <span
        className="relative font-display font-extrabold text-white tabular-nums"
        style={{ fontSize: size * 0.32 }}
      >
        {level}
      </span>
    </span>
  );
}
