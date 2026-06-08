## Problème

Le volet (drawer) mobile ouvert depuis le burger du `Header` ne se referme plus de manière fiable.

En lisant `src/components/layout/MobileDrawer.tsx` et `Header.tsx`, j'identifie plusieurs causes potentielles qui se cumulent :

1. **Pas de fermeture automatique au changement de route.** Les liens utilisent `<Link onClick={onClose}>`, mais si la navigation est interceptée (catalogue, programme, etc.) ou si le clic se produit sur l'icône / le texte sans déclencher `onClose` (event swallow par framer-motion exit), le drawer reste ouvert.
2. **Pas de fermeture sur Échap.**
3. **Pas de `stopPropagation` sur le panneau** : un clic sur le panneau peut, selon le device, bubbler jusqu'au backdrop et créer un comportement incohérent (ouverture/fermeture flickering).
4. **Z-index / containing-block fragile.** Le drawer est rendu en frère du `<header sticky>` mais d'autres overlays (`OnboardingFlow` z-150, `Coachmark` z-200, `XPBurst` z-60) partagent la même couche et peuvent couvrir le bouton X. Le rendre via React Portal dans `document.body` élimine tout risque d'être contraint par un ancestor avec `transform` / `backdrop-filter`.
5. **Scroll body non verrouillé** quand le drawer est ouvert → sur iOS un scroll peut « casser » l'overlay.

## Correctif proposé

Modifier uniquement `src/components/layout/MobileDrawer.tsx` :

- Wrap du rendu dans `createPortal(..., document.body)` pour le sortir du contexte d'empilement du header.
- Ajouter un `useEffect` qui :
  - écoute la touche `Escape` et appelle `onClose`,
  - verrouille `document.body.style.overflow = 'hidden'` quand `open` est vrai, restauré au cleanup.
- Ajouter `onClick={(e) => e.stopPropagation()}` sur `motion.aside` pour isoler le panneau du backdrop.
- Remonter le z-index à `z-[100]` (backdrop) et `z-[101]` (panneau) pour passer au-dessus de `XPBurst` (z-60) tout en restant sous l'onboarding (z-150).

Modifier `src/components/layout/Header.tsx` :

- Ajouter un `useEffect` qui ferme le drawer (`setDrawerOpen(false)`) à chaque changement de `location.pathname`, comme filet de sécurité indépendant du `onClick` des liens.

## Hors scope

- Aucun changement de design ou de contenu du menu.
- Aucune modification de la logique d'auth, de routes ou des autres overlays (Onboarding, Gamification).

## Détails techniques

```text
MobileDrawer
├── createPortal -> document.body
├── backdrop  z-[100]  onClick=onClose
└── aside     z-[101]  onClick=stopPropagation
                ├── header (X button)
                ├── nav (links: onClick=onClose)
                └── footer (logout/login)

Header
└── useEffect([location.pathname]) -> setDrawerOpen(false)
```
