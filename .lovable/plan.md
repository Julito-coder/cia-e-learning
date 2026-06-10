
# Plan — Pages "Mon abonnement" et "Le Centre International d'Antibes"

## 1. Navigation depuis l'avatar
Ajouter 2 entrées dans le `DropdownMenu` du `Header` (avatar) :
- **Mon abonnement** → `/abonnement`
- **Le Centre International d'Antibes** → `/contact-cia`

## 2. Page `/abonnement` — Mon abonnement (Premium 9,99 €/mois)

### Activation paiements
- Activer **Stripe intégré Lovable** (`enable_stripe_payments`) — checkout managé, pas de clé à fournir.
- Créer 1 produit récurrent : **Premium CIA** — 9,99 € / mois.

### UI
- Si **non abonné** : carte Hero "Premium" listant les bénéfices (accès complet A2→C2, tous les modules, prio TTS, badge premium) + bouton **« S'abonner — 9,99 €/mois »** → ouvre le Stripe Checkout (Edge function `create-checkout`).
- Si **abonné** : carte d'état (plan actif, prochaine date de facturation, statut), bouton **« Gérer mon abonnement »** → portail client Stripe (Edge function `customer-portal`) pour mise à jour CB / annulation.
- Page de retour `/abonnement?success=1` & `/abonnement?canceled=1` avec toasts.

### Backend
- Adapter la table `subscriptions` existante (ajouter `stripe_customer_id`, `stripe_subscription_id`, `current_period_end`, `plan` étendu à `premium`).
- Edge functions :
  - `create-checkout` (verify_jwt=false, auth en code) — crée session Stripe en mode `subscription`.
  - `customer-portal` — ouvre le portail de gestion.
  - `check-subscription` — vérifie l'état Stripe et met à jour `subscriptions` (utilisé au mount de la page et au retour de checkout).

### Verrouillage Premium (A2 → C2)
- Hook `useSubscription()` (lit `subscriptions.plan + status`).
- Dans `Catalogue`, `Curriculum` (`ModuleNode`/`LearningPath`), `CourseDetail` :
  - Cours de niveau ≠ A1 → si non-premium : overlay cadenas + CTA "Passer Premium" qui route vers `/abonnement`.
- Garde côté `CoursePlayer` pour empêcher le démarrage direct par URL.

## 3. Page `/contact-cia` — Le Centre International d'Antibes

Layout 2 colonnes (1 col mobile) avec 2 cartes :

### Carte 1 — WhatsApp
- Icône WhatsApp, brève description.
- Bouton **« Discuter sur WhatsApp »** → lien externe `https://api.whatsapp.com/send?phone=33604590420&text=&source=&data=` (`target=_blank`, `rel=noopener`).

### Carte 2 — Message direct
- Formulaire (sujet + message), validé via **zod**.
- À l'envoi : appelle l'Edge function `send-contact-message` qui envoie un mail à **direct@cia-france.com** via Resend (gateway connector).
- Le mail inclut automatiquement :
  - Email du compte (depuis `auth.user.email`)
  - Téléphone du profil (depuis `profiles.phone` — ajouter la colonne si absente, et un champ dans `PersonalInfoForm`)
  - Nom / prénom
  - Sujet + message
  - `reply_to` = email du client
- Confirmation toast + reset form. Bloque l'envoi si non authentifié.

### Backend
- Connecter le **connector Resend** (gateway) → secret `RESEND_API_KEY` injecté.
- Edge function `send-contact-message` :
  - Vérifie le JWT, charge profil, valide payload zod.
  - Appelle gateway Resend `POST /emails` avec `from: "CIA E-Learning <noreply@…>"`, `to: ["direct@cia-france.com"]`, `reply_to`, HTML formaté.

## 4. Routing
Dans `src/App.tsx` :
- Ajout des lazy routes `Abonnement` et `ContactCIA` sous `AppLayout`, protégées par `ProtectedRoute`.

## 5. Traductions
Ajouter clés dans les 6 locales (`fr/en/es/de/it/ru`) :
- `nav.subscription`, `nav.contactCia`
- libellés des deux pages (titres, CTA, états abonnement, formulaire contact).

## 6. Détails techniques (résumé)
- Stripe : seamless Lovable (pas de clé utilisateur, mode `subscription`, monnaie EUR).
- Migrations : `ALTER TABLE subscriptions` + GRANTs ; `ALTER TABLE profiles ADD COLUMN phone TEXT`.
- Edge functions sous `supabase/functions/{create-checkout,customer-portal,check-subscription,send-contact-message}/index.ts` avec CORS.
- Resend via connector gateway (`https://connector-gateway.lovable.dev/resend/emails`).
- Verrouillage Premium : composant `<PremiumLock>` réutilisable.

## Hors-scope (à confirmer si besoin plus tard)
- Période d'essai gratuite, codes promo, plans annuels.
- Historique des messages contact côté admin.
