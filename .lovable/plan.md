

## Plan : Créer le contenu des cours A2.1 à A2.5 (leçons 51-100)

### Structure

5 nouveaux fichiers de contenu, un par module, suivant exactement le même format que `a1-module1-content.ts` et `a1-module2-content.ts`. Chaque leçon contient ~8 steps variés (lesson, qcm, fill-blank, drag-drop, flashcard, listening, final-quiz) avec des `characterId` assignés.

### Fichiers à créer

| Fichier | Module | Leçons | Thème |
|---------|--------|--------|-------|
| `src/data/a2-module1-content.ts` | A2.1 | 51-60 | Raconter au passé (passé composé, imparfait) |
| `src/data/a2-module2-content.ts` | A2.2 | 61-70 | La vie sociale (opinions, émotions, comparatif) |
| `src/data/a2-module3-content.ts` | A2.3 | 71-80 | Le monde du travail (CV, entretien, futur proche) |
| `src/data/a2-module4-content.ts` | A2.4 | 81-90 | Santé et bien-être (corps, sport, impératif) |
| `src/data/a2-module5-content.ts` | A2.5 | 91-100 | Découvrir la France (régions, culture, PC vs imparfait) |

### Fichier à modifier

| Fichier | Action |
|---------|--------|
| `src/data/course-content.ts` | Importer les 5 nouveaux fichiers et les ajouter au `allContent` |

### Format de chaque leçon

Chaque `CourseContent` a un `courseId: 'lesson-{id}'` et ~8 steps :
1. **lesson** — introduction du thème (characterId: `marie`)
2. **listening** — compréhension orale (characterId: personnage varié)
3. **qcm** — question à choix multiples
4. **flashcard** — vocabulaire clé (characterId: `thomas`)
5. **fill-blank** — compléter la phrase
6. **drag-drop** — remettre dans l'ordre
7. **qcm** — 2e question
8. **final-quiz** — quiz final de 5 questions (characterId: `marie`)

Les leçons 9 et 10 de chaque module sont des révisions/examens avec davantage de questions de quiz.

### Répartition des personnages

- `marie` → leçons introductives, quiz finaux (professeure)
- `lucas` → exercices passé composé, vie sociale
- `yuki` → exercices de vocabulaire, drag-drop
- `omar` → listening, interactions culturelles
- `elena` → qcm, comparatif, opinions
- `fatou` → fill-blank, exercices de grammaire
- `hans` → monde du travail, exercices formels
- `thomas` → flashcards, culture française

### Contenu pédagogique

Le contenu suit exactement le curriculum défini dans `curriculum.ts` (titres, compétences, descriptions). Chaque step est contextualisé à Antibes/Côte d'Azur quand c'est pertinent, avec un niveau de langue A2 (phrases plus complexes qu'en A1, passé composé, imparfait, comparatif, etc.).

