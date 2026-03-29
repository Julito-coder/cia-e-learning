// Interactive lesson content for B1 Module 4: Études et formation (Lessons 131-140)
import type { CourseContent } from './course-content';

export const b1Module4Content: CourseContent[] = [
  // Lesson 131: Le système éducatif français
  {
    courseId: 'lesson-131',
    steps: [
      {
        id: 'L131-1', type: 'lesson', title: 'Le système éducatif français', characterId: 'marie',
        content: `Découvrons le **système éducatif français** ! 🎓\n\n📚 **Les étapes :**\n\n1️⃣ **École maternelle** (3-6 ans)\n- Petite, moyenne, grande section\n\n2️⃣ **École élémentaire** (6-11 ans)\n- CP, CE1, CE2, CM1, CM2\n\n3️⃣ **Collège** (11-15 ans)\n- 6e, 5e, 4e, 3e → Diplôme : le Brevet\n\n4️⃣ **Lycée** (15-18 ans)\n- 2nde, 1ère, Terminale → Diplôme : le Baccalauréat (le Bac)\n- Lycée général, technologique ou professionnel\n\n5️⃣ **Enseignement supérieur** :\n- L'université (Licence, Master, Doctorat = LMD)\n- Les Grandes Écoles (ENA, HEC, Polytechnique)\n- Les BTS / IUT (formations courtes)\n\n📝 **Particularités :**\n- L'école est obligatoire de 3 à 16 ans\n- L'université publique est quasi gratuite (~170€/an)\n- Le Bac est un examen national`,
        tip: '💡 Le système LMD (Licence-Master-Doctorat) est harmonisé en Europe grâce au processus de Bologne.'
      },
      {
        id: 'L131-2', type: 'listening', title: 'Écoute — L\'école en France', characterId: 'omar',
        text: 'En France, les enfants vont à l\'école maternelle dès 3 ans. Ensuite, il y a l\'école élémentaire pendant 5 ans. Au collège, les élèves passent le Brevet en 3e. Puis au lycée, ils préparent le Baccalauréat. Après le Bac, ils peuvent aller à l\'université ou dans une Grande École.',
        question: 'Quel examen passe-t-on à la fin du collège ?',
        options: ['Le Bac', 'Le Brevet', 'La Licence', 'Le Master'],
        correctIndex: 1
      },
      {
        id: 'L131-3', type: 'qcm', title: 'Système éducatif', characterId: 'elena',
        question: 'Le Baccalauréat se passe à la fin du…',
        options: ['collège', 'lycée', 'université', 'école élémentaire'],
        correctIndex: 1,
        explanation: 'Le Baccalauréat (Bac) est l\'examen de fin d\'études secondaires, passé en Terminale au lycée.'
      },
      {
        id: 'L131-4', type: 'flashcard', title: 'Vocabulaire de l\'éducation', characterId: 'thomas',
        cards: [
          { front: 'Le Baccalauréat (le Bac)', back: 'French high school diploma (end of lycée)' },
          { front: 'Le Brevet', back: 'French middle school diploma (end of collège)' },
          { front: 'LMD', back: 'Licence-Master-Doctorat system' },
          { front: 'Une Grande École', back: 'Elite French higher education institution' },
          { front: 'Le collège', back: 'Middle school (ages 11-15)' },
          { front: 'Le lycée', back: 'High school (ages 15-18)' },
        ]
      },
      {
        id: 'L131-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        sentence: 'En France, l\'école est obligatoire de 3 à ___ ans.',
        options: ['14', '15', '16', '18'],
        correctAnswer: '16'
      },
      {
        id: 'L131-6', type: 'drag-drop', title: 'Ordre du système éducatif', characterId: 'yuki',
        instruction: 'Remettez dans l\'ordre chronologique :',
        items: ['Lycée', 'École maternelle', 'Collège', 'École élémentaire', 'Université'],
        correctOrder: ['École maternelle', 'École élémentaire', 'Collège', 'Lycée', 'Université']
      },
      {
        id: 'L131-7', type: 'qcm', title: 'Enseignement supérieur', characterId: 'hans',
        question: 'L\'université publique en France coûte environ…',
        options: ['5 000€/an', '10 000€/an', '170€/an', '1 000€/an'],
        correctIndex: 2,
        explanation: 'L\'université publique française est quasi gratuite : environ 170€ par an en Licence.'
      },
      {
        id: 'L131-8', type: 'final-quiz', title: 'Quiz final — Le système éducatif', characterId: 'marie',
        questions: [
          { question: 'Le Bac se passe en classe de…', options: ['3e', 'Seconde', 'Première', 'Terminale'], correctIndex: 3 },
          { question: 'Le collège accueille les élèves de…', options: ['3 à 6 ans', '6 à 11 ans', '11 à 15 ans', '15 à 18 ans'], correctIndex: 2 },
          { question: 'LMD signifie…', options: ['Langue Maternelle Diplômante', 'Licence Master Doctorat', 'Lycée Moderne Diplômant', 'Lecture Mathématiques Dessin'], correctIndex: 1 },
          { question: 'Une « Grande École » est…', options: ['une grande école primaire', 'une institution d\'élite', 'une université publique', 'un lycée privé'], correctIndex: 1 },
          { question: 'L\'école est obligatoire dès l\'âge de…', options: ['2 ans', '3 ans', '5 ans', '6 ans'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 132: S'inscrire à l'université
  {
    courseId: 'lesson-132',
    steps: [
      {
        id: 'L132-1', type: 'lesson', title: 'S\'inscrire à l\'université', characterId: 'marie',
        content: `Comment **s'inscrire à l'université** en France ? 📝\n\n📋 **Pour les étudiants étrangers :**\n- Passer par **Campus France** (demande de visa étudiant)\n- Procédure DAP (Demande d'Admission Préalable) pour la Licence\n- TCF ou DELF/DALF pour prouver le niveau de français\n\n📋 **Pour les lycéens français :**\n- S'inscrire sur **Parcoursup** (plateforme nationale)\n- Formuler des vœux (max 10)\n- Rédiger un CV et une lettre de motivation\n\n📝 **La lettre de motivation :**\n1. Présentation personnelle\n2. Motivation pour la formation\n3. Projet professionnel\n4. Qualités et expériences\n5. Formule de politesse\n\n💰 **Bourses et aides :**\n- Bourse du CROUS (selon les revenus)\n- Aide au logement (CAF/APL)\n- Bourse d'excellence pour les internationaux`,
        tip: '💡 Le DELF B2 est souvent le niveau minimum requis pour s\'inscrire dans une université française.'
      },
      {
        id: 'L132-2', type: 'listening', title: 'Écoute — Inscription universitaire', characterId: 'lucas',
        text: 'Pour m\'inscrire à l\'université de Nice, j\'ai d\'abord passé par Campus France dans mon pays. J\'ai passé le TCF pour prouver mon niveau de français. Ensuite, j\'ai envoyé mon dossier avec ma lettre de motivation et mes diplômes. J\'ai aussi demandé une bourse au CROUS.',
        question: 'Par quelle plateforme l\'étudiant est-il passé ?',
        options: ['Parcoursup', 'Campus France', 'Le CROUS', 'La CAF'],
        correctIndex: 1
      },
      {
        id: 'L132-3', type: 'qcm', title: 'Inscription universitaire', characterId: 'elena',
        question: 'Parcoursup est utilisé par…',
        options: ['les étudiants étrangers', 'les lycéens français', 'les professeurs', 'les entreprises'],
        correctIndex: 1,
        explanation: 'Parcoursup est la plateforme d\'admission post-bac pour les lycéens français.'
      },
      {
        id: 'L132-4', type: 'flashcard', title: 'Vocabulaire universitaire', characterId: 'thomas',
        cards: [
          { front: 'Campus France', back: 'Agency for international student applications' },
          { front: 'Parcoursup', back: 'French national university application platform' },
          { front: 'Le CROUS', back: 'Student welfare organization (housing, meals, scholarships)' },
          { front: 'Le DELF / DALF', back: 'French language diplomas' },
          { front: 'Une lettre de motivation', back: 'A cover letter / motivation letter' },
          { front: 'Un vœu (Parcoursup)', back: 'A wish / choice (application)' },
        ]
      },
      {
        id: 'L132-5', type: 'fill-blank', title: 'Complétez la phrase', characterId: 'fatou',
        sentence: 'Pour prouver mon niveau de français, j\'ai passé le ___.',
        options: ['Bac', 'DELF', 'Brevet', 'BTS'],
        correctAnswer: 'DELF'
      },
      {
        id: 'L132-6', type: 'drag-drop', title: 'Étapes de l\'inscription', characterId: 'yuki',
        instruction: 'Remettez les étapes dans l\'ordre :',
        items: ['Recevoir l\'acceptation', 'Passer le test de français', 'S\'inscrire sur Campus France', 'Envoyer le dossier'],
        correctOrder: ['S\'inscrire sur Campus France', 'Passer le test de français', 'Envoyer le dossier', 'Recevoir l\'acceptation']
      },
      {
        id: 'L132-7', type: 'qcm', title: 'Aides financières', characterId: 'hans',
        question: 'Le CROUS gère…',
        options: ['les transports', 'les bourses étudiantes et les restaurants universitaires', 'les écoles primaires', 'les musées'],
        correctIndex: 1,
        explanation: 'Le CROUS s\'occupe des bourses, des logements étudiants (résidences) et des restaurants universitaires (restos U).'
      },
      {
        id: 'L132-8', type: 'final-quiz', title: 'Quiz final — S\'inscrire à l\'université', characterId: 'marie',
        questions: [
          { question: 'Campus France aide les étudiants…', options: ['français', 'européens', 'internationaux', 'de maternelle'], correctIndex: 2 },
          { question: 'Parcoursup permet de formuler jusqu\'à…', options: ['5 vœux', '10 vœux', '15 vœux', '20 vœux'], correctIndex: 1 },
          { question: 'Le DELF B2 est souvent requis pour…', options: ['travailler', 's\'inscrire à l\'université', 'voyager', 'voter'], correctIndex: 1 },
          { question: 'Le CROUS propose des…', options: ['voyages', 'bourses et logements', 'cours de sport', 'examens'], correctIndex: 1 },
          { question: 'APL signifie Aide Personnalisée au…', options: ['Loisir', 'Logement', 'Livre', 'Lycée'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 133: Le gérondif
  {
    courseId: 'lesson-133',
    steps: [
      {
        id: 'L133-1', type: 'lesson', title: 'Le gérondif', characterId: 'marie',
        content: `Le **gérondif** exprime la simultanéité, la manière ou la condition.\n\n📐 **Formation :**\n**en** + participe présent (radical de « nous » au présent + **-ant**)\n\n🔵 **Exemples :**\n- parler → nous parlons → en parl**ant**\n- finir → nous finissons → en finiss**ant**\n- faire → nous faisons → en fais**ant**\n\n⚠️ **3 exceptions :**\n- être → en **étant**\n- avoir → en **ayant**\n- savoir → en **sachant**\n\n📝 **Usages :**\n1. **Simultanéité** : Il écoute de la musique **en travaillant**.\n2. **Manière** : J'ai appris le français **en regardant** des films.\n3. **Condition** : **En étudiant** plus, tu réussiras.\n4. **Cause** : **En courant**, il est tombé.\n\n⚠️ Le sujet du gérondif = le sujet de la phrase principale !`,
        tip: '💡 « En + -ant » = while doing / by doing. C\'est très utilisé en français courant !'
      },
      {
        id: 'L133-2', type: 'listening', title: 'Écoute — Habitudes d\'étude', characterId: 'lucas',
        text: 'J\'apprends le français en écoutant des podcasts et en lisant des articles en ligne. En allant au CIA d\'Antibes, je pratique aussi en parlant avec mes camarades. J\'ai beaucoup progressé en regardant des séries françaises avec des sous-titres.',
        question: 'Comment a-t-il progressé ?',
        options: ['En dormant', 'En regardant des séries françaises', 'En voyageant', 'En jouant aux jeux vidéo'],
        correctIndex: 1
      },
      {
        id: 'L133-3', type: 'qcm', title: 'Formation du gérondif', characterId: 'elena',
        question: 'Quel est le gérondif de « lire » ?',
        options: ['en lisent', 'en lisant', 'en lirant', 'en lire'],
        correctIndex: 1,
        explanation: 'Lire → nous lisons → en lisant.'
      },
      {
        id: 'L133-4', type: 'flashcard', title: 'Gérondifs courants', characterId: 'thomas',
        cards: [
          { front: 'en parlant', back: 'while speaking / by speaking' },
          { front: 'en travaillant', back: 'while working / by working' },
          { front: 'en mangeant', back: 'while eating' },
          { front: 'en étant', back: 'while being / by being (irregular)' },
          { front: 'en ayant', back: 'while having / by having (irregular)' },
          { front: 'en sachant', back: 'while knowing / by knowing (irregular)' },
        ]
      },
      {
        id: 'L133-5', type: 'fill-blank', title: 'Complétez avec le gérondif', characterId: 'fatou',
        sentence: 'J\'ai appris beaucoup ___ des films français.',
        options: ['en regardant', 'en regarder', 'regardant', 'regardé'],
        correctAnswer: 'en regardant'
      },
      {
        id: 'L133-6', type: 'drag-drop', title: 'Formez une phrase avec le gérondif', characterId: 'yuki',
        instruction: 'Remettez dans l\'ordre :',
        items: ['en marchant', 'Il', 'téléphone', 'au'],
        correctOrder: ['Il', 'téléphone', 'en marchant', 'au']
      },
      {
        id: 'L133-7', type: 'qcm', title: 'Usage du gérondif', characterId: 'hans',
        question: '« En étudiant plus, tu réussiras » exprime…',
        options: ['la simultanéité', 'la manière', 'la condition', 'la cause'],
        correctIndex: 2,
        explanation: 'Ici, le gérondif exprime une condition : si tu étudies plus → tu réussiras.'
      },
      {
        id: 'L133-8', type: 'final-quiz', title: 'Quiz final — Le gérondif', characterId: 'marie',
        questions: [
          { question: 'Le gérondif se forme avec « en + … »', options: ['infinitif', 'participe passé', 'participe présent', 'imparfait'], correctIndex: 2 },
          { question: 'Le gérondif de « être » est…', options: ['en étant', 'en essant', 'en soyant', 'en êtant'], correctIndex: 0 },
          { question: '« En lisant, il s\'endort. » → Le gérondif exprime…', options: ['la condition', 'la simultanéité', 'le but', 'l\'opposition'], correctIndex: 1 },
          { question: 'Le gérondif de « avoir » est…', options: ['en avant', 'en avérant', 'en ayant', 'en avons'], correctIndex: 2 },
          { question: '« J\'ai appris en pratiquant. » → Le gérondif exprime…', options: ['le but', 'la manière', 'l\'opposition', 'le temps'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 134: Prendre des notes
  {
    courseId: 'lesson-134',
    steps: [
      {
        id: 'L134-1', type: 'lesson', title: 'Prendre des notes', characterId: 'marie',
        content: `Apprenons à **prendre des notes** efficacement en français ! 📝\n\n📋 **Techniques de prise de notes :**\n\n1️⃣ **Abréviations courantes :**\n- bcp = beaucoup\n- tjrs = toujours\n- pb = problème\n- ex. = exemple\n- cf. = se reporter à\n- etc. = et cætera\n- → = donc / implique\n- ≠ = différent de\n- + = plus / en plus\n\n2️⃣ **Structure :**\n- Titre et date\n- Points principaux (numérotés)\n- Sous-points (tirets)\n- Mots-clés plutôt que phrases complètes\n\n3️⃣ **Conseils :**\n- Ne pas tout écrire : noter l'essentiel\n- Utiliser des symboles (→, ≠, +, =)\n- Relire et compléter après le cours\n- Surligner les points importants`,
        tip: '💡 L\'objectif n\'est pas de tout écrire, mais de capturer les idées principales et les exemples clés.'
      },
      {
        id: 'L134-2', type: 'listening', title: 'Écoute — Un cours magistral', characterId: 'omar',
        text: 'Aujourd\'hui, nous allons parler de la Révolution française. Il y a trois points importants. Premièrement, les causes : la crise économique et les inégalités sociales. Deuxièmement, les événements clés : la prise de la Bastille le 14 juillet 1789. Troisièmement, les conséquences : la Déclaration des droits de l\'homme.',
        question: 'Combien de points importants le professeur mentionne-t-il ?',
        options: ['Un', 'Deux', 'Trois', 'Quatre'],
        correctIndex: 2
      },
      {
        id: 'L134-3', type: 'qcm', title: 'Abréviations', characterId: 'elena',
        question: 'Que signifie l\'abréviation « bcp » ?',
        options: ['bien compris', 'beaucoup', 'bon courage', 'bonne continuation'],
        correctIndex: 1,
        explanation: '« bcp » est l\'abréviation de « beaucoup », très utilisée dans la prise de notes.'
      },
      {
        id: 'L134-4', type: 'flashcard', title: 'Abréviations françaises', characterId: 'thomas',
        cards: [
          { front: 'bcp', back: 'beaucoup' },
          { front: 'tjrs', back: 'toujours' },
          { front: 'pb', back: 'problème' },
          { front: 'ex.', back: 'exemple' },
          { front: 'cf.', back: 'se reporter à / voir' },
          { front: '→', back: 'donc / implique / conduit à' },
        ]
      },
      {
        id: 'L134-5', type: 'fill-blank', title: 'Complétez l\'abréviation', characterId: 'fatou',
        sentence: '« pb » est l\'abréviation de ___.',
        options: ['parbleu', 'problème', 'peut-être', 'probablement'],
        correctAnswer: 'problème'
      },
      {
        id: 'L134-6', type: 'drag-drop', title: 'Structurez vos notes', characterId: 'yuki',
        instruction: 'Ordonnez les éléments d\'une prise de notes :',
        items: ['Sous-points', 'Date et titre', 'Points principaux', 'Mots-clés'],
        correctOrder: ['Date et titre', 'Points principaux', 'Sous-points', 'Mots-clés']
      },
      {
        id: 'L134-7', type: 'qcm', title: 'Technique de notes', characterId: 'lucas',
        question: 'Que faut-il faire APRÈS un cours ?',
        options: ['Jeter ses notes', 'Relire et compléter', 'Réécrire tout en entier', 'Ne rien faire'],
        correctIndex: 1,
        explanation: 'Il est essentiel de relire et compléter ses notes après le cours tant que le contenu est frais.'
      },
      {
        id: 'L134-8', type: 'final-quiz', title: 'Quiz final — Prendre des notes', characterId: 'marie',
        questions: [
          { question: '« bcp » signifie…', options: ['bien compris', 'beaucoup', 'bon courage', 'bas compté'], correctIndex: 1 },
          { question: 'Le symbole « → » signifie…', options: ['plus', 'différent de', 'donc / implique', 'moins'], correctIndex: 2 },
          { question: 'La prise de notes doit capturer…', options: ['chaque mot', 'les idées principales', 'les opinions personnelles', 'les blagues'], correctIndex: 1 },
          { question: '« cf. » signifie…', options: ['compris facilement', 'conférence', 'se reporter à', 'c\'est fait'], correctIndex: 2 },
          { question: 'Après un cours, il faut…', options: ['oublier ses notes', 'relire et compléter', 'tout réécrire', 'les donner à un ami'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 135: Présenter un exposé
  {
    courseId: 'lesson-135',
    steps: [
      {
        id: 'L135-1', type: 'lesson', title: 'Présenter un exposé', characterId: 'marie',
        content: `Comment **présenter un exposé** structuré en français ? 🎤\n\n📐 **Structure en 3 parties :**\n\n1️⃣ **Introduction :**\n- Saluer le public : « Bonjour à tous ! »\n- Annoncer le sujet : « Aujourd'hui, je vais vous parler de… »\n- Annoncer le plan : « D'abord… ensuite… enfin… »\n\n2️⃣ **Développement :**\n- Partie 1 : « Commençons par… »\n- Transition : « Passons maintenant à… »\n- Partie 2 : « En ce qui concerne… »\n- Exemples : « Par exemple… » / « Prenons l'exemple de… »\n\n3️⃣ **Conclusion :**\n- Résumer : « Pour résumer… » / « En résumé… »\n- Conclure : « En conclusion, nous avons vu que… »\n- Ouvrir : « Cela nous amène à nous demander si… »\n- Remercier : « Je vous remercie de votre attention. »\n- Questions : « Avez-vous des questions ? »`,
        tip: '💡 Un bon exposé = un plan clair + des exemples concrets + un débit de parole ni trop rapide ni trop lent.'
      },
      {
        id: 'L135-2', type: 'listening', title: 'Écoute — Début d\'un exposé', characterId: 'lucas',
        text: 'Bonjour à tous ! Aujourd\'hui, je vais vous parler du tourisme sur la Côte d\'Azur. D\'abord, nous verrons les atouts de la région. Ensuite, nous analyserons l\'impact du tourisme sur l\'environnement. Enfin, nous proposerons des solutions pour un tourisme durable.',
        question: 'Combien de parties l\'exposé comporte-t-il ?',
        options: ['Une', 'Deux', 'Trois', 'Quatre'],
        correctIndex: 2
      },
      {
        id: 'L135-3', type: 'qcm', title: 'Formules d\'exposé', characterId: 'elena',
        question: '« Passons maintenant à… » sert à…',
        options: ['introduire', 'conclure', 'faire une transition', 'poser une question'],
        correctIndex: 2,
        explanation: '« Passons maintenant à… » est une formule de transition entre deux parties.'
      },
      {
        id: 'L135-4', type: 'flashcard', title: 'Formules pour l\'exposé', characterId: 'thomas',
        cards: [
          { front: 'Aujourd\'hui, je vais vous parler de…', back: 'Today, I\'m going to talk about…' },
          { front: 'Commençons par…', back: 'Let\'s start with…' },
          { front: 'Passons maintenant à…', back: 'Let\'s move on to…' },
          { front: 'Prenons l\'exemple de…', back: 'Let\'s take the example of…' },
          { front: 'En conclusion…', back: 'In conclusion…' },
          { front: 'Avez-vous des questions ?', back: 'Do you have any questions?' },
        ]
      },
      {
        id: 'L135-5', type: 'fill-blank', title: 'Complétez l\'introduction', characterId: 'fatou',
        sentence: 'Aujourd\'hui, je vais ___ parler de la gastronomie française.',
        options: ['te', 'vous', 'nous', 'leur'],
        correctAnswer: 'vous'
      },
      {
        id: 'L135-6', type: 'drag-drop', title: 'Ordonnez un exposé', characterId: 'yuki',
        instruction: 'Remettez les étapes dans l\'ordre :',
        items: ['Questions du public', 'Développement', 'Conclusion', 'Introduction'],
        correctOrder: ['Introduction', 'Développement', 'Conclusion', 'Questions du public']
      },
      {
        id: 'L135-7', type: 'qcm', title: 'Clôturer un exposé', characterId: 'hans',
        question: 'Comment terminer un exposé ?',
        options: ['En partant sans rien dire', 'En remerciant le public', 'En posant des questions personnelles', 'En recommençant'],
        correctIndex: 1,
        explanation: '« Je vous remercie de votre attention » est la formule classique pour terminer.'
      },
      {
        id: 'L135-8', type: 'final-quiz', title: 'Quiz final — L\'exposé', characterId: 'marie',
        questions: [
          { question: 'Un exposé comporte généralement…', options: ['1 partie', '2 parties', '3 parties', '5 parties'], correctIndex: 2 },
          { question: '« Passons maintenant à… » est une…', options: ['introduction', 'transition', 'conclusion', 'question'], correctIndex: 1 },
          { question: 'On termine un exposé par…', options: ['une blague', 'un remerciement', 'une chanson', 'un silence'], correctIndex: 1 },
          { question: '« Prenons l\'exemple de… » sert à…', options: ['conclure', 'illustrer', 'contredire', 'résumer'], correctIndex: 1 },
          { question: 'Dans l\'introduction, on annonce…', options: ['la conclusion', 'le plan', 'les résultats', 'les questions'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 136: Le passif
  {
    courseId: 'lesson-136',
    steps: [
      {
        id: 'L136-1', type: 'lesson', title: 'Le passif', characterId: 'marie',
        content: `La **voix passive** met l'accent sur l'action ou l'objet plutôt que sur celui qui fait l'action.\n\n📐 **Formation :**\nSujet + **être** (conjugué) + **participe passé** + par + complément d'agent\n\n🔵 **Exemples :**\n- Actif : Le professeur **corrige** les copies.\n- Passif : Les copies **sont corrigées** par le professeur.\n\n- Actif : Picasso **a peint** ce tableau.\n- Passif : Ce tableau **a été peint** par Picasso.\n\n📝 **À tous les temps :**\n- Présent : est corrigé\n- Passé composé : a été corrigé\n- Imparfait : était corrigé\n- Futur : sera corrigé\n\n⚠️ **Accord :**\nLe participe passé s'accorde avec le sujet :\n- La lettre **est écrite**.\n- Les lettres **sont écrites**.`,
        tip: '💡 La voix passive est très utilisée dans la presse et les textes formels.'
      },
      {
        id: 'L136-2', type: 'listening', title: 'Écoute — Actualités au passif', characterId: 'omar',
        text: 'Le festival de jazz d\'Antibes a été inauguré hier par le maire de la ville. Plus de 500 spectateurs ont été accueillis pour le premier concert. La scène a été installée sur la place principale. Les prochains concerts seront organisés tout au long de la semaine.',
        question: 'Par qui le festival a-t-il été inauguré ?',
        options: ['Par les spectateurs', 'Par les musiciens', 'Par le maire', 'Par les organisateurs'],
        correctIndex: 2
      },
      {
        id: 'L136-3', type: 'qcm', title: 'Actif ou passif ?', characterId: 'elena',
        question: 'Quelle phrase est à la voix passive ?',
        options: ['Le chat mange la souris.', 'La souris est mangée par le chat.', 'Le chat a mangé.', 'La souris court.'],
        correctIndex: 1,
        explanation: '« est mangée par » = voix passive (être + participe passé + par).'
      },
      {
        id: 'L136-4', type: 'flashcard', title: 'Actif → Passif', characterId: 'thomas',
        cards: [
          { front: 'Le professeur corrige les devoirs.', back: 'Les devoirs sont corrigés par le professeur.' },
          { front: 'Picasso a peint Guernica.', back: 'Guernica a été peint par Picasso.' },
          { front: 'On construit un immeuble.', back: 'Un immeuble est construit.' },
          { front: 'Le maire inaugure le festival.', back: 'Le festival est inauguré par le maire.' },
          { front: 'La police a arrêté le voleur.', back: 'Le voleur a été arrêté par la police.' },
          { front: 'On parlera français.', back: 'Le français sera parlé.' },
        ]
      },
      {
        id: 'L136-5', type: 'fill-blank', title: 'Transformez au passif', characterId: 'fatou',
        sentence: 'Ce livre ___ par un auteur français.',
        options: ['a écrit', 'a été écrit', 'est écrivant', 'écrit'],
        correctAnswer: 'a été écrit'
      },
      {
        id: 'L136-6', type: 'drag-drop', title: 'Formez une phrase passive', characterId: 'yuki',
        instruction: 'Remettez dans l\'ordre :',
        items: ['est', 'par le chef', 'Le repas', 'préparé'],
        correctOrder: ['Le repas', 'est', 'préparé', 'par le chef']
      },
      {
        id: 'L136-7', type: 'qcm', title: 'Passif au passé composé', characterId: 'hans',
        question: 'Au passé composé passif, on utilise…',
        options: ['a + participe passé', 'a été + participe passé', 'est + participe passé', 'était + participe passé'],
        correctIndex: 1,
        explanation: 'Passé composé passif = a/ont été + participe passé.'
      },
      {
        id: 'L136-8', type: 'final-quiz', title: 'Quiz final — Le passif', characterId: 'marie',
        questions: [
          { question: 'La voix passive utilise l\'auxiliaire…', options: ['avoir', 'être', 'faire', 'aller'], correctIndex: 1 },
          { question: '« Les copies sont corrigées » est au…', options: ['actif', 'passif', 'conditionnel', 'subjonctif'], correctIndex: 1 },
          { question: 'Au passif, le participe passé s\'accorde avec…', options: ['le complément d\'agent', 'le sujet', 'le verbe', 'l\'adverbe'], correctIndex: 1 },
          { question: '« a été inauguré » est au…', options: ['présent passif', 'passé composé passif', 'imparfait passif', 'futur passif'], correctIndex: 1 },
          { question: '« par » introduit…', options: ['le sujet', 'le complément d\'agent', 'le COD', 'le lieu'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lessons 137-140: La vie étudiante, Rédiger un résumé, Révision, Examen
  {
    courseId: 'lesson-137',
    steps: [
      {
        id: 'L137-1', type: 'lesson', title: 'La vie étudiante en France', characterId: 'marie',
        content: `Découvrons la **vie étudiante** en France ! 🎓\n\n🏠 **Logement étudiant :**\n- Les résidences CROUS (logements universitaires)\n- La colocation étudiante\n- Les foyers étudiants\n\n🍽️ **Restauration :**\n- Le restaurant universitaire (le « resto U ») : repas à 3,30€\n- La cafétéria\n\n💰 **Bourses et aides :**\n- Bourse sur critères sociaux (CROUS)\n- APL (aide au logement)\n- Emploi étudiant (20h/semaine max)\n\n🎉 **Vie sociale :**\n- Les associations étudiantes (BDE)\n- Les soirées et événements\n- Le sport universitaire\n- Les bibliothèques universitaires (BU)\n\n📝 **Expressions :**\n- « Bosser » = travailler / étudier (familier)\n- « Sécher un cours » = ne pas aller en cours\n- « Un partiel » = un examen de mi-semestre`,
        tip: '💡 Le resto U propose des repas complets à 3,30€ pour les étudiants boursiers — c\'est le bon plan !'
      },
      {
        id: 'L137-2', type: 'listening', title: 'Écoute — La vie d\'étudiant', characterId: 'lucas',
        text: 'Ma vie d\'étudiant à Nice est super ! J\'habite en résidence CROUS et je mange au resto U à midi pour 3 euros 30. Je fais partie du BDE qui organise des soirées. Le soir, je bosse à la BU. Le week-end, je vais à la plage à Antibes !',
        question: 'Où mange-t-il à midi ?',
        options: ['Au restaurant', 'Au resto U', 'Chez lui', 'Au café'],
        correctIndex: 1
      },
      {
        id: 'L137-3', type: 'qcm', title: 'Vie étudiante', characterId: 'elena',
        question: 'Que signifie « bosser » en français familier ?',
        options: ['dormir', 'manger', 'travailler / étudier', 'danser'],
        correctIndex: 2,
        explanation: '« Bosser » est le terme familier pour « travailler » ou « étudier ».'
      },
      {
        id: 'L137-4', type: 'flashcard', title: 'Vocabulaire étudiant', characterId: 'thomas',
        cards: [
          { front: 'Le resto U', back: 'University cafeteria (cheap meals)' },
          { front: 'Le BDE', back: 'Bureau des Étudiants (student union)' },
          { front: 'La BU', back: 'Bibliothèque Universitaire' },
          { front: 'Bosser (familier)', back: 'To work / to study (informal)' },
          { front: 'Sécher un cours', back: 'To skip a class' },
          { front: 'Un partiel', back: 'A midterm exam' },
        ]
      },
      {
        id: 'L137-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        sentence: 'Le repas au resto U coûte seulement 3 euros ___.',
        options: ['30', '50', '80', '90'],
        correctAnswer: '30'
      },
      {
        id: 'L137-6', type: 'drag-drop', title: 'La journée d\'un étudiant', characterId: 'yuki',
        instruction: 'Remettez dans l\'ordre chronologique :',
        items: ['Étudier à la BU le soir', 'Cours le matin', 'Déjeuner au resto U', 'Activité du BDE l\'après-midi'],
        correctOrder: ['Cours le matin', 'Déjeuner au resto U', 'Activité du BDE l\'après-midi', 'Étudier à la BU le soir']
      },
      {
        id: 'L137-7', type: 'qcm', title: 'Aides étudiantes', characterId: 'hans',
        question: 'Combien d\'heures maximum un étudiant peut-il travailler par semaine ?',
        options: ['10h', '15h', '20h', '35h'],
        correctIndex: 2,
        explanation: 'Les étudiants étrangers en France peuvent travailler jusqu\'à 20h par semaine.'
      },
      {
        id: 'L137-8', type: 'final-quiz', title: 'Quiz final — La vie étudiante', characterId: 'marie',
        questions: [
          { question: 'BDE signifie…', options: ['Bureau de l\'Éducation', 'Bureau des Étudiants', 'Bâtiment des Études', 'Base de Données Étudiante'], correctIndex: 1 },
          { question: '« Sécher un cours » signifie…', options: ['être en retard', 'ne pas y aller', 'prendre des notes', 'poser des questions'], correctIndex: 1 },
          { question: 'Le resto U propose des repas à…', options: ['1€', '3,30€', '10€', '15€'], correctIndex: 1 },
          { question: 'Un « partiel » est…', options: ['un cours', 'un examen', 'un professeur', 'un bâtiment'], correctIndex: 1 },
          { question: 'BU signifie…', options: ['Bureau Universitaire', 'Bibliothèque Universitaire', 'Bâtiment Unique', 'Budget Universitaire'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 138
  {
    courseId: 'lesson-138',
    steps: [
      {
        id: 'L138-1', type: 'lesson', title: 'Rédiger un résumé', characterId: 'marie',
        content: `Apprenons à **rédiger un résumé** efficace ! ✂️📝\n\n📐 **Méthode en 5 étapes :**\n\n1️⃣ **Lire le texte** en entier une première fois\n2️⃣ **Identifier l'idée principale** de chaque paragraphe\n3️⃣ **Souligner les mots-clés** et les idées essentielles\n4️⃣ **Reformuler** avec vos propres mots\n5️⃣ **Relire** et vérifier que le résumé est cohérent\n\n📝 **Règles :**\n- Respecter l'ordre du texte original\n- Ne pas ajouter d'opinion personnelle\n- Utiliser ses propres mots (pas de copier-coller)\n- Garder un quart de la longueur originale\n\n📝 **Formules utiles :**\n- L'auteur explique que…\n- Le texte traite de…\n- Il est question de…\n- L'idée principale est…`,
        tip: '💡 Un bon résumé = les idées essentielles reformulées en un quart du texte original.'
      },
      {
        id: 'L138-2', type: 'listening', title: 'Écoute — Résumé d\'un texte', characterId: 'omar',
        text: 'Le texte parle du marché provençal d\'Antibes. L\'auteur explique que ce marché est l\'un des plus beaux de France. Il décrit les produits vendus : olives, fromages, lavande et fruits de saison. En conclusion, il recommande de visiter ce marché le samedi matin.',
        question: 'Quelle est la recommandation de l\'auteur ?',
        options: ['Visiter le lundi', 'Visiter le samedi matin', 'Ne pas y aller', 'Acheter en ligne'],
        correctIndex: 1
      },
      {
        id: 'L138-3', type: 'qcm', title: 'Technique du résumé', characterId: 'elena',
        question: 'Un résumé doit faire environ…',
        options: ['la moitié du texte', 'un quart du texte', 'le même nombre de mots', 'plus long que le texte'],
        correctIndex: 1,
        explanation: 'La règle classique est de résumer en un quart de la longueur du texte original.'
      },
      {
        id: 'L138-4', type: 'flashcard', title: 'Formules pour résumer', characterId: 'thomas',
        cards: [
          { front: 'L\'auteur explique que…', back: 'The author explains that…' },
          { front: 'Le texte traite de…', back: 'The text deals with…' },
          { front: 'Il est question de…', back: 'It\'s about…' },
          { front: 'L\'idée principale est…', back: 'The main idea is…' },
          { front: 'En résumé…', back: 'In summary…' },
          { front: 'L\'auteur conclut que…', back: 'The author concludes that…' },
        ]
      },
      {
        id: 'L138-5', type: 'fill-blank', title: 'Complétez la formule', characterId: 'fatou',
        sentence: 'L\'auteur ___ que le marché d\'Antibes est exceptionnel.',
        options: ['pense', 'explique', 'crie', 'oublie'],
        correctAnswer: 'explique'
      },
      {
        id: 'L138-6', type: 'drag-drop', title: 'Étapes du résumé', characterId: 'yuki',
        instruction: 'Remettez les étapes dans l\'ordre :',
        items: ['Relire et vérifier', 'Souligner les mots-clés', 'Lire le texte en entier', 'Reformuler avec ses mots'],
        correctOrder: ['Lire le texte en entier', 'Souligner les mots-clés', 'Reformuler avec ses mots', 'Relire et vérifier']
      },
      {
        id: 'L138-7', type: 'qcm', title: 'Règles du résumé', characterId: 'lucas',
        question: 'Dans un résumé, on ne doit PAS…',
        options: ['reformuler', 'identifier les idées principales', 'ajouter son opinion', 'suivre l\'ordre du texte'],
        correctIndex: 2,
        explanation: 'Un résumé est objectif : on ne doit pas ajouter d\'opinion personnelle.'
      },
      {
        id: 'L138-8', type: 'final-quiz', title: 'Quiz final — Rédiger un résumé', characterId: 'marie',
        questions: [
          { question: 'Un résumé fait environ…', options: ['la moitié', 'un quart', 'trois quarts', 'la totalité'], correctIndex: 1 },
          { question: 'Dans un résumé, on utilise…', options: ['les mots exacts du texte', 'ses propres mots', 'des citations', 'des opinions'], correctIndex: 1 },
          { question: '« L\'auteur explique que… » introduit…', options: ['une opinion', 'une reformulation', 'une question', 'une critique'], correctIndex: 1 },
          { question: 'L\'ordre du résumé doit…', options: ['être inversé', 'suivre le texte original', 'être aléatoire', 'commencer par la fin'], correctIndex: 1 },
          { question: 'La première étape est de…', options: ['écrire le résumé', 'lire le texte en entier', 'souligner', 'reformuler'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 139: Révision B1.4
  {
    courseId: 'lesson-139',
    steps: [
      {
        id: 'L139-1', type: 'lesson', title: 'Révision B1.4', characterId: 'marie',
        content: `Révisons le module B1.4 ! 📚\n\n🎓 **Système éducatif :** Maternelle → Élémentaire → Collège → Lycée → Université\n\n📝 **Inscription :** Campus France, Parcoursup, DELF, CROUS\n\n📐 **Gérondif :** en + participe présent (en parlant, en faisant)\n\n📝 **Prise de notes :** Abréviations (bcp, tjrs, pb), structure, mots-clés\n\n🎤 **Exposé :** Introduction → Développement → Conclusion\n\n📐 **Voix passive :** être + participe passé + par\n\n🎓 **Vie étudiante :** Resto U, BDE, BU, bosser, partiel\n\n✂️ **Résumé :** Reformuler en un quart, pas d'opinion personnelle`,
        tip: '💡 Bonne chance pour cette révision !'
      },
      {
        id: 'L139-2', type: 'qcm', title: 'Révision — Éducation', characterId: 'elena',
        question: 'Le Bac se passe en classe de…',
        options: ['3e', 'Seconde', 'Première', 'Terminale'],
        correctIndex: 3,
        explanation: 'Le Baccalauréat se passe en Terminale.'
      },
      {
        id: 'L139-3', type: 'fill-blank', title: 'Révision — Gérondif', characterId: 'fatou',
        sentence: 'J\'ai appris le français ___ des films.',
        options: ['en regardant', 'regarder', 'en regarder', 'regardé'],
        correctAnswer: 'en regardant'
      },
      {
        id: 'L139-4', type: 'qcm', title: 'Révision — Passif', characterId: 'lucas',
        question: '« Le gâteau a été mangé par les enfants » est…',
        options: ['actif', 'passif', 'conditionnel', 'subjonctif'],
        correctIndex: 1,
        explanation: '« a été mangé par » = voix passive au passé composé.'
      },
      {
        id: 'L139-5', type: 'fill-blank', title: 'Révision — Vie étudiante', characterId: 'fatou',
        sentence: '« Bosser » signifie ___ en français familier.',
        options: ['dormir', 'travailler', 'manger', 'danser'],
        correctAnswer: 'travailler'
      },
      {
        id: 'L139-6', type: 'drag-drop', title: 'Révision — Exposé', characterId: 'yuki',
        instruction: 'Ordonnez un exposé :',
        items: ['Conclusion', 'Introduction', 'Questions', 'Développement'],
        correctOrder: ['Introduction', 'Développement', 'Conclusion', 'Questions']
      },
      {
        id: 'L139-7', type: 'qcm', title: 'Révision — Résumé', characterId: 'omar',
        question: 'Un résumé fait environ…',
        options: ['la totalité', 'la moitié', 'un quart', 'un dixième'],
        correctIndex: 2,
        explanation: 'Un résumé fait environ un quart du texte original.'
      },
      {
        id: 'L139-8', type: 'final-quiz', title: 'Quiz de révision B1.4', characterId: 'marie',
        questions: [
          { question: 'Le gérondif de « avoir » est…', options: ['en avant', 'en ayant', 'en avérant', 'en avons'], correctIndex: 1 },
          { question: 'LMD signifie…', options: ['Licence Master Doctorat', 'Lycée Maternelle Diplôme', 'Lecture Maths Dessin', 'Langue Moderne Diplômante'], correctIndex: 0 },
          { question: '« Sécher un cours » signifie…', options: ['bien écouter', 'ne pas y aller', 'prendre des notes', 'arriver en retard'], correctIndex: 1 },
          { question: 'La voix passive utilise l\'auxiliaire…', options: ['avoir', 'être', 'faire', 'aller'], correctIndex: 1 },
          { question: '« bcp » est l\'abréviation de…', options: ['bon courage', 'beaucoup', 'bien compris', 'bonne continuation'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 140: Examen B1.4
  {
    courseId: 'lesson-140',
    steps: [
      {
        id: 'L140-1', type: 'lesson', title: 'Examen B1.4 — Étudiant Modèle 📚', characterId: 'marie',
        content: `Bienvenue à l'examen du module B1.4 !\n\n🎯 **Compétences testées :**\n- Le système éducatif français\n- S\'inscrire à l\'université\n- Le gérondif\n- Prendre des notes\n- Présenter un exposé\n- La voix passive\n- La vie étudiante\n- Rédiger un résumé\n\nBonne chance ! 🍀`,
        tip: '💡 Prenez le temps de bien lire chaque question.'
      },
      {
        id: 'L140-2', type: 'qcm', title: 'Examen — Question 1', characterId: 'marie',
        question: 'Le gérondif de « faire » est…',
        options: ['en faisant', 'en faisont', 'en ferant', 'en faire'],
        correctIndex: 0,
        explanation: 'Faire → nous faisons → en faisant.'
      },
      {
        id: 'L140-3', type: 'fill-blank', title: 'Examen — Question 2', characterId: 'marie',
        sentence: 'Ce tableau ___ par Picasso.',
        options: ['a peint', 'a été peint', 'est peindre', 'peint'],
        correctAnswer: 'a été peint'
      },
      {
        id: 'L140-4', type: 'qcm', title: 'Examen — Question 3', characterId: 'marie',
        question: 'Campus France aide les étudiants…',
        options: ['français', 'internationaux', 'de maternelle', 'professeurs'],
        correctIndex: 1,
        explanation: 'Campus France est l\'agence pour les étudiants internationaux.'
      },
      {
        id: 'L140-5', type: 'fill-blank', title: 'Examen — Question 4', characterId: 'marie',
        sentence: '« Aujourd\'hui, je vais ___ parler de la culture française. »',
        options: ['te', 'vous', 'nous', 'lui'],
        correctAnswer: 'vous'
      },
      {
        id: 'L140-6', type: 'qcm', title: 'Examen — Question 5', characterId: 'marie',
        question: 'Un résumé ne doit PAS contenir…',
        options: ['les idées principales', 'des reformulations', 'des opinions personnelles', 'l\'ordre du texte'],
        correctIndex: 2,
        explanation: 'Un résumé est objectif et ne contient pas d\'opinions personnelles.'
      },
      {
        id: 'L140-7', type: 'drag-drop', title: 'Examen — Question 6', characterId: 'marie',
        instruction: 'Ordonnez le système éducatif :',
        items: ['Collège', 'Lycée', 'École élémentaire', 'Université'],
        correctOrder: ['École élémentaire', 'Collège', 'Lycée', 'Université']
      },
      {
        id: 'L140-8', type: 'final-quiz', title: 'Examen final B1.4 — Badge Étudiant Modèle', characterId: 'marie',
        questions: [
          { question: '« En travaillant » est un…', options: ['infinitif', 'subjonctif', 'gérondif', 'participe passé'], correctIndex: 2 },
          { question: 'Le Brevet se passe à la fin du…', options: ['lycée', 'collège', 'université', 'primaire'], correctIndex: 1 },
          { question: '« Le resto U » est le restaurant…', options: ['rapide', 'universitaire', 'gastronomique', 'italien'], correctIndex: 1 },
          { question: '« Passons maintenant à… » est une formule de…', options: ['conclusion', 'introduction', 'transition', 'question'], correctIndex: 2 },
          { question: 'DELF signifie Diplôme d\'Études en Langue…', options: ['Latine', 'Française', 'Littéraire', 'Libre'], correctIndex: 1 },
        ]
      }
    ]
  },
];
