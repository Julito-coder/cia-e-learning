

## Plan : Sections séparées, personnages intégrés aux cours, progression persistante

### 1. Séparer CharacterShowcase et LearningPath en sections distinctes

**Fichier : `src/pages/Index.tsx`**
- Retirer le CharacterShowcase du bloc `card-duo` qui contient le LearningPath (lignes 229-242)
- Créer une section pleine largeur dédiée "Nos personnages" **au-dessus** de la section parcours, avec un titre et les 8 avatars en ligne horizontale scrollable
- La section LearningPath reste dans sa propre card séparée
- Sur mobile : CharacterShowcase en grille 2x4 ou scroll horizontal, puis LearningPath en dessous
- Sur desktop : CharacterShowcase en ligne de 8 avatars, puis LearningPath en dessous

### 2. Intégrer les personnages dans tous les types de steps des cours

**Fichier : `src/data/course-content.ts`**
- Ajouter `characterId?: string` à TOUS les types de steps (LessonStep, QCMStep, FillBlankStep, etc.), pas seulement ListeningStep
- Permet d'afficher quel personnage "parle" ou "pose la question" dans chaque exercice

**Fichiers : `src/components/course-player/LessonStep.tsx`, `QCMStep.tsx`, `FillBlankStep.tsx`, `DragDropStep.tsx`, `FlashcardStep.tsx`, `FinalQuizStep.tsx`**
- Importer `CharacterBubble` et `useUserProgress`
- Si le step a un `characterId`, afficher la bulle du personnage en haut du step (avatar + nom + catchphrase)
- Cela donne l'impression que le personnage guide/enseigne/questionne l'apprenant

**Fichiers de contenu : `src/data/a1-module1-content.ts`, `src/data/a1-module2-content.ts`, `src/data/course-content.ts`**
- Ajouter des `characterId` à tous les steps existants, en répartissant les 8 personnages selon leur rôle :
  - `marie` → lessons (c'est la prof)
  - `lucas`, `yuki`, `omar`, `elena`, `fatou`, `hans` → exercices variés (les étudiants posent des questions, font des dialogues)
  - `thomas` → culture, flashcards (c'est le barman/local)

### 3. Persister la progression par module/cours (correctCount + step)

**Fichier : `src/components/course-player/CoursePlayer.tsx`**
- Actuellement : `correctCount` et `totalQuestions` sont en mémoire (state) et se perdent quand on quitte
- **Fix** : sauvegarder `correctCount` et `totalQuestions` dans localStorage en plus du `currentStep`
- Clé : `course-progress-state-${courseId}` → `{ step, correctCount, totalQuestions }`
- Au montage, restaurer les 3 valeurs
- À la complétion, nettoyer cette clé
- Cela permet de passer d'un cours à un autre et de retrouver sa progression exacte

### Fichiers modifiés

| Fichier | Action |
|---------|--------|
| `src/pages/Index.tsx` | Séparer showcase et path en 2 sections |
| `src/data/course-content.ts` | Ajouter `characterId?` à tous les types |
| `src/components/course-player/CoursePlayer.tsx` | Persister correctCount/totalQuestions |
| `src/components/course-player/LessonStep.tsx` | Afficher CharacterBubble si characterId |
| `src/components/course-player/QCMStep.tsx` | Idem |
| `src/components/course-player/FillBlankStep.tsx` | Idem |
| `src/components/course-player/DragDropStep.tsx` | Idem |
| `src/components/course-player/FlashcardStep.tsx` | Idem |
| `src/components/course-player/FinalQuizStep.tsx` | Idem |
| `src/data/a1-module1-content.ts` | Ajouter characterId à tous les steps |
| `src/data/a1-module2-content.ts` | Idem |

