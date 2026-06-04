import * as React from 'react';
import { motion, useAnimation, useReducedMotion } from 'framer-motion';
import { Lock, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { ModuleIconType } from '@/lib/moduleIcon';

export type ModuleNodeState = 'locked' | 'available' | 'current' | 'completed';

interface ModuleNodeProps {
  index: number;
  title: string;
  icon: ModuleIconType;
  state: ModuleNodeState;
  onClick: () => void;
  /** Disable the floatY breathing on `available` (e.g. when off-screen). */
  staticBreath?: boolean;
}

/**
 * Charte v2 §8 — 4 états stricts :
 *   locked    : gris ink-100, cadenas, ring-4 ink-50, pas d'interaction (shake au tap).
 *   available : blanc, texte cia-blue-700, ring-4 cia-blue-500/15, shadow-elev-lg, invite (float).
 *   current   : bg-cia-blue-500, blanc, shadow-glow-blue, ring cia-spark-mid/40, pulse glow.
 *   completed : bg-success-500, blanc, check, shadow-3d-success, statique.
 */
const STATE_STYLES: Record<ModuleNodeState, {
  bgClass: string;
  iconColor: string;
  ring: string;
  shadow: string;
  baseScale: number;
}> = {
  locked: {
    bgClass:   'bg-ink-100 dark:bg-ink-700',
    iconColor: 'text-ink-400',
    ring:      'ring-4 ring-ink-50 dark:ring-ink-800',
    shadow:    'shadow-sm',
    baseScale: 0.92,
  },
  available: {
    bgClass:   'bg-card',
    iconColor: 'text-cia-blue-700 dark:text-cia-blue-300',
    ring:      'ring-4 ring-cia-blue-500/15',
    shadow:    'shadow-elev-lg',
    baseScale: 1,
  },
  current: {
    bgClass:   'bg-cia-blue-500',
    iconColor: 'text-white',
    ring:      'ring-4 ring-cia-spark-mid/40',
    shadow:    'shadow-glow-blue',
    baseScale: 1.08,
  },
  completed: {
    bgClass:   'bg-success-500',
    iconColor: 'text-white',
    ring:      'ring-2 ring-success-500/30',
    shadow:    'shadow-3d-success',
    baseScale: 1,
  },
};

export function ModuleNode({ index, title, icon, state, onClick, staticBreath }: ModuleNodeProps) {
  const { t } = useTranslation();
  const style = STATE_STYLES[state];
  const isLocked = state === 'locked';
  const reduced = useReducedMotion();
  const shakeControls = useAnimation();

  const handleClick = React.useCallback(() => {
    if (isLocked) {
      if (reduced) return;
      // Micro-shake horizontal — feedback tactile pour signaler le verrou.
      shakeControls.start({
        x: [-4, 4, -3, 3, 0],
        transition: { duration: 0.3, ease: 'easeOut' },
      });
      return;
    }
    onClick();
  }, [isLocked, onClick, reduced, shakeControls]);

  const renderIcon = () => {
    if (state === 'locked')    return <Lock className="h-5 w-5" />;
    if (state === 'completed') return <Check className="h-9 w-9" strokeWidth={3.5} />;
    if (icon.kind === 'emoji') {
      return <span className="text-3xl select-none">{icon.value}</span>;
    }
    const Icon = icon.value;
    return <Icon className="h-7 w-7" strokeWidth={2.2} />;
  };

  return (
    <div className="relative inline-flex flex-col items-center gap-2">
      {/* Glow pulse — seulement pour current */}
      {state === 'current' && !reduced && (
        <motion.span
          className="absolute -inset-3 rounded-full bg-cia-spark-mid/30 pointer-events-none"
          animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.15, 0.55] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
      )}

      {/* Float breathing — seulement available, pour inviter au tap */}
      <motion.div
        animate={
          state === 'available' && !staticBreath && !reduced
            ? { y: [0, -3, 0] }
            : { y: 0 }
        }
        transition={
          state === 'available' && !staticBreath && !reduced
            ? { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0 }
        }
      >
        <motion.button
          animate={shakeControls}
          onClick={handleClick}
          disabled={isLocked && !reduced ? false : isLocked}
          aria-disabled={isLocked}
          className={`
            relative z-10 h-16 w-16 sm:h-[72px] sm:w-[72px] rounded-full
            ${style.bgClass} ${style.ring} ${style.shadow} ${style.iconColor}
            flex items-center justify-center
            transition-shadow duration-200 ease-out-expo
            ${isLocked ? 'cursor-not-allowed' : 'cursor-pointer'}
            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cia-spark-mid/40
          `}
          style={{ transform: `scale(${style.baseScale})` }}
          whileHover={isLocked || reduced ? undefined : { y: -3, scale: style.baseScale * 1.03 }}
          whileTap={isLocked || reduced ? undefined : { scale: style.baseScale * 0.92 }}
          transition={{ type: 'spring', damping: 15, stiffness: 400 }}
          aria-label={`${t('curriculum.module')} ${index + 1} : ${title} (${t(`curriculum.state.${state}`)})`}
        >
          {renderIcon()}
        </motion.button>
      </motion.div>

      <span
        className={`text-xs font-display font-bold tabular-nums ${
          isLocked ? 'text-ink-400' : 'text-foreground'
        }`}
      >
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>
  );
}
