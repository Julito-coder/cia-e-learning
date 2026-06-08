import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/**
 * Parasol de plage — flat éditorial.
 * Anim in-view : oscillation lente du parasol (rotate ±4°) ancrée au pied
 * du mât. Pause off-screen + reduced-motion.
 */
export function DecorParasol({ size = 80 }: { size?: number }) {
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
        transformOrigin: '40px 68px',
      }}
      animate={animate ? { rotate: [-4, 4, -4] } : { rotate: 0 }}
      transition={animate ? { duration: 8, repeat: Infinity, ease: 'easeInOut' } : { duration: 0 }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M14 38 Q14 16 40 16 Q66 16 66 38 Z" fill="hsl(var(--cia-red-400))" opacity="0.85" />
        <path d="M14 38 Q14 22 26 17 L26 38 Z" fill="white" opacity="0.7" />
        <path d="M54 17 Q66 22 66 38 L54 38 Z" fill="white" opacity="0.7" />
        <line x1="40" y1="16" x2="40" y2="38" stroke="hsl(var(--cia-blue-700))" strokeWidth="0.8" />
        <line x1="40" y1="16" x2="40" y2="68" stroke="hsl(var(--cia-blue-700))" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12 70 Q40 74 68 70" stroke="hsl(var(--cia-gold-300))" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
      </svg>
    </motion.div>
  );
}
