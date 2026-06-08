/**
 * Scroll vertical animé avec ease-in-out cubic — alternative à
 * `window.scrollTo({ behavior: 'smooth' })` qui est ~300 ms et non
 * personnalisable. Utilisé par la transition d'univers (Batch A.2
 * Bloc 4) pour un scroll **ralenti et fondu** ~1.5 s.
 *
 * Annule un scroll en cours si l'utilisateur scrolle manuellement
 * (wheel / touchmove → enregistré par l'appelant en amont).
 *
 * Si `prefers-reduced-motion: reduce` → saut instantané (pas d'anim).
 */
export function smoothScrollTo(
  targetY: number,
  duration = 1500,
): () => void {
  if (typeof window === 'undefined') return () => undefined;

  const prefersReduced = window.matchMedia?.(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  if (prefersReduced) {
    window.scrollTo(0, targetY);
    return () => undefined;
  }

  const startY = window.scrollY;
  const distance = targetY - startY;
  if (Math.abs(distance) < 4) return () => undefined;

  const startTime = performance.now();
  let cancelled = false;
  let rafId = 0;

  const step = (now: number) => {
    if (cancelled) return;
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    // Cubic ease-in-out
    const eased =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    window.scrollTo(0, startY + distance * eased);
    if (progress < 1) {
      rafId = requestAnimationFrame(step);
    }
  };

  rafId = requestAnimationFrame(step);

  return () => {
    cancelled = true;
    cancelAnimationFrame(rafId);
  };
}
