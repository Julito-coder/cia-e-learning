import { useState, type RefObject } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { Lock } from 'lucide-react';
import { ChestStars } from './ChestStars';
import { XPFlyIndicator } from './XPFlyIndicator';

export type ChestState = 'locked' | 'openable' | 'opened';

interface XPChestNodeProps {
  state: ChestState;
  /** Récompense XP — affichée seulement en `openable`. */
  xpReward?: number;
  /** Ref vers le compteur XP du sub-header — XP fly-to-counter (Bloc 4). */
  xpFlyTargetRef?: RefObject<HTMLElement>;
  /** Callback invoqué à la fin de la séquence d'ouverture (~1.2 s). */
  onOpenComplete?: (xpReward: number) => void;
}

const OPEN_DURATION = 1200;

/**
 * XPChestNode — coffre XP intercalé sur le parcours (palier bonus).
 *
 * Batch B Bloc 4 — ouvrable :
 *   tap (state=openable) → state interne `opening` 1.2 s :
 *     0    – 200 ms : tremblement / anticipation (rotate ±2°)
 *     200  – 600 ms : couvercle pivote (rotate -55°, transformOrigin bas-gauche)
 *     200  – 1100 ms: faisceau de lumière vertical (gradient blanc→spark) qui monte
 *     200  – 1300 ms: étoiles jaillissantes (cap 15, palette or/spark/blanc)
 *     400  – 1300 ms: « +N XP » s'envole vers le compteur header
 *     1200 ms      : callback `onOpenComplete(xpReward)` → parent passe à `opened`
 *
 * Reduced-motion : pas d'animation interne, le tap déclenche directement
 * `onOpenComplete` (le parent fait passer à `opened` immédiatement).
 */
export function XPChestNode({ state, xpReward, xpFlyTargetRef, onOpenComplete }: XPChestNodeProps) {
  const reduced = useReducedMotion();
  const [opening, setOpening] = useState(false);
  const [openOrigin, setOpenOrigin] = useState<{ x: number; y: number } | null>(null);
  const isLocked = state === 'locked';
  const isOpened = state === 'opened' || opening;
  const interactive = state === 'openable' && !opening;

  const boxFill =
    isOpened ? 'hsl(var(--cia-blue-500))'
    : isLocked ? 'hsl(var(--cia-blue-700))'
    : 'hsl(var(--cia-blue-500))';
  const bandFill =
    isOpened ? 'hsl(var(--cia-blue-700))'
    : isLocked ? 'hsl(var(--cia-blue-800))'
    : 'hsl(var(--cia-blue-700))';

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!interactive) return;
    const r = e.currentTarget.getBoundingClientRect();
    setOpenOrigin({ x: r.left + r.width / 2, y: r.top + r.height / 2 });

    if (reduced) {
      // Mode dégradé : pas d'animation, juste le callback.
      onOpenComplete?.(xpReward ?? 0);
      return;
    }

    setOpening(true);
    window.setTimeout(() => {
      setOpening(false);
      onOpenComplete?.(xpReward ?? 0);
    }, OPEN_DURATION);
  };

  return (
    <div className="relative inline-flex flex-col items-center gap-2">
      {/* Halo pulse openable — supprimé pendant `opening` (overlay le remplace) */}
      {state === 'openable' && !opening && !reduced && (
        <motion.span
          aria-hidden="true"
          className="absolute -inset-2 rounded-full bg-cia-gold-300/30 pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.15, 0.4] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      <motion.button
        onClick={handleClick}
        disabled={!interactive}
        whileHover={!reduced && interactive ? { y: -3, scale: 1.05 } : undefined}
        whileTap={!reduced && interactive ? { scale: 0.92 } : undefined}
        animate={
          opening && !reduced
            ? { rotate: [0, -2, 2, -1, 1, 0] }
            : { rotate: 0 }
        }
        transition={
          opening
            ? { duration: 0.4, ease: 'easeInOut' }
            : { type: 'spring', damping: 15, stiffness: 400 }
        }
        className={`
          relative z-10 h-16 w-16 sm:h-[72px] sm:w-[72px] rounded-2xl
          flex items-center justify-center
          ${isLocked ? 'cursor-not-allowed' : interactive ? 'cursor-pointer' : 'cursor-default'}
          ${isOpened ? 'shadow-elev-lg' : 'shadow-md'}
          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cia-gold-300/40
        `}
        aria-label={
          isLocked ? 'Coffre verrouillé'
          : state === 'opened' ? 'Coffre ouvert'
          : opening ? 'Coffre en cours d\'ouverture'
          : `Coffre XP ouvrable, +${xpReward ?? 50} XP`
        }
        aria-disabled={!interactive}
      >
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{
            filter: isLocked ? 'grayscale(0.7)' : undefined,
            opacity: isLocked ? 0.7 : 1,
            overflow: 'visible',
          }}
        >
          <defs>
            <linearGradient id={`chest-lock-grad-${state}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"  stopColor="hsl(45 100% 83%)" />
              <stop offset="60%" stopColor="hsl(var(--cia-gold-300))" />
              <stop offset="100%" stopColor="hsl(var(--cia-gold-500))" />
            </linearGradient>
            <linearGradient id={`chest-beam-grad-${state}`} x1="50%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--cia-spark-mid))" stopOpacity="0.9" />
              <stop offset="60%" stopColor="white" stopOpacity="0.7" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Faisceau de lumière vertical — affiché pendant `opening` */}
          {opening && !reduced && (
            <motion.rect
              x="22"
              y="-18"
              width="12"
              height="40"
              rx="6"
              fill={`url(#chest-beam-grad-${state})`}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: [0, 1, 1, 0], scaleY: [0, 1, 1.2, 1] }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'center bottom' }}
            />
          )}

          {/* Corps du coffre */}
          <rect x="8" y="22" width="40" height="24" rx="4" fill={boxFill} />
          {/* Bandeau métal vertical */}
          <rect x="26" y="22" width="4" height="24" fill={bandFill} />

          {/* Couvercle — pivote autour de sa charnière à la jonction (point bas-gauche) */}
          <motion.g
            initial={false}
            animate={
              opening && !reduced
                ? { rotate: [-0, -8, -45, -55] }
                : { rotate: 0 }
            }
            transition={
              opening
                ? { duration: 0.6, delay: 0.2, times: [0, 0.3, 0.8, 1], ease: [0.34, 1.56, 0.64, 1] }
                : { type: 'spring', damping: 20, stiffness: 280 }
            }
            style={{ transformOrigin: '8px 22px', transformBox: 'fill-box' as 'fill-box' }}
          >
            <path
              d="M 8 22 Q 8 12 16 12 L 40 12 Q 48 12 48 22 Z"
              fill={bandFill}
            />
            <circle cx="28" cy="22" r="4.5" fill={`url(#chest-lock-grad-${state})`} />
            <circle cx="28" cy="22" r="1.8" fill="hsl(var(--cia-blue-900))" />
          </motion.g>
        </svg>

        {isLocked && (
          <Lock className="absolute h-4 w-4 text-white/90" />
        )}

        {/* Overlay étoiles + flash blanc bref pendant `opening` */}
        {opening && (
          <AnimatePresence>
            <motion.div
              key="flash"
              className="absolute inset-0 rounded-2xl bg-white pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
            />
          </AnimatePresence>
        )}

        {opening && <ChestStars count={15} />}
      </motion.button>

      <span className="text-[10px] font-mono uppercase tracking-[.15em] text-cia-gold-700 dark:text-cia-gold-400 font-bold">
        {isLocked ? '— —' : state === 'opened' ? 'OUVERT' : opening ? '✨' : `+${xpReward ?? 50} XP`}
      </span>

      {/* XP fly-to-counter : déclenché à T=200ms (calé sur l'ouverture du couvercle) */}
      {opening && openOrigin && xpFlyTargetRef && xpReward && (
        <XPFlyIndicator
          amount={xpReward}
          originX={openOrigin.x}
          originY={openOrigin.y}
          targetRef={xpFlyTargetRef}
        />
      )}
    </div>
  );
}
