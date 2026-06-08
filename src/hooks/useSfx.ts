import { useCallback, useRef, useState } from 'react';

export type SfxName = 'pop' | 'whoosh' | 'chime' | 'fanfare';

/**
 * Sons d'interaction du Parcours (Batch B Bloc 6).
 * **Muet par défaut** — `localStorage.cia-sfx-enabled = 'true'` pour activer.
 *
 * Les fichiers `.mp3` ne sont pas livrés dans cette PR (placeholders) :
 *   `pop`     → /sounds/pop.mp3     (stamp completion)
 *   `whoosh`  → /sounds/whoosh.mp3  (path fill + auto-scroll)
 *   `chime`   → /sounds/chime.mp3   (ouverture coffre)
 *   `fanfare` → /sounds/fanfare.mp3 (fin d'unité)
 *
 * Si `play()` est appelé sans fichier présent → erreur silencieuse.
 * Si `enabled === false` → play() est un no-op (zéro coût réseau / audio).
 */

const STORAGE_KEY = 'cia-sfx-enabled';

const SFX_PATHS: Record<SfxName, string> = {
  pop:     '/sounds/pop.mp3',
  whoosh:  '/sounds/whoosh.mp3',
  chime:   '/sounds/chime.mp3',
  fanfare: '/sounds/fanfare.mp3',
};

const SFX_VOLUMES: Record<SfxName, number> = {
  pop:     0.35,
  whoosh:  0.30,
  chime:   0.40,
  fanfare: 0.45,
};

export function useSfx() {
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === 'undefined') return false;
    try {
      return window.localStorage.getItem(STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const audioCache = useRef<Map<SfxName, HTMLAudioElement>>(new Map());

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      try {
        window.localStorage.setItem(STORAGE_KEY, String(next));
      } catch {
        /* private mode — ignore */
      }
      return next;
    });
  }, []);

  const play = useCallback(
    (name: SfxName) => {
      if (!enabled) return;
      if (typeof window === 'undefined' || typeof Audio === 'undefined') return;
      let audio = audioCache.current.get(name);
      if (!audio) {
        audio = new Audio(SFX_PATHS[name]);
        audio.volume = SFX_VOLUMES[name];
        audio.preload = 'auto';
        audioCache.current.set(name, audio);
      }
      try {
        audio.currentTime = 0;
        const promise = audio.play();
        if (promise && typeof promise.catch === 'function') {
          promise.catch(() => {
            // Fichier manquant, autoplay bloqué, ou format non supporté
            // → erreur silencieuse, le visuel reste correct.
          });
        }
      } catch {
        /* ignore */
      }
    },
    [enabled],
  );

  return { enabled, toggle, play };
}
