

## Contenu Interactif des 10 Cours — Style Duolingo

### Architecture

Transformer `CourseDetail.tsx` d'une page statique en un **lecteur de cours interactif** avec des leçons séquentielles (étapes) que l'apprenant parcourt une par une, style Duolingo.

### 1. Données de contenu — `src/data/course-content.ts`

Créer un fichier contenant le contenu pédagogique des 10 cours. Chaque cours est découpé en **6-10 étapes** (steps) de types variés :

- **`lesson`** : texte pédagogique illustré (règle de grammaire, explication vocabulaire)
- **`qcm`** : question à choix multiples avec feedback immédiat
- **`fill-blank`** : phrase à trous avec sélection de la bonne réponse
- **`drag-drop`** : remettre des mots dans l'ordre ou associer paires
- **`flashcard`** : carte recto/verso avec mot et traduction/définition
- **`listening`** : compréhension orale (texte lu par synthèse vocale + questions)
- **`final-quiz`** : quiz de validation de fin de cours (5 questions, score minimum pour valider)

Structure TypeScript :
```text
CourseStep = {
  id, type, title,
  // Pour lesson: content (HTML), tip?
  // Pour qcm: question, options[], correctIndex, explanation
  // Pour fill-blank: sentence (avec ___), options[], correctAnswer
  // Pour drag-drop: instruction, items[], correctOrder[]
  // Pour flashcard: cards[{front, back}]
  // Pour listening: text (lu par SpeechSynthesis), questions[]
  // Pour final-quiz: questions[] (mix de qcm/fill-blank)
}
```

Contenu CECRL par cours :
1. **A1 Grammaire** — Articles définis/indéfinis : leçon sur le/la/les/un/une/des, QCM, textes à trous, quiz final
2. **A1 Vocabulaire** — Se présenter : flashcards (je m'appelle, j'habite...), écoute, QCM, quiz final
3. **A1 Culture** — Antibes : texte illustré, QCM culture, drag-drop géographie, quiz final
4. **A2 Grammaire** — Passé composé : leçon être/avoir, fill-blank conjugaisons, drag-drop ordre, quiz final
5. **A2 Compréhension orale** — Conversation simple : écoute synthèse vocale, QCM compréhension, fill-blank, quiz final
6. **B1 Vocabulaire** — Monde du travail : flashcards pro, QCM contexte, fill-blank lettres formelles, quiz final
7. **B1 Expression orale** — Donner son opinion : leçon connecteurs, écoute modèle, QCM structures, quiz final
8. **B2 Compréhension écrite** — Presse française : texte article, QCM compréhension fine, fill-blank synonymes, quiz final
9. **B2 Grammaire** — Subjonctif : leçon formation/usage, drag-drop indicatif vs subjonctif, fill-blank, quiz final
10. **C1 Culture** — Littérature contemporaine : texte auteurs, QCM mouvements, drag-drop associations, quiz final

### 2. Composants d'exercices — `src/components/course-player/`

Créer un dossier avec les composants interactifs :

- **`CoursePlayer.tsx`** : orchestrateur principal, barre de progression en haut, navigation entre steps, gestion du score
- **`LessonStep.tsx`** : affichage texte pédagogique avec mise en forme, tip box, bouton "Continuer"
- **`QCMStep.tsx`** : 4 options en boutons colorés, feedback vert/rouge immédiat avec animation (shake erreur, bounce succès), explication après réponse
- **`FillBlankStep.tsx`** : phrase avec zone vide cliquable, options en chips dessous, feedback animé
- **`DragDropStep.tsx`** : éléments draggables à placer dans le bon ordre ou bonnes zones
- **`FlashcardStep.tsx`** : carte 3D flip au clic, navigation swipe entre cartes
- **`ListeningStep.tsx`** : bouton play utilisant `SpeechSynthesis` API (voix française), puis QCM de compréhension
- **`FinalQuizStep.tsx`** : séquence de 5 questions, barre de vies (3 erreurs max), score final avec animation de célébration, badge si réussi

### 3. Page CourseDetail refaite — `src/pages/CourseDetail.tsx`

Refonte complète :
- **Mode aperçu** (avant de commencer) : hero + description + bouton "Commencer"
- **Mode lecteur** (après clic) : plein écran avec `CoursePlayer` qui affiche les steps séquentiellement
- Barre de progression animée en haut (style Duolingo verte)
- Bouton "Quitter" pour revenir à l'aperçu
- Score et progression sauvegardés en localStorage
- Animation de fin de cours avec confetti et récapitulatif du score

### 4. Résumé des fichiers

**Créés :**
- `src/data/course-content.ts` (~800-1000 lignes de contenu pédagogique)
- `src/components/course-player/CoursePlayer.tsx`
- `src/components/course-player/LessonStep.tsx`
- `src/components/course-player/QCMStep.tsx`
- `src/components/course-player/FillBlankStep.tsx`
- `src/components/course-player/DragDropStep.tsx`
- `src/components/course-player/FlashcardStep.tsx`
- `src/components/course-player/ListeningStep.tsx`
- `src/components/course-player/FinalQuizStep.tsx`

**Modifiés :**
- `src/pages/CourseDetail.tsx` — intégration du CoursePlayer

