/**
 * Source unique pour le calcul des positions des nœuds du Parcours
 * et de la spline qui les relie. Garantit que le tracé SVG et le DOM
 * absolu des nœuds tombent **au pixel près** sur les mêmes coordonnées
 * (fixe le bug « connecteur du mauvais côté »).
 *
 * Le système de coordonnées du SVG est :
 *   - X en pourcentage (0–100, mappé via viewBox + preserveAspectRatio="none")
 *   - Y en pixels (1 unité viewBox = 1 px, on connaît la hauteur en px)
 *
 * Pour positionner un nœud DOM sur la spline, on utilise donc
 * `left: ${x}%` + `top: ${y}px` + `translate(-50%, -50%)`.
 */

export type ParcoursNodeKind = 'module' | 'chest' | 'trophy';

export interface ParcoursNodeCoord {
  /** Horizontal position in percent of the container width (0–100). */
  x: number;
  /** Vertical position in pixels (matches SVG viewBox unit). */
  y: number;
  /** Side of the snake — useful to position the Spark bubble. */
  side: 'left' | 'right';
  kind: ParcoursNodeKind;
}

export const PARCOURS_LAYOUT = {
  /** Tangent horizontal des extrema gauche du serpentin. */
  X_LEFT: 22,
  /** Tangent horizontal des extrema droit. */
  X_RIGHT: 78,
  /** Pas vertical entre 2 nœuds successifs (px = unités viewBox). */
  Y_STEP: 120,
  /** Marge haute avant le premier nœud. */
  Y_START: 60,
} as const;

export function computeParcoursCoords(items: { kind: ParcoursNodeKind }[]): ParcoursNodeCoord[] {
  return items.map((item, i) => {
    const isRight = i % 2 === 1;
    return {
      x: isRight ? PARCOURS_LAYOUT.X_RIGHT : PARCOURS_LAYOUT.X_LEFT,
      y: PARCOURS_LAYOUT.Y_START + i * PARCOURS_LAYOUT.Y_STEP,
      side: isRight ? 'right' : 'left',
      kind: item.kind,
    };
  });
}

/**
 * Génère une seule spline serpentine continue qui passe exactement par
 * tous les nœuds. Chaque segment est une Bézier cubique avec **tangentes
 * verticales** aux extrema (control points colinéaires verticalement) →
 * pas de cassure, pas de croisement, pas de retour-arrière.
 */
export function buildParcoursSplinePath(coords: ParcoursNodeCoord[]): string {
  if (coords.length < 2) return '';
  let path = `M ${coords[0].x} ${coords[0].y}`;
  for (let i = 1; i < coords.length; i++) {
    const prev = coords[i - 1];
    const curr = coords[i];
    const half = (curr.y - prev.y) / 2;
    // Control points : (prev.x, prev.y + half) puis (curr.x, curr.y - half)
    // → tangente verticale aux deux extrémités, swap latéral lisse.
    path += ` C ${prev.x} ${prev.y + half}, ${curr.x} ${curr.y - half}, ${curr.x} ${curr.y}`;
  }
  return path;
}

export function computeParcoursTotalHeight(count: number): number {
  return PARCOURS_LAYOUT.Y_START * 2 + Math.max(0, count - 1) * PARCOURS_LAYOUT.Y_STEP;
}
