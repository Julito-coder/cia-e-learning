
# Batch 12 — Admin Polish

Polish existing admin pages with consistent design, loading/empty/error states, better UX, and reuse of Batch 11 primitives (`notify.*`, `EmptyState`, skeletons, `ErrorState`). No new business logic, no DB migrations.

## Scope per page

### 1. AdminLayout (`src/components/layout/AdminLayout.tsx`)
- Add a top header bar with breadcrumb (Admin › current page) and signed-in admin email + logout.
- Clean active-state styling, subtle gradient on active nav item, animated chevron when collapsing.
- Mobile: floating burger button (currently no visible trigger when sidebar closed).
- Footer of sidebar: "Retour à l'app" link → `/`.

### 2. AdminDashboard (`src/pages/admin/AdminDashboard.tsx`)
- Replace 4 plain stat cards with rich `StatCard` (icon in colored circle, delta vs previous period if available, gradient border).
- Add 3 new sections:
  - Recent signups (last 5 users, mini list)
  - Recent XP activity (last 5 from `xp_audit_log`)
  - Quick actions (Créer un utilisateur, Créer un cours, Voir analytics)
- Skeleton loaders during fetch.
- Greeting line: "Bonjour, {firstName} 👋".

### 3. AdminUsers (`src/pages/admin/AdminUsers.tsx`)
- Add skeletons + `EmptyState` (no results, no users).
- Pagination (20/page) with shadcn `Pagination`.
- Filters row: search + level + new "Statut" (actif/inactif) + "Type" (CIA/externe).
- Replace single icon action with dropdown (Voir détail, Activer/Désactiver, Réinitialiser mot de passe — toast "à venir").
- Migrate `toast` → `notify.*`.
- Fix CSV export to include UTF-8 BOM for Excel compatibility.
- Replace native `<a download>` with proper helper.

### 4. AdminCourses (`src/pages/admin/AdminCourses.tsx`)
- Switch from table-only to grid of admin course cards with thumbnail + status badges (publié/brouillon, gratuit/premium).
- Filter bar: search, level, statut publication.
- Skeletons + `EmptyState` (no courses → CTA "Créer un cours").
- Bulk actions placeholder hidden behind feature flag (skip for now).
- Migrate to `notify.*`.

### 5. AdminAnalytics (`src/pages/admin/AdminAnalytics.tsx`)
- Add KPI row (4 cards): total users, active users, total XP awarded (sum from `xp_audit_log`), avg streak.
- Use semantic chart colors via CSS vars (`hsl(var(--primary))`, etc.) — replace hardcoded hex.
- Add a 3rd chart: weekly XP trend (last 8 weeks, bar chart, from `xp_audit_log` grouped by week).
- Skeletons + empty states per chart.
- Period selector (7j / 30j / 90j) — UI only, filters analytics queries by `created_at`.

### 6. AdminSubscriptions (`src/pages/admin/AdminSubscriptions.tsx`)
- Add KPI row: total subscriptions, active premium, active school, expiring <30j.
- Skeletons + empty state.
- Add expiration date column with "expire dans X jours" badge (rouge si <7).
- Migrate to `notify.*`.

### 7. AdminSettings (`src/pages/admin/AdminSettings.tsx`)
- Replace placeholder "à venir" with structured sections (cards):
  - **Apparence**: theme toggle (light/dark) — connect to existing theme provider if present, else stub.
  - **Notifications email**: switches (welcome, weekly digest, inactivity reminder) — UI only, persisted in `localStorage` key `admin.settings.*`.
  - **Codes promo**: list (read-only from existing `subscriptions.promo_code` distinct values) + "Créer" stub.
  - **Intégration CRM**: read-only info card with "Bientôt".
  - **Zone dangereuse**: "Vider le cache analytics" (no-op toast), "Réindexer le glossaire" (no-op toast).
- Use shadcn `Switch`, `Separator`.

## Shared additions

- `src/components/admin/StatCard.tsx` — reusable stat card with icon, label, value, optional delta + trend arrow.
- `src/components/admin/AdminPageHeader.tsx` — h1 + description + right-side actions slot, consistent across pages.
- `src/components/admin/AdminSectionCard.tsx` — wrapper card with title, description, action.
- `src/components/states/skeletons/AdminTableSkeleton.tsx` — 5 rows × N cols skeleton.

## Out of scope
- No DB migrations.
- No real CRM/email/promo-code backends — UI scaffolding only.
- No course editor improvements (separate batch).
- No role management UI.
- No real-time websockets.

## Validation
- All admin pages render skeletons on first load, empty states when no data, and use `notify.*` for feedback.
- Charts use semantic CSS colors and adapt to dark mode if applicable.
- Mobile: sidebar toggle works, tables are scrollable horizontally.
- No console errors on navigation between admin pages.

## Files

**New:**
- `src/components/admin/StatCard.tsx`
- `src/components/admin/AdminPageHeader.tsx`
- `src/components/admin/AdminSectionCard.tsx`
- `src/components/states/skeletons/AdminTableSkeleton.tsx`

**Modified:**
- `src/components/layout/AdminLayout.tsx`
- `src/pages/admin/AdminDashboard.tsx`
- `src/pages/admin/AdminUsers.tsx`
- `src/pages/admin/AdminCourses.tsx`
- `src/pages/admin/AdminAnalytics.tsx`
- `src/pages/admin/AdminSubscriptions.tsx`
- `src/pages/admin/AdminSettings.tsx`
