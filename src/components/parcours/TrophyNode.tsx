import { motion, useReducedMotion } from 'framer-motion';
import { Lock } from 'lucide-react';
import type { CECRLevel } from '@/data/demo-courses';

export type TrophyState = 'locked' | 'unlocked';

interface TrophyNodeProps {
  state: TrophyState;
  level: CECRLevel;
  onClick?: () => void;
}

/**
 * TrophyNode — marqueur de fin d'unité (palier d'unité).
 *
 * Hexagone propriétaire (rappel `LevelBadge` charte v2 §8) avec étoile
 * centrale en `g-shine` (or via gradient charte). Verrouillé tant que
 * l'unité n'est pas entièrement complétée.
 *
 * SVG inline 88×88 (un cran plus grand que ModuleNode pour signaler la
 * récompense majeure). Anim d'unlock = Batch B ; ici, états statiques.
 */
export function TrophyNode({ state, level, onClick }: TrophyNodeProps) {
  const reduced = useReducedMotion();
  const isLocked = state === 'locked';

  return (
    <div className="relative inline-flex flex-col items-center gap-2">
      {!isLocked && !reduced && (
        <motion.span
          aria-hidden="true"
          className="absolute -inset-2 rounded-full bg-cia-gold-400/30 pointer-events-none"
          animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.15, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      <motion.button
        onClick={!isLocked ? onClick : undefined}
        disabled={isLocked}
        whileHover={!reduced && !isLocked ? { y: -3, scale: 1.06 } : undefined}
        whileTap={!reduced && !isLocked ? { scale: 0.94 } : undefined}
        transition={{ type: 'spring', damping: 15, stiffness: 400 }}
        className={`
          relative z-10 h-20 w-20 sm:h-[88px] sm:w-[88px] flex items-center justify-center
          ${isLocked ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}
          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cia-gold-300/50 rounded-2xl
        `}
        aria-label={`Trophée d'unité ${level} (${isLocked ? 'verrouillé' : 'débloqué'})`}
        aria-disabled={isLocked}
      >
        {/* SVG hexagone + étoile gradient g-shine */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`trophy-shine-${level}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="hsl(var(--cia-gold-500))" />
              <stop offset="50%"  stopColor="hsl(45 100% 83%)" />
              <stop offset="100%" stopColor="hsl(var(--cia-gold-500))" />
            </linearGradient>
            <linearGradient id={`trophy-hex-${level}`} x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--cia-blue-500))" />
              <stop offset="100%" stopColor="hsl(var(--cia-blue-700))" />
            </linearGradient>
          </defs>
          {/* Hexagone propriétaire */}
          <polygon
            points="40,4 72,22 72,58 40,76 8,58 8,22"
            fill={isLocked ? 'hsl(var(--ink-200))' : `url(#trophy-hex-${level})`}
            stroke={isLocked ? 'hsl(var(--ink-300))' : 'white'}
            strokeWidth="2"
          />
          {/* Étoile à 5 branches — gradient g-shine charte */}
          <polygon
            points="40,18 46,34 64,34 50,44 56,60 40,50 24,60 30,44 16,34 34,34"
            fill={isLocked ? 'hsl(var(--ink-400))' : `url(#trophy-shine-${level})`}
            stroke={isLocked ? 'hsl(var(--ink-500))' : 'hsl(var(--cia-gold-600))'}
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>

        {isLocked && (
          <Lock className="absolute h-5 w-5 text-ink-500" />
        )}
      </motion.button>

      <span
        className={`text-[10px] font-mono uppercase tracking-[.15em] font-bold ${
          isLocked ? 'text-ink-400' : 'text-cia-gold-700 dark:text-cia-gold-400'
        }`}
      >
        {isLocked ? 'À DÉBLOQUER' : `TROPHÉE ${level}`}
      </span>
    </div>
  );
}
