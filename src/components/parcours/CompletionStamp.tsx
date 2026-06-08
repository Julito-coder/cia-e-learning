import { motion, AnimatePresence } from 'framer-motion';

interface CompletionStampProps {
  show: boolean;
}

/**
 * Overlay décoratif joué au-dessus du nœud à T=0 → T=600 ms de la
 * séquence de complétion (Batch B). Anneau vert qui s'expanse + check
 * qui tombe en spring. Le state du nœud passe officiellement à
 * `completed` à T=400 ms, donc l'overlay « passe le relais » au
 * rendering natif du nœud completed.
 *
 * Positionné en `absolute inset-0` sur le wrapper du nœud parent
 * (le composant ne gère pas son positionnement — il s'inscrit dans
 * le conteneur du nœud).
 */
export function CompletionStamp({ show }: CompletionStampProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="stamp"
          className="absolute inset-0 pointer-events-none flex items-center justify-center z-30"
          aria-hidden="true"
        >
          {/* Anneau expansif success */}
          <motion.span
            className="absolute h-16 w-16 sm:h-[72px] sm:w-[72px] rounded-full bg-success-500"
            initial={{ scale: 0.6, opacity: 0.7 }}
            animate={{ scale: 2.2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Anneau secondaire */}
          <motion.span
            className="absolute h-16 w-16 sm:h-[72px] sm:w-[72px] rounded-full ring-4 ring-success-500/60"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.05, 1], opacity: [0, 1, 1] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Disque solide qui s'installe sous le check */}
          <motion.span
            className="absolute h-16 w-16 sm:h-[72px] sm:w-[72px] rounded-full bg-success-500"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 20, delay: 0.1 }}
          />
          {/* Check qui « tombe » en spring */}
          <motion.svg
            viewBox="0 0 32 32"
            className="absolute h-9 w-9 text-white"
            initial={{ scale: 0, rotate: -20, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 14, delay: 0.18 }}
            aria-hidden="true"
          >
            <path
              d="M 6 17 L 14 24 L 26 9"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
