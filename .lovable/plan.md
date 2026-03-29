

## Plan : Restructurer le layout — Personnages à gauche, optimiser le responsive

### Probleme actuel

CharacterShowcase et LearningPath sont empilés dans la sidebar droite (1/3 de largeur). Les 2/3 gauches de la page sont vides sous les cours — un énorme espace gris perdu.

### Solution

Créer une nouvelle section pleine largeur **sous les cours** avec un layout 2 colonnes :
- **Gauche** : CharacterShowcase (sticky, les personnages restent visibles pendant le scroll du parcours)
- **Droite** : LearningPath

Les retirer de la sidebar droite actuelle. Sur mobile/tablette, les personnages passent en ligne horizontale scrollable au-dessus du parcours.

### Fichier : `src/pages/Index.tsx`

1. **Retirer** le `CharacterShowcase` et `LearningPath` de la sidebar droite (lignes 229-239)
2. **Ajouter** une nouvelle section pleine largeur après le bloc `grid grid-cols-1 lg:grid-cols-3` :

```text
┌─────────────────────────────────────────────────┐
│  Nouvelle section pleine largeur                │
│                                                 │
│  Mobile/Tablette:                               │
│  ┌─────────────────────────────────────────┐    │
│  │ Personnages (scroll horizontal)          │    │
│  └─────────────────────────────────────────┘    │
│  ┌─────────────────────────────────────────┐    │
│  │ Parcours d'apprentissage                 │    │
│  └─────────────────────────────────────────┘    │
│                                                 │
│  Desktop (lg+):                                 │
│  ┌──────────┐  ┌───────────────────────────┐    │
│  │Personnages│  │ Parcours d'apprentissage  │    │
│  │ (sticky)  │  │ (scrollable)              │    │
│  │ 2x4 grid │  │                           │    │
│  │           │  │                           │    │
│  └──────────┘  └───────────────────────────┘    │
└─────────────────────────────────────────────────┘
```

Layout : `flex flex-col lg:flex-row gap-6`
- Gauche : `lg:w-64 lg:sticky lg:top-20 lg:self-start` — les personnages en grille 2x4, compacte
- Droite : `flex-1` — le parcours prend tout l'espace restant

### Fichier : `src/components/characters/CharacterShowcase.tsx`

Ajouter un mode responsive :
- **Mobile** (`< lg`) : grille horizontale scrollable `flex overflow-x-auto gap-4` avec les 8 personnages en ligne
- **Desktop** (`lg+`) : grille `grid-cols-2` verticale comme actuellement mais plus espacée

### Responsive global des cartes

Optimiser les grilles existantes dans Index.tsx :
- Stats row : `grid-cols-2 sm:grid-cols-4` (au lieu de `lg:grid-cols-4`) pour remplir mieux sur tablette
- Courses : `sm:grid-cols-2 md:grid-cols-3` au lieu de `lg:grid-cols-3`
- Sidebar cards sur tablette : passer en `md:grid-cols-2 lg:grid-cols-1` pour que les cards s'étalent sur 2 colonnes en tablette au lieu de s'empiler

### Fichiers modifiés

| Fichier | Action |
|---------|--------|
| `src/pages/Index.tsx` | Restructurer layout : personnages+parcours en section séparée, optimiser breakpoints |
| `src/components/characters/CharacterShowcase.tsx` | Ajouter mode horizontal scrollable sur mobile |

