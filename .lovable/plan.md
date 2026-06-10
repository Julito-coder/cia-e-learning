## Plan

1. Remplacer la stratégie actuelle de `manualChunks` par une configuration sans découpage manuel des dépendances `node_modules`.
2. Laisser Vite/Rollup reconstruire automatiquement le graphe de chunks pour éviter toute exécution anticipée de libs React avant `react` / `react-dom`.
3. Conserver uniquement les réglages sûrs de résolution (`alias`, `dedupe`) et retirer la logique de classement paquet par paquet qui est devenue fragile.
4. Vérifier le résultat sur le build publié en ciblant le symptôme exact : disparition des erreurs `createContext` / `forwardRef` et chargement normal de l’app.

## Résultat attendu

- Plus de page blanche en production.
- Plus de régression à chaque ajout d’une nouvelle librairie React.
- Une configuration Vite plus simple, maintenable et robuste.

## Détails techniques

- Le problème vient du fait que `manualChunks` impose un ordre de chargement implicite entre chunks qui cassent quand une librairie React (Radix, React Query, React Hook Form, etc.) est exécutée avant l’initialisation complète du runtime React.
- La correction définitive la plus sûre est de supprimer le `manualChunks` custom pour les dépendances, au lieu d’entretenir une allowlist incomplète de wrappers React.
- Je ne ferai pas de correction « paquet par paquet ».
- Je garderai `dedupe` sur `react`, `react-dom` et les runtimes JSX pour éviter les doublons, mais sans forcer de séparation manuelle des vendors.
- Validation prévue après implémentation : vérifier les chunks générés, contrôler les erreurs navigateur côté preview/published, puis confirmer que la landing et le lancement de l’app fonctionnent.