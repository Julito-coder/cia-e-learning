

## Plan : Avatars 3D interactifs sur le parcours d'apprentissage

### Objectif
Ajouter les 8 personnages récurrents sous forme d'avatars 3D interactifs le long du parcours d'apprentissage sur la page d'accueil. En cliquant sur un avatar, une fiche détaillée s'affiche (histoire, raison de sa venue au CIA). L'avatar sélectionné a une légère animation de marche/mouvement 3D (style Mii).

### Approche technique

Plutôt que d'utiliser React Three Fiber (lourd, nécessite des modèles 3D .glb), on utilisera une approche **CSS 3D transforms** combinée à des animations CSS pour un effet 3D convaincant et performant :

- Les avatars sont rendus dans un conteneur avec `perspective` CSS
- Au survol/sélection, l'avatar effectue une rotation 3D légère et un balancement (animation de marche)
- Le drag (pointeur) permet de faire pivoter légèrement l'avatar dans l'espace (rotateX/rotateY basés sur la position du curseur)

### Fichiers à créer/modifier

1. **Créer `src/components/characters/Character3DAvatar.tsx`**
   - Composant affichant l'avatar du personnage dans un conteneur CSS 3D (`perspective`, `transform-style: preserve-3d`)
   - Gestion du `onPointerMove` pour rotation interactive (±15° max)
   - Animation de balancement/marche au clic (keyframes CSS : translation Y + rotation alternée)
   - Ombre portée dynamique qui suit la rotation
   - Props : `character`, `level`, `isSelected`, `onClick`, `size`

2. **Créer `src/components/characters/CharacterStoryModal.tsx`**
   - Dialog/Sheet affichant au clic : avatar agrandi, nom, nationalité, âge, rôle, bio du niveau actuel, catchphrase, et l'évolution narrative à travers les niveaux (timeline visuelle)
   - Responsive : bottom sheet sur mobile, dialog centré sur desktop

3. **Modifier `src/components/courses/LearningPath.tsx`**
   - Ajouter un avatar 3D à côté de chaque nœud du parcours (en alternant gauche/droite comme les cartes)
   - Associer les personnages aux modules de façon cyclique (8 personnages, répartis sur les modules)
   - L'avatar apparaît avec un léger décalage d'animation (stagger)

4. **Modifier `src/pages/Index.tsx`**
   - Passer le `cecrLevel` au composant `LearningPath` pour que les personnages affichent la bonne évolution

5. **Ajouter les keyframes CSS dans `src/index.css`**
   - `@keyframes character-walk` : balancement gauche-droite + translation Y pour simuler la marche
   - `@keyframes character-idle` : respiration subtile (scale léger)

### Détail de l'interaction 3D

```text
┌──────────────────────────────┐
│  perspective: 800px          │
│  ┌────────────────────────┐  │
│  │  transform-style: 3d   │  │
│  │  ┌──────────────────┐  │  │
│  │  │   Avatar image    │  │  │
│  │  │   rotateX/Y via   │  │  │
│  │  │   pointer move    │  │  │
│  │  └──────────────────┘  │  │
│  │  ┌──────────────────┐  │  │
│  │  │   Shadow (blur)   │  │  │
│  │  └──────────────────┘  │  │
│  └────────────────────────┘  │
└──────────────────────────────┘
```

- **Idle** : respiration subtile (scale 1.0 → 1.02, 3s ease-in-out)
- **Hover** : léger soulèvement + ombre plus prononcée
- **Sélectionné** : animation de marche (balancement + bob Y) + rotation interactive au pointeur
- **Drag/move** : rotateX = (mouseY - center) / 10, rotateY = (mouseX - center) / 10, clamped à ±15°

### Disposition dans le parcours

Les avatars apparaissent à gauche des nœuds pairs et à droite des nœuds impairs (suivant le zigzag existant), positionnés en absolu par rapport au nœud.

