## Ligues hebdomadaires (Bronze / Argent / Or)

Ajouter un système de ligues compétitives où les utilisateurs gagnent leur place dans une division en fonction de l'**XP gagné durant la semaine en cours** (lundi 00h → dimanche 23h59). À la fin de chaque semaine : les meilleurs montent, les derniers descendent.

### Règles métier

- **3 divisions** : Bronze → Argent → Or (du plus bas au plus haut).
- **Période** : semaine ISO (lundi–dimanche, fuseau Europe/Paris).
- **Classement intra-ligue** : trié par `weekly_xp` décroissant, regroupé par division.
- **Promotion / relégation** (appliquée au passage de semaine, à 00h le lundi) :
  - Top 3 d'une ligue → promus à la division supérieure (ou restent en Or si déjà au sommet)
  - 3 derniers d'une ligue → relégués à la division inférieure (ou restent en Bronze)
  - Les autres restent dans leur ligue actuelle
- **Nouveaux utilisateurs** : démarrent en **Bronze**.
- L'XP hebdomadaire est remis à 0 à chaque rotation de semaine.

### Schéma base de données

Nouveau champs sur `profiles` :
- `league` (text, défaut `'bronze'`) — division actuelle
- `weekly_xp` (integer, défaut 0) — XP gagné cette semaine
- `weekly_period_start` (date, nullable) — début de la semaine en cours pour cet utilisateur (sert au reset paresseux)

Nouvelle table `league_history` (pour afficher la dernière promotion / relégation et un historique léger) :
- `id`, `user_id`, `week_start` (date), `league_before`, `league_after`, `final_rank` (int), `weekly_xp_total` (int), `outcome` (text: `promoted` | `demoted` | `stayed`), `created_at`.
- RLS : utilisateur lit ses propres lignes, admin gère tout.

### Logique d'attribution XP

Modifier `useUserProgress.addXP()` pour incrémenter aussi `weekly_xp` :
- À chaque appel, vérifier si `weekly_period_start` est < lundi de la semaine courante. Si oui → reset paresseux côté client (`weekly_xp = amount`, `weekly_period_start = lundi courant`).
- Sinon → `weekly_xp += amount`.
- Mise à jour atomique via une **fonction Postgres `add_weekly_xp(_user_id, _amount)`** (security definer) appelée depuis le hook, pour éviter les race conditions et garantir la cohérence du reset.

### Rotation hebdomadaire (promotion/relégation)

**Edge function** `weekly-league-rotation` planifiée via `pg_cron` chaque **lundi à 00h05 Europe/Paris**.

Pour chaque division (bronze, argent, or) :
1. Charger tous les profils actifs de cette division triés par `weekly_xp` desc.
2. Calculer le rang final ; déterminer outcome (top 3 = promoted, bottom 3 = demoted, autres = stayed).
3. Insérer une ligne dans `league_history` (avec `week_start` = lundi précédent).
4. Mettre à jour `profiles.league` selon l'outcome.
5. Reset `weekly_xp = 0` et `weekly_period_start = lundi courant` pour tous.

Cas limites :
- Division Or : top 3 reste en Or (pas de "super ligue").
- Division Bronze : bottom 3 reste en Bronze (pas de descente plus bas).
- Si moins de 6 utilisateurs dans une ligue : seul le 1er est promu / le dernier est relégué (ou rien si <2).

### UI — page `/classement`

Ajouter un **4ᵉ onglet "🏆 Ligue"** (placé en premier, devient l'onglet par défaut) :

```text
+---------------------------------------------------+
| [Badge or/argent/bronze géant]                    |
| LIGUE D'ARGENT • Semaine du 27 avril              |
| ⏱ Fin dans 4j 12h 03m                             |
+---------------------------------------------------+
| [Sélecteur ligue : Bronze | Argent(actif) | Or]   |
+---------------------------------------------------+
| Zone PROMOTION (top 3) ── fond doré dégradé      |
|   #1 🥇 Marie L. ............... 1240 XP ↑       |
|   #2 🥈 Paul D. ................ 980 XP  ↑       |
|   #3 🥉 (vous) ................. 850 XP  ↑       |
+---------------------------------------------------+
| Zone SAFE                                         |
|   #4 ........... 720 XP                          |
|   ...                                             |
+---------------------------------------------------+
| Zone RELÉGATION (3 derniers) ── fond rouge clair |
|   #N-2 .......... 80 XP   ↓                      |
|   #N-1 .......... 40 XP   ↓                      |
|   #N   .......... 10 XP   ↓                      |
+---------------------------------------------------+
| Bandeau résultat semaine précédente :             |
| « 🎉 Vous avez été promu en Argent ! »            |
+---------------------------------------------------+
```

Détails visuels :
- Badge ligue : Bronze (orange), Argent (slate), Or (gradient yellow/amber + Sparkles).
- Compte à rebours live (secondes) jusqu'au prochain lundi 00h.
- Lignes de promotion : bordure verte + flèche haut ; relégation : bordure rouge + flèche bas.
- Carte sticky bas : "Votre position #X • Y XP cette semaine".
- Lecture du dernier `league_history` de l'utilisateur pour afficher le bandeau résultat.

### Composants à créer / modifier

**Créer** :
- `supabase/functions/weekly-league-rotation/index.ts` — edge function de rotation
- `src/hooks/useLeague.ts` — fournit `league`, `weeklyXP`, `weekEnd`, `lastResult`, et la liste des membres de ma ligue via `supabase.from('profiles').eq('league', myLeague)`
- `src/components/leaderboard/LeagueView.tsx` — la vue complète de l'onglet Ligue (badge, compte à rebours, zones promo/safe/reléguation)
- `src/components/leaderboard/LeagueBadge.tsx` — badge réutilisable

**Modifier** :
- `src/hooks/useUserProgress.ts` — `addXP()` appelle aussi `supabase.rpc('add_weekly_xp', { _user_id, _amount })`
- `src/pages/Classement.tsx` — ajouter onglet Ligue (par défaut), garder Global / Niveau / Streak

### Migrations & cron

1. Migration : ajout des 3 colonnes sur `profiles`, table `league_history` avec RLS, fonction Postgres `add_weekly_xp`.
2. Activer extensions `pg_cron` + `pg_net` (si non déjà actives).
3. Insert (pas migration) : `cron.schedule('weekly-league-rotation', '5 22 * * 0', ...)` (dimanche 22h UTC = lundi 00h05 Europe/Paris en heure d'été — l'edge function elle-même calculera le lundi exact pour rester robuste).

### Ce que l'utilisateur verra

- Onglet **🏆 Ligue** par défaut sur `/classement` avec son badge de division, son rang en temps réel, l'XP gagnée cette semaine et un compte à rebours.
- Visualisation claire des zones de promotion (vert) / sécurité / relégation (rouge).
- Notification (bandeau) du résultat de la semaine précédente lors du premier passage le lundi.
- L'XP gagnée via leçons, défi du jour et test de vitesse alimente automatiquement le classement de ligue.