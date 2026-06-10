## Activer Google + Apple Sign-In

### Côté backend (Lovable Cloud)
Activer les deux providers OAuth managés via `configure_social_auth` avec `providers: ["google", "apple"]`. Aucun secret à fournir : Lovable Cloud gère les credentials par défaut (branding générique, mais fonctionnel immédiatement). L'email/password reste actif (pas de `disable_providers`).

### Côté code
Le bouton Google utilise actuellement `supabase.auth.signInWithOAuth` directement. Migration vers le module managé `lovable.auth.signInWithOAuth` (recommandé par Lovable Cloud, généré automatiquement par l'outil `configure_social_auth` dans `src/integrations/lovable/`).

Dans `src/pages/Connexion.tsx` :
1. Remplacer `handleGoogleSignIn` pour utiliser `lovable.auth.signInWithOAuth("google", { redirect_uri: ... })`.
2. Activer le bouton Apple (retirer `disabled`/`opacity-60`/badge "bientôt") et ajouter `handleAppleSignIn` avec `lovable.auth.signInWithOAuth("apple", ...)`.
3. Ajouter un state `appleLoading` symétrique à `googleLoading`.
4. `redirect_uri` = `${window.location.origin}${redirectTo}` (préserve le paramètre `?redirect=` actuel).

### Notes
- Si l'utilisateur veut plus tard utiliser **ses propres** credentials Apple (Services ID + .p8) pour afficher le nom de l'app sur l'écran Apple, ça se configure dans le Backend Lovable Cloud → Authentication Settings → Apple. Pour démarrer, le mode managé suffit.
- Aucune migration DB nécessaire (le trigger `handle_new_user` crée déjà profil/role/subscription pour tout nouvel utilisateur, quelle que soit la méthode d'auth).
