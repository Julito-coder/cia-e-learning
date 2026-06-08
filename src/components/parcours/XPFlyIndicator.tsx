import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState, type RefObject } from 'react';

interface XPFlyIndicatorProps {
  amount: number;
  /** Position de départ (viewport coords). */
  originX: number;
  originY: number;
  /** Ref vers l'élément cible (compteur XP du sub-header). */
  targetRef: RefObject<HTMLElement>;
  onComplete?: () => void;
}

/**
 * « +N XP » qui vole du coffre ouvert vers le compteur XP du sub-header.
 *
 * Position fixed (pour traverser la page), z 100, pointer-events-none.
 * Easing premium ease-out-expo, durée 0.9s. Désactivé sous reduced-motion
 * (on appelle `onComplete` immédiatement pour ne pas bloquer la séquence).
 */
export function XPFlyIndicator({
  amount,
  originX,
  originY,
  targetRef,
  onComplete,
}: XPFlyIndicatorProps) {
  const reduced = useReducedMotion();
  const [target, setTarget] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (reduced) {
      onComplete?.();
      return;
    }
    const el = targetRef.current;
    if (!el) {
      onComplete?.();
      return;
    }
    const r = el.getBoundingClientRect();
    setTarget({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
  }, [reduced, targetRef, onComplete]);

  if (reduced || !target) return null;

  return (
    <motion.div
      className="fixed pointer-events-none font-display font-extrabold text-xl text-cia-gold-700 tabular-nums"
      style={{
        zIndex: 100,
        left: 0,
        top: 0,
        textShadow: '0 2px 8px hsl(var(--cia-gold-500) / 0.45)',
        willChange: 'transform, opacity',
      }}
      initial={{ x: originX, y: originY, opacity: 0, scale: 0.6 }}
      animate={{
        x: [originX, (originX + target.x) / 2, target.x],
        y: [originY, originY - 60, target.y],
        opacity: [0, 1, 1, 0],
        scale: [0.6, 1.25, 1, 0.5],
      }}
      transition={{
        duration: 0.9,
        delay: 0.25,
        times: [0, 0.25, 0.85, 1],
        ease: [0.16, 1, 0.3, 1],
      }}
      onAnimationComplete={onComplete}
    >
      +{amount} XP
    </motion.div>
  );
}
