

## Plan : Intégrer les personnages avec du storytelling dans tous les niveaux

### Constat actuel

- **Infrastructure OK** : `StepCharacterBubble` et `CharacterBubble` fonctionnent, tous les types de steps supportent `characterId`
- **A2 à B2** : les `characterId` sont déjà présents sur la plupart des steps
- **A1 modules 1 et 2** : seuls les steps `listening` ont un `characterId` — les lesson, qcm, fill-blank, drag-drop, flashcard et final-quiz n'en ont pas
- **Problème principal** : le `CharacterBubble` affiche seulement le nom + catchphrase générique du niveau. Il n'y a pas de **dialogue contextuel** par step — le personnage ne "parle" pas en lien avec l'exercice

### Ce qui sera fait

#### 1. Ajouter un champ `characterMessage` aux types de steps

Dans `src/data/course-content.ts`, ajouter un champ optionnel `characterMessage?: string` à chaque interface de step (LessonStep, QCMStep, FillBlankStep, DragDropStep, FlashcardStep, FinalQuizStep). Ce message est une réplique contextuelle du personnage liée à l'exercice.

#### 2. Afficher le message contextuel dans `CharacterBubble`

Modifier `StepCharacterBubble` pour accepter un prop `message?: string`. Modifier `CharacterBubble` pour afficher ce message à la place du catchphrase quand il est fourni. Le message apparaît dans une bulle de dialogue stylisée (type "speech bubble").

#### 3. Ajouter les `characterId` manquants dans A1 modules 1 et 2

Parcourir les ~20 leçons A1 et assigner un personnage à chaque step qui n'en a pas, en suivant la répartition existante :
- `marie` → lesson introductives, final-quiz
- `lucas` → qcm, scènes sociales
- `yuki` → flashcard, vocabulaire
- `omar` → listening (déjà fait), cuisine
- `elena` → qcm, opinions
- `fatou` → fill-blank, grammaire
- `hans` → drag-drop, exercices structurés
- `thomas` → flashcard, culture

#### 4. Ajouter des `characterMessage` narratifs dans tous les modules

Pour chaque step, ajouter un `characterMessage` court (1-2 phrases) en rapport avec l'exercice et le personnage. Exemples :

| Step | Personnage | characterMessage |
|------|-----------|-----------------|
| Lesson "Bonjour" | marie | "Bienvenue dans ma classe ! Aujourd'hui, on apprend à se saluer." |
| QCM salutations | lucas | "Moi aussi au début, je confondais bonjour et bonsoir !" |
| Flashcard famille | yuki | "Au Japon, la famille c'est très important aussi !" |
| Fill-blank passé composé | fatou | "Le passé composé, c'est comme une recette : sujet + avoir + participe !" |
| Final quiz | marie | "Voyons ce que vous avez retenu. Je suis sûre que vous allez réussir !" |

Cela concerne les fichiers suivants :
- `src/data/a1-module1-content.ts` (leçons 1-10)
- `src/data/a1-module2-content.ts` (leçons 11-20)
- `src/data/a2-module1-content.ts` à `a2-module5-content.ts` (leçons 51-100)
- `src/data/b1-module1-content.ts` à `b1-module5-content.ts` (leçons 101-150)
- `src/data/b2-module1-content.ts` à `b2-module5-content.ts` (leçons 151-200)

### Fichiers modifiés

| Fichier | Action |
|---------|--------|
| `src/data/course-content.ts` | Ajouter `characterMessage?: string` à toutes les interfaces de step |
| `src/components/course-player/CharacterBubble.tsx` | Afficher `message` en priorité sur `catchphrase`, style bulle de dialogue |
| `src/components/course-player/StepCharacterBubble.tsx` | Passer le `characterMessage` du step au `CharacterBubble` |
| `src/data/a1-module1-content.ts` | Ajouter `characterId` + `characterMessage` à tous les steps |
| `src/data/a1-module2-content.ts` | Idem |
| `src/data/a2-module1-content.ts` à `a2-module5-content.ts` | Ajouter `characterMessage` (characterId déjà présent) |
| `src/data/b1-module1-content.ts` à `b1-module5-content.ts` | Idem |
| `src/data/b2-module1-content.ts` à `b2-module5-content.ts` | Idem |
| `src/data/course-content.ts` (allCourseContent) | Ajouter `characterMessage` aux cours existants dans le fichier |

### Approche storytelling

Les messages des personnages suivent leur arc narratif défini dans `characters.ts` :
- **Niveau A1** : phrases simples, encouragements, le personnage se présente
- **Niveau A2** : le personnage partage ses expériences à Antibes, fait des comparaisons culturelles
- **Niveau B1** : le personnage donne son opinion, utilise des expressions idiomatiques
- **Niveau B2** : le personnage argumente, utilise un registre plus soutenu

Le ton et le vocabulaire de chaque message correspondent au niveau CECR du module.

