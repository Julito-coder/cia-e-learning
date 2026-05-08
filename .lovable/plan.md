# Batch 14 — Mobile Responsive

Audit complet de l'app pour garantir une expérience irréprochable sur mobile (≤640), tablette (641-1024) et desktop, avec interactions tactiles natives.

## Objectifs

- Aucune scroll horizontale sur 320–414 px.
- Targets tactiles ≥ 44×44 px.
- Layouts admin utilisables sur tablette (drawer mobile).
- Modals = bottom sheets sur mobile (déjà règle projet — vérifier partout).
- Animations / hovers neutralisés sur touch (pas de hover-only states).

## Scope par zone

### 1. Layouts globaux
- `AppLayout`, `Header`, `MobileDrawer`, `Footer` : safe-area iOS (`env(safe-area-inset-*)`), bottom nav mobile si pertinent, header sticky compact.
- `AdminLayout` : sidebar collapsible en drawer < lg, breadcrumbs scrollables horizontalement, top bar condensée.

### 2. Pages publiques
- `Index` (landing) : hero, `CECRJourney`, character showcase — empilement mobile, tailles typo fluides (`clamp`).
- `Catalogue`, `Curriculum` : grilles `1 / 2 / 3 / 4 cols` selon breakpoint, filtres en bottom-sheet sur mobile.
- `CourseDetail` + `course-player/*` : lecteur plein écran mobile, contrôles ≥44px, gestes swipe pour next/prev.
- `Classement` : tableau → cartes empilées sur mobile, podium réduit.
- `Profil` : header profil compact, onglets scrollables.
- `Glossaire`, `DailyChallenge`, `SpeedTest`, `TestNiveau` : padding cohérent, CTA full-width mobile.
- `Connexion`, `ForgotPassword`, `ResetPassword` : formulaires centrés, autofill-friendly, clavier mobile.
- `NotFound` : déjà OK, vérifier.

### 3. Pages Admin (Batch 12)
- `AdminDashboard`, `AdminUsers`, `AdminCourses`, `AdminAnalytics`, `AdminSubscriptions`, `AdminSettings` : `StatCard` 1/2/4 cols, tables → cartes empilées < md, actions en bottom-sheet, charts `recharts` responsive (`ResponsiveContainer` height fluid).

### 4. Composants partagés
- `states/EmptyState`, `ErrorState`, skeletons : padding mobile, icônes/texte adaptés.
- `gamification/*`, `leaderboard/*`, `courses/CourseCard`, `LearningPath` : tap states (`active:`), suppression hovers exclusifs.
- `characters/*` modal : confirmer bottom-sheet mobile (mémoire projet).
- `LanguageSwitcher` : popover → drawer sur mobile.

### 5. Tokens & utilitaires
- Ajouter helpers Tailwind si manquants : `min-h-touch` (44px), `safe-top/bottom`.
- Étendre `index.css` : `@supports (padding: max(0px))` pour safe-areas.
- Hook `useIsMobile` (vérifier existant) — usage uniforme.

## Méthode

1. **Audit par page** : inspection 375×812 (iPhone), 414×896, 768×1024 (iPad), 1024+. Capture des problèmes (overflow, tap targets, lisibilité).
2. **Fix par lot** : layouts → pages publiques → admin → composants.
3. **Validation visuelle** via preview viewport mobile/tablet, plus revue de classes responsive (`sm: md: lg: xl:`).

## Détails techniques

- Breakpoints Tailwind par défaut : `sm 640 / md 768 / lg 1024 / xl 1280`.
- Pas de nouvelles deps. Réutiliser `Sheet`, `Drawer`, `Dialog` shadcn (Drawer = bottom sheet auto).
- `recharts` : wrapper `<ResponsiveContainer width="100%" aspect={...}>` au lieu de heights fixes.
- Tables admin : pattern « `hidden md:table` + `md:hidden` card list » déjà utilisé sur `AdminUsers` à généraliser.
- Touch : remplacer `hover:` exclusifs par `hover:... active:...` ; `cursor-pointer` + `touch-manipulation` sur cibles cliquables.
- Pas de modif backend, i18n keys ou logique métier.

## Hors scope

- Refonte visuelle / nouveaux écrans.
- PWA / offline.
- Tests automatisés responsive (à un autre batch).
- Traduction de nouvelles clés (Batch 13 couvre déjà l'i18n).

## Livrables

- `AppLayout`, `Header`, `MobileDrawer`, `AdminLayout` mis à jour.
- 14 pages auditées et patchées.
- 6 pages admin patchées (tables → cartes mobile, charts responsive).
- Composants partagés polish tactile.
- `index.css` + `tailwind.config.ts` enrichis (safe-area, min-h-touch).
- Note de QA listant les viewports vérifiés.
