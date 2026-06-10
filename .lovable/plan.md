## Périmètre

Nettoyage gold / étoiles **uniquement sur la landing page (Hero, sections marketing), la page Inscription/Connexion et la page TestNiveau (CTA principal)**. La gamification (Ligue Or, XP, achievements, streaks, coffres) reste intacte.

## Modifications

### 1. `src/components/landing/Hero.tsx`
- Retirer les deux halos `bg-cia-gold-300/30` et `bg-cia-gold-400/20` derrière Spark → remplacer par **un seul halo bleu** `bg-g-spark` (radial bleu charte §6) + un halo `bg-cia-spark-mid/20 blur-3xl` plus large.
- Supprimer les deux confettis emoji `✨` et `⭐` flottants.
- Retirer le blob d'arrière-plan `bg-g-sun` (top-right gold) et `bg-g-dawn` (centre gold→blue) → ne garder que `bg-g-sea` (bleu) en bas-gauche + un second halo bleu doux pour équilibrer.
- Badge institution : remplacer l'icône `<Sparkles>` couleur `text-cia-gold-700` par `text-cia-spark-mid`.
- Titre hero : le `bg-g-shine` (gradient gold) sur `title_part2` → remplacer par `bg-g-spark` ou `bg-g-sea` clip-text (mots-clés en bleu Spark).
- Stat « 95% » : icône `text-cia-gold-700` + chiffre `text-cia-gold-600` → passer à `text-cia-spark-mid` + `text-cia-blue-700`.
- Bouton CTA `variant="gradient"` (g-dawn gold→blue) → `variant="spark"` (g-spark radial bleu, déjà défini dans `button.tsx`).

### 2. `src/pages/TestNiveau.tsx`
- Bouton « Commencer maintenant » (variant `gold`) → `variant="spark"` (bleu radial g-spark).
- Auditer la page pour autres usages `cia-gold` / `variant="gold"` / `variant="gradient"` purement décoratifs et les passer en bleu Spark.

### 3. Autres sections landing — supprimer le gold décoratif uniquement
Pour chaque fichier listé ci-dessous, je passe `text-cia-gold-*`, `bg-cia-gold-*`, `bg-g-shine`, `bg-g-sun`, `bg-g-dawn`, `bg-g-sunset` (quand purement décoratif et non sémantique gamification/passion) vers du bleu Spark équivalent :
- `CTASection.tsx`
- `HowItWorks.tsx`
- `CECRJourney.tsx`
- `Personas.tsx`
- `Pricing.tsx`
- `Testimonials.tsx` (icône Quote en gold → spark)
- `GamificationShowcase.tsx` — **exception** : c'est une vitrine de gamification, on garde la « Ligue Or » en gold (sémantique).
- `Header.tsx` / footer si gold décoratif présent

### 4. Page Inscription / Connexion
- `AuthShell.tsx`, `AuthTabs.tsx`, `PasswordStrength.tsx` : remplacer toute couleur gold décorative par bleu Spark. `PasswordStrength` garde les couleurs sémantiques (destructive / success) mais ses paliers gold deviennent bleus.

### 5. Ce qui NE change PAS
- Gamification : `LeagueBadge`, `LeagueView`, `Achievements`, `XPBurst`, `StreakFlame`, `StreakMilestone`, `Classement`, `Profil`, `Abonnement`, parcours (`TrophyNode`, `ChestStars`, `XPChestNode`, `XPFlyIndicator`), `CoursePlayer`, `FlashcardStep`, `LevelUpCelebration`, `ComboBadge`, `RadialTimer`, `SpeedTest`, `DailyChallenge`, `Glossaire`, `NotFound`, admin/*.
- Tokens CSS et Tailwind (`--cia-gold-*`, `bg-g-shine`, etc.) ne sont **pas** supprimés — ils restent disponibles pour les écrans gamifiés.
- Variants `gold` et `gradient` du bouton restent dans `button.tsx` (utilisés ailleurs).

## Vérification
- Capture preview du Hero après modif → vérifier absence de jaune et présence du halo bleu derrière Spark.
- Capture page Inscription → vérifier absence de gold parasite.
- Capture page TestNiveau → vérifier le bouton en bleu Spark.
- Build implicite via la chaîne Lovable.
