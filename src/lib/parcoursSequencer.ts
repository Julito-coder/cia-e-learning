import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Séquence de complétion ~3 s étagée — orchestrateur (Batch B).
 *
 * Les beats se chevauchent mais restent ordonnés. Tous les callbacks
 * sont optionnels — l'appelant n'a qu'à brancher les beats utiles.
 *
 * Timeline cible :
 *   T  = 0      → stamp overlay (anticipation)
 *   T  = 300    → XP burst (particules)
 *   T  = 400    → commit completion (path fill + next-node unlock automatiques)
 *   T  = 600    → stamp overlay end (nœud completed prend le relais visuel)
 *   T  = 1600   → unlock pop (oscillation d'invitation sur le nouveau current)
 *   T  = 2200   → fin d'unité (confetti palier — déclenché par l'appelant)
 *   T  = 2400   → auto-scroll vers le nouveau current
 *   T  = 2800   → Spark mood reset → encouraging
 *   T  = 3000   → end (state idle)
 *
 * `prefers-reduced-motion` : l'orchestrateur appelle directement
 * `onCommit` puis `onEnd` sans setTimeout, et passe `reduced: true`
 * aux callbacks pour qu'ils dégradent les rendus.
 */

export interface CompletionBeats {
  onStamp?: (moduleId: string) => void;
  onBurst?: (moduleId: string) => void;
  onCommit?: (moduleId: string) => void;
  onStampEnd?: (moduleId: string) => void;
  onUnlockPop?: (moduleId: string) => void;
  onUnitComplete?: (moduleId: string) => void;
  onAutoScroll?: (moduleId: string) => void;
  onSparkReset?: (moduleId: string) => void;
  onEnd?: (moduleId: string) => void;
}

const TIMELINE = {
  stamp:       0,
  burst:       300,
  commit:      400,
  stampEnd:    600,
  unlockPop:  1600,
  unitDone:   2200,
  scroll:     2400,
  sparkReset: 2800,
  end:        3000,
} as const;

export function useCompletionSequence(beats: CompletionBeats, reduced = false) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const beatsRef = useRef(beats);
  beatsRef.current = beats;
  const timeoutsRef = useRef<number[]>([]);

  const clearAll = useCallback(() => {
    timeoutsRef.current.forEach((id) => window.clearTimeout(id));
    timeoutsRef.current = [];
  }, []);

  useEffect(() => clearAll, [clearAll]);

  const run = useCallback(
    (moduleId: string) => {
      clearAll();
      setActiveId(moduleId);

      if (reduced) {
        // Mode dégradé : on tape les beats essentiels d'un coup, pas de
        // chorégraphie. Le rendu doit s'adapter (pas de particules etc.).
        beatsRef.current.onStamp?.(moduleId);
        beatsRef.current.onCommit?.(moduleId);
        beatsRef.current.onStampEnd?.(moduleId);
        beatsRef.current.onUnlockPop?.(moduleId);
        beatsRef.current.onUnitComplete?.(moduleId);
        beatsRef.current.onSparkReset?.(moduleId);
        beatsRef.current.onEnd?.(moduleId);
        setActiveId(null);
        return;
      }

      const queue: Array<[number, ((id: string) => void) | undefined]> = [
        [TIMELINE.stamp,      beatsRef.current.onStamp],
        [TIMELINE.burst,      beatsRef.current.onBurst],
        [TIMELINE.commit,     beatsRef.current.onCommit],
        [TIMELINE.stampEnd,   beatsRef.current.onStampEnd],
        [TIMELINE.unlockPop,  beatsRef.current.onUnlockPop],
        [TIMELINE.unitDone,   beatsRef.current.onUnitComplete],
        [TIMELINE.scroll,     beatsRef.current.onAutoScroll],
        [TIMELINE.sparkReset, beatsRef.current.onSparkReset],
        [TIMELINE.end,        beatsRef.current.onEnd],
      ];

      queue.forEach(([delay, fn]) => {
        if (!fn) return;
        const id = window.setTimeout(() => fn(moduleId), delay);
        timeoutsRef.current.push(id);
      });

      const endId = window.setTimeout(() => setActiveId(null), TIMELINE.end);
      timeoutsRef.current.push(endId);
    },
    [clearAll, reduced],
  );

  return { run, activeId };
}

export { TIMELINE as COMPLETION_TIMELINE };
