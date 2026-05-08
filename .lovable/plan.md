
# Batch 7 — Compétitif (Classement + Daily + Speed)

Refonte visuelle et animée des trois écrans compétitifs. Aucun changement de
schéma DB ni de RPC : on capitalise sur `useLeague`, `useDailyChallenge`,
`mark_daily_done`, `award_xp` et la table `league_history` déjà en place.

## 1. Classement (`src/pages/Classement.tsx` + `LeagueView.tsx`)

- **Onglets animés** : remplacer la `TabsList` actuelle par un indicateur
  glissant (`framer-motion` `layoutId`) sous l'onglet actif, transitions
  douces entre Ligue / Global / Niveau / Streak.
- **Podium top-3** : entrée stagger (300ms decalé), pulse dorée permanente
  derrière le rang 1, halo lumineux animé pour le rang du joueur s'il est
  dans le top 3.
- **Lignes du leaderboard** : `AnimatePresence` + `layout` pour animer
  réorganisations quand l'XP change en temps réel (event `xp-update` déjà
  déclenché). Hover lift subtil.
- **"Ma position" sticky** : amélioration visuelle (gradient cia-blue →
  cia-gold, badge XP, mini-avatar). Glissement depuis le bas à l'apparition.
- **LeagueView**:
  - **Compte à rebours fin de semaine** : digits animés (flip vertical à
    chaque seconde), couleur passe en `cia-gold` puis `destructive` les 24
    dernières heures.
  - **Promotion / relégation** : zones colorées avec animation pulse douce
    sur la bordure ("breathing") pour attirer l'œil.
  - **Bandeau résultat semaine précédente** (`lastResult`) : confettis
    ponctuels si `outcome === 'promoted'`, slide-in avec scale au mount,
    bouton dismiss qui mémorise `mem-key` dans localStorage
    (`league-result-seen:<week_start>`) pour ne pas le réafficher.
  - **Sélecteur de ligue** : transition de `LeagueBadge` (rotation 360° +
    scale) quand on switche.

## 2. Daily Challenge (`src/pages/DailyChallenge.tsx`)

- **Header festif** : flamme animée (échelle pulsée + halo orange diffus
  derrière), badge "DÉFI DU JOUR" qui ondule doucement.
- **Streak actuel** : compteur animé via `AnimatedCounter` existant +
  particules orange en arrière-plan si `streak >= 7`.
- **Sélecteur niveau** : underline glissant + scale 1.05 sur le niveau
  sélectionné, indicateur "VERROUILLÉ" pour les niveaux non débloqués
  (réutilise `useUserProgress.cecrLevel` pour griser au-dessus).
- **Carte leçon du jour** :
  - Si `isDoneToday`: animation checkmark dessiné (SVG path stroke
    animation) + countdown "Reviens dans Xh Ymin" jusqu'à minuit Paris.
  - Sinon : CTA gradient orange→rouge avec shimmer effect, micro
    rotation au hover.
- **Top des séries** :
  - Header animé "🔥 Top des séries"
  - Lignes avec stagger fade-in
  - Couronne or animée (rotation perpétuelle douce 8s) sur le #1
  - Highlight "(vous)" avec ring pulsé

## 3. Speed Test (`src/pages/SpeedTest.tsx`)

- **Intro** :
  - Icône `Zap` plus dynamique (rotation + glow gold)
  - Card stats avec entrée stagger
  - Record actuel : animation trophy + chiffre AnimatedCounter
- **Phase playing** :
  - Timer : devient bouton circulaire avec progress radial (au lieu d'une
    barre linéaire), couleurs sémantiques `primary` → `cia-gold` →
    `destructive` selon `timeLeft`
  - Score/erreurs : `AnimatedCounter`, micro-burst (3 particules vertes /
    rouges) à chaque tick correct/wrong à l'origine du badge
  - Question : transition slide horizontale entre questions
    (`AnimatePresence mode="wait"`), shake horizontal léger sur mauvaise
    réponse, pulse vert sur bonne réponse
  - Boutons réponses : tap scale, ripple gradient au clic
  - Combo counter : si 3+ bonnes réponses consécutives → badge "Combo x3"
    qui apparaît en haut, +1 par bonne, reset sur erreur (UI seulement,
    pas d'XP supplémentaire — on garde la même formule de score)
- **Phase done** :
  - Trophée avec entrée scale + rotation
  - Stats AnimatedCounter (compte de 0 → valeur finale en 1s)
  - Confettis si `newRecord` (réutilise approche de `LevelUpCelebration`)
  - CTA "Rejouer" avec shimmer

## 4. Composants nouveaux / partagés

- `src/components/leaderboard/CountdownDigit.tsx` — un digit avec flip
  vertical, utilisé dans `LeagueView` et `DailyChallenge` (countdown
  minuit).
- `src/components/leaderboard/PromoZoneIndicator.tsx` — bordure animée
  réutilisée dans `LeagueView`.
- `src/components/speed-test/RadialTimer.tsx` — SVG circle progress avec
  couleur dynamique.
- `src/components/speed-test/AnswerBurst.tsx` — particules vert/rouge
  émises au point d'origine (mêmes principes que `XPBurst`).
- `src/components/speed-test/ComboBadge.tsx` — badge combo animé.

## 5. i18n

- Ajout d'une section `competitive.*` dans les 6 locales (FR / EN / ES /
  DE / IT / RU) :
  - `competitive.combo` (Combo x{n} !)
  - `competitive.weekEndsIn`, `competitive.daysShort`, etc.
  - `competitive.newRecord`, `competitive.tryAgain`
  - `competitive.streakLeaders`, `competitive.youArePromoted`,
    `competitive.youWereDemoted`
- Les chaînes en dur en français dans `LeagueView`, `Classement`, `SpeedTest`,
  `DailyChallenge` migrent vers `useTranslation`.

## 6. Accessibilité & motion

- Toutes les animations (confettis, particules, rotations perpétuelles,
  combo) respectent `prefers-reduced-motion: reduce` → fallback sans
  animation.
- Couleurs uniquement via tokens sémantiques (`primary`, `cia-gold`,
  `cia-streak`, `cia-xp`, `destructive`, `cia-success`). Aucun hex en dur
  dans les nouveaux composants.

## 7. Hors scope (à confirmer)

- Pas de modification du schéma DB ni des RPC (`mark_daily_done`,
  `rotate_weekly_leagues`, `award_xp` inchangés).
- Pas d'ajout d'XP via Speed Test (formule actuelle conservée).
- Pas de nouvelle table de records — `localStorage` reste la source pour
  Speed Test best score.
- Le combo en Speed Test est purement visuel (pas d'impact XP).

## Fichiers touchés (estimation)

- `src/pages/Classement.tsx`
- `src/pages/DailyChallenge.tsx`
- `src/pages/SpeedTest.tsx`
- `src/components/leaderboard/LeagueView.tsx`
- `src/components/leaderboard/LeagueBadge.tsx` (animations transition)
- `src/components/leaderboard/CountdownDigit.tsx` (nouveau)
- `src/components/leaderboard/PromoZoneIndicator.tsx` (nouveau)
- `src/components/speed-test/RadialTimer.tsx` (nouveau)
- `src/components/speed-test/AnswerBurst.tsx` (nouveau)
- `src/components/speed-test/ComboBadge.tsx` (nouveau)
- `src/i18n/locales/{fr,en,es,de,it,ru}.json`
