import { motion } from 'framer-motion';
import type { CECRLevel } from '@/data/demo-courses';

interface CurriculumPathProps {
  /** Nombre de modules dans la section (détermine le nombre de demi-ondes) */
  modulesCount: number;
  /** Niveau CECR pour la palette de couleurs du gradient */
  level: CECRLevel;
  /** Custom className pour positionnement par le parent */
  className?: string;
}

const LEVEL_PATH_COLORS: Record<string, { start: string; end: string }> = {
  A1: { start: 'hsl(var(--cia-blue-500))',  end: 'hsl(var(--cia-blue-400))' },
  A2: { start: 'hsl(var(--cia-blue-400))',  end: 'hsl(var(--cia-gold-400))' },
  B1: { start: 'hsl(var(--cia-gold-400))',  end: 'hsl(var(--cia-gold-500))' },
  B2: { start: 'hsl(var(--cia-gold-500))',  end: 'hsl(var(--cia-blue-500))' },
  C1: { start: 'hsl(var(--cia-blue-500))',  end: 'hsl(var(--cia-red-500))' },
  C2: { start: 'hsl(var(--cia-red-500))',   end: 'hsl(var(--cia-gold-400))' },
};

function generateSinusoidalPath(modulesCount: number): string {
  if (modulesCount < 2) return '';

  const width = 1000;
  const centerY = 120;
  const amplitude = 80;
  const segmentWidth = width / (modulesCount - 1);

  let path = `M 0 ${centerY}`;

  for (let i = 1; i < modulesCount; i++) {
    const endX = i * segmentWidth;
    const endY = centerY;
    const cpX = (i - 0.5) * segmentWidth;
    const cpY = i % 2 === 1 ? centerY - amplitude : centerY + amplitude;
    path += ` Q ${cpX} ${cpY}, ${endX} ${endY}`;
  }

  return path;
}

function generateStationPoints(modulesCount: number): Array<{ x: number; y: number }> {
  const width = 1000;
  const centerY = 120;
  if (modulesCount < 1) return [];
  if (modulesCount === 1) return [{ x: width / 2, y: centerY }];
  const segmentWidth = width / (modulesCount - 1);
  return Array.from({ length: modulesCount }, (_, i) => ({
    x: i * segmentWidth,
    y: centerY,
  }));
}

export function CurriculumPath({ modulesCount, level, className = '' }: CurriculumPathProps) {
  const reduced = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (modulesCount < 2) return null;

  const pathD = generateSinusoidalPath(modulesCount);
  const stations = generateStationPoints(modulesCount);
  const colors = LEVEL_PATH_COLORS[level] ?? LEVEL_PATH_COLORS.A1;
  const gradientId = `curriculum-path-grad-${level}`;
  const glowId = `glow-${level}`;

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox="0 0 1000 240"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor={colors.start} stopOpacity="0.6" />
          <stop offset="100%" stopColor={colors.end}   stopOpacity="0.6" />
        </linearGradient>

        <filter id={glowId} x="-10%" y="-50%" width="120%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.path
        d={pathD}
        stroke={`url(#${gradientId})`}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        filter={`url(#${glowId})`}
        initial={reduced ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        whileInView={reduced ? {} : { pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{
          pathLength: { duration: 2.4, ease: [0.16, 1, 0.3, 1] },
          opacity:    { duration: 0.3 },
        }}
      />

      {stations.map((point, i) => (
        <motion.g key={i}>
          <motion.circle
            cx={point.x}
            cy={point.y}
            r="12"
            fill={colors.end}
            opacity="0.15"
            initial={reduced ? { scale: 1, opacity: 0.15 } : { scale: 0, opacity: 0 }}
            whileInView={reduced ? {} : { scale: 1, opacity: 0.15 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: 1.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.circle
            cx={point.x}
            cy={point.y}
            r="5"
            fill={colors.end}
            initial={reduced ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            whileInView={reduced ? {} : { scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.35, delay: 1.55 + i * 0.15, type: 'spring', damping: 12, stiffness: 220 }}
            style={{ filter: `drop-shadow(0 0 4px ${colors.end})` }}
          />
        </motion.g>
      ))}
    </svg>
  );
}
