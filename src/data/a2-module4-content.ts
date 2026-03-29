// Interactive lesson content for A2 Module 4: Santé et bien-être (Lessons 81-90)
import type { CourseContent } from './course-content';

export const a2Module4Content: CourseContent[] = [
  // Lesson 81: Le corps humain
  {
    courseId: 'lesson-81',
    steps: [
      {
        id: 'L81-1', type: 'lesson', title: 'Le corps humain', characterId: 'marie',
        characterMessage: "Vous progressez bien ! Cette leçon va enrichir votre français.",
        content: `Découvrons les parties du **corps humain** ! 🏃\n\n🧠 **La tête :**\n- La tête → the head\n- Les cheveux → hair\n- Les yeux (un œil) → eyes (an eye)\n- Le nez → the nose\n- La bouche → the mouth\n- Les oreilles → ears\n- Le front → the forehead\n\n💪 **Le corps :**\n- Le bras → the arm\n- La main → the hand\n- Les doigts → fingers\n- La jambe → the leg\n- Le pied → the foot\n- Le dos → the back\n- Le ventre → the stomach/belly\n- Le cou → the neck\n- L'épaule → the shoulder\n- Le genou → the knee`,
        tip: '💡 « Les yeux » est le pluriel irrégulier de « un œil ». Retenez : un œil, des yeux !'
      },
      {
        id: 'L81-2', type: 'listening', title: 'Écoute — Chez le médecin', characterId: 'omar',
        characterMessage: "Au marché de Forville à Cannes, j'entends ces conversations chaque jour.",
        text: 'Bonjour docteur. J\'ai mal à la tête depuis hier. J\'ai aussi mal au dos et je suis très fatigué. Depuis quand avez-vous ces symptômes ? Depuis deux jours. Et j\'ai mal à la gorge aussi.',
        question: 'Depuis quand a-t-il ces symptômes ?',
        options: ['Depuis une semaine', 'Depuis deux jours', 'Depuis un mois', 'Depuis hier'],
        correctIndex: 1
      },
      {
        id: 'L81-3', type: 'qcm', title: 'Vocabulaire du corps', characterId: 'elena',
        characterMessage: "C'est plus facile quand on parle déjà une langue latine !",
        question: 'Comment dit-on "knee" en français ?',
        options: ['Le coude', 'Le genou', 'La cheville', 'Le poignet'],
        correctIndex: 1,
        explanation: 'Le genou = the knee. Attention au pluriel : les genoux (avec -x).'
      },
      {
        id: 'L81-4', type: 'flashcard', title: 'Le corps humain', characterId: 'thomas',
        characterMessage: "Le français est riche de mots qui n'existent pas dans d'autres langues.",
        cards: [
          { front: 'La tête', back: 'The head' },
          { front: 'Le bras', back: 'The arm' },
          { front: 'La main', back: 'The hand' },
          { front: 'La jambe', back: 'The leg' },
          { front: 'Le dos', back: 'The back' },
          { front: 'Le ventre', back: 'The stomach / belly' },
          { front: 'Le genou', back: 'The knee' },
        ]
      },
      {
        id: 'L81-5', type: 'fill-blank', title: 'Avoir mal à…', characterId: 'fatou',
        characterMessage: "La grammaire française, c'est comme une recette : il faut les bons ingrédients !",
        sentence: 'J\'ai mal ___ tête.',
        options: ['au', 'à la', 'aux', 'à l\''],
        correctAnswer: 'à la'
      },
      {
        id: 'L81-6', type: 'drag-drop', title: 'De haut en bas', characterId: 'yuki',
        characterMessage: "Les phrases sont plus longues maintenant. Lis d'abord tous les mots !",
        instruction: 'Ordonnez les parties du corps de haut en bas :',
        items: ['Le pied', 'La tête', 'Le genou', 'Le ventre'],
        correctOrder: ['La tête', 'Le ventre', 'Le genou', 'Le pied']
      },
      {
        id: 'L81-7', type: 'qcm', title: 'Pluriel irrégulier', characterId: 'lucas',
        characterMessage: "Au Brésil, on n'a pas cette règle. J'ai mis du temps à comprendre !",
        question: 'Quel est le pluriel de « un œil » ?',
        options: ['Des œils', 'Des yeux', 'Des oeux', 'Des oeils'],
        correctIndex: 1,
        explanation: 'Un œil → des yeux. C\'est l\'un des pluriels les plus irréguliers du français !'
      },
      {
        id: 'L81-8', type: 'final-quiz', title: 'Quiz final — Le corps humain', characterId: 'marie',
        characterMessage: "Ce quiz est un peu plus long, mais vous êtes prêts !",
        questions: [
          { question: '« The arm » = …', options: ['La jambe', 'Le bras', 'La main', 'Le pied'], correctIndex: 1 },
          { question: '« J\'ai mal ___ dos. »', options: ['à la', 'au', 'aux', 'à l\''], correctIndex: 1 },
          { question: 'Pluriel de « œil » = …', options: ['Œils', 'Yeux', 'Oeux', 'Yeuxs'], correctIndex: 1 },
          { question: '« The shoulder » = …', options: ['Le coude', 'L\'épaule', 'Le genou', 'La cheville'], correctIndex: 1 },
          { question: '« The neck » = …', options: ['Le dos', 'Le cou', 'Le nez', 'Le front'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 82: Chez le médecin
  {
    courseId: 'lesson-82',
    steps: [
      {
        id: 'L82-1', type: 'lesson', title: 'Chez le médecin', characterId: 'marie',
        characterMessage: "Bravo pour votre travail ! Continuons avec un nouveau thème.",
        content: `Apprenons à **décrire ses symptômes** chez le médecin ! 🏥\n\n🤒 **Exprimer la douleur :**\n- J'ai mal à + article + partie du corps\n- J'ai mal **au** ventre (à + le = au)\n- J'ai mal **à la** tête\n- J'ai mal **aux** dents (à + les = aux)\n\n🤧 **Symptômes :**\n- J'ai de la fièvre → I have a fever\n- J'ai un rhume → I have a cold\n- Je tousse → I'm coughing\n- J'ai mal à la gorge → I have a sore throat\n- J'ai la nausée → I feel nauseous\n- Je suis fatigué(e) → I'm tired\n- J'ai des allergies → I have allergies\n\n💊 **Le médecin dit :**\n- Prenez ce médicament.\n- Reposez-vous.\n- Buvez beaucoup d'eau.\n- Revenez dans une semaine.`,
        tip: '💡 « J\'ai mal au ventre » = à + le ventre → « au ». C\'est la contraction obligatoire !'
      },
      {
        id: 'L82-2', type: 'listening', title: 'Écoute — Consultation', characterId: 'elena',
        characterMessage: "Les sons du français sont parfois trompeurs pour nous, Espagnols !",
        text: 'Qu\'est-ce qui ne va pas ? J\'ai de la fièvre et je tousse beaucoup. Depuis quand ? Depuis trois jours. J\'ai aussi mal à la gorge. D\'accord, vous avez une angine. Je vais vous prescrire des antibiotiques. Prenez un comprimé trois fois par jour pendant une semaine.',
        question: 'Quel est le diagnostic ?',
        options: ['Un rhume', 'Une angine', 'Une grippe', 'Une allergie'],
        correctIndex: 1
      },
      {
        id: 'L82-3', type: 'qcm', title: 'Avoir mal à…', characterId: 'lucas',
        characterMessage: "C'est une question classique d'examen. Prends ton temps.",
        question: '« J\'ai mal ___ dents. »',
        options: ['au', 'à la', 'aux', 'à l\''],
        correctIndex: 2,
        explanation: 'Les dents = féminin pluriel → à + les = aux. J\'ai mal aux dents.'
      },
      {
        id: 'L82-4', type: 'flashcard', title: 'Chez le médecin', characterId: 'thomas',
        characterMessage: "Ces expressions colorent la langue française. Apprends-les par cœur !",
        cards: [
          { front: 'J\'ai de la fièvre', back: 'I have a fever' },
          { front: 'J\'ai un rhume', back: 'I have a cold' },
          { front: 'Je tousse', back: 'I\'m coughing' },
          { front: 'J\'ai mal à la gorge', back: 'I have a sore throat' },
          { front: 'Un médicament', back: 'A medicine' },
          { front: 'Une ordonnance', back: 'A prescription' },
        ]
      },
      {
        id: 'L82-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        characterMessage: "À Dakar, mes professeurs nous faisaient faire beaucoup de ces exercices.",
        sentence: 'Le médecin m\'a prescrit des ___.',
        options: ['antibiotiques', 'vacances', 'exercices', 'devoirs'],
        correctAnswer: 'antibiotiques'
      },
      {
        id: 'L82-6', type: 'drag-drop', title: 'Dialogue médical', characterId: 'yuki',
        characterMessage: "La structure française est plus souple qu'on ne le pense.",
        instruction: 'Ordonnez le dialogue chez le médecin :',
        items: ['Prenez ce médicament.', 'Qu\'est-ce qui ne va pas ?', 'Vous avez une angine.', 'J\'ai mal à la gorge et je tousse.'],
        correctOrder: ['Qu\'est-ce qui ne va pas ?', 'J\'ai mal à la gorge et je tousse.', 'Vous avez une angine.', 'Prenez ce médicament.']
      },
      {
        id: 'L82-7', type: 'qcm', title: 'Vocabulaire', characterId: 'omar',
        characterMessage: "Cette question me rappelle mes premiers mois en France.",
        question: '« A prescription » en français = …',
        options: ['Un médicament', 'Une ordonnance', 'Un symptôme', 'Un comprimé'],
        correctIndex: 1,
        explanation: 'Une ordonnance = a prescription (le document du médecin pour la pharmacie).'
      },
      {
        id: 'L82-8', type: 'final-quiz', title: 'Quiz final — Chez le médecin', characterId: 'marie',
        characterMessage: "Montrez-moi tout ce que vous avez appris. Je crois en vous !",
        questions: [
          { question: '« J\'ai mal ___ ventre. »', options: ['à la', 'au', 'aux', 'à l\''], correctIndex: 1 },
          { question: '« I have a cold » = …', options: ['J\'ai chaud', 'J\'ai un rhume', 'J\'ai froid', 'J\'ai faim'], correctIndex: 1 },
          { question: '« A prescription » = …', options: ['Un comprimé', 'Une ordonnance', 'Un symptôme', 'Un médecin'], correctIndex: 1 },
          { question: '« Reposez-vous » signifie…', options: ['Eat well', 'Rest', 'Exercise', 'Drink water'], correctIndex: 1 },
          { question: '« Je ___ beaucoup. » (coughing)', options: ['dors', 'tousse', 'mange', 'marche'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 83: Les verbes pronominaux
  {
    courseId: 'lesson-83',
    steps: [
      {
        id: 'L83-1', type: 'lesson', title: 'Les verbes pronominaux', characterId: 'marie',
        characterMessage: "Aujourd'hui, on approfondit vos connaissances. C'est parti !",
        content: `Les **verbes pronominaux** ont un pronom réfléchi (se). 🪞\n\n📐 **Conjugaison au présent :**\nSE LEVER :\n- je **me** lève\n- tu **te** lèves\n- il/elle **se** lève\n- nous **nous** levons\n- vous **vous** levez\n- ils/elles **se** lèvent\n\n📝 **Verbes pronominaux courants :**\n- Se lever → to get up\n- Se coucher → to go to bed\n- Se laver → to wash (oneself)\n- Se brosser les dents → to brush one's teeth\n- S'habiller → to get dressed\n- Se préparer → to get ready\n- Se promener → to take a walk\n- Se sentir → to feel\n\n⚠️ **Au passé composé → avec ÊTRE :**\n- Je **me suis** levé(e) tôt.\n- Elle **s'est** habillée rapidement.`,
        tip: '💡 Au passé composé, les verbes pronominaux utilisent toujours ÊTRE et le participe s\'accorde avec le sujet.'
      },
      {
        id: 'L83-2', type: 'listening', title: 'Écoute — Routine matinale', characterId: 'lucas',
        characterMessage: "Concentre-toi sur les mots-clés, pas besoin de tout comprendre.",
        text: 'Chaque matin, je me lève à sept heures. Je me lave, je me brosse les dents et je m\'habille. Ensuite, je me prépare un café. Le week-end, je me lève plus tard et je me promène sur la plage d\'Antibes.',
        question: 'Que fait-il le week-end ?',
        options: ['Il se lève tôt', 'Il se promène sur la plage', 'Il se couche tard', 'Il se prépare pour le travail'],
        correctIndex: 1
      },
      {
        id: 'L83-3', type: 'qcm', title: 'Conjugaison', characterId: 'elena',
        characterMessage: "Attention, le français a des pièges que l'espagnol n'a pas.",
        question: '« Nous ___ levons à 7h. »',
        options: ['se', 'me', 'nous', 'te'],
        correctIndex: 2,
        explanation: 'Avec « nous », le pronom réfléchi est « nous » : nous nous levons.'
      },
      {
        id: 'L83-4', type: 'flashcard', title: 'Verbes pronominaux', characterId: 'thomas',
        characterMessage: "En tant que guide, j'utilise ces mots tous les jours avec les touristes.",
        cards: [
          { front: 'Se lever', back: 'To get up' },
          { front: 'Se coucher', back: 'To go to bed' },
          { front: 'Se laver', back: 'To wash oneself' },
          { front: 'S\'habiller', back: 'To get dressed' },
          { front: 'Se promener', back: 'To take a walk' },
          { front: 'Se sentir', back: 'To feel' },
        ]
      },
      {
        id: 'L83-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        characterMessage: "Pense à la conjugaison et à l'accord — c'est souvent la clé.",
        sentence: 'Elle ___ est levée très tôt ce matin.',
        options: ['se', 's\'', 'me', 'te'],
        correctAnswer: 's\''
      },
      {
        id: 'L83-6', type: 'drag-drop', title: 'Routine dans l\'ordre', characterId: 'yuki',
        characterMessage: "Commence par trouver le sujet, puis le verbe. Le reste suivra !",
        instruction: 'Ordonnez la routine matinale :',
        items: ['Je m\'habille.', 'Je me lève.', 'Je me brosse les dents.', 'Je me lave.'],
        correctOrder: ['Je me lève.', 'Je me lave.', 'Je me brosse les dents.', 'Je m\'habille.']
      },
      {
        id: 'L83-7', type: 'qcm', title: 'Au passé composé', characterId: 'omar',
        characterMessage: "Cette question me rappelle mes premiers mois en France.",
        question: '« Elle ___ levée à 6h. » (passé composé)',
        options: ['a se', 's\'est', 'se a', 'est se'],
        correctIndex: 1,
        explanation: 'Au PC, les verbes pronominaux = pronom + être : elle s\'est levée.'
      },
      {
        id: 'L83-8', type: 'final-quiz', title: 'Quiz final — Verbes pronominaux', characterId: 'marie',
        characterMessage: "Quiz final ! Prenez votre temps, relisez bien chaque question.",
        questions: [
          { question: '« Je ___ lève à 7h. »', options: ['se', 'me', 'te', 'nous'], correctIndex: 1 },
          { question: '« To get dressed » = …', options: ['Se laver', 'S\'habiller', 'Se lever', 'Se coucher'], correctIndex: 1 },
          { question: '« Nous ___ promenons. »', options: ['se', 'me', 'nous', 'te'], correctIndex: 2 },
          { question: 'Au PC : « Il ___ couché tard. »', options: ['a se', 's\'est', 'se a', 'est'], correctIndex: 1 },
          { question: '« Se sentir » signifie…', options: ['To smell', 'To feel', 'To touch', 'To hear'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 84: Le sport en France
  {
    courseId: 'lesson-84',
    steps: [
      {
        id: 'L84-1', type: 'lesson', title: 'Le sport en France', characterId: 'marie',
        characterMessage: "Vous êtes prêts pour un défi un peu plus grand ? Allons-y !",
        content: `Parlons du **sport** en France ! ⚽🎾🚴\n\n🏆 **Sports populaires :**\n- Le football → soccer\n- Le rugby → rugby\n- Le tennis → tennis\n- Le cyclisme → cycling\n- La natation → swimming\n- Le ski → skiing\n- La pétanque → pétanque (boules)\n\n📐 **Expressions :**\n- Faire du sport → to do sports\n- Jouer au football → to play soccer\n- Faire de la natation → to swim (as a sport)\n- Faire du vélo → to cycle\n\n🎯 **Faire vs Jouer :**\n- **Jouer à** + sports avec ballon : jouer au foot, au tennis\n- **Faire de** + autres sports : faire de la natation, du ski\n\n🏅 **Événements :**\n- Le Tour de France (cyclisme)\n- Roland-Garros (tennis)\n- La Coupe du Monde (football)`,
        tip: '💡 La pétanque est un sport typiquement français, très populaire sur la Côte d\'Azur !'
      },
      {
        id: 'L84-2', type: 'listening', title: 'Écoute — Sports à Antibes', characterId: 'lucas',
        characterMessage: "Concentre-toi sur les mots-clés, pas besoin de tout comprendre.",
        text: 'À Antibes, on peut faire beaucoup de sports. En été, je fais de la natation et du surf. En hiver, je fais du ski dans les Alpes. Le week-end, je joue au tennis avec mes amis. Et bien sûr, on joue à la pétanque sur la place !',
        question: 'Quel sport pratique-t-il en hiver ?',
        options: ['La natation', 'Le surf', 'Le ski', 'La pétanque'],
        correctIndex: 2
      },
      {
        id: 'L84-3', type: 'qcm', title: 'Faire ou jouer ?', characterId: 'elena',
        characterMessage: "J'ai compris cette règle en comparant avec l'espagnol.",
        question: '« Je ___ au football avec mes amis. »',
        options: ['fais', 'joue', 'pratique', 'vais'],
        correctIndex: 1,
        explanation: 'Football = sport avec ballon → jouer au football.'
      },
      {
        id: 'L84-4', type: 'flashcard', title: 'Les sports', characterId: 'thomas',
        characterMessage: "Le vocabulaire français reflète l'art de vivre à la française.",
        cards: [
          { front: 'Le football', back: 'Soccer' },
          { front: 'Le cyclisme', back: 'Cycling' },
          { front: 'La natation', back: 'Swimming' },
          { front: 'Le ski', back: 'Skiing' },
          { front: 'La pétanque', back: 'Pétanque (boules game)' },
          { front: 'Le Tour de France', back: 'The Tour de France (cycling race)' },
        ]
      },
      {
        id: 'L84-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        characterMessage: "Le français a des règles précises. Cet exercice t'aide à les maîtriser.",
        sentence: 'Elle fait ___ natation tous les matins.',
        options: ['du', 'de la', 'au', 'le'],
        correctAnswer: 'de la'
      },
      {
        id: 'L84-6', type: 'drag-drop', title: 'Associez', characterId: 'yuki',
        characterMessage: "Cet exercice entraîne ta pensée à fonctionner en français.",
        instruction: 'Formez une phrase correcte :',
        items: ['au', 'joue', 'Il', 'week-end', 'tennis', 'le'],
        correctOrder: ['Il', 'joue', 'au', 'tennis', 'le', 'week-end']
      },
      {
        id: 'L84-7', type: 'qcm', title: 'Culture sportive', characterId: 'omar',
        characterMessage: "Cette question me rappelle mes premiers mois en France.",
        question: 'Roland-Garros est un tournoi de…',
        options: ['Football', 'Rugby', 'Tennis', 'Cyclisme'],
        correctIndex: 2,
        explanation: 'Roland-Garros est le célèbre tournoi de tennis de Paris (Grand Chelem sur terre battue).'
      },
      {
        id: 'L84-8', type: 'final-quiz', title: 'Quiz final — Le sport', characterId: 'marie',
        characterMessage: "Vous avez bien travaillé, ce quiz va le prouver !",
        questions: [
          { question: '« Swimming » = …', options: ['Le cyclisme', 'La natation', 'Le ski', 'Le surf'], correctIndex: 1 },
          { question: '« Jouer ___ football »', options: ['du', 'de la', 'au', 'le'], correctIndex: 2 },
          { question: '« Faire ___ ski »', options: ['au', 'du', 'le', 'de la'], correctIndex: 1 },
          { question: 'Le Tour de France est un événement de…', options: ['Tennis', 'Football', 'Cyclisme', 'Natation'], correctIndex: 2 },
          { question: 'La pétanque est populaire…', options: ['En Bretagne', 'Sur la Côte d\'Azur', 'En Alsace', 'En Normandie'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 85: L'impératif
  {
    courseId: 'lesson-85',
    steps: [
      {
        id: 'L85-1', type: 'lesson', title: 'L\'impératif', characterId: 'marie',
        characterMessage: "Cette leçon vous sera très utile dans la vie quotidienne.",
        content: `L'**impératif** sert à donner des ordres, des conseils ou des instructions ! 📢\n\n📐 **Formation :**\n3 personnes seulement : tu, nous, vous\n(sans le pronom sujet !)\n\n🔵 **Verbes en -ER :**\n- Mange ! (tu) — ⚠️ pas de -s !\n- Mangeons ! (nous)\n- Mangez ! (vous)\n\n🟢 **Verbes en -IR / -RE :**\n- Finis ! / Attends !\n- Finissons ! / Attendons !\n- Finissez ! / Attendez !\n\n⚠️ **Irréguliers :**\n- Être : Sois / Soyons / Soyez\n- Avoir : Aie / Ayons / Ayez\n- Aller : Va / Allons / Allez\n\n💬 **Utilisations :**\n- Conseil : Mangez des légumes !\n- Ordre : Arrêtez !\n- Instruction : Tournez à gauche.\n- Encouragement : Courage ! N'abandonnez pas !`,
        tip: '💡 À l\'impératif, les verbes en -ER perdent le -s à la 2e personne : Mange ! (pas « Manges »).'
      },
      {
        id: 'L85-2', type: 'listening', title: 'Écoute — Conseils du médecin', characterId: 'omar',
        characterMessage: "Écoute le rythme de la phrase, pas seulement les mots.",
        text: 'Écoutez bien mes conseils. Reposez-vous pendant trois jours. Buvez beaucoup d\'eau. Prenez ce médicament trois fois par jour. Ne mangez pas trop gras. Et surtout, ne fumez pas !',
        question: 'Combien de jours doit-il se reposer ?',
        options: ['Un jour', 'Deux jours', 'Trois jours', 'Une semaine'],
        correctIndex: 2
      },
      {
        id: 'L85-3', type: 'qcm', title: 'Conjugaison impérative', characterId: 'elena',
        characterMessage: "Ne traduis pas mot à mot — pense directement en français !",
        question: '« ___ tes devoirs ! » (faire, tu)',
        options: ['Fait', 'Fais', 'Faites', 'Faisons'],
        correctIndex: 1,
        explanation: 'L\'impératif de « faire » à la 2e personne du singulier : Fais !'
      },
      {
        id: 'L85-4', type: 'flashcard', title: 'L\'impératif', characterId: 'thomas',
        characterMessage: "Chaque nouveau mot te rapproche de la culture française.",
        cards: [
          { front: 'Mange ! (tu)', back: 'Eat! (no -s for -ER verbs)' },
          { front: 'Mangeons ! (nous)', back: 'Let\'s eat!' },
          { front: 'Mangez ! (vous)', back: 'Eat! (formal/plural)' },
          { front: 'Sois patient !', back: 'Be patient! (être, tu)' },
          { front: 'Ayez confiance !', back: 'Have confidence! (avoir, vous)' },
          { front: 'Allons-y !', back: 'Let\'s go!' },
        ]
      },
      {
        id: 'L85-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        characterMessage: "Lis la phrase à voix haute avec chaque option — tu entendras la bonne !",
        sentence: '___ à gauche, puis continuez tout droit. (tourner, vous)',
        options: ['Tournez', 'Tournes', 'Tourne', 'Tournons'],
        correctAnswer: 'Tournez'
      },
      {
        id: 'L85-6', type: 'drag-drop', title: 'Conseils de santé', characterId: 'yuki',
        characterMessage: "En japonais, le verbe est à la fin. En français, il est au milieu !",
        instruction: 'Remettez ces conseils dans un ordre logique :',
        items: ['Reposez-vous bien.', 'Allez chez le médecin.', 'Prenez vos médicaments.', 'Vous ne vous sentez pas bien ?'],
        correctOrder: ['Vous ne vous sentez pas bien ?', 'Allez chez le médecin.', 'Prenez vos médicaments.', 'Reposez-vous bien.']
      },
      {
        id: 'L85-7', type: 'qcm', title: 'Irrégulier', characterId: 'lucas',
        characterMessage: "J'ai posé cette question à Marie hier en classe. Maintenant je sais !",
        question: 'Impératif de « être » (tu) = …',
        options: ['Es', 'Sois', 'Soit', 'Suis'],
        correctIndex: 1,
        explanation: 'L\'impératif de « être » : Sois (tu), Soyons (nous), Soyez (vous).'
      },
      {
        id: 'L85-8', type: 'final-quiz', title: 'Quiz final — L\'impératif', characterId: 'marie',
        characterMessage: "C'est le moment de briller ! Bonne chance !",
        questions: [
          { question: '« ___ ! » (manger, tu)', options: ['Manges', 'Mange', 'Mangez', 'Mangeons'], correctIndex: 1 },
          { question: 'Impératif de « aller » (nous) = …', options: ['Allons', 'Allez', 'Va', 'Aller'], correctIndex: 0 },
          { question: '« ___ attention ! » (faire, vous)', options: ['Fais', 'Fait', 'Faites', 'Faisons'], correctIndex: 2 },
          { question: 'L\'impératif sert à…', options: ['Décrire', 'Donner un ordre ou conseil', 'Raconter au passé', 'Poser une question'], correctIndex: 1 },
          { question: '« ___ patient ! » (être, tu)', options: ['Es', 'Sois', 'Soit', 'Suis'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 86: Bien manger
  {
    courseId: 'lesson-86',
    steps: [
      {
        id: 'L86-1', type: 'lesson', title: 'Bien manger', characterId: 'marie',
        characterMessage: "Vous progressez bien ! Cette leçon va enrichir votre français.",
        content: `Parlons de l'**alimentation équilibrée** et des repas français ! 🥗\n\n🍽️ **Les repas en France :**\n- Le petit déjeuner (7h-9h) → breakfast\n- Le déjeuner (12h-14h) → lunch\n- Le goûter (16h) → afternoon snack\n- Le dîner (19h-21h) → dinner\n\n🥦 **Groupes d'aliments :**\n- Les fruits et légumes → fruits and vegetables\n- Les protéines (viande, poisson, œufs) → proteins\n- Les féculents (pain, pâtes, riz) → carbs/starches\n- Les produits laitiers (lait, fromage, yaourt) → dairy\n\n💡 **Conseils :**\n- Mangez 5 fruits et légumes par jour !\n- Buvez 1,5 litre d'eau par jour.\n- Évitez le sucre et le gras.\n- Mangez varié et équilibré.`,
        tip: '💡 En France, le déjeuner est souvent le repas principal. Il peut durer plus d\'une heure !'
      },
      {
        id: 'L86-2', type: 'listening', title: 'Écoute — Nutrition', characterId: 'elena',
        characterMessage: "Les sons du français sont parfois trompeurs pour nous, Espagnols !",
        text: 'Pour être en bonne santé, il faut bien manger. Mangez cinq fruits et légumes par jour. Évitez les aliments trop sucrés ou trop gras. Buvez beaucoup d\'eau. Et n\'oubliez pas de faire du sport !',
        question: 'Combien de fruits et légumes par jour ?',
        options: ['3', '4', '5', '7'],
        correctIndex: 2
      },
      {
        id: 'L86-3', type: 'qcm', title: 'Les repas', characterId: 'lucas',
        characterMessage: "Souviens-toi de ce qu'on a vu dans la leçon, ça va t'aider.",
        question: 'À quelle heure est le « goûter » en France ?',
        options: ['8h', '12h', '16h', '20h'],
        correctIndex: 2,
        explanation: 'Le goûter est le petit en-cas de l\'après-midi, vers 16h, surtout pour les enfants.'
      },
      {
        id: 'L86-4', type: 'flashcard', title: 'Alimentation', characterId: 'thomas',
        characterMessage: "Le français est riche de mots qui n'existent pas dans d'autres langues.",
        cards: [
          { front: 'Le petit déjeuner', back: 'Breakfast' },
          { front: 'Le déjeuner', back: 'Lunch' },
          { front: 'Le dîner', back: 'Dinner' },
          { front: 'Les légumes', back: 'Vegetables' },
          { front: 'Les produits laitiers', back: 'Dairy products' },
          { front: 'Les féculents', back: 'Starches / Carbs' },
        ]
      },
      {
        id: 'L86-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        characterMessage: "La grammaire française, c'est comme une recette : il faut les bons ingrédients !",
        sentence: '___ beaucoup d\'eau chaque jour ! (boire, vous)',
        options: ['Buvez', 'Bois', 'Buvons', 'Boire'],
        correctAnswer: 'Buvez'
      },
      {
        id: 'L86-6', type: 'drag-drop', title: 'Ordonnez les repas', characterId: 'yuki',
        characterMessage: "Les phrases sont plus longues maintenant. Lis d'abord tous les mots !",
        instruction: 'Mettez les repas dans l\'ordre chronologique :',
        items: ['Le dîner', 'Le petit déjeuner', 'Le goûter', 'Le déjeuner'],
        correctOrder: ['Le petit déjeuner', 'Le déjeuner', 'Le goûter', 'Le dîner']
      },
      {
        id: 'L86-7', type: 'qcm', title: 'Conseil', characterId: 'omar',
        characterMessage: "Cette question me rappelle mes premiers mois en France.",
        question: '« Évitez » est à l\'impératif. Ça signifie…',
        options: ['Eat', 'Avoid', 'Drink', 'Cook'],
        correctIndex: 1,
        explanation: '« Éviter » = to avoid. « Évitez le sucre » = Avoid sugar.'
      },
      {
        id: 'L86-8', type: 'final-quiz', title: 'Quiz final — Bien manger', characterId: 'marie',
        characterMessage: "Ce quiz est un peu plus long, mais vous êtes prêts !",
        questions: [
          { question: 'Le repas principal en France est souvent…', options: ['Le petit déjeuner', 'Le déjeuner', 'Le goûter', 'Le dîner'], correctIndex: 1 },
          { question: '« Dairy products » = …', options: ['Les fruits', 'Les protéines', 'Les produits laitiers', 'Les féculents'], correctIndex: 2 },
          { question: '« ___ 5 fruits et légumes ! » (manger, vous)', options: ['Mange', 'Mangez', 'Mangeons', 'Manger'], correctIndex: 1 },
          { question: 'Le goûter est vers…', options: ['8h', '12h', '16h', '20h'], correctIndex: 2 },
          { question: '« Éviter » signifie…', options: ['To eat', 'To avoid', 'To cook', 'To drink'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 87: À la plage
  {
    courseId: 'lesson-87',
    steps: [
      {
        id: 'L87-1', type: 'lesson', title: 'À la plage', characterId: 'marie',
        characterMessage: "Bravo pour votre travail ! Continuons avec un nouveau thème.",
        content: `Vocabulaire pour profiter de la **plage** à Antibes ! 🏖️\n\n🏖️ **Vocabulaire balnéaire :**\n- La plage → the beach\n- Le sable → the sand\n- La mer → the sea\n- Les vagues → the waves\n- Un maillot de bain → a swimsuit\n- Une serviette (de plage) → a (beach) towel\n- De la crème solaire → sunscreen\n- Des lunettes de soleil → sunglasses\n- Un parasol → a beach umbrella\n- Un château de sable → a sandcastle\n\n🏊 **Activités :**\n- Se baigner → to swim (in the sea)\n- Nager → to swim\n- Bronzer → to sunbathe\n- Faire du surf → to surf\n- Plonger → to dive\n\n📍 **Plages d'Antibes :**\n- La Gravette (dans le vieil Antibes)\n- La Salis (vue sur le Cap)\n- Ponteil (familiale)`,
        tip: '💡 La plage de la Gravette est la plage la plus célèbre d\'Antibes, située au pied des remparts !'
      },
      {
        id: 'L87-2', type: 'listening', title: 'Écoute — Journée plage', characterId: 'lucas',
        characterMessage: "Concentre-toi sur les mots-clés, pas besoin de tout comprendre.",
        text: 'Aujourd\'hui, nous allons à la plage de la Gravette. J\'ai mis mon maillot de bain, ma serviette et de la crème solaire dans mon sac. Il fait trente degrés ! On va se baigner et bronzer. N\'oublie pas tes lunettes de soleil !',
        question: 'Quelle est la température ?',
        options: ['25°C', '28°C', '30°C', '35°C'],
        correctIndex: 2
      },
      {
        id: 'L87-3', type: 'qcm', title: 'Vocabulaire', characterId: 'elena',
        characterMessage: "Cette structure est différente en espagnol. Fais attention !",
        question: '« Sunscreen » en français = …',
        options: ['Des lunettes de soleil', 'Un parasol', 'De la crème solaire', 'Un maillot de bain'],
        correctIndex: 2,
        explanation: 'La crème solaire = sunscreen (pour se protéger du soleil).'
      },
      {
        id: 'L87-4', type: 'flashcard', title: 'À la plage', characterId: 'thomas',
        characterMessage: "Ces expressions colorent la langue française. Apprends-les par cœur !",
        cards: [
          { front: 'Le sable', back: 'The sand' },
          { front: 'Les vagues', back: 'The waves' },
          { front: 'Un maillot de bain', back: 'A swimsuit' },
          { front: 'De la crème solaire', back: 'Sunscreen' },
          { front: 'Se baigner', back: 'To swim (in the sea)' },
          { front: 'Bronzer', back: 'To sunbathe' },
        ]
      },
      {
        id: 'L87-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        characterMessage: "À Dakar, mes professeurs nous faisaient faire beaucoup de ces exercices.",
        sentence: 'N\'oublie pas tes ___ de soleil !',
        options: ['crèmes', 'lunettes', 'serviettes', 'parasols'],
        correctAnswer: 'lunettes'
      },
      {
        id: 'L87-6', type: 'drag-drop', title: 'Préparer le sac de plage', characterId: 'yuki',
        characterMessage: "La structure française est plus souple qu'on ne le pense.",
        instruction: 'Quels objets emmener à la plage ?',
        items: ['De la crème solaire', 'Un maillot de bain', 'Un ordinateur', 'Une serviette'],
        correctOrder: ['Un maillot de bain', 'Une serviette', 'De la crème solaire', 'Un ordinateur']
      },
      {
        id: 'L87-7', type: 'qcm', title: 'Plages d\'Antibes', characterId: 'omar',
        characterMessage: "Cette question me rappelle mes premiers mois en France.",
        question: 'La plage de la Gravette est située…',
        options: ['Au Cap d\'Antibes', 'Dans le vieil Antibes', 'À Juan-les-Pins', 'À Cannes'],
        correctIndex: 1,
        explanation: 'La Gravette est la petite plage de sable au pied des remparts du vieil Antibes.'
      },
      {
        id: 'L87-8', type: 'final-quiz', title: 'Quiz final — À la plage', characterId: 'marie',
        characterMessage: "Montrez-moi tout ce que vous avez appris. Je crois en vous !",
        questions: [
          { question: '« A swimsuit » = …', options: ['Une serviette', 'Un maillot de bain', 'Un parasol', 'Des lunettes'], correctIndex: 1 },
          { question: '« Bronzer » signifie…', options: ['To swim', 'To dive', 'To sunbathe', 'To surf'], correctIndex: 2 },
          { question: '« The waves » = …', options: ['Le sable', 'La mer', 'Les vagues', 'Le vent'], correctIndex: 2 },
          { question: 'Plage célèbre d\'Antibes = …', options: ['La Croisette', 'La Promenade', 'La Gravette', 'La Corniche'], correctIndex: 2 },
          { question: '« Se baigner » signifie…', options: ['To sunbathe', 'To swim in the sea', 'To build sandcastles', 'To read'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 88: Les adverbes de fréquence
  {
    courseId: 'lesson-88',
    steps: [
      {
        id: 'L88-1', type: 'lesson', title: 'Les adverbes de fréquence', characterId: 'marie',
        characterMessage: "Aujourd'hui, on approfondit vos connaissances. C'est parti !",
        content: `Les **adverbes de fréquence** indiquent combien de fois on fait quelque chose. 📊\n\n📐 **Du plus fréquent au moins fréquent :**\n- **Toujours** → Always (100%)\n- **Souvent** → Often (~75%)\n- **Parfois / Quelquefois** → Sometimes (~50%)\n- **Rarement** → Rarely (~25%)\n- **Jamais** → Never (0%)\n\n📍 **Position :** Après le verbe conjugué\n- Je fais **toujours** du sport.\n- Elle mange **rarement** au restaurant.\n- Nous allons **souvent** à la plage.\n\n⚠️ **Au passé composé :** Entre l'auxiliaire et le participe\n- J'ai **toujours** aimé la mer.\n- Il n'a **jamais** visité Paris.\n\n❌ **Avec « jamais » → ne… jamais :**\n- Je ne fume **jamais**.\n- Il ne mange **jamais** de viande.`,
        tip: '💡 « Ne… jamais » est une négation complète. « Jamais » seul (sans « ne ») est incorrect en français standard.'
      },
      {
        id: 'L88-2', type: 'listening', title: 'Écoute — Habitudes', characterId: 'lucas',
        characterMessage: "Concentre-toi sur les mots-clés, pas besoin de tout comprendre.",
        text: 'Je fais toujours du sport le matin. Je vais souvent à la plage le week-end. Je mange parfois au restaurant avec mes amis. Je vais rarement au cinéma et je ne regarde jamais la télévision.',
        question: 'Que fait-il rarement ?',
        options: ['Du sport', 'La plage', 'Le restaurant', 'Le cinéma'],
        correctIndex: 3
      },
      {
        id: 'L88-3', type: 'qcm', title: 'Fréquence', characterId: 'elena',
        characterMessage: "C'est plus facile quand on parle déjà une langue latine !",
        question: 'Classez : du plus fréquent au moins fréquent.',
        options: ['Souvent > Toujours > Parfois', 'Toujours > Souvent > Parfois', 'Parfois > Souvent > Toujours', 'Rarement > Parfois > Souvent'],
        correctIndex: 1,
        explanation: 'Ordre : Toujours (100%) > Souvent (~75%) > Parfois (~50%) > Rarement (~25%) > Jamais (0%).'
      },
      {
        id: 'L88-4', type: 'flashcard', title: 'Adverbes de fréquence', characterId: 'thomas',
        characterMessage: "En tant que guide, j'utilise ces mots tous les jours avec les touristes.",
        cards: [
          { front: 'Toujours', back: 'Always (100%)' },
          { front: 'Souvent', back: 'Often (~75%)' },
          { front: 'Parfois / Quelquefois', back: 'Sometimes (~50%)' },
          { front: 'Rarement', back: 'Rarely (~25%)' },
          { front: 'Ne… jamais', back: 'Never (0%)' },
        ]
      },
      {
        id: 'L88-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        characterMessage: "Pense à la conjugaison et à l'accord — c'est souvent la clé.",
        sentence: 'Je ne mange ___ de viande. Je suis végétarien.',
        options: ['toujours', 'souvent', 'parfois', 'jamais'],
        correctAnswer: 'jamais'
      },
      {
        id: 'L88-6', type: 'drag-drop', title: 'Ordonnez', characterId: 'yuki',
        characterMessage: "Commence par trouver le sujet, puis le verbe. Le reste suivra !",
        instruction: 'Du plus fréquent au moins fréquent :',
        items: ['Rarement', 'Toujours', 'Parfois', 'Souvent'],
        correctOrder: ['Toujours', 'Souvent', 'Parfois', 'Rarement']
      },
      {
        id: 'L88-7', type: 'qcm', title: 'Position', characterId: 'omar',
        characterMessage: "Cette question me rappelle mes premiers mois en France.",
        question: 'Où se place l\'adverbe ? « Je ___ fais ___ du sport. »',
        options: ['Avant le verbe', 'Après le verbe', 'En début de phrase', 'À la fin'],
        correctIndex: 1,
        explanation: 'L\'adverbe de fréquence se place après le verbe conjugué : Je fais toujours du sport.'
      },
      {
        id: 'L88-8', type: 'final-quiz', title: 'Quiz final — Adverbes de fréquence', characterId: 'marie',
        characterMessage: "Quiz final ! Prenez votre temps, relisez bien chaque question.",
        questions: [
          { question: '« Always » = …', options: ['Souvent', 'Toujours', 'Parfois', 'Jamais'], correctIndex: 1 },
          { question: '« Je ne fume ___ . »', options: ['toujours', 'souvent', 'parfois', 'jamais'], correctIndex: 3 },
          { question: 'L\'adverbe se place…', options: ['Avant le sujet', 'Après le verbe', 'À la fin', 'En début'], correctIndex: 1 },
          { question: '« Rarely » = …', options: ['Souvent', 'Parfois', 'Rarement', 'Toujours'], correctIndex: 2 },
          { question: '« J\'ai ___ aimé la mer. »', options: ['toujours', 'ne jamais', 'jamais ne', 'pas'], correctIndex: 0 },
        ]
      }
    ]
  },

  // Lesson 89: Révision A2.4
  {
    courseId: 'lesson-89',
    steps: [
      {
        id: 'L89-1', type: 'lesson', title: 'Révision — Santé et bien-être', characterId: 'marie',
        characterMessage: "Vous êtes prêts pour un défi un peu plus grand ? Allons-y !",
        content: `📚 **Révision du Module A2.4**\n\n✅ **Le corps humain** : tête, bras, jambe, dos, ventre, genou…\n✅ **Chez le médecin** : J\'ai mal à… / symptômes / ordonnance\n✅ **Verbes pronominaux** : se lever, se laver, s\'habiller\n✅ **Le sport** : faire du/de la, jouer au/à la\n✅ **L\'impératif** : Mange ! Mangeons ! Mangez !\n✅ **Bien manger** : les repas français, alimentation équilibrée\n✅ **À la plage** : vocabulaire balnéaire, plages d\'Antibes\n✅ **Adverbes de fréquence** : toujours, souvent, parfois, rarement, jamais`,
        tip: '💡 Dernière ligne droite avant l\'examen ! Révisez les verbes pronominaux et l\'impératif.'
      },
      {
        id: 'L89-2', type: 'qcm', title: 'Révision', characterId: 'lucas',
        characterMessage: "Cette règle est importante — on l'utilise tous les jours !",
        question: '« J\'ai mal ___ tête. »',
        options: ['au', 'à la', 'aux', 'à l\''],
        correctIndex: 1,
        explanation: 'La tête = féminin singulier → à la tête.'
      },
      {
        id: 'L89-3', type: 'fill-blank', title: 'Révision', characterId: 'fatou',
        characterMessage: "Le français a des règles précises. Cet exercice t'aide à les maîtriser.",
        sentence: 'Elle ___ est promenée sur la plage.',
        options: ['a', 's\'est', 'est', 'se'],
        correctAnswer: 's\'est'
      },
      {
        id: 'L89-4', type: 'qcm', title: 'Révision', characterId: 'elena',
        characterMessage: "Attention, le français a des pièges que l'espagnol n'a pas.",
        question: '« ___ ! » (manger, tu) — impératif',
        options: ['Manges', 'Mange', 'Mangez', 'Manger'],
        correctIndex: 1,
        explanation: 'Verbes en -ER : pas de -s à l\'impératif (tu) → Mange !'
      },
      {
        id: 'L89-5', type: 'drag-drop', title: 'Révision', characterId: 'yuki',
        characterMessage: "Cet exercice entraîne ta pensée à fonctionner en français.",
        instruction: 'Ordonnez les repas français :',
        items: ['Le dîner', 'Le goûter', 'Le petit déjeuner', 'Le déjeuner'],
        correctOrder: ['Le petit déjeuner', 'Le déjeuner', 'Le goûter', 'Le dîner']
      },
      {
        id: 'L89-6', type: 'fill-blank', title: 'Révision', characterId: 'omar',
        sentence: 'Il fait ___ du sport. (always)',
        options: ['jamais', 'parfois', 'toujours', 'rarement'],
        correctAnswer: 'toujours'
      },
      {
        id: 'L89-7', type: 'qcm', title: 'Révision', characterId: 'lucas',
        characterMessage: "Au Brésil, on n'a pas cette règle. J'ai mis du temps à comprendre !",
        question: '« A swimsuit » = …',
        options: ['Une serviette', 'Un maillot de bain', 'Un parasol', 'Des lunettes'],
        correctIndex: 1,
        explanation: 'Un maillot de bain = a swimsuit.'
      },
      {
        id: 'L89-8', type: 'final-quiz', title: 'Quiz de révision A2.4', characterId: 'marie',
        characterMessage: "Vous avez bien travaillé, ce quiz va le prouver !",
        questions: [
          { question: '« The knee » = …', options: ['Le coude', 'Le genou', 'La cheville', 'L\'épaule'], correctIndex: 1 },
          { question: '« Je ___ lève à 7h. »', options: ['se', 'me', 'te', 'nous'], correctIndex: 1 },
          { question: '« Jouer ___ tennis »', options: ['du', 'de la', 'au', 'le'], correctIndex: 2 },
          { question: 'Impératif de « être » (vous) = …', options: ['Êtes', 'Soyez', 'Soyons', 'Sois'], correctIndex: 1 },
          { question: '« Ne… jamais » = …', options: ['Always', 'Sometimes', 'Never', 'Often'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 90: Examen A2.4
  {
    courseId: 'lesson-90',
    steps: [
      {
        id: 'L90-1', type: 'lesson', title: 'Examen Module A2.4 — Santé et bien-être', characterId: 'marie',
        characterMessage: "Cette leçon vous sera très utile dans la vie quotidienne.",
        content: `🎓 **Examen du Module A2.4**\n\nExamen final du module « Santé et bien-être ».\n\n📋 **Évaluation :**\n- Le corps humain et avoir mal à…\n- Chez le médecin\n- Les verbes pronominaux\n- Le sport (faire du / jouer au)\n- L'impératif\n- Alimentation et repas français\n- Vocabulaire de la plage\n- Les adverbes de fréquence\n\n💪 Badge « Bien dans sa peau » 💪 à débloquer !`,
        tip: '💡 Bonne chance !'
      },
      {
        id: 'L90-2', type: 'qcm', title: 'Examen Q1', characterId: 'marie',
        question: '« J\'ai mal ___ dents. »',
        options: ['au', 'à la', 'aux', 'à l\''],
        correctIndex: 2,
        explanation: 'Les dents = féminin pluriel → à + les = aux.'
      },
      {
        id: 'L90-3', type: 'fill-blank', title: 'Examen Q2', characterId: 'marie',
        sentence: 'Nous ___ levons à six heures chaque matin.',
        options: ['se', 'me', 'nous', 'te'],
        correctAnswer: 'nous'
      },
      {
        id: 'L90-4', type: 'qcm', title: 'Examen Q3', characterId: 'marie',
        question: '« ___ vos devoirs ! » (faire, vous)',
        options: ['Fais', 'Fait', 'Faites', 'Faisons'],
        correctIndex: 2,
        explanation: 'Impératif de « faire » (vous) = Faites.'
      },
      {
        id: 'L90-5', type: 'drag-drop', title: 'Examen Q4', characterId: 'marie',
        instruction: 'Du plus fréquent au moins fréquent :',
        items: ['Jamais', 'Toujours', 'Rarement', 'Souvent'],
        correctOrder: ['Toujours', 'Souvent', 'Rarement', 'Jamais']
      },
      {
        id: 'L90-6', type: 'fill-blank', title: 'Examen Q5', characterId: 'marie',
        sentence: 'Elle fait ___ natation trois fois par semaine.',
        options: ['du', 'de la', 'au', 'le'],
        correctAnswer: 'de la'
      },
      {
        id: 'L90-7', type: 'qcm', title: 'Examen Q6', characterId: 'marie',
        question: '« A prescription » = …',
        options: ['Un médicament', 'Une ordonnance', 'Un symptôme', 'Un comprimé'],
        correctIndex: 1,
        explanation: 'Une ordonnance = a prescription.'
      },
      {
        id: 'L90-8', type: 'final-quiz', title: 'Examen final A2.4', characterId: 'marie',
        characterMessage: "C'est le moment de briller ! Bonne chance !",
        questions: [
          { question: '« Se coucher » signifie…', options: ['To get up', 'To go to bed', 'To wash', 'To get dressed'], correctIndex: 1 },
          { question: '« ___ à gauche ! » (tourner, vous)', options: ['Tourne', 'Tournes', 'Tournez', 'Tournons'], correctIndex: 2 },
          { question: '« Swimming » = …', options: ['Le cyclisme', 'La natation', 'Le surf', 'Le ski'], correctIndex: 1 },
          { question: '« Sunscreen » = …', options: ['Lunettes de soleil', 'Crème solaire', 'Parasol', 'Serviette'], correctIndex: 1 },
          { question: '« I have a cold » = …', options: ['J\'ai chaud', 'J\'ai un rhume', 'J\'ai froid', 'J\'ai faim'], correctIndex: 1 },
        ]
      }
    ]
  },
];
