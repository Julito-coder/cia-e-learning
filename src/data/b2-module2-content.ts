// Interactive lesson content for B2 Module 2: Le monde professionnel (Lessons 161-170)
import type { CourseContent } from './course-content';

export const b2Module2Content: CourseContent[] = [
  // Lesson 161: La lettre de motivation avancée
  {
    courseId: 'lesson-161',
    steps: [
      {
        id: 'L161-1', type: 'lesson', title: 'La lettre de motivation avancée', characterId: 'marie',
        content: `Au niveau B2, la lettre de motivation doit être **convaincante et personnalisée**.\n\n📐 **Structure :**\n\n1️⃣ **En-tête** — Vos coordonnées, celles de l'entreprise, date, objet\n2️⃣ **Paragraphe 1 — Vous** : Qui êtes-vous ? Formation, expérience clé.\n3️⃣ **Paragraphe 2 — L'entreprise** : Pourquoi cette entreprise ? Montrez que vous la connaissez.\n4️⃣ **Paragraphe 3 — Le projet commun** : Ce que vous apporterez.\n5️⃣ **Conclusion** : Demande d'entretien, formule de politesse.\n\n📝 **Formules clés :**\n- « Votre entreprise, reconnue pour… »\n- « Fort(e) de mon expérience en… »\n- « Je serais ravi(e) de mettre mes compétences au service de… »\n- « Dans l'attente de votre réponse, je vous prie d'agréer… »`,
        tip: '💡 Personnalisez TOUJOURS votre lettre. Les lettres génériques sont immédiatement repérées !'
      },
      {
        id: 'L161-2', type: 'listening', title: 'Écoute — Conseils d\'un recruteur', characterId: 'hans',
        text: 'Ce que je recherche dans une lettre de motivation, c\'est avant tout la personnalisation. Le candidat doit montrer qu\'il connaît notre entreprise. Ensuite, il faut être concis : une page maximum. Enfin, évitez les fautes d\'orthographe, c\'est éliminatoire.',
        question: 'Que dit le recruteur sur la longueur ?',
        options: ['Deux pages minimum', 'Une page maximum', 'Pas de limite', 'Un paragraphe suffit'],
        correctIndex: 1
      },
      {
        id: 'L161-3', type: 'qcm', title: 'Formule de politesse', characterId: 'elena',
        question: 'Quelle est la formule de politesse correcte ?',
        options: ['Salut, à bientôt !', 'Cordialement et à plus', 'Je vous prie d\'agréer l\'expression de mes salutations distinguées.', 'Merci beaucoup, au revoir.'],
        correctIndex: 2,
        explanation: 'La formule « Je vous prie d\'agréer… » est la formule de politesse standard pour une lettre formelle.'
      },
      {
        id: 'L161-4', type: 'flashcard', title: 'Vocabulaire professionnel', characterId: 'thomas',
        cards: [
          { front: 'Fort(e) de mon expérience…', back: 'Building on my experience…' },
          { front: 'Mettre mes compétences au service de…', back: 'To put my skills at the service of…' },
          { front: 'Dans l\'attente de votre réponse…', back: 'Looking forward to your reply…' },
          { front: 'Je serais ravi(e) de…', back: 'I would be delighted to…' },
          { front: 'Votre entreprise, reconnue pour…', back: 'Your company, known for…' },
          { front: 'Je me permets de postuler…', back: 'I take the liberty of applying…' },
        ]
      },
      {
        id: 'L161-5', type: 'fill-blank', title: 'Complétez la lettre', characterId: 'fatou',
        sentence: '___ de mon expérience en marketing digital, je souhaite rejoindre votre équipe.',
        options: ['Fort', 'Grâce', 'Malgré', 'Selon'],
        correctAnswer: 'Fort'
      },
      {
        id: 'L161-6', type: 'drag-drop', title: 'Ordre de la lettre', characterId: 'yuki',
        instruction: 'Remettez les paragraphes dans l\'ordre :',
        items: ['Formule de politesse', 'Présentation de soi', 'Pourquoi cette entreprise', 'Ce que j\'apporterai'],
        correctOrder: ['Présentation de soi', 'Pourquoi cette entreprise', 'Ce que j\'apporterai', 'Formule de politesse']
      },
      {
        id: 'L161-7', type: 'qcm', title: 'Erreur à éviter', characterId: 'lucas',
        question: 'Qu\'est-ce qu\'un recruteur n\'aime PAS dans une lettre ?',
        options: ['La personnalisation', 'Les fautes d\'orthographe', 'La concision', 'Les exemples concrets'],
        correctIndex: 1,
        explanation: 'Les fautes d\'orthographe sont rédhibitoires et peuvent être éliminatoires.'
      },
      {
        id: 'L161-8', type: 'final-quiz', title: 'Quiz final — La lettre de motivation', characterId: 'marie',
        questions: [
          { question: 'Longueur idéale d\'une lettre de motivation :', options: ['3 pages', '1 page', 'Un SMS', '5 pages'], correctIndex: 1 },
          { question: '« ___ de votre réponse, je vous prie d\'agréer… »', options: ['Dans l\'attente', 'En espérant', 'Grâce à', 'Malgré'], correctIndex: 0 },
          { question: 'Le paragraphe 2 doit parler de :', options: ['Vos hobbies', 'L\'entreprise', 'La météo', 'Vos défauts'], correctIndex: 1 },
          { question: '« Je ___ ravi(e) de vous rencontrer. »', options: ['suis', 'serais', 'serai', 'étais'], correctIndex: 1 },
          { question: 'Le ton d\'une lettre de motivation est :', options: ['Familier', 'Humoristique', 'Professionnel et soutenu', 'Poétique'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 162: L'entretien d'embauche avancé
  {
    courseId: 'lesson-162',
    steps: [
      {
        id: 'L162-1', type: 'lesson', title: 'L\'entretien d\'embauche avancé', characterId: 'marie',
        content: `L'entretien d'embauche au niveau B2 exige de savoir gérer les **questions pièges** et se vendre avec assurance.\n\n🎯 **Questions classiques :**\n- « Parlez-moi de vous. » → Résumez en 2 minutes\n- « Quels sont vos points forts / faibles ? »\n- « Pourquoi devrions-nous vous embaucher ? »\n- « Où vous voyez-vous dans 5 ans ? »\n- « Parlez-moi d'un échec professionnel. »\n\n💡 **Technique STAR pour répondre :**\n- **S**ituation — Contexte\n- **T**âche — Votre rôle\n- **A**ction — Ce que vous avez fait\n- **R**ésultat — Le résultat obtenu\n\n📝 **Formules :**\n- « Mon principal atout est… »\n- « J'ai su faire preuve de… »\n- « Cette expérience m'a permis de développer… »`,
        tip: '💡 Transformez toujours un « défaut » en qualité : « Je suis perfectionniste, ce qui me pousse à toujours améliorer mon travail. »'
      },
      {
        id: 'L162-2', type: 'listening', title: 'Écoute — Simulation d\'entretien', characterId: 'hans',
        text: 'Recruteur : Parlez-moi d\'un défi professionnel que vous avez relevé. Candidat : Lors de mon stage à Nice, j\'ai dû gérer un projet en retard. J\'ai réorganisé le planning, mobilisé l\'équipe et nous avons livré à temps. Cette expérience m\'a appris la gestion du stress.',
        question: 'Quelle technique le candidat utilise-t-il ?',
        options: ['L\'humour', 'La méthode STAR', 'La flatterie', 'L\'improvisation'],
        correctIndex: 1
      },
      {
        id: 'L162-3', type: 'qcm', title: 'Question piège', characterId: 'elena',
        question: 'Comment répondre à « Quel est votre principal défaut ? »',
        options: ['Je n\'ai aucun défaut.', 'Je suis paresseux.', 'Je suis perfectionniste, ce qui me pousse à vérifier chaque détail.', 'Je déteste travailler en équipe.'],
        correctIndex: 2,
        explanation: 'Il faut transformer le défaut en qualité ou montrer qu\'on en est conscient et qu\'on travaille dessus.'
      },
      {
        id: 'L162-4', type: 'flashcard', title: 'Vocabulaire de l\'entretien', characterId: 'thomas',
        cards: [
          { front: 'Un atout', back: 'An asset / a strength' },
          { front: 'Faire preuve de…', back: 'To demonstrate / show…' },
          { front: 'Relever un défi', back: 'To take on a challenge' },
          { front: 'Mon parcours professionnel', back: 'My career path' },
          { front: 'La gestion du stress', back: 'Stress management' },
          { front: 'S\'intégrer dans une équipe', back: 'To fit into a team' },
        ]
      },
      {
        id: 'L162-5', type: 'fill-blank', title: 'Complétez la réponse', characterId: 'fatou',
        sentence: 'Cette expérience m\'a ___ de développer mes compétences en leadership.',
        options: ['permis', 'fait', 'donné', 'laissé'],
        correctAnswer: 'permis'
      },
      {
        id: 'L162-6', type: 'drag-drop', title: 'Méthode STAR', characterId: 'yuki',
        instruction: 'Remettez les étapes STAR dans l\'ordre :',
        items: ['Résultat', 'Action', 'Situation', 'Tâche'],
        correctOrder: ['Situation', 'Tâche', 'Action', 'Résultat']
      },
      {
        id: 'L162-7', type: 'qcm', title: '« Parlez-moi de vous »', characterId: 'lucas',
        question: 'Que doit contenir votre réponse à « Parlez-moi de vous » ?',
        options: ['Votre vie amoureuse', 'Votre parcours pro + motivations (2 min)', 'Votre signe astrologique', 'Votre opinion politique'],
        correctIndex: 1,
        explanation: '« Parlez-moi de vous » attend un résumé professionnel structuré de 2 minutes maximum.'
      },
      {
        id: 'L162-8', type: 'final-quiz', title: 'Quiz final — L\'entretien', characterId: 'marie',
        questions: [
          { question: 'STAR signifie :', options: ['Style, Temps, Art, Réponse', 'Situation, Tâche, Action, Résultat', 'Savoir, Talent, Ambition, Rigueur', 'Stress, Travail, Analyse, Rendement'], correctIndex: 1 },
          { question: '« J\'ai su faire ___ de créativité. »', options: ['preuve', 'acte', 'montre', 'signe'], correctIndex: 0 },
          { question: 'Face à un « défaut », il faut :', options: ['Mentir', 'Le transformer en qualité', 'Dire qu\'on n\'en a pas', 'Pleurer'], correctIndex: 1 },
          { question: '« Mon principal ___ est ma capacité d\'adaptation. »', options: ['défaut', 'atout', 'problème', 'ennui'], correctIndex: 1 },
          { question: '« Parlez-moi de vous » dure environ :', options: ['10 secondes', '2 minutes', '30 minutes', '1 heure'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 163: Animer une réunion
  {
    courseId: 'lesson-163',
    steps: [
      {
        id: 'L163-1', type: 'lesson', title: 'Animer une réunion', characterId: 'marie',
        content: `Savoir **animer une réunion** est une compétence professionnelle essentielle.\n\n📐 **Structure d'une réunion :**\n\n1️⃣ **Ouverture :**\n- « Bonjour à tous, merci d'être présents. »\n- « L'ordre du jour comporte trois points… »\n\n2️⃣ **Distribution de la parole :**\n- « Qu'en pensez-vous, Marie ? »\n- « Quelqu'un souhaite-t-il ajouter quelque chose ? »\n\n3️⃣ **Recadrage :**\n- « Revenons au sujet, s'il vous plaît. »\n- « Nous nous éloignons du point principal. »\n\n4️⃣ **Synthèse :**\n- « Pour résumer les décisions prises… »\n\n5️⃣ **Clôture :**\n- « Je propose de fixer la prochaine réunion au… »\n- « Merci à tous pour votre participation. »`,
        tip: '💡 Un bon animateur écoute autant qu\'il parle. Veillez à donner la parole à chacun.'
      },
      {
        id: 'L163-2', type: 'listening', title: 'Écoute — Extrait de réunion', characterId: 'hans',
        text: 'Bien, merci à tous d\'être là. L\'ordre du jour comporte deux points : le bilan du trimestre et les objectifs du prochain. Marie, pourriez-vous commencer par le bilan des ventes ? Ensuite, nous passerons aux prévisions. Des questions avant de commencer ?',
        question: 'Combien de points comporte l\'ordre du jour ?',
        options: ['Un', 'Deux', 'Trois', 'Quatre'],
        correctIndex: 1
      },
      {
        id: 'L163-3', type: 'qcm', title: 'Donner la parole', characterId: 'elena',
        question: 'Quelle formule pour donner la parole ?',
        options: ['Tais-toi et écoute.', 'Qu\'en pensez-vous, Jean ?', 'Personne ne parle !', 'C\'est mon tour.'],
        correctIndex: 1,
        explanation: '« Qu\'en pensez-vous ? » est une formule polie pour inviter quelqu\'un à s\'exprimer.'
      },
      {
        id: 'L163-4', type: 'flashcard', title: 'Expressions de réunion', characterId: 'thomas',
        cards: [
          { front: 'L\'ordre du jour', back: 'The agenda' },
          { front: 'Distribuer la parole', back: 'To give the floor / chair the discussion' },
          { front: 'Revenons au sujet', back: 'Let\'s get back on topic' },
          { front: 'Pour résumer…', back: 'To summarize…' },
          { front: 'La prochaine réunion est fixée au…', back: 'The next meeting is scheduled for…' },
          { front: 'Un compte-rendu', back: 'Minutes / a report' },
        ]
      },
      {
        id: 'L163-5', type: 'fill-blank', title: 'Recadrez la discussion', characterId: 'fatou',
        sentence: 'Nous nous éloignons du sujet. ___ au point principal, s\'il vous plaît.',
        options: ['Revenons', 'Partons', 'Oublions', 'Passons'],
        correctAnswer: 'Revenons'
      },
      {
        id: 'L163-6', type: 'drag-drop', title: 'Étapes d\'une réunion', characterId: 'yuki',
        instruction: 'Remettez les étapes dans l\'ordre :',
        items: ['Clôture', 'Ouverture', 'Discussion', 'Synthèse'],
        correctOrder: ['Ouverture', 'Discussion', 'Synthèse', 'Clôture']
      },
      {
        id: 'L163-7', type: 'qcm', title: 'Clôturer une réunion', characterId: 'lucas',
        question: 'Comment clôturer une réunion ?',
        options: ['On s\'en va sans rien dire.', 'Je résume les décisions et fixe la prochaine date.', 'Allez, c\'est fini, salut !', 'On continue jusqu\'à épuisement.'],
        correctIndex: 1,
        explanation: 'Une bonne clôture inclut un résumé des décisions et la planification de la suite.'
      },
      {
        id: 'L163-8', type: 'final-quiz', title: 'Quiz final — Animer une réunion', characterId: 'marie',
        questions: [
          { question: '« L\'___ du jour comporte trois points. »', options: ['ordre', 'heure', 'endroit', 'objet'], correctIndex: 0 },
          { question: 'Pour recadrer, on dit :', options: ['Taisez-vous !', 'Revenons au sujet.', 'C\'est pas intéressant.', 'On s\'en fiche.'], correctIndex: 1 },
          { question: 'Le document qui résume une réunion s\'appelle :', options: ['Un CV', 'Un compte-rendu', 'Une lettre', 'Un essai'], correctIndex: 1 },
          { question: '« ___ souhaite ajouter quelque chose ? »', options: ['Personne', 'Quelqu\'un', 'Tout le monde', 'Rien'], correctIndex: 1 },
          { question: 'L\'animateur doit surtout :', options: ['Parler tout le temps', 'Écouter et distribuer la parole', 'Dormir', 'Critiquer les autres'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 164: Le discours indirect au passé
  {
    courseId: 'lesson-164',
    steps: [
      {
        id: 'L164-1', type: 'lesson', title: 'Le discours indirect au passé', characterId: 'marie',
        content: `Le **discours indirect au passé** demande la **concordance des temps**.\n\n📐 **Transformations :**\n\n| Direct (présent) | Indirect (passé) |\n|---|---|\n| « Je **suis** fatigué. » | Il a dit qu'il **était** fatigué. |\n| « Je **vais** partir. » | Il a dit qu'il **allait** partir. |\n| « J'**ai fini**. » | Il a dit qu'il **avait fini**. |\n| « Je **partirai** demain. » | Il a dit qu'il **partirait** le lendemain. |\n\n🔄 **Changements de repères :**\n- aujourd'hui → ce jour-là\n- demain → le lendemain\n- hier → la veille\n- ici → là-bas\n- maintenant → à ce moment-là\n\n📝 **Verbes introducteurs :**\n- Il a dit que… / Elle a affirmé que…\n- Il a demandé si… / Elle a voulu savoir si…\n- Il a ordonné de… (+ infinitif)`,
        tip: '💡 Le verbe introducteur au passé déclenche la concordance des temps dans la subordonnée.'
      },
      {
        id: 'L164-2', type: 'listening', title: 'Écoute — Rapporter une conversation', characterId: 'omar',
        text: 'Marie m\'a dit qu\'elle était fatiguée et qu\'elle allait se coucher tôt. Elle a ajouté qu\'elle avait eu une longue journée au bureau. Elle m\'a demandé si je pourrais la remplacer le lendemain matin.',
        question: 'Que demande Marie ?',
        options: ['De la rejoindre', 'De la remplacer le lendemain', 'De l\'appeler', 'De venir au bureau'],
        correctIndex: 1
      },
      {
        id: 'L164-3', type: 'qcm', title: 'Concordance des temps', characterId: 'elena',
        question: '« Je suis content. » → Il a dit qu\'il ___ content.',
        options: ['est', 'était', 'sera', 'serait'],
        correctIndex: 1,
        explanation: 'Présent → imparfait dans le discours indirect au passé.'
      },
      {
        id: 'L164-4', type: 'flashcard', title: 'Changements de repères', characterId: 'thomas',
        cards: [
          { front: 'aujourd\'hui → …', back: 'ce jour-là' },
          { front: 'demain → …', back: 'le lendemain' },
          { front: 'hier → …', back: 'la veille' },
          { front: 'maintenant → …', back: 'à ce moment-là' },
          { front: 'ici → …', back: 'là-bas / là' },
          { front: 'la semaine prochaine → …', back: 'la semaine suivante' },
        ]
      },
      {
        id: 'L164-5', type: 'fill-blank', title: 'Transformez au discours indirect', characterId: 'fatou',
        sentence: '« Je viendrai demain. » → Il a dit qu\'il ___ le lendemain.',
        options: ['viendrait', 'vient', 'viendra', 'venait'],
        correctAnswer: 'viendrait'
      },
      {
        id: 'L164-6', type: 'drag-drop', title: 'Reconstituez la phrase', characterId: 'yuki',
        instruction: 'Formez le discours indirect :',
        items: ['qu\'il', 'avait', 'Il a dit', 'faim'],
        correctOrder: ['Il a dit', 'qu\'il', 'avait', 'faim']
      },
      {
        id: 'L164-7', type: 'qcm', title: 'Futur → Conditionnel', characterId: 'lucas',
        question: '« J\'irai au cinéma. » → Elle a dit qu\'elle ___ au cinéma.',
        options: ['ira', 'irait', 'allait', 'va'],
        correctIndex: 1,
        explanation: 'Le futur simple devient conditionnel présent dans le discours indirect au passé.'
      },
      {
        id: 'L164-8', type: 'final-quiz', title: 'Quiz final — Discours indirect au passé', characterId: 'marie',
        questions: [
          { question: '« Je suis fatigué. » → Il a dit qu\'il ___ fatigué.', options: ['est', 'était', 'sera', 'serait'], correctIndex: 1 },
          { question: '« demain » devient :', options: ['aujourd\'hui', 'hier', 'le lendemain', 'ce jour-là'], correctIndex: 2 },
          { question: '« J\'ai fini. » → Elle a dit qu\'elle ___', options: ['a fini', 'avait fini', 'aura fini', 'finissait'], correctIndex: 1 },
          { question: '« Viens ici ! » → Il m\'a dit de ___ là-bas.', options: ['venir', 'aller', 'partir', 'rester'], correctIndex: 0 },
          { question: '« Il pleut. » → Elle a dit qu\'il ___', options: ['pleut', 'pleuvait', 'pleuvra', 'a plu'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 165: Rédiger un compte-rendu
  {
    courseId: 'lesson-165',
    steps: [
      {
        id: 'L165-1', type: 'lesson', title: 'Rédiger un compte-rendu', characterId: 'marie',
        content: `Le **compte-rendu** est un document professionnel qui résume les échanges et décisions d'une réunion.\n\n📐 **Structure :**\n\n1️⃣ **En-tête :** Date, lieu, participants, objet\n2️⃣ **Points abordés :** Chaque sujet avec les décisions prises\n3️⃣ **Actions à mener :** Qui fait quoi, avec quelle échéance\n4️⃣ **Prochaine réunion :** Date et ordre du jour prévu\n\n📝 **Style :**\n- Ton neutre et objectif\n- Phrases courtes et claires\n- Utilisation du passé composé ou du présent\n- Pas d\'opinions personnelles\n\n💡 **Formules :**\n- « Il a été décidé que… »\n- « M. Dupont a souligné l'importance de… »\n- « La réunion a été levée à… »`,
        tip: '💡 Un bon compte-rendu permet à un absent de comprendre exactement ce qui s\'est passé.'
      },
      {
        id: 'L165-2', type: 'listening', title: 'Écoute — Extrait de compte-rendu oral', characterId: 'hans',
        text: 'Pour résumer la réunion de ce matin : premièrement, il a été décidé d\'augmenter le budget marketing de dix pour cent. Deuxièmement, Marie prendra en charge la communication digitale. La prochaine réunion est fixée au quinze janvier.',
        question: 'De combien augmente le budget marketing ?',
        options: ['5%', '10%', '15%', '20%'],
        correctIndex: 1
      },
      {
        id: 'L165-3', type: 'qcm', title: 'Ton du compte-rendu', characterId: 'elena',
        question: 'Quel ton doit avoir un compte-rendu ?',
        options: ['Enthousiaste et émotionnel', 'Neutre et objectif', 'Humoristique', 'Poétique'],
        correctIndex: 1,
        explanation: 'Le compte-rendu doit être neutre, objectif et factuel.'
      },
      {
        id: 'L165-4', type: 'flashcard', title: 'Vocabulaire du compte-rendu', characterId: 'thomas',
        cards: [
          { front: 'Il a été décidé que…', back: 'It was decided that…' },
          { front: 'M. X a souligné…', back: 'Mr. X emphasized…' },
          { front: 'La réunion a été levée à…', back: 'The meeting was adjourned at…' },
          { front: 'Les participants', back: 'The attendees' },
          { front: 'L\'ordre du jour', back: 'The agenda' },
          { front: 'Les actions à mener', back: 'Action items' },
        ]
      },
      {
        id: 'L165-5', type: 'fill-blank', title: 'Formule de compte-rendu', characterId: 'fatou',
        sentence: 'Il a été ___ de reporter le projet au mois prochain.',
        options: ['décidé', 'pensé', 'rêvé', 'oublié'],
        correctAnswer: 'décidé'
      },
      {
        id: 'L165-6', type: 'drag-drop', title: 'Structure du compte-rendu', characterId: 'yuki',
        instruction: 'Remettez dans l\'ordre :',
        items: ['Prochaine réunion', 'En-tête', 'Actions à mener', 'Points abordés'],
        correctOrder: ['En-tête', 'Points abordés', 'Actions à mener', 'Prochaine réunion']
      },
      {
        id: 'L165-7', type: 'qcm', title: 'Ce qui n\'a PAS sa place', characterId: 'lucas',
        question: 'Qu\'est-ce qui n\'a PAS sa place dans un compte-rendu ?',
        options: ['Les décisions prises', 'Les opinions personnelles du rédacteur', 'La date de la réunion', 'Les participants'],
        correctIndex: 1,
        explanation: 'Le compte-rendu doit rester objectif : pas d\'opinions personnelles du rédacteur.'
      },
      {
        id: 'L165-8', type: 'final-quiz', title: 'Quiz final — Le compte-rendu', characterId: 'marie',
        questions: [
          { question: 'Le compte-rendu est :', options: ['Subjectif', 'Objectif', 'Poétique', 'Familier'], correctIndex: 1 },
          { question: '« La réunion a été ___ à 17h. »', options: ['levée', 'ouverte', 'commencée', 'lancée'], correctIndex: 0 },
          { question: 'L\'en-tête contient :', options: ['Date, lieu, participants', 'Des blagues', 'Des recettes', 'Des opinions'], correctIndex: 0 },
          { question: '« Il a été décidé ___… »', options: ['que', 'parce que', 'si', 'quand'], correctIndex: 0 },
          { question: 'Un absent doit pouvoir :', options: ['Deviner ce qui s\'est passé', 'Comprendre les décisions grâce au CR', 'Ignorer la réunion', 'Demander à tout le monde'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 166: Négocier
  {
    courseId: 'lesson-166',
    steps: [
      {
        id: 'L166-1', type: 'lesson', title: 'Négocier en français', characterId: 'marie',
        content: `La **négociation** est un art qui demande tact et stratégie.\n\n🎯 **Étapes de la négociation :**\n1. Exposer sa position\n2. Écouter la contre-proposition\n3. Trouver un terrain d'entente\n4. Conclure l'accord\n\n📝 **Expressions clés :**\n\n✅ **Proposer :**\n- « Je vous propose de… »\n- « Seriez-vous d'accord pour… ? »\n- « Que diriez-vous de… ? »\n\n🔄 **Contre-proposer :**\n- « C'est intéressant, mais je préférerais… »\n- « Je comprends votre position, toutefois… »\n\n🤝 **Compromis :**\n- « Trouvons un terrain d'entente. »\n- « Si vous acceptez X, nous pourrions envisager Y. »\n- « Faisons un compromis : … »`,
        tip: '💡 En négociation, écoutez d\'abord, proposez ensuite. Ne fermez jamais la porte !'
      },
      {
        id: 'L166-2', type: 'listening', title: 'Écoute — Négociation commerciale', characterId: 'hans',
        text: 'Fournisseur : Je vous propose un prix de cinq mille euros. Client : C\'est intéressant, mais notre budget est de quatre mille. Que diriez-vous de quatre mille cinq cents avec une livraison gratuite ? Fournisseur : Si vous commandez en double quantité, c\'est acceptable.',
        question: 'Quel compromis est trouvé ?',
        options: ['5000€ sans livraison', '4500€ avec livraison gratuite si double commande', '4000€ sans condition', '3000€ avec livraison payante'],
        correctIndex: 1
      },
      {
        id: 'L166-3', type: 'qcm', title: 'Formule de compromis', characterId: 'elena',
        question: 'Quelle formule propose un compromis ?',
        options: ['C\'est non, point final.', 'Trouvons un terrain d\'entente.', 'Je refuse de discuter.', 'C\'est à prendre ou à laisser.'],
        correctIndex: 1,
        explanation: '« Trouvons un terrain d\'entente » invite à chercher un compromis acceptable pour les deux parties.'
      },
      {
        id: 'L166-4', type: 'flashcard', title: 'Vocabulaire de la négociation', characterId: 'thomas',
        cards: [
          { front: 'Un terrain d\'entente', back: 'Common ground / middle ground' },
          { front: 'Contre-proposer', back: 'To make a counter-offer' },
          { front: 'Faire un compromis', back: 'To compromise' },
          { front: 'Conclure un accord', back: 'To close a deal' },
          { front: 'Seriez-vous d\'accord pour… ?', back: 'Would you agree to… ?' },
          { front: 'Envisager', back: 'To consider / to envision' },
        ]
      },
      {
        id: 'L166-5', type: 'fill-blank', title: 'Complétez la négociation', characterId: 'fatou',
        sentence: 'Si vous acceptez ce délai, nous ___ envisager une remise de 5%.',
        options: ['pourrions', 'pouvons', 'pourrons', 'pouvions'],
        correctAnswer: 'pourrions'
      },
      {
        id: 'L166-6', type: 'drag-drop', title: 'Étapes de la négociation', characterId: 'yuki',
        instruction: 'Remettez dans l\'ordre :',
        items: ['Conclure l\'accord', 'Écouter la contre-proposition', 'Exposer sa position', 'Trouver un compromis'],
        correctOrder: ['Exposer sa position', 'Écouter la contre-proposition', 'Trouver un compromis', 'Conclure l\'accord']
      },
      {
        id: 'L166-7', type: 'qcm', title: 'Attitude en négociation', characterId: 'lucas',
        question: 'Quelle attitude favorise la négociation ?',
        options: ['L\'agressivité', 'L\'écoute active et le respect', 'L\'indifférence', 'La manipulation'],
        correctIndex: 1,
        explanation: 'L\'écoute active et le respect mutuel sont les bases d\'une négociation réussie.'
      },
      {
        id: 'L166-8', type: 'final-quiz', title: 'Quiz final — Négocier', characterId: 'marie',
        questions: [
          { question: '« Que ___ de baisser le prix de 10% ? »', options: ['dites-vous', 'diriez-vous', 'direz-vous', 'disiez-vous'], correctIndex: 1 },
          { question: '« Un terrain d\'entente » signifie :', options: ['Un terrain de sport', 'Un compromis', 'Un désaccord', 'Une propriété'], correctIndex: 1 },
          { question: 'La première étape de négociation est :', options: ['Conclure', 'Contre-proposer', 'Exposer sa position', 'Refuser'], correctIndex: 2 },
          { question: '« ___ vous acceptez X, nous pourrions Y. »', options: ['Si', 'Quand', 'Parce que', 'Bien que'], correctIndex: 0 },
          { question: 'Négocier, c\'est avant tout :', options: ['Imposer', 'Écouter et chercher un accord', 'Refuser tout', 'Ignorer l\'autre'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 167: La culture d'entreprise française
  {
    courseId: 'lesson-167',
    steps: [
      {
        id: 'L167-1', type: 'lesson', title: 'La culture d\'entreprise française', characterId: 'marie',
        content: `Travailler en France implique de comprendre la **culture d'entreprise** locale.\n\n🏢 **Spécificités françaises :**\n\n⏰ **Horaires :**\n- La semaine de 35 heures\n- Pause déjeuner longue (1h-1h30)\n- Réunions souvent en fin de journée\n\n🏖️ **Congés :**\n- 5 semaines de congés payés minimum\n- RTT (Réduction du Temps de Travail)\n- Jours fériés nombreux (11 par an)\n\n👔 **Hiérarchie :**\n- Structure souvent pyramidale\n- Le vouvoiement avec les supérieurs\n- La « pause café » : moment de socialisation important\n\n🍽️ **Déjeuner :**\n- Le repas du midi est un moment social\n- Tickets restaurant / cantine d'entreprise\n- On ne mange pas devant son écran (en théorie !)`,
        tip: '💡 La pause café en France n\'est pas une perte de temps : c\'est là que se créent les liens professionnels.'
      },
      {
        id: 'L167-2', type: 'listening', title: 'Écoute — Témoignage d\'un expatrié', characterId: 'omar',
        text: 'Quand je suis arrivé en France, j\'ai été surpris par la durée de la pause déjeuner. En Allemagne, on mange en trente minutes. Ici, c\'est minimum une heure ! Mais j\'ai compris que c\'est un moment de convivialité essentiel. Autre surprise : les cinq semaines de vacances. C\'est formidable !',
        question: 'Qu\'est-ce qui a surpris l\'expatrié ?',
        options: ['Les horaires matinaux', 'La pause déjeuner longue et les vacances', 'Le salaire élevé', 'Le travail le dimanche'],
        correctIndex: 1
      },
      {
        id: 'L167-3', type: 'qcm', title: 'Les 35 heures', characterId: 'elena',
        question: 'Quelle est la durée légale du travail en France ?',
        options: ['30 heures', '35 heures', '40 heures', '45 heures'],
        correctIndex: 1,
        explanation: 'La durée légale du travail en France est de 35 heures par semaine depuis 2000.'
      },
      {
        id: 'L167-4', type: 'flashcard', title: 'Vocabulaire de l\'entreprise', characterId: 'thomas',
        cards: [
          { front: 'Les congés payés', back: 'Paid vacation / annual leave' },
          { front: 'RTT', back: 'Compensatory time off (Réduction du Temps de Travail)' },
          { front: 'Un ticket restaurant', back: 'A meal voucher' },
          { front: 'La hiérarchie', back: 'The hierarchy' },
          { front: 'La pause café', back: 'Coffee break (important social time)' },
          { front: 'Le comité d\'entreprise (CE)', back: 'Works council' },
        ]
      },
      {
        id: 'L167-5', type: 'fill-blank', title: 'Culture d\'entreprise', characterId: 'fatou',
        sentence: 'En France, les salariés ont minimum ___ semaines de congés payés par an.',
        options: ['deux', 'trois', 'cinq', 'huit'],
        correctAnswer: 'cinq'
      },
      {
        id: 'L167-6', type: 'drag-drop', title: 'Associez les concepts', characterId: 'yuki',
        instruction: 'Du plus court au plus long congé :',
        items: ['Un jour férié', 'Un week-end', 'Les congés annuels (5 semaines)'],
        correctOrder: ['Un jour férié', 'Un week-end', 'Les congés annuels (5 semaines)']
      },
      {
        id: 'L167-7', type: 'qcm', title: 'Vouvoiement au travail', characterId: 'lucas',
        question: 'Avec qui utilisez-vous le vouvoiement au bureau ?',
        options: ['Uniquement les clients', 'Les supérieurs et les personnes qu\'on ne connaît pas bien', 'Personne', 'Uniquement les stagiaires'],
        correctIndex: 1,
        explanation: 'Le vouvoiement s\'utilise avec les supérieurs et les personnes avec qui on n\'a pas encore établi de familiarité.'
      },
      {
        id: 'L167-8', type: 'final-quiz', title: 'Quiz final — Culture d\'entreprise', characterId: 'marie',
        questions: [
          { question: 'Durée de la semaine de travail en France :', options: ['30h', '35h', '40h', '48h'], correctIndex: 1 },
          { question: 'Nombre de semaines de congés payés minimum :', options: ['2', '3', '4', '5'], correctIndex: 3 },
          { question: 'RTT signifie :', options: ['Repos Total du Travail', 'Réduction du Temps de Travail', 'Rémunération du Temps de Travail', 'Rien'], correctIndex: 1 },
          { question: 'La pause café en France est :', options: ['Interdite', 'Un moment social important', 'Obligatoire de 30 min', 'Uniquement le matin'], correctIndex: 1 },
          { question: 'Combien de jours fériés en France ?', options: ['5', '8', '11', '15'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 168: Les nominalisations
  {
    courseId: 'lesson-168',
    steps: [
      {
        id: 'L168-1', type: 'lesson', title: 'Les nominalisations', characterId: 'marie',
        content: `La **nominalisation** consiste à transformer un verbe ou un adjectif en nom.\n\n📐 **Verbe → Nom :**\n- augmenter → une augmentation\n- réduire → une réduction\n- décider → une décision\n- développer → un développement\n- produire → une production\n- créer → une création\n\n📐 **Adjectif → Nom :**\n- riche → la richesse\n- pauvre → la pauvreté\n- important → l'importance\n- efficace → l'efficacité\n- libre → la liberté\n\n💡 **Utilité :**\n- Rendre le style plus **soutenu** et **académique**\n- Condenser l'information\n- Varier la syntaxe\n\n📝 **Exemple :**\n- « Les prix augmentent. » → « L'**augmentation** des prix… »\n- « Le gouvernement a décidé de… » → « La **décision** du gouvernement de… »`,
        tip: '💡 La nominalisation est très utilisée dans les titres de journaux : « Augmentation du chômage » au lieu de « Le chômage augmente ».'
      },
      {
        id: 'L168-2', type: 'listening', title: 'Écoute — Titres du journal', characterId: 'omar',
        text: 'Les titres du jour : réduction des impôts annoncée par le gouvernement. Augmentation du tourisme sur la Côte d\'Azur. Création de mille emplois dans le secteur numérique. Amélioration de la qualité de l\'air à Antibes.',
        question: 'Quel est le titre sur Antibes ?',
        options: ['Réduction des impôts', 'Augmentation du tourisme', 'Création d\'emplois', 'Amélioration de la qualité de l\'air'],
        correctIndex: 3
      },
      {
        id: 'L168-3', type: 'qcm', title: 'Verbe → Nom', characterId: 'elena',
        question: 'Quelle est la nominalisation de « produire » ?',
        options: ['Productivité', 'Production', 'Produit', 'Producteur'],
        correctIndex: 1,
        explanation: '« Produire » → « une production ». « Produit » est le résultat, « producteur » est la personne.'
      },
      {
        id: 'L168-4', type: 'flashcard', title: 'Nominalisations courantes', characterId: 'thomas',
        cards: [
          { front: 'augmenter → …', back: 'une augmentation' },
          { front: 'réduire → …', back: 'une réduction' },
          { front: 'décider → …', back: 'une décision' },
          { front: 'améliorer → …', back: 'une amélioration' },
          { front: 'important → …', back: 'l\'importance' },
          { front: 'efficace → …', back: 'l\'efficacité' },
        ]
      },
      {
        id: 'L168-5', type: 'fill-blank', title: 'Nominalisez', characterId: 'fatou',
        sentence: 'La ___ des prix inquiète les consommateurs. (augmenter)',
        options: ['augmentation', 'augmente', 'augmenté', 'augmentant'],
        correctAnswer: 'augmentation'
      },
      {
        id: 'L168-6', type: 'drag-drop', title: 'Associez verbe et nom', characterId: 'yuki',
        instruction: 'Classez ces mots du verbe au nom :',
        items: ['création', 'créer', 'développer', 'développement'],
        correctOrder: ['créer', 'création', 'développer', 'développement']
      },
      {
        id: 'L168-7', type: 'qcm', title: 'Adjectif → Nom', characterId: 'lucas',
        question: 'La nominalisation de « libre » est :',
        options: ['Libéral', 'Librement', 'Liberté', 'Libération'],
        correctIndex: 2,
        explanation: '« Libre » (adjectif) → « liberté » (nom). « Libération » vient du verbe « libérer ».'
      },
      {
        id: 'L168-8', type: 'final-quiz', title: 'Quiz final — Les nominalisations', characterId: 'marie',
        questions: [
          { question: '« décider » → …', options: ['décideur', 'décision', 'décisif', 'décidément'], correctIndex: 1 },
          { question: '« pauvre » → …', options: ['pauvrement', 'pauvreté', 'appauvrir', 'pauvresse'], correctIndex: 1 },
          { question: 'La nominalisation rend le style plus :', options: ['Familier', 'Soutenu', 'Enfantin', 'Oral'], correctIndex: 1 },
          { question: '« améliorer » → …', options: ['améliorant', 'amélioré', 'amélioration', 'améliorateur'], correctIndex: 2 },
          { question: '« efficace » → …', options: ['efficacement', 'efficacité', 'efficience', 'effectif'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 169: Révision B2.2
  {
    courseId: 'lesson-169',
    steps: [
      {
        id: 'L169-1', type: 'lesson', title: 'Révision B2.2 — Le monde professionnel', characterId: 'marie',
        content: `Révisons le module B2.2 !\n\n📝 **Ce que vous avez appris :**\n\n1️⃣ **Lettre de motivation avancée** — Structure, formules, personnalisation\n2️⃣ **Entretien d'embauche** — Méthode STAR, questions pièges\n3️⃣ **Animer une réunion** — Ouverture, parole, synthèse, clôture\n4️⃣ **Discours indirect au passé** — Concordance des temps\n5️⃣ **Rédiger un compte-rendu** — Objectif, structuré, factuel\n6️⃣ **Négocier** — Proposer, contre-proposer, compromis\n7️⃣ **Culture d'entreprise** — 35h, congés, hiérarchie, pause café\n8️⃣ **Les nominalisations** — Verbe/adjectif → nom`,
        tip: '💡 Révisez les formules de la lettre de motivation et les expressions de négociation !'
      },
      {
        id: 'L169-2', type: 'qcm', title: 'Révision — Lettre de motivation', characterId: 'elena',
        question: '« ___ de mon expérience en gestion, je souhaite intégrer votre équipe. »',
        options: ['Fort', 'Grâce', 'Malgré', 'Sans'],
        correctIndex: 0,
        explanation: '« Fort(e) de mon expérience… » est une formule professionnelle pour mettre en avant ses compétences.'
      },
      {
        id: 'L169-3', type: 'fill-blank', title: 'Révision — Discours indirect', characterId: 'fatou',
        sentence: '« Je viendrai. » → Elle a dit qu\'elle ___.',
        options: ['viendra', 'viendrait', 'venait', 'vient'],
        correctAnswer: 'viendrait'
      },
      {
        id: 'L169-4', type: 'qcm', title: 'Révision — Négociation', characterId: 'lucas',
        question: '« Trouvons un ___ d\'entente. »',
        options: ['terrain', 'champ', 'sol', 'espace'],
        correctIndex: 0,
        explanation: '« Trouver un terrain d\'entente » signifie chercher un compromis.'
      },
      {
        id: 'L169-5', type: 'fill-blank', title: 'Révision — Nominalisation', characterId: 'fatou',
        sentence: 'La ___ du gouvernement a surpris tout le monde. (décider)',
        options: ['décision', 'décideur', 'décisif', 'décidément'],
        correctAnswer: 'décision'
      },
      {
        id: 'L169-6', type: 'drag-drop', title: 'Révision — Méthode STAR', characterId: 'yuki',
        instruction: 'Ordonnez STAR :',
        items: ['Tâche', 'Résultat', 'Action', 'Situation'],
        correctOrder: ['Situation', 'Tâche', 'Action', 'Résultat']
      },
      {
        id: 'L169-7', type: 'qcm', title: 'Révision — Culture d\'entreprise', characterId: 'elena',
        question: 'Combien de semaines de congés payés en France ?',
        options: ['2', '3', '4', '5'],
        correctIndex: 3,
        explanation: 'Le minimum légal en France est de 5 semaines de congés payés.'
      },
      {
        id: 'L169-8', type: 'final-quiz', title: 'Quiz récapitulatif B2.2', characterId: 'marie',
        questions: [
          { question: 'STAR : S = Situation, T = Tâche, A = Action, R = ?', options: ['Raisonnement', 'Résultat', 'Réponse', 'Réflexion'], correctIndex: 1 },
          { question: '« aujourd\'hui » au discours indirect passé :', options: ['demain', 'hier', 'ce jour-là', 'maintenant'], correctIndex: 2 },
          { question: '« réduire » → …', options: ['réducteur', 'réduction', 'réduit', 'réduisant'], correctIndex: 1 },
          { question: '« La réunion a été ___ à 18h. »', options: ['levée', 'fermée', 'tuée', 'cassée'], correctIndex: 0 },
          { question: '« Que ___ de 4000€ au lieu de 5000€ ? »', options: ['dites-vous', 'diriez-vous', 'direz-vous', 'disiez-vous'], correctIndex: 1 },
          { question: 'RTT = Réduction du ___ de Travail', options: ['Type', 'Temps', 'Taux', 'Total'], correctIndex: 1 },
          { question: '« J\'ai ___ mes devoirs. » → Il a dit qu\'il ___ ses devoirs.', options: ['avait fini', 'a fini', 'finissait', 'finirait'], correctIndex: 0 },
        ]
      }
    ]
  },

  // Lesson 170: Examen B2.2
  {
    courseId: 'lesson-170',
    steps: [
      {
        id: 'L170-1', type: 'lesson', title: 'Examen B2.2 — Le monde professionnel', characterId: 'marie',
        content: `🏆 **Examen du module B2.2 — Le monde professionnel**\n\nCet examen teste toutes les compétences acquises :\n- Lettre de motivation et entretien\n- Animation de réunion\n- Discours indirect au passé\n- Compte-rendu\n- Négociation\n- Culture d'entreprise\n- Nominalisations\n\n👔 Badge à débloquer : **Manager**\n\nBonne chance !`,
        tip: '💡 Prenez votre temps et réfléchissez bien à chaque réponse.'
      },
      {
        id: 'L170-2', type: 'final-quiz', title: 'Examen final B2.2', characterId: 'marie',
        questions: [
          { question: '« Dans l\'___ de votre réponse, veuillez agréer… »', options: ['attente', 'espoir', 'envie', 'idée'], correctIndex: 0 },
          { question: '« Je ___ ravi de rejoindre votre entreprise. »', options: ['suis', 'serais', 'serai', 'étais'], correctIndex: 1 },
          { question: '« demain » au discours indirect passé devient :', options: ['hier', 'le lendemain', 'aujourd\'hui', 'avant-hier'], correctIndex: 1 },
          { question: 'Un compte-rendu doit être :', options: ['Subjectif', 'Objectif et factuel', 'Émotionnel', 'Drôle'], correctIndex: 1 },
          { question: '« Si vous ___ ce prix, nous pourrions signer. »', options: ['acceptez', 'acceptiez', 'accepterez', 'avez accepté'], correctIndex: 1 },
          { question: '« développer » → …', options: ['développant', 'développé', 'développement', 'développeur'], correctIndex: 2 },
          { question: 'La pause déjeuner en France dure environ :', options: ['15 min', '30 min', '1h-1h30', '3h'], correctIndex: 2 },
          { question: '« L\'ordre du ___ comporte trois points. »', options: ['jour', 'matin', 'soir', 'nuit'], correctIndex: 0 },
          { question: '« Il a dit qu\'il ___ fatigué. » (présent → passé)', options: ['est', 'était', 'sera', 'serait'], correctIndex: 1 },
          { question: '« Mon principal ___ est l\'adaptabilité. »', options: ['défaut', 'atout', 'problème', 'souci'], correctIndex: 1 },
        ]
      }
    ]
  },
];
