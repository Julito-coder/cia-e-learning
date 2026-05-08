
# Batch 11 — States (Empty / Loading / Error / Notif)

Polir tout ce qui se passe **autour** du contenu : ce que voit l'utilisateur
quand ça charge, quand il n'y a rien, quand ça casse, et quand on lui parle.
Aucune logique métier modifiée — uniquement présentation et feedback.

## 1. Système de notifications unifié

### `src/lib/notify.ts`
Wrapper unique au-dessus de `sonner` pour homogénéiser les toasts :

```ts
notify.success(title, { description?, duration?, icon? })
notify.error(title, { description?, action? })
notify.info(title, ...)
notify.warning(title, ...)
notify.loading(title) → id    // pour les opérations longues
notify.promise(promise, { loading, success, error })
notify.xp(amount, source?)    // toast spécial XP avec emoji ⚡
notify.streak(days)            // toast spécial série 🔥
notify.badge(label, emoji)     // toast spécial badge 🏅
notify.levelUp(newLevel)       // toast spécial level-up 🎉
```

- Durations standardisées : `success` 3s, `error` 5s, `gamification` 5s.
- Icônes Lucide injectées par défaut selon le type.
- Position : `bottom-right` desktop, `top-center` mobile (responsive via
  Sonner config).
- Tous les `toast.success/error/...` existants migrent vers `notify.*`
  (Connexion, ResetPassword, ForgotPassword, useAuth, useUserProgress,
  useDailyChallenge, useOnboarding, CourseDetail, AdminUsers).

### `src/components/ui/sonner.tsx`
- Ajout de `richColors`, `closeButton`, `expand={false}`, `visibleToasts={3}`.
- Ajout de classnames pour les variants `success / error / warning / info`
  (couleurs sémantiques tokens).
- Position responsive (top-center sur mobile).

## 2. Empty states réutilisables

### `src/components/states/EmptyState.tsx`
Composant générique avec props :
```tsx
<EmptyState
  icon={Search}            // composant Lucide
  title="Aucun résultat"
  description="Essayez d'autres mots-clés"
  action={{ label: 'Réinitialiser', onClick: ... }}
  illustration?: ReactNode  // override icône
/>
```
- Animation `motion` fade + scale sur l'icône.
- Tailwind tokens uniquement.

### Variantes prêtes à l'emploi
`src/components/states/empty/`
- `EmptyFavorites.tsx` — "Aucun cours favori" + CTA → Catalogue
- `EmptyCatalogue.tsx` — "Aucun cours ne correspond" + CTA reset filtres
- `EmptyGlossary.tsx` — "Aucun terme trouvé"
- `EmptyLeaderboard.tsx` — "Soyez le premier à gagner des XP cette semaine"
- `EmptyDailyHistory.tsx` — "Pas encore de défi accompli"
- `EmptyAchievements.tsx` — "Vos premiers achievements apparaîtront ici"

Intégrées dans : Catalogue, Glossaire, Profil (favoris + achievements),
Classement, DailyChallenge.

## 3. Loading skeletons cohérents

### `src/components/states/skeletons/`
Skeletons spécifiques aux principales surfaces (réutilisables) :
- `CourseCardSkeleton.tsx` — card 280×180 + 2 lignes texte
- `CourseGridSkeleton.tsx` — grille de 6 `CourseCardSkeleton`
- `LeaderboardRowSkeleton.tsx` — avatar + nom + XP
- `LeaderboardSkeleton.tsx` — 10 rows
- `ProfileHeaderSkeleton.tsx` — avatar + identité + stats
- `AchievementGridSkeleton.tsx` — 8 cartes 1:1
- `LearningPathSkeleton.tsx` — 5 noeuds zigzag
- `GlossarySkeleton.tsx` — liste de 8 entrées
- `DailyChallengeSkeleton.tsx` — header + carte cours

Toutes basées sur le `<Skeleton>` shadcn existant + variantes
shimmer (gradient animé via une classe utilitaire `.skeleton-shimmer`
ajoutée dans `index.css`).

### Intégration
Remplacer les `loading ? <p>Chargement…</p>` ou rien-du-tout par les
skeletons appropriés sur :
- Catalogue, Curriculum, CourseDetail, Glossaire, Classement,
  DailyChallenge, Profil, TestNiveau (chargement initial uniquement).

## 4. Page 404 refondue (`NotFound.tsx`)

Look CIA : background gradient, illustration "perdu à Antibes", message
chaleureux, deux CTA (Retour accueil / Voir le catalogue), animation
fade + scale-in.

```
┌────────────────────────────────┐
│   🧭                           │
│     404                        │
│   Cette page s'est perdue      │
│   en chemin pour Antibes       │
│                                │
│   [ Retour à l'accueil ]       │
│   [ Explorer les cours ]       │
└────────────────────────────────┘
```

- Garde `console.error` pour debug.
- i18n direct FR (cohérent avec le reste).
- Composant interne : `LostCharacter` (réutilise un personnage existant
  si disponible, sinon icône `Compass` Lucide).

## 5. Error boundary global

### `src/components/states/ErrorBoundary.tsx`
- Class component qui catch les erreurs React.
- Fallback : `<ErrorState />` avec message générique, bouton "Réessayer"
  (reset state + reload), et "Retour à l'accueil".
- Log console.error + envoi vers `notify.error` au mount du fallback.

### `src/components/states/ErrorState.tsx`
Utilisable seul pour erreurs de fetch :
```tsx
<ErrorState
  title="Impossible de charger les cours"
  description="Vérifiez votre connexion et réessayez."
  onRetry={() => refetch()}
/>
```

### Intégration
- `App.tsx` → wrap les routes dans `<ErrorBoundary>`.
- Catalogue, Curriculum, Classement, Glossaire : afficher `<ErrorState>`
  si la query échoue.

## 6. Hors scope

- Pas de migration DB.
- Pas de modification de la logique de fetch (React Query / hooks
  existants restent identiques).
- Pas d'Onboarding modifié.
- Pas de gestion d'offline (Service Worker) — sera un autre batch.

## 7. Fichiers touchés

**Nouveaux**
- `src/lib/notify.ts`
- `src/components/states/EmptyState.tsx`
- `src/components/states/ErrorState.tsx`
- `src/components/states/ErrorBoundary.tsx`
- `src/components/states/empty/Empty{Favorites,Catalogue,Glossary,Leaderboard,DailyHistory,Achievements}.tsx`
- `src/components/states/skeletons/{CourseCard,CourseGrid,LeaderboardRow,Leaderboard,ProfileHeader,AchievementGrid,LearningPath,Glossary,DailyChallenge}Skeleton.tsx`

**Modifiés**
- `src/components/ui/sonner.tsx` — config enrichie + responsive
- `src/pages/NotFound.tsx` — refonte complète
- `src/App.tsx` — wrap `<ErrorBoundary>`
- `src/index.css` — classe utilitaire `.skeleton-shimmer`
- `src/pages/Catalogue.tsx`, `Curriculum.tsx`, `Glossaire.tsx`,
  `Classement.tsx`, `DailyChallenge.tsx`, `Profil.tsx`, `CourseDetail.tsx`
  — intégration skeletons + empty + error
- Migration `toast.*` → `notify.*` dans tous les fichiers listés § 1.

## 8. Critères de validation

- Aucun écran blanc pendant les chargements : tout affiche un skeleton.
- Liste vide ⇒ `EmptyState` avec CTA pertinent.
- Erreur de fetch ⇒ `ErrorState` avec bouton "Réessayer" qui marche.
- Toasts visuellement homogènes (couleurs, durées, icônes).
- Page 404 stylée et chaleureuse.
- ErrorBoundary attrape une erreur volontaire et affiche le fallback.
