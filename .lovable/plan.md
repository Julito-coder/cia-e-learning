
# Batch 13 — i18n Complet (FR/EN/ES/DE/IT/RU)

Goal: every user-facing string flows through `react-i18next`, with all 6 locale files in perfect sync. FR is the canonical source.

## Audit (current state)

- 39 files use `useTranslation` (mostly landing, course player, profile, curriculum, glossary, catalogue, gamification toasts).
- ~25 pages/components still hardcode FR strings, including: all 6 admin pages, `Index`, `NotFound`, `Classement`, `CourseDetail`, `DailyChallenge`, `SpeedTest`, `Connexion`, `ForgotPassword`, `ResetPassword`, `SplashScreen`, characters modal, course card / learning path, league components, `AppLayout`, `AdminLayout`, gamification visuals, `EmptyState` consumers.
- `fr.json` has 19 namespaces / ~337 keys. Other locales lag (412–439 lines vs 471 for FR) and likely miss the newer namespaces.

## Scope

### 1. Add missing namespaces in `fr.json`
- `auth` (login, signup, forgot, reset, validation messages, password strength labels)
- `admin` (dashboard, users, courses, analytics, subscriptions, settings, layout breadcrumbs, common table labels)
- `classement` (leagues, ranks, promo/relegation, countdown labels)
- `courseDetail` (sections, prerequisites, locked, premium banner, CTA)
- `dailyChallenge` (intro, claim, already done, streak summary)
- `speedTest` & `notFound` & `splash`
- `common` (yes/no, save, cancel, delete, edit, loading, retry, search, filters, all, none, today, yesterday, etc.)
- `states` (empty/error standard titles + retry)
- `notify` (xp, streak, badge, levelUp, unlock — bonus payloads)

### 2. Refactor hardcoded files to use `t()`
Group A — public pages:
- `Index.tsx`, `NotFound.tsx`, `Classement.tsx`, `CourseDetail.tsx`, `DailyChallenge.tsx`, `SpeedTest.tsx`, `Connexion.tsx`, `ForgotPassword.tsx`, `ResetPassword.tsx`

Group B — shared components:
- `SplashScreen.tsx`, `AppLayout.tsx`
- `courses/CourseCard.tsx`, `courses/LearningPath.tsx`, `courses/LevelBadge.tsx`
- `leaderboard/LeagueBadge.tsx`, `leaderboard/LeagueView.tsx`, `leaderboard/PromoZoneIndicator.tsx`
- `gamification/Achievements.tsx`, `gamification/DailyGoal.tsx`, `gamification/GamificationOverlay.tsx`
- `characters/CharacterStoryModal.tsx`, `characters/CharacterShowcase.tsx`
- `profile/AvatarUpload.tsx`, `profile/CountrySelect.tsx` (label + country-name policy: keep names in own language, only translate the field label)

Group C — admin (Batch 12):
- `AdminLayout.tsx` and all 6 `Admin*.tsx` pages, plus shared `AdminPageHeader`, `StatCard`, `AdminSectionCard`, table skeleton labels.

Group D — auth utilities:
- `lib/validators/auth.ts` → return error codes (e.g. `auth.errors.emailInvalid`) instead of raw strings; consumers translate.
- `lib/notify.ts` gamification helpers accept already-translated text (callers pass `t(...)`); keep API stable but add a thin `notify.t` helper that takes a key.

### 3. Translate to EN / ES / DE / IT / RU
- Sync structure with FR (same nesting & keys).
- Provide native, idiomatic translations for all strings — not literal.
- Preserve placeholders (`{{name}}`, `{{count}}`) and pluralization (use i18next `_one` / `_other` suffix where the count varies, e.g. `j`/`days`).
- Special policies:
  - **Brand & product names** (CIA, Antibes, character names, CECRL levels A1–C2) stay in original.
  - **Learning content** stays French (memory rule). UI strings only.
  - **Admin labels** translated everywhere.

### 4. i18n quality utilities
- Add `scripts/i18n-check.mjs`: walks FR keys, verifies every other locale has the same set; logs missing/extra keys; non-zero exit if mismatch. Run manually (no CI wiring here).
- `i18n/index.ts`: enable `returnEmptyString: false`, `saveMissing: true` only in dev with a `console.warn` for missing keys. Keep `fallbackLng: 'fr'`.
- Document conventions in `src/i18n/README.md`: naming (`namespace.section.key`), placeholders, pluralization, and "FR is source of truth".

### 5. LanguageSwitcher polish
- Already exists. Verify all 6 langs (FR, EN, ES, DE, IT, RU) render with native names + flags. Ensure HTML `lang` attribute updates on `i18n.changeLanguage`.
- Persist selection (already via `cia-interface-lang`). Add a side effect in `i18n/index.ts` that writes `document.documentElement.lang` on init and on `languageChanged`.

## Out of scope

- No DB migrations.
- No new pages/features.
- No translation of learning content (lessons stay FR per memory).
- No CI integration of the check script.
- No RTL support (RU is LTR; no Arabic/Hebrew added).

## Validation

- `node scripts/i18n-check.mjs` reports zero missing/extra keys for all 5 non-FR locales.
- Switching language in the UI updates: nav, landing, course player, catalogue, curriculum, glossary, classement, profile, daily challenge, auth pages, splash, 404, admin shell, all 6 admin pages, league/course/character components.
- No raw FR string remains in any of the listed files (spot-check via `rg` for accents like "é/à/ç" in JSX strings).
- Console shows no "missingKey" warnings during a full nav loop in any of the 6 languages.
- HTML `<html lang="…">` reflects the active language.

## Files

**New:**
- `scripts/i18n-check.mjs`
- `src/i18n/README.md`

**Modified (locales):**
- `src/i18n/locales/fr.json` (canonical, expanded)
- `src/i18n/locales/en.json`, `es.json`, `de.json`, `it.json`, `ru.json` (full re-sync + new translations)

**Modified (code):**
- `src/i18n/index.ts` (lang side-effect + dev warnings)
- `src/lib/validators/auth.ts` (return keys, not strings)
- `src/lib/notify.ts` (helper for keyed messages)
- All files listed in Groups A / B / C above (~25 files)
