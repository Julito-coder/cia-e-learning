import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Character3DAvatar } from './Character3DAvatar';
import { CHARACTERS } from '@/data/characters';
import type { Character, CharacterEvolution } from '@/data/characters';
import type { CECRLevel } from '@/data/demo-courses';

export type MascotMood = 'idle' | 'talking' | 'celebrating' | 'encouraging' | 'sad';

interface MascotPresenceProps {
  /** Character à afficher. Default : Marie Leclerc (id 'marie'). */
  character?: Character;
  /** Niveau CECR pour sélectionner l'évolution. Default : meilleure dispo. */
  level?: CECRLevel;
  /** État émotionnel. Default : 'idle'. */
  mood?: MascotMood;
  /** Taille en px. Default : 80. */
  size?: number;
  /** Message à afficher en bulle (si défini). */
  message?: string;
  /** Position de la bulle. Default : 'right'. */
  bubbleSide?: 'right' | 'top' | 'left';
  /** Click handler. Default : noop. */
  onClick?: () => void;
  /** Custom className sur le wrapper. */
  className?: string;
}

const DEFAULT_MASCOT_ID = 'marie';
const LEVEL_ORDER: CECRLevel[] = ['A0' as CECRLevel, 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

function selectEvolution(
  character: Character,
  level?: CECRLevel,
): CharacterEvolution {
  if (!level) {
    return character.evolution[character.evolution.length - 1] ?? character.evolution[0];
  }
  const exact = character.evolution.find((e) => e.level === level);
  if (exact) return exact;
  const wantedIdx = LEVEL_ORDER.indexOf(level);
  for (let i = wantedIdx; i >= 0; i--) {
    const found = character.evolution.find((e) => e.level === LEVEL_ORDER[i]);
    if (found) return found;
  }
  return character.evolution[0];
}

export function MascotPresence({
  character,
  level,
  mood = 'idle',
  size = 80,
  message,
  bubbleSide = 'right',
  onClick,
  className = '',
}: MascotPresenceProps) {
  const reduced = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const mascot = character ?? CHARACTERS.find((c) => c.id === DEFAULT_MASCOT_ID) ?? CHARACTERS[0];

  const [internalMood, setInternalMood] = useState<MascotMood>(mood);

  useEffect(() => {
    setInternalMood(mood);
    if (mood === 'encouraging' || mood === 'sad') {
      const timer = setTimeout(() => setInternalMood('idle'), 1500);
      return () => clearTimeout(timer);
    }
  }, [mood]);

  if (!mascot) return null;

  const evolution = selectEvolution(mascot, level);

  const isSelected = internalMood === 'celebrating' || internalMood === 'encouraging';

  const sadFilter = internalMood === 'sad'
    ? { filter: 'saturate(0.5) brightness(0.92)', opacity: 0.85 }
    : {};

  const layoutClass =
    bubbleSide === 'right' ? 'flex-row items-center gap-3' :
    bubbleSide === 'left'  ? 'flex-row-reverse items-center gap-3' :
    'flex-col items-center gap-2';

  return (
    <div className={`inline-flex ${layoutClass} ${className}`}>
      <motion.div
        style={sadFilter}
        animate={internalMood === 'sad' && !reduced ? { y: [0, 2, 0] } : {}}
        transition={internalMood === 'sad'
          ? { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
          : {}
        }
      >
        <Character3DAvatar
          character={mascot}
          evolution={evolution}
          isSelected={isSelected}
          onClick={onClick ?? (() => {})}
          size={size}
        />
      </motion.div>

      <AnimatePresence>
        {message && (
          <motion.div
            key={message}
            initial={{
              opacity: 0,
              scale: 0.9,
              x: bubbleSide === 'right' ? -8 : bubbleSide === 'left' ? 8 : 0,
              y: bubbleSide === 'top' ? 4 : 0,
            }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', damping: 18, stiffness: 280 }}
            className={`relative max-w-[200px] bg-card border-2 border-cia-blue-200 rounded-2xl px-3 py-2 text-sm shadow-md ${bubbleSide === 'top' ? 'mt-1' : ''}`}
          >
            <span
              className={`absolute w-3 h-3 bg-card border-cia-blue-200 ${
                bubbleSide === 'right' ? '-left-[7px] top-1/2 -translate-y-1/2 border-l-2 border-b-2 rotate-45' :
                bubbleSide === 'left'  ? '-right-[7px] top-1/2 -translate-y-1/2 border-r-2 border-t-2 rotate-45' :
                '-top-[7px] left-1/2 -translate-x-1/2 border-l-2 border-t-2 rotate-45'
              }`}
              aria-hidden="true"
            />
            <span className="relative z-10">{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
