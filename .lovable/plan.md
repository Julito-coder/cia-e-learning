
# Batch 10 — Auth Polish

Refonte visuelle et UX cohérente des 3 pages d'authentification
(`/connexion`, `/mot-de-passe-oublie`, `/reinitialiser-mot-de-passe`) :
mêmes transitions, même hiérarchie, validation temps réel, feedback
animé. Aucune logique métier modifiée — juste polish + sécurité de
saisie + petits correctifs.

## 1. Layout commun `AuthShell`

Nouveau composant `src/components/auth/AuthShell.tsx` qui factorise :
- Fond doux (gradient `from-background to-muted/30`)
- Logo CIA + titre + sous-titre animés (`scale-in`)
- Card centrée max-w-md, ombre élevée, rounded-2xl
- Footer "Centre International d'Antibes — depuis 1985"
- Respect `prefers-reduced-motion`

Toutes les pages auth s'enveloppent dans `<AuthShell title="..." subtitle="...">`.

## 2. `Connexion.tsx` — Tabs animés Login / Signup

```
┌─────────────────────────────┐
│  Logo CIA + tagline         │
│  ┌──────────┬──────────┐    │
│  │ Connexion│ Inscription│   │  ← Tabs avec layoutId
│  └──────────┴──────────┘    │
│  AnimatePresence mode="wait"│
│  ┌─ Form login ──────────┐  │
│  │ Email   [👁]          │  │
│  │ Mot de passe          │  │
│  │ ↳ "Oublié ?"          │  │
│  │ [ Se connecter ]      │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

Améliorations :
- **Tabs login/signup** au lieu du bouton "S'inscrire" textuel.
  Animation `layoutId="auth-tab"` pour l'indicateur actif.
- **Transition entre formulaires** via `AnimatePresence mode="wait"`
  (slide horizontal léger).
- **Validation zod** côté client : email valide, password min 6, prénom
  ≤ 50, nom ≤ 50. Erreurs affichées sous chaque champ avec
  `aria-invalid` + `text-destructive`.
- **Password strength meter** sur le formulaire signup (4 segments :
  faible / correct / bon / fort) basé sur longueur + variété
  caractères. Composant `PasswordStrength.tsx`.
- **Toggle visibilité mot de passe** déjà présent — conservé.
- **emailRedirectTo** ajouté à `signUp` pour pointer vers `/?welcome=1`
  (corrige lien de confirmation email).
- **Bouton submit** : spinner pendant loading, label dynamique selon
  l'état, animation tactile (whileTap scale 0.98).
- **Toasts** uniformisés (sonner) — succès / erreurs traduites.

## 3. `ForgotPassword.tsx` — feedback visuel

- Wrappé dans `AuthShell`.
- État "envoyé" : icône enveloppe animée (`motion` rebond) + message
  rassurant + bouton retour stylé.
- Validation zod email avant envoi, désactive le bouton si invalide.
- **Anti-spam** : si `loading` ou déjà `sent`, le re-submit est ignoré.
- Transition `AnimatePresence` entre formulaire ↔ état "envoyé".

## 4. `ResetPassword.tsx` — qualité saisie

- Wrappé dans `AuthShell`.
- **PasswordStrength meter** réutilisé.
- **Indicateur de correspondance** temps réel sous "Confirmer le mot de
  passe" : ✓ vert "Identique" ou ✗ rouge "Ne correspond pas".
- Bouton submit dégrisé seulement si :
  - longueur ≥ 6,
  - confirmation == password,
  - non `loading`.
- État succès : icône check animée + countdown visuel "Redirection dans
  3, 2, 1…" puis `navigate('/connexion')`.
- État "lien invalide" : design plus chaleureux dans `AuthShell`.

## 5. Composant `PasswordStrength.tsx`

```tsx
export function PasswordStrength({ value }: { value: string }) {
  // calcule un score 0-4 selon longueur + diversité (maj/min/chiffre/spécial)
  // 4 barres horizontales, couleur dégradée (destructive → warn → success)
  // label "Trop court" / "Faible" / "Correct" / "Bon" / "Fort"
}
```

Utilisé sur signup + reset.

## 6. Validation centralisée

Nouveau `src/lib/validators/auth.ts` :
- `emailSchema` (z.string().trim().email().max(255))
- `passwordSchema` (z.string().min(6).max(72))
- `nameSchema` (z.string().trim().max(50))
- `signUpSchema`, `signInSchema`, `resetSchema`

Réutilisés sur les 3 pages.

## 7. i18n

Nouvelle section `auth.*` (FR + EN) couvrant :
- titres, sous-titres, labels, placeholders
- messages d'erreur ("invalid_email", "password_too_short", "passwords_no_match")
- états ("sending", "sent_title", "sent_desc", "spam_hint")
- "Connexion réussie", "Bienvenue !", "Lien envoyé"
- libellés password strength

`Connexion`, `ForgotPassword`, `ResetPassword` passent en `useTranslation`.

## 8. Hors scope

- Pas de Google / OAuth ajouté ici — sera un batch séparé si demandé.
- Pas de migration DB.
- Pas de scaffolding d'emails auth personnalisés (les templates
  Lovable par défaut suffisent pour l'instant).
- Pas de modification de `useAuth.tsx` (sauf si nécessaire pour
  `emailRedirectTo` — passé en option dans signUp).

## 9. Fichiers touchés

**Nouveaux**
- `src/components/auth/AuthShell.tsx`
- `src/components/auth/PasswordStrength.tsx`
- `src/components/auth/AuthTabs.tsx` (tab indicator animé)
- `src/lib/validators/auth.ts`

**Modifiés**
- `src/pages/Connexion.tsx` — tabs, zod, AnimatePresence, strength meter
- `src/pages/ForgotPassword.tsx` — AuthShell + anim succès + zod
- `src/pages/ResetPassword.tsx` — AuthShell + strength + match indicator
- `src/hooks/useAuth.tsx` — `signUp` accepte un `emailRedirectTo`
  optionnel (ou hardcode `${origin}/?welcome=1`)
- `src/i18n/locales/fr.json` + `en.json` — bloc `auth.*`

## 10. Critères de validation

- Bascule login ↔ signup fluide (slide + fade).
- Strength meter réagit à chaque frappe.
- Erreurs de validation s'affichent sans recharger ni soumettre.
- Forgot password : envoi → écran enveloppe en < 1 frame.
- Reset password : correspondance live + bouton dégrisé/activé en temps réel.
- `prefers-reduced-motion` : transitions tombent à `opacity` simple.
