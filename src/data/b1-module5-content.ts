// Interactive lesson content for B1 Module 5: Culture et société (Lessons 141-150)
import type { CourseContent } from './course-content';

export const b1Module5Content: CourseContent[] = [
  // Lesson 141: L'environnement
  {
    courseId: 'lesson-141',
    steps: [
      {
        id: 'L141-1', type: 'lesson', title: 'L\'environnement', characterId: 'marie',
        content: `Parlons de **l'environnement** et de l'écologie en français ! 🌍🌱\n\n📝 **Vocabulaire écologique :**\n- Le réchauffement climatique / le changement climatique\n- La pollution (de l'air, de l'eau, des sols)\n- Les énergies renouvelables (solaire, éolienne)\n- Le tri des déchets / le recyclage\n- L'empreinte carbone\n- Le développement durable\n\n📋 **Les gestes écologiques :**\n- Trier ses déchets\n- Économiser l'eau et l'énergie\n- Utiliser les transports en commun\n- Réduire sa consommation de plastique\n- Acheter local et de saison\n\n🗣️ **Débattre sur l'écologie :**\n- « Je pense qu'il est urgent de protéger l'environnement. »\n- « À mon avis, le recyclage n'est pas suffisant. »\n- « Il faudrait que les gouvernements agissent davantage. »`,
        tip: '💡 La France a interdit les sacs plastiques à usage unique en 2016 — un geste écologique important !'
      },
      {
        id: 'L141-2', type: 'listening', title: 'Écoute — Débat écologique', characterId: 'omar',
        text: 'À Antibes, la mairie a mis en place le tri sélectif et des pistes cyclables. Certains habitants pensent que ce n\'est pas suffisant et qu\'il faudrait interdire les voitures dans le centre-ville. D\'autres estiment que ces mesures sont déjà un bon début.',
        question: 'Que demandent certains habitants ?',
        options: ['Plus de voitures', 'L\'interdiction des voitures dans le centre', 'La construction d\'autoroutes', 'La suppression du tri'],
        correctIndex: 1
      },
      {
        id: 'L141-3', type: 'qcm', title: 'Vocabulaire écologique', characterId: 'elena',
        question: 'Le « tri sélectif » consiste à…',
        options: ['jeter tous les déchets ensemble', 'séparer les déchets par catégorie', 'brûler les déchets', 'enterrer les déchets'],
        correctIndex: 1,
        explanation: 'Le tri sélectif consiste à séparer les déchets (plastique, verre, papier) pour le recyclage.'
      },
      {
        id: 'L141-4', type: 'flashcard', title: 'Vocabulaire de l\'environnement', characterId: 'thomas',
        cards: [
          { front: 'Le réchauffement climatique', back: 'Global warming' },
          { front: 'Les énergies renouvelables', back: 'Renewable energies' },
          { front: 'Le tri des déchets', back: 'Waste sorting' },
          { front: 'L\'empreinte carbone', back: 'Carbon footprint' },
          { front: 'Le développement durable', back: 'Sustainable development' },
          { front: 'La biodiversité', back: 'Biodiversity' },
        ]
      },
      {
        id: 'L141-5', type: 'fill-blank', title: 'Complétez la phrase', characterId: 'fatou',
        sentence: 'Il faudrait que les gouvernements ___ davantage pour l\'environnement.',
        options: ['agissent', 'agissons', 'agir', 'agissez'],
        correctAnswer: 'agissent'
      },
      {
        id: 'L141-6', type: 'drag-drop', title: 'Gestes écologiques', characterId: 'yuki',
        instruction: 'Remettez les gestes du plus simple au plus engagé :',
        items: ['Devenir végétarien', 'Éteindre la lumière', 'Trier ses déchets', 'Utiliser les transports en commun'],
        correctOrder: ['Éteindre la lumière', 'Trier ses déchets', 'Utiliser les transports en commun', 'Devenir végétarien']
      },
      {
        id: 'L141-7', type: 'qcm', title: 'Écologie en France', characterId: 'hans',
        question: 'Depuis quand les sacs plastiques à usage unique sont-ils interdits en France ?',
        options: ['2010', '2014', '2016', '2020'],
        correctIndex: 2,
        explanation: 'Les sacs plastiques à usage unique sont interdits en France depuis 2016.'
      },
      {
        id: 'L141-8', type: 'final-quiz', title: 'Quiz final — L\'environnement', characterId: 'marie',
        questions: [
          { question: 'Le « développement durable » vise à…', options: ['produire plus', 'consommer plus', 'protéger l\'environnement tout en se développant', 'arrêter le progrès'], correctIndex: 2 },
          { question: 'Les « énergies renouvelables » incluent…', options: ['le pétrole', 'le charbon', 'le solaire et l\'éolien', 'le gaz'], correctIndex: 2 },
          { question: '« L\'empreinte carbone » mesure…', options: ['la taille du pied', 'l\'impact sur le climat', 'la vitesse', 'le poids'], correctIndex: 1 },
          { question: 'Le tri sélectif sépare les déchets pour…', options: ['les jeter', 'le recyclage', 'les brûler', 'les enterrer'], correctIndex: 1 },
          { question: '« Il faudrait que… » est suivi du…', options: ['indicatif', 'conditionnel', 'subjonctif', 'infinitif'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 142: Le cinéma français
  {
    courseId: 'lesson-142',
    steps: [
      {
        id: 'L142-1', type: 'lesson', title: 'Le cinéma français', characterId: 'marie',
        content: `Découvrons le **cinéma français**, l'un des plus riches au monde ! 🎬\n\n🎥 **Histoire :**\n- Les frères Lumière : inventeurs du cinéma (1895, Lyon)\n- Premier film projeté : « La Sortie de l'usine Lumière »\n- Le Festival de Cannes (depuis 1946) : plus prestigieux festival au monde\n\n🏆 **Récompenses :**\n- Les César (équivalent des Oscars)\n- La Palme d'Or (Festival de Cannes)\n\n🎬 **Genres populaires :**\n- La comédie (Le Dîner de cons, Intouchables)\n- Le drame (Amour, La Haine)\n- Le film d'auteur (Nouvelle Vague : Godard, Truffaut)\n\n📝 **Vocabulaire du cinéma :**\n- Un réalisateur / une réalisatrice\n- Un acteur / une actrice\n- Un scénario\n- Une bande-annonce\n- La VO (version originale) / la VF (version française)`,
        tip: '💡 Le Festival de Cannes se déroule chaque année en mai, à seulement 20 km d\'Antibes !'
      },
      {
        id: 'L142-2', type: 'listening', title: 'Écoute — Critique de film', characterId: 'lucas',
        text: 'J\'ai vu le film « Intouchables » hier. C\'est une comédie dramatique avec Omar Sy et François Cluzet. Le film raconte l\'histoire d\'un homme riche tétraplégique et de son aide à domicile. C\'est émouvant et drôle en même temps. Je le recommande !',
        question: 'Quel est le genre du film ?',
        options: ['Horreur', 'Science-fiction', 'Comédie dramatique', 'Documentaire'],
        correctIndex: 2
      },
      {
        id: 'L142-3', type: 'qcm', title: 'Histoire du cinéma', characterId: 'elena',
        question: 'Qui a inventé le cinéma ?',
        options: ['Les frères Grimm', 'Les frères Lumière', 'Les frères Wright', 'Les frères Marx'],
        correctIndex: 1,
        explanation: 'Les frères Auguste et Louis Lumière ont inventé le cinématographe à Lyon en 1895.'
      },
      {
        id: 'L142-4', type: 'flashcard', title: 'Vocabulaire du cinéma', characterId: 'thomas',
        cards: [
          { front: 'Un réalisateur / une réalisatrice', back: 'A director' },
          { front: 'Un scénario', back: 'A screenplay / script' },
          { front: 'Une bande-annonce', back: 'A trailer' },
          { front: 'La Palme d\'Or', back: 'Top prize at Cannes Film Festival' },
          { front: 'Les César', back: 'French equivalent of the Oscars' },
          { front: 'La VO (version originale)', back: 'Original version (not dubbed)' },
        ]
      },
      {
        id: 'L142-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        sentence: 'Le Festival de Cannes décerne la ___.',
        options: ['Palme d\'Or', 'Médaille d\'Argent', 'Étoile d\'Or', 'Coupe du Monde'],
        correctAnswer: 'Palme d\'Or'
      },
      {
        id: 'L142-6', type: 'drag-drop', title: 'Chronologie du cinéma français', characterId: 'yuki',
        instruction: 'Remettez dans l\'ordre chronologique :',
        items: ['Intouchables (2011)', 'Frères Lumière (1895)', 'Festival de Cannes (1946)', 'Nouvelle Vague (1960s)'],
        correctOrder: ['Frères Lumière (1895)', 'Festival de Cannes (1946)', 'Nouvelle Vague (1960s)', 'Intouchables (2011)']
      },
      {
        id: 'L142-7', type: 'qcm', title: 'Festivals', characterId: 'omar',
        question: 'Le Festival de Cannes a lieu en…',
        options: ['janvier', 'mars', 'mai', 'septembre'],
        correctIndex: 2,
        explanation: 'Le Festival de Cannes se déroule chaque année en mai.'
      },
      {
        id: 'L142-8', type: 'final-quiz', title: 'Quiz final — Le cinéma français', characterId: 'marie',
        questions: [
          { question: 'Les frères Lumière ont inventé le cinéma en…', options: ['1875', '1895', '1905', '1920'], correctIndex: 1 },
          { question: 'Les César sont l\'équivalent français des…', options: ['Grammy', 'Emmy', 'Oscars', 'BAFTA'], correctIndex: 2 },
          { question: '« VO » signifie…', options: ['Version Optimale', 'Version Originale', 'Vidéo Officielle', 'Version Ouverte'], correctIndex: 1 },
          { question: 'Le Festival de Cannes est à ___ km d\'Antibes.', options: ['5', '10', '20', '50'], correctIndex: 2 },
          { question: 'La « Nouvelle Vague » est un mouvement du cinéma…', options: ['américain', 'italien', 'français', 'japonais'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 143: L'art de vivre à la française
  {
    courseId: 'lesson-143',
    steps: [
      {
        id: 'L143-1', type: 'lesson', title: 'L\'art de vivre à la française', characterId: 'marie',
        content: `Découvrons **l'art de vivre** à la française ! 🥐☕\n\n💋 **La bise :**\n- Se faire la bise = se saluer avec un ou plusieurs bisous sur les joues\n- Le nombre varie selon les régions (1 à 4 !)\n- Sur la Côte d'Azur : généralement 2 bises\n\n🍷 **L'apéro :**\n- L'apéritif avant le repas : un moment social important\n- Boissons : pastis, kir, vin rosé\n- Grignoter : olives, chips, cacahuètes\n\n☕ **Le café :**\n- Les terrasses de café : un art de vivre\n- « Un café » = un expresso\n- « Un café crème » = avec du lait\n\n🍽️ **Les repas :**\n- Le petit-déjeuner (léger : tartine + café)\n- Le déjeuner (12h-14h, souvent copieux)\n- Le dîner (19h-21h)\n- Les Français prennent le temps de manger !`,
        tip: '💡 En France, le déjeuner dure en moyenne 40 minutes — les Français prennent le temps de manger ensemble !'
      },
      {
        id: 'L143-2', type: 'listening', title: 'Écoute — Un apéro à Antibes', characterId: 'omar',
        text: 'Ce soir, nous faisons un apéro sur le port d\'Antibes. Thomas a apporté du rosé de Provence, Elena a préparé des olives et de la tapenade. On se fait la bise pour se dire bonjour. C\'est un moment simple mais très agréable entre amis.',
        question: 'Que boit-on lors de l\'apéro ?',
        options: ['Du lait', 'Du rosé de Provence', 'Du jus d\'orange', 'De l\'eau'],
        correctIndex: 1
      },
      {
        id: 'L143-3', type: 'qcm', title: 'Art de vivre', characterId: 'elena',
        question: 'Combien de bises fait-on généralement sur la Côte d\'Azur ?',
        options: ['1', '2', '3', '4'],
        correctIndex: 1,
        explanation: 'Sur la Côte d\'Azur, on fait généralement 2 bises pour se saluer.'
      },
      {
        id: 'L143-4', type: 'flashcard', title: 'Art de vivre français', characterId: 'thomas',
        cards: [
          { front: 'La bise', back: 'Greeting kiss(es) on the cheek(s)' },
          { front: 'L\'apéro (l\'apéritif)', back: 'Pre-dinner drinks and snacks' },
          { front: 'La terrasse', back: 'Outdoor seating area of a café' },
          { front: 'Le pastis', back: 'Anise-flavored drink typical of Provence' },
          { front: 'La tapenade', back: 'Olive paste, typical of Provence' },
          { front: 'Prendre le temps', back: 'To take one\'s time' },
        ]
      },
      {
        id: 'L143-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        sentence: 'En France, « un café » signifie un ___.',
        options: ['cappuccino', 'latte', 'expresso', 'café glacé'],
        correctAnswer: 'expresso'
      },
      {
        id: 'L143-6', type: 'drag-drop', title: 'Les repas français', characterId: 'yuki',
        instruction: 'Remettez les repas dans l\'ordre chronologique :',
        items: ['Le dîner', 'Le petit-déjeuner', 'Le goûter', 'Le déjeuner'],
        correctOrder: ['Le petit-déjeuner', 'Le déjeuner', 'Le goûter', 'Le dîner']
      },
      {
        id: 'L143-7', type: 'qcm', title: 'Culture française', characterId: 'lucas',
        question: 'Le pastis est typique de…',
        options: ['la Bretagne', 'l\'Alsace', 'la Provence', 'la Normandie'],
        correctIndex: 2,
        explanation: 'Le pastis est la boisson emblématique de la Provence et du Sud de la France.'
      },
      {
        id: 'L143-8', type: 'final-quiz', title: 'Quiz final — L\'art de vivre', characterId: 'marie',
        questions: [
          { question: '« La bise » est…', options: ['un plat', 'un salut avec un bisou', 'une boisson', 'un sport'], correctIndex: 1 },
          { question: 'L\'apéro est un moment…', options: ['stressant', 'social et convivial', 'sportif', 'professionnel'], correctIndex: 1 },
          { question: 'En France, « un café » = …', options: ['un cappuccino', 'un expresso', 'un café glacé', 'un latte'], correctIndex: 1 },
          { question: 'Le déjeuner en France dure en moyenne…', options: ['5 minutes', '15 minutes', '40 minutes', '2 heures'], correctIndex: 2 },
          { question: 'La tapenade est à base de…', options: ['tomates', 'olives', 'fromage', 'viande'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 144: Le subjonctif — Approfondissement
  {
    courseId: 'lesson-144',
    steps: [
      {
        id: 'L144-1', type: 'lesson', title: 'Le subjonctif — Approfondissement', characterId: 'marie',
        content: `Approfondissons le **subjonctif** avec les expressions de sentiment et de doute.\n\n📐 **Après les expressions de sentiment :**\n- Je suis content(e) que + subjonctif\n- Je suis triste que + subjonctif\n- J'ai peur que + subjonctif\n- C'est dommage que + subjonctif\n- Je regrette que + subjonctif\n\n📐 **Après les expressions de doute :**\n- Je doute que + subjonctif\n- Il est peu probable que + subjonctif\n- Il n'est pas certain que + subjonctif\n\n📐 **Après certaines conjonctions :**\n- Bien que + subjonctif (although)\n- Pour que + subjonctif (so that)\n- Avant que + subjonctif (before)\n- À moins que + subjonctif (unless)\n\n⚠️ **Rappel : PAS de subjonctif après :**\n- Je pense que (affirmatif) → indicatif\n- Je sais que → indicatif\n- Il est certain que → indicatif\n- Après que → indicatif`,
        tip: '💡 Le subjonctif exprime toujours une subjectivité : émotion, doute, volonté, possibilité.'
      },
      {
        id: 'L144-2', type: 'listening', title: 'Écoute — Sentiments et subjonctif', characterId: 'lucas',
        text: 'Je suis content que tu puisses venir à Antibes cet été. C\'est dommage que le festival soit déjà complet. J\'ai peur qu\'il fasse mauvais temps. Mais bien que le logement soit cher, je suis sûr que nous passerons un bon moment.',
        question: 'Pourquoi est-il content ?',
        options: ['Le festival n\'est pas complet', 'Son ami peut venir à Antibes', 'Il fait beau', 'Le logement est pas cher'],
        correctIndex: 1
      },
      {
        id: 'L144-3', type: 'qcm', title: 'Subjonctif après sentiment', characterId: 'elena',
        question: '« Je suis triste qu\'elle ___ malade. »',
        options: ['est', 'soit', 'sera', 'était'],
        correctIndex: 1,
        explanation: 'Après une expression de sentiment (je suis triste que) → subjonctif.'
      },
      {
        id: 'L144-4', type: 'flashcard', title: 'Subjonctif avec conjonctions', characterId: 'thomas',
        cards: [
          { front: 'bien que (+ subj.)', back: 'although' },
          { front: 'pour que (+ subj.)', back: 'so that / in order that' },
          { front: 'avant que (+ subj.)', back: 'before' },
          { front: 'à moins que (+ subj.)', back: 'unless' },
          { front: 'afin que (+ subj.)', back: 'in order that (formal)' },
          { front: 'jusqu\'à ce que (+ subj.)', back: 'until' },
        ]
      },
      {
        id: 'L144-5', type: 'fill-blank', title: 'Complétez au subjonctif', characterId: 'fatou',
        sentence: 'Bien qu\'il ___ froid, nous sommes allés à la plage.',
        options: ['fait', 'fasse', 'fera', 'faisait'],
        correctAnswer: 'fasse'
      },
      {
        id: 'L144-6', type: 'drag-drop', title: 'Formez la phrase', characterId: 'yuki',
        instruction: 'Remettez les mots dans l\'ordre :',
        items: ['tu', 'que', 'Je', 'puisses', 'suis content', 'venir'],
        correctOrder: ['Je', 'suis content', 'que', 'tu', 'puisses', 'venir']
      },
      {
        id: 'L144-7', type: 'qcm', title: 'Indicatif ou subjonctif ?', characterId: 'hans',
        question: '« Après que » est suivi de…',
        options: ['le subjonctif', 'l\'indicatif', 'le conditionnel', 'l\'infinitif'],
        correctIndex: 1,
        explanation: '« Après que » est suivi de l\'indicatif (contrairement à « avant que » + subjonctif).'
      },
      {
        id: 'L144-8', type: 'final-quiz', title: 'Quiz final — Subjonctif approfondissement', characterId: 'marie',
        questions: [
          { question: '« Je doute qu\'il ___ raison. »', options: ['a', 'ait', 'aura', 'avait'], correctIndex: 1 },
          { question: '« Bien que » est suivi du…', options: ['indicatif', 'conditionnel', 'subjonctif', 'infinitif'], correctIndex: 2 },
          { question: '« C\'est dommage que tu ___ partir. »', options: ['dois', 'doives', 'devras', 'devais'], correctIndex: 1 },
          { question: '« Pour que » signifie…', options: ['parce que', 'afin que', 'après que', 'pendant que'], correctIndex: 1 },
          { question: '« Je regrette qu\'il ___ absent. »', options: ['est', 'soit', 'sera', 'serait'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 145: Écrire une critique
  {
    courseId: 'lesson-145',
    steps: [
      {
        id: 'L145-1', type: 'lesson', title: 'Écrire une critique', characterId: 'marie',
        content: `Apprenons à **écrire une critique** de film, livre ou restaurant ! ⭐📝\n\n📐 **Structure d'une critique :**\n\n1️⃣ **Présentation** : Titre, auteur/réalisateur, genre, date\n2️⃣ **Résumé** : De quoi ça parle (sans spoiler !)\n3️⃣ **Points positifs** : Ce que vous avez aimé\n4️⃣ **Points négatifs** : Ce que vous avez moins aimé\n5️⃣ **Verdict** : Note et recommandation\n\n📝 **Expressions utiles :**\n\n✅ Positif :\n- « J'ai beaucoup apprécié… »\n- « Ce qui m'a plu, c'est… »\n- « Le point fort est… »\n- « Je recommande vivement… »\n\n❌ Négatif :\n- « J'ai été déçu(e) par… »\n- « Le point faible est… »\n- « Il manque… »\n- « Je ne recommande pas… »`,
        tip: '💡 Une bonne critique est équilibrée : mentionnez les points positifs ET négatifs.'
      },
      {
        id: 'L145-2', type: 'listening', title: 'Écoute — Critique d\'un restaurant', characterId: 'omar',
        text: 'J\'ai dîné au restaurant Le Safranier à Antibes. La cuisine était excellente, surtout le poisson grillé. Le service était rapide et le cadre très agréable avec vue sur la mer. Cependant, les prix sont un peu élevés. Dans l\'ensemble, je recommande ce restaurant. Note : 4 sur 5.',
        question: 'Quel est le point négatif mentionné ?',
        options: ['La nourriture', 'Le service', 'Les prix', 'Le cadre'],
        correctIndex: 2
      },
      {
        id: 'L145-3', type: 'qcm', title: 'Vocabulaire de la critique', characterId: 'elena',
        question: '« J\'ai été déçu(e) par… » exprime…',
        options: ['la satisfaction', 'la déception', 'la surprise', 'la joie'],
        correctIndex: 1,
        explanation: '« Être déçu(e) par » exprime un sentiment négatif, une déception.'
      },
      {
        id: 'L145-4', type: 'flashcard', title: 'Expressions pour la critique', characterId: 'thomas',
        cards: [
          { front: 'J\'ai beaucoup apprécié…', back: 'I really appreciated…' },
          { front: 'Ce qui m\'a plu, c\'est…', back: 'What I liked was…' },
          { front: 'J\'ai été déçu(e) par…', back: 'I was disappointed by…' },
          { front: 'Je recommande vivement', back: 'I highly recommend' },
          { front: 'Le point fort / le point faible', back: 'The strong point / the weak point' },
          { front: 'Dans l\'ensemble', back: 'Overall / On the whole' },
        ]
      },
      {
        id: 'L145-5', type: 'fill-blank', title: 'Complétez la critique', characterId: 'fatou',
        sentence: 'Ce qui m\'a ___, c\'est l\'ambiance chaleureuse du restaurant.',
        options: ['déçu', 'plu', 'manqué', 'ennuyé'],
        correctAnswer: 'plu'
      },
      {
        id: 'L145-6', type: 'drag-drop', title: 'Structure de la critique', characterId: 'yuki',
        instruction: 'Remettez les parties dans l\'ordre :',
        items: ['Verdict', 'Points négatifs', 'Présentation', 'Points positifs', 'Résumé'],
        correctOrder: ['Présentation', 'Résumé', 'Points positifs', 'Points négatifs', 'Verdict']
      },
      {
        id: 'L145-7', type: 'qcm', title: 'Écrire une critique', characterId: 'lucas',
        question: 'Une bonne critique doit être…',
        options: ['uniquement positive', 'uniquement négative', 'équilibrée', 'très courte'],
        correctIndex: 2,
        explanation: 'Une bonne critique est équilibrée : elle mentionne les points positifs ET négatifs.'
      },
      {
        id: 'L145-8', type: 'final-quiz', title: 'Quiz final — La critique', characterId: 'marie',
        questions: [
          { question: '« Je recommande vivement » est…', options: ['négatif', 'très positif', 'neutre', 'indifférent'], correctIndex: 1 },
          { question: 'Une critique doit commencer par…', options: ['le verdict', 'la présentation', 'les points négatifs', 'une blague'], correctIndex: 1 },
          { question: '« J\'ai été déçu » est…', options: ['positif', 'négatif', 'neutre', 'formel'], correctIndex: 1 },
          { question: '« Dans l\'ensemble » signifie…', options: ['en détail', 'globalement', 'partiellement', 'jamais'], correctIndex: 1 },
          { question: 'Dans un résumé de critique, on ne doit PAS…', options: ['présenter le sujet', 'donner son avis', 'faire de spoiler', 'mentionner l\'auteur'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 146: Les stéréotypes culturels
  {
    courseId: 'lesson-146',
    steps: [
      {
        id: 'L146-1', type: 'lesson', title: 'Les stéréotypes culturels', characterId: 'marie',
        content: `Parlons des **stéréotypes culturels** et apprenons à les **nuancer**. 🌍\n\n🇫🇷 **Stéréotypes sur les Français :**\n- Ils portent un béret et une baguette → Vrai pour la baguette (12 milliards par an !), faux pour le béret\n- Ils sont romantiques → Image culturelle, pas toujours réelle\n- Ils sont en grève tout le temps → La France a une tradition de manifestation sociale\n- Ils mangent des cuisses de grenouille → Très rare en réalité !\n\n🗣️ **Nuancer les stéréotypes :**\n- « Certes… mais il faut nuancer… »\n- « C'est vrai en partie, cependant… »\n- « Tous les Français ne sont pas… »\n- « Il y a une part de vérité, mais… »\n- « On ne peut pas généraliser… »\n\n📝 **Vocabulaire :**\n- Un stéréotype / un cliché / un préjugé\n- Généraliser / nuancer\n- La diversité culturelle\n- L'ouverture d'esprit`,
        tip: '💡 Les stéréotypes contiennent parfois une part de vérité, mais il est important de ne jamais généraliser !'
      },
      {
        id: 'L146-2', type: 'listening', title: 'Écoute — Débat sur les clichés', characterId: 'omar',
        text: 'On dit que les Français mangent des cuisses de grenouille tous les jours. C\'est un cliché ! En réalité, c\'est très rare. Par contre, la baguette, c\'est vrai : les Français en achètent des millions chaque jour. On ne peut pas généraliser, mais certains stéréotypes ont une part de vérité.',
        question: 'Quel stéréotype est vrai selon le texte ?',
        options: ['Les cuisses de grenouille', 'Le béret', 'La baguette', 'Les grèves'],
        correctIndex: 2
      },
      {
        id: 'L146-3', type: 'qcm', title: 'Nuancer', characterId: 'elena',
        question: 'Quelle expression permet de nuancer un stéréotype ?',
        options: ['C\'est absolument vrai !', 'Tous les Français sont comme ça !', 'Il y a une part de vérité, mais…', 'C\'est totalement faux !'],
        correctIndex: 2,
        explanation: '« Il y a une part de vérité, mais… » reconnaît une base tout en nuançant.'
      },
      {
        id: 'L146-4', type: 'flashcard', title: 'Vocabulaire des stéréotypes', characterId: 'thomas',
        cards: [
          { front: 'Un stéréotype / un cliché', back: 'A stereotype / a cliché' },
          { front: 'Un préjugé', back: 'A prejudice / bias' },
          { front: 'Généraliser', back: 'To generalize' },
          { front: 'Nuancer', back: 'To qualify / to add nuance' },
          { front: 'L\'ouverture d\'esprit', back: 'Open-mindedness' },
          { front: 'La diversité culturelle', back: 'Cultural diversity' },
        ]
      },
      {
        id: 'L146-5', type: 'fill-blank', title: 'Nuancez le stéréotype', characterId: 'fatou',
        sentence: 'On ne peut pas ___ à partir d\'un seul exemple.',
        options: ['nuancer', 'généraliser', 'accepter', 'refuser'],
        correctAnswer: 'généraliser'
      },
      {
        id: 'L146-6', type: 'drag-drop', title: 'Formez une nuance', characterId: 'yuki',
        instruction: 'Formez la phrase :',
        items: ['il faut nuancer', 'Certes', 'mais', ','],
        correctOrder: ['Certes', ',', 'mais', 'il faut nuancer']
      },
      {
        id: 'L146-7', type: 'qcm', title: 'Stéréotypes', characterId: 'lucas',
        question: 'Combien de baguettes les Français achètent-ils par an ?',
        options: ['1 million', '100 millions', '6 milliards', '12 milliards'],
        correctIndex: 2,
        explanation: 'Les Français consomment environ 6 milliards de baguettes par an !'
      },
      {
        id: 'L146-8', type: 'final-quiz', title: 'Quiz final — Les stéréotypes', characterId: 'marie',
        questions: [
          { question: 'Un « préjugé » est…', options: ['un fait vérifié', 'une opinion préconçue', 'une certitude', 'une blague'], correctIndex: 1 },
          { question: '« Nuancer » signifie…', options: ['exagérer', 'ajouter de la complexité', 'simplifier', 'ignorer'], correctIndex: 1 },
          { question: 'Les cuisses de grenouille en France sont…', options: ['quotidiennes', 'très rares', 'obligatoires', 'interdites'], correctIndex: 1 },
          { question: '« On ne peut pas généraliser » signifie…', options: ['tout est vrai', 'il ne faut pas mettre tout le monde dans le même groupe', 'rien n\'est vrai', 'il faut simplifier'], correctIndex: 1 },
          { question: '« Certes… mais… » sert à…', options: ['affirmer', 'nuancer', 'contredire totalement', 'conclure'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 147: La littérature française
  {
    courseId: 'lesson-147',
    steps: [
      {
        id: 'L147-1', type: 'lesson', title: 'La littérature française — Premiers pas', characterId: 'marie',
        content: `Découvrons quelques **chefs-d'œuvre** de la littérature française ! 📚\n\n📖 **Œuvres incontournables :**\n\n🌹 **Le Petit Prince** (Antoine de Saint-Exupéry, 1943)\n- « L'essentiel est invisible pour les yeux. »\n- 3e livre le plus traduit au monde\n\n📕 **Les Misérables** (Victor Hugo, 1862)\n- L'histoire de Jean Valjean, un ancien bagnard\n- Un roman social sur la pauvreté et la justice\n\n📗 **L'Étranger** (Albert Camus, 1942)\n- « Aujourd'hui, maman est morte. »\n- Un roman philosophique (l'absurde)\n\n📘 **Les Trois Mousquetaires** (Alexandre Dumas, 1844)\n- « Un pour tous, tous pour un ! »\n- Roman d'aventures historique\n\n📝 **Vocabulaire littéraire :**\n- Un roman / une nouvelle / un conte\n- Un auteur / un écrivain\n- Un personnage / un héros\n- L'intrigue / le dénouement`,
        tip: '💡 « Le Petit Prince » est le livre français le plus traduit au monde — dans plus de 300 langues !'
      },
      {
        id: 'L147-2', type: 'listening', title: 'Écoute — Le Petit Prince', characterId: 'lucas',
        text: 'Le Petit Prince est un conte poétique écrit par Antoine de Saint-Exupéry en 1943. C\'est l\'histoire d\'un petit garçon qui vit sur une minuscule planète. Il voyage de planète en planète et rencontre des personnages étranges. La phrase la plus célèbre est : « L\'essentiel est invisible pour les yeux. »',
        question: 'Qui a écrit Le Petit Prince ?',
        options: ['Victor Hugo', 'Albert Camus', 'Antoine de Saint-Exupéry', 'Alexandre Dumas'],
        correctIndex: 2
      },
      {
        id: 'L147-3', type: 'qcm', title: 'Littérature française', characterId: 'elena',
        question: '« Un pour tous, tous pour un » vient de…',
        options: ['Le Petit Prince', 'Les Misérables', 'L\'Étranger', 'Les Trois Mousquetaires'],
        correctIndex: 3,
        explanation: 'Cette devise célèbre est celle des Trois Mousquetaires d\'Alexandre Dumas.'
      },
      {
        id: 'L147-4', type: 'flashcard', title: 'Littérature essentielle', characterId: 'thomas',
        cards: [
          { front: 'Le Petit Prince', back: 'Saint-Exupéry (1943) — Conte poétique' },
          { front: 'Les Misérables', back: 'Victor Hugo (1862) — Roman social' },
          { front: 'L\'Étranger', back: 'Albert Camus (1942) — Roman philosophique' },
          { front: 'Les Trois Mousquetaires', back: 'Alexandre Dumas (1844) — Roman d\'aventures' },
          { front: 'Un roman', back: 'A novel' },
          { front: 'L\'intrigue', back: 'The plot' },
        ]
      },
      {
        id: 'L147-5', type: 'fill-blank', title: 'Citations célèbres', characterId: 'fatou',
        sentence: '« L\'essentiel est ___ pour les yeux. »',
        options: ['visible', 'invisible', 'important', 'beau'],
        correctAnswer: 'invisible'
      },
      {
        id: 'L147-6', type: 'drag-drop', title: 'Associez l\'œuvre et l\'auteur', characterId: 'yuki',
        instruction: 'Remettez dans l\'ordre chronologique de publication :',
        items: ['L\'Étranger (1942)', 'Les Trois Mousquetaires (1844)', 'Le Petit Prince (1943)', 'Les Misérables (1862)'],
        correctOrder: ['Les Trois Mousquetaires (1844)', 'Les Misérables (1862)', 'L\'Étranger (1942)', 'Le Petit Prince (1943)']
      },
      {
        id: 'L147-7', type: 'qcm', title: 'Culture littéraire', characterId: 'omar',
        question: 'Le Petit Prince est traduit dans combien de langues ?',
        options: ['50', '100', '200', 'plus de 300'],
        correctIndex: 3,
        explanation: 'Le Petit Prince est traduit dans plus de 300 langues, c\'est le 3e livre le plus traduit au monde.'
      },
      {
        id: 'L147-8', type: 'final-quiz', title: 'Quiz final — La littérature', characterId: 'marie',
        questions: [
          { question: 'Qui a écrit Les Misérables ?', options: ['Camus', 'Hugo', 'Dumas', 'Saint-Exupéry'], correctIndex: 1 },
          { question: '« L\'Étranger » est un roman…', options: ['d\'aventures', 'romantique', 'philosophique', 'policier'], correctIndex: 2 },
          { question: 'Le Petit Prince vit sur…', options: ['la Terre', 'la Lune', 'une petite planète', 'Mars'], correctIndex: 2 },
          { question: 'Un « conte » est…', options: ['un film', 'une histoire courte souvent merveilleuse', 'un article', 'un poème'], correctIndex: 1 },
          { question: '« L\'intrigue » d\'un roman est…', options: ['le titre', 'l\'auteur', 'l\'histoire / le scénario', 'la couverture'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 148: Bilan de communication B1
  {
    courseId: 'lesson-148',
    steps: [
      {
        id: 'L148-1', type: 'lesson', title: 'Bilan de communication B1', characterId: 'marie',
        content: `Faisons le **bilan** de vos compétences de communication B1 ! 🎯\n\n🗣️ **Vous savez maintenant :**\n\n✅ **Exprimer votre opinion** et débattre poliment\n✅ **Raconter** un voyage, une expérience au passé\n✅ **Faire des hypothèses** avec SI\n✅ **Résoudre un problème** et vous plaindre poliment\n✅ **Rédiger** des emails formels et des essais\n✅ **Présenter un exposé** structuré\n✅ **Comprendre** les médias et la culture française\n✅ **Nuancer** vos propos avec le subjonctif\n\n📐 **Points de grammaire maîtrisés :**\n- Le subjonctif (introduction + approfondissement)\n- Le conditionnel présent\n- Les hypothèses avec SI\n- Le gérondif\n- La voix passive\n- Le discours indirect\n- Les pronoms relatifs (qui, que, où)\n- Les pronoms EN et Y`,
        tip: '💡 Vous êtes au niveau B1 « Seuil » : vous pouvez vous débrouiller dans la plupart des situations de la vie quotidienne en français !'
      },
      {
        id: 'L148-2', type: 'qcm', title: 'Bilan — Opinion', characterId: 'elena',
        question: '« À mon avis, il ___ agir maintenant. »',
        options: ['faut', 'faudrait', 'a fallu', 'fallait'],
        correctIndex: 1,
        explanation: 'Le conditionnel « faudrait » exprime un souhait ou une recommandation nuancée.'
      },
      {
        id: 'L148-3', type: 'fill-blank', title: 'Bilan — Hypothèse', characterId: 'fatou',
        sentence: 'Si je ___ en France, je visiterais tous les musées.',
        options: ['vis', 'vivais', 'vivrais', 'vivrai'],
        correctAnswer: 'vivais'
      },
      {
        id: 'L148-4', type: 'qcm', title: 'Bilan — Subjonctif', characterId: 'lucas',
        question: '« Bien qu\'il ___ froid, nous sortons. »',
        options: ['fait', 'fasse', 'fera', 'faisait'],
        correctIndex: 1,
        explanation: '« Bien que » + subjonctif.'
      },
      {
        id: 'L148-5', type: 'fill-blank', title: 'Bilan — Gérondif', characterId: 'fatou',
        sentence: 'J\'apprends le français ___ des podcasts.',
        options: ['en écoutant', 'écouter', 'écouté', 'en écouter'],
        correctAnswer: 'en écoutant'
      },
      {
        id: 'L148-6', type: 'drag-drop', title: 'Bilan — Voix passive', characterId: 'yuki',
        instruction: 'Transformez au passif :',
        items: ['par Marie', 'Le gâteau', 'est préparé'],
        correctOrder: ['Le gâteau', 'est préparé', 'par Marie']
      },
      {
        id: 'L148-7', type: 'qcm', title: 'Bilan — Culture', characterId: 'omar',
        question: 'Le Festival de Cannes récompense avec…',
        options: ['un Oscar', 'un César', 'une Palme d\'Or', 'un Grammy'],
        correctIndex: 2,
        explanation: 'La Palme d\'Or est la plus haute récompense du Festival de Cannes.'
      },
      {
        id: 'L148-8', type: 'final-quiz', title: 'Quiz bilan B1', characterId: 'marie',
        questions: [
          { question: '« Je ne pense pas qu\'il ___ raison. »', options: ['a', 'ait', 'aura', 'avait'], correctIndex: 1 },
          { question: '« Si j\'avais le temps, je ___ . »', options: ['voyage', 'voyagerais', 'voyagerai', 'voyageais'], correctIndex: 1 },
          { question: '« Il dit qu\'il ___ fatigué. » (discours indirect)', options: ['est', 'soit', 'sera', 'était'], correctIndex: 0 },
          { question: '« En travaillant » est un…', options: ['infinitif', 'subjonctif', 'gérondif', 'conditionnel'], correctIndex: 2 },
          { question: '« Les Misérables » a été écrit par…', options: ['Camus', 'Dumas', 'Hugo', 'Saint-Exupéry'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 149: Révision finale B1
  {
    courseId: 'lesson-149',
    steps: [
      {
        id: 'L149-1', type: 'lesson', title: 'Révision finale B1', characterId: 'marie',
        content: `Révision complète du niveau B1 ! 📚🧠\n\nTous les modules en résumé :\n\n🧠 **B1.1** : Opinion, subjonctif, débat, médias, essai, pronoms relatifs, cause/conséquence\n\n🌍 **B1.2** : Hôtel, voyage, conditionnel, hypothèses SI, réclamation, transports, outre-mer\n\n🏠 **B1.3** : Logement, colocation, EN/Y, budget, discours indirect, administration, technologie\n\n📚 **B1.4** : Éducation, université, gérondif, notes, exposé, passif, vie étudiante, résumé\n\n🎨 **B1.5** : Environnement, cinéma, art de vivre, subjonctif avancé, critique, stéréotypes, littérature`,
        tip: '💡 Ce quiz complet couvre TOUT le niveau B1. Prenez votre temps !'
      },
      {
        id: 'L149-2', type: 'qcm', title: 'Révision 1', characterId: 'elena',
        question: '« Il faut que je ___ mes devoirs. »',
        options: ['fais', 'fasse', 'ferai', 'faisais'],
        correctIndex: 1,
        explanation: 'Il faut que + subjonctif.'
      },
      {
        id: 'L149-3', type: 'fill-blank', title: 'Révision 2', characterId: 'fatou',
        sentence: 'Si nous ___ riches, nous achèterions un bateau.',
        options: ['sommes', 'étions', 'serions', 'serons'],
        correctAnswer: 'étions'
      },
      {
        id: 'L149-4', type: 'qcm', title: 'Révision 3', characterId: 'lucas',
        question: '« Tu veux du pain ? — Oui, j\'___ veux bien. »',
        options: ['y', 'en', 'le', 'la'],
        correctIndex: 1,
        explanation: 'Du pain = de + nom → EN.'
      },
      {
        id: 'L149-5', type: 'fill-blank', title: 'Révision 4', characterId: 'fatou',
        sentence: 'Ce tableau ___ par un artiste célèbre.',
        options: ['a peint', 'a été peint', 'peint', 'est peindre'],
        correctAnswer: 'a été peint'
      },
      {
        id: 'L149-6', type: 'qcm', title: 'Révision 5', characterId: 'omar',
        question: '« Le Petit Prince » a été écrit par…',
        options: ['Victor Hugo', 'Albert Camus', 'Saint-Exupéry', 'Alexandre Dumas'],
        correctIndex: 2,
        explanation: 'Antoine de Saint-Exupéry a écrit Le Petit Prince en 1943.'
      },
      {
        id: 'L149-7', type: 'drag-drop', title: 'Révision 6', characterId: 'yuki',
        instruction: 'Formez l\'hypothèse :',
        items: ['je voyagerais', 'Si', ',', 'j\'avais le temps'],
        correctOrder: ['Si', 'j\'avais le temps', ',', 'je voyagerais']
      },
      {
        id: 'L149-8', type: 'final-quiz', title: 'Quiz de révision finale B1', characterId: 'marie',
        questions: [
          { question: '« Bien que » est suivi du…', options: ['indicatif', 'conditionnel', 'subjonctif', 'infinitif'], correctIndex: 2 },
          { question: 'Le gérondif de « être » est…', options: ['en essant', 'en étant', 'en soyant', 'en êtant'], correctIndex: 1 },
          { question: '« Cordialement » termine un email…', options: ['amical', 'formel', 'drôle', 'privé'], correctIndex: 1 },
          { question: 'Les frères Lumière ont inventé le cinéma en…', options: ['1885', '1895', '1905', '1915'], correctIndex: 1 },
          { question: '« Nuancer » signifie…', options: ['exagérer', 'simplifier', 'ajouter de la complexité', 'supprimer'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 150: EXAMEN FINAL B1
  {
    courseId: 'lesson-150',
    steps: [
      {
        id: 'L150-1', type: 'lesson', title: 'EXAMEN FINAL B1 — Niveau B1 validé 🎓', characterId: 'marie',
        content: `Bienvenue à l'**EXAMEN FINAL** du niveau B1 !\n\n🎓 **Ce test certifiant évalue TOUTES les compétences B1 :**\n\n- Expression de l'opinion et débat\n- Subjonctif (introduction + approfondissement)\n- Conditionnel et hypothèses\n- Voyage et résolution de problèmes\n- Vie quotidienne avancée (logement, budget, admin)\n- Études et formation\n- Culture et société française\n- Littérature et cinéma\n\n⏱️ Cet examen comporte 8 questions couvrant l'ensemble du niveau.\n\n🏆 **Récompense :** Badge « Niveau B1 validé — Seuil » + certificat\n\nBonne chance ! 🍀`,
        tip: '💡 C\'est le grand examen ! Prenez votre temps et faites confiance à vos connaissances.'
      },
      {
        id: 'L150-2', type: 'qcm', title: 'Examen Final — Q1', characterId: 'marie',
        question: '« Je doute qu\'elle ___ venir. »',
        options: ['peut', 'puisse', 'pourra', 'pouvait'],
        correctIndex: 1,
        explanation: 'Après « je doute que » → subjonctif.'
      },
      {
        id: 'L150-3', type: 'fill-blank', title: 'Examen Final — Q2', characterId: 'marie',
        sentence: 'Si j\'___ le temps, je visiterais tous les musées de la Côte d\'Azur.',
        options: ['ai', 'avais', 'aurais', 'aurai'],
        correctAnswer: 'avais'
      },
      {
        id: 'L150-4', type: 'qcm', title: 'Examen Final — Q3', characterId: 'marie',
        question: '« La lettre ___ par le directeur. » (passif, passé composé)',
        options: ['a écrit', 'a été écrite', 'est écrivant', 'écrit'],
        correctIndex: 1,
        explanation: 'Passé composé passif = a été + participe passé (accordé avec le sujet féminin).'
      },
      {
        id: 'L150-5', type: 'fill-blank', title: 'Examen Final — Q4', characterId: 'marie',
        sentence: 'J\'ai appris le français ___ des séries en VO.',
        options: ['en regardant', 'regarder', 'regardé', 'en regarder'],
        correctAnswer: 'en regardant'
      },
      {
        id: 'L150-6', type: 'qcm', title: 'Examen Final — Q5', characterId: 'marie',
        question: '« Il dit ___ il est fatigué. » (discours indirect)',
        options: ['si', 'qu\'', 'de', 'où'],
        correctIndex: 1,
        explanation: 'Pour rapporter une affirmation : il dit que → qu\'.'
      },
      {
        id: 'L150-7', type: 'drag-drop', title: 'Examen Final — Q6', characterId: 'marie',
        instruction: 'Formez une phrase avec « bien que » :',
        items: ['il fasse froid', 'Bien que', 'nous sortons', ','],
        correctOrder: ['Bien que', 'il fasse froid', ',', 'nous sortons']
      },
      {
        id: 'L150-8', type: 'final-quiz', title: 'EXAMEN FINAL B1 — Certification', characterId: 'marie',
        questions: [
          { question: '« Serait-il ___ de m\'aider ? » (poli)', options: ['bien', 'possible', 'bon', 'normal'], correctIndex: 1 },
          { question: '« Tu vas à Paris ? — Oui, j\' ___ vais. »', options: ['en', 'y', 'le', 'la'], correctIndex: 1 },
          { question: 'Le Festival de Cannes décerne la…', options: ['Médaille d\'Or', 'Palme d\'Or', 'Étoile d\'Or', 'Couronne d\'Or'], correctIndex: 1 },
          { question: '« L\'essentiel est invisible pour les yeux » est de…', options: ['Hugo', 'Camus', 'Saint-Exupéry', 'Dumas'], correctIndex: 2 },
          { question: 'Après « si », on ne met jamais…', options: ['le présent', 'l\'imparfait', 'le conditionnel', 'l\'indicatif'], correctIndex: 2 },
        ]
      }
    ]
  },
];
