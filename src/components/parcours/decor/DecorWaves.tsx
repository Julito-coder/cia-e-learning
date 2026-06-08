import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/**
 * 3 lignes de vagues stylisées — flat éditorial.
 * Anim in-view : translateX en boucle (illusion d'ondulation continue).
 * Les 3 lignes ondulent à des vitesses différentes pour profondeur subtile.
 * Pause off-screen via `useInView`. Désactivé reduced-motion.
 */
export function DecorWaves({ size = 80 }: { size?: number }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-30px' });
  const animate = inView && !reduced;

  return (
    <div ref={ref} style={{ width: size, height: size * 0.5, willChange: 'transform' }}>
      <svg
        width={size}
        height={size * 0.5}
        viewBox="0 0 80 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ overflow: 'visible' }}
      >
        <g strokeLinecap="round" fill="none">
          <motion.path
            d="M-4 12 Q14 6 24 12 T44 12 T64 12 T84 12 T104 12"
            stroke="hsl(var(--cia-blue-400))"
            strokeWidth="2"
            animate={animate ? { x: [0, -20, 0] } : { x: 0 }}
            transition={animate ? { duration: 5, repeat: Infinity, ease: 'easeInOut' } : { duration: 0 }}
          />
          <motion.path
            d="M-4 22 Q14 16 24 22 T44 22 T64 22 T84 22 T104 22"
            stroke="hsl(var(--cia-blue-500))"
            strokeWidth="2.2"
            animate={animate ? { x: [0, -20, 0] } : { x: 0 }}
            transition={animate ? { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.4 } : { duration: 0 }}
          />
          <motion.path
            d="M-4 32 Q14 26 24 32 T44 32 T64 32 T84 32 T104 32"
            stroke="hsl(var(--cia-spark-mid))"
            strokeWidth="2"
            opacity="0.7"
            animate={animate ? { x: [0, -20, 0] } : { x: 0 }}
            transition={animate ? { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 } : { duration: 0 }}
          />
        </g>
      </svg>
    </div>
  );
}
