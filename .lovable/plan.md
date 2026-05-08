
# Batch 8 — Test de Niveau & Onboarding

Refonte du test de placement + tunnel d'arrivée pour un nouvel utilisateur :
splash de bienvenue contextualisé, walkthrough des 4 zones-clés, prompt de
test de niveau intelligent. On capitalise sur `set_placement_level` (RPC
existante, one-shot serveur) et `placement_test_taken_at` (déjà en DB).

## 1. État d'onboarding (DB + client)

- **Migration** : ajouter `onboarding_completed_at TIMESTAMPTZ NULL` sur
  `profiles` + protéger via `protect_gameplay_columns` (admin & RPC only).
- **RPC `mark_onboarding_done()`** SECURITY DEFINER qui pose
  `onboarding_completed_at = now()` pour `auth.uid()`.
- Hook `useOnboarding()` :
  - `needsOnboarding = !onboarding_completed_at && !placement_test_taken_at`
  - `markDone()` → appelle la RPC, met à jour state local
  - Fallback `localStorage` (`cia-onboarding-done`) pour anonymes
- Re-déclenchable manuellement via Profil → "Refaire le tour"
  (utilise localStorage `cia-onboarding-skip-until` pour respecter "Plus
  tard" pendant 24h).

## 2. Onboarding flow (4 étapes)

Composant `OnboardingFlow` rendu via portail au-dessus de `AppLayout`,
monté quand `needsOnboarding === true` et après le splash initial.

```
┌──────── Bienvenue à Antibes ─────────┐  (Étape 1)
│ Personnage Léa qui salue (3D avatar) │
│ Slogan + CTA "Commencer le voyage"   │
└──────────────────────────────────────┘
        ↓
┌──────── Choisis ton profil ──────────┐  (Étape 2)
│ 3 cartes : Débutant / Faux-débutant  │
│ / Confirmé — détermine si on suggère │
│ A1 par défaut ou si on lance le test │
└──────────────────────────────────────┘
        ↓
┌──────── Test de niveau ? ────────────┐  (Étape 3)
│ • Oui → /test-niveau (CTA primary)   │
│ • Plus tard → niveau A1, skip 24h    │
│ • Je connais mon niveau → picker A1-C2│
│   (set_cecr_level, pas placement)    │
└──────────────────────────────────────┘
        ↓
┌──────── Walkthrough (5 spots) ───────┐  (Étape 4)
│ Coachmarks séquentiels :             │
│ 1. Header : XP / Streak / Ligue      │
│ 2. Nav : Programme (zigzag path)     │
│ 3. Nav : Catalogue (recherche libre) │
│ 4. Nav : Défi du jour                │
│ 5. Nav : Classement / Ligues         │
└──────────────────────────────────────┘
        ↓ markDone() → toast "+50 XP bonus bienvenue"
        ↓ award_xp(50, 'onboarding')
```

### Comportement clé

- Bouton "Passer" toujours visible dans le footer du modal (sauf
  étape 4 où c'est "Terminer maintenant").
- Si l'utilisateur navigue vers `/test-niveau` via étape 3, on garde
  `needsOnboarding=true` et on reprend la **walkthrough** au retour (au
  prochain mount de AppLayout détecter `placement_test_taken_at` qui vient
  d'être posé).
- Bouton fermer (X) → confirmation "Tu pourras refaire le tour depuis ton
  profil" → `markDone()`.

## 3. Composants nouveaux

- `src/hooks/useOnboarding.ts` — état + actions
- `src/components/onboarding/OnboardingFlow.tsx` — orchestrateur portal
- `src/components/onboarding/OnboardingWelcome.tsx` — étape 1
- `src/components/onboarding/OnboardingProfileCard.tsx` — étape 2
- `src/components/onboarding/OnboardingLevelChoice.tsx` — étape 3
- `src/components/onboarding/Coachmark.tsx` — bulle ancrée à un sélecteur
  data-attribute, avec backdrop + "spotlight" (overlay sombre avec trou
  via `clip-path`).
- `src/components/onboarding/CoachmarkTour.tsx` — séquence des 5 spots
  avec indicateur 1/5 → 5/5 et boutons Précédent / Suivant / Passer.
- `data-onboard="header-xp" | "nav-programme" | "nav-catalogue" |
  "nav-daily" | "nav-classement"` posés sur les éléments existants
  (`Header`, `MobileDrawer`, `UserIndicators`).

## 4. Refonte Test Niveau (`src/pages/TestNiveau.tsx`)

Reprend la même architecture (intro / test / result) mais polish :

- **Intro** : Avatar Léa qui parle ("Je vais évaluer ton niveau en 30
  questions"), badges niveau en stagger fade-in, CTA gradient. Ajout d'une
  preview de progression (barre vide à 0/30) + estimation "≈ 7 minutes".
- **Test** :
  - Header sticky : barre de progression segmentée par niveau (7 segments
    A0→C2), pastille animée qui glisse (motion.div layoutId).
  - Question : transition slide horizontale (`AnimatePresence mode="wait"`).
  - Feedback : utilise `StepFeedback` créé en Batch 5A pour cohérence.
  - Bouton "Je ne sais pas" → marque incorrect, passe direct (utile pour
    ne pas tricher au hasard).
- **Result** :
  - Animation reveal du niveau : compteur qui défile A0→A1→...→résultat
    pendant 1.5s, puis explosion de confettis (réutilise pattern
    `LevelUpCelebration`).
  - Détail par niveau : barres animées avec `motion.div initial width:0`.
  - Si `alreadyTaken === true` au save : afficher modal explicatif au lieu
    du toast warning (UX plus claire).
  - CTA principal "Voir mes cours" + secondaire "Refaire le test"
    (désactivé si déjà passé, avec tooltip explicatif).

## 5. Premier login dans Connexion

- Après `signUp` réussi (compte créé) : redirige vers `/?welcome=1` qui
  force le déclenchement immédiat de `OnboardingFlow` (sans attendre la
  fenêtre de détection naturelle).
- Toast de bienvenue distinct du toast standard.

## 6. i18n

- Ajout `onboarding.*` dans les 6 locales (FR / EN / ES / DE / IT / RU) :
  - `onboarding.welcome.title`, `onboarding.welcome.subtitle`, `onboarding.welcome.cta`
  - `onboarding.profile.beginner|falseBeginner|confirmed.{label,desc}`
  - `onboarding.level.takeTest|later|knowMine`
  - `onboarding.coach.{xp,programme,catalogue,daily,classement}.{title,desc}`
  - `onboarding.skip`, `onboarding.next`, `onboarding.previous`, `onboarding.finish`
  - `onboarding.bonusXp` ("+50 XP de bienvenue !")
- Quelques clés de Test Niveau enrichies (`test.notKnow`, `test.estimatedTime`,
  `test.alreadyTaken.title|desc|ok`).

## 7. Accessibilité & motion

- `prefers-reduced-motion` respecté : confettis et coachmark spotlight
  passent en fade simple.
- Coachmark : `role="dialog"` + `aria-describedby`, focus trap, fermeture
  via Échap, navigation flèches ←→.
- Test Niveau : `aria-live="polite"` sur le feedback de réponse.

## 8. Hors scope

- Pas de modification de la logique `calculateLevel` ni du pool
  `demo-test.ts`.
- Pas de tutoriel inline dans une leçon (déjà couvert par `LessonStep`).
- Pas de profil "intérêts" (cuisine / cinéma / business) — on garde
  Débutant/Faux-débutant/Confirmé seulement.
- Pas de gating dur : un user peut toujours fermer l'onboarding et
  naviguer librement.

## 9. Fichiers touchés (estimation)

**Nouveaux**
- `src/hooks/useOnboarding.ts`
- `src/components/onboarding/OnboardingFlow.tsx`
- `src/components/onboarding/OnboardingWelcome.tsx`
- `src/components/onboarding/OnboardingProfileCard.tsx`
- `src/components/onboarding/OnboardingLevelChoice.tsx`
- `src/components/onboarding/Coachmark.tsx`
- `src/components/onboarding/CoachmarkTour.tsx`

**Modifiés**
- `src/pages/TestNiveau.tsx` (refonte complète)
- `src/components/layout/AppLayout.tsx` (mount du flow)
- `src/components/layout/Header.tsx` + `UserIndicators.tsx` +
  `MobileDrawer.tsx` (data-onboard attributes)
- `src/pages/Connexion.tsx` (redirect post-signup avec `?welcome=1`)
- `src/hooks/useUserProgress.ts` (expose `onboardingCompletedAt`,
  optionnel)
- `src/i18n/locales/{fr,en,es,de,it,ru}.json`

**Migration**
- `supabase/migrations/<timestamp>_onboarding.sql`
  - `ALTER TABLE profiles ADD COLUMN onboarding_completed_at TIMESTAMPTZ`
  - `CREATE FUNCTION mark_onboarding_done()`
  - Étendre `protect_gameplay_columns` pour bloquer l'écriture directe.
