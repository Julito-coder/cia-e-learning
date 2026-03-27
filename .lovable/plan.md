

## Plan : Header modernisé, suppression éléments parasites, splash screen animé

### 1. Header — Nettoyage et modernisation

**Fichier : `src/components/layout/Header.tsx`**
- **Supprimer** le logo watermark au centre du header (lignes 54-60 — l'`<img>` avec `opacity-[0.06]`)
- **Logo sans encadré** : le logo à côté de "CIA E-Learning" a déjà `mixBlendMode: 'multiply'` mais s'assurer qu'il n'y a aucun border/rounded/shadow. Garder juste `className="h-9"` avec le mix-blend.
- Moderniser le header : bordure inférieure subtile avec un dégradé au lieu de `border-b-2`, ajouter une légère ombre `shadow-sm` pour un look premium.

### 2. Hero — Supprimer le drapeau français et le logo en fond

**Fichier : `src/pages/Index.tsx`**
- **Supprimer** le drapeau français 🇫🇷 (ligne 40 — le `div` avec `text-[200px]`)
- **Supprimer** le logo CIA en filigrane dans le hero (lignes 42-48 — l'`<img>` watermark)
- Remplacer par un fond plus moderne : motifs géométriques subtils en CSS (circles/dots pattern ou un dégradé mesh) pour un rendu premium sans image

### 3. Splash Screen animé au lancement

**Nouveau fichier : `src/components/SplashScreen.tsx`**
- Composant plein écran (`fixed inset-0 z-[100]`) avec fond bleu marine (couleur primaire CIA)
- Logo CIA centré avec animation :
  - Fade-in + scale de 0.7 à 1 (0-600ms)
  - Pulse subtil (600-1200ms)
  - Texte "CIA E-Learning" apparaît en dessous avec fade-in décalé
  - Fade-out du tout (1200-1800ms)
- Barre de chargement fine en bas (accent color) qui se remplit
- Après ~2 secondes, le splash disparaît avec une transition smooth

**Fichier : `src/App.tsx`**
- Ajouter un state `showSplash` initialisé à `true`
- Afficher `<SplashScreen>` par-dessus l'app
- Après 2s, `setShowSplash(false)` avec animation de sortie
- Le splash ne s'affiche qu'au premier chargement (pas à chaque navigation)

### 4. Modernisation globale du header

**Fichier : `src/components/layout/Header.tsx`**
- Remplacer `border-b-2` par `border-b border-border/50 shadow-sm` pour un look plus léger
- Ajouter un léger `backdrop-blur-xl` au lieu de `backdrop-blur`
- Nav items : transition plus smooth, underline animée au hover au lieu du bg change

### Résumé des fichiers

**Créé :**
- `src/components/SplashScreen.tsx`

**Modifiés :**
- `src/components/layout/Header.tsx` — suppression watermark central, modernisation style
- `src/pages/Index.tsx` — suppression drapeau FR et logo watermark, fond moderne
- `src/App.tsx` — intégration du splash screen

