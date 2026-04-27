## Plan : Test de vitesse par niveau (Speed Test 1:30)

### Objectif
Ajouter, pour chaque niveau CECR (A1 → C2), une leçon spéciale **"⚡ Test de vitesse"** : un challenge chronométré de **90 secondes** où l'apprenant doit répondre à un maximum de questions correctes. Score = nombre de bonnes réponses, classement et XP bonus à la clé.

### Fonctionnement du jeu

- **Durée fixe** : 90 secondes (chronomètre visible en haut, change de couleur sous 30s puis 10s)
- **Banque de questions** : ~50 questions QCM rapides par niveau (vocabulaire, grammaire, conjugaison, conjugaisons-éclair) — choisies au hasard à chaque tentative
- **Format question** : QCM 1 question + 4 options, validation **automatique** au clic (pas de bouton "Vérifier")
- **Feedback ultra-rapide** : flash vert/rouge pendant 400ms puis question suivante
- **Pénalité** : mauvaise réponse = +1 erreur (pas de retrait de temps, on garde la pression du timer)
- **Fin** : timer à 0 → écran de résultats avec score final, précision %, meilleur score perso, XP gagné
- **XP** : `bonnesRéponses × 10 XP` + bonus de **+50 XP** si record personnel battu
- **Score sauvegardé** dans localStorage par niveau (`speed-test-best:A1`, etc.)

### Où ça vit dans l'UI

1. **Une "leçon" virtuelle par niveau** dans le Programme : insérée comme dernière carte de chaque niveau dans `LearningPath`, avec un visuel distinct (badge ⚡, fond doré dégradé, libellé "TEST DE VITESSE").
2. **Route dédiée** : `/test-vitesse/:level` (ex : `/test-vitesse/A1`) — ne passe pas par `CourseDetail` car le format est différent (pas d'étapes, juste le challenge + écran de résultat).
3. **Déverrouillage** : disponible uniquement si **au moins un module du niveau** est terminé (sinon carte verrouillée avec message "Termine ton premier module pour débloquer le test de vitesse").

### Synchro avec les autres systèmes

- **XP gagné** → utilise `addXP()` du hook `useUserProgress` → met à jour automatiquement Header + Profil + Classement (déjà branché via `xp-update` event).
- **Classement** : l'XP gagné fait monter dans le leaderboard global. (Une V2 pourrait ajouter un classement spécifique "meilleur score speed-test" — hors périmètre.)

### Fichiers créés

- `src/data/speed-test-questions.ts` — banque de ~50 questions par niveau (300+ questions au total). Format simple :
  ```ts
  { question: string; options: string[]; correctIndex: number }
  ```
- `src/pages/SpeedTest.tsx` — page complète du jeu :
  - Écran 1 : intro avec règles + bouton "Commencer" + meilleur score
  - Écran 2 : jeu (timer, question courante, score live, barre de temps)
  - Écran 3 : résultats (score, précision, XP gagné, "Rejouer" / "Retour au programme")

### Fichiers modifiés

- `src/App.tsx` — ajout de la route `/test-vitesse/:level`
- `src/components/courses/LearningPath.tsx` — ajout d'une carte "Test de vitesse" en fin de chaque niveau, avec icône `Zap` et lien vers `/test-vitesse/{level}`

### Détails techniques (UI/UX)

- Composant utilise `useEffect` + `setInterval` pour le timer décrémenté chaque 100ms (pour fluidité de la barre de progression)
- Questions tirées aléatoirement avec `Array.sort(() => Math.random() - 0.5).slice(0, 100)` (pool large pour éviter la répétition durant la même partie)
- Ordre des options aussi randomisé à chaque question
- Animation : pulse rouge quand timer < 10s, scale du score à chaque bonne réponse
- Bouton "Stop" pour arrêter avant la fin (compte le score actuel)
- Mobile-friendly : boutons de réponse pleine largeur, gros texte

### Hors périmètre (V2)
- Leaderboard dédié speed-test
- Modes (vocabulaire only / grammaire only)
- Multi-joueur en temps réel
