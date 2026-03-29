// Interactive lesson content for B2 Module 3: Actualités et société (Lessons 171-180)
import type { CourseContent } from './course-content';

export const b2Module3Content: CourseContent[] = [
  // Lesson 171: L'actualité française
  {
    courseId: 'lesson-171',
    steps: [
      {
        id: 'L171-1', type: 'lesson', title: 'L\'actualité française', characterId: 'marie',
        content: `Comprendre l'actualité en français exige de maîtriser le vocabulaire des **médias**.\n\n📰 **Types de médias :**\n- La presse écrite : Le Monde, Le Figaro, Libération\n- La radio : France Inter, RTL, Europe 1\n- La télévision : France 2, TF1, BFMTV\n- Les médias en ligne : Mediapart, France Info\n\n📝 **Vocabulaire de la presse :**\n- Un article / un éditorial / une chronique\n- Un titre / un sous-titre / un chapeau\n- Un journaliste / un correspondant / un envoyé spécial\n- Une dépêche / un communiqué de presse\n- Les faits divers / la rubrique société / la une\n\n🔍 **Lire un article :**\n- Identifiez la source et la date\n- Distinguez les faits des opinions\n- Repérez les citations et les sources`,
        tip: '💡 Au DELF B2, vous devez pouvoir lire et analyser un article de presse de 500 mots.'
      },
      {
        id: 'L171-2', type: 'listening', title: 'Écoute — Flash info', characterId: 'omar',
        text: 'Bonjour, voici le flash info de France Inter. Le gouvernement a annoncé aujourd\'hui une réforme du système de retraites. Les syndicats appellent à une grève nationale pour mardi prochain. Par ailleurs, le festival de Cannes dévoilera sa sélection officielle demain. Sur la Côte d\'Azur, le beau temps est de retour.',
        question: 'Que va-t-il se passer mardi prochain ?',
        options: ['Le festival de Cannes', 'Une grève nationale', 'Une réforme', 'Le beau temps'],
        correctIndex: 1
      },
      {
        id: 'L171-3', type: 'qcm', title: 'Vocabulaire de presse', characterId: 'elena',
        question: 'Comment appelle-t-on la première page d\'un journal ?',
        options: ['Le chapeau', 'La chronique', 'La une', 'L\'éditorial'],
        correctIndex: 2,
        explanation: '« La une » désigne la première page d\'un journal, celle qui attire l\'attention.'
      },
      {
        id: 'L171-4', type: 'flashcard', title: 'Vocabulaire des médias', characterId: 'thomas',
        cards: [
          { front: 'La une', back: 'The front page' },
          { front: 'Un éditorial', back: 'An editorial (opinion piece)' },
          { front: 'Un envoyé spécial', back: 'A special correspondent' },
          { front: 'Une dépêche', back: 'A news dispatch / wire story' },
          { front: 'Les faits divers', back: 'Miscellaneous news / local crime' },
          { front: 'Un chapeau (article)', back: 'A lead paragraph / standfirst' },
        ]
      },
      {
        id: 'L171-5', type: 'fill-blank', title: 'Complétez avec le bon terme', characterId: 'fatou',
        sentence: 'Le journaliste a écrit un ___ sur la réforme des retraites.',
        options: ['article', 'roman', 'poème', 'conte'],
        correctAnswer: 'article'
      },
      {
        id: 'L171-6', type: 'drag-drop', title: 'Structure d\'un article', characterId: 'yuki',
        instruction: 'Ordonnez les parties d\'un article :',
        items: ['Conclusion', 'Titre', 'Chapeau', 'Développement'],
        correctOrder: ['Titre', 'Chapeau', 'Développement', 'Conclusion']
      },
      {
        id: 'L171-7', type: 'qcm', title: 'Faits vs Opinions', characterId: 'lucas',
        question: 'Quelle phrase est un FAIT (pas une opinion) ?',
        options: ['Je pense que cette loi est injuste.', 'Le président a signé la loi hier.', 'Il me semble que c\'est une erreur.', 'Cette réforme est catastrophique.'],
        correctIndex: 1,
        explanation: '« Le président a signé la loi hier » est un fait vérifiable, pas une opinion.'
      },
      {
        id: 'L171-8', type: 'final-quiz', title: 'Quiz final — L\'actualité française', characterId: 'marie',
        questions: [
          { question: 'La première page d\'un journal s\'appelle :', options: ['L\'éditorial', 'La une', 'Le chapeau', 'La chronique'], correctIndex: 1 },
          { question: 'Quel média est écrit ?', options: ['France Inter', 'Le Monde', 'BFMTV', 'RTL'], correctIndex: 1 },
          { question: 'Un « fait divers » concerne :', options: ['La politique internationale', 'Des événements locaux/crimes', 'La météo', 'Le sport'], correctIndex: 1 },
          { question: 'Distinguer faits et opinions est important pour :', options: ['Écrire un poème', 'Analyser un article de presse', 'Cuisiner', 'Chanter'], correctIndex: 1 },
          { question: 'Un envoyé spécial est :', options: ['Un facteur', 'Un journaliste sur le terrain', 'Un politicien', 'Un acteur'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 172: Les expressions idiomatiques
  {
    courseId: 'lesson-172',
    steps: [
      {
        id: 'L172-1', type: 'lesson', title: 'Les expressions idiomatiques', characterId: 'marie',
        content: `Les **expressions idiomatiques** enrichissent votre français et montrent une maîtrise avancée de la langue.\n\n🇫🇷 **20 expressions courantes :**\n\n- **Avoir le cafard** → être triste\n- **Poser un lapin** → ne pas venir à un rendez-vous\n- **Avoir la pêche** → être en pleine forme\n- **Tomber dans les pommes** → s'évanouir\n- **Mettre son grain de sel** → donner son avis sans qu'on le demande\n- **Couper la poire en deux** → faire un compromis\n- **Avoir un chat dans la gorge** → avoir la voix enrouée\n- **En faire tout un fromage** → exagérer un problème\n- **Avoir d'autres chats à fouetter** → avoir des choses plus importantes à faire\n- **Être au bout du rouleau** → être épuisé`,
        tip: '💡 Les expressions idiomatiques ne se traduisent PAS mot à mot. Apprenez-les comme des blocs !'
      },
      {
        id: 'L172-2', type: 'listening', title: 'Écoute — Conversation idiomatique', characterId: 'omar',
        text: 'Ce matin, j\'ai le cafard. Mon ami m\'a posé un lapin hier soir, et en plus, j\'ai un chat dans la gorge. Mais bon, il ne faut pas en faire tout un fromage. J\'ai d\'autres chats à fouetter !',
        question: 'Pourquoi le locuteur est-il triste ?',
        options: ['Il est malade', 'Son ami n\'est pas venu au rendez-vous', 'Il a perdu son chat', 'Il a mangé du fromage'],
        correctIndex: 1
      },
      {
        id: 'L172-3', type: 'qcm', title: 'Devinez l\'expression', characterId: 'elena',
        question: 'Que signifie « couper la poire en deux » ?',
        options: ['Manger un fruit', 'Faire un compromis', 'Être triste', 'Se fâcher'],
        correctIndex: 1,
        explanation: '« Couper la poire en deux » signifie trouver un compromis, faire 50/50.'
      },
      {
        id: 'L172-4', type: 'flashcard', title: 'Expressions idiomatiques', characterId: 'thomas',
        cards: [
          { front: 'Avoir le cafard', back: 'To feel down / to be sad' },
          { front: 'Poser un lapin', back: 'To stand someone up' },
          { front: 'Avoir la pêche', back: 'To be in great shape / full of energy' },
          { front: 'Tomber dans les pommes', back: 'To faint / to pass out' },
          { front: 'Couper la poire en deux', back: 'To split the difference / compromise' },
          { front: 'Être au bout du rouleau', back: 'To be at the end of one\'s rope / exhausted' },
        ]
      },
      {
        id: 'L172-5', type: 'fill-blank', title: 'Complétez l\'expression', characterId: 'fatou',
        sentence: 'Il m\'a posé un ___ : il n\'est jamais venu au restaurant.',
        options: ['lapin', 'chat', 'chien', 'fromage'],
        correctAnswer: 'lapin'
      },
      {
        id: 'L172-6', type: 'drag-drop', title: 'Associez expression et sens', characterId: 'yuki',
        instruction: 'Du plus joyeux au plus triste :',
        items: ['Avoir le cafard', 'Avoir la pêche', 'Être au bout du rouleau'],
        correctOrder: ['Avoir la pêche', 'Avoir le cafard', 'Être au bout du rouleau']
      },
      {
        id: 'L172-7', type: 'qcm', title: 'En contexte', characterId: 'lucas',
        question: '« Arrête d\'en faire tout un ___ ! » (= arrête d\'exagérer)',
        options: ['gâteau', 'fromage', 'pain', 'chocolat'],
        correctIndex: 1,
        explanation: '« En faire tout un fromage » = exagérer l\'importance de quelque chose.'
      },
      {
        id: 'L172-8', type: 'final-quiz', title: 'Quiz final — Expressions idiomatiques', characterId: 'marie',
        questions: [
          { question: '« Poser un lapin » signifie :', options: ['Adopter un animal', 'Ne pas venir au rendez-vous', 'Poser une question', 'Manger du lapin'], correctIndex: 1 },
          { question: '« Avoir la pêche » = :', options: ['Aimer les fruits', 'Être en forme', 'Être malade', 'Être triste'], correctIndex: 1 },
          { question: '« Tomber dans les ___ » = s\'évanouir', options: ['cerises', 'pommes', 'poires', 'oranges'], correctIndex: 1 },
          { question: '« Mettre son grain de ___ » = donner son avis', options: ['riz', 'sel', 'poivre', 'sucre'], correctIndex: 1 },
          { question: '« Avoir d\'autres chats à ___ » = avoir mieux à faire', options: ['nourrir', 'caresser', 'fouetter', 'laver'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 173: La politique française
  {
    courseId: 'lesson-173',
    steps: [
      {
        id: 'L173-1', type: 'lesson', title: 'La politique française', characterId: 'marie',
        content: `Comprendre la politique française est essentiel au niveau B2.\n\n🏛️ **Les institutions :**\n\n👤 **Le Président de la République**\n- Élu pour 5 ans au suffrage universel\n- Chef de l'État, chef des armées\n- Nomme le Premier ministre\n\n🏠 **L'Assemblée nationale** (577 députés)\n- Élus pour 5 ans\n- Vote les lois\n- Peut censurer le gouvernement\n\n🏛️ **Le Sénat** (348 sénateurs)\n- Élus pour 6 ans au suffrage indirect\n- Examine et amende les lois\n\n⚖️ **Le Conseil constitutionnel**\n- Vérifie que les lois sont conformes à la Constitution\n\n📝 **Vocabulaire politique :**\n- Un mandat, une élection, le scrutin\n- La gauche / la droite / le centre\n- Un projet de loi, un amendement, une réforme`,
        tip: '💡 La France est une République semi-présidentielle : le président et le Premier ministre partagent le pouvoir exécutif.'
      },
      {
        id: 'L173-2', type: 'listening', title: 'Écoute — Résultats électoraux', characterId: 'omar',
        text: 'Les résultats du premier tour sont tombés. Le candidat de centre-droit obtient trente-deux pour cent des voix, suivi par la candidate de gauche avec vingt-huit pour cent. Le second tour aura lieu dans deux semaines. Le taux de participation est de soixante-dix pour cent.',
        question: 'Quand aura lieu le second tour ?',
        options: ['Demain', 'La semaine prochaine', 'Dans deux semaines', 'Dans un mois'],
        correctIndex: 2
      },
      {
        id: 'L173-3', type: 'qcm', title: 'Les institutions', characterId: 'elena',
        question: 'Qui nomme le Premier ministre en France ?',
        options: ['Le peuple', 'Le Sénat', 'Le Président de la République', 'L\'Assemblée nationale'],
        correctIndex: 2,
        explanation: 'Le Président de la République nomme le Premier ministre.'
      },
      {
        id: 'L173-4', type: 'flashcard', title: 'Vocabulaire politique', characterId: 'thomas',
        cards: [
          { front: 'Le suffrage universel', back: 'Universal suffrage (everyone votes)' },
          { front: 'Un mandat', back: 'A term of office' },
          { front: 'Un projet de loi', back: 'A bill (proposed law)' },
          { front: 'Un amendement', back: 'An amendment' },
          { front: 'Le scrutin', back: 'The ballot / vote' },
          { front: 'La cohabitation', back: 'When president and PM are from different parties' },
        ]
      },
      {
        id: 'L173-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        sentence: 'Le Président de la République est élu pour ___ ans.',
        options: ['quatre', 'cinq', 'six', 'sept'],
        correctAnswer: 'cinq'
      },
      {
        id: 'L173-6', type: 'drag-drop', title: 'Hiérarchie politique', characterId: 'yuki',
        instruction: 'Du plus au moins puissant dans la Ve République :',
        items: ['Le Premier ministre', 'Le Président', 'Un député'],
        correctOrder: ['Le Président', 'Le Premier ministre', 'Un député']
      },
      {
        id: 'L173-7', type: 'qcm', title: 'L\'Assemblée nationale', characterId: 'lucas',
        question: 'Combien de députés siègent à l\'Assemblée nationale ?',
        options: ['348', '450', '577', '700'],
        correctIndex: 2,
        explanation: 'L\'Assemblée nationale compte 577 députés, élus au suffrage universel direct.'
      },
      {
        id: 'L173-8', type: 'final-quiz', title: 'Quiz final — La politique française', characterId: 'marie',
        questions: [
          { question: 'La France est une République :', options: ['Parlementaire', 'Semi-présidentielle', 'Monarchique', 'Fédérale'], correctIndex: 1 },
          { question: 'Le Président est élu pour :', options: ['4 ans', '5 ans', '6 ans', '7 ans'], correctIndex: 1 },
          { question: 'Qui vote les lois ?', options: ['Le Président', 'L\'Assemblée nationale', 'Le Conseil constitutionnel', 'Les citoyens'], correctIndex: 1 },
          { question: 'Le Sénat compte :', options: ['577 sénateurs', '100 sénateurs', '348 sénateurs', '200 sénateurs'], correctIndex: 2 },
          { question: '« Un projet de loi » est :', options: ['Une loi votée', 'Une proposition de loi', 'Un décret', 'Une constitution'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 174: Les doubles pronoms
  {
    courseId: 'lesson-174',
    steps: [
      {
        id: 'L174-1', type: 'lesson', title: 'Les doubles pronoms', characterId: 'marie',
        content: `Les **doubles pronoms** permettent de remplacer à la fois le COD et le COI dans une phrase.\n\n📐 **Ordre des pronoms :**\n\n| 1 | 2 | 3 | 4 | 5 |\n|---|---|---|---|---|\n| me/te/se/nous/vous | le/la/les | lui/leur | y | en |\n\n🔵 **Exemples :**\n- « Tu donnes le livre à Marie ? » → « Tu **le lui** donnes. »\n- « Il me donne les clés. » → « Il **me les** donne. »\n- « Elle nous envoie la lettre. » → « Elle **nous l'**envoie. »\n- « Je mets les fleurs sur la table. » → « Je **les y** mets. »\n- « Il me parle de ses vacances. » → « Il **m'en** parle. »\n\n⚠️ **À l'impératif affirmatif, l'ordre change :**\n- « Donne-le-moi ! » « Donnez-les-leur ! »`,
        tip: '💡 Astuce : me/te viennent AVANT le/la/les, mais lui/leur viennent APRÈS.'
      },
      {
        id: 'L174-2', type: 'listening', title: 'Écoute — Conversation avec doubles pronoms', characterId: 'omar',
        text: 'Tu as donné les documents au directeur ? Oui, je les lui ai donnés ce matin. Et la facture à Marie ? Je la lui enverrai demain. N\'oublie pas de m\'en parler après la réunion.',
        question: 'Quand le locuteur enverra-t-il la facture à Marie ?',
        options: ['Ce matin', 'Demain', 'La semaine prochaine', 'Après la réunion'],
        correctIndex: 1
      },
      {
        id: 'L174-3', type: 'qcm', title: 'Doubles pronoms', characterId: 'elena',
        question: '« Tu donnes le livre à Paul ? » → « Tu ___ donnes. »',
        options: ['le lui', 'lui le', 'la leur', 'les lui'],
        correctIndex: 0,
        explanation: 'Le (COD) + lui (COI) → « le lui ». Le COD vient avant le COI (lui/leur).'
      },
      {
        id: 'L174-4', type: 'flashcard', title: 'Exemples de doubles pronoms', characterId: 'thomas',
        cards: [
          { front: 'Je le lui donne', back: 'I give it to him/her' },
          { front: 'Elle me les envoie', back: 'She sends them to me' },
          { front: 'Il nous l\'a dit', back: 'He told it to us' },
          { front: 'Je m\'en souviens', back: 'I remember it' },
          { front: 'Donne-le-moi !', back: 'Give it to me!' },
          { front: 'Il les y met', back: 'He puts them there' },
        ]
      },
      {
        id: 'L174-5', type: 'fill-blank', title: 'Remplacez par des pronoms', characterId: 'fatou',
        sentence: '« Tu montres les photos à tes amis ? » → « Tu ___ montres. »',
        options: ['les leur', 'leur les', 'les lui', 'lui les'],
        correctAnswer: 'les leur'
      },
      {
        id: 'L174-6', type: 'drag-drop', title: 'Ordre des pronoms', characterId: 'yuki',
        instruction: 'Mettez les pronoms dans le bon ordre :',
        items: ['donné', 'lui', 'Je', 'les', 'ai'],
        correctOrder: ['Je', 'les', 'lui', 'ai', 'donné']
      },
      {
        id: 'L174-7', type: 'qcm', title: 'Impératif + pronoms', characterId: 'lucas',
        question: '« Donne le livre à Marie. » → À l\'impératif avec pronoms :',
        options: ['Le lui donne !', 'Donne-le-lui !', 'Lui donne-le !', 'Donne-lui-le !'],
        correctIndex: 1,
        explanation: 'À l\'impératif affirmatif : verbe + COD + COI → « Donne-le-lui ! »'
      },
      {
        id: 'L174-8', type: 'final-quiz', title: 'Quiz final — Les doubles pronoms', characterId: 'marie',
        questions: [
          { question: '« Il donne les fleurs à sa mère. » →', options: ['Il les lui donne', 'Il lui les donne', 'Il la leur donne', 'Il le lui donne'], correctIndex: 0 },
          { question: '« Elle me raconte l\'histoire. » →', options: ['Elle la me raconte', 'Elle me la raconte', 'Elle me lui raconte', 'Elle le me raconte'], correctIndex: 1 },
          { question: 'L\'ordre correct est : me/te + ___', options: ['lui/leur', 'le/la/les', 'y', 'en'], correctIndex: 1 },
          { question: '« Donne-___-moi ! » (les clés)', options: ['les', 'la', 'lui', 'leur'], correctIndex: 0 },
          { question: '« Il m\'___ parle souvent. » (de ses vacances)', options: ['y', 'en', 'le', 'lui'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 175: Écrire un article de blog
  {
    courseId: 'lesson-175',
    steps: [
      {
        id: 'L175-1', type: 'lesson', title: 'Écrire un article de blog', characterId: 'marie',
        content: `L'article de blog combine information et expression personnelle.\n\n📐 **Structure :**\n\n1️⃣ **Titre accrocheur** — court, percutant, avec des mots-clés\n2️⃣ **Introduction** — contexte + question centrale\n3️⃣ **Développement** — 2-3 paragraphes avec arguments et exemples\n4️⃣ **Conclusion** — résumé + invitation au débat\n\n📝 **Ton :**\n- Plus personnel qu'un essai académique\n- On peut utiliser « je » et interpeller le lecteur\n- Registre courant à légèrement soutenu\n\n💡 **Formules :**\n- « Vous êtes-vous déjà demandé pourquoi… ? »\n- « Dans cet article, je vais explorer… »\n- « Et vous, qu'en pensez-vous ? »\n- « N'hésitez pas à partager votre avis ! »`,
        tip: '💡 Un bon titre de blog fait entre 6 et 12 mots et donne envie de cliquer !'
      },
      {
        id: 'L175-2', type: 'listening', title: 'Écoute — Introduction de blog', characterId: 'omar',
        text: 'Vous êtes-vous déjà demandé pourquoi Antibes attire autant de touristes chaque été ? Dans cet article, je vais vous expliquer les cinq raisons qui font de cette ville un joyau de la Côte d\'Azur. Prêts ? C\'est parti !',
        question: 'Quel est le sujet de l\'article ?',
        options: ['La politique française', 'L\'attractivité touristique d\'Antibes', 'La cuisine provençale', 'L\'histoire de Nice'],
        correctIndex: 1
      },
      {
        id: 'L175-3', type: 'qcm', title: 'Ton du blog', characterId: 'elena',
        question: 'Le ton d\'un article de blog est :',
        options: ['Strictement académique', 'Personnel et engageant', 'Administratif', 'Juridique'],
        correctIndex: 1,
        explanation: 'Un blog est personnel : on utilise « je », on interpelle le lecteur, tout en restant informatif.'
      },
      {
        id: 'L175-4', type: 'flashcard', title: 'Formules pour le blog', characterId: 'thomas',
        cards: [
          { front: 'Vous êtes-vous déjà demandé… ?', back: 'Have you ever wondered… ?' },
          { front: 'Dans cet article, je vais explorer…', back: 'In this article, I will explore…' },
          { front: 'Et vous, qu\'en pensez-vous ?', back: 'And you, what do you think?' },
          { front: 'N\'hésitez pas à commenter !', back: 'Feel free to comment!' },
          { front: 'Pour résumer…', back: 'To sum up…' },
          { front: 'C\'est parti !', back: 'Let\'s go! / Here we go!' },
        ]
      },
      {
        id: 'L175-5', type: 'fill-blank', title: 'Complétez l\'introduction', characterId: 'fatou',
        sentence: '___ cet article, je vais vous présenter les meilleurs restaurants d\'Antibes.',
        options: ['Dans', 'Sur', 'Avec', 'Pour'],
        correctAnswer: 'Dans'
      },
      {
        id: 'L175-6', type: 'drag-drop', title: 'Structure du blog', characterId: 'yuki',
        instruction: 'Ordonnez les parties :',
        items: ['Conclusion + appel aux commentaires', 'Introduction accrocheuse', 'Développement (arguments)', 'Titre'],
        correctOrder: ['Titre', 'Introduction accrocheuse', 'Développement (arguments)', 'Conclusion + appel aux commentaires']
      },
      {
        id: 'L175-7', type: 'qcm', title: 'Titre accrocheur', characterId: 'lucas',
        question: 'Quel titre est le plus accrocheur pour un blog ?',
        options: ['Réflexions sur le tourisme', '5 raisons de visiter Antibes cet été', 'Tourisme', 'Un article sur Antibes'],
        correctIndex: 1,
        explanation: 'Un bon titre de blog est spécifique, avec un chiffre et une promesse claire.'
      },
      {
        id: 'L175-8', type: 'final-quiz', title: 'Quiz final — Article de blog', characterId: 'marie',
        questions: [
          { question: 'Le ton d\'un blog est :', options: ['Juridique', 'Personnel et engageant', 'Froid et distant', 'Poétique uniquement'], correctIndex: 1 },
          { question: 'Un bon titre de blog fait :', options: ['1 mot', '6-12 mots', '50 mots', '100 mots'], correctIndex: 1 },
          { question: 'La conclusion d\'un blog doit :', options: ['Être triste', 'Inviter au débat', 'Répéter l\'introduction', 'Être vide'], correctIndex: 1 },
          { question: '« Et ___, qu\'en pensez-vous ? »', options: ['moi', 'nous', 'vous', 'eux'], correctIndex: 2 },
          { question: 'Peut-on utiliser « je » dans un blog ?', options: ['Non, jamais', 'Oui, c\'est un format personnel', 'Seulement en conclusion', 'Uniquement en anglais'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 176: L'humour français
  {
    courseId: 'lesson-176',
    steps: [
      {
        id: 'L176-1', type: 'lesson', title: 'L\'humour français', characterId: 'marie',
        content: `L'humour est un élément culturel essentiel pour comprendre les Français.\n\n😄 **Types d'humour français :**\n\n🎭 **L'ironie / le second degré** — Dire le contraire de ce qu'on pense\n- « Ah, il fait beau ! » (quand il pleut)\n- « Quel génie ! » (quand quelqu'un fait une erreur)\n\n😏 **L'autodérision** — Se moquer de soi-même\n- Les Français adorent rire de leurs propres défauts\n\n🎯 **L'absurde** — Humor qui défie la logique\n- « Pourquoi les plongeurs plongent-ils toujours en arrière ? Parce que sinon ils tomberaient dans le bateau. »\n\n📝 **Jeux de mots (calembours) :**\n- « Qu'est-ce qu'un canif ? Un petit fien. » (canif → « petit fien » → « petit chien » phonétiquement)\n\n⚠️ **Attention :** Le second degré peut être difficile à détecter pour un non-francophone !`,
        tip: '💡 Si un Français dit quelque chose d\'absurde avec un sourire, c\'est probablement du second degré !'
      },
      {
        id: 'L176-2', type: 'listening', title: 'Écoute — Conversation ironique', characterId: 'omar',
        text: 'Il pleut des cordes depuis trois jours à Antibes. Lucas dit en souriant : « Ah, quel temps magnifique ! On devrait aller à la plage, non ? » Marie répond : « Excellente idée ! J\'ai justement envie de nager sous la pluie ! »',
        question: 'Que font Lucas et Marie ?',
        options: ['Ils sont sérieux', 'Ils utilisent l\'ironie', 'Ils sont en colère', 'Ils planifient une sortie'],
        correctIndex: 1
      },
      {
        id: 'L176-3', type: 'qcm', title: 'Identifier le second degré', characterId: 'elena',
        question: 'On dit « Quel génie ! » quand quelqu\'un fait une erreur. C\'est :',
        options: ['Un compliment sincère', 'De l\'ironie', 'Une insulte directe', 'Un encouragement'],
        correctIndex: 1,
        explanation: 'Dire « Quel génie ! » après une erreur, c\'est de l\'ironie : on dit le contraire de ce qu\'on pense.'
      },
      {
        id: 'L176-4', type: 'flashcard', title: 'Vocabulaire de l\'humour', characterId: 'thomas',
        cards: [
          { front: 'L\'ironie / le second degré', back: 'Irony / saying the opposite of what you mean' },
          { front: 'L\'autodérision', back: 'Self-deprecating humor' },
          { front: 'Un calembour', back: 'A pun / a play on words' },
          { front: 'L\'humour absurde', back: 'Absurd humor' },
          { front: 'C\'est du second degré', back: 'It\'s ironic / not literal' },
          { front: 'Se moquer de soi-même', back: 'To make fun of oneself' },
        ]
      },
      {
        id: 'L176-5', type: 'fill-blank', title: 'Second degré', characterId: 'fatou',
        sentence: 'Il fait -5°C dehors. Marie dit : « Ah, quel temps ___ ! » C\'est de l\'ironie.',
        options: ['magnifique', 'horrible', 'froid', 'normal'],
        correctAnswer: 'magnifique'
      },
      {
        id: 'L176-6', type: 'drag-drop', title: 'Types d\'humour', characterId: 'yuki',
        instruction: 'Classez du plus subtil au plus évident :',
        items: ['L\'humour physique (slapstick)', 'L\'ironie / second degré', 'Les calembours'],
        correctOrder: ['L\'ironie / second degré', 'Les calembours', 'L\'humour physique (slapstick)']
      },
      {
        id: 'L176-7', type: 'qcm', title: 'L\'autodérision', characterId: 'lucas',
        question: 'L\'autodérision, c\'est :',
        options: ['Se moquer des autres', 'Se moquer de soi-même', 'Ne jamais rire', 'Être triste'],
        correctIndex: 1,
        explanation: 'L\'autodérision consiste à rire de soi-même, de ses propres défauts ou erreurs.'
      },
      {
        id: 'L176-8', type: 'final-quiz', title: 'Quiz final — L\'humour français', characterId: 'marie',
        questions: [
          { question: 'Le « second degré » signifie :', options: ['Dire exactement ce qu\'on pense', 'Dire le contraire de ce qu\'on pense', 'Ne rien dire', 'Crier'], correctIndex: 1 },
          { question: 'Un calembour est :', options: ['Une insulte', 'Un jeu de mots', 'Un compliment', 'Un geste'], correctIndex: 1 },
          { question: 'Les Français apprécient :', options: ['Uniquement l\'humour physique', 'L\'ironie et l\'autodérision', 'Les blagues offensantes', 'L\'absence d\'humour'], correctIndex: 1 },
          { question: '« Quel temps magnifique ! » sous la pluie = :', options: ['Sincérité', 'Ironie', 'Ignorance', 'Joie'], correctIndex: 1 },
          { question: 'L\'autodérision consiste à :', options: ['Critiquer les autres', 'Rire de soi-même', 'Se plaindre', 'Ignorer ses défauts'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 177: Les relations sociales complexes
  {
    courseId: 'lesson-177',
    steps: [
      {
        id: 'L177-1', type: 'lesson', title: 'Les relations sociales complexes', characterId: 'marie',
        content: `Au niveau B2, vous devez savoir gérer des situations sociales **délicates**.\n\n📝 **Faire un reproche :**\n- « Tu aurais pu me prévenir. »\n- « J'aurais apprécié que tu me consultes. »\n- « Il me semble que tu n'as pas respecté notre accord. »\n\n🙏 **S'excuser avec nuance :**\n- « Je suis sincèrement désolé(e). »\n- « Je reconnais mon erreur et je m'en excuse. »\n- « J'aurais dû agir autrement. »\n\n📋 **Se justifier :**\n- « Si j'ai agi ainsi, c'est parce que… »\n- « Je comprends votre réaction, toutefois… »\n- « Permettez-moi de m'expliquer. »\n\n🤝 **Réconcilier :**\n- « Passons l'éponge. »\n- « Ne nous en voulons pas. »\n- « L'essentiel est que nous trouvions une solution. »`,
        tip: '💡 « Passer l\'éponge » signifie oublier un conflit et repartir sur de bonnes bases.'
      },
      {
        id: 'L177-2', type: 'listening', title: 'Écoute — Conflit et réconciliation', characterId: 'omar',
        text: 'Je suis sincèrement désolé de ne pas t\'avoir prévenu. J\'aurais dû t\'appeler. Si j\'ai oublié, c\'est parce que j\'avais un problème urgent au travail. J\'espère que tu peux comprendre. Passons l\'éponge ?',
        question: 'Que propose le locuteur à la fin ?',
        options: ['De se disputer davantage', 'De passer l\'éponge', 'De ne plus se parler', 'De porter plainte'],
        correctIndex: 1
      },
      {
        id: 'L177-3', type: 'qcm', title: 'Faire un reproche poli', characterId: 'elena',
        question: 'Quelle formule pour un reproche poli ?',
        options: ['T\'es nul !', 'Tu aurais pu me prévenir.', 'C\'est de ta faute.', 'Je te déteste.'],
        correctIndex: 1,
        explanation: '« Tu aurais pu me prévenir » exprime un reproche de manière polie (conditionnel passé).'
      },
      {
        id: 'L177-4', type: 'flashcard', title: 'Reproches, excuses, justifications', characterId: 'thomas',
        cards: [
          { front: 'Tu aurais pu me prévenir', back: 'You could have warned me' },
          { front: 'Je reconnais mon erreur', back: 'I acknowledge my mistake' },
          { front: 'Permettez-moi de m\'expliquer', back: 'Allow me to explain' },
          { front: 'Passons l\'éponge', back: 'Let\'s wipe the slate clean' },
          { front: 'J\'aurais dû agir autrement', back: 'I should have acted differently' },
          { front: 'Ne nous en voulons pas', back: 'Let\'s not hold it against each other' },
        ]
      },
      {
        id: 'L177-5', type: 'fill-blank', title: 'S\'excuser', characterId: 'fatou',
        sentence: 'Je ___ mon erreur et je m\'en excuse sincèrement.',
        options: ['reconnais', 'ignore', 'nie', 'cache'],
        correctAnswer: 'reconnais'
      },
      {
        id: 'L177-6', type: 'drag-drop', title: 'Séquence de résolution de conflit', characterId: 'yuki',
        instruction: 'Ordonnez les étapes :',
        items: ['Se réconcilier', 'S\'excuser', 'Écouter le reproche', 'Se justifier'],
        correctOrder: ['Écouter le reproche', 'S\'excuser', 'Se justifier', 'Se réconcilier']
      },
      {
        id: 'L177-7', type: 'qcm', title: 'Se justifier', characterId: 'lucas',
        question: 'Quelle formule pour se justifier ?',
        options: ['C\'est pas ma faute !', 'Si j\'ai agi ainsi, c\'est parce que…', 'Je m\'en fiche.', 'Tant pis.'],
        correctIndex: 1,
        explanation: '« Si j\'ai agi ainsi, c\'est parce que… » est une formule de justification structurée et polie.'
      },
      {
        id: 'L177-8', type: 'final-quiz', title: 'Quiz final — Relations sociales', characterId: 'marie',
        questions: [
          { question: '« Passer l\'éponge » signifie :', options: ['Nettoyer', 'Oublier un conflit', 'Se disputer', 'Pleurer'], correctIndex: 1 },
          { question: '« Tu ___ pu me prévenir ! » (reproche)', options: ['avais', 'aurais', 'auras', 'as'], correctIndex: 1 },
          { question: 'S\'excuser poliment :', options: ['C\'est pas grave', 'Je reconnais mon erreur', 'Tant pis pour toi', 'Laisse tomber'], correctIndex: 1 },
          { question: '« ___-moi de m\'expliquer. »', options: ['Permettez', 'Laissez', 'Donnez', 'Faites'], correctIndex: 0 },
          { question: 'Après un conflit, il faut :', options: ['Ignorer l\'autre', 'Chercher une solution ensemble', 'Fuir', 'Crier plus fort'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 178: Le participe présent et l'adjectif verbal
  {
    courseId: 'lesson-178',
    steps: [
      {
        id: 'L178-1', type: 'lesson', title: 'Participe présent et adjectif verbal', characterId: 'marie',
        content: `Il est important de distinguer le **participe présent** de l'**adjectif verbal**.\n\n📐 **Participe présent** (invariable) :\n- Formation : radical + **-ant**\n- Exprime une action (= « en train de »)\n- « Les étudiants **parlant** français ont un avantage. » (= qui parlent)\n\n📐 **Adjectif verbal** (s'accorde) :\n- Même terminaison en -ant mais fonctionne comme un adjectif\n- « Une histoire **passionnante** » (= qui passionne)\n- « Des résultats **surprenants** »\n\n⚠️ **Attention aux orthographes différentes :**\n\n| Participe présent | Adjectif verbal |\n|---|---|\n| provoquant | provocant |\n| communiquant | communicant |\n| fatiguant | fatigant |\n| convainquant | convaincant |\n| précédant | précédent |\n| différant | différent |`,
        tip: '💡 Le participe présent est invariable (toujours -ant), l\'adjectif verbal s\'accorde en genre et nombre.'
      },
      {
        id: 'L178-2', type: 'listening', title: 'Écoute — Description', characterId: 'omar',
        text: 'La conférence était très intéressante. Les intervenants, parlant couramment français, ont présenté des résultats surprenants. L\'ambiance était stimulante et les échanges, enrichissants pour tous les participants.',
        question: 'Comment étaient les résultats ?',
        options: ['Décevants', 'Surprenants', 'Ennuyeux', 'Ordinaires'],
        correctIndex: 1
      },
      {
        id: 'L178-3', type: 'qcm', title: 'Participe ou adjectif ?', characterId: 'elena',
        question: '« Les étudiants parlant français… » — C\'est un :',
        options: ['Adjectif verbal', 'Participe présent', 'Gérondif', 'Infinitif'],
        correctIndex: 1,
        explanation: '« Parlant » ici est un participe présent (= qui parlent). Il est invariable.'
      },
      {
        id: 'L178-4', type: 'flashcard', title: 'Participe vs Adjectif', characterId: 'thomas',
        cards: [
          { front: 'fatiguant (participe)', back: 'fatigant (adjectif) — une journée fatigante' },
          { front: 'convainquant (participe)', back: 'convaincant (adjectif) — un argument convaincant' },
          { front: 'provoquant (participe)', back: 'provocant (adjectif) — une attitude provocante' },
          { front: 'précédant (participe)', back: 'précédent (adjectif) — la semaine précédente' },
          { front: 'différant (participe)', back: 'différent (adjectif) — des avis différents' },
          { front: 'communiquant (participe)', back: 'communicant (adjectif) — des vases communicants' },
        ]
      },
      {
        id: 'L178-5', type: 'fill-blank', title: 'Choisissez la bonne forme', characterId: 'fatou',
        sentence: 'C\'est une histoire vraiment ___ !',
        options: ['passionnante', 'passionnant', 'passionner', 'passionné'],
        correctAnswer: 'passionnante'
      },
      {
        id: 'L178-6', type: 'drag-drop', title: 'Classez les formes', characterId: 'yuki',
        instruction: 'Classez : participe présent, puis adjectif verbal :',
        items: ['convaincant (adj.)', 'convainquant (part.)', 'fatigant (adj.)', 'fatiguant (part.)'],
        correctOrder: ['convainquant (part.)', 'convaincant (adj.)', 'fatiguant (part.)', 'fatigant (adj.)']
      },
      {
        id: 'L178-7', type: 'qcm', title: 'Accord ou pas ?', characterId: 'lucas',
        question: '« Des arguments convaincant___ » — Faut-il accorder ?',
        options: ['Non, c\'est invariable', 'Oui : convaincants', 'Oui : convaincantes', 'Ça dépend'],
        correctIndex: 1,
        explanation: '« Convaincant » est ici un adjectif verbal : il s\'accorde → « convaincants ».'
      },
      {
        id: 'L178-8', type: 'final-quiz', title: 'Quiz final — Participe et adjectif verbal', characterId: 'marie',
        questions: [
          { question: 'Le participe présent est :', options: ['Variable', 'Invariable', 'Parfois variable', 'Toujours féminin'], correctIndex: 1 },
          { question: 'L\'adjectif verbal de « fatiguer » :', options: ['fatiguant', 'fatigant', 'fatigué', 'fatiguante'], correctIndex: 1 },
          { question: '« Une soirée ___ » (passionner)', options: ['passionnant', 'passionnante', 'passionné', 'passionnée'], correctIndex: 1 },
          { question: '« précédant » est le ___ de « précéder »', options: ['Adjectif verbal', 'Participe présent', 'Infinitif', 'Gérondif'], correctIndex: 1 },
          { question: '« Des résultats surprenant___ » → ', options: ['surprenant', 'surprenants', 'surprenantes', 'surprenante'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 179: Révision B2.3
  {
    courseId: 'lesson-179',
    steps: [
      {
        id: 'L179-1', type: 'lesson', title: 'Révision B2.3 — Actualités et société', characterId: 'marie',
        content: `Révisons le module B2.3 !\n\n📝 **Ce que vous avez appris :**\n\n1️⃣ **L'actualité française** — Vocabulaire de presse, faits vs opinions\n2️⃣ **Les expressions idiomatiques** — 20 expressions courantes\n3️⃣ **La politique française** — Institutions de la Ve République\n4️⃣ **Les doubles pronoms** — Ordre et emploi\n5️⃣ **Article de blog** — Structure, ton, formules\n6️⃣ **L'humour français** — Ironie, second degré, calembours\n7️⃣ **Relations sociales complexes** — Reproche, excuse, justification\n8️⃣ **Participe présent et adjectif verbal** — Distinction et accord`,
        tip: '💡 Révisez les expressions idiomatiques — elles montrent une vraie maîtrise du français !'
      },
      {
        id: 'L179-2', type: 'qcm', title: 'Révision — Expressions', characterId: 'elena',
        question: '« Avoir le cafard » signifie :',
        options: ['Avoir un insecte', 'Être triste', 'Avoir faim', 'Être en forme'],
        correctIndex: 1,
        explanation: '« Avoir le cafard » = être triste, déprimé.'
      },
      {
        id: 'L179-3', type: 'fill-blank', title: 'Révision — Doubles pronoms', characterId: 'fatou',
        sentence: '« Tu donnes le livre à Pierre ? » → « Tu ___ donnes. »',
        options: ['le lui', 'lui le', 'la leur', 'les lui'],
        correctAnswer: 'le lui'
      },
      {
        id: 'L179-4', type: 'qcm', title: 'Révision — Politique', characterId: 'lucas',
        question: 'Le Président est élu pour combien d\'années ?',
        options: ['4', '5', '6', '7'],
        correctIndex: 1,
        explanation: 'Le mandat présidentiel est de 5 ans (quinquennat).'
      },
      {
        id: 'L179-5', type: 'fill-blank', title: 'Révision — Adjectif verbal', characterId: 'fatou',
        sentence: 'C\'est un discours très ___ ! (convaincre)',
        options: ['convaincant', 'convainquant', 'convaincu', 'convaincre'],
        correctAnswer: 'convaincant'
      },
      {
        id: 'L179-6', type: 'drag-drop', title: 'Révision — Structure d\'article', characterId: 'yuki',
        instruction: 'Ordonnez un article de presse :',
        items: ['Développement', 'Chapeau', 'Conclusion', 'Titre'],
        correctOrder: ['Titre', 'Chapeau', 'Développement', 'Conclusion']
      },
      {
        id: 'L179-7', type: 'qcm', title: 'Révision — Humour', characterId: 'elena',
        question: 'Le « second degré » consiste à :',
        options: ['Dire la vérité', 'Dire le contraire de ce qu\'on pense', 'Crier', 'Pleurer'],
        correctIndex: 1,
        explanation: 'Le second degré = ironie : dire le contraire de ce qu\'on pense, souvent avec humour.'
      },
      {
        id: 'L179-8', type: 'final-quiz', title: 'Quiz récapitulatif B2.3', characterId: 'marie',
        questions: [
          { question: '« La une » d\'un journal est :', options: ['La dernière page', 'La première page', 'Un article', 'Une chronique'], correctIndex: 1 },
          { question: '« Poser un lapin » = :', options: ['Cuisiner', 'Ne pas venir au RDV', 'Acheter un animal', 'Faire un cadeau'], correctIndex: 1 },
          { question: 'L\'Assemblée nationale compte ___ députés.', options: ['100', '348', '577', '1000'], correctIndex: 2 },
          { question: '« Elle me la donne. » → « me la » remplace :', options: ['COD + COI', 'COI + COD', 'Deux COD', 'Deux COI'], correctIndex: 1 },
          { question: '« fatigant » est un :', options: ['Participe présent', 'Adjectif verbal', 'Verbe', 'Adverbe'], correctIndex: 1 },
          { question: '« Tu ___ pu me prévenir ! »', options: ['as', 'aurais', 'avais', 'auras'], correctIndex: 1 },
          { question: 'Un bon titre de blog fait :', options: ['1 mot', '6-12 mots', '100 mots', 'Pas de titre'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 180: Examen B2.3
  {
    courseId: 'lesson-180',
    steps: [
      {
        id: 'L180-1', type: 'lesson', title: 'Examen B2.3 — Actualités et société', characterId: 'marie',
        content: `🏆 **Examen du module B2.3 — Actualités et société**\n\nCet examen teste toutes les compétences :\n- Vocabulaire de la presse et des médias\n- Expressions idiomatiques\n- Institutions politiques françaises\n- Les doubles pronoms\n- Rédaction d'un article de blog\n- L'humour et le second degré\n- Relations sociales complexes\n- Participe présent vs adjectif verbal\n\n📰 Badge à débloquer : **Citoyen Informé**\n\nBonne chance !`,
        tip: '💡 Lisez chaque question attentivement.'
      },
      {
        id: 'L180-2', type: 'final-quiz', title: 'Examen final B2.3', characterId: 'marie',
        questions: [
          { question: '« Avoir la pêche » = :', options: ['Manger des fruits', 'Être en forme', 'Être fatigué', 'Avoir faim'], correctIndex: 1 },
          { question: '« Il donne les clés à Marie. » → « Il ___ donne. »', options: ['les lui', 'lui les', 'la leur', 'les leur'], correctIndex: 0 },
          { question: 'Qui nomme le Premier ministre ?', options: ['Le peuple', 'Le Sénat', 'Le Président', 'Les députés'], correctIndex: 2 },
          { question: '« convainquant » est un :', options: ['Adjectif', 'Participe présent', 'Nom', 'Adverbe'], correctIndex: 1 },
          { question: 'Le « second degré » = :', options: ['La vérité', 'L\'ironie', 'La colère', 'La tristesse'], correctIndex: 1 },
          { question: '« Je ___ mon erreur. » (s\'excuser)', options: ['reconnais', 'ignore', 'cache', 'nie'], correctIndex: 0 },
          { question: 'Un « éditorial » est :', options: ['Un fait divers', 'Un article d\'opinion', 'Une publicité', 'Un roman'], correctIndex: 1 },
          { question: '« Donne-le-___ ! » (à moi)', options: ['me', 'moi', 'je', 'mon'], correctIndex: 1 },
          { question: '« En faire tout un ___ » = exagérer', options: ['gâteau', 'pain', 'fromage', 'chocolat'], correctIndex: 2 },
          { question: '« Une histoire ___ » (passionner, f.)', options: ['passionnant', 'passionnante', 'passionné', 'passionnée'], correctIndex: 1 },
        ]
      }
    ]
  },
];
