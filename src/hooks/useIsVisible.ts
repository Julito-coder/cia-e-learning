import { useEffect, useState, type RefObject } from 'react';

/**
 * Indique si l'élément référencé est dans le viewport.
 * Sert à **pauser les animations boucle hors viewport** (charte v2 perf).
 *
 * Implémentation : IntersectionObserver (pas de listener scroll).
 * SSR-safe : renvoie `false` jusqu'à hydratation.
 */
export function useIsVisible(
  ref: RefObject<Element>,
  options: IntersectionObserverInit = { rootMargin: '120px' },
): boolean {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      options,
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return visible;
}
