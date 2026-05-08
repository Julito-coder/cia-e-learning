import { motion, AnimatePresence } from 'framer-motion';

interface CountdownDigitProps {
  value: number | string;
  className?: string;
}

export function CountdownDigit({ value, className = '' }: CountdownDigitProps) {
  const v = String(value).padStart(2, '0');
  return (
    <span className={`inline-flex overflow-hidden align-middle ${className}`} style={{ minWidth: '1.6ch' }}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={v}
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="tabular-nums inline-block"
        >
          {v}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}