import type { CECRLevel } from '@/data/demo-courses';

/**
 * Univers CECR — 6 mondes visuellement tranchés (Batch A.2 Bloc 2).
 *
 * Chaque section du Parcours bascule **tout son environnement** :
 *   - `bg`        : classe Tailwind pour le fond de section (gradient
 *                   très clair, jamais saturé — charte v2 §1 « fond
 *                   blanc dominant »).
 *   - `pathStroke`: couleur HSL CSS du tracé (cohérente avec LevelBadge).
 *   - `label`     : nom du monde (utilisé par le panneau de transition
 *                   « Bienvenue dans : … » — Bloc 4).
 *
 * Contraste explicite entre niveaux voisins (A1↔A2 : bleu↔crème ;
 * B1↔B2 : pierre↔bleu marqué ; C1↔C2 : bleu profond↔rouge prestige).
 */

export interface CECRWorld {
  bg: string;
  pathStroke: string;
  label: string;
}

export const WORLD_AMBIANCE: Record<CECRLevel, CECRWorld> = {
  A0: {
    bg: 'bg-gradient-to-b from-white to-ink-50',
    pathStroke: 'hsl(var(--ink-400))',
    label: 'Initiation',
  },
  A1: {
    /* Bord de mer azur — bleu très pâle, atmosphère légère */
    bg: 'bg-gradient-to-b from-white via-white to-cia-blue-50/50',
    pathStroke: 'hsl(var(--success-500))',
    label: 'Bord de mer',
  },
  A2: {
    /* Marché provençal ensoleillé — crème solaire léger */
    bg: 'bg-gradient-to-b from-white via-white to-cia-gold-50/55',
    pathStroke: 'hsl(var(--success-600))',
    label: 'Marché provençal',
  },
  B1: {
    /* Vieux Antibes / remparts — bleu-gris pierre */
    bg: 'bg-gradient-to-b from-white via-ink-50/30 to-ink-100/45',
    pathStroke: 'hsl(var(--cia-blue-400))',
    label: 'Vieux Antibes',
  },
  B2: {
    /* Port / le large — bleu plus marqué */
    bg: 'bg-gradient-to-b from-white via-cia-blue-50/30 to-cia-blue-100/50',
    pathStroke: 'hsl(var(--cia-blue-500))',
    label: 'Le Port',
  },
  C1: {
    /* Large profond / soir doux — bleu profond clair */
    bg: 'bg-gradient-to-b from-white via-cia-blue-100/30 to-cia-blue-200/40',
    pathStroke: 'hsl(var(--cia-blue-700))',
    label: 'Le Large',
  },
  C2: {
    /* Sommet premium — sobre prestige rouge subtil */
    bg: 'bg-gradient-to-b from-white via-white to-cia-red-50/35',
    pathStroke: 'hsl(var(--cia-red-500))',
    label: 'Sommet',
  },
};
