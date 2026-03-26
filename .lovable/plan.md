

## Refonte UX Moderne — Style Duolingo + CIA

### Vision
Transformer l'interface actuelle (classique/corporate) en une expérience gamifiée, colorée et engageante inspirée de Duolingo, tout en conservant l'identité CIA (bleu marine, or). Ajouter un test de français en ligne et de nouvelles fonctionnalités de profondeur.

### 1. Design System — Gamification & Animations

**Fichiers : `src/index.css`, `tailwind.config.ts`**
- Ajouter des animations riches : bounce, pulse, confetti, progress-fill, slide-up staggeré, shake (erreur), celebrate (succès)
- Coins arrondis plus prononcés (radius 1rem), ombres douces colorées
- Palette élargie avec des couleurs vives pour la gamification : vert succès, orange XP, rouge streak, violet bonus
- Cards avec bordures épaisses colorées en bas (style Duolingo)
- Transitions fluides sur toutes les interactions

### 2. Header Modernisé

**Fichier : `src/components/layout/Header.tsx`**
- Barre de navigation avec icônes + labels, style bottom-bar mobile
- Affichage du streak (flamme 🔥), XP et gems dans le header
- Avatar utilisateur avec niveau affiché en badge
- Navigation plus visuelle avec indicateurs actifs animés

### 3. Dashboard (Index) — Gamifié

**Fichier : `src/pages/Index.tsx`**
- **Section héro** repensée : carte de bienvenue avec mascotte/illustration, streak animé, XP du jour
- **Parcours d'apprentissage** : parcours visuel en arbre/chemin (comme Duolingo) avec nœuds de cours connectés par des lignes, états verrouillé/en cours/complété
- **Stats gamifiées** : cercles de progression animés au lieu de barres, compteurs animés
- **Section "Objectif du jour"** : barre de progression quotidienne (ex: 3/5 exercices)
- **Classement** : mini leaderboard avec avatars
- **Badges/Récompenses** : section trophées débloqués

### 4. Catalogue Repensé

**Fichier : `src/pages/Catalogue.tsx`**
- Navigation par niveaux en onglets visuels avec icônes et couleurs vives
- Cards de cours avec design Duolingo : illustration arrondie, barre de progression circulaire, étoiles de difficulté
- Filtres en chips horizontaux scrollables au lieu du panneau déroulant
- Animations d'entrée staggerées sur les cards

### 5. CourseCard Moderne

**Fichier : `src/components/courses/CourseCard.tsx`**
- Bordure inférieure colorée par niveau (épaisse, 4px)
- Progression circulaire au lieu de barre
- Icônes de contenu en pastilles colorées
- Animation hover plus prononcée (scale + shadow colorée)
- État "complété" avec check animé et confetti

### 6. Test de Français en Ligne (NOUVEAU)

**Nouveaux fichiers : `src/pages/TestNiveau.tsx`, `src/components/test/*`**
- **Page d'accueil du test** : explication du test, durée estimée (15-20 min), CTA prominent
- **Déroulement du test** :
  - 20-30 questions progressives (A1→C2) adaptatives
  - Types : QCM, texte à trous, réordonnancement, compréhension audio
  - Barre de progression animée en haut
  - Timer optionnel
  - Animations de transition entre questions (slide)
  - Feedback visuel immédiat (vert/rouge avec animation)
- **Page résultat** : niveau CECRL déterminé avec animation de révélation, graphique radar des compétences, recommandations de cours personnalisées, bouton de partage
- Route : `/test-niveau`
- Données de test stockées dans `src/data/demo-test.ts`

### 7. Nouvelles Fonctionnalités

**Achievements/Badges** — `src/components/gamification/Achievements.tsx`
- Système de badges : "Premier cours", "Streak 7 jours", "Score parfait", "Polyglotte"
- Affichage en grille avec états verrouillé/débloqué
- Animation de déblocage

**Objectifs quotidiens** — `src/components/gamification/DailyGoal.tsx`
- Widget avec progression circulaire animée
- Choix d'objectif (5/10/15/20 min par jour)

**Parcours visuel** — `src/components/courses/LearningPath.tsx`
- Visualisation en chemin vertical avec nœuds connectés (inspiré Duolingo)
- États : verrouillé (gris), disponible (couleur), en cours (pulsing), complété (étoile)

### 8. Mise à Jour du Routage

**Fichier : `src/App.tsx`**
- Ajouter route `/test-niveau`
- Ajouter route `/profil` (page profil avec badges)
- Mettre à jour la navigation

### Résumé des fichiers impactés
- **Modifiés** : `index.css`, `tailwind.config.ts`, `Header.tsx`, `Index.tsx`, `Catalogue.tsx`, `CourseCard.tsx`, `CourseDetail.tsx`, `App.tsx`, `Footer.tsx`
- **Créés** : `TestNiveau.tsx`, `demo-test.ts`, `LearningPath.tsx`, `DailyGoal.tsx`, `Achievements.tsx`, `CircularProgress.tsx`, `AnimatedCounter.tsx`

