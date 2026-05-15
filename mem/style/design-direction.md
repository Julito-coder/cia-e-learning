---
name: design-direction
description: Charte CIA refondue (Mai 2026) — palette HSL Bleu/Or/Rouge + Spark + Ink + sémantique, typo Plus Jakarta + Inter + JetBrains Mono, glassmorphism, gradients Côte d'Azur, dark mode supporté
type: design
---
# Charte CIA — refonte Mai 2026

## Palette (HSL via CSS vars dans index.css)
- **CIA Blue** 50→900 — `--cia-blue-{50..900}` — pilier Méditerranée profonde (#0A3D62 = 500)
- **CIA Gold** 50→900 — `--cia-gold-{50..900}` — soleil d'Antibes (#CCAE62 = 500)
- **CIA Red** 50→900 — `--cia-red-{50..900}` — passion bord de mer (#B71540 = 500)
- **Spark** light/mid/deep — `--cia-spark-{light,mid,deep}` — accents lumineux #1E90FF, **jamais en aplat plein écran**, réservé à la mascotte / focus rings / halos / progress shines
- **Ink** 50→900 — `--ink-{50..900}` — neutres
- **Sémantique** : `success`, `warning`, `error`, `info` (50/100/500/600/700)
- **Gamification** : `xp`, `streak`, `gems`, `bonus`

## Combinaisons interdites
- Rouge CIA sur Or CIA (contraste KO)
- Spark mid #1E90FF en aplat plein écran (uniquement gradients/halos)
- Or CIA sur fond blanc en body (utiliser gold-700 mini, ou gradient)
- Néons saturation > 90% — CIA reste premium, pas gaming

## Typographie
- **Display** : Plus Jakarta Sans (400/500/600/700/800) — `font-display`
- **Body** : Inter (400/500/600/700) — `font-sans`
- **Numeric** : JetBrains Mono (400/500/600) — `font-mono` + `.tnum` (tabular-nums obligatoire pour XP, streak, prix, scores, timers, classements)
- Gradient text réservé au hero (1-3 mots max) via `bg-g-shine bg-clip-text text-transparent`

## Radius signature
- `rounded-2xl` / `rounded-3xl` (24px) cards principales — SIGNATURE
- `rounded-4xl` (32px) — pricing, hero feature
- `--radius` = 1rem (16px)

## Shadows
- `shadow-3d-blue|gold|success|red` — boutons CTA signature (4px de profondeur)
- `shadow-elev-lg|xl` — élévations premium
- `shadow-glow-gold|blue` — halos hero / Spark

## Gradients (Côte d'Azur)
- `bg-g-sun` — XP, héros dorés
- `bg-g-sea` — overlays méditerranéens
- `bg-g-dawn` — transitions premium, pricing
- `bg-g-sunset` — témoignages
- `bg-g-mistral` — backgrounds très doux
- `bg-g-spark` — halo derrière la mascotte Spark
- `bg-g-shine` (+ `anim-shine`) — mots-clés hero (bg-clip-text)

## Glassmorphism (4 variants)
- `.glass` / `.glass-subtle` / `.glass-strong` / `.glass-dark`
- `.glass-adaptive` + `.glass-subtle-adaptive` pour surfaces qui suivent le thème

## Dark mode
- Activé via classe `.dark` sur `<html>`. Tous les tokens shadcn ont leur mapping dark. Primary devient gold-400 en dark, ring devient spark-light.

## Animations Spark (mascotte flamme)
- `anim-flame-breathe` (idle), `anim-flame-talk`, `anim-flame-bounce`, `anim-flame-celebrate`, `anim-flame-sad`
- `anim-flicker-outer/mid/mid2/core` (couches de la flamme)
- `anim-halo-pulse`, `anim-ember`, `anim-shine`

## Sources
Refonte basée sur `E_LEARNING_APP.zip` (mai 2026) — fichiers de référence : `tokens.jsx`, `components.jsx`, `gamification.jsx`, `pages.jsx`, `spark.jsx`.