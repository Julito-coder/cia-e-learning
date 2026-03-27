

## Plan : Logo CIA en fond du header, ajout niveau A0, et logo sans encadré

### 1. Header — Logo CIA en filigrane dans le fond bleu dégradé

**Fichier : `src/components/layout/Header.tsx`**
- Le header actuel est en `bg-card/95` (fond clair). Le fond bleu dégradé est dans le **hero** de `Index.tsx`, pas dans le header.
- L'utilisateur veut le logo CIA visible en filigrane dans le **hero section** (le bandeau bleu dégradé de la page d'accueil), pas dans la barre de navigation blanche.
- **Action** : Dans `src/pages/Index.tsx`, ajouter le logo `/cia-logo-2.jpg` en position absolute dans la section hero avec une opacity faible (~0.08-0.10), centré, pour créer un effet watermark dans le dégradé bleu.
- Supprimer ou ajuster le watermark existant dans le header blanc (lignes 55-60 de Header.tsx) qui n'est pas visible car trop petit et trop transparent.

### 2. Logo CIA à côté de "CIA E-Learning" — sans encadré

**Fichier : `src/components/layout/Header.tsx`**
- Actuellement : `<img src="/cia-logo-2.jpg" className="h-9 rounded-lg" />` — le `rounded-lg` crée un cadre arrondi visible.
- **Action** : Retirer `rounded-lg`, ajouter un fond transparent. Si le fichier `cia-logo-2.jpg` a un fond blanc, il faut utiliser `mix-blend-mode: multiply` ou `object-fit` pour masquer le fond blanc et ne garder que le logo bleu marine.
- Alternative : appliquer `rounded-none` et potentiellement un `drop-shadow` subtil pour intégrer le logo proprement.

### 3. Ajout du niveau A0

**Fichier : `src/data/demo-courses.ts`**
- Ajouter `'A0'` au type `CECRLevel` : `'A0' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'`
- Ajouter `A0` dans le tableau `CECR_LEVELS` existant

**Fichier : `src/hooks/useUserProgress.ts`**
- Ajouter `'A0'` en premier dans `LEVEL_ORDER` : `['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2']`
- Ajuster les seuils XP :
  - 0-4999 → A0
  - 5000-9999 → A1
  - 10000-14999 → A2
  - 15000-19999 → B1
  - 20000-24999 → B2
  - 25000-29999 → C1
  - 30000+ → C2

**Fichiers impactés** : `CourseCard.tsx`, `Catalogue.tsx`, `Index.tsx` — le type `CECRLevel` se propage automatiquement, mais vérifier que les filtres et badges incluent A0.

### Résumé des fichiers modifiés
- `src/pages/Index.tsx` — logo watermark dans le hero
- `src/components/layout/Header.tsx` — logo sans encadré + suppression watermark inutile
- `src/data/demo-courses.ts` — type CECRLevel avec A0
- `src/hooks/useUserProgress.ts` — LEVEL_ORDER avec A0, seuils XP ajustés

