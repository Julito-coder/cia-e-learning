

## Plan : Synchroniser Catalogue et Programme

### Constat actuel
- **Catalogue** et **Programme** utilisent déjà les mêmes données (curriculum.ts → demoCourses). Les cours affichés sont identiques.
- **Programme** est un listing accordion par niveau/module, pas un chemin visuel type Duolingo.
- Le Catalogue fonctionne déjà bien comme moteur de recherche avec filtres, images et cards.

### Changements

#### 1. Programme → Chemin tracé visuel (Duolingo-style)

**Fichier : `src/pages/Curriculum.tsx`** — Refonte complète

Remplacer l'accordion actuel par un parcours visuel vertical :
- Chaque niveau = une section avec un bandeau coloré (titre + emoji + statut verrouillé/actuel)
- Chaque module = un **noeud circulaire** disposé en zigzag (alternance gauche/droite), relié par une ligne courbe SVG
- Noeud vert (✓) = module terminé, noeud pulsant (▶) = en cours, noeud gris (★) = disponible, noeud verrouillé (🔒)
- Au clic sur un noeud, un **tooltip/popup** apparaît avec : titre du module, progression, nombre de leçons, bouton "Commencer" / "Continuer"
- Utiliser le composant `LearningPath` existant mais l'adapter pour afficher les modules (pas les cours) avec les données du curriculum
- Garder un filtre par niveau en haut (chips) pour scroller directement au niveau voulu

#### 2. Catalogue — Confirmer qu'il affiche les cours du curriculum

**Fichier : `src/pages/Catalogue.tsx`** — Ajustements mineurs
- Les données viennent déjà de `demoCourses` (généré depuis curriculum) — OK
- Ajouter la recherche par **nom de leçon** en plus du nom de module (fouiller dans `curriculum` pour matcher les leçons individuelles)
- Ajouter un filtre "En cours" et "Terminé" en plus de "Nouveau"
- Le bouton sur chaque carte mène directement à `/programme?module=X` (déjà le cas)

#### 3. LearningPath — Adapter pour les modules curriculum

**Fichier : `src/components/courses/LearningPath.tsx`** — Refactoring
- Accepter des `Module[]` en plus des `Course[]`
- Noeuds plus gros (80px), avec l'emoji du badge du module à l'intérieur
- Ligne de connexion SVG courbe entre les noeuds (pas juste un div droit)
- Label sous chaque noeud : code module (A1.1) + titre court
- Progression circulaire autour du noeud si en cours

### Fichiers modifiés
- `src/pages/Curriculum.tsx` — refonte en chemin tracé visuel
- `src/components/courses/LearningPath.tsx` — adaptation pour modules
- `src/pages/Catalogue.tsx` — ajout filtre "En cours"/"Terminé" + recherche par leçon

