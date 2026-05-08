import { motion, AnimatePresence } from 'framer-motion';
import { Flame } from 'lucide-react';

export function ComboBadge({ combo }: { combo: number }) {
  return (
    <AnimatePresence>
      {combo >= 3 && (
        <motion.div
          key={combo}
          initial={{ scale: 0.4, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.6, opacity: 0, y: -10 }}
          transition={{ type: 'spring', stiffness: 380, damping: 18 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-cia-gold-400 to-orange-500 text-white text-sm font-extrabold shadow-lg"
        >
          <Flame className="h-4 w-4" />
          Combo x{combo}
        </motion.div>
      )}
    </AnimatePresence>
  );
}