// Full CIA E-Learning Curriculum: 300 lessons across 6 CECRL levels
// Each level has 5 modules, each module has 8 lessons + 1 revision + 1 exam = 10 lessons

import type { CECRLevel } from './demo-courses';

export interface Lesson {
  id: number;
  title: string;
  competence: string;
  description: string;
}

export interface Module {
  id: string;
  number: number;
  title: string;
  theme: string;
  level: CECRLevel;
  badge: string;
  badgeEmoji: string;
  lessons: Lesson[];
}

export interface LevelCurriculum {
  level: CECRLevel;
  title: string;
  objective: string;
  modules: Module[];
}

export const curriculum: LevelCurriculum[] = [
  // ═══════════════════════════════════════════
  // NIVEAU A1 — DÉCOUVERTE
  // ═══════════════════════════════════════════
  {
    level: 'A1',
    title: 'Découverte',
    objective: 'Comprendre et utiliser des expressions familières et quotidiennes. Se présenter et poser des questions simples.',
    modules: [
      {
        id: 'A1.1', number: 1, title: 'Premiers pas en français', theme: 'Salutations, identité, alphabet et sons',
        level: 'A1', badge: 'Bienvenue à Antibes', badgeEmoji: '🏖️',
        lessons: [
          { id: 1, title: 'Bonjour !', competence: 'CO + PO', description: 'Salutations (bonjour, bonsoir, salut, au revoir). Dialogue : arrivée à l\'école du CIA à Antibes.' },
          { id: 2, title: 'Je m\'appelle…', competence: 'PO + PE', description: 'Se présenter (je m\'appelle, je suis, j\'habite). Compléter sa fiche d\'identité.' },
          { id: 3, title: 'Les sons du français', competence: 'CO', description: 'L\'alphabet français, les accents (é, è, ê, ë), les sons spécifiques (u, ou, on, an).' },
          { id: 4, title: 'Tu ou vous ?', competence: 'Interaction', description: 'Tutoiement vs vouvoiement. Dialogue : au marché provençal d\'Antibes.' },
          { id: 5, title: 'Les chiffres de 0 à 20', competence: 'CO + PE', description: 'Compter, donner son numéro de téléphone, son âge.' },
          { id: 6, title: 'Quelle est ta nationalité ?', competence: 'Vocabulaire', description: 'Les nationalités, le masculin/féminin des adjectifs de nationalité.' },
          { id: 7, title: 'Les jours et les mois', competence: 'Vocabulaire + CE', description: 'Jours de la semaine, mois, saisons. Planifier une activité à Antibes.' },
          { id: 8, title: 'Au café d\'Antibes', competence: 'Interaction', description: 'Commander une boisson simple. Dialogue au café. Jeu de rôle guidé.' },
          { id: 9, title: 'Révision Module A1.1', competence: 'Toutes', description: 'Quiz récapitulatif : 20 questions mixtes (CO, CE, vocabulaire, grammaire).' },
          { id: 10, title: 'Examen Module A1.1', competence: 'Toutes', description: 'Test noté couvrant toutes les compétences du module.' },
        ],
      },
      {
        id: 'A1.2', number: 2, title: 'Mon monde quotidien', theme: 'Famille, description physique, objets, couleurs',
        level: 'A1', badge: 'Explorateur', badgeEmoji: '🧭',
        lessons: [
          { id: 11, title: 'Ma famille', competence: 'Vocabulaire + CE', description: 'Membres de la famille. Arbre généalogique interactif.' },
          { id: 12, title: 'Il est grand, elle est petite', competence: 'Vocabulaire + Grammaire', description: 'Adjectifs de description physique. Accord masculin/féminin.' },
          { id: 13, title: 'Les couleurs de la Provence', competence: 'Vocabulaire', description: 'Les couleurs. Contexte : les marchés colorés de Provence.' },
          { id: 14, title: 'Qu\'est-ce que c\'est ?', competence: 'Vocabulaire + Grammaire', description: 'Objets du quotidien. Articles définis/indéfinis (le, la, un, une).' },
          { id: 15, title: 'Les chiffres de 20 à 100', competence: 'CO + PE', description: 'Compter jusqu\'à 100, dire les prix.' },
          { id: 16, title: 'J\'ai / Je n\'ai pas', competence: 'Grammaire + PO', description: 'Le verbe avoir au présent, la négation simple.' },
          { id: 17, title: 'C\'est mon / ma / mes', competence: 'Grammaire', description: 'Les adjectifs possessifs (mon, ma, mes, ton, ta, tes, son, sa, ses).' },
          { id: 18, title: 'Chez moi', competence: 'CE + PE', description: 'Décrire son logement. Contexte : un appartement à Juan-les-Pins.' },
          { id: 19, title: 'Révision Module A1.2', competence: 'Toutes', description: 'Quiz récapitulatif.' },
          { id: 20, title: 'Examen Module A1.2', competence: 'Toutes', description: 'Test noté. Badge "Explorateur" débloqué.' },
        ],
      },
      {
        id: 'A1.3', number: 3, title: 'Ma journée', theme: 'Routine, heure, verbes du quotidien, goûts',
        level: 'A1', badge: 'Gourmet Débutant', badgeEmoji: '🍽️',
        lessons: [
          { id: 21, title: 'Quelle heure est-il ?', competence: 'CO + PO', description: 'Dire et comprendre l\'heure.' },
          { id: 22, title: 'Ma journée type', competence: 'CE + Vocabulaire', description: 'Verbes de la routine (se lever, manger, travailler, dormir).' },
          { id: 23, title: 'Les verbes en -ER', competence: 'Grammaire', description: 'Conjugaison du présent des verbes du 1er groupe.' },
          { id: 24, title: 'J\'aime / Je n\'aime pas', competence: 'PO + Interaction', description: 'Exprimer ses goûts (j\'aime, j\'adore, je déteste + nom).' },
          { id: 25, title: 'Au restaurant à Antibes', competence: 'CO + Interaction', description: 'Commander un repas simple (entrée, plat, dessert).' },
          { id: 26, title: 'Les aliments', competence: 'Vocabulaire', description: 'Vocabulaire de la nourriture. Gastronomie provençale.' },
          { id: 27, title: 'Faire les courses', competence: 'Interaction + PE', description: 'Acheter au marché, demander le prix, la quantité.' },
          { id: 28, title: 'Le week-end', competence: 'CE + PE', description: 'Raconter son week-end au présent.' },
          { id: 29, title: 'Révision Module A1.3', competence: 'Toutes', description: 'Quiz récapitulatif.' },
          { id: 30, title: 'Examen Module A1.3', competence: 'Toutes', description: 'Test noté. Badge "Gourmet Débutant" débloqué.' },
        ],
      },
      {
        id: 'A1.4', number: 4, title: 'Se déplacer', theme: 'Ville, transports, directions, lieux publics',
        level: 'A1', badge: 'Voyageur', badgeEmoji: '🚂',
        lessons: [
          { id: 31, title: 'La ville d\'Antibes', competence: 'Vocabulaire + CE', description: 'Les lieux de la ville. Plan interactif d\'Antibes.' },
          { id: 32, title: 'Où est la gare ?', competence: 'PO + Interaction', description: 'Demander et indiquer un chemin.' },
          { id: 33, title: 'Les transports', competence: 'Vocabulaire + CO', description: 'Bus, train, vélo, voiture, avion. Acheter un billet.' },
          { id: 34, title: 'Les prépositions de lieu', competence: 'Grammaire', description: 'Devant, derrière, à côté de, en face de, entre, sur, sous.' },
          { id: 35, title: 'Prendre rendez-vous', competence: 'Interaction + PE', description: 'Fixer un rendez-vous (date, heure, lieu).' },
          { id: 36, title: 'Les verbes aller et venir', competence: 'Grammaire', description: 'Conjugaison + usage (je vais à, je viens de).' },
          { id: 37, title: 'À la pharmacie', competence: 'CO + Interaction', description: 'Exprimer un problème de santé simple. Acheter des médicaments.' },
          { id: 38, title: 'Météo et vêtements', competence: 'Vocabulaire + CE', description: 'Il fait chaud, il pleut. Les vêtements selon la saison.' },
          { id: 39, title: 'Révision Module A1.4', competence: 'Toutes', description: 'Quiz récapitulatif.' },
          { id: 40, title: 'Examen Module A1.4', competence: 'Toutes', description: 'Test noté. Badge "Voyageur" débloqué.' },
        ],
      },
      {
        id: 'A1.5', number: 5, title: 'Communiquer au quotidien', theme: 'Téléphone, email, réseaux sociaux',
        level: 'A1', badge: 'Niveau A1 validé', badgeEmoji: '🎓',
        lessons: [
          { id: 41, title: 'Au téléphone', competence: 'CO + PO', description: 'Passer un appel simple (allô, c\'est X, je voudrais parler à…).' },
          { id: 42, title: 'Écrire un email simple', competence: 'PE', description: 'Formules de politesse, structure d\'un email court.' },
          { id: 43, title: 'Les verbes être et avoir — Bilan', competence: 'Grammaire', description: 'Récapitulatif complet être/avoir au présent.' },
          { id: 44, title: 'Parler de ses loisirs', competence: 'PO + Vocabulaire', description: 'Sport, musique, cinéma, lecture. Exprimer une préférence.' },
          { id: 45, title: 'Poster sur les réseaux', competence: 'PE + Vocabulaire', description: 'Écrire un court post/commentaire en français.' },
          { id: 46, title: 'Les nombres de 100 à 1000', competence: 'CO + PE', description: 'Grands nombres, dates, adresses.' },
          { id: 47, title: 'C\'est quand ton anniversaire ?', competence: 'Interaction', description: 'Parler des dates, des fêtes, inviter quelqu\'un.' },
          { id: 48, title: 'Bilan de communication A1', competence: 'Toutes', description: 'Mise en situation globale : arriver à Antibes, se présenter, communiquer.' },
          { id: 49, title: 'Révision finale A1', competence: 'Toutes', description: 'Quiz complet couvrant les 5 modules (40 questions).' },
          { id: 50, title: 'EXAMEN FINAL A1', competence: 'Toutes', description: 'Test certifiant. Badge "Niveau A1 validé — Découverte" + certificat.' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════
  // NIVEAU A2 — SURVIE
  // ═══════════════════════════════════════════
  {
    level: 'A2',
    title: 'Survie',
    objective: 'Comprendre des expressions fréquemment utilisées. Communiquer lors de tâches simples. Décrire son environnement.',
    modules: [
      {
        id: 'A2.1', number: 1, title: 'Raconter au passé', theme: 'Passé composé, événements, souvenirs',
        level: 'A2', badge: 'Conteur Débutant', badgeEmoji: '📖',
        lessons: [
          { id: 51, title: 'Hier, j\'ai visité Cannes', competence: 'Grammaire + PO', description: 'Introduction au passé composé avec avoir.' },
          { id: 52, title: 'Je suis allé(e) à la plage', competence: 'Grammaire', description: 'Passé composé avec être. Accord du participe passé.' },
          { id: 53, title: 'Mon week-end à Nice', competence: 'CE + PE', description: 'Lire/écrire un récit au passé composé.' },
          { id: 54, title: 'Le Festival de Cannes', competence: 'CO + CE', description: 'Reportage simplifié sur le festival. Vocabulaire du cinéma.' },
          { id: 55, title: 'Poser des questions au passé', competence: 'Interaction', description: 'Est-ce que tu as… ? Où es-tu allé(e) ?' },
          { id: 56, title: 'Les vacances', competence: 'Vocabulaire + PE', description: 'Vocabulaire des vacances. Écrire une carte postale.' },
          { id: 57, title: 'C\'était comment ?', competence: 'Grammaire', description: 'Introduction à l\'imparfait (description, habitudes passées).' },
          { id: 58, title: 'Passé composé vs Imparfait — Intro', competence: 'Grammaire + CE', description: 'Première distinction PC/Imparfait.' },
          { id: 59, title: 'Révision A2.1', competence: 'Toutes', description: 'Quiz récapitulatif.' },
          { id: 60, title: 'Examen A2.1', competence: 'Toutes', description: 'Badge "Conteur Débutant" débloqué.' },
        ],
      },
      {
        id: 'A2.2', number: 2, title: 'La vie sociale', theme: 'Invitations, sorties, opinions, sentiments',
        level: 'A2', badge: 'Social Butterfly', badgeEmoji: '🦋',
        lessons: [
          { id: 61, title: 'On sort ce soir ?', competence: 'Interaction', description: 'Proposer, accepter, refuser une sortie.' },
          { id: 62, title: 'Qu\'est-ce que tu en penses ?', competence: 'PO', description: 'Donner une opinion simple.' },
          { id: 63, title: 'Les émotions', competence: 'Vocabulaire + CO', description: 'Content, triste, fatigué, surpris, en colère.' },
          { id: 64, title: 'Comparer', competence: 'Grammaire', description: 'Le comparatif (plus… que, moins… que, aussi… que).' },
          { id: 65, title: 'Le superlatif', competence: 'Grammaire', description: 'Le plus, le moins, le meilleur.' },
          { id: 66, title: 'Raconter un film', competence: 'CE + PO', description: 'Résumer un film au passé.' },
          { id: 67, title: 'Écrire un avis en ligne', competence: 'PE', description: 'Rédiger un avis sur un restaurant/hôtel.' },
          { id: 68, title: 'Les pronoms COD', competence: 'Grammaire', description: 'Le, la, les, l\'. Remplacer le nom par le pronom.' },
          { id: 69, title: 'Révision A2.2', competence: 'Toutes', description: 'Quiz récapitulatif.' },
          { id: 70, title: 'Examen A2.2', competence: 'Toutes', description: 'Badge "Social Butterfly" débloqué.' },
        ],
      },
      {
        id: 'A2.3', number: 3, title: 'Le monde du travail', theme: 'Professions, entretien, CV',
        level: 'A2', badge: 'Pro Débutant', badgeEmoji: '💼',
        lessons: [
          { id: 71, title: 'Les métiers', competence: 'Vocabulaire + CE', description: 'Professions courantes (m/f).' },
          { id: 72, title: 'Mon CV en français', competence: 'PE', description: 'Structure d\'un CV simple.' },
          { id: 73, title: 'L\'entretien d\'embauche', competence: 'CO + Interaction', description: 'Se présenter professionnellement.' },
          { id: 74, title: 'Au bureau', competence: 'Vocabulaire', description: 'Objets et actions du bureau.' },
          { id: 75, title: 'Le futur proche', competence: 'Grammaire', description: 'Aller + infinitif (je vais travailler).' },
          { id: 76, title: 'Téléphoner au travail', competence: 'CO + PO', description: 'Laisser un message, prendre un rendez-vous pro.' },
          { id: 77, title: 'Écrire un email professionnel', competence: 'PE', description: 'Formules formelles.' },
          { id: 78, title: 'Les pronoms COI', competence: 'Grammaire', description: 'Lui, leur, me, te.' },
          { id: 79, title: 'Révision A2.3', competence: 'Toutes', description: 'Quiz récapitulatif.' },
          { id: 80, title: 'Examen A2.3', competence: 'Toutes', description: 'Badge "Pro Débutant" débloqué.' },
        ],
      },
      {
        id: 'A2.4', number: 4, title: 'Santé et bien-être', theme: 'Corps, santé, sport, alimentation',
        level: 'A2', badge: 'Bien dans sa peau', badgeEmoji: '💪',
        lessons: [
          { id: 81, title: 'Le corps humain', competence: 'Vocabulaire', description: 'Parties du corps.' },
          { id: 82, title: 'Chez le médecin', competence: 'CO + Interaction', description: 'Décrire ses symptômes.' },
          { id: 83, title: 'Les verbes pronominaux', competence: 'Grammaire', description: 'Se lever, se coucher, se laver.' },
          { id: 84, title: 'Le sport en France', competence: 'CE + CO', description: 'Les sports populaires en France.' },
          { id: 85, title: 'L\'impératif', competence: 'Grammaire', description: 'Donner des conseils/ordres.' },
          { id: 86, title: 'Bien manger', competence: 'Vocabulaire + CE', description: 'L\'alimentation équilibrée. Les repas français.' },
          { id: 87, title: 'À la plage', competence: 'Vocabulaire + Interaction', description: 'Vocabulaire balnéaire. Plage de la Gravette à Antibes.' },
          { id: 88, title: 'Les adverbes de fréquence', competence: 'Grammaire', description: 'Toujours, souvent, parfois, jamais.' },
          { id: 89, title: 'Révision A2.4', competence: 'Toutes', description: 'Quiz récapitulatif.' },
          { id: 90, title: 'Examen A2.4', competence: 'Toutes', description: 'Badge "Bien dans sa peau" débloqué.' },
        ],
      },
      {
        id: 'A2.5', number: 5, title: 'Découvrir la France', theme: 'Géographie, culture, traditions, fêtes',
        level: 'A2', badge: 'Niveau A2 validé', badgeEmoji: '🎓',
        lessons: [
          { id: 91, title: 'Les régions de France', competence: 'CE + Vocabulaire', description: 'Carte interactive de France.' },
          { id: 92, title: 'Les fêtes françaises', competence: 'CO + CE', description: 'Noël, 14 juillet, Toussaint, Pâques.' },
          { id: 93, title: 'La gastronomie française', competence: 'Vocabulaire + CE', description: 'Spécialités régionales.' },
          { id: 94, title: 'PC vs Imparfait — Approfondissement', competence: 'Grammaire', description: 'Distinction approfondie dans des contextes narratifs.' },
          { id: 95, title: 'Raconter un souvenir d\'enfance', competence: 'PO + PE', description: 'Quand j\'étais petit(e)…' },
          { id: 96, title: 'La musique française', competence: 'CO + CE', description: 'Écouter des extraits, identifier le genre.' },
          { id: 97, title: 'Écrire une lettre amicale', competence: 'PE', description: 'Structure d\'une lettre/email amical(e).' },
          { id: 98, title: 'Bilan de communication A2', competence: 'Toutes', description: 'Mise en situation globale.' },
          { id: 99, title: 'Révision finale A2', competence: 'Toutes', description: 'Quiz complet (40 questions).' },
          { id: 100, title: 'EXAMEN FINAL A2', competence: 'Toutes', description: 'Test certifiant. Badge "Niveau A2 validé — Survie" + certificat.' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════
  // NIVEAU B1 — SEUIL
  // ═══════════════════════════════════════════
  {
    level: 'B1',
    title: 'Seuil',
    objective: 'Se débrouiller dans la plupart des situations de voyage. Raconter, exprimer un souhait, donner des raisons.',
    modules: [
      {
        id: 'B1.1', number: 1, title: 'Exprimer son opinion', theme: 'Opinion, subjonctif, médias',
        level: 'B1', badge: 'Penseur Critique', badgeEmoji: '🧠',
        lessons: [
          { id: 101, title: 'Je pense que…', competence: 'PO + Grammaire', description: 'Donner son opinion. Indicatif vs subjonctif (intro).' },
          { id: 102, title: 'Le subjonctif présent — Introduction', competence: 'Grammaire', description: 'Formation du subjonctif. Il faut que, je veux que.' },
          { id: 103, title: 'Débattre poliment', competence: 'Interaction', description: 'Exprimer le désaccord poliment.' },
          { id: 104, title: 'Les médias français', competence: 'CE + CO', description: 'Lire un article simplifié. Écouter un flash info.' },
          { id: 105, title: 'Écrire un essai simple', competence: 'PE', description: 'Structure : introduction, arguments, conclusion. 150 mots.' },
          { id: 106, title: 'Les pronoms relatifs : qui, que, où', competence: 'Grammaire', description: 'Combiner deux phrases avec le bon pronom relatif.' },
          { id: 107, title: 'La presse et les fake news', competence: 'CE + PO', description: 'Identifier une source fiable. Analyser un article.' },
          { id: 108, title: 'Exprimer la cause et la conséquence', competence: 'Grammaire + PE', description: 'Parce que, donc, c\'est pourquoi, grâce à, à cause de.' },
          { id: 109, title: 'Révision B1.1', competence: 'Toutes', description: 'Quiz récapitulatif.' },
          { id: 110, title: 'Examen B1.1', competence: 'Toutes', description: 'Badge "Penseur Critique" débloqué.' },
        ],
      },
      {
        id: 'B1.2', number: 2, title: 'Voyager et se débrouiller', theme: 'Hôtel, voyage, conditionnel, problèmes',
        level: 'B1', badge: 'Globe-Trotter', badgeEmoji: '🌍',
        lessons: [
          { id: 111, title: 'Réserver un hôtel', competence: 'Interaction + PE', description: 'Téléphoner/écrire pour réserver.' },
          { id: 112, title: 'Raconter un voyage', competence: 'PO + PE', description: 'Utiliser les temps du passé de manière fluide.' },
          { id: 113, title: 'Le conditionnel présent', competence: 'Grammaire', description: 'Formation et usage (politesse, hypothèse, souhait).' },
          { id: 114, title: 'Si j\'avais le temps…', competence: 'Grammaire', description: 'L\'hypothèse avec si + imparfait → conditionnel.' },
          { id: 115, title: 'Résoudre un problème', competence: 'Interaction + CO', description: 'Se plaindre poliment.' },
          { id: 116, title: 'Les transports en France', competence: 'CE + CO', description: 'TGV, métro, covoiturage, avion.' },
          { id: 117, title: 'La France d\'outre-mer', competence: 'CE + Vocabulaire', description: 'Guadeloupe, Martinique, Réunion.' },
          { id: 118, title: 'Écrire une réclamation', competence: 'PE', description: 'Rédiger un email de réclamation poli et structuré.' },
          { id: 119, title: 'Révision B1.2', competence: 'Toutes', description: 'Quiz récapitulatif.' },
          { id: 120, title: 'Examen B1.2', competence: 'Toutes', description: 'Badge "Globe-Trotter" débloqué.' },
        ],
      },
      {
        id: 'B1.3', number: 3, title: 'Vie quotidienne avancée', theme: 'Logement, budget, administration',
        level: 'B1', badge: 'Autonome', badgeEmoji: '🏠',
        lessons: [
          { id: 121, title: 'Chercher un logement', competence: 'CE + Interaction', description: 'Lire des annonces immobilières.' },
          { id: 122, title: 'La vie en colocation', competence: 'CO + PO', description: 'Écouter un témoignage. Règles de vie commune.' },
          { id: 123, title: 'Les tâches ménagères', competence: 'Vocabulaire + Grammaire', description: 'Pronoms EN et Y.' },
          { id: 124, title: 'Gérer son budget', competence: 'CE + PE', description: 'Lire un relevé bancaire simplifié.' },
          { id: 125, title: 'Le discours indirect au présent', competence: 'Grammaire', description: 'Il dit que, elle demande si.' },
          { id: 126, title: 'Chez le banquier', competence: 'Interaction + CO', description: 'Ouvrir un compte, demander un prêt.' },
          { id: 127, title: 'Les démarches administratives', competence: 'CE + PE', description: 'Remplir un formulaire officiel.' },
          { id: 128, title: 'La technologie au quotidien', competence: 'Vocabulaire + CE', description: 'Vocabulaire numérique.' },
          { id: 129, title: 'Révision B1.3', competence: 'Toutes', description: 'Quiz récapitulatif.' },
          { id: 130, title: 'Examen B1.3', competence: 'Toutes', description: 'Badge "Autonome" débloqué.' },
        ],
      },
      {
        id: 'B1.4', number: 4, title: 'Études et formation', theme: 'Système éducatif, université, exposé',
        level: 'B1', badge: 'Étudiant Modèle', badgeEmoji: '📚',
        lessons: [
          { id: 131, title: 'Le système éducatif français', competence: 'CE + CO', description: 'École, collège, lycée, université.' },
          { id: 132, title: 'S\'inscrire à l\'université', competence: 'PE + Interaction', description: 'Lettre de motivation, Campus France.' },
          { id: 133, title: 'Le gérondif', competence: 'Grammaire', description: 'En + participe présent.' },
          { id: 134, title: 'Prendre des notes', competence: 'CO + PE', description: 'Écouter un cours → prendre des notes structurées.' },
          { id: 135, title: 'Présenter un exposé', competence: 'PO', description: 'Structure (intro, développement, conclusion).' },
          { id: 136, title: 'Le passif', competence: 'Grammaire', description: 'Formation et usage.' },
          { id: 137, title: 'La vie étudiante en France', competence: 'CE + CO', description: 'Bourses, restos U, associations.' },
          { id: 138, title: 'Rédiger un résumé', competence: 'PE + CE', description: 'Technique du résumé. Résumer en 80 mots.' },
          { id: 139, title: 'Révision B1.4', competence: 'Toutes', description: 'Quiz récapitulatif.' },
          { id: 140, title: 'Examen B1.4', competence: 'Toutes', description: 'Badge "Étudiant Modèle" débloqué.' },
        ],
      },
      {
        id: 'B1.5', number: 5, title: 'Culture et société', theme: 'Environnement, cinéma, art de vivre',
        level: 'B1', badge: 'Niveau B1 validé', badgeEmoji: '🎓',
        lessons: [
          { id: 141, title: 'L\'environnement', competence: 'CE + PO', description: 'Vocabulaire écologique. Débattre sur l\'écologie.' },
          { id: 142, title: 'Le cinéma français', competence: 'CO + CE', description: 'Écouter un extrait de film. Lire une critique.' },
          { id: 143, title: 'L\'art de vivre à la française', competence: 'CE + CO', description: 'La bise, l\'apéro, les terrasses.' },
          { id: 144, title: 'Le subjonctif — Approfondissement', competence: 'Grammaire', description: 'Après les expressions de sentiment, de doute.' },
          { id: 145, title: 'Écrire une critique', competence: 'PE', description: 'Critique de film/livre/restaurant (150-200 mots).' },
          { id: 146, title: 'Les stéréotypes culturels', competence: 'PO + Interaction', description: 'Discuter des stéréotypes. Nuancer.' },
          { id: 147, title: 'La littérature française — Premiers pas', competence: 'CE', description: 'Extraits simplifiés (Le Petit Prince, Les Misérables).' },
          { id: 148, title: 'Bilan de communication B1', competence: 'Toutes', description: 'Débattre, raconter, argumenter, écrire un essai.' },
          { id: 149, title: 'Révision finale B1', competence: 'Toutes', description: 'Quiz complet (40 questions).' },
          { id: 150, title: 'EXAMEN FINAL B1', competence: 'Toutes', description: 'Test certifiant. Badge "Niveau B1 validé — Seuil" + certificat.' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════
  // NIVEAU B2 — AVANCÉ
  // ═══════════════════════════════════════════
  {
    level: 'B2',
    title: 'Avancé',
    objective: 'Comprendre le contenu essentiel de sujets concrets ou abstraits. S\'exprimer de façon claire et détaillée.',
    modules: [
      {
        id: 'B2.1', number: 1, title: 'Argumenter et convaincre', theme: 'Argumentation, conditionnel passé, débat',
        level: 'B2', badge: 'Orateur', badgeEmoji: '🎤',
        lessons: [
          { id: 151, title: 'Structurer un argument', competence: 'PO + PE', description: 'Thèse, antithèse, synthèse. Connecteurs avancés.' },
          { id: 152, title: 'Le conditionnel passé', competence: 'Grammaire', description: 'J\'aurais aimé, il aurait fallu. Exprimer le regret.' },
          { id: 153, title: 'L\'hypothèse irréelle', competence: 'Grammaire', description: 'Si + plus-que-parfait → conditionnel passé.' },
          { id: 154, title: 'Analyser un discours', competence: 'CO + CE', description: 'Écouter un discours. Identifier les techniques de persuasion.' },
          { id: 155, title: 'Rédiger un essai argumentatif', competence: 'PE', description: '250 mots minimum, format DELF B2.' },
          { id: 156, title: 'Le subjonctif passé', competence: 'Grammaire', description: 'Bien qu\'il ait fait, avant qu\'elle soit partie.' },
          { id: 157, title: 'Débat contradictoire', competence: 'PO + Interaction', description: 'Défendre une position, réfuter, concéder.' },
          { id: 158, title: 'Les registres de langue', competence: 'CE + PO', description: 'Familier, courant, soutenu.' },
          { id: 159, title: 'Révision B2.1', competence: 'Toutes', description: 'Quiz récapitulatif.' },
          { id: 160, title: 'Examen B2.1', competence: 'Toutes', description: 'Badge "Orateur" débloqué.' },
        ],
      },
      {
        id: 'B2.2', number: 2, title: 'Le monde professionnel', theme: 'Lettre de motivation, réunion, négociation',
        level: 'B2', badge: 'Manager', badgeEmoji: '👔',
        lessons: [
          { id: 161, title: 'La lettre de motivation avancée', competence: 'PE', description: 'Rédiger une lettre convaincante et personnalisée.' },
          { id: 162, title: 'L\'entretien d\'embauche avancé', competence: 'CO + PO', description: 'Questions pièges, forces/faiblesses.' },
          { id: 163, title: 'Animer une réunion', competence: 'Interaction + PO', description: 'Ouvrir, distribuer la parole, synthétiser, conclure.' },
          { id: 164, title: 'Le discours indirect au passé', competence: 'Grammaire', description: 'Concordance des temps.' },
          { id: 165, title: 'Rédiger un compte-rendu', competence: 'PE + CE', description: 'Notes de réunion → compte-rendu structuré.' },
          { id: 166, title: 'Négocier', competence: 'Interaction', description: 'Proposer, contre-proposer, compromis.' },
          { id: 167, title: 'La culture d\'entreprise française', competence: 'CE + CO', description: 'Hiérarchie, pause déjeuner, congés payés, 35h.' },
          { id: 168, title: 'Les nominalisations', competence: 'Grammaire + PE', description: 'Verbes → noms (augmenter → augmentation).' },
          { id: 169, title: 'Révision B2.2', competence: 'Toutes', description: 'Quiz récapitulatif.' },
          { id: 170, title: 'Examen B2.2', competence: 'Toutes', description: 'Badge "Manager" débloqué.' },
        ],
      },
      {
        id: 'B2.3', number: 3, title: 'Actualités et société', theme: 'Presse, idiomes, politique',
        level: 'B2', badge: 'Citoyen Informé', badgeEmoji: '📰',
        lessons: [
          { id: 171, title: 'L\'actualité française', competence: 'CO + CE', description: 'Journal radio. Article de presse.' },
          { id: 172, title: 'Les expressions idiomatiques', competence: 'Vocabulaire + CE', description: '20 expressions courantes.' },
          { id: 173, title: 'La politique française', competence: 'CE + PO', description: 'Président, Assemblée nationale, Sénat.' },
          { id: 174, title: 'Les doubles pronoms', competence: 'Grammaire', description: 'Je le lui donne, il me l\'a dit.' },
          { id: 175, title: 'Écrire un article de blog', competence: 'PE', description: 'Article de 300 mots sur un sujet de société.' },
          { id: 176, title: 'L\'humour français', competence: 'CO + CE', description: 'Comprendre des blagues, de l\'ironie, du second degré.' },
          { id: 177, title: 'Les relations sociales complexes', competence: 'Interaction', description: 'Reproche, excuses, justification nuancée.' },
          { id: 178, title: 'Le participe présent et l\'adjectif verbal', competence: 'Grammaire', description: 'Différence entre -ant (participe) et -ant (adjectif).' },
          { id: 179, title: 'Révision B2.3', competence: 'Toutes', description: 'Quiz récapitulatif.' },
          { id: 180, title: 'Examen B2.3', competence: 'Toutes', description: 'Badge "Citoyen Informé" débloqué.' },
        ],
      },
      {
        id: 'B2.4', number: 4, title: 'Arts et littérature', theme: 'Littérature, chanson, cinéma d\'auteur',
        level: 'B2', badge: 'Critique Littéraire', badgeEmoji: '🎭',
        lessons: [
          { id: 181, title: 'La littérature française', competence: 'CE', description: 'Extraits de Camus, Maupassant, Prévert.' },
          { id: 182, title: 'Écrire une nouvelle courte', competence: 'PE', description: 'Techniques narratives (description, dialogue, suspense).' },
          { id: 183, title: 'Le passé simple', competence: 'Grammaire', description: 'Reconnaissance à l\'écrit.' },
          { id: 184, title: 'La chanson française', competence: 'CO + CE', description: 'Brel, Piaf, Stromae. Analyser des paroles.' },
          { id: 185, title: 'L\'art contemporain', competence: 'CE + PO', description: 'Décrire une œuvre d\'art.' },
          { id: 186, title: 'Le cinéma d\'auteur', competence: 'CO + CE', description: 'Analyse d\'une séquence filmique.' },
          { id: 187, title: 'Les figures de style', competence: 'CE + PE', description: 'Métaphore, ironie, hyperbole, litote.' },
          { id: 188, title: 'Écrire une critique culturelle', competence: 'PE', description: '300 mots, ton soutenu, argumentation structurée.' },
          { id: 189, title: 'Révision B2.4', competence: 'Toutes', description: 'Quiz récapitulatif.' },
          { id: 190, title: 'Examen B2.4', competence: 'Toutes', description: 'Badge "Critique Littéraire" débloqué.' },
        ],
      },
      {
        id: 'B2.5', number: 5, title: 'Vers la maîtrise', theme: 'Connecteurs, synthèse, francophonie',
        level: 'B2', badge: 'Niveau B2 validé', badgeEmoji: '🎓',
        lessons: [
          { id: 191, title: 'Les connecteurs logiques avancés', competence: 'Grammaire + PE', description: 'En dépit de, quand bien même, d\'autant plus que.' },
          { id: 192, title: 'La synthèse de documents', competence: 'PE + CE', description: '2 documents → synthèse (format DALF).' },
          { id: 193, title: 'Présentation orale formelle', competence: 'PO', description: 'Présenter un sujet complexe pendant 3-5 minutes.' },
          { id: 194, title: 'L\'accord du participe passé — Cas complexes', competence: 'Grammaire', description: 'Avec les pronoms COD antéposés.' },
          { id: 195, title: 'La francophonie', competence: 'CE + CO', description: 'Le français dans le monde.' },
          { id: 196, title: 'Les nuances de sens', competence: 'Vocabulaire', description: 'Synonymes proches mais différents.' },
          { id: 197, title: 'Simulation DELF B2', competence: 'Toutes', description: 'Épreuve blanche complète format DELF B2.' },
          { id: 198, title: 'Bilan de communication B2', competence: 'Toutes', description: 'Négocier, argumenter, rédiger, analyser.' },
          { id: 199, title: 'Révision finale B2', competence: 'Toutes', description: 'Quiz complet (50 questions).' },
          { id: 200, title: 'EXAMEN FINAL B2', competence: 'Toutes', description: 'Test certifiant. Badge "Niveau B2 validé — Avancé" + certificat.' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════
  // NIVEAU C1 — AUTONOME
  // ═══════════════════════════════════════════
  {
    level: 'C1',
    title: 'Autonome',
    objective: 'Comprendre des textes longs et exigeants. S\'exprimer spontanément et couramment. Utiliser la langue de façon souple et efficace.',
    modules: [
      {
        id: 'C1.1', number: 1, title: 'Maîtriser la nuance', theme: 'Temps littéraires, essai, concession avancée',
        level: 'C1', badge: 'Intellectuel', badgeEmoji: '🎩',
        lessons: [
          { id: 201, title: 'Les temps littéraires', competence: 'Grammaire + CE', description: 'Passé simple, passé antérieur, subjonctif imparfait.' },
          { id: 202, title: 'L\'essai philosophique', competence: 'PE', description: 'Rédiger un essai sur un sujet abstrait.' },
          { id: 203, title: 'Comprendre un débat télévisé', competence: 'CO', description: 'Écouter un débat authentique.' },
          { id: 204, title: 'La concession et l\'opposition avancées', competence: 'Grammaire', description: 'Quoique, bien que, encore que, pour autant.' },
          { id: 205, title: 'Le français académique', competence: 'PE + CE', description: 'Style académique, citations, bibliographie.' },
          { id: 206, title: 'L\'argumentation sophistiquée', competence: 'PO', description: 'Réfuter, nuancer, concéder avec subtilité.' },
          { id: 207, title: 'Les registres littéraires', competence: 'CE', description: 'Tragique, comique, satirique, lyrique.' },
          { id: 208, title: 'Rédaction avancée : cohésion textuelle', competence: 'PE', description: 'Anaphores, reprises nominales, thème/rhème.' },
          { id: 209, title: 'Révision C1.1', competence: 'Toutes', description: 'Quiz avancé.' },
          { id: 210, title: 'Examen C1.1', competence: 'Toutes', description: 'Badge "Intellectuel" débloqué.' },
        ],
      },
      {
        id: 'C1.2', number: 2, title: 'Le français professionnel expert', theme: 'Rapport, conférence, juridique, affaires',
        level: 'C1', badge: 'Expert Professionnel', badgeEmoji: '🏛️',
        lessons: [
          { id: 211, title: 'Rédiger un rapport professionnel', competence: 'PE', description: 'Structure, ton, recommandations. 500 mots.' },
          { id: 212, title: 'Présentation conférence', competence: 'PO', description: 'Présenter devant un public expert (10 minutes).' },
          { id: 213, title: 'Le français juridique — Introduction', competence: 'CE + Vocabulaire', description: 'Contrats, clauses, vocabulaire juridique.' },
          { id: 214, title: 'Le français des affaires', competence: 'CE + Interaction', description: 'Négociation commerciale avancée.' },
          { id: 215, title: 'Le discours rapporté complexe', competence: 'Grammaire', description: 'Changements de repères temporels et spatiaux.' },
          { id: 216, title: 'Rédiger un communiqué de presse', competence: 'PE', description: 'Format, ton journalistique, les 5W.' },
          { id: 217, title: 'Le français diplomatique', competence: 'CE + PO', description: 'Euphémismes, formules de politesse extrême.' },
          { id: 218, title: 'Étude de cas complète', competence: 'Toutes', description: 'Analyser → présenter → rédiger un memo.' },
          { id: 219, title: 'Révision C1.2', competence: 'Toutes', description: 'Quiz avancé.' },
          { id: 220, title: 'Examen C1.2', competence: 'Toutes', description: 'Badge "Expert Professionnel" débloqué.' },
        ],
      },
      {
        id: 'C1.3', number: 3, title: 'Culture et civilisation', theme: 'Philosophie, histoire, francophonie',
        level: 'C1', badge: 'Francophile', badgeEmoji: '🗼',
        lessons: [
          { id: 221, title: 'La philosophie française', competence: 'CE + PO', description: 'Descartes, Sartre, Beauvoir, Foucault.' },
          { id: 222, title: 'L\'histoire de France — Grands moments', competence: 'CE + CO', description: 'De la Révolution à la Ve République.' },
          { id: 223, title: 'La francophonie avancée', competence: 'CE + CO', description: 'Littérature africaine, québécoise, suisse romande.' },
          { id: 224, title: 'Les implicites culturels', competence: 'CO + CE', description: 'Comprendre l\'implicite, le non-dit.' },
          { id: 225, title: 'Le système social français', competence: 'CE + PO', description: 'Sécurité sociale, retraites, éducation.' },
          { id: 226, title: 'L\'urbanisme et l\'architecture', competence: 'CE + Vocabulaire', description: 'Haussmann, Le Corbusier, la Promenade des Anglais.' },
          { id: 227, title: 'La gastronomie comme patrimoine', competence: 'CO + CE', description: 'Patrimoine UNESCO, grands chefs.' },
          { id: 228, title: 'Écrire un essai de civilisation', competence: 'PE', description: '400 mots sur un aspect de la culture française.' },
          { id: 229, title: 'Révision C1.3', competence: 'Toutes', description: 'Quiz avancé.' },
          { id: 230, title: 'Examen C1.3', competence: 'Toutes', description: 'Badge "Francophile" débloqué.' },
        ],
      },
      {
        id: 'C1.4', number: 4, title: 'Médias et communication', theme: 'Documentaire, rhétorique, podcast',
        level: 'C1', badge: 'Communicant', badgeEmoji: '📡',
        lessons: [
          { id: 231, title: 'Analyser un documentaire', competence: 'CO + CE', description: 'Regarder un extrait → analyse critique.' },
          { id: 232, title: 'Le journalisme d\'opinion', competence: 'CE + PE', description: 'Éditorial, chronique, billet d\'humeur.' },
          { id: 233, title: 'La rhétorique', competence: 'PO + CE', description: 'Ethos, pathos, logos.' },
          { id: 234, title: 'Les anglicismes et néologismes', competence: 'Vocabulaire + CE', description: 'Évolution de la langue française.' },
          { id: 235, title: 'Rédiger un éditorial', competence: 'PE', description: '350 mots, style journalistique.' },
          { id: 236, title: 'La satire et la caricature', competence: 'CE + CO', description: 'Comprendre l\'humour satirique français.' },
          { id: 237, title: 'Podcast et radio', competence: 'CO + PO', description: 'Écouter un podcast long → résumé structuré.' },
          { id: 238, title: 'La communication de crise', competence: 'Interaction + PE', description: 'Rédiger un communiqué, gérer une interview difficile.' },
          { id: 239, title: 'Révision C1.4', competence: 'Toutes', description: 'Quiz avancé.' },
          { id: 240, title: 'Examen C1.4', competence: 'Toutes', description: 'Badge "Communicant" débloqué.' },
        ],
      },
      {
        id: 'C1.5', number: 5, title: 'Vers l\'excellence', theme: 'Subtilités, DALF C1, variétés du français',
        level: 'C1', badge: 'Niveau C1 validé', badgeEmoji: '🎓',
        lessons: [
          { id: 241, title: 'Les subtilités grammaticales', competence: 'Grammaire', description: 'Ne explétif, subjonctif après superlatif, inversion.' },
          { id: 242, title: 'La traduction littéraire', competence: 'CE + PE', description: 'Traduire un court passage littéraire.' },
          { id: 243, title: 'Le français oral authentique', competence: 'CO', description: 'Comprendre des locuteurs rapides, argot, élisions.' },
          { id: 244, title: 'Rédiger une lettre ouverte', competence: 'PE', description: 'Genre littéraire engagé. J\'accuse (Zola).' },
          { id: 245, title: 'Soutenir une thèse complexe', competence: 'PO', description: 'Présentation argumentée de 10 minutes.' },
          { id: 246, title: 'Simulation DALF C1', competence: 'Toutes', description: 'Épreuve blanche complète format DALF C1.' },
          { id: 247, title: 'Les variétés du français', competence: 'CO + CE', description: 'Accents régionaux, français canadien, africain.' },
          { id: 248, title: 'Bilan de communication C1', competence: 'Toutes', description: 'Mise en situation experte.' },
          { id: 249, title: 'Révision finale C1', competence: 'Toutes', description: 'Quiz complet (50 questions).' },
          { id: 250, title: 'EXAMEN FINAL C1', competence: 'Toutes', description: 'Test certifiant. Badge "Niveau C1 validé — Autonome" + certificat.' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════
  // NIVEAU C2 — MAÎTRISE
  // ═══════════════════════════════════════════
  {
    level: 'C2',
    title: 'Maîtrise',
    objective: 'Comprendre sans effort pratiquement tout. S\'exprimer spontanément, très couramment et de façon précise.',
    modules: [
      {
        id: 'C2.1', number: 1, title: 'L\'excellence linguistique', theme: 'Archaïsmes, stylistique, improvisation',
        level: 'C2', badge: 'Virtuose', badgeEmoji: '🎻',
        lessons: [
          { id: 251, title: 'Les archaïsmes et raretés grammaticales', competence: 'Grammaire + CE', description: 'Subjonctif imparfait actif, concordance littéraire.' },
          { id: 252, title: 'La stylistique avancée', competence: 'PE + CE', description: 'Analyser et imiter le style d\'un auteur.' },
          { id: 253, title: 'Comprendre tout type de discours oral', competence: 'CO', description: 'Conférence, stand-up, plaidoirie.' },
          { id: 254, title: 'Rédiger un mémoire (introduction)', competence: 'PE', description: 'Problématique, plan détaillé, bibliographie.' },
          { id: 255, title: 'Le français soutenu et littéraire', competence: 'PE + CE', description: 'Maîtriser le style soutenu sans être artificiel.' },
          { id: 256, title: 'Improviser un discours', competence: 'PO', description: '5 minutes d\'improvisation structurée.' },
          { id: 257, title: 'Analyse critique d\'un texte philosophique', competence: 'CE + PE', description: 'Lire un extrait → rédiger un commentaire.' },
          { id: 258, title: 'Les registres du français oral', competence: 'CO + PO', description: 'Du verlan à la langue de Molière.' },
          { id: 259, title: 'Révision C2.1', competence: 'Toutes', description: 'Quiz expert.' },
          { id: 260, title: 'Examen C2.1', competence: 'Toutes', description: 'Badge "Virtuose" débloqué.' },
        ],
      },
      {
        id: 'C2.2', number: 2, title: 'Création et expression personnelle', theme: 'Poésie, nouvelle, théâtre, résumé expert',
        level: 'C2', badge: 'Créateur', badgeEmoji: '✍️',
        lessons: [
          { id: 261, title: 'Écrire de la poésie', competence: 'PE', description: 'Versification, rimes, figures de style.' },
          { id: 262, title: 'La nouvelle littéraire', competence: 'PE + CE', description: 'Écrire une nouvelle de 500 mots.' },
          { id: 263, title: 'Le théâtre français', competence: 'CE + PO', description: 'Molière/Ionesco. Mise en voix.' },
          { id: 264, title: 'L\'art du résumé expert', competence: 'PE + CE', description: '1000 mots → 100 mots.' },
          { id: 265, title: 'Convaincre un jury', competence: 'PO + Interaction', description: 'Simulation de grand oral.' },
          { id: 266, title: 'L\'humour et le jeu de mots', competence: 'Vocabulaire + PO', description: 'Calembours, mots d\'esprit.' },
          { id: 267, title: 'La traduction avancée', competence: 'CE + PE', description: 'Traduire texte technique et littéraire.' },
          { id: 268, title: 'Rédiger un discours', competence: 'PE + PO', description: 'Écrire et prononcer un discours de 5 minutes.' },
          { id: 269, title: 'Révision C2.2', competence: 'Toutes', description: 'Quiz expert.' },
          { id: 270, title: 'Examen C2.2', competence: 'Toutes', description: 'Badge "Créateur" débloqué.' },
        ],
      },
      {
        id: 'C2.3', number: 3, title: 'Le français expert', theme: 'Juridique, scientifique, médical, diplomatique',
        level: 'C2', badge: 'Spécialiste', badgeEmoji: '🔬',
        lessons: [
          { id: 271, title: 'Le français juridique avancé', competence: 'CE + PE', description: 'Analyse de contrat, de jurisprudence.' },
          { id: 272, title: 'Le français scientifique', competence: 'CE + PE', description: 'Abstract scientifique → note de synthèse.' },
          { id: 273, title: 'Le français médical', competence: 'Vocabulaire + CE', description: 'Terminologie médicale courante.' },
          { id: 274, title: 'Le français diplomatique avancé', competence: 'PE + Interaction', description: 'Note diplomatique. Négociation multilatérale.' },
          { id: 275, title: 'La sociolinguistique', competence: 'CE + PO', description: 'Variations sociales, langue et pouvoir.' },
          { id: 276, title: 'Le français des médias spécialisés', competence: 'CO + CE', description: 'Podcast économique, scientifique ou juridique.' },
          { id: 277, title: 'Rédiger un article de recherche', competence: 'PE', description: 'Introduction + méthodologie (format académique).' },
          { id: 278, title: 'Interpréter et reformuler', competence: 'CO + PO', description: 'Écouter un discours complexe → reformuler.' },
          { id: 279, title: 'Révision C2.3', competence: 'Toutes', description: 'Quiz expert.' },
          { id: 280, title: 'Examen C2.3', competence: 'Toutes', description: 'Badge "Spécialiste" débloqué.' },
        ],
      },
      {
        id: 'C2.4', number: 4, title: 'La France dans le monde', theme: 'Francophonie, géopolitique, IA, influence',
        level: 'C2', badge: 'Diplomate', badgeEmoji: '🌐',
        lessons: [
          { id: 281, title: 'La francophonie politique', competence: 'CE + PO', description: 'L\'OIF, la politique linguistique française.' },
          { id: 282, title: 'Littérature francophone contemporaine', competence: 'CE + PE', description: 'Auteurs africains, caribéens, maghrébins.' },
          { id: 283, title: 'Les enjeux géopolitiques', competence: 'CE + CO + PO', description: 'La France et l\'Europe, les relations internationales.' },
          { id: 284, title: 'L\'économie française', competence: 'CE + Vocabulaire', description: 'CAC 40, start-up, French Tech.' },
          { id: 285, title: 'Le français et l\'intelligence artificielle', competence: 'CE + PO', description: 'L\'avenir de la langue française à l\'ère numérique.' },
          { id: 286, title: 'Écrire pour influencer', competence: 'PE', description: 'Écriture persuasive, storytelling.' },
          { id: 287, title: 'La diplomatie culturelle', competence: 'CE + PO', description: 'Alliance Française, Institut Français.' },
          { id: 288, title: 'Simulation DALF C2', competence: 'Toutes', description: 'Épreuve blanche complète format DALF C2.' },
          { id: 289, title: 'Révision C2.4', competence: 'Toutes', description: 'Quiz expert.' },
          { id: 290, title: 'Examen C2.4', competence: 'Toutes', description: 'Badge "Diplomate" débloqué.' },
        ],
      },
      {
        id: 'C2.5', number: 5, title: 'La maîtrise absolue', theme: 'Pièges ultimes, conversation, éloquence',
        level: 'C2', badge: 'Maître du Français', badgeEmoji: '👑',
        lessons: [
          { id: 291, title: 'Les pièges ultimes de la langue', competence: 'Grammaire', description: 'Barbarismes, solécismes, pléonasmes.' },
          { id: 292, title: 'L\'art de la conversation française', competence: 'PO + Interaction', description: 'Small talk, art de la table, joute verbale.' },
          { id: 293, title: 'Écrire comme un natif', competence: 'PE', description: 'Rédiger un texte indiscernable d\'un natif cultivé.' },
          { id: 294, title: 'Comprendre l\'implicite absolu', competence: 'CO + CE', description: 'Ironie, sous-entendus, références culturelles.' },
          { id: 295, title: 'La langue française : histoire et évolution', competence: 'CE + PO', description: 'Du latin au français moderne.' },
          { id: 296, title: 'Masterclass de rédaction', competence: 'PE', description: '500 mots de qualité publiable.' },
          { id: 297, title: 'Masterclass d\'éloquence', competence: 'PO', description: 'Discours de 10 minutes filmé et auto-évalué.' },
          { id: 298, title: 'Bilan final C2', competence: 'Toutes', description: 'Épreuve globale ultime.' },
          { id: 299, title: 'Révision finale C2', competence: 'Toutes', description: 'Quiz complet (60 questions).' },
          { id: 300, title: 'EXAMEN FINAL C2', competence: 'Toutes', description: 'Test certifiant. Badge "Maître du Français" + certificat.' },
        ],
      },
    ],
  },
];

// Helper functions
export function getModuleById(moduleId: string): Module | undefined {
  for (const level of curriculum) {
    const mod = level.modules.find(m => m.id === moduleId);
    if (mod) return mod;
  }
  return undefined;
}

export function getLessonById(lessonId: number): { lesson: Lesson; module: Module; level: LevelCurriculum } | undefined {
  for (const level of curriculum) {
    for (const mod of level.modules) {
      const lesson = mod.lessons.find(l => l.id === lessonId);
      if (lesson) return { lesson, module: mod, level };
    }
  }
  return undefined;
}

export function getLevelCurriculum(level: CECRLevel): LevelCurriculum | undefined {
  return curriculum.find(c => c.level === level);
}

export function getTotalLessons(): number {
  return curriculum.reduce((sum, level) => 
    sum + level.modules.reduce((mSum, mod) => mSum + mod.lessons.length, 0), 0
  );
}
