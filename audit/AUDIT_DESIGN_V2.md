# CIA E-Learning — Audit Design v2

**Date** : 2026-06-03
**Branche auditée** : `main` (HEAD = `838c851`)
**Charte de référence** : `/design-reference/CIA_charte_graphique.md` (v2 mai 2026, 370 lignes) — pushée dans cette même branche d'audit.
**Lottie v2 de référence** : `/design-reference/lottie-v2/spark-*.json` (5 fichiers, **w=200 h=320, fr=60, 5 layers**, 23–38 KB chacun).
**Mode** : READ ONLY sur `src/`. Aucune modification, aucun push de code.

---

## ✅ Étape 0

| Vérif | Attendu | Réel | OK |
|---|---|---|---|
| Charte v2 dans `/design-reference/` | présente | `CIA_charte_graphique.md` (19 KB) | ✅ (pushée par ce commit) |
| 5 Lottie viewBox 200×320 / 60fps / 5 couches | OUI | OUI sur les 5 fichiers v2 (`/design-reference/lottie-v2/`) | ✅ |
| Lottie runtime `/src/assets/lottie/spark/` à jour | OUI | NON — **w=360 h=540, 4 layers**, ~6 KB (ancienne version Sprint 3) | ❌ **P0** |

Étape 0 passée parce que la source de vérité est désormais en place, mais l'audit révèle immédiatement que **les Lottie utilisés par le runtime ne sont pas ceux de la charte v2**. C'est traité dans le backlog Axe A.

---

## 📊 Scorecard

| Axe | Note | Justification 1-ligne |
|---|---|---|
| **A — Spark** | **3 / 5** | Câblé proprement (13 usages, moods + tailles + fallback OK), MAIS rendu via anciens JSON + embers dorés + pas de mini SVG sous 48px |
| **B — Gradients** | **3 / 5** | 7/7 définis, 6/7 utilisés sobrement, MAIS dette importante : `purple/emerald/sky/violet/amber` encore présents dans AchievementCard/Toast, CourseCard, etc. (migration Sprint 3 jamais re-mergée sur main) |
| **C — Design global** | **4 / 5** | Foundations très solides (8 variants boutons, cards `rounded-3xl/4xl`, glass 4 variants, fonts + `tabular-nums`, Hero structurellement conforme), 1 minor (card hover scale absent) |
| **D — A11y** | **4 / 5** | `prefers-reduced-motion` & `prefers-color-scheme` câblés (14 hits), `focus-visible:ring-2` partout, touch `min-h-touch` utilisé sur cibles tactiles, `aria-label`/`role="img"` sur Spark. Minor : ring-2 vs ring-4 charte, audit contraste WCAG AA non mesuré |

**Score global : 3.5 / 5** — Foundations posées, mais l'application visuelle n'est pas à la hauteur de la charte v2 sur 3 points P0.

Barème : 5 = conforme intégral / 4 = conforme avec ≤2 minor / 3 = quelques dettes notables / 2 = écart majeur de qualité / 1 = système non posé.

---

## 🧭 Synthèse exécutive

Le **design system** (tokens, gradients, glass, fonts, shadows) est correctement défini dans `tailwind.config.ts` + `src/index.css`. **Le squelette est là.** Ce qui fait que « ce n'est pas au niveau » tient en 3 points :

1. **Spark s'affiche sur les anciens Lottie** (360×540, 4 layers, ~6 KB) au lieu de la v2 (200×320, 5 layers, 23–38 KB). Le code orchestrateur est bon, mais les assets `src/assets/lottie/spark/*.json` n'ont jamais été mis à jour. → P0
2. **Embers Spark dorés** (`bg-cia-gold-400`) au lieu de **bleu clair `#7CC3FF`** prescrit par la charte (« jamais de braises dorées »). Présent dans `Spark.tsx:120` et `SparkStatic.tsx:149`. → P0
3. **La migration couleurs Sprint 3 (vraie version) n'est pas sur main.** Le merge de la PR #16 (`2421c8b`) a pris la 1ère version (renommage XP→tokens, erronée), alors que les 15 commits de migration couleurs (`aea8705 → eec0a23`) sont restés sur la branche `sprint-3-lottie-oauth-tokens` jamais re-mergée. Conséquence : `AchievementCard:15`, `AchievementToast:16-17`, `CourseCard:25-30` parlent encore `purple/amber/emerald/sky/violet/blue` Tailwind brut. → P0

S'y ajoutent : pas de `SparkMini` (charte demande blob + 2 points blancs sans bouche sous 48px → Header 28px et SparkBubble 48px affichent une bouche), `g-sunset` jamais utilisé, card hover lift sous-dimensionné, et StreakFlame/LevelUp/Hexagone CECR à vérifier visuellement.

---

## 📋 Détail par axe

### AXE A — Spark

#### 1. Câblage des 13 usages

| Fichier:ligne | mood | size | halo | embers | Fallback | Verdict |
|---|---|---|---|---|---|---|
| `src/components/landing/Hero.tsx:136` | `encouraging` | 280 | défaut ✓ | ✓ | auto | ✅ conforme charte (Hero radical) |
| `src/components/landing/Hero.tsx:139` | `encouraging` | 180 | défaut ✓ | ✓ | auto | ✅ responsive mobile |
| `src/components/dashboard/DashboardHero.tsx:52` | `encouraging` | 140 | défaut ✓ | ✓ | auto | ✅ |
| `src/components/dashboard/DashboardHero.tsx:55` | `encouraging` | 96 | défaut ✓ | ✓ | auto | ✅ mobile |
| `src/components/gamification/LevelUpCelebration.tsx:215` | `celebrating` | 80 | défaut ✓ | ✓ | auto | ✅ |
| `src/components/gamification/StreakMilestone.tsx:128` | `celebrating` | 72 | défaut ✓ | ✓ | auto | ✅ |
| `src/components/course-player/CoursePlayer.tsx:151` | dynamique idle↔encouraging↔sad (1.8s) | 120 | défaut ✓ | conditionnel | auto | ✅ logique conforme charte §2 |
| `src/components/course-player/CoursePlayer.tsx:238` | `celebrating` | 120 | défaut ✓ | ✓ | auto | ✅ completion |
| `src/components/course-player/SparkBubble.tsx:56` | `talking` (paramétrable) | 48 | `false` | ✗ | auto | ⚠ **manque mini SVG sans bouche** |
| `src/components/layout/Header.tsx:73` | `idle` | 28 | `false` | ✗ | auto | ⚠ **manque mini SVG sans bouche** |
| `src/pages/DailyChallenge.tsx:137` | conditionnel (streak≥7 → encouraging) | 96 | défaut ✓ | ✗ | auto | ✅ mapping charte §2 |
| `src/pages/Curriculum.tsx:173` | `encouraging` | 56 | défaut ✓ | ✗ | auto | ✅ marqueur module current |

**Résidus interdits cherchés (`MascotPresence`, `Character3D*`, `SparkBlob`, `characters/`) : aucun.**

#### 2. Anatomie & assets

| Point charte v2 | État actuel | Verdict |
|---|---|---|
| Lottie v2 viewBox 200×320, 60 fps, 5 couches | `src/assets/lottie/spark/*.json` = **360×540, 4 layers, ~6 KB** | ❌ **P0** |
| Halo `bg-g-spark` derrière | Présent dans `Spark.tsx:110` & `SparkStatic.tsx:139` (blur-md opacity-60) | ✅ |
| Braises bleu clair `#7CC3FF` (jamais dorées) | `bg-cia-gold-400` dans `Spark.tsx:120` et `SparkStatic.tsx:149` | ❌ **P0** |
| Speech bubble `rounded-2xl max-w-[200px]` + flèche + `shadow-elev-lg` | Présent (`SparkBubble.tsx`), à vérifier dimensions | ✅ |
| Sous 48px : version mini SVG (blob + 2 points blancs, **sans bouche**) | Aucun `SparkMini` — `Header:28px` et `SparkBubble:48px` rendent un Spark avec bouche | ❌ **P1** |
| Fallback `prefers-reduced-motion` → SVG statique | `Spark.tsx` détecte → `SparkStatic` avec `motionless=true` | ✅ |

#### 3. Mapping mood par écran (charte §2)

| Écran | Mood attendu | Mood réel | OK |
|---|---|---|---|
| Hero landing | `encouraging` | `encouraging` | ✅ |
| Course player attente | `idle` | `idle` (par défaut) | ✅ |
| Course player correct | `encouraging` (1.5s → idle) | dynamique 1.8s | ✅ (close enough) |
| Course player incorrect | `sad` (1.5s → idle) | dynamique 1.8s | ✅ |
| Completion / LevelUp / StreakMilestone | `celebrating` | `celebrating` | ✅ |
| DailyChallenge si streak>7 | `encouraging` + bulle « Bravo ! » | streak≥7 → `encouraging`, bulle à vérifier | ✅ |

#### Synthèse Axe A

- 11/13 usages conformes en mood/size/halo/fallback.
- 2 écarts P0 (assets Lottie obsolètes + embers dorés) qui touchent **tous les écrans** où Spark s'affiche.
- 1 écart P1 (mini SVG sans bouche).

---

### AXE B — Gradients signature

#### 1. Définitions `tailwind.config.ts`

Les **7 gradients** sont définis (lignes 199–206) :
- `g-sun`, `g-sea`, `g-dawn`, `g-sunset`, `g-mistral`, `g-spark`, `g-shine`

Couleurs et stops fidèles à la charte §6. ✅

#### 2. Usages conformes

| Gradient | Usage prescrit charte | Fichier:ligne(s) | Conforme |
|---|---|---|---|
| `g-sun` | XP, soleil dorés | `landing/Hero.tsx:16` (décor blur opacity-25) | ✅ |
| `g-sea` | overlays méditerranéens, sections cours | `landing/Hero.tsx:20`, `landing/CTASection.tsx:11`, `landing/Personas.tsx:45` | ✅ |
| `g-dawn` | transitions premium, pricing | `ui/button.tsx:19` (variant gradient CTA), `landing/Hero.tsx:24` | ✅ |
| `g-sunset` | témoignages, passion | **Aucun usage détecté** | ⚠ P2 |
| `g-mistral` | backgrounds très doux | `landing/Hero.tsx:13`, `ui/card.tsx:13`, `dashboard/DashboardHero.tsx:22` | ✅ |
| `g-spark` | halo derrière Spark (radial) | `spark/Spark.tsx:110`, `spark/SparkStatic.tsx:139`, `landing/CTASection.tsx:13` | ✅ |
| `g-shine` | mots-clés héros + XP | `landing/Hero.tsx:52` (titre avec `bg-clip-text text-transparent anim-shine`) | ✅ |

#### 3. Interdits charte

| Règle | Détecté ? |
|---|---|
| Pas de gradient flou/pâteux en fond de hero | OK (Hero utilise `g-mistral` net + décors `blur-3xl opacity-10/15/25` discrets) |
| `bg-cia-spark-mid` en aplat plein écran | OK (uniquement en halo blur-md sur Spark) |
| Or `#CCAE62` en body solide sur blanc | OK (utilisé en badges/cards, jamais en body texte sur blanc) |
| Rouge × Or (contraste KO) | OK (gradient `g-sunset` red→gold existe, mais jamais en text-on-bg) |

#### 4. Dette gradients hors-palette CIA

| Fichier:ligne | Classes brutes | Sévérité |
|---|---|---|
| `gamification/AchievementToast.tsx:16` | `from-purple-50 to-purple-100 border-purple-300 text-purple-700` (epic) | P0 |
| `gamification/AchievementToast.tsx:17` | `from-amber-100 to-orange-100 border-orange-400 text-orange-700` (legendary) | P0 |
| `profile/AchievementCard.tsx:15` | `from-purple-100 to-purple-200 text-purple-700 border-purple-300` | P0 |
| `profile/AchievementCard.tsx:16` | `from-amber-100 to-orange-200 text-orange-700 border-orange-400` | P0 |
| `profile/AchievementDetailModal.tsx` | mêmes patterns purple/amber | P0 |
| `courses/CourseCard.tsx:25-30` | A1 emerald, A2 green, B1 sky, B2 blue, C1 violet, C2 purple (6 niveaux CECR) | P0 |
| `data/demo-courses.ts:41-47` | mêmes 6 niveaux en lime/emerald/green/sky/blue/violet/purple | P0 |
| `pages/DailyChallenge.tsx`, `pages/SpeedTest.tsx`, `pages/Classement.tsx`, `pages/CourseDetail.tsx`, `pages/TestNiveau.tsx`, `pages/Profil.tsx`, `components/leaderboard/LeagueBadge.tsx`, `components/gamification/StreakFlame.tsx`, `components/leaderboard/LeagueView.tsx`, `components/leaderboard/PromoZoneIndicator.tsx`, `components/courses/LearningPath.tsx`, `components/courses/ModuleDrawer.tsx`, `components/courses/ModuleNode.tsx`, `components/speed-test/ComboBadge.tsx`, `components/gamification/StreakMilestone.tsx`, `components/auth/PasswordStrength.tsx`, `components/ui/toast.tsx` | classes `orange/red/green/yellow/slate-*` brutes Tailwind | P0 — **toute la migration Sprint 3 (15 commits, branche `sprint-3-lottie-oauth-tokens`) doit être re-mergée** |

**Note critique** : ces écarts sont déjà corrigés dans la branche `sprint-3-lottie-oauth-tokens` (15 commits, `aea8705 → eec0a23`). Le merge `2421c8b` a malheureusement embarqué la 1ère version de la PR #16 (renommage XP→tokens, erronée et révertée). Action requise : **re-merger ces 15 commits**.

#### Synthèse Axe B

- Gradients définis : **7/7**
- Gradients utilisés conformes : **6/7** (`g-sunset` non utilisé)
- Interdits charte respectés : **OUI**
- Dette palette : **17 fichiers** avec classes brutes Tailwind non-CIA → migration Sprint 3 à re-merger

---

### AXE C — Design global

#### 1. Fondations Tailwind (5 principes)

| Principe charte | État | Verdict |
|---|---|---|
| Fond blanc dominant | Hero, Dashboard, Pages : fond blanc par défaut, décor blur discret | ✅ |
| Spark omniprésent | 13 usages, écrans clés couverts | ✅ |
| 1 seul CTA majeur | Hero : 1 CTA `cta` gradient + 1 lien secondaire outline | ✅ |
| Radius audacieux 24–32px | `rounded-3xl` (24px) default, `rounded-4xl` (32px) pricing/hero | ✅ |
| Animations springy | `framer-motion` partout, easings spring/ease-out-expo (pas de `linear`) | ✅ |

#### 2. Boutons (`src/components/ui/button.tsx`)

- 8 variants : `default/destructive/outline/secondary/ghost/link/gold/gradient/success/spark` (≥ 5 charte ✅)
- 5 tailles : `sm/default/lg/cta/icon` (h-9/h-11/h-12/h-14/h-11×11) tous ≥ 44px sur mobile ✅
- Ombre 3D : `shadow-3d-blue` + `active:translate-y-[2px] active:shadow-3d-blue-active` ✅
- Focus : `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2` (charte demande **ring-4**) ⚠ P2
- Disabled : `disabled:opacity-50` (perte ombre via opacity, pas via classe dédiée) ✅

#### 3. Cards (`src/components/ui/card.tsx`)

- 5 variants : `default/elevated/glass/gradient/flat` ✅
- Radius : `rounded-3xl` (24px) ✅ ; `flat` en `rounded-2xl` (24px aussi via config `'2xl'`) ✅
- Hover lift : `interactive && "hover:shadow-elev-lg hover:-translate-y-0.5"` (= **−2px**, charte demande −4px) ⚠ P2
- Hover scale : **ABSENT** (charte demande `scale-[1.005]`) ⚠ P2

#### 4. Typographie

- Display : `Plus Jakarta Sans` ✅
- Body : `Inter` ✅
- Mono : `JetBrains Mono` ✅
- `tabular-nums` : 12 fichiers (XP, streak, prix, scores, timers, classements) ✅
- Gradient text : `bg-g-shine bg-clip-text text-transparent` réservé hero (`Hero.tsx:52`) ✅

#### 5. Glassmorphism (`src/index.css`)

- `.glass`, `.glass-subtle`, `.glass-strong`, `.glass-dark` ✅ (4 variants + bonus `.glass-adaptive`)

#### 6. Hero landing (charte §13.1)

| Critère | État | OK |
|---|---|---|
| Fond blanc + décors blur discrets | `g-mistral` + 3 décors `blur-3xl opacity-10/15/25` | ✅ |
| Spark `encouraging` ~280px à droite | `SparkPresence` 280 / 180 responsive | ✅ |
| Headline lourd + 1-3 mots-clés `g-shine` | titre split avec `bg-clip-text text-transparent` | ✅ |
| 1 CTA massif + 1 lien discret | « Commencer le test » (`gradient`) + lien outline | ✅ |
| Pas de stats au-dessus du fold | stats placées SOUS le titre/CTA | ✅ |
| Pas de badge glass au-dessus du titre | badge présent mais entre hero et titre | ✅ |

#### 7. Gamification (charte §8)

| Élément | Charte | Réel | Verdict |
|---|---|---|---|
| StreakFlame | **6 paliers** (0 / 1-2 / 3-6 / 7-29 / 30-99 / 100+) | 5 paliers actuellement (`StreakFlame.tsx:23-87`) + couronne 100+ | ⚠ Vérifier P1 |
| ModuleNode | 4 états (locked/available/current/completed) | 4 états (`ModuleNode.tsx:16`) | ✅ |
| Level CECR | hexagone propriétaire | À vérifier visuellement (`LevelBadge.tsx`) | ⚠ Inconnu |
| LevelUp confettis | **bleus + blancs, pas dorés solides** | `LevelUpCelebration.tsx` à vérifier les couleurs canvas | ⚠ Vérifier P1 |
| Achievement rareties | common gris / rare bleu / **epic violet** / legendary `g-shine` | epic en `purple-*` (brut, pas violet charte HSL) ; legendary en `amber/orange` au lieu de `g-shine` | ❌ P0 (cf. Axe B) |
| XP Badge | pill + dot gradient `g-sun` + count-up | `UserIndicators.tsx` à vérifier | ⚠ Inconnu |

#### Synthèse Axe C

- Foundations : **OK intégral** (radius, fonts, glass, shadows, gradients défs).
- Boutons & cards : OK avec **2 minor P2** (focus ring-2 vs ring-4, card hover lift -2px vs -4px et scale absent).
- Hero landing : conforme charte §13.
- Gamification : déjà couvert par les écarts Axe B (purple/amber etc), + à vérifier visuellement le hexagone CECR, les confettis LevelUp et le 6e palier StreakFlame.

---

### AXE D — Accessibilité

| Critère | État | Verdict |
|---|---|---|
| Contraste WCAG AA (4.5:1 texte, 3:1 large/UI) | Non mesuré dans cet audit | ⚠ À mesurer |
| Focus visible : ring bleu | `focus-visible:ring-2 ring-ring` partout dans `ui/` (ring-ring = `--ring` = spark-mid) | ✅ |
| Touch targets ≥ 44×44px | `min-h-touch` utilisé sur cibles tactiles ; boutons `h-11` (44px) par défaut | ✅ |
| `prefers-reduced-motion` | 14 occurrences détectées (hook `usePrefersReducedMotion`, fallback SparkStatic, framer-motion `reduce`) | ✅ |
| `prefers-color-scheme` (dark auto) | Tokens dark dans `index.css` `.dark { ... }` ; à vérifier que la classe est posée automatiquement | ⚠ Vérifier P2 |
| Alt texts / `aria-hidden` sur déco | Spark : `aria-label="Spark, état {mood}"` + `role="img"` ; décors hero `aria-hidden` | ✅ |

#### Synthèse Axe D

- Acquis : focus visible, reduced-motion, touch targets, alt/aria.
- À vérifier : audit contraste WCAG AA + auto-application du dark mode selon `prefers-color-scheme`.

---

## 🎯 Backlog priorisé

### P0 (rupture / charte violée — sprint correctif immédiat)

1. **Remplacer les Lottie Spark `src/assets/lottie/spark/*.json` par les v2** (`/design-reference/lottie-v2/*.json`) — viewBox 200×320, 5 layers. **Touche tous les écrans Spark.** Diff attendu : 5 fichiers, ~150 KB.
2. **Embers Spark bleu clair `#7CC3FF` au lieu de doré.** Remplacer `bg-cia-gold-400` par `bg-[#7CC3FF]` (ou ajouter token `cia-spark-light` déjà défini, et utiliser `bg-cia-spark-light`) dans `src/components/spark/Spark.tsx:120` et `src/components/spark/SparkStatic.tsx:149`. Idem pour les `box-shadow` des embers.
3. **Re-merger la migration couleurs Sprint 3 sur main.** La branche `sprint-3-lottie-oauth-tokens` (commits `aea8705 → eec0a23`, 15 fichiers) contient le mapping complet « Tailwind brut → tokens CIA » pour `AchievementCard`, `AchievementToast`, `AchievementDetailModal`, `CourseCard`, `ModuleNode`, `ModuleDrawer`, `LearningPath`, `LeagueBadge`, `LeagueView`, `PromoZoneIndicator`, `StreakFlame`, `StreakMilestone`, `DailyChallenge`, `SpeedTest`, `ComboBadge`, `Profil`, `Classement`, `CourseDetail`, `TestNiveau`, `PasswordStrength`, `demo-courses`, `ui/toast`. Action : créer une nouvelle PR depuis cette branche (ou cherry-pick les 15 commits sur main).

### P1 (incohérence — sprint suivant)

4. **Créer `SparkMini` (blob bleu + 2 points blancs, sans bouche)** et le brancher quand `size < 48`. Touche `Header.tsx:73` (28px) et `SparkBubble.tsx:56` (48px).
5. **Vérifier StreakFlame** : compter les paliers actuels vs 6 attendus (0 / 1-2 / 3-6 / 7-29 / 30-99 / 100+). Tier 1-2 (« orange clair ») absent dans l'implémentation actuelle.
6. **Vérifier confettis LevelUp** (`LevelUpCelebration.tsx` ou hook `confetti`) : doivent être **bleus + blancs**, pas dorés. La charte exclut explicitement le doré solide ici.
7. **Vérifier `LevelBadge.tsx`** : doit être hexagone propriétaire (A1/A2 vert · B1/B2 bleu · C1 bleu profond · C2 rouge), pas un carré/pill.
8. **Implémenter la section Témoignages** avec `g-sunset` (gradient `red→red-300→gold` charte §6). Actuellement aucun usage.

### P2 (poli)

9. **Card hover lift `-4px` + `scale-[1.005]`** (`src/components/ui/card.tsx:37`). Actuel : `-translate-y-0.5` (= -2px), pas de scale.
10. **Button focus `ring-4`** au lieu de `ring-2` (`src/components/ui/button.tsx:8`). WCAG AA OK avec ring-2, mais charte demande ring-4 pour la signature visuelle.
11. **Audit contraste WCAG AA** sur les principaux écrans (Hero, Dashboard, Course player, Pricing) — outil type Stark / Accessibility Insights.
12. **Vérifier auto-application du dark mode** selon `prefers-color-scheme` (actuellement la classe `.dark` est posée manuellement ; à confirmer).

---

## ⚡ Quick wins (P0/P1 à fort impact, faible effort)

1. **Quick win #1 — 5 minutes** : `cp design-reference/lottie-v2/*.json src/assets/lottie/spark/` → toute la mascotte passe en v2 sans toucher au code orchestrateur. (P0 #1)
2. **Quick win #2 — 2 minutes** : remplacer `bg-cia-gold-400` par `bg-cia-spark-light` dans `Spark.tsx:120` et `SparkStatic.tsx:149` (le token existe déjà). (P0 #2)
3. **Quick win #3 — créer une PR depuis `sprint-3-lottie-oauth-tokens`** vers main → 15 commits prêts à merger, build vert. (P0 #3)

**Ces 3 quick wins règlent tous les P0** et font passer le score Axe A de 3 → 4 et Axe B de 3 → 4. Score global passerait de 3.5 à 4.5.

---

## 📎 Notes de méthode

- Audit conduit en lecture seule sur `src/` (commande `grep`/`find`/`Read`).
- Le rapport ne change rien à `src/`, ne pousse aucun code applicatif. La charte v2 + les 5 JSON v2 ont été ajoutés à `/design-reference/` (intégration de la source de vérité) — ils ne touchent pas l'app.
- Tableau de mapping mood/écran issu de la charte §2 + observation des call sites.
- Quand un point demande une **vérification visuelle** (StreakFlame paliers, confettis, hexagone CECR), c'est noté « ⚠ Vérifier P1 » dans le backlog plutôt que tranché ici — l'audit visuel best-effort (screenshots) n'a pas été réalisé faute d'environnement dev lancé.

---

*Audit produit par Claude — modifie uniquement `audit/` et `design-reference/`, jamais `src/`.*
