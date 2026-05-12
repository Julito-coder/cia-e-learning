import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Flame, Crown } from 'lucide-react';

interface StreakFlameProps {
  streak: number;
  /** Si true, la flamme pop au mount + à chaque incrément. Default true. */
  animateOnChange?: boolean;
  /** Override de la taille de base. Default = auto selon palier. */
  sizeOverride?: number;
}

interface FlameTier {
  size: number;
  color: string;
  fill: string;
  glow: string;
  hasAnimation: boolean;
  hasCrown: boolean;
  hasGradient: boolean;
}

function getTier(streak: number): FlameTier {
  if (streak >= 100) {
    return {
      size: 20,
      color: 'text-orange-500',
      fill: 'url(#streakGoldGradient)',
      glow: 'drop-shadow-[0_0_8px_rgba(255,215,0,0.7)]',
      hasAnimation: true,
      hasCrown: true,
      hasGradient: true,
    };
  }
  if (streak >= 30) {
    return {
      size: 20,
      color: 'text-red-500',
      fill: 'currentColor',
      glow: 'drop-shadow-[0_0_6px_rgba(239,68,68,0.6)]',
      hasAnimation: true,
      hasCrown: false,
      hasGradient: false,
    };
  }
  if (streak >= 14) {
    return {
      size: 18,
      color: 'text-orange-500',
      fill: 'currentColor',
      glow: 'drop-shadow-[0_0_5px_rgba(249,115,22,0.55)]',
      hasAnimation: true,
      hasCrown: false,
      hasGradient: false,
    };
  }
  if (streak >= 7) {
    return {
      size: 16,
      color: 'text-orange-500',
      fill: 'currentColor',
      glow: 'drop-shadow-[0_0_4px_rgba(249,115,22,0.4)]',
      hasAnimation: true,
      hasCrown: false,
      hasGradient: false,
    };
  }
  if (streak >= 3) {
    return {
      size: 14,
      color: 'text-orange-500',
      fill: 'currentColor',
      glow: '',
      hasAnimation: true,
      hasCrown: false,
      hasGradient: false,
    };
  }
  // 0-2 : flamme inactive grise
  return {
    size: 14,
    color: 'text-muted-foreground',
    fill: 'none',
    glow: '',
    hasAnimation: false,
    hasCrown: false,
    hasGradient: false,
  };
}

export function StreakFlame({ streak, animateOnChange = true, sizeOverride }: StreakFlameProps) {
  const tier = getTier(streak);
  const size = sizeOverride ?? tier.size;
  const reduced = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const controls = useAnimation();
  const prevStreakRef = useRef<number | null>(null);

  useEffect(() => {
    if (!animateOnChange) return;
    if (prevStreakRef.current !== null && streak > prevStreakRef.current && !reduced) {
      controls.start({
        scale: [1, 1.4, 1],
        rotate: [0, -8, 8, 0],
        transition: { duration: 0.55, ease: [0.34, 1.56, 0.64, 1] },
      });
    }
    prevStreakRef.current = streak;
  }, [streak, animateOnChange, controls, reduced]);

  return (
    <span className="relative inline-flex items-center justify-center">
      {tier.hasCrown && (
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <Crown
            className="text-cia-gold-400 drop-shadow-[0_0_4px_rgba(204,174,98,0.8)]"
            style={{ width: size * 0.55, height: size * 0.55 }}
            fill="currentColor"
          />
        </span>
      )}

      <motion.span animate={controls} className="inline-flex">
        {tier.hasGradient && (
          <svg width="0" height="0" className="absolute" aria-hidden="true">
            <defs>
              <linearGradient id="streakGoldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stopColor="#FFD700" />
                <stop offset="50%"  stopColor="#FFA500" />
                <stop offset="100%" stopColor="#FF4500" />
              </linearGradient>
            </defs>
          </svg>
        )}

        <Flame
          className={`${tier.color} ${tier.glow} ${tier.hasAnimation && !reduced ? 'animate-streak-flame' : ''}`}
          style={{ width: size, height: size }}
          fill={tier.fill}
          strokeWidth={tier.fill === 'none' ? 2 : 1.5}
        />
      </motion.span>
    </span>
  );
}
