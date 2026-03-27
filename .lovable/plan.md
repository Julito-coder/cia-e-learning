

## Plan : Logo en fond, photo de profil, favoris persistants, verrouillage des niveaux et progression XP

### 1. Header — Logo CIA en fond (pas en photo de profil)

**Fichier : `src/components/layout/Header.tsx`**
- Remplacer le petit logo CIA par un logo plus grand en filigrane/fond dans le header (opacity réduite, positionné en absolute derrière le contenu)
- Le logo actuel reste visible comme marque mais n'est plus un avatar circulaire

**Fichier : `src/pages/Index.tsx`**
- Retirer le logo CIA rond du héro (ligne 53) qui ressemble à une photo de profil
- Remplacer par l'avatar de l'utilisateur connecté (depuis le profil Supabase) ou un avatar par défaut

### 2. Photo de profil importable par le client

**Fichier : `src/pages/Connexion.tsx`** (section "connecté")
- Ajouter un bouton d'upload d'avatar quand l'utilisateur est connecté
- Utiliser Supabase Storage (bucket `avatars`) pour stocker les photos

**Nouveau fichier : `src/components/profile/AvatarUpload.tsx`**
- Composant d'upload avec preview et crop basique
- Upload vers Supabase Storage, URL sauvée dans `profiles.avatar_url`

**Migration SQL :**
- Créer le bucket storage `avatars` (public)

**Fichiers modifiés : `Header.tsx`, `Index.tsx`**
- Afficher l'avatar de l'utilisateur connecté au lieu du logo CIA dans les zones profil

### 3. Favoris fonctionnels avec persistance backend

**Fichier : `src/pages/Catalogue.tsx`**
- Pour les utilisateurs connectés : sauvegarder les favoris dans la table `user_favorites` (déjà existante) au lieu de localStorage
- Pour les visiteurs non connectés : garder localStorage comme fallback
- Créer un hook `useFavorites` qui gère la logique

**Nouveau fichier : `src/hooks/useFavorites.ts`**
- Hook qui détecte si l'utilisateur est connecté
- Connecté → CRUD via Supabase `user_favorites`
- Non connecté → localStorage
- Synchroniser localStorage → Supabase à la connexion

**Route `/favoris`** — actuellement c'est juste `<Catalogue />` sans filtre
- Modifier pour filtrer uniquement les cours favoris

### 4. Système de niveaux verrouillés (progression CECRL)

**Logique de verrouillage :**
- Chaque utilisateur a un `cecr_level` dans `profiles` (A1 par défaut)
- Un utilisateur au niveau X peut accéder à X et X+1 uniquement
- A1 → accès A1 + A2 | A2 → accès A2 + B1 | etc.

**Fichier : `src/components/courses/CourseCard.tsx`**
- Ajouter un état "verrouillé" visuel (overlay gris avec cadenas 🔒)
- Désactiver le bouton "Commencer" si le cours est verrouillé
- Afficher un tooltip "Complétez le niveau X pour débloquer"

**Fichier : `src/pages/CourseDetail.tsx`**
- Bloquer l'accès au cours si le niveau n'est pas débloqué
- Afficher un message avec le niveau requis

**Fichier : `src/pages/Catalogue.tsx`**
- Passer le niveau de l'utilisateur aux CourseCards pour déterminer le verrouillage

### 5. Système XP avec passage de niveau tous les 5000 XP

**Migration SQL :**
- Ajouter une table `user_xp` ou ajouter les champs `total_xp` et `cecr_level` au profil existant (profil a déjà `cecr_level`)
- Ajouter `total_xp integer default 0` à la table `profiles`

**Nouveau fichier : `src/hooks/useUserProgress.ts`**
- Hook centralisant la gestion XP et niveau
- Calcul automatique du niveau basé sur les XP :
  - 0-4999 XP → A1
  - 5000-9999 XP → A2  
  - 10000-14999 XP → B1
  - 15000-19999 XP → B2
  - 20000-24999 XP → C1
  - 25000+ XP → C2
- Mise à jour automatique du `cecr_level` quand le seuil est atteint
- Gain d'XP à la fin de chaque cours (basé sur le score du quiz final)

**Fichier : `src/pages/CourseDetail.tsx`**
- À la fin d'un cours, ajouter les XP gagnés via le hook
- Afficher une animation de level-up si le seuil est franchi

**Fichier : `src/pages/Index.tsx`**
- Afficher le vrai XP et niveau de l'utilisateur connecté (au lieu des données démo)
- Barre de progression vers le prochain niveau

### Résumé des fichiers

**Créés :**
- `src/components/profile/AvatarUpload.tsx`
- `src/hooks/useFavorites.ts`
- `src/hooks/useUserProgress.ts`

**Modifiés :**
- `src/components/layout/Header.tsx` — logo en fond + avatar utilisateur
- `src/pages/Index.tsx` — avatar réel + XP/niveau réels
- `src/pages/Catalogue.tsx` — favoris backend + niveau verrouillage
- `src/pages/CourseDetail.tsx` — verrouillage + gain XP
- `src/components/courses/CourseCard.tsx` — état verrouillé
- `src/pages/Connexion.tsx` — upload avatar

**Migrations SQL :**
- Ajouter colonne `total_xp` à `profiles`
- Créer bucket storage `avatars`

