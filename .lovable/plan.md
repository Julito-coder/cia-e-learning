## Plan : Leçon du jour + classement des streaks

### Objectif
Ajouter un **défi quotidien** (une "leçon du jour") qui change automatiquement à minuit, accessible à tous les utilisateurs (gratuit, peu importe leur abonnement), avec :
- **Sélection du niveau** : par défaut, leçon du niveau CECR de l'utilisateur ; il peut choisir un autre niveau au moment de lancer le défi
- **Suivi de série (streak)** : nombre de jours consécutifs où l'utilisateur a fait le défi
- **Classement dédié** des meilleurs streaks pour mettre en compétition les apprenants

### 1 — Sélection déterministe de la leçon du jour

Pas de table en base (plus simple, pas de cron à gérer) : on **dérive la leçon du jour à partir de la date** avec un hash. Tous les clients voient la même leçon le même jour et ça change automatiquement à minuit.

```ts
function getDailyLesson(level: CECRLevel, date = new Date()): string | null {
  const lessonsForLevel = getAllLessonsWithContent(level); // toutes les leçons du niveau qui ont du contenu
  if (!lessonsForLevel.length) return null;
  const seed = Math.floor(date.getTime() / 86400000); // jour épochal
  const idx = seed % lessonsForLevel.length;
  return lessonsForLevel[idx].id;
}
```

Avantages : aucune infrastructure, le changement se fait pile à minuit (heure locale du client), et la leçon est consistante pour tout le monde le même jour.

### 2 — Page `/defi-du-jour`

- **En-tête** : date du jour, badge "DÉFI DU JOUR", flamme avec streak actuel
- **Carte principale** : la leçon proposée (titre, niveau, durée), bouton "Commencer"
- **Sélecteur de niveau** : segmented control A1/A2/B1/B2/C1/C2 — par défaut sur le niveau CECR de l'utilisateur. Changer de niveau remplace immédiatement la leçon affichée.
- **État "fait aujourd'hui"** : si l'utilisateur a déjà complété le défi du jour → carte verte avec score, badge ✓, et message "Reviens demain pour maintenir ta série !"
- **Mini-classement des streaks** en bas : top 10 utilisateurs par streak

### 3 — Suivi du streak

Ajout de 2 colonnes sur la table `profiles` :
- `daily_streak` (integer, default 0) — nombre de jours consécutifs
- `last_daily_completed_at` (date) — date (UTC) du dernier défi validé

**Logique côté client à la fin du défi du jour** (dans `CourseDetail.tsx` quand on détecte que la leçon complétée est celle du jour) :
- Si `last_daily_completed_at === aujourd'hui` → ne rien faire (déjà compté)
- Si `last_daily_completed_at === hier` → `daily_streak += 1`
- Sinon → `daily_streak = 1`
- Mettre à jour `last_daily_completed_at = aujourd'hui`

**Reset automatique à la lecture** : si `last_daily_completed_at` est antérieur à hier, on remet `daily_streak` à 0 au prochain affichage. Pas besoin de cron.

Pour les utilisateurs non connectés : streak stocké dans `localStorage` (`daily-streak`, `daily-last-date`).

### 4 — Détection "leçon du jour terminée"

Dans `src/pages/CourseDetail.tsx`, dans le `onComplete` du `CoursePlayer`, on vérifie si `displayCourse.id === getDailyLesson(displayCourse.level)`. Si oui → on incrémente le streak + bonus de **+25 XP** + toast spécial 🔥.

### 5 — Classement des streaks

**Nouvel onglet "🔥 Streak"** ajouté dans la page `/classement` existante, à côté de "Global" et "Niveau". Mêmes données (`profiles`), mais trié par `daily_streak desc`.

```ts
supabase
  .from('profiles')
  .select('user_id, first_name, last_name, avatar_url, daily_streak, cecr_level')
  .eq('is_active', true)
  .order('daily_streak', { ascending: false })
  .limit(50);
```

Sur les cartes du podium et les lignes : afficher la flamme 🔥 + nombre de jours au lieu de l'XP.

### 6 — Mise en avant sur la home

Dans `src/pages/Index.tsx`, remplacer le composant `DailyGoal` (statique, valeurs hardcodées 0/5) par une **carte "Défi du jour"** qui affiche :
- Le titre de la leçon du jour pour le niveau de l'utilisateur
- Bouton "Faire le défi" → redirige vers `/defi-du-jour`
- État ✓ si déjà fait aujourd'hui
- Streak actuel avec flamme

### 7 — Lien dans la navigation

Ajouter "Défi du jour" dans le `Header.tsx` (icône `Flame`) — visible sur desktop et mobile.

### Fichiers créés
- `src/lib/dailyChallenge.ts` — logique pure : `getDailyLesson(level, date)`, `getAllLessonsWithContent(level)`, `computeStreakUpdate(lastDate, currentStreak)`
- `src/hooks/useDailyChallenge.ts` — hook React qui expose : `dailyLessonId`, `selectedLevel/setSelectedLevel`, `streak`, `lastCompletedDate`, `isDoneToday`, `markDoneToday()`
- `src/pages/DailyChallenge.tsx` — la page complète

### Fichiers modifiés
- `src/App.tsx` — route `/defi-du-jour`
- `src/components/layout/Header.tsx` — lien "Défi du jour"
- `src/pages/Index.tsx` — remplacement de `DailyGoal` par la carte défi du jour
- `src/pages/CourseDetail.tsx` — détection + appel `markDoneToday()` quand la leçon du jour est complétée
- `src/pages/Classement.tsx` — onglet "🔥 Streak" + tri sur `daily_streak`

### Migration SQL
- Ajout des colonnes `daily_streak` et `last_daily_completed_at` sur `profiles`

### Synchronisation
- L'événement `xp-update` existant continue de fonctionner pour l'XP bonus
- Pas besoin de cron : la sélection du jour et le reset du streak se font côté client, garantis cohérents par la date du jour

### Hors périmètre (V2)
- Notifications push à 9h "Ton défi du jour t'attend !"
- Calendrier des 30 derniers jours avec carrés verts/gris (façon GitHub contribution graph)
- Récompenses paliers (7 jours, 30 jours, 100 jours)
