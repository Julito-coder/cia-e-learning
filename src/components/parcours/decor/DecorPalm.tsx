import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/**
 * Palme stylisée — flat éditorial.
 * Anim in-view : oscillation douce de l'ensemble (rotate ±3°) qui
 * simule le vent dans les feuilles. Pause off-screen + reduced-motion.
 */
export function DecorPalm({ size = 80 }: { size?: number }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-30px' });
  const animate = inView && !reduced;

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size,
        willChange: 'transform',
        transformOrigin: '42px 70px',
      }}
      animate={animate ? { rotate: [-3, 3, -3] } : { rotate: 0 }}
      transition={animate ? { duration: 7, repeat: Infinity, ease: 'easeInOut' } : { duration: 0 }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M42 70 Q40 50 44 32" stroke="hsl(var(--cia-blue-700))" strokeWidth="3" strokeLinecap="round" fill="none" />
        <g stroke="hsl(var(--success-600))" strokeWidth="2.5" strokeLinecap="round" fill="none">
          <path d="M44 32 Q30 22 14 24" />
          <path d="M44 32 Q60 22 72 28" />
          <path d="M44 32 Q34 18 22 12" />
          <path d="M44 32 Q56 18 66 14" />
          <path d="M44 32 Q44 18 40 8" />
        </g>
        <circle cx="46" cy="34" r="2" fill="hsl(var(--cia-gold-500))" opacity="0.7" />
      </svg>
    </motion.div>
  );
}
