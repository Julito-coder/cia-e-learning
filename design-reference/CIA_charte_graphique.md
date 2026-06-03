# Charte graphique — CIA e-learning (v2)

> **Centre International d'Antibes · application e-learning d'apprentissage du français (A1→C2, CECR).**
> Direction artistique : moteur d'engagement ludique × premium institutionnel × identité Côte d'Azur.
> Stack cible : React 18 + TypeScript + Tailwind CSS + shadcn/ui + framer-motion + three.js (R3F).
>
> Ce document est la source de vérité pour toute génération d'UI. Respecter les tokens et règles ci-dessous au pixel.

---

## 1. Manifeste & principes

**Manifeste.** Nous sommes l'école d'Antibes qui rentre dans la poche. On apprend en s'amusant, pas en s'infantilisant. On gamifie, sans tomber dans le néon. On est premium, et on assume.

**5 principes de design (non négociables) :**
1. **Fond blanc dominant.** Pas de gradient pâteux en arrière-plan. Le contenu et le geste priment.
2. **Spark omniprésent.** La mascotte (flamme bleue) est le héros silencieux de chaque écran clé.
3. **Un seul CTA majeur par écran.** Une action principale large ; le reste en lien secondaire discret. Jamais 5 boutons concurrents.
4. **Border-radius audacieux.** 24–32px sur cards et hero. Jamais 4–8px timides.
5. **Animations springy partout.** Pop, bounce, spring. Jamais de `linear`. `prefers-reduced-motion` respecté.

**À NE PAS FAIRE :** gradients flous en fond de hero · mascotte humaine réaliste · stats au-dessus du fold de la landing · badge marketing en glass au-dessus du titre hero · multi-CTA concurrents · emojis dans la marque institutionnelle (OK sur modules pédago fun) · palette néon/gaming · radius timides · tilt 3D sur éléments statiques.

---

## 2. Mascotte — Spark

Spark est l'élément identitaire #1. **C'est une flamme bleue personnifiée** (pas un blob rond).

**Anatomie :**
- Forme **flamme élancée et pointue** : base resserrée (taper), corps allongé, 3 langues triangulaires (centrale la plus haute).
- **Multi-couches** : aura wispy floue → corps externe → flamme mid → cœur lumineux + un **jet central** blanc-bleu (le « cœur » brillant).
- **Dégradé vertical fondu (sans bandes)** : navy profond au pied → bleu CIA → bleu électrique au cœur → blanc-chaud aux pointes.
- **Visage minimal et centré** sur le corps : deux yeux (ellipse blanche + pupille noire + petit reflet blanc) + une bouche. **Rien d'autre** — pas de joues roses, pas de sourcils, pas de lèvres colorées.
- **Halo bleu pulsant** derrière (2 cercles flous superposés, bleu électrique).
- **Braises bleu clair** (`#7CC3FF`) qui montent en boucle. Jamais de braises dorées.
- Production : rendu **Three.js R3F** (matériau verre/jelly, transmission + clearcoat). En statique : SVG multi-couches.

**Gradient de la flamme (stops, bas→haut) :**
`#020A14 · #04162A · #062338 · #082F4D · #0A3D62 · #0E4F80 · #1369A6 · #1880D0 · #1E90FF · #5FB3FF · #A8D7FF · #DBEEFF · #FFFFFF`

**5 états émotionnels (moods) :**
| Mood | Bouche | Yeux | Mouvement |
|---|---|---|---|
| `idle` | petit sourire | ronds | respiration (scale doux) |
| `talking` | O | ronds | pulse rapide |
| `encouraging` | grand sourire | ronds | rebond bondissant |
| `celebrating` | bouche ouverte | arqués (^ ^) | rotation + scale + halo max |
| `sad` | frown | ronds (pupille basse) | descend + se ratatine |

**Quand utiliser quel mood :**
- Hero landing → `encouraging` · Course player en attente → `idle`
- Réponse correcte → `encouraging` (1.5s puis `idle`) · Réponse incorrecte → `sad` (1.5s puis `idle`)
- CompletionScreen / LevelUp / StreakMilestone → `celebrating`
- DailyChallenge si streak >7 → `encouraging` + bulle « Bravo ! »

**Tailles canoniques :** 40px (header/chat) · 80px (sidebar player) · 120px (completion) · 200–280px (hero). À 16–48px : version mini SVG simplifiée (blob + 2 points blancs, **sans bouche**).

**Speech bubble :** `rounded-2xl`, `max-w-[200px]`, fond blanc, petite flèche pointer, ombre `elev-lg`.

**Animations Lottie** disponibles : `spark-idle / talking / encouraging / celebrating / sad .json` (viewBox 200×320, 60fps, loop).

---

## 3. Couleurs

### Couleurs primaires
| Nom | Hex | Usage |
|---|---|---|
| CIA Blue 500 | `#0A3D62` | couleur de marque, CTA primary, texte fort |
| CIA Gold 500 | `#CCAE62` | **uniquement dans les gradients** (sun/dawn/sunset/shine). Jamais en aplat solide. |
| CIA Red 500 | `#B71540` | passion, destructive, accents rares |
| Spark Light | `#5FB3FF` | highlights, accents sur fond sombre |
| Spark Mid | `#1E90FF` | mascotte, focus ring, halos, progress shine — **jamais en aplat plein écran** |
| Spark Deep | `#0A3D62` | corps de flamme |

> **Règle d'or sur l'or :** le doré (`#CCAE62`) ne s'utilise QUE via les gradients. En texte/aplat solide, il fait « cheap » → utiliser bleu Spark ou un gradient `g-shine`. Exception sémantique : contexte XP quand exprimé en gradient.

### Échelles complètes (50→900)

**CIA Blue** — `50:#E6EEF4 100:#C1D4E3 200:#94B4CC 300:#6794B5 400:#3A749E 500:#0A3D62 600:#093454 700:#082B46 800:#062338 900:#041A2A`

**CIA Gold** — `50:#FAF5E6 100:#F3E7BD 200:#EAD68F 300:#E0C460 400:#D6B73F 500:#CCAE62 600:#A98B45 700:#7F6932 800:#564720 900:#2C240E`

**CIA Red** — `50:#FAE7EB 100:#F4BFC9 200:#EC93A2 300:#E3667B 400:#DB405D 500:#B71540 600:#931034 700:#6E0C26 800:#4A0719 900:#26030D`

**Ink (neutres)** — `50:#F7F8FA 100:#EEF0F4 200:#D9DDE5 300:#B3BAC9 400:#7D8497 500:#525A6E 600:#3A4154 700:#272D3D 800:#181C28 900:#0C0F18`

### Couleurs sémantiques & gamification
| Rôle | Hex |
|---|---|
| success | `#1FAE5C` |
| warning | `#F59E0B` |
| error | `#DC2A48` |
| info | `#1E90FF` |
| xp | `#CCAE62` (en gradient) |
| streak (flamme) | `#FF6B2C` |
| gems | `#1E90FF` |
| bonus | `#7C5BFF` |

### Surfaces — mode clair / sombre
| Variable | Clair | Sombre |
|---|---|---|
| `--background` | `#FFFFFF` | `#0C0F18` |
| `--surface` | `#F7F8FA` | `#181C28` |
| `--surface-elevated` | `#FFFFFF` | `#272D3D` |
| `--text-primary` | `#0C0F18` | `#F7F8FA` |
| `--text-muted` | `#525A6E` | `#B3BAC9` |
| `--border` | `#EEF0F4` | `#272D3D` |
| `--ring` (focus) | `#1E90FF` | `#5FB3FF` |

### Combinaisons interdites
- Rouge CIA sur or CIA (contraste insuffisant).
- Bleu électrique `#1E90FF` en aplat plein écran (réservé mascotte/focus/halo → passer par gradient).
- Or CIA en texte body sur blanc (pas WCAG AA → gold-700 mini, ou gradient).
- Néon / saturations > 90 % (style gaming).

---

## 4. Typographie

- **Display / headings :** `Plus Jakarta Sans` (400–800).
- **Body / UI :** `Inter` (400–700).
- **Chiffres / labels techniques :** `JetBrains Mono`. **`tabular-nums` obligatoire** sur XP, streak, prix, scores, timers, classements.

| Niveau | Taille | Weight | Tracking / LH |
|---|---|---|---|
| Display / Hero | `text-7xl` (≈72px) | 800 | -0.02em · 0.95 |
| H1 page | `text-5xl` | 800 | -0.015em · 1.05 |
| H2 section | `text-4xl` | 700 | -0.01em · 1.1 |
| H3 card | `text-xl` | 700 | 0 · 1.25 |
| Body L | `text-lg` | 400 | 1.6 |
| Body | `text-base` | 400 | 1.55 |
| Caption | `text-sm` | 400 | 1.5 |
| Micro label | `11px` mono UPPERCASE | 500 | 0.18em |

**Règles :** gradient text (`bg-g-shine bg-clip-text text-transparent`) réservé aux 1–3 mots-clés du hero. UPPERCASE uniquement micro-labels/eyebrows (tracking ≥ 0.18em). Jamais de gradient ou d'uppercase sur du body.

---

## 5. Espacement · radius · shadows

**Spacing scale (px) :** 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96. (micro 4–12 · standard 16–24 · macro 32+).

**Border-radius :** `sm 6px · md 10px · lg 16px · xl 20px · 2xl 24px · 3xl 24px (SIGNATURE — hero & cards principales) · 4xl 32px (pricing) · 5xl 40px · full 9999px`.

**Shadows :**
- Standard : `sm / md / lg / xl`.
- **3D button (signature)** : ombre portée pleine de 4px + l'élément s'écrase de 2px sur `active` (`active:translate-y-[2px]`).
  - `3d-blue` : `0 4px 0 0 #082B46, 0 6px 14px -2px rgba(10,61,98,.35)`
  - `3d-gold` : `0 4px 0 0 #A98B45, 0 6px 14px -2px rgba(204,174,98,.4)`
  - `3d-success` : `0 4px 0 0 #178C49, …` · `3d-red` : `0 4px 0 0 #931034, …`
- `elev-lg` / `elev-xl` : cards premium.
- `glow-blue` : `0 0 0 6px rgba(30,144,255,.18), 0 0 40px 0 rgba(30,144,255,.55)` (Spark, module current).
- `glow-gold` : équivalent doré (héros dorés uniquement).

**Glassmorphism (4 variants) :**
- `.glass` — `bg-white/55 backdrop-blur-xl saturate-150 border-white/70`
- `.glass-subtle` — `bg-white/75 backdrop-blur-md`
- `.glass-strong` — `bg-white/35 backdrop-blur-2xl saturate-160`
- `.glass-dark` — `bg-cia-blue-500/55 text-white backdrop-blur-xl border-white/10`

---

## 6. Gradients signature (Côte d'Azur)

| Nom | Définition | Usage |
|---|---|---|
| `g-sun` | `linear-gradient(135deg,#FFE9A8,#E0C460 45%,#CCAE62)` | XP, soleil, héros dorés |
| `g-sea` | `linear-gradient(180deg,#1E90FF,#0A3D62)` | overlays méditerranéens, sections cours |
| `g-dawn` | `linear-gradient(135deg,#CCAE62,#5FB3FF 60%,#0A3D62)` | transitions premium, pricing |
| `g-sunset` | `linear-gradient(135deg,#B71540,#E3667B 45%,#CCAE62)` | témoignages, passion |
| `g-mistral` | `linear-gradient(180deg,#FFFFFF,#E6EEF4)` | backgrounds très doux |
| `g-spark` | `radial-gradient(circle at 50% 30%,#FFFFFF,#5FB3FF 30%,#1E90FF 60%,#0A3D62)` | halo derrière Spark |
| `g-shine` | `linear-gradient(90deg,#CCAE62,#FFE9A8 50%,#CCAE62)` | mots-clés héros (bg-clip-text), XP |

---

## 7. Composants UI

### Bouton
- **5 variants :** `primary` (bleu, 3d-blue) · `secondary` (gradient bleu spark, 3d-blue) · `ghost` (gris, sans ombre) · `outline` (bordure bleue) · `destructive` (rouge, 3d-red). Bonus : `success`, `link`.
- **5 tailles :** `sm` (h-9) · `default` (h-11) · `lg` (h-13/52px) · `cta` (h-16/64px, rounded-3xl) · `icon` (h-11 w-11).
- **Signature :** ombre 3D + `active:translate-y-[2px]` + `focus-visible:ring-4 ring-cia-spark-mid/30`.
- **Touch target ≥ 44px** sur mobile. Disabled perd l'ombre 3D.

### Card
- Variants : `default` (border ink-100) · `premium` (gradient g-dawn, elev-xl) · `glass` · `interactive` (hover border bleue + lift).
- **Radius 24px** (32px premium). Hover lift `-4px` + `scale 1.005` sur interactives.

### Badge
- Variants : `default` · `success` · `warning` · `streak` · `level` · `xp` · `premium` (gradient) · `new`. Pill `rounded-full h-6`, font-display bold.

### Input
- `rounded-2xl border-2`. Focus → `border-cia-spark-mid` + `shadow-glow-blue`. Erreur → `border-error-500` + fond `error-50`.

### Autres
- **Modal/Dialog :** centré, `rounded-4xl`, `shadow-elev-xl`, entrée springy, overlay `bg-ink-900/40 backdrop-blur-sm`.
- **Drawer :** mobile slide-up, desktop centré.
- **Tabs :** indicateur springy glissant (fond bleu sous l'onglet actif).
- **Progress bar :** `rounded-full`, remplissage gradient (`g-shine` pour XP) avec shine animé.
- **Toast :** variants `success / error / info / achievement` — icône carrée colorée + titre + corps, `rounded-2xl shadow-glass`.
- **Bottom nav mobile :** 5 onglets max, icône + label + indicateur actif (point bleu), fixe en bas, ≥44px.
- **Header desktop :** sticky top, `backdrop-blur`, h-16 (64px).

---

## 8. Gamification

- **XP Badge :** pill `rounded-full`, dot gradient `g-sun`, valeur en mono `tabular-nums`, count-up springy au gain.
- **Streak Flame — 6 paliers :** 0 gris · 1–2 orange clair · 3–6 orange vif · 7–29 rouge-orange · 30–99 rouge profond · 100+ blanc-chaud + couronne. Pulse selon palier.
- **Level badge CECR :** hexagone propriétaire. Couleurs progressives : A1/A2 vert · B1/B2 bleu · C1 bleu profond · C2 rouge.
- **Module Node :** bulle ronde, 4 états — `locked` (gris, cadenas) · `available` (blanc, ring bleu) · `current` (bleu, halo bleu + ring, pulse) · `completed` (vert, check).
- **Zigzag Path :** chemin SVG pointillé (`stroke-dasharray: 2 12`, `linecap round`) reliant les modules en zigzag gauche/droite.
- **XP Burst :** ~20 particules (sparkles/stars/dots/diamonds), trajectoires en arc + gravité.
- **Level-up celebration :** modal plein écran, confettis canvas (bleus + blancs, **pas dorés en solide**), halo bleu pulsant, count-up springy, Spark `celebrating` au centre.
- **Achievement unlock :** toast bottom-right, mini-burst selon rareté — common (gris) · rare (bleu) · epic (violet) · legendary (gradient g-shine).

---

## 9. Animations & micro-interactions

Tokens framer-motion :
- `springPop` — `scale .8→1, opacity 0→1`, spring stiffness 380 / damping 18 (entrée badges, modals).
- `floatY` — `y 0↔-8`, 4s easeInOut loop (déco, hero).
- `slideRotate` — `x 0↔-20, rotateX 0↔2°`, .35s easeOut (transitions de route).
- `hoverLift` — `y 0↔-4, scale 1↔1.01`, .25s (cards).
- `staggerContainer` / `staggerItem` — staggerChildren .06 ; enfant `y 8→0, opacity 0→1` spring.
- `pageTransition` — `rotateX 2°→0`, .4s easeOutExpo.
- **Tap feedback :** `scale .97 + translateY 2px` sur tous les boutons.
- **useTilt3D :** tilt pointer max 6–8°, perspective 1200 — **cards interactives clés uniquement**.
- **Curriculum path :** `pathLength 0→1` au scroll, 2.4s ease-out-expo.
- `prefers-reduced-motion` : toutes les animations désactivées, dégradation gracieuse.

---

## 10. Iconographie

- **Lucide React** en standard, stroke 2.2, taille 20/24. Pas d'autres librairies (Heroicons, FontAwesome…).
- **Emojis** autorisés uniquement sur modules pédagogiques fun (🇫🇷, 👋, 🎉, 💪) et texte casual user. **Jamais** dans la marque institutionnelle.

---

## 11. Layout & responsive

- Container `max-w-[1200px]` (1320px pour le doc charte). Padding 16px mobile / 32px tablet+.
- Grille 12 colonnes desktop, simplifications mobile.
- Breakpoints : `sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1536`.
- **Mobile-first.** Bottom nav fixe sur tous les écrans connectés. Header sticky h-16.

---

## 12. Accessibilité

- Contraste WCAG **AA** : 4.5:1 texte normal, 3:1 large/UI.
- Focus visible : ring bleu 2px (`#1E90FF` clair / `#5FB3FF` sombre) sur tout élément interactif.
- Touch targets ≥ 44×44px mobile.
- `prefers-reduced-motion` et `prefers-color-scheme` (dark auto) respectés.
- Alt texts sur images ; icônes décoratives `aria-hidden`.

---

## 13. Pages clés (références de layout)

1. **Hero landing radical** — fond blanc, Spark `encouraging` ~280px à droite, headline lourd à gauche (mot-clé en `g-shine`), 1 CTA bleu massif + 1 lien secondaire discret. Pas de stats au-dessus du fold.
2. **Curriculum zigzag** — modules alternés gauche/droite, chemin pointillé, Spark mini à côté du module `current`.
3. **Course player** — sidebar Spark à gauche (réactif au score : encouraging/sad), step central, progress.
4. **Daily Challenge** — compteur géant de streak, flamme dynamique, Spark + bulle contextuelle.
5. **LevelUpCelebration** — modal plein écran, confettis, Spark `celebrating`, count-up springy.
6. **Profil** — avatar, XP total, streak, grille d'achievements, niveau CECR, activité 7 jours.
7. **Pricing** — 3 plans en cards `4xl`, plan recommandé en `ring bleu spark` + `scale 1.04`.

---

## Annexe A — `tailwind.config.ts`

```ts
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        cia: {
          blue:  { 50:'#E6EEF4',100:'#C1D4E3',200:'#94B4CC',300:'#6794B5',400:'#3A749E',500:'#0A3D62',600:'#093454',700:'#082B46',800:'#062338',900:'#041A2A' },
          gold:  { 50:'#FAF5E6',100:'#F3E7BD',200:'#EAD68F',300:'#E0C460',400:'#D6B73F',500:'#CCAE62',600:'#A98B45',700:'#7F6932',800:'#564720',900:'#2C240E' },
          red:   { 50:'#FAE7EB',100:'#F4BFC9',200:'#EC93A2',300:'#E3667B',400:'#DB405D',500:'#B71540',600:'#931034',700:'#6E0C26',800:'#4A0719',900:'#26030D' },
          spark: { light:'#5FB3FF', mid:'#1E90FF', deep:'#0A3D62' },
        },
        ink:     { 50:'#F7F8FA',100:'#EEF0F4',200:'#D9DDE5',300:'#B3BAC9',400:'#7D8497',500:'#525A6E',600:'#3A4154',700:'#272D3D',800:'#181C28',900:'#0C0F18' },
        success: { 500:'#1FAE5C', 600:'#178C49', 700:'#106B37' },
        warning: { 500:'#F59E0B' },
        error:   { 500:'#DC2A48', 600:'#B71540' },
        info:    { 500:'#1E90FF' },
        xp:      { 500:'#CCAE62' },
        streak:  { 500:'#FF6B2C' },
        gems:    { 500:'#1E90FF' },
        bonus:   { 500:'#7C5BFF' },
      },
      borderRadius: { '4xl':'2rem', '5xl':'2.5rem' },
      boxShadow: {
        '3d-blue':    '0 4px 0 0 #082B46, 0 6px 14px -2px rgba(10,61,98,.35)',
        '3d-gold':    '0 4px 0 0 #A98B45, 0 6px 14px -2px rgba(204,174,98,.4)',
        '3d-success': '0 4px 0 0 #178C49, 0 6px 14px -2px rgba(31,174,92,.35)',
        '3d-red':     '0 4px 0 0 #931034, 0 6px 14px -2px rgba(183,21,64,.35)',
        'elev-lg':    '0 24px 60px -20px rgba(10,61,98,.25), 0 8px 20px -10px rgba(10,61,98,.1)',
        'elev-xl':    '0 40px 90px -30px rgba(10,61,98,.3), 0 16px 40px -15px rgba(10,61,98,.12)',
        'glow-blue':  '0 0 0 6px rgba(30,144,255,.18), 0 0 40px 0 rgba(30,144,255,.55)',
        'glow-gold':  '0 0 0 6px rgba(204,174,98,.18), 0 0 40px 0 rgba(204,174,98,.45)',
      },
      backgroundImage: {
        'g-sun':     'linear-gradient(135deg, #FFE9A8 0%, #E0C460 45%, #CCAE62 100%)',
        'g-sea':     'linear-gradient(180deg, #1E90FF 0%, #0A3D62 100%)',
        'g-dawn':    'linear-gradient(135deg, #CCAE62 0%, #5FB3FF 60%, #0A3D62 100%)',
        'g-sunset':  'linear-gradient(135deg, #B71540 0%, #E3667B 45%, #CCAE62 100%)',
        'g-mistral': 'linear-gradient(180deg, #FFFFFF 0%, #E6EEF4 100%)',
        'g-spark':   'radial-gradient(circle at 50% 30%, #FFFFFF 0%, #5FB3FF 30%, #1E90FF 60%, #0A3D62 100%)',
        'g-shine':   'linear-gradient(90deg, #CCAE62 0%, #FFE9A8 50%, #CCAE62 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
```

## Annexe B — `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --surface: 220 14% 97%;
    --surface-elevated: 0 0% 100%;
    --text-primary: 226 22% 8%;
    --text-muted: 224 14% 38%;
    --border: 220 14% 94%;
    --ring: 210 100% 56%;
  }
  .dark {
    --background: 226 22% 8%;
    --surface: 226 20% 13%;
    --surface-elevated: 225 18% 20%;
    --text-primary: 220 14% 97%;
    --text-muted: 224 17% 74%;
    --border: 225 18% 20%;
    --ring: 210 100% 70%;
  }
  body { background: hsl(var(--background)); color: hsl(var(--text-primary)); }
}

@layer components {
  .glass        { @apply bg-white/55 backdrop-blur-xl backdrop-saturate-150 border border-white/70; }
  .glass-subtle { @apply bg-white/75 backdrop-blur-md border border-white/60; }
  .glass-strong { @apply bg-white/35 backdrop-blur-2xl backdrop-saturate-150 border border-white/50; }
  .glass-dark   { @apply bg-cia-blue-500/55 text-white backdrop-blur-xl border border-white/10; }
  .btn3d        { @apply transition-all duration-100 active:translate-y-[2px]; }
}
```
