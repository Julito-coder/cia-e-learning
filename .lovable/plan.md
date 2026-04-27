## Plan : Classement des utilisateurs (Leaderboard compétitif)

### Objectif
Créer une page **Classement** qui affiche tous les utilisateurs de la plateforme classés par XP, avec leur niveau CECR, avatar et un design compétitif (podium, badges, position de l'utilisateur courant mise en avant).

### Ce qui sera créé

**1. Nouvelle page `/classement` (`src/pages/Classement.tsx`)**
- **Podium top 3** : 3 cartes mises en valeur (or, argent, bronze) avec avatars, XP et niveau CECR
- **Liste classée du rang 4 à 50** : tableau/cartes avec rang, avatar, prénom, niveau, XP
- **Carte "Ma position"** sticky en haut ou en bas : montre le rang de l'utilisateur connecté même s'il n'est pas dans le top 50
- **Filtres** : 
  - Onglets : "Global" / "Mon niveau CECR" (filtre sur les utilisateurs au même niveau)
  - Période : "All-time" (V1 — XP cumulé total)
- **Animations** : flammes/couronne pour le #1, podium animé, mise en avant de la ligne courant utilisateur
- **Design Duolingo-like** : cohérent avec le reste (couleurs cia-xp, cia-streak, badges arrondis)

**2. Lien dans la navigation**
- Ajouter "Classement" dans `src/components/layout/Header.tsx` (nav desktop, menu mobile, bottom nav mobile)
- Icône : `Trophy` de lucide-react
- Clé i18n : `nav.leaderboard` ajoutée dans les 6 fichiers `src/i18n/locales/*.json`

**3. Route**
- Ajouter `<Route path="/classement" element={<Classement />} />` dans `src/App.tsx`

### Source des données

La table `profiles` contient déjà tout ce qu'il faut : `user_id`, `first_name`, `last_name`, `avatar_url`, `total_xp`, `cecr_level`, `is_active`.

**Requête** (côté client via le SDK Supabase) :
```ts
supabase
  .from('profiles')
  .select('user_id, first_name, last_name, avatar_url, total_xp, cecr_level')
  .eq('is_active', true)
  .order('total_xp', { ascending: false })
  .limit(50)
```

Pour la position de l'utilisateur courant hors top 50, une seconde requête comptera le nombre de profils avec un XP supérieur :
```ts
supabase.from('profiles').select('*', { count: 'exact', head: true }).gt('total_xp', myXP)
```
→ rang = count + 1.

### Sécurité (RLS)

Les politiques actuelles sur `profiles` permettent à un utilisateur de voir **uniquement son propre profil**. Pour un classement, il faut autoriser la lecture publique d'un sous-ensemble de champs.

**Migration** : ajout d'une politique RLS qui permet aux utilisateurs authentifiés de voir les champs nécessaires au classement de tous les profils actifs :
```sql
CREATE POLICY "Authenticated users can view leaderboard data"
ON public.profiles
FOR SELECT
TO authenticated
USING (is_active = true);
```

Cette politique s'ajoute aux existantes (les utilisateurs gardent l'accès complet à leur propre profil). Comme RLS combine les politiques en OR, les utilisateurs connectés pourront lire tous les profils actifs — ce qui est nécessaire pour le classement. Les champs sensibles (email, nationality) ne seront simplement **pas sélectionnés** côté front pour le leaderboard.

### Synchronisation temps réel
Le leaderboard se rafraîchit automatiquement toutes les 30s via `setInterval` + une écoute de l'événement `xp-update` (déjà émis par `useUserProgress`) pour rafraîchir immédiatement quand l'utilisateur courant gagne de l'XP.

### Fichiers modifiés / créés
- **Créé** : `src/pages/Classement.tsx`
- **Modifié** : `src/App.tsx` (route)
- **Modifié** : `src/components/layout/Header.tsx` (nav + bottom nav)
- **Modifié** : `src/i18n/locales/{fr,en,es,de,it,ru}.json` (clé `nav.leaderboard`)
- **Migration SQL** : politique RLS de lecture publique du leaderboard sur `profiles`

### Hors périmètre (V2 possible)
- Classements hebdomadaires/mensuels (nécessiterait une table `xp_events` avec horodatage)
- Ligues à la Duolingo (Bronze/Argent/Or… avec promotion/relégation)
- Notifications push quand un ami te dépasse
