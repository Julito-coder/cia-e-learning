

## Plan : 3 corrections

### 1. Espacement parcours / footer

**Fichier : `src/pages/Curriculum.tsx`**
- Ajouter `pb-24` (ou `pb-32`) au container principal pour créer un espace suffisant entre le dernier noeud du parcours et le footer.

### 2. Voix naturelle via Web Speech API améliorée

**Fichier : `src/components/course-player/ListeningStep.tsx`**
- Remplacer la sélection de voix par défaut par une recherche intelligente de voix françaises naturelles disponibles dans le navigateur.
- Prioriser les voix premium/naturelles (filtrer par `voice.name` contenant "Google", "Microsoft", "Enhanced", "Natural", "Premium") et éviter celles contenant "compact" ou "espeak".
- Ajouter un `speechSynthesis.onvoiceschanged` pour charger les voix de manière asynchrone (nécessaire sur Chrome).
- Ajuster les paramètres : `pitch = 1.0`, `rate = 0.85`, `volume = 1.0`.

### 3. Traduction de l'interface des cours (UI, pas le contenu français)

Tous les textes d'interface dans les composants de cours sont actuellement en français en dur. Il faut les passer par `useTranslation()`.

**Fichier : `src/i18n/locales/fr.json` + en/es/de/it/ru.json**
- Ajouter une section `"player"` avec toutes les clés UI des cours :
  - `continue`, `next`, `previous`, `check`, `correct`, `incorrect`, `clickToListen`, `listening`, `clickToReplay`, `clickToFlip`, `goodAnswer`, `correctAnswerWas`, `perfect`, `clickWordsBelow`, `congratulations`, `courseNotPassed`, `score`, `validated`, `keepPracticing`, `finishCourse`, `backToCourse`, `nextQuestion`, `seeResult`, `question`

**Fichiers modifiés (composants cours) :**
- `LessonStep.tsx` — bouton "Continuer"
- `QCMStep.tsx` — "Correct !", "Incorrect", "Continuer"
- `FillBlankStep.tsx` — "Bonne réponse !", "La bonne réponse était...", "Continuer"
- `DragDropStep.tsx` — "Cliquez sur les mots", "Parfait !", "Vérifier", "Continuer"
- `FlashcardStep.tsx` — "Précédent", "Suivant", "Cliquez pour retourner", "Continuer"
- `ListeningStep.tsx` — "Écoute en cours", "Cliquez pour écouter/réécouter", "Continuer"
- `FinalQuizStep.tsx` — "Félicitations !", "Cours non validé", "Score", "Terminer le cours", etc.
- `CoursePlayer.tsx` — bouton "Quitter" si applicable

Chaque composant : ajouter `const { t } = useTranslation()` et remplacer les chaînes françaises par `t('player.xxx')`.

### Fichiers modifiés
- `src/pages/Curriculum.tsx` — padding bottom
- `src/components/course-player/ListeningStep.tsx` — voix naturelle + i18n
- `src/components/course-player/LessonStep.tsx` — i18n
- `src/components/course-player/QCMStep.tsx` — i18n
- `src/components/course-player/FillBlankStep.tsx` — i18n
- `src/components/course-player/DragDropStep.tsx` — i18n
- `src/components/course-player/FlashcardStep.tsx` — i18n
- `src/components/course-player/FinalQuizStep.tsx` — i18n
- `src/components/course-player/CoursePlayer.tsx` — i18n
- `src/i18n/locales/fr.json` — section `player`
- `src/i18n/locales/en.json` — section `player`
- `src/i18n/locales/es.json` — section `player`
- `src/i18n/locales/de.json` — section `player`
- `src/i18n/locales/it.json` — section `player`
- `src/i18n/locales/ru.json` — section `player`

