## Objectif

Remplacer le picto actuel (h-20 `/picto.png`) en haut de la page Inscription/Connexion par le logo complet « Centre International d'Antibes — Don't learn French. Live it. » fourni, et le rendre plus visible.

## Étapes

1. **Asset** — créer un pointeur Lovable Asset pour `LOGO_CIA-2.png` (via `lovable-assets create`) plutôt qu'embarquer le binaire dans le repo, et l'importer dans `src/components/auth/AuthShell.tsx`.
2. **AuthShell.tsx** :
   - Remplacer `src="/picto.png"` par l'asset importé.
   - Passer la hauteur de `h-20` à `h-36 md:h-44` pour qu'il prenne plus de place (le logo contient déjà le nom + baseline).
   - Adapter l'`alt` à « Centre International d'Antibes — Don't learn French. Live it. ».
   - Supprimer la ligne baseline texte `auth.shellBaseline` en bas du shell (devenue redondante avec la baseline déjà gravée dans le logo) pour éviter le doublon visuel.
3. **Pas de changement** ailleurs : header/footer, autres pages, i18n des labels formulaire restent inchangés.

## Détails techniques

- Le composant `AuthShell` est partagé entre `/connexion`, `/inscription`, `/mot-de-passe-oublie` et `/reset-password`. La modification s'appliquera donc à ces 4 écrans, ce qui est cohérent (même branding).
- Le logo est sur fond blanc opaque ; le shell a déjà un fond clair (`bg-gradient-to-b from-background to-muted/30`), donc pas de retouche de contraste.
