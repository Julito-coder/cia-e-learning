

## Plan : Avatars plein pied dans l'espace gauche de la page d'accueil

### Ce qui change

1. **Supprimer les avatars du LearningPath** : Retirer toute la logique Character3DAvatar et CharacterStoryModal du composant `LearningPath.tsx` (lignes 8-10, 140-144, 153-155, 178-197, 248-255). Le parcours redevient un simple chemin de modules.

2. **Créer `src/components/characters/CharacterShowcase.tsx`** : Nouveau composant affichant les 8 personnages en pied dans un espace vertical. Chaque avatar :
   - Occupe une zone de ~120x200px avec une image stylisée (silhouette/avatar arrondi)
   - **Au hover** : tourne sur lui-même (rotation Y 360° en CSS 3D, `rotateY` animé)
   - **Au clic** : ouvre le CharacterStoryModal existant (bio, histoire CIA, evolution)
   - Disposition en grille 2x4 ou en colonne scrollable
   - Animations staggerées à l'apparition (fade-in décalé)

3. **Modifier `src/pages/Index.tsx`** : Restructurer la section "Parcours" pour qu'elle prenne toute la largeur (full-width section en bas) avec un layout 2 colonnes :
   - **Gauche** : `CharacterShowcase` avec les 8 personnages interactifs
   - **Droite** : `LearningPath` (le parcours actuel, sans avatars)

4. **Modifier `src/index.css`** : Ajouter `@keyframes character-spin` (rotation Y 0->360°, 0.8s) pour l'effet de tour sur soi au hover.

5. **Mettre à jour `Character3DAvatar.tsx`** : Adapter pour un mode "full body" plus grand (taille ~180px), avec l'animation de marche idle par défaut et spin au hover.

### Disposition visuelle

```text
┌──────────────────────────────────────────────┐
│  Parcours (full-width section)               │
│  ┌──────────────┐  ┌─────────────────────┐   │
│  │  Personnages  │  │   Learning Path     │   │
│  │  ┌────┐┌────┐ │  │   (zigzag nodes)    │   │
│  │  │Marie││Luca│ │  │                     │   │
│  │  └────┘└────┘ │  │   ○ A1.1            │   │
│  │  ┌────┐┌────┐ │  │     ╲               │   │
│  │  │Yuki││Omar│ │  │      ○ A1.2         │   │
│  │  └────┘└────┘ │  │     ╱               │   │
│  │  ┌────┐┌────┐ │  │   ○ A1.3            │   │
│  │  │Elen││Thom│ │  │                     │   │
│  │  └────┘└────┘ │  │                     │   │
│  │  ┌────┐┌────┐ │  │                     │   │
│  │  │Fato││Hans│ │  │                     │   │
│  │  └────┘└────┘ │  │                     │   │
│  └──────────────┘  └─────────────────────┘   │
└──────────────────────────────────────────────┘
```

### Fichiers modifiés

| Fichier | Action |
|---------|--------|
| `src/components/courses/LearningPath.tsx` | Supprimer imports et code des avatars |
| `src/components/characters/CharacterShowcase.tsx` | Nouveau - grille des 8 personnages |
| `src/components/characters/Character3DAvatar.tsx` | Adapter pour mode large + spin hover |
| `src/pages/Index.tsx` | Restructurer section parcours (2 colonnes) |
| `src/index.css` | Ajouter keyframes `character-spin` |

