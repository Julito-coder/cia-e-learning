import { motion, useReducedMotion } from 'framer-motion';
import { Lock } from 'lucide-react';

export type ChestState = 'locked' | 'openable' | 'opened';

interface XPChestNodeProps {
  state: ChestState;
  onClick?: () => void;
  /** Récompense XP — affichée seulement en `openable`. */
  xpReward?: number;
}

/**
 * XPChestNode — coffre XP intercalé entre certains modules (palier bonus).
 *
 * SVG inline 64×64, flat éditorial, palette charte :
 *   - Box du coffre : `cia-blue-600/700` (verrouillé) ou `cia-blue-500` (ouvrable).
 *   - Bandeaux : `cia-blue-800` (verrouillé) ou `cia-blue-700` (ouvrable).
 *   - Serrure : **micro-gradient `g-sun`** uniquement quand `openable`
 *     (charte v2 §3 : or autorisé en micro-gradient).
 *   - État `opened` : couvercle légèrement écarté + glow doux.
 *
 * L'animation d'ouverture (= séquence complétion) sera orchestrée en
 * Batch B ; ici, on pose les états statiques + le pop d'apparition.
 */
export function XPChestNode({ state, onClick, xpReward }: XPChestNodeProps) {
  const reduced = useReducedMotion();
  const isLocked = state === 'locked';
  const isOpened = state === 'opened';
  const interactive = !isLocked;

  const boxFill =
    state === 'opened' ? 'hsl(var(--cia-blue-500))'
    : state === 'openable' ? 'hsl(var(--cia-blue-500))'
    : 'hsl(var(--cia-blue-700))';
  const bandFill =
    state === 'opened' ? 'hsl(var(--cia-blue-700))'
    : state === 'openable' ? 'hsl(var(--cia-blue-700))'
    : 'hsl(var(--cia-blue-800))';

  return (
    <div className="relative inline-flex flex-col items-center gap-2">
      {state === 'openable' && !reduced && (
        <motion.span
          aria-hidden="true"
          className="absolute -inset-2 rounded-full bg-cia-gold-300/30 pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.15, 0.4] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      <motion.button
        onClick={interactive ? onClick : undefined}
        disabled={!interactive}
        whileHover={!reduced && interactive ? { y: -3, scale: 1.05 } : undefined}
        whileTap={!reduced && interactive ? { scale: 0.92 } : undefined}
        transition={{ type: 'spring', damping: 15, stiffness: 400 }}
        className={`
          relative z-10 h-16 w-16 sm:h-[72px] sm:w-[72px] rounded-2xl
          flex items-center justify-center
          ${isLocked ? 'cursor-not-allowed' : 'cursor-pointer'}
          ${isOpened ? 'shadow-elev-lg' : 'shadow-md'}
          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cia-gold-300/40
        `}
        aria-label={
          isLocked ? 'Coffre verrouillé'
          : isOpened ? 'Coffre ouvert'
          : `Coffre XP ouvrable, +${xpReward ?? 50} XP`
        }
        aria-disabled={isLocked}
      >
        {/* SVG flat — coffre tilted slightly when opened */}
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ filter: isLocked ? 'grayscale(0.7)' : undefined, opacity: isLocked ? 0.7 : 1 }}
        >
          <defs>
            <linearGradient id={`chest-lock-grad-${state}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"  stopColor="hsl(45 100% 83%)" />
              <stop offset="60%" stopColor="hsl(var(--cia-gold-300))" />
              <stop offset="100%" stopColor="hsl(var(--cia-gold-500))" />
            </linearGradient>
          </defs>
          {/* Corps du coffre */}
          <rect x="8" y="22" width="40" height="24" rx="4" fill={boxFill} />
          {/* Bandeau métal vertical */}
          <rect x="26" y="22" width="4" height="24" fill={bandFill} />
          {/* Couvercle (légèrement décalé si opened) */}
          <g transform={isOpened ? 'translate(0, -3) rotate(-6, 28, 18)' : ''}>
            <path
              d="M 8 22 Q 8 12 16 12 L 40 12 Q 48 12 48 22 Z"
              fill={bandFill}
            />
            {/* Serrure / fermoir — micro-gradient or charte (jamais aplat) */}
            <circle cx="28" cy="22" r="4.5" fill={`url(#chest-lock-grad-${state})`} />
            <circle cx="28" cy="22" r="1.8" fill="hsl(var(--cia-blue-900))" />
          </g>
        </svg>

        {isLocked && (
          <Lock className="absolute h-4 w-4 text-white/90" />
        )}
      </motion.button>

      <span className="text-[10px] font-mono uppercase tracking-[.15em] text-cia-gold-700 dark:text-cia-gold-400 font-bold">
        {isLocked ? '— —' : isOpened ? 'OUVERT' : `+${xpReward ?? 50} XP`}
      </span>
    </div>
  );
}
