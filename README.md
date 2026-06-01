# CIA E-Learning

Plateforme d'apprentissage du français en ligne du **Centre International d'Antibes**.
Mascotte officielle : **Spark** 🔥 — la flamme méditerranéenne.

## Stack

- **Build** : Vite 5 + React 18 + TypeScript 5 (strict)
- **UI** : Tailwind 3 + shadcn/ui (Radix) + framer-motion
- **State** : TanStack Query + React Hook Form + Zod
- **Backend** : Supabase (PostgreSQL + Auth + Storage + Edge Functions)
- **i18n** : i18next (fr / en / de / es / it / ru)
- **Tests** : Vitest + Testing Library + Playwright

## Setup local

Prérequis : Node 20+ et npm 10+.

```bash
# 1. Cloner le repo
git clone https://github.com/Julito-coder/cia-e-learning.git
cd cia-e-learning

# 2. Installer les dépendances (npm uniquement, pas de bun/yarn/pnpm)
npm install

# 3. Configurer les variables d'environnement
cp .env.example .env
# Éditer .env avec vos clés Supabase (Project Settings → API)

# 4. Lancer le dev server (http://localhost:8080)
npm run dev
```

## Scripts npm

| Script | Description |
|---|---|
| `npm run dev` | Dev server avec HMR sur port 8080 |
| `npm run build` | Build production (sortie `dist/`) |
| `npm run preview` | Preview du build production |
| `npm run lint` | ESLint sur tout le code |
| `npm run lint:fix` | ESLint en mode auto-fix |
| `npm run typecheck` | Vérif TypeScript sans build |
| `npm run format` | Prettier sur tout le code |
| `npm run format:check` | Prettier en mode check (CI) |
| `npm run test` | Tests Vitest one-shot |
| `npm run test:watch` | Tests Vitest en watch |

## Structure

```
src/
├── App.tsx, main.tsx            # Entrée + routing
├── assets/                      # Assets bundlés (logos, images statiques)
├── components/                  # Composants React par domaine
│   ├── admin/ auth/ course-player/ courses/ gamification/
│   ├── landing/ layout/ leaderboard/ onboarding/ profile/
│   ├── spark/                   # Mascotte officielle CIA
│   ├── states/                  # Empty/Error/Skeleton
│   └── ui/                      # shadcn/ui stock (51 composants)
├── data/                        # Contenus pédago (migration BDD en Sprint 4)
├── hooks/                       # Hooks React custom (useAuth, useUserProgress, …)
├── i18n/                        # Configuration et locales JSON
├── integrations/supabase/       # Client + types auto-générés
├── lib/                         # Utilitaires (animations, validators, notify)
├── pages/                       # Pages routables (14 front + 6 admin)
└── test/                        # Setup tests

supabase/
├── config.toml                  # Project ID seul (reste sur dashboard)
├── functions/                   # Edge Functions Deno (TTS, league rotation)
└── migrations/                  # 9 migrations SQL versionnées
```

## Charte graphique

Sources de vérité dans `/design-reference/` :
- `CIA_Design_System.html` — charte v2 navigable
- `tokens.jsx`, `components.jsx`, `spark.jsx`, `gamification.jsx`, `pages.jsx`
- `lottie/spark-{idle,talking,encouraging,celebrating,sad}.json`

Tokens CSS : `src/index.css` (HSL variables). Couleurs principales : CIA Blue (Méditerranée),
CIA Gold (Soleil d'Antibes), CIA Red (Passion bord de mer), Spark (accents lumineux).

## Branches

- `main` : production
- `claude/*` : branches de refonte v2 par sprint (1 PR par sprint, rebase au merge)
