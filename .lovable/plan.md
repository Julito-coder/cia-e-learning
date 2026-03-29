

## Plan : Emails d'authentification (inscription + mot de passe oublié)

### Contexte

Actuellement, le projet n'a pas de domaine email configuré ni de page de réinitialisation de mot de passe. Le lien "Mot de passe oublié ?" sur `/connexion` pointe vers `/mot-de-passe-oublie` qui n'existe pas.

### Étapes

#### 1. Configurer un domaine email

Un domaine d'envoi est nécessaire pour personnaliser les emails (vérification de compte, réinitialisation de mot de passe). La première étape est de configurer votre domaine email via le panneau de configuration.

#### 2. Créer les templates d'emails d'authentification

Une fois le domaine configuré, les 6 templates email seront créés automatiquement (inscription, magic link, récupération de mot de passe, invitation, changement d'email, ré-authentification) avec le branding du CIA :
- Couleurs : bleu marine CIA (`hsl(207, 52%, 23%)`) + bleu ciel accent (`hsl(199, 78%, 55%)`)
- Police : Nunito / Source Sans 3
- Logo si disponible dans `/public`

#### 3. Créer la page "Mot de passe oublié" (`/mot-de-passe-oublie`)

Formulaire simple avec un champ email qui appelle `resetPasswordForEmail()` avec redirection vers `/reinitialiser-mot-de-passe`. Affiche un message de confirmation après envoi.

#### 4. Créer la page de réinitialisation (`/reinitialiser-mot-de-passe`)

Page qui détecte le token `type=recovery` dans l'URL, puis affiche un formulaire pour saisir un nouveau mot de passe. Appelle `updateUser({ password })` pour finaliser.

#### 5. Ajouter les routes dans App.tsx

- `/mot-de-passe-oublie` → composant ForgotPassword
- `/reinitialiser-mot-de-passe` → composant ResetPassword

### Fichiers modifiés / créés

- `src/pages/ForgotPassword.tsx` — nouveau
- `src/pages/ResetPassword.tsx` — nouveau
- `src/App.tsx` — ajout des 2 routes
- Templates email d'authentification (via outil interne)

