## Plan d'action

### 1. Logo unifié partout sur `picto.png`
Remplacer toutes les références à `cia-logo-2.png` (et le picto précédent) par `/picto.png` :
- `src/components/SplashScreen.tsx` (écran de démarrage)
- `src/components/auth/AuthShell.tsx` (pages connexion / inscription / reset / forgot)
- `src/components/layout/Footer.tsx`
- `src/components/layout/MobileDrawer.tsx`
- `index.html` (OG/Twitter image + favicon si nécessaire)
- Landing : vérifier `Hero`, `CTASection` et tout composant `landing/*` qui afficherait l'ancien logo

### 2. Agrandir le logo dans le Header
Dans `src/components/layout/Header.tsx`, passer la classe du logo de `h-8 sm:h-10` à `h-12 sm:h-14` (≈ +50 %), avec ajustement de la hauteur du header si besoin pour rester équilibré.

### 3. Réparer l'accès aux cours (catalogue + parcours)

Diagnostic :
- Le registre `contentRegistry.ts` est correct, mais `course-content.ts` n'agrège **que A1.1, A1.2, puis A2 / B1 / B2 complets**. Résultat : **A1 modules 3-4-5, C1, C2 = aucune leçon jouable**, et l'UI des modules concernés tombe sur « Bientôt disponible » ou n'affiche qu'une seule leçon (la première).
- La leçon 91 (A2.5) existe bien dans `a2-module5-content.ts` mais doit être validée côté player (steps complets, pas de step cassé) — bug ponctuel à corriger après QA.

Actions :
1. **Récupération des modules manquants** : rechercher dans l'historique git du projet (via `git show`/`git log` accessible en build mode) les fichiers `a1-module3/4/5`, `c1-module*`, `c2-module*` éventuellement supprimés par un merge, et les restaurer.
2. **Brancher tous les modules** dans `src/data/course-content.ts` (`allContent = [...]`).
3. **Catalogue / Parcours** : s'assurer que la liste des leçons d'un module affiche bien les 10 leçons (et pas une seule) — vérifier `LearningPath`, `ZigzagPath`, `ModuleDrawer` qui doivent itérer sur `module.lessons` (et non sur `playableLessons`), avec verrou visuel pour celles sans contenu.
4. **CourseDetail / leçon 91** : reproduire le bug en local, corriger le step fautif (souvent un `correctIndex` invalide ou un `type` non géré par `CoursePlayer`).
5. Mettre à jour les compteurs (`countPlayableLessonsByLevel`) pour refléter les contenus restaurés.

### 4. Activer Apple + Google (managé Lovable Cloud)
- Lancer `configure_social_auth` avec `providers: ["google", "apple"]` (laisse email actif).
- Dans `src/pages/Connexion.tsx`, ajouter deux boutons « Continuer avec Google » et « Continuer avec Apple » utilisant `lovable.auth.signInWithOAuth("google" | "apple", { redirect_uri: window.location.origin })`, avec gestion d'erreur et redirect vers `?redirect=` si présent.
- Aucun secret demandé à l'utilisateur (managé).

### 5. Multilingue complet (toute l'app sauf contenu pédagogique)

Audit puis remplacement des chaînes FR hard-codées par des clés i18n dans **les 6 fichiers `src/i18n/locales/*.json`** :

- **Pages utilisateur** : `Dashboard.tsx`, `Abonnement.tsx`, `ContactCia.tsx`, `NotFound.tsx`, `Profil.tsx` (formulaires), `Catalogue.tsx` (filtres / vides), `Curriculum.tsx`, `Classement.tsx`, `DailyChallenge.tsx`, `SpeedTest.tsx`, `TestNiveau.tsx`, `Connexion.tsx`, `CourseDetail.tsx` (UI seulement, pas le contenu des steps).
- **Landing** : `Hero`, `HowItWorks`, `CECRJourney`, `GamificationShowcase`, `Personas`, `Pricing`, `Testimonials`, `CTASection`.
- **Composants partagés** : `MobileDrawer`, dropdown user du `Header`, toasts, `OnboardingFlow`, `Coachmark`, `ModuleDrawer`, `CoursePlayer` (boutons / feedback), `GamificationOverlay`, `LevelUpCelebration`, `Achievements`, `AvatarUpload`, `AccountActions`, `PersonalInfoForm`, `CountrySelect`, `StripeEmbeddedCheckout`, `PaymentTestModeBanner`.
- **Admin** (Header/Footer exclus mais le reste demandé) : à confirmer — par défaut traduit aussi (`AdminDashboard`, `AdminUsers`, `AdminCourses`, `AdminAnalytics`, `AdminSubscriptions`, `AdminSettings`, `AdminPageHeader`, `AdminSectionCard`, `StatCard`).
- **Lancer `scripts/i18n-check.mjs`** en fin de chantier pour valider qu'aucune clé n'est manquante dans en/es/de/it/ru.

Le contenu pédagogique (`src/data/*-content.ts`, curriculum, glossaire FR) reste **en français** conformément à la mémoire projet.

### Détails techniques

- Pour Apple/Google managés : `configure_social_auth` génère/maj `src/integrations/lovable/index.ts` automatiquement (fichier auto-géré, on n'y touche pas).
- Si un fichier de module a réellement été perdu (introuvable dans l'historique), je le signalerai et proposerai soit de le régénérer à partir de `curriculum.ts` (squelette « Bientôt disponible » par leçon) soit d'attendre votre source.
- Audit i18n via `rg -n "[À-ÿ]{3,}|\\b(le|la|les|et|ou|vous)\\b" src/...` puis remplacement systématique par `t('...')`.

### Ordre d'exécution
1. Logo (rapide, visuel immédiat)
2. Header agrandi
3. Auth Apple + Google
4. Restauration des modules de cours + correction leçon 91
5. Audit + traduction i18n complète + validation script
