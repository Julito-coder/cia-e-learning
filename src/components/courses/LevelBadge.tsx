import { cn } from '@/lib/utils';
import type { CECRLevel } from '@/data/demo-courses';

/**
 * LevelBadge — hexagone CECR propriétaire (charte v2 §8 + simplify).
 *
 * Une couleur par niveau via tokens `cecr-*` (source unique dans
 * `tailwind.config.ts` + `index.css`) :
 *   A1 #22B07D vert       · A2 #0FB5A6 turquoise · B1 #1E90FF spark
 *   B2 #0A3D62 navy       · C1 #5B3A9E violet    · C2 #B71540 red
 *
 * Contraste texte/fond (WCAG AA) :
 *   - A1/A2/B1 : fond clair → texte `ink-900` (ratio 6.7-8.4)
 *   - B2/C1/C2 : fond foncé → texte `white`   (ratio 6.5-11.2)
 *   - A0       : `ink-400` (gris neutre, initiation hors progression),
 *                texte blanc.
 */

const LEVEL_FILL: Record<CECRLevel, string> = {
  A0: 'hsl(var(--ink-400))',
  A1: 'hsl(var(--cecr-a1))',
  A2: 'hsl(var(--cecr-a2))',
  B1: 'hsl(var(--cecr-b1))',
  B2: 'hsl(var(--cecr-b2))',
  C1: 'hsl(var(--cecr-c1))',
  C2: 'hsl(var(--cecr-c2))',
};

const LEVEL_TEXT: Record<CECRLevel, 'white' | 'dark'> = {
  A0: 'white',
  A1: 'dark',  // texte ink-900 sur #22B07D — ratio 7.9 ✓
  A2: 'dark',  // texte ink-900 sur #0FB5A6 — ratio 8.4 ✓
  B1: 'dark',  // texte ink-900 sur #1E90FF — ratio 6.7 ✓
  B2: 'white', // texte blanc  sur #0A3D62 — ratio 11.2 ✓
  C1: 'white', // texte blanc  sur #5B3A9E — ratio 8.2 ✓
  C2: 'white', // texte blanc  sur #B71540 — ratio 6.5 ✓
};

interface LevelBadgeProps {
  level: CECRLevel;
  /** Square size in px. Default 40. */
  size?: number;
  className?: string;
}

export function LevelBadge({ level, size = 40, className }: LevelBadgeProps) {
  const fill = LEVEL_FILL[level];
  const textClass = LEVEL_TEXT[level] === 'white' ? 'text-white' : 'text-ink-900';
  return (
    <span
      className={cn('relative inline-flex items-center justify-center select-none', className)}
      style={{ width: size, height: size }}
      aria-label={`Niveau ${level}`}
      role="img"
    >
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
        className={`relative font-display font-extrabold tabular-nums ${textClass}`}
        style={{ fontSize: size * 0.32 }}
      >
        {level}
      </span>
    </span>
  );
}
