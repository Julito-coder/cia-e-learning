

## Corrections et Améliorations — CIA E-Learning

### 1. Images floues → Résolution HD
**Fichier : `src/data/demo-courses.ts`**
- Les URLs Unsplash utilisent `w=400` ce qui donne des images floues sur écrans retina
- Passer toutes les images à `w=800&h=500&fit=crop&q=80` pour une résolution nette

### 2. Logo CIA dans le header à côté de "Bonjour"
**Fichier : `src/pages/Index.tsx`**
- Ajouter `<img src="/cia-logo-2.jpg" />` à côté du texte "Bonjour, Marie !" dans la section héro
- Logo arrondi avec bordure blanche, taille ~48px

### 3. Mise en page — chevauchements
**Fichiers : `src/pages/Index.tsx`, `src/components/courses/CourseCard.tsx`**
- Ajouter de l'espacement entre les sections héro et stats
- S'assurer que les grilles de cards utilisent des gap suffisants
- Vérifier le padding bottom mobile (bottom nav overlap)

### 4. CourseCard — titres plus visibles, image ajustée
**Fichier : `src/components/courses/CourseCard.tsx`**
- Titre : passer de `text-sm` à `text-base font-display font-extrabold` 
- Image : réduire le ratio de `aspect-[16/10]` à `aspect-[16/9]` (légèrement moins haute)
- Garder l'image importante mais donner plus de place au contenu texte

### 5. Favoris fonctionnels (persistance locale)
**Fichier : `src/pages/Catalogue.tsx`**
- Utiliser `localStorage` pour persister les favoris entre sessions
- Initialiser le state depuis localStorage, sauvegarder à chaque toggle

### 6. Test de français — rotation de 5-10 tests aléatoires
**Fichier : `src/data/demo-test.ts`**
- Créer une banque de ~50-60 questions (au lieu de 27)
- Ajouter une fonction `getRandomTest(count: number)` qui sélectionne aléatoirement N questions par niveau
- Garantir que chaque test est différent

**Fichier : `src/pages/TestNiveau.tsx`**
- Utiliser `getRandomTest()` au lieu de `testQuestions` directement
- Régénérer un nouveau set à chaque restart

### 7. Bouton "Test de français" — contraste corrigé
**Fichier : `src/pages/Index.tsx`**
- Le bouton "Test de niveau" est blanc sur fond clair → texte en bleu marine (`text-primary`)
- Bordure visible en bleu marine

### 8. Bouton "Explorer les cours" en rouge entreprise
**Fichier : `src/pages/Index.tsx`**
- Changer le bouton "Explorer les cours" pour utiliser `bg-destructive text-destructive-foreground` (rouge CIA)
- Ajouter des petits rappels visuels rouge sur d'autres pages (badges, accents)

**Fichiers : `src/pages/Catalogue.tsx`, `src/pages/TestNiveau.tsx`**
- Ajouter des touches de rouge (petits badges, séparateurs, boutons CTA secondaires)

### 9. Multilingue — react-i18next
**Nouveaux fichiers :**
- `src/i18n/index.ts` — configuration i18next avec 6 langues (fr, en, es, de, it, ru)
- `src/i18n/locales/fr.json`, `en.json`, `es.json`, `de.json`, `it.json`, `ru.json` — fichiers de traduction

**Fichiers modifiés :**
- `src/main.tsx` — importer la config i18n
- `src/components/layout/Header.tsx` — connecter le sélecteur de langue à i18next (`i18n.changeLanguage()`)
- `src/pages/Index.tsx` — remplacer les textes statiques par `t('key')`
- `src/pages/Catalogue.tsx` — idem
- `src/pages/TestNiveau.tsx` — idem
- `src/components/courses/CourseCard.tsx` — idem
- `src/components/layout/Footer.tsx` — idem

### Résumé des fichiers
- **Modifiés** : `demo-courses.ts`, `demo-test.ts`, `Index.tsx`, `Catalogue.tsx`, `TestNiveau.tsx`, `CourseCard.tsx`, `Header.tsx`, `Footer.tsx`, `main.tsx`
- **Créés** : `src/i18n/index.ts`, 6 fichiers de traduction JSON

### Ordre d'implémentation
1. Images HD + CourseCard styling
2. Logo header + boutons couleurs
3. Chevauchements layout
4. Favoris localStorage
5. Banque de tests élargie + rotation
6. Multilingue i18next

