

## Plateforme E-Learning CIA — Plan d'implémentation

### Phase 1 : Fondations & Identité visuelle
- Mise en place de la charte graphique CIA : bleu marine (#1a3a5c), blanc, typographies cohérentes avec cia-france.com
- Logo CIA intégré (depuis les images fournies)
- Design system responsive (desktop, tablette, mobile)

### Phase 2 : Authentification & Profils
- Inscription / connexion par email + mot de passe via Lovable Cloud
- Récupération de mot de passe
- Profil apprenant : niveau CECRL, langue d'interface, nationalité
- Rôles : apprenant, manager/admin (table séparée pour la sécurité)

### Phase 3 : Espace Apprenant (Front-office)
- **Tableau de bord** : progression globale, cours récents, cours recommandés, niveau actuel
- **Catalogue de cours** avec arborescence 3 niveaux (CECRL → Thème → Cours)
- **Moteur de recherche & filtres** : niveau, thème, type de contenu, durée
- **Section "Nouveaux cours"** avec badge "Nouveau"
- **Système de favoris** (cours sauvegardés)
- **Suivi de progression** : barres de progression, taux de complétion, scores
- **Glossaire interactif** avec termes liés aux cours
- **Interface multilingue** : FR, EN, ES, DE, IT, RU

### Phase 4 : Formats de cours interactifs
- Lecteur de cours avec contenu mixte :
  - Texte enrichi (titres, gras, listes, encadrés)
  - Images et illustrations
  - Audio intégré (compréhension orale, prononciation)
  - Vidéo (YouTube embed + hébergement natif via Storage)
  - **QCM** avec correction immédiate et explications
  - **Glisser-déposer** (associations, réordonnancement)
  - **Textes à trous** (complétion)
  - **Flashcards** (mémorisation vocabulaire)
  - **Enregistrement vocal** (prononciation de l'apprenant)

### Phase 5 : Back-office Manager
- **Gestion des utilisateurs** : création, activation/désactivation, attribution de niveaux, distinction étudiant CIA / client externe
- **Export CSV/Excel** des données utilisateurs (nom, email, nationalité, niveau, progression)
- **Tableau de bord analytics** : inscrits actifs, taux de complétion, cours populaires, répartition par niveau/nationalité
- **Éditeur de cours WYSIWYG** : composition de cours combinant tous les formats interactifs sans compétences techniques
- **Gestion du catalogue** : publication/dépublication, gestion de l'arborescence niveaux/thèmes
- **Gestion des abonnements** : offres gratuit/premium/accès école, durée, codes promo
- **Notifications email** : bienvenue, nouveau cours, relance d'inactivité

### Phase 6 : Modèle économique
- Accès gratuit limité (cours découverte A1)
- Abonnement mensuel/annuel pour accès complet
- Codes promo / activation manuelle pour anciens étudiants CIA

### Base de données (Lovable Cloud)
- Tables : profiles, courses, course_sections, course_content, exercises, user_progress, user_favorites, glossary_terms, subscriptions, user_roles
- Storage : médias de cours (audio, vidéo, images), enregistrements vocaux
- RLS pour sécuriser les accès par rôle
- Edge Functions pour exports, notifications, analytics

### Stack technique
- React + TypeScript + Tailwind (charte CIA)
- Lovable Cloud (Supabase) : auth, DB, storage, edge functions
- react-i18next pour le multilingue
- react-beautiful-dnd pour le drag & drop
- Tiptap ou similar pour l'éditeur WYSIWYG
- Web Audio API pour l'enregistrement vocal

> **Note** : Ce projet sera construit de manière incrémentale. La première implémentation couvrira les phases 1-3 avec des données de démonstration, puis nous ajouterons progressivement les formats interactifs et le back-office.

