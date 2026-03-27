

## Plan : Test → Niveau, Catalogue avec curriculum, Leçons A1.2

### 1. Test de niveau → mise à jour du niveau utilisateur

**Fichier : `src/pages/TestNiveau.tsx`**
- Après le résultat du test, appeler `addXP` ou directement mettre à jour le `cecr_level` dans le profil utilisateur via `useUserProgress`
- Ajouter un nouveau hook/méthode `setLevel(level)` dans `useUserProgress` pour forcer le niveau après un test
- Sauvegarder le résultat en base (utilisateur connecté) ou localStorage (visiteur)
- Le bouton "Voir les cours" redirige vers `/catalogue?level=X`

**Fichier : `src/hooks/useUserProgress.ts`**
- Ajouter une fonction `setLevel(level: CECRLevel)` qui met à jour le niveau + XP correspondant dans le profil
- Ajuster le XP pour correspondre au début du niveau détecté (ex: B1 → 10000 XP)

### 2. Catalogue — intégrer les cours du curriculum avec images

**Fichier : `src/data/demo-courses.ts`**
- Générer automatiquement les `Course` objects à partir du `curriculum.ts` pour chaque module (30 modules = 30 cours dans le catalogue)
- Chaque module devient un cours avec : image Unsplash thématique, level, theme, durée, progression, content types
- Supprimer ou fusionner les anciens `demoCourses` statiques

**Fichier : `src/pages/Catalogue.tsx`**
- Utiliser les cours générés depuis le curriculum au lieu des `demoCourses` statiques
- La progression se met à jour en lisant `localStorage` (cours complétés)
- Le verrouillage suit la logique `isLevelAccessible` basée sur le niveau actuel

**Fichier : `src/components/courses/CourseCard.tsx`**
- Adapter pour pointer vers `/programme` ou directement vers la première leçon du module

### 3. Programme — mise à jour dynamique de la progression

**Fichier : `src/pages/Curriculum.tsx`**
- Calculer la progression de chaque module à partir des leçons complétées en localStorage
- Débloquer les niveaux uniquement si le test de niveau l'a validé OU si l'utilisateur a atteint le XP requis
- Afficher visuellement le niveau courant de l'utilisateur

### 4. Contenu interactif A1.2 (10 leçons)

**Fichier : `src/data/a1-module2-content.ts`** (nouveau)
- Créer les 10 leçons interactives du module A1.2 "Mon monde quotidien" avec le même format que A1.1 :
  - **Leçon 11** : Ma famille — vocabulaire famille, arbre généalogique, QCM, flashcards
  - **Leçon 12** : Il est grand, elle est petite — adjectifs physiques, accord M/F, exercices
  - **Leçon 13** : Les couleurs de la Provence — couleurs, association image, QCM
  - **Leçon 14** : Qu'est-ce que c'est ? — objets quotidiens, articles le/la/un/une, exercices
  - **Leçon 15** : Les chiffres de 20 à 100 — écoute, écriture, exercices
  - **Leçon 16** : J'ai / Je n'ai pas — verbe avoir, négation, exercices
  - **Leçon 17** : C'est mon / ma / mes — possessifs, exercices
  - **Leçon 18** : Chez moi — logement, description, texte à trous
  - **Leçon 19** : Révision Module A1.2 — quiz récapitulatif
  - **Leçon 20** : Examen Module A1.2 — 15 questions, badge "Explorateur"

Chaque leçon inclut 6-8 steps variés : lesson (théorie), QCM, fill-blank, flashcards, listening, drag-drop, final-quiz (examen).

**Fichier : `src/data/course-content.ts`**
- Importer et ajouter `a1Module2Content` à `allCourseContent`

### Résumé des fichiers

**Créés :**
- `src/data/a1-module2-content.ts` — 10 leçons interactives A1.2

**Modifiés :**
- `src/hooks/useUserProgress.ts` — ajout `setLevel()` 
- `src/pages/TestNiveau.tsx` — sauvegarde du niveau après test
- `src/data/demo-courses.ts` — cours générés depuis curriculum
- `src/pages/Catalogue.tsx` — utiliser curriculum courses
- `src/data/course-content.ts` — import A1.2 content
- `src/pages/Curriculum.tsx` — progression dynamique

