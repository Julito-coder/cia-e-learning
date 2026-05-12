import type { Variants } from 'framer-motion';
import { useCallback, useRef, useState } from 'react';

/* =========================================================================
 * Primitives existantes — INCHANGÉES
 * ========================================================================= */

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export const scalePop: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

export const hoverLift = {
  rest:  { y: 0,  scale: 1, transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] } },
  hover: { y: -4, scale: 1.01, transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] } },
};

export const xpBurst: Variants = {
  hidden: { opacity: 1, x: 0, y: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: [1, 1, 0],
    x: Math.cos((i / 8) * Math.PI * 2) * 60,
    y: Math.sin((i / 8) * Math.PI * 2) * 60,
    scale: [0, 1, 0.5],
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const pageTransition = {
  initial: { opacity: 0, y: 12, rotateX: 2 },
  animate: { opacity: 1, y: 0, rotateX: 0 },
  exit:    { opacity: 0, y: -8, rotateX: -1 },
  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  style: { transformPerspective: 1200 } as const,
};

/* =========================================================================
 * NOUVELLES PRIMITIVES — Batch A1
 * ========================================================================= */

/**
 * springPop — rebond physique vrai (vs scalePop qui est en easing custom).
 * À utiliser pour les éléments qui doivent donner une sensation de
 * "matérialité" : trophées, badges débloqués, niveau au level-up.
 *
 * Utilisation framer-motion :
 *   <motion.div variants={springPop} initial="hidden" animate="visible" />
 */
export const springPop: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: -30 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      damping: 11,
      stiffness: 220,
      mass: 0.8,
    },
  },
  exit: { opacity: 0, scale: 0.5, rotate: 15, transition: { duration: 0.25 } },
};

/**
 * floatY — lévitation infinie verticale. Pour les éléments décoratifs
 * type badges flottants du hero, mascottes en attente, particules
 * ambiantes.
 *
 * Utilisation :
 *   <motion.div animate="float" variants={floatY} />
 */
export const floatY: Variants = {
  float: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

/**
 * slideRotate — slide + rotation 3D légère pour les transitions de
 * step ou de page qui doivent donner du "mouvement". Utilise les axes
 * X et Y, légère rotation Y pour donner de la profondeur.
 *
 * Utilisation custom dans AnimatePresence avec direction +1 / -1 :
 *   <motion.div {...slideRotate(direction)} />
 */
export const slideRotate = (direction: 1 | -1) => ({
  initial: { opacity: 0, x: direction * 80, rotateY: direction * 8 },
  animate: { opacity: 1, x: 0, rotateY: 0 },
  exit:    { opacity: 0, x: -direction * 80, rotateY: -direction * 8 },
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  style: { transformPerspective: 1000 } as const,
});

/**
 * useTilt3D — hook qui retourne les props onPointerMove/onPointerLeave
 * et le style transform à appliquer pour un effet de tilt 3D
 * pointer-based.
 *
 * Utilisation :
 *   const tilt = useTilt3D({ max: 12 });
 *   <div {...tilt.bind} style={tilt.style}>...</div>
 */
export interface UseTilt3DOptions {
  /** Angle max en degrés (défaut 12) */
  max?: number;
  /** Activé seulement au hover (défaut true) */
  active?: boolean;
  /** Perspective en px (défaut 1000) */
  perspective?: number;
  /** Scale au hover (défaut 1.02) */
  scale?: number;
}

export function useTilt3D(options: UseTilt3DOptions = {}) {
  const { max = 12, active = true, perspective = 1000, scale = 1.02 } = options;
  const ref = useRef<HTMLDivElement | null>(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!active || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      setRot({
        x: Math.max(-max, Math.min(max, -dy * max)),
        y: Math.max(-max, Math.min(max,  dx * max)),
      });
    },
    [active, max],
  );

  const handlePointerEnter = useCallback(() => setHovering(true), []);
  const handlePointerLeave = useCallback(() => {
    setHovering(false);
    setRot({ x: 0, y: 0 });
  }, []);

  return {
    ref,
    bind: {
      ref,
      onPointerMove: handlePointerMove,
      onPointerEnter: handlePointerEnter,
      onPointerLeave: handlePointerLeave,
    },
    style: {
      transform: `perspective(${perspective}px) rotateX(${rot.x}deg) rotateY(${rot.y}deg) scale(${hovering ? scale : 1})`,
      transformStyle: 'preserve-3d' as const,
      transition: 'transform 0.15s ease-out',
    },
    hovering,
    rotation: rot,
  };
}
