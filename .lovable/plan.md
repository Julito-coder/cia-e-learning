## Diagnostic

L'appli publiée (`https://cia-e-learning.lovable.app`) renvoie un HTML quasi vide (`<div id="root"></div>` sans bundle exécutable utile). Cause racine identifiée :

- Le projet est un stack Vite classique qui lit `VITE_SUPABASE_URL` et `VITE_SUPABASE_PUBLISHABLE_KEY` depuis `.env` au moment du **build**.
- Le fichier `.gitignore` actuel ignore `.env` ET `.env.*` :
  ```
  .env
  .env.*
  !.env.example
  ```
- Résultat : lors du build de production sur Lovable, `.env` et `.env.production` ne sont pas présents. `src/integrations/supabase/client.ts` reçoit `undefined` pour l'URL/clé Supabase → exception au chargement → React ne monte jamais → page blanche.

Le preview fonctionne car la sandbox a les fichiers `.env` locaux.

## Correctif

Modifier `.gitignore` pour **dé-ignorer** les fichiers d'env gérés par Lovable, tout en conservant l'exclusion des fichiers locaux personnels :

```
# Avant
.env
.env.*
!.env.example

# Après
.env.local
.env.*.local
```

Cela permet à `.env`, `.env.development` et `.env.production` (gérés automatiquement par Lovable Cloud et le go-live Stripe) d'être inclus dans le build.

## Étapes

1. Modifier `.gitignore` : remplacer le bloc `.env` / `.env.*` / `!.env.example` par `.env.local` et `.env.*.local`.
2. Republier le projet (les valeurs publiques Supabase + le token Stripe `pk_live_` seront alors présents dans le build prod).

## Vérification après republish

- Charger `https://cia-e-learning.lovable.app` → le dashboard s'affiche.
- Vérifier qu'aucun "Stripe payments are not configured" n'apparaît (le `pk_live_` est bien embarqué).

## Note sécurité

Aucun secret sensible n'est exposé : ces variables `VITE_*` sont des clés publiques (anon Supabase + publishable Stripe), conçues pour être présentes dans le bundle client.