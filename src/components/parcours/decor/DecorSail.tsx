import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/**
 * Voile méditerranéenne — Côte d'Azur (charte v2, palette CIA stricte).
 *
 * Anim in-view (Batch A.2 Bloc 3) : tangage `rotate ±2°` + translateX
 * doux qui simule un bateau qui vogue. Boucle infinie 6s easeInOut.
 * Pause automatique hors viewport via `useInView` (IntersectionObserver
 * de framer-motion). Désactivée sous `prefers-reduced-motion`.
 */
export function DecorSail({ size = 80 }: { size?: number }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-30px' });
  const animate = inView && !reduced;

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size, willChange: 'transform' }}
      animate={
        animate
          ? { rotate: [-2, 2, -2], x: [0, 6, 0] }
          : { rotate: 0, x: 0 }
      }
      transition={
        animate
          ? { duration: 6, repeat: Infinity, ease: 'easeInOut' }
          : { duration: 0 }
      }
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <line x1="42" y1="14" x2="42" y2="58" stroke="hsl(var(--cia-blue-700))" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M42 14 L42 58 L18 58 Q28 38 42 14 Z" fill="hsl(var(--cia-blue-400))" opacity="0.9" />
        <path d="M42 18 L42 58 L60 58 Q52 38 42 18 Z" fill="hsl(var(--cia-blue-500))" opacity="0.7" />
        <path d="M12 60 Q40 70 68 60" stroke="hsl(var(--cia-blue-700))" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    </motion.div>
  );
}
