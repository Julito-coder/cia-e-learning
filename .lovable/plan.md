## Constat

Le header/footer sont déjà traduits, mais plusieurs zones critiques restent en français codé en dur, ce qui donne l'impression que le multilingue n'est pas activé sur la landing et sur Inscription/Connexion.

### Blocs non traduits identifiés

**Landing**
- `components/landing/Testimonials.tsx` : les 3 témoignages (quote, name, meta) sont définis dans un tableau JS en dur.
- `components/landing/GamificationShowcase.tsx` : libellé « Ligue Or » écrit en dur (ligne 67).

**Inscription / Connexion**
- `components/auth/AuthTabs.tsx` : onglets « Connexion » / « Inscription » en dur.
- `components/auth/AuthShell.tsx` : baseline « Centre International d'Antibes — depuis 1985 » en dur.
- `pages/Connexion.tsx` : message d'erreur Apple « Connexion Apple impossible : … » en dur (ligne 95).
- `lib/validators/auth.ts` : tous les messages d'erreur Zod (« Email requis », « Au moins 6 caractères », « Les mots de passe ne correspondent pas », etc.) + tableau `passwordStrengthLabels` (« Trop court », « Faible », « Correct », « Bon », « Fort ») en dur — ce sont eux qui s'affichent sous chaque champ.

## Ce qui sera fait

1. **Ajouter les clés i18n manquantes** dans les 6 fichiers `src/i18n/locales/{fr,en,es,de,it,ru}.json` :
   - `landing.testimonials.items` : tableau de 3 objets { quote, name, meta } traduits.
   - `landing.gamification.league_gold` : « Ligue Or » traduit.
   - `auth.tabs.login` / `auth.tabs.signup` pour AuthTabs.
   - `auth.shell.baseline` pour AuthShell.
   - `auth.appleError` aligné sur `auth.googleError` (avec variable `{{message}}`).
   - `auth.validation.*` : `emailRequired`, `emailInvalid`, `emailTooLong`, `passwordRequired`, `passwordMin`, `passwordMax`, `nameMax`, `passwordsDontMatch`.
   - `auth.passwordStrength` : `tooShort`, `weak`, `ok`, `good`, `strong`.

2. **Brancher `useTranslation()` / `i18n.t()` dans le code** :
   - `Testimonials.tsx` : lire le tableau via `t('landing.testimonials.items', { returnObjects: true })`.
   - `GamificationShowcase.tsx` : remplacer « Ligue Or » par `t('landing.gamification.league_gold')`.
   - `AuthTabs.tsx` : utiliser `useTranslation` pour les deux labels.
   - `AuthShell.tsx` : utiliser `useTranslation` pour la baseline.
   - `Connexion.tsx` : remplacer le message Apple par `t('auth.appleError', { message: … })`.
   - `lib/validators/auth.ts` : convertir les messages Zod et les labels de force du mot de passe en fonctions qui résolvent via `i18n.t(...)` (import depuis `@/i18n`), pour que le changement de langue s'applique immédiatement.

3. **Vérifications**
   - Parcours visuel de la landing et d'Inscription dans les 6 langues via le sélecteur déjà présent (header).
   - Aucun changement de logique, design, business model, ni de routes — purement traduction.

## Détails techniques

- L'i18n instance est déjà initialisée (`src/i18n/`) ; on ajoute simplement de nouvelles clés et on importe `i18n` quand on est hors composant React (validators).
- Pour les messages Zod, on remplace les chaînes par des fonctions `(ctx) => i18n.t('auth.validation.xxx')` afin de garder la résolution paresseuse au moment du `safeParse`.
- Aucune migration BDD ni edge function impactée.
