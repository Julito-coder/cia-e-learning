import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/**
 * Arc de soleil — flat éditorial.
 * Or charte autorisé uniquement via gradient (charte v2 §3) : on utilise
 * `g-sun` pour le disque + rayons fins en `cia-gold-500` stroke.
 *
 * Anim in-view : disque qui pulse doucement (scale 1↔1.04, opacity ↑↓)
 * + groupe de rayons qui tourne lentement (rotate 360° en 30s).
 * Pause off-screen via `useInView`. Désactivé reduced-motion.
 */
export function DecorSun({ size = 80 }: { size?: number }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-30px' });
  const animate = inView && !reduced;

  return (
    <div ref={ref} style={{ width: size, height: size, willChange: 'transform' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="decor-sun-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(45 100% 83%)" />
            <stop offset="60%" stopColor="hsl(var(--cia-gold-300))" />
            <stop offset="100%" stopColor="hsl(var(--cia-gold-500))" />
          </linearGradient>
        </defs>
        {/* Disque — pulse subtle */}
        <motion.circle
          cx="40"
          cy="40"
          r="16"
          fill="url(#decor-sun-grad)"
          animate={animate ? { scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] } : { scale: 1, opacity: 1 }}
          transition={animate ? { duration: 4.5, repeat: Infinity, ease: 'easeInOut' } : { duration: 0 }}
          style={{ transformOrigin: '40px 40px', transformBox: 'fill-box' as const }}
        />
        {/* Rayons — rotation lente continue */}
        <motion.g
          stroke="hsl(var(--cia-gold-500))"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.7"
          animate={animate ? { rotate: 360 } : { rotate: 0 }}
          transition={animate ? { duration: 30, repeat: Infinity, ease: 'linear' } : { duration: 0 }}
          style={{ transformOrigin: '40px 40px', transformBox: 'fill-box' as const }}
        >
          <line x1="40" y1="6" x2="40" y2="16" />
          <line x1="40" y1="64" x2="40" y2="74" />
          <line x1="6" y1="40" x2="16" y2="40" />
          <line x1="64" y1="40" x2="74" y2="40" />
          <line x1="16" y1="16" x2="22" y2="22" />
          <line x1="58" y1="58" x2="64" y2="64" />
          <line x1="64" y1="16" x2="58" y2="22" />
          <line x1="16" y1="64" x2="22" y2="58" />
        </motion.g>
      </svg>
    </div>
  );
}
