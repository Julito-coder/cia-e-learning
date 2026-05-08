
# Batch 9 — Profil & Vitrine d'achievements

Refonte du profil utilisateur en page dédiée `/profil`, avec édition
des infos perso, sync de la langue d'interface (DB ↔ i18n ↔ localStorage),
et vitrine complète des achievements (déjà calculés par `useAchievements`).

## 1. Nouvelle page `/profil`

Route ajoutée à `App.tsx` (`<Route path="/profil" element={<Profil />}/>`).

Structure mobile-first, 4 sections empilées (sticky header avec onglets sur
desktop ≥1024px) :

```
┌─────────── Identité ─────────────┐
│ Avatar XL (128px) + camera FAB   │
│ "Prénom Nom"  ·  badge niveau    │
│ XP total · Streak · Ligue        │
│ Barre XP vers niveau suivant     │
└──────────────────────────────────┘
┌─────────── Infos perso ──────────┐
│ Prénom / Nom (inline edit)       │
│ Nationalité (Select pays)        │
│ Email (lecture seule)            │
│ Langue d'interface (6 drapeaux)  │
│ [Enregistrer] sticky bas mobile  │
└──────────────────────────────────┘
┌─────────── Achievements ─────────┐
│ Header : "X/14 débloqués · 64%"  │
│ Barre de progression globale     │
│ Filtres : Tous · Débloqués ·     │
│   Verrouillés · par rareté       │
│ Grid 2-col mobile / 4 desktop :  │
│   - icône (cercle dégradé rareté)│
│   - titre + desc                 │
│   - état (✓ ou cadenas)          │
│   - tap → modal détail           │
└──────────────────────────────────┘
┌─────────── Compte ───────────────┐
│ Lien admin (si admin)            │
│ Refaire le tour d'introduction   │
│ Refaire le test de placement     │
│ Déconnexion (destructive)        │
└──────────────────────────────────┘
```

Si non-loggé : redirige vers `/connexion`.

## 2. Édition des infos perso (DB)

- Hook `useProfile()` : `{ profile, loading, update(patch) }` — lit
  `profiles` (filtré par `user_id`), expose les colonnes éditables et
  un `update()` qui appelle `supabase.from('profiles').update(...)`.
- Champs éditables : `first_name`, `last_name`, `nationality`,
  `interface_language`, `avatar_url`.
- Champs non-éditables : `email`, `cecr_level`, `total_xp`, `league`,
  `daily_streak`, `placement_test_taken_at`, `onboarding_completed_at`
  (déjà protégés par `protect_gameplay_columns`).
- Validation client : prénom/nom ≤ 50 chars, nationality dans la liste
  prédéfinie (~30 pays courants).
- Toast succès/erreur, bouton "Enregistrer" dégrisé seulement si dirty.

## 3. Sync langue interface

Aujourd'hui : i18n stockée seulement en `localStorage`
(`cia-interface-lang`) via `LanguageSwitcher`.

Plan : la `Profil` page écrit dans `profiles.interface_language` ET met
à jour `i18n.changeLanguage()` + `localStorage`. Au login, un effet dans
`useAuth` (ou dans `useProfile`) lit `interface_language` depuis la DB et
applique côté i18n si différent.

→ Nouveau hook `useInterfaceLanguage()` qui orchestre :
- au mount user : DB → i18n + localStorage
- changement utilisateur : i18n + localStorage + DB (debounce 500 ms)

`LanguageSwitcher` continue de marcher pour anonymes (localStorage seul).

## 4. Vitrine d'achievements

Composant `AchievementsShowcase` :

- Grille responsive avec animation `staggerChildren`.
- Carte achievement (`AchievementCard`) :
  - Icône Lucide selon `icon` (mapping commun avec `AchievementToast`).
  - Cercle dégradé selon rareté (common: muted, rare: blue, epic: violet,
    legendary: gold) — réutilise les tokens de `AchievementToast`.
  - État verrouillé : icône grayscale + opacité 40 % + cadenas overlay.
  - Tap → `AchievementDetailModal` (Dialog/BottomSheet via Portal selon
    breakpoint, conforme à mem://style/ui-modals-and-popups).
- Filtres : `Tabs` shadcn (Tous / Débloqués / Verrouillés) + Toggle group
  rareté optionnel sur desktop.
- Compteur en haut + `Progress` global.

## 5. Avatar upload — léger lifting

`AvatarUpload` existe déjà et fonctionne (bucket `avatars` public).
Améliorations minimales :
- Crop carré côté client via `<canvas>` (centré, pas d'éditeur — juste un
  recadrage automatique pour cohérence).
- Compression JPEG qualité 0.85 si > 500 Ko avant upload.
- Suppression de l'ancienne photo après upload réussi (best effort).

## 6. Refactor Connexion

`Connexion.tsx` contient aujourd'hui le profil (vue logged-in). On
extrait tout le bloc "logged-in" vers `/profil`. `Connexion` devient
strictement le formulaire login/signup. Si `user` détecté, redirige
vers `/profil` (au lieu d'afficher la mini-card).

Le menu utilisateur (Header dropdown) → "Mon profil" pointe sur `/profil`
(au lieu de `/connexion`).

## 7. i18n

Section `profile.*` ajoutée à `fr.json` + `en.json` (les autres
fallback FR) :
- `profile.title`, `profile.identity`, `profile.personal_info`,
  `profile.account`, `profile.firstName`, `profile.lastName`,
  `profile.nationality`, `profile.email`, `profile.interfaceLanguage`,
  `profile.save`, `profile.saved`, `profile.error`,
  `profile.redoOnboarding`, `profile.redoPlacement`, `profile.logout`,
  `profile.adminAccess`,
  `profile.achievements.title`, `profile.achievements.unlocked`,
  `profile.achievements.locked`, `profile.achievements.all`,
  `profile.achievements.empty`, `profile.achievements.howToUnlock`,
- Liste de pays : si déjà traduits ailleurs, on réutilise ; sinon on
  garde la version FR par défaut.

## 8. Accessibilité & motion

- Form semantique `<form>`, labels associés, `aria-invalid` sur erreurs.
- `prefers-reduced-motion` désactive le stagger des cartes achievement.
- Modal achievement : focus trap natif via shadcn `Dialog`.

## 9. Hors scope

- Pas de gestion des abonnements ici (le bloc subscription reste au
  back-office admin pour cette itération).
- Pas de suppression de compte (RGPD viendra plus tard).
- Pas d'historique XP (`xp_audit_log`) affiché — réservé pour un futur
  écran "Activité".
- Pas d'édition du `cecr_level` (modifiable seulement via test ou
  admin — déjà bloqué côté DB par `protect_gameplay_columns`).

## 10. Fichiers touchés

**Nouveaux**
- `src/pages/Profil.tsx`
- `src/hooks/useProfile.ts`
- `src/hooks/useInterfaceLanguage.ts`
- `src/components/profile/PersonalInfoForm.tsx`
- `src/components/profile/AchievementsShowcase.tsx`
- `src/components/profile/AchievementCard.tsx`
- `src/components/profile/AchievementDetailModal.tsx`
- `src/components/profile/CountrySelect.tsx`
- `src/components/profile/AccountActions.tsx`

**Modifiés**
- `src/App.tsx` — route `/profil`
- `src/pages/Connexion.tsx` — supprime le bloc logged-in, redirige
- `src/components/layout/Header.tsx` — menu pointe `/profil`
- `src/components/layout/MobileDrawer.tsx` — entrée "Mon profil"
- `src/components/profile/AvatarUpload.tsx` — crop + compression légère
- `src/i18n/locales/fr.json` + `en.json`

**Pas de migration DB** — toutes les colonnes nécessaires existent déjà
(`first_name`, `last_name`, `nationality`, `interface_language`,
`avatar_url`).
