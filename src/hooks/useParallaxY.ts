import { useScroll, useTransform, type MotionValue } from 'framer-motion';

/**
 * Parallax vertical lié au scroll global de la fenêtre.
 *
 * Performance : le navigateur ne paye que les `transform` GPU.
 * Pas de layout thrash. Aucun listener manuel.
 *
 * Strength : valeurs typiques entre -0.6 (rapide vers le haut) et 0.6
 * (rapide vers le bas). 0 = statique.
 */
export function useParallaxY(strength = -0.3): MotionValue<number> {
  const { scrollY } = useScroll();
  return useTransform(scrollY, (y) => y * strength);
}
