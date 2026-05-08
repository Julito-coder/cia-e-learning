import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Check, X } from 'lucide-react';

interface AnswerBurstProps {
  correct: boolean;
  onDone: () => void;
}

export function AnswerBurst({ correct, onDone }: AnswerBurstProps) {
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const Icon = correct ? Check : X;
  const colorCls = correct ? 'text-cia-success' : 'text-destructive';

  useEffect(() => {
    const t = setTimeout(onDone, reduced ? 200 : 700);
    return () => clearTimeout(t);
  }, [onDone, reduced]);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.4, 1], opacity: [0, 1, 0] }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`rounded-full p-4 bg-card shadow-2xl ${colorCls}`}
      >
        <Icon className="h-10 w-10" strokeWidth={3} />
      </motion.div>
      {!reduced && Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        return (
          <motion.span
            key={i}
            className={`absolute h-2 w-2 rounded-full ${correct ? 'bg-cia-success' : 'bg-destructive'}`}
            initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
            animate={{
              x: Math.cos(angle) * 60,
              y: Math.sin(angle) * 60,
              opacity: [1, 1, 0],
              scale: [0, 1, 0.4],
            }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          />
        );
      })}
    </div>
  );
}