import { motion } from 'framer-motion';
import type { CECRLevel } from '@/data/demo-courses';

interface ZigzagPathProps {
  modulesCount: number;
  level: CECRLevel;
}

const LEVEL_COLORS: Record<string, string> = {
  A1: 'hsl(var(--cia-blue-400))',
  A2: 'hsl(var(--cia-gold-400))',
  B1: 'hsl(var(--cia-gold-500))',
  B2: 'hsl(var(--cia-blue-500))',
  C1: 'hsl(var(--cia-blue-600))',
  C2: 'hsl(var(--cia-red-500))',
};

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

export function ZigzagPath({ modulesCount, level }: ZigzagPathProps) {
  const reduced = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (modulesCount < 2) return null;

  const pathD = generateZigzagPath(modulesCount);
  const color = LEVEL_COLORS[level] ?? LEVEL_COLORS.A1;
  const viewBoxHeight = Y_START * 2 + (modulesCount - 1) * Y_STEP;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 100 ${viewBoxHeight}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d={pathD}
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="6 8"
        fill="none"
        opacity="0.6"
        initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={reduced ? {} : { pathLength: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}
