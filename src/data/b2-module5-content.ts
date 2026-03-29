// Interactive lesson content for B2 Module 5: Vers la maîtrise (Lessons 191-200)
import type { CourseContent } from './course-content';

export const b2Module5Content: CourseContent[] = [
  // Lesson 191: Les connecteurs logiques avancés
  {
    courseId: 'lesson-191',
    steps: [
      {
        id: 'L191-1', type: 'lesson', title: 'Les connecteurs logiques avancés', characterId: 'marie',
        content: `Au niveau B2, vous devez maîtriser des connecteurs logiques **avancés**.\n\n📝 **Connecteurs d'opposition/concession :**\n- En dépit de (+ nom) — Malgré\n- Quand bien même (+ conditionnel) — Même si\n- Avoir beau (+ infinitif) — Malgré tous ses efforts\n\n📝 **Connecteurs de cause renforcée :**\n- D'autant plus que — All the more so because\n- Dans la mesure où — Insofar as\n- Vu que / Étant donné que — Given that\n\n📝 **Connecteurs de conséquence :**\n- Si bien que — So much so that\n- Au point que — To the point that\n- De sorte que (+ subjonctif = but / + indicatif = conséquence)\n\n🔵 **Exemples :**\n- « **En dépit de** la pluie, le festival a eu lieu. »\n- « Il a beau étudier, il échoue toujours. »\n- « **D'autant plus que** le budget est limité. »`,
        tip: '💡 « Avoir beau + infinitif » est une structure très française. Ex : « J\'ai beau essayer, je n\'y arrive pas. »'
      },
      {
        id: 'L191-2', type: 'listening', title: 'Écoute — Argumentation nuancée', characterId: 'omar',
        text: 'En dépit des critiques, le maire d\'Antibes a maintenu sa décision d\'interdire les voitures dans le centre historique. D\'autant plus que les études montrent une amélioration de la qualité de l\'air. Il a beau recevoir des plaintes, il reste convaincu du bien-fondé de sa politique.',
        question: 'Pourquoi le maire maintient-il sa décision ?',
        options: ['Par entêtement', 'Grâce aux études sur la qualité de l\'air', 'Sous la pression des citoyens', 'Par manque d\'alternatives'],
        correctIndex: 1
      },
      {
        id: 'L191-3', type: 'qcm', title: 'Avoir beau + infinitif', characterId: 'elena',
        question: '« Il a beau travailler, il ne réussit pas. » signifie :',
        options: ['Il travaille bien et réussit', 'Malgré son travail, il ne réussit pas', 'Il ne travaille pas du tout', 'Il travaille parfois'],
        correctIndex: 1,
        explanation: '« Avoir beau + infinitif » exprime la concession : malgré son effort, le résultat est contraire.'
      },
      {
        id: 'L191-4', type: 'flashcard', title: 'Connecteurs avancés', characterId: 'thomas',
        cards: [
          { front: 'En dépit de', back: 'In spite of / Despite' },
          { front: 'Quand bien même', back: 'Even if (+ conditional)' },
          { front: 'Avoir beau + inf.', back: 'No matter how much one… (concession)' },
          { front: 'D\'autant plus que', back: 'All the more so because' },
          { front: 'Si bien que', back: 'So much so that (consequence)' },
          { front: 'Au point que', back: 'To the point that' },
        ]
      },
      {
        id: 'L191-5', type: 'fill-blank', title: 'Complétez avec le bon connecteur', characterId: 'fatou',
        sentence: '___ les difficultés, l\'équipe a terminé le projet à temps.',
        options: ['En dépit de', 'Grâce à', 'À cause de', 'Puisque'],
        correctAnswer: 'En dépit de'
      },
      {
        id: 'L191-6', type: 'drag-drop', title: 'Formez une phrase', characterId: 'yuki',
        instruction: 'Remettez dans l\'ordre :',
        items: ['il ne progresse pas', 'étudier', 'Il a beau'],
        correctOrder: ['Il a beau', 'étudier', 'il ne progresse pas']
      },
      {
        id: 'L191-7', type: 'qcm', title: 'Quand bien même', characterId: 'lucas',
        question: '« Quand bien même il ___, je maintiendrais ma position. »',
        options: ['a raison', 'aurait raison', 'avait raison', 'aura raison'],
        correctIndex: 1,
        explanation: '« Quand bien même » est suivi du conditionnel : « quand bien même il aurait raison ».'
      },
      {
        id: 'L191-8', type: 'final-quiz', title: 'Quiz final — Connecteurs avancés', characterId: 'marie',
        questions: [
          { question: '« En dépit de » signifie :', options: ['Grâce à', 'Malgré', 'À cause de', 'Pour'], correctIndex: 1 },
          { question: '« Il a beau essayer » = :', options: ['Il essaie avec succès', 'Il n\'essaie pas', 'Malgré ses essais', 'Il essaiera'], correctIndex: 2 },
          { question: '« Quand bien même » est suivi du :', options: ['Indicatif', 'Subjonctif', 'Conditionnel', 'Impératif'], correctIndex: 2 },
          { question: '« D\'autant plus que » introduit :', options: ['Une conséquence', 'Une cause renforcée', 'Un but', 'Un ordre'], correctIndex: 1 },
          { question: '« Si bien que » introduit :', options: ['Une cause', 'Une conséquence', 'Un but', 'Une concession'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 192: La synthèse de documents
  {
    courseId: 'lesson-192',
    steps: [
      {
        id: 'L192-1', type: 'lesson', title: 'La synthèse de documents', characterId: 'marie',
        content: `La **synthèse de documents** est un exercice central au DALF C1, mais déjà abordé au B2.\n\n📐 **Principe :**\nCroiser les informations de 2-3 documents pour en faire un texte unique, neutre et structuré.\n\n📝 **Méthodologie :**\n\n1️⃣ **Lire** chaque document attentivement\n2️⃣ **Identifier** les thèmes communs\n3️⃣ **Regrouper** les idées par thème (pas par document !)\n4️⃣ **Rédiger** un texte structuré avec introduction et conclusion\n5️⃣ **Reformuler** — JAMAIS de copier-coller\n\n⚠️ **Règles :**\n- Ne pas donner son avis personnel\n- Reformuler les idées des auteurs\n- Organiser par thèmes, pas par documents\n- Citer les sources : « Selon le document 1… », « L'auteur de… affirme que… »`,
        tip: '💡 La synthèse n\'est PAS un résumé. C\'est un croisement thématique des documents.'
      },
      {
        id: 'L192-2', type: 'listening', title: 'Écoute — Présentation d\'une synthèse', characterId: 'omar',
        text: 'Ma synthèse porte sur le tourisme durable. Le premier document, un article du Monde, présente les enjeux économiques. Le second, un rapport de l\'UNESCO, aborde l\'impact environnemental. Les deux documents s\'accordent sur la nécessité d\'un tourisme plus responsable, mais divergent sur les moyens à mettre en œuvre.',
        question: 'Sur quoi les documents divergent-ils ?',
        options: ['L\'importance du tourisme', 'Les moyens à mettre en œuvre', 'La définition du tourisme', 'Le nombre de touristes'],
        correctIndex: 1
      },
      {
        id: 'L192-3', type: 'qcm', title: 'Règles de la synthèse', characterId: 'elena',
        question: 'Dans une synthèse, peut-on donner son avis ?',
        options: ['Oui, toujours', 'Non, jamais', 'Seulement en conclusion', 'Seulement en introduction'],
        correctIndex: 1,
        explanation: 'La synthèse est un exercice neutre et objectif : pas d\'opinion personnelle.'
      },
      {
        id: 'L192-4', type: 'flashcard', title: 'Formules pour la synthèse', characterId: 'thomas',
        cards: [
          { front: 'Selon le document 1…', back: 'According to document 1…' },
          { front: 'L\'auteur affirme que…', back: 'The author states that…' },
          { front: 'Les deux documents convergent sur…', back: 'Both documents agree on…' },
          { front: 'En revanche, le second document…', back: 'However, the second document…' },
          { front: 'Il ressort de ces documents que…', back: 'It emerges from these documents that…' },
          { front: 'Reformuler', back: 'To rephrase (never copy-paste)' },
        ]
      },
      {
        id: 'L192-5', type: 'fill-blank', title: 'Citez une source', characterId: 'fatou',
        sentence: '___ le rapport de l\'UNESCO, le tourisme de masse menace les sites classés.',
        options: ['Selon', 'Grâce à', 'Malgré', 'Contre'],
        correctAnswer: 'Selon'
      },
      {
        id: 'L192-6', type: 'drag-drop', title: 'Étapes de la synthèse', characterId: 'yuki',
        instruction: 'Remettez dans l\'ordre :',
        items: ['Rédiger par thèmes', 'Identifier les thèmes communs', 'Lire les documents', 'Reformuler et conclure'],
        correctOrder: ['Lire les documents', 'Identifier les thèmes communs', 'Rédiger par thèmes', 'Reformuler et conclure']
      },
      {
        id: 'L192-7', type: 'qcm', title: 'Organisation', characterId: 'lucas',
        question: 'Comment organiser une synthèse ?',
        options: ['Par document (doc 1, doc 2, doc 3)', 'Par thèmes communs', 'Par longueur de texte', 'Par ordre alphabétique'],
        correctIndex: 1,
        explanation: 'Une synthèse s\'organise par THÈMES, pas par document.'
      },
      {
        id: 'L192-8', type: 'final-quiz', title: 'Quiz final — La synthèse', characterId: 'marie',
        questions: [
          { question: 'La synthèse est :', options: ['Un résumé', 'Un croisement thématique', 'Un essai', 'Une critique'], correctIndex: 1 },
          { question: 'Peut-on copier des phrases des documents ?', options: ['Oui', 'Non, il faut reformuler', 'Seulement les titres', 'Oui, avec guillemets'], correctIndex: 1 },
          { question: 'On organise par :', options: ['Documents', 'Thèmes', 'Pages', 'Auteurs'], correctIndex: 1 },
          { question: '« ___ le document 1, le chômage augmente. »', options: ['Selon', 'Grâce à', 'Contre', 'Malgré'], correctIndex: 0 },
          { question: 'Donner son avis est :', options: ['Obligatoire', 'Interdit', 'Optionnel', 'Encouragé'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 193: Présentation orale formelle
  {
    courseId: 'lesson-193',
    steps: [
      {
        id: 'L193-1', type: 'lesson', title: 'Présentation orale formelle', characterId: 'marie',
        content: `La **présentation orale formelle** (3-5 minutes) est un exercice clé du DELF B2.\n\n📐 **Structure :**\n\n1️⃣ **Introduction :** Saluer, présenter le sujet, annoncer le plan\n2️⃣ **Développement :** 2-3 parties avec transitions\n3️⃣ **Conclusion :** Bilan, prise de position, ouverture\n\n📝 **Formules :**\n- « Mesdames, Messieurs, aujourd'hui je vais vous parler de… »\n- « Mon exposé se compose de trois parties. »\n- « Tout d'abord… Ensuite… Enfin… »\n- « Pour conclure, je dirais que… »\n- « Avez-vous des questions ? »\n\n💡 **Conseils :**\n- Parler clairement et pas trop vite\n- Regarder le public\n- Utiliser des notes (pas lire !)\n- Illustrer avec des exemples concrets`,
        tip: '💡 Au DELF B2, l\'examinateur attend un exposé structuré avec des transitions claires.'
      },
      {
        id: 'L193-2', type: 'listening', title: 'Écoute — Début d\'exposé', characterId: 'omar',
        text: 'Mesdames, Messieurs, bonjour. Aujourd\'hui, je vais vous parler du tourisme durable sur la Côte d\'Azur. Mon exposé se compose de trois parties. Tout d\'abord, je présenterai la situation actuelle. Ensuite, j\'analyserai les défis environnementaux. Enfin, je proposerai des solutions concrètes.',
        question: 'Combien de parties l\'exposé comporte-t-il ?',
        options: ['Deux', 'Trois', 'Quatre', 'Cinq'],
        correctIndex: 1
      },
      {
        id: 'L193-3', type: 'qcm', title: 'Transition', characterId: 'elena',
        question: 'Quelle formule pour passer à la deuxième partie ?',
        options: ['Bon, voilà.', 'Passons maintenant à notre deuxième point.', 'Euh, alors…', 'Je sais pas trop.'],
        correctIndex: 1,
        explanation: '« Passons maintenant à… » est une transition claire et professionnelle.'
      },
      {
        id: 'L193-4', type: 'flashcard', title: 'Formules de présentation', characterId: 'thomas',
        cards: [
          { front: 'Mon exposé se compose de… parties', back: 'My presentation consists of… parts' },
          { front: 'Tout d\'abord… Ensuite… Enfin…', back: 'First of all… Then… Finally…' },
          { front: 'Passons maintenant à…', back: 'Let\'s move on to…' },
          { front: 'Pour conclure…', back: 'To conclude…' },
          { front: 'Avez-vous des questions ?', back: 'Do you have any questions?' },
          { front: 'Je vous remercie de votre attention', back: 'Thank you for your attention' },
        ]
      },
      {
        id: 'L193-5', type: 'fill-blank', title: 'Transition', characterId: 'fatou',
        sentence: '___ maintenant à notre deuxième point : les solutions.',
        options: ['Passons', 'Mangeons', 'Dormons', 'Partons'],
        correctAnswer: 'Passons'
      },
      {
        id: 'L193-6', type: 'drag-drop', title: 'Structure de l\'exposé', characterId: 'yuki',
        instruction: 'Ordonnez :',
        items: ['Conclusion + questions', 'Introduction + plan', 'Partie 2', 'Partie 1'],
        correctOrder: ['Introduction + plan', 'Partie 1', 'Partie 2', 'Conclusion + questions']
      },
      {
        id: 'L193-7', type: 'qcm', title: 'Conseils de présentation', characterId: 'lucas',
        question: 'Pendant un exposé, il faut :',
        options: ['Lire ses notes mot à mot', 'Parler clairement et regarder le public', 'Tourner le dos au public', 'Parler le plus vite possible'],
        correctIndex: 1,
        explanation: 'Un bon présentateur parle clairement, regarde le public et utilise des notes comme support.'
      },
      {
        id: 'L193-8', type: 'final-quiz', title: 'Quiz final — Présentation orale', characterId: 'marie',
        questions: [
          { question: 'La durée au DELF B2 :', options: ['30 secondes', '3-5 minutes', '30 minutes', '1 heure'], correctIndex: 1 },
          { question: '« Tout d\'abord… ___ … Enfin… »', options: ['Ensuite', 'Jamais', 'Bof', 'Rien'], correctIndex: 0 },
          { question: 'L\'introduction doit contenir :', options: ['Le sujet + le plan', 'La conclusion', 'Des blagues', 'Rien'], correctIndex: 0 },
          { question: 'On termine par :', options: ['« Au revoir »', '« Avez-vous des questions ? »', 'Le silence', 'Une chanson'], correctIndex: 1 },
          { question: 'Il faut ___ le public pendant l\'exposé.', options: ['ignorer', 'regarder', 'fuir', 'critiquer'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 194: L'accord du participe passé — Cas complexes
  {
    courseId: 'lesson-194',
    steps: [
      {
        id: 'L194-1', type: 'lesson', title: 'Accord du participe passé — Cas complexes', characterId: 'marie',
        content: `Les règles avancées d'accord du participe passé sont un point de grammaire complexe.\n\n📐 **Rappel de base :**\n- Avec **être** : accord avec le sujet\n- Avec **avoir** : accord avec le COD **si** placé avant le verbe\n\n⚠️ **Cas complexes avec COD antéposé :**\n- « Les fleurs que j'ai **achetées** » (que = les fleurs, COD avant avoir → accord)\n- « La lettre qu'il a **écrite** » (que = la lettre → accord féminin)\n- « Combien de livres avez-vous **lus** ? » (combien de livres = COD avant → accord)\n\n🔵 **Pas d'accord si COD après :**\n- « J'ai acheté **des fleurs**. » (COD après → pas d'accord)\n- « Elle a écrit **une lettre**. »\n\n🟣 **Cas des verbes pronominaux :**\n- « Elle s'est **lavée**. » (se = COD → accord)\n- « Elle s'est **lavé** les mains. » (se = COI, les mains = COD → pas d'accord sur « lavé »)`,
        tip: '💡 Question clé : le COD est-il placé AVANT le verbe ? Si oui → accord. Si non → pas d\'accord.'
      },
      {
        id: 'L194-2', type: 'listening', title: 'Écoute — Dictée grammaticale', characterId: 'omar',
        text: 'Les lettres que Marie a écrites étaient très émouvantes. Elle les a envoyées à sa famille. Quant aux photos qu\'elle a prises à Antibes, elles sont magnifiques. Elle s\'est souvenue de chaque moment.',
        question: 'Pourquoi « écrites » avec un -es ?',
        options: ['Accord avec Marie', 'Accord avec « les lettres » (COD avant avoir)', 'Pas de raison', 'C\'est une erreur'],
        correctIndex: 1
      },
      {
        id: 'L194-3', type: 'qcm', title: 'Accord avec avoir', characterId: 'elena',
        question: '« Les fleurs que j\'ai ___ sont belles. »',
        options: ['acheté', 'achetés', 'achetée', 'achetées'],
        correctIndex: 3,
        explanation: '« Que » remplace « les fleurs » (féminin pluriel), COD placé avant → achetées.'
      },
      {
        id: 'L194-4', type: 'flashcard', title: 'Règles d\'accord', characterId: 'thomas',
        cards: [
          { front: 'COD avant avoir → accord', back: 'Les pommes que j\'ai mangéES' },
          { front: 'COD après avoir → pas d\'accord', back: 'J\'ai mangé des pommes (pas d\'accord)' },
          { front: 'Être → accord avec le sujet', back: 'Elle est partiE' },
          { front: 'Pronominal + COD = se → accord', back: 'Elle s\'est lavéE' },
          { front: 'Pronominal + COI = se → pas d\'accord', back: 'Elle s\'est lavé les mains' },
          { front: 'Combien de… avez-vous… → accord', back: 'Combien de livres avez-vous luS ?' },
        ]
      },
      {
        id: 'L194-5', type: 'fill-blank', title: 'Accordez le participe', characterId: 'fatou',
        sentence: 'La chanson qu\'elle a ___ est magnifique.',
        options: ['chanté', 'chantée', 'chantés', 'chantées'],
        correctAnswer: 'chantée'
      },
      {
        id: 'L194-6', type: 'drag-drop', title: 'Accord ou pas ?', characterId: 'yuki',
        instruction: 'D\'abord les cas AVEC accord, puis SANS :',
        items: ['J\'ai mangé des pommes (sans)', 'Les pommes que j\'ai mangées (avec)', 'Elle s\'est lavé les mains (sans)'],
        correctOrder: ['Les pommes que j\'ai mangées (avec)', 'J\'ai mangé des pommes (sans)', 'Elle s\'est lavé les mains (sans)']
      },
      {
        id: 'L194-7', type: 'qcm', title: 'Verbes pronominaux', characterId: 'lucas',
        question: '« Elle s\'est lavé___ les mains. » — Accord ?',
        options: ['lavée (accord)', 'lavé (pas d\'accord)', 'lavées', 'lavés'],
        correctIndex: 1,
        explanation: '« Se » est COI (elle a lavé les mains à elle-même), donc pas d\'accord sur le participe.'
      },
      {
        id: 'L194-8', type: 'final-quiz', title: 'Quiz final — Accord du PP', characterId: 'marie',
        questions: [
          { question: '« Les livres que j\'ai ___ » (lire)', options: ['lu', 'lus', 'lue', 'lues'], correctIndex: 1 },
          { question: '« Elle a mangé ___ pomme. »', options: ['un', 'une', 'des', 'les'], correctIndex: 1 },
          { question: '« Elle s\'est ___ » (laver)', options: ['lavé', 'lavée', 'lavés', 'lavées'], correctIndex: 1 },
          { question: 'Avec avoir, le PP s\'accorde si :', options: ['Le sujet est féminin', 'Le COD est avant le verbe', 'Le COI est présent', 'Toujours'], correctIndex: 1 },
          { question: '« La lettre qu\'il a ___ » (écrire)', options: ['écrit', 'écrite', 'écrits', 'écrites'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 195: La francophonie
  {
    courseId: 'lesson-195',
    steps: [
      {
        id: 'L195-1', type: 'lesson', title: 'La francophonie', characterId: 'marie',
        content: `Le français est parlé sur les **5 continents** par environ **300 millions** de personnes.\n\n🌍 **La francophonie en chiffres :**\n- 29 pays où le français est langue officielle\n- 88 États membres de l'OIF (Organisation Internationale de la Francophonie)\n- 2e langue la plus apprise au monde\n\n🗺️ **Où parle-t-on français ?**\n- **Europe :** France, Belgique, Suisse, Luxembourg, Monaco\n- **Afrique :** Sénégal, Côte d'Ivoire, RD Congo, Madagascar, Maroc, Tunisie…\n- **Amériques :** Québec (Canada), Haïti, Guyane française\n- **Asie-Pacifique :** Nouvelle-Calédonie, Polynésie française\n\n🎨 **Richesse de la francophonie :**\n- Littérature : Aimé Césaire, Léopold Sédar Senghor, Tahar Ben Jelloun\n- Musique : Tiken Jah Fakoly, Angélique Kidjo, Cœur de Pirate\n- Cinéma : Ousmane Sembène, Denis Villeneuve`,
        tip: '💡 L\'Afrique sera le continent qui comptera le plus de francophones d\'ici 2050 !'
      },
      {
        id: 'L195-2', type: 'listening', title: 'Écoute — La francophonie africaine', characterId: 'omar',
        text: 'Le français en Afrique est une réalité vivante. Au Sénégal, en Côte d\'Ivoire et au Congo, le français coexiste avec les langues locales. Chaque pays a développé ses propres expressions. Par exemple, au Québec on dit « char » pour voiture, et au Sénégal on « essencier » pour faire le plein.',
        question: 'Que signifie « char » au Québec ?',
        options: ['Un bus', 'Une voiture', 'Un train', 'Un avion'],
        correctIndex: 1
      },
      {
        id: 'L195-3', type: 'qcm', title: 'Chiffres de la francophonie', characterId: 'elena',
        question: 'Combien de personnes parlent français dans le monde ?',
        options: ['50 millions', '150 millions', '300 millions', '1 milliard'],
        correctIndex: 2,
        explanation: 'Environ 300 millions de personnes parlent français dans le monde.'
      },
      {
        id: 'L195-4', type: 'flashcard', title: 'Vocabulaire francophone', characterId: 'thomas',
        cards: [
          { front: 'L\'OIF', back: 'Organisation Internationale de la Francophonie' },
          { front: 'Un francophone', back: 'A French speaker' },
          { front: 'La négritude (mouvement littéraire)', back: 'Négritude (literary movement by Césaire, Senghor)' },
          { front: 'Char (Québec)', back: 'Voiture (France)' },
          { front: 'Septante (Belgique/Suisse)', back: 'Soixante-dix (France)' },
          { front: 'Déjeuner / Dîner / Souper', back: 'Meanings vary by country!' },
        ]
      },
      {
        id: 'L195-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        sentence: 'Le français est parlé sur les ___ continents.',
        options: ['deux', 'trois', 'cinq', 'sept'],
        correctAnswer: 'cinq'
      },
      {
        id: 'L195-6', type: 'drag-drop', title: 'Pays francophones', characterId: 'yuki',
        instruction: 'Classez par continent : Europe, Afrique, Amériques :',
        items: ['Québec (Amériques)', 'Sénégal (Afrique)', 'Belgique (Europe)'],
        correctOrder: ['Belgique (Europe)', 'Sénégal (Afrique)', 'Québec (Amériques)']
      },
      {
        id: 'L195-7', type: 'qcm', title: 'L\'avenir du français', characterId: 'lucas',
        question: 'Quel continent comptera le plus de francophones en 2050 ?',
        options: ['L\'Europe', 'L\'Asie', 'L\'Afrique', 'L\'Amérique'],
        correctIndex: 2,
        explanation: 'Grâce à la croissance démographique, l\'Afrique sera le continent le plus francophone d\'ici 2050.'
      },
      {
        id: 'L195-8', type: 'final-quiz', title: 'Quiz final — La francophonie', characterId: 'marie',
        questions: [
          { question: 'Combien de francophones dans le monde ?', options: ['50M', '100M', '300M', '1Md'], correctIndex: 2 },
          { question: 'L\'OIF = Organisation ___ de la Francophonie', options: ['Internationale', 'Intérieure', 'Indépendante', 'Initiale'], correctIndex: 0 },
          { question: '« Septante » (70) se dit en :', options: ['France', 'Belgique/Suisse', 'Québec', 'Haïti'], correctIndex: 1 },
          { question: 'Le français est la ___ langue la plus apprise.', options: ['1ère', '2e', '5e', '10e'], correctIndex: 1 },
          { question: 'En 2050, le plus de francophones seront en :', options: ['Europe', 'Afrique', 'Asie', 'Amérique'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 196: Les nuances de sens
  {
    courseId: 'lesson-196',
    steps: [
      {
        id: 'L196-1', type: 'lesson', title: 'Les nuances de sens', characterId: 'marie',
        content: `Au niveau B2, il faut maîtriser les **nuances** entre synonymes proches.\n\n📝 **Exemples de paires :**\n\n🔵 **Voir / Regarder / Observer / Contempler**\n- Voir = percevoir (involontaire)\n- Regarder = diriger ses yeux (volontaire)\n- Observer = examiner avec attention\n- Contempler = admirer longuement\n\n🟢 **Dire / Affirmer / Prétendre / Soutenir**\n- Dire = neutre\n- Affirmer = avec certitude\n- Prétendre = sans preuve (souvent douteux)\n- Soutenir = défendre une position\n\n🟣 **Aimer / Adorer / Apprécier / Affectionner**\n- Aimer = sentiment général\n- Adorer = très fort (voire excessif)\n- Apprécier = reconnaître la valeur\n- Affectionner = aimer avec tendresse\n\n💡 **Le choix du mot juste montre votre maîtrise du français !**`,
        tip: '💡 Un bon dictionnaire de synonymes est votre meilleur allié pour enrichir votre vocabulaire.'
      },
      {
        id: 'L196-2', type: 'listening', title: 'Écoute — Nuances en contexte', characterId: 'omar',
        text: 'Le critique affirme que ce film est un chef-d\'œuvre. Son collègue prétend au contraire qu\'il est surestimé. Le réalisateur, lui, soutient que son œuvre parle d\'elle-même. Quant au public, il apprécie surtout la bande originale.',
        question: 'Qui exprime un doute ?',
        options: ['Le critique', 'Le collègue (prétend)', 'Le réalisateur', 'Le public'],
        correctIndex: 1
      },
      {
        id: 'L196-3', type: 'qcm', title: 'Nuance verbale', characterId: 'elena',
        question: '« Prétendre » implique :',
        options: ['Une certitude absolue', 'Une affirmation sans preuve', 'Un ordre', 'Un souhait'],
        correctIndex: 1,
        explanation: '« Prétendre » suggère que l\'affirmation n\'est pas forcément vraie ou prouvée.'
      },
      {
        id: 'L196-4', type: 'flashcard', title: 'Nuances de vocabulaire', characterId: 'thomas',
        cards: [
          { front: 'Voir (involontaire)', back: 'To see (unintentional)' },
          { front: 'Regarder (volontaire)', back: 'To look at / watch (intentional)' },
          { front: 'Observer (attention)', back: 'To observe carefully' },
          { front: 'Affirmer (certitude)', back: 'To state firmly' },
          { front: 'Prétendre (doute)', back: 'To claim (unproven)' },
          { front: 'Apprécier (valeur)', back: 'To appreciate the value of' },
        ]
      },
      {
        id: 'L196-5', type: 'fill-blank', title: 'Choisissez le mot juste', characterId: 'fatou',
        sentence: 'Le témoin ___ avoir vu l\'accident, mais personne ne peut le confirmer.',
        options: ['prétend', 'affirme', 'soutient', 'dit'],
        correctAnswer: 'prétend'
      },
      {
        id: 'L196-6', type: 'drag-drop', title: 'Du plus neutre au plus fort', characterId: 'yuki',
        instruction: 'Classez du plus faible au plus fort :',
        items: ['Adorer', 'Aimer', 'Apprécier'],
        correctOrder: ['Apprécier', 'Aimer', 'Adorer']
      },
      {
        id: 'L196-7', type: 'qcm', title: 'Voir vs Regarder', characterId: 'lucas',
        question: '« J\'ai ___ un accident en traversant la rue. » (involontaire)',
        options: ['regardé', 'vu', 'observé', 'contemplé'],
        correctIndex: 1,
        explanation: '« Voir » implique une perception involontaire : on ne s\'attendait pas à voir l\'accident.'
      },
      {
        id: 'L196-8', type: 'final-quiz', title: 'Quiz final — Nuances de sens', characterId: 'marie',
        questions: [
          { question: '« Prétendre » implique :', options: ['Certitude', 'Doute', 'Joie', 'Tristesse'], correctIndex: 1 },
          { question: '« Observer » = :', options: ['Voir sans intention', 'Examiner avec attention', 'Ignorer', 'Imaginer'], correctIndex: 1 },
          { question: 'Du plus faible au plus fort : apprécier < ___ < adorer', options: ['détester', 'aimer', 'haïr', 'ignorer'], correctIndex: 1 },
          { question: '« Affirmer » exprime :', options: ['Le doute', 'La certitude', 'La peur', 'L\'ignorance'], correctIndex: 1 },
          { question: '« Contempler » = :', options: ['Regarder rapidement', 'Admirer longuement', 'Fermer les yeux', 'Courir'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 197: Simulation DELF B2
  {
    courseId: 'lesson-197',
    steps: [
      {
        id: 'L197-1', type: 'lesson', title: 'Simulation DELF B2', characterId: 'marie',
        content: `Le **DELF B2** se compose de 4 épreuves :\n\n📝 **1. Compréhension orale** (30 min, /25)\n- 2 documents audio, questions de compréhension\n\n📖 **2. Compréhension écrite** (1h, /25)\n- 2 textes, questions de compréhension\n\n✍️ **3. Production écrite** (1h, /25)\n- Essai argumentatif de 250+ mots\n\n🗣️ **4. Production orale** (20 min, /25)\n- Exposé de 3-5 min sur un sujet + débat avec l'examinateur\n\n🏆 **Score minimum :**\n- 50/100 au total\n- Minimum 5/25 par épreuve\n\n💡 **Le DELF B2 est reconnu internationalement** et est souvent exigé pour les études universitaires en France.`,
        tip: '💡 Au DELF B2, la production écrite et orale comptent autant que la compréhension !'
      },
      {
        id: 'L197-2', type: 'listening', title: 'Écoute — Simulation CO', characterId: 'omar',
        text: 'La mairie d\'Antibes a inauguré hier un nouveau parc écologique dans le quartier de Juan-les-Pins. Ce parc de deux hectares comprend un jardin botanique, une aire de jeux pour enfants et un espace de pique-nique. Le maire a déclaré que ce projet, financé à hauteur de trois millions d\'euros, s\'inscrit dans la politique de développement durable de la ville.',
        question: 'Combien a coûté le parc ?',
        options: ['1 million', '2 millions', '3 millions', '5 millions'],
        correctIndex: 2
      },
      {
        id: 'L197-3', type: 'qcm', title: 'Format du DELF B2', characterId: 'elena',
        question: 'Combien d\'épreuves comporte le DELF B2 ?',
        options: ['2', '3', '4', '5'],
        correctIndex: 2,
        explanation: 'Le DELF B2 comporte 4 épreuves : CO, CE, PE et PO.'
      },
      {
        id: 'L197-4', type: 'flashcard', title: 'Vocabulaire du DELF', characterId: 'thomas',
        cards: [
          { front: 'CO (Compréhension Orale)', back: 'Listening comprehension' },
          { front: 'CE (Compréhension Écrite)', back: 'Reading comprehension' },
          { front: 'PE (Production Écrite)', back: 'Written production (essay)' },
          { front: 'PO (Production Orale)', back: 'Oral production (presentation)' },
          { front: 'Score minimum : 50/100', back: 'Minimum score to pass' },
          { front: 'Essai argumentatif (250+ mots)', back: 'Argumentative essay (250+ words)' },
        ]
      },
      {
        id: 'L197-5', type: 'fill-blank', title: 'Informations sur le DELF', characterId: 'fatou',
        sentence: 'L\'essai argumentatif au DELF B2 doit faire minimum ___ mots.',
        options: ['100', '150', '250', '500'],
        correctAnswer: '250'
      },
      {
        id: 'L197-6', type: 'drag-drop', title: 'Épreuves du DELF B2', characterId: 'yuki',
        instruction: 'Ordonnez les épreuves :',
        items: ['Production orale', 'Compréhension orale', 'Production écrite', 'Compréhension écrite'],
        correctOrder: ['Compréhension orale', 'Compréhension écrite', 'Production écrite', 'Production orale']
      },
      {
        id: 'L197-7', type: 'qcm', title: 'Score minimum', characterId: 'lucas',
        question: 'Quel score minimum par épreuve ?',
        options: ['0/25', '5/25', '10/25', '15/25'],
        correctIndex: 1,
        explanation: 'Il faut obtenir au moins 5/25 à chaque épreuve et 50/100 au total.'
      },
      {
        id: 'L197-8', type: 'final-quiz', title: 'Quiz final — Simulation DELF B2', characterId: 'marie',
        questions: [
          { question: 'Le DELF B2 a ___ épreuves.', options: ['2', '3', '4', '5'], correctIndex: 2 },
          { question: 'Score total minimum pour réussir :', options: ['30/100', '50/100', '70/100', '90/100'], correctIndex: 1 },
          { question: 'La PE au DELF B2 = :', options: ['Un résumé', 'Un essai argumentatif', 'Une dictée', 'Un dialogue'], correctIndex: 1 },
          { question: 'La PO dure :', options: ['5 min', '10 min', '20 min', '1 heure'], correctIndex: 2 },
          { question: 'Le DELF B2 est exigé pour :', options: ['Le permis de conduire', 'Les études en France', 'Le vote', 'Le sport'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 198: Bilan de communication B2
  {
    courseId: 'lesson-198',
    steps: [
      {
        id: 'L198-1', type: 'lesson', title: 'Bilan de communication B2', characterId: 'marie',
        content: `🎯 **Compétences acquises au niveau B2 :**\n\n✅ **Argumenter** — Thèse/antithèse, connecteurs avancés\n✅ **Négocier** — Proposer, contre-proposer, compromis\n✅ **Analyser** — Discours, articles, œuvres d'art\n✅ **Rédiger** — Essais, critiques, comptes-rendus, lettres\n✅ **Comprendre** — Actualités, littérature, humour\n✅ **Présenter** — Exposé oral structuré\n✅ **Nuancer** — Registres de langue, synonymes, figures de style\n✅ **Connaître** — Politique, culture, francophonie\n\n📝 **Vous êtes maintenant capable de :**\n- Comprendre le contenu essentiel de sujets complexes\n- Vous exprimer de façon claire et détaillée\n- Donner votre avis avec des arguments structurés\n- Interagir avec aisance et spontanéité`,
        tip: '💡 Félicitations ! Vous avez atteint le niveau B2 — Utilisateur avancé !'
      },
      {
        id: 'L198-2', type: 'qcm', title: 'Auto-évaluation', characterId: 'elena',
        question: 'Au niveau B2, vous pouvez :',
        options: ['Dire bonjour uniquement', 'Commander au restaurant', 'Argumenter et débattre sur des sujets complexes', 'Lire un dictionnaire'],
        correctIndex: 2,
        explanation: 'Le B2 permet d\'argumenter, débattre et s\'exprimer sur des sujets complexes.'
      },
      {
        id: 'L198-3', type: 'flashcard', title: 'Compétences B2', characterId: 'thomas',
        cards: [
          { front: 'Argumenter', back: 'To argue / make a case' },
          { front: 'Nuancer', back: 'To qualify / nuance' },
          { front: 'Synthétiser', back: 'To synthesize' },
          { front: 'Analyser', back: 'To analyze' },
          { front: 'Rédiger un essai', back: 'To write an essay' },
          { front: 'Débattre', back: 'To debate' },
        ]
      },
      {
        id: 'L198-4', type: 'fill-blank', title: 'Bilan', characterId: 'fatou',
        sentence: 'Au niveau B2, je suis capable de m\'exprimer de façon claire et ___.',
        options: ['détaillée', 'simple', 'courte', 'basique'],
        correctAnswer: 'détaillée'
      },
      {
        id: 'L198-5', type: 'drag-drop', title: 'Progression des niveaux', characterId: 'yuki',
        instruction: 'Du débutant à l\'avancé :',
        items: ['B2 — Avancé', 'A1 — Découverte', 'B1 — Seuil', 'A2 — Survie'],
        correctOrder: ['A1 — Découverte', 'A2 — Survie', 'B1 — Seuil', 'B2 — Avancé']
      },
      {
        id: 'L198-6', type: 'qcm', title: 'Prochaine étape', characterId: 'lucas',
        question: 'Après le B2, quel est le prochain niveau ?',
        options: ['A1', 'B1', 'C1', 'C2'],
        correctIndex: 2,
        explanation: 'Après le B2, le niveau suivant est le C1 — Autonome.'
      },
      {
        id: 'L198-7', type: 'final-quiz', title: 'Quiz bilan B2', characterId: 'marie',
        questions: [
          { question: 'B2 signifie :', options: ['Débutant', 'Intermédiaire', 'Avancé', 'Maîtrise'], correctIndex: 2 },
          { question: 'Au B2, on sait :', options: ['Se présenter', 'Acheter du pain', 'Argumenter et débattre', 'Réciter l\'alphabet'], correctIndex: 2 },
          { question: 'Le prochain niveau après B2 :', options: ['B3', 'C1', 'A1', 'B1'], correctIndex: 1 },
          { question: '« Nuancer » signifie :', options: ['Simplifier', 'Apporter des nuances', 'Répéter', 'Oublier'], correctIndex: 1 },
          { question: 'Le DELF B2 est reconnu :', options: ['Localement', 'Nationalement', 'Internationalement', 'Pas du tout'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 199: Révision finale B2
  {
    courseId: 'lesson-199',
    steps: [
      {
        id: 'L199-1', type: 'lesson', title: 'Révision finale B2', characterId: 'marie',
        content: `📝 **Grande révision de tout le niveau B2 !**\n\nPréparons-nous pour l'examen final avec un quiz complet couvrant tous les modules :\n\n🎤 **B2.1** — Argumenter et convaincre\n👔 **B2.2** — Le monde professionnel\n📰 **B2.3** — Actualités et société\n🎭 **B2.4** — Arts et littérature\n🎓 **B2.5** — Vers la maîtrise\n\nCe quiz est plus long que les quiz habituels. Bonne chance !`,
        tip: '💡 Ce quiz comporte davantage de questions pour bien préparer l\'examen final.'
      },
      {
        id: 'L199-2', type: 'final-quiz', title: 'Révision finale B2 — Quiz complet', characterId: 'marie',
        questions: [
          { question: '« Néanmoins » exprime :', options: ['La cause', 'La conséquence', 'La concession', 'Le but'], correctIndex: 2 },
          { question: '« Si j\'avais su, je ___ resté. »', options: ['suis', 'serais', 'serai', 'étais'], correctIndex: 1 },
          { question: '« Bien qu\'il ___ raison… » (avoir)', options: ['a', 'ait', 'avait', 'aura'], correctIndex: 1 },
          { question: 'STAR = Situation, Tâche, Action, ___', options: ['Raisonnement', 'Résultat', 'Réponse', 'Rien'], correctIndex: 1 },
          { question: '« Poser un lapin » = :', options: ['Acheter un animal', 'Ne pas venir au RDV', 'Cuisiner', 'Courir'], correctIndex: 1 },
          { question: 'L\'Assemblée nationale compte ___ députés.', options: ['100', '348', '577', '1000'], correctIndex: 2 },
          { question: '« Il fut » = passé simple de :', options: ['Faire', 'Être', 'Avoir', 'Aller'], correctIndex: 1 },
          { question: '« Ce n\'est pas mal » = :', options: ['Hyperbole', 'Litote', 'Métaphore', 'Ironie'], correctIndex: 1 },
          { question: 'Le DELF B2 exige ___ mots minimum en PE.', options: ['100', '250', '500', '1000'], correctIndex: 1 },
          { question: '« Prétendre » implique :', options: ['Certitude', 'Doute', 'Joie', 'Peur'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 200: EXAMEN FINAL B2
  {
    courseId: 'lesson-200',
    steps: [
      {
        id: 'L200-1', type: 'lesson', title: 'EXAMEN FINAL B2', characterId: 'marie',
        content: `🏆 **EXAMEN FINAL — NIVEAU B2 AVANCÉ**\n\n🎓 Cet examen certifiant teste l'ensemble de vos compétences B2 :\n\n- Argumentation et rhétorique\n- Grammaire avancée (conditionnel passé, subjonctif passé, doubles pronoms)\n- Monde professionnel\n- Actualités, politique et société\n- Arts, littérature, cinéma\n- Connecteurs logiques avancés\n- Francophonie\n- Préparation DELF B2\n\n🏅 **Badge à débloquer : « Niveau B2 validé — Avancé »**\n📜 **Certificat de niveau B2**\n\nBonne chance pour cet examen final !`,
        tip: '💡 Vous avez travaillé dur pour arriver ici. Montrez tout ce que vous savez !'
      },
      {
        id: 'L200-2', type: 'final-quiz', title: 'EXAMEN FINAL B2', characterId: 'marie',
        questions: [
          { question: '« ___ le mauvais temps, nous sommes sortis. »', options: ['Grâce à', 'En dépit de', 'À cause de', 'Pour'], correctIndex: 1 },
          { question: '« Elle ___ venue si elle avait pu. »', options: ['sera', 'serait', 'est', 'a'], correctIndex: 1 },
          { question: '« Je doute qu\'il ___ compris. »', options: ['a', 'ait', 'avait', 'aura'], correctIndex: 1 },
          { question: '« Tu donnes le livre à Marie ? » → « Tu ___ donnes. »', options: ['le lui', 'lui le', 'la leur', 'les lui'], correctIndex: 0 },
          { question: '« Il a dit qu\'il ___ fatigué. »', options: ['est', 'était', 'sera', 'serait'], correctIndex: 1 },
          { question: 'La Palme d\'or récompense :', options: ['Un livre', 'Un film', 'Une chanson', 'Un tableau'], correctIndex: 1 },
          { question: '« Les lettres que j\'ai ___ » (écrire)', options: ['écrit', 'écrites', 'écrits', 'écrite'], correctIndex: 1 },
          { question: '« Avoir le cafard » = :', options: ['Avoir un insecte', 'Être triste', 'Avoir faim', 'Être content'], correctIndex: 1 },
          { question: '« Il a beau essayer » = :', options: ['Il essaie bien', 'Malgré ses essais', 'Il n\'essaie pas', 'Il réussit'], correctIndex: 1 },
          { question: 'Le français est parlé par ___ millions de personnes.', options: ['50', '100', '300', '500'], correctIndex: 2 },
          { question: '« Force est de ___ que les résultats sont bons. »', options: ['constater', 'manger', 'dormir', 'courir'], correctIndex: 0 },
          { question: '« Bagnole » = registre :', options: ['Soutenu', 'Courant', 'Familier', 'Technique'], correctIndex: 2 },
        ]
      }
    ]
  },
];
