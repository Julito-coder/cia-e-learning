import { motion, AnimatePresence } from 'framer-motion';

interface UnlockPulseProps {
  show: boolean;
}

/**
 * Surimpression jouée à T=1600 ms sur le nœud nouvellement débloqué
 * (chorégraphie de complétion Batch B). Anneau cyan qui éclôt + un
 * bounce léger pour signaler « ton prochain défi est prêt ».
 *
 * Positionné en `absolute inset-0` sur le wrapper du nœud.
 */
export function UnlockPulse({ show }: UnlockPulseProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="unlock-pulse"
          className="absolute inset-0 pointer-events-none flex items-center justify-center z-30"
          aria-hidden="true"
        >
          {/* Anneau cia-spark qui s'expanse */}
          <motion.span
            className="absolute h-16 w-16 sm:h-[72px] sm:w-[72px] rounded-full ring-4 ring-cia-spark-mid"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: [0.85, 1.6, 2], opacity: [0, 0.9, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Bounce subtil sur le nœud */}
          <motion.span
            className="absolute h-16 w-16 sm:h-[72px] sm:w-[72px] rounded-full"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.12, 0.97, 1.02, 1] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
