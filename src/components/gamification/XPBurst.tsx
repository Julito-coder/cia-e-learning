import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface XPBurstProps {
  x: number;
  y: number;
  amount: number;
  onComplete: () => void;
}

export function XPBurst({ x, y, amount, onComplete }: XPBurstProps) {
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const particles = reduced ? 0 : 8;

  useEffect(() => {
    const t = setTimeout(onComplete, reduced ? 600 : 1100);
    return () => clearTimeout(t);
  }, [onComplete, reduced]);

  return (
    <div className="fixed inset-0 z-[60] pointer-events-none" style={{ contain: 'layout' }}>
      <motion.div
        className="absolute font-bold text-cia-gold-600 text-base"
        style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
        initial={{ opacity: 0, y: 0, scale: 0.6 }}
        animate={{ opacity: [0, 1, 1, 0], y: -50, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        +{amount} XP
      </motion.div>

      {Array.from({ length: particles }).map((_, i) => {
        const angle = (i / particles) * Math.PI * 2;
        const distance = 70;
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: x, top: y }}
            initial={{ opacity: 1, x: 0, y: 0, scale: 0 }}
            animate={{
              opacity: [1, 1, 0],
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance,
              scale: [0, 1, 0.4],
            }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Sparkles className="h-4 w-4 text-cia-gold-500 drop-shadow" />
          </motion.div>
        );
      })}
    </div>
  );
}