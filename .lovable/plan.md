## Problème

Au retour dans l'onglet, la preview reste blanche. Aucune erreur console, aucune interaction possible. Symptôme classique d'une **boucle de rechargement silencieuse** dans l'iframe Lovable.

## Cause identifiée

Dans `src/main.tsx`, le filet de sécurité "preview recovery" déclenche `window.location.reload()` dès qu'un `vite:preloadError` ou une erreur "chunk failed" arrive. C'est utile après un merge (les hashs de chunks changent), MAIS la garde anti-boucle est cassée :

```ts
window.requestAnimationFrame(() => {
  window.sessionStorage.removeItem(PREVIEW_RECOVERY_KEY); // ← efface la garde dès le 1er frame
});
```

Conséquence : à chaque reload, la clé est effacée avant le prochain `preloadError`, donc `recoverPreview()` peut re-reload indéfiniment. Quand on revient sur l'onglet après un merge, Vite tente de précharger un module périmé → preloadError → reload → preloadError → … → iframe blanche.

Le second risque, plus mineur : `useAuth` ne pose pas de timeout sur `supabase.auth.getSession()`. Si l'appel ne résout pas après reprise d'onglet (réseau gelé), `isLoading` reste `true` et `LandingOrRedirect` affiche le spinner — pas le symptôme actuel mais à durcir tant qu'on y est.

## Correctifs

### 1. `src/main.tsx` — vraie garde anti-boucle (fix principal)

- Remplacer la clé booléenne par un compteur horodaté en `sessionStorage` : `{ count, firstAt }`.
- Autoriser **au plus 1 recovery par fenêtre de 10 s**. Au-delà, on n'efface plus, on ne recharge plus, on `console.warn` et on laisse l'app monter normalement (ErrorBoundary prendra le relais si crash réel).
- **Supprimer le `requestAnimationFrame` qui efface la clé**. La clé est nettoyée naturellement par expiration de la fenêtre 10 s lors d'un futur preloadError, ou jamais (sessionStorage = scope onglet, OK).
- Conserver les 3 listeners (`vite:preloadError`, `error`, `unhandledrejection`) avec les mêmes patterns de message.

### 2. `src/hooks/useAuth.tsx` — timeout de sécurité (durcissement)

- Ajouter un `setTimeout(2500ms)` qui force `setIsLoading(false)` + `initializedRef.current = true` si `getSession()` n'a pas répondu. Évite tout écran de chargement infini au retour d'onglet.

## Détails techniques

- Pas de changement de comportement utilisateur en cas de vraie erreur de chunk après merge : le 1er reload se fait toujours. Seules les boucles sont coupées.
- Aucun changement UI, aucun changement de routes, aucun changement backend.
- Fichiers modifiés :
  - `src/main.tsx`
  - `src/hooks/useAuth.tsx`

## Validation

1. Vérifier dans la preview qu'aucun reload en boucle n'apparaît (Network ne doit pas répéter `/` toutes les ~500 ms).
2. Quitter l'onglet 30 s, revenir → la page reste affichée (pas de blanc).
3. Simuler un preloadError unique → un seul reload, puis l'app se monte.
