// Interactive lesson content for A2 Module 5: Découvrir la France (Lessons 91-100)
import type { CourseContent } from './course-content';

export const a2Module5Content: CourseContent[] = [
  // Lesson 91: Les régions de France
  {
    courseId: 'lesson-91',
    steps: [
      {
        id: 'L91-1', type: 'lesson', title: 'Les régions de France', characterId: 'marie',
        characterMessage: "Vous progressez bien ! Cette leçon va enrichir votre français.",
        content: `Découvrons les **régions de France** ! 🇫🇷\n\n🗺️ **La France métropolitaine** compte 13 régions :\n\n🌊 **Nord et Ouest :**\n- Île-de-France (Paris)\n- Normandie (Mont-Saint-Michel)\n- Bretagne (crêpes, côtes sauvages)\n- Pays de la Loire (châteaux de la Loire)\n\n🏔️ **Est :**\n- Grand Est (Alsace, Strasbourg)\n- Bourgogne-Franche-Comté (vin, moutarde)\n\n☀️ **Sud :**\n- Provence-Alpes-Côte d'Azur (Antibes, Nice, Marseille !)\n- Occitanie (Toulouse, Montpellier)\n- Nouvelle-Aquitaine (Bordeaux)\n- Corse (île de beauté)\n\n🏭 **Centre :**\n- Auvergne-Rhône-Alpes (Lyon, les Alpes)\n- Centre-Val de Loire\n- Hauts-de-France (Lille)`,
        tip: '💡 Antibes est dans la région PACA (Provence-Alpes-Côte d\'Azur), la plus ensoleillée de France !'
      },
      {
        id: 'L91-2', type: 'listening', title: 'Écoute — Les régions', characterId: 'omar',
        characterMessage: "Au marché de Forville à Cannes, j'entends ces conversations chaque jour.",
        text: 'La France a treize régions métropolitaines. Au nord, il y a les Hauts-de-France avec Lille. À l\'ouest, la Bretagne est célèbre pour ses crêpes. Au sud, la Provence-Alpes-Côte d\'Azur est connue pour son soleil et ses plages. Et au centre, l\'Auvergne-Rhône-Alpes a la ville de Lyon, capitale de la gastronomie.',
        question: 'Quelle ville est la capitale de la gastronomie ?',
        options: ['Paris', 'Marseille', 'Lyon', 'Bordeaux'],
        correctIndex: 2
      },
      {
        id: 'L91-3', type: 'qcm', title: 'Géographie', characterId: 'elena',
        characterMessage: "C'est plus facile quand on parle déjà une langue latine !",
        question: 'Dans quelle région se trouve Antibes ?',
        options: ['Normandie', 'Bretagne', 'PACA', 'Occitanie'],
        correctIndex: 2,
        explanation: 'Antibes est en Provence-Alpes-Côte d\'Azur (PACA), dans le département des Alpes-Maritimes.'
      },
      {
        id: 'L91-4', type: 'flashcard', title: 'Les régions', characterId: 'thomas',
        characterMessage: "Le français est riche de mots qui n'existent pas dans d'autres langues.",
        cards: [
          { front: 'Île-de-France', back: 'Région de Paris (capitale)' },
          { front: 'Bretagne', back: 'Nord-Ouest — crêpes, côtes sauvages' },
          { front: 'PACA', back: 'Provence-Alpes-Côte d\'Azur (Antibes !)' },
          { front: 'Nouvelle-Aquitaine', back: 'Sud-Ouest — Bordeaux, vin' },
          { front: 'Auvergne-Rhône-Alpes', back: 'Centre-Est — Lyon, les Alpes' },
          { front: 'Corse', back: 'Île méditerranéenne — l\'île de beauté' },
        ]
      },
      {
        id: 'L91-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        characterMessage: "La grammaire française, c'est comme une recette : il faut les bons ingrédients !",
        sentence: 'La Bretagne est célèbre pour ses ___.',
        options: ['montagnes', 'crêpes', 'plages', 'vignobles'],
        correctAnswer: 'crêpes'
      },
      {
        id: 'L91-6', type: 'drag-drop', title: 'Nord ou Sud ?', characterId: 'yuki',
        characterMessage: "Les phrases sont plus longues maintenant. Lis d'abord tous les mots !",
        instruction: 'Classez ces villes du nord au sud :',
        items: ['Marseille', 'Lille', 'Lyon', 'Paris'],
        correctOrder: ['Lille', 'Paris', 'Lyon', 'Marseille']
      },
      {
        id: 'L91-7', type: 'qcm', title: 'Culture', characterId: 'lucas',
        characterMessage: "Au Brésil, on n'a pas cette règle. J'ai mis du temps à comprendre !",
        question: 'Combien de régions métropolitaines a la France ?',
        options: ['10', '13', '15', '20'],
        correctIndex: 1,
        explanation: 'La France métropolitaine compte 13 régions depuis la réforme territoriale de 2016.'
      },
      {
        id: 'L91-8', type: 'final-quiz', title: 'Quiz final — Les régions', characterId: 'marie',
        characterMessage: "Ce quiz est un peu plus long, mais vous êtes prêts !",
        questions: [
          { question: 'Antibes est en…', options: ['Normandie', 'Bretagne', 'PACA', 'Occitanie'], correctIndex: 2 },
          { question: 'La Bretagne est célèbre pour…', options: ['Le vin', 'Les crêpes', 'Le fromage', 'Les olives'], correctIndex: 1 },
          { question: 'Combien de régions métropolitaines ?', options: ['10', '13', '15', '20'], correctIndex: 1 },
          { question: 'La Corse est…', options: ['Un département', 'Une île', 'Une ville', 'Une montagne'], correctIndex: 1 },
          { question: 'Lyon est dans la région…', options: ['PACA', 'Occitanie', 'Auvergne-Rhône-Alpes', 'Île-de-France'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 92: Les fêtes françaises
  {
    courseId: 'lesson-92',
    steps: [
      {
        id: 'L92-1', type: 'lesson', title: 'Les fêtes françaises', characterId: 'marie',
        characterMessage: "Bravo pour votre travail ! Continuons avec un nouveau thème.",
        content: `Découvrons les **fêtes** et jours fériés en France ! 🎉\n\n📅 **Fêtes importantes :**\n- 🎄 **Noël** (25 décembre) — Sapin, cadeaux, bûche de Noël\n- 🎆 **Nouvel An** (1er janvier) — Réveillon, champagne\n- 🇫🇷 **Fête nationale** (14 juillet) — Feux d'artifice, défilé militaire\n- 🕊️ **Toussaint** (1er novembre) — Fleurs sur les tombes\n- 🐣 **Pâques** (mars/avril) — Œufs en chocolat\n- 🌸 **Fête du Travail** (1er mai) — Muguet (lily of the valley)\n- 💘 **Saint-Valentin** (14 février) — Fête des amoureux\n- 🎵 **Fête de la Musique** (21 juin) — Concerts gratuits partout !\n\n📝 **Vocabulaire :**\n- Un jour férié → a public holiday\n- Un feu d'artifice → fireworks\n- Un défilé → a parade`,
        tip: '💡 Le 14 juillet commémore la prise de la Bastille en 1789, début de la Révolution française !'
      },
      {
        id: 'L92-2', type: 'listening', title: 'Écoute — Le 14 juillet', characterId: 'omar',
        characterMessage: "Écoute le rythme de la phrase, pas seulement les mots.",
        text: 'Le quatorze juillet, c\'est la fête nationale en France. Le matin, il y a un grand défilé militaire sur les Champs-Élysées à Paris. Le soir, dans toutes les villes, il y a des feux d\'artifice. À Antibes, on regarde le feu d\'artifice depuis la plage. C\'est magnifique !',
        question: 'Où regarde-t-on le feu d\'artifice à Antibes ?',
        options: ['Au musée', 'Au restaurant', 'Depuis la plage', 'Au cinéma'],
        correctIndex: 2
      },
      {
        id: 'L92-3', type: 'qcm', title: 'Fêtes françaises', characterId: 'elena',
        characterMessage: "Attention, le français a des pièges que l'espagnol n'a pas.",
        question: 'Que fête-t-on le 14 juillet ?',
        options: ['Noël', 'La fête du Travail', 'La fête nationale', 'Pâques'],
        correctIndex: 2,
        explanation: 'Le 14 juillet est la fête nationale française, commémorant la prise de la Bastille.'
      },
      {
        id: 'L92-4', type: 'flashcard', title: 'Les fêtes', characterId: 'thomas',
        characterMessage: "Ces expressions colorent la langue française. Apprends-les par cœur !",
        cards: [
          { front: 'Noël (25 décembre)', back: 'Christmas — tree, gifts, Yule log' },
          { front: 'Le 14 juillet', back: 'Bastille Day — fireworks, parade' },
          { front: 'Pâques', back: 'Easter — chocolate eggs' },
          { front: 'La Fête de la Musique', back: 'Music Festival (June 21) — free concerts' },
          { front: 'Un jour férié', back: 'A public holiday' },
          { front: 'Un feu d\'artifice', back: 'Fireworks' },
        ]
      },
      {
        id: 'L92-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        characterMessage: "À Dakar, mes professeurs nous faisaient faire beaucoup de ces exercices.",
        sentence: 'Le 1er mai, on offre du ___ en France.',
        options: ['chocolat', 'champagne', 'muguet', 'pain'],
        correctAnswer: 'muguet'
      },
      {
        id: 'L92-6', type: 'drag-drop', title: 'Ordre chronologique', characterId: 'yuki',
        characterMessage: "La structure française est plus souple qu'on ne le pense.",
        instruction: 'Classez ces fêtes dans l\'ordre de l\'année :',
        items: ['Noël (25 déc.)', 'Pâques (mars/avril)', 'Fête nationale (14 juillet)', 'Nouvel An (1er janv.)'],
        correctOrder: ['Nouvel An (1er janv.)', 'Pâques (mars/avril)', 'Fête nationale (14 juillet)', 'Noël (25 déc.)']
      },
      {
        id: 'L92-7', type: 'qcm', title: 'Culture', characterId: 'lucas',
        characterMessage: "C'est une question classique d'examen. Prends ton temps.",
        question: 'La Fête de la Musique a lieu le…',
        options: ['21 mars', '14 juillet', '21 juin', '25 décembre'],
        correctIndex: 2,
        explanation: 'La Fête de la Musique a lieu le 21 juin, premier jour de l\'été !'
      },
      {
        id: 'L92-8', type: 'final-quiz', title: 'Quiz final — Les fêtes', characterId: 'marie',
        characterMessage: "Montrez-moi tout ce que vous avez appris. Je crois en vous !",
        questions: [
          { question: 'Le 14 juillet commémore…', options: ['Noël', 'La prise de la Bastille', 'L\'armistice', 'Pâques'], correctIndex: 1 },
          { question: '« Fireworks » = …', options: ['Un défilé', 'Un feu d\'artifice', 'Un concert', 'Un bal'], correctIndex: 1 },
          { question: 'Le muguet est offert le…', options: ['14 février', '1er mai', '14 juillet', '25 décembre'], correctIndex: 1 },
          { question: 'À Pâques, on cherche des ___ en chocolat.', options: ['Poules', 'Lapins', 'Œufs', 'Poissons'], correctIndex: 2 },
          { question: 'La Fête de la Musique = le 21…', options: ['Mars', 'Juin', 'Juillet', 'Septembre'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 93: La gastronomie française
  {
    courseId: 'lesson-93',
    steps: [
      {
        id: 'L93-1', type: 'lesson', title: 'La gastronomie française', characterId: 'marie',
        characterMessage: "Aujourd'hui, on approfondit vos connaissances. C'est parti !",
        content: `La France est le pays de la **gastronomie** ! 🍷🧀\n\n🧀 **Spécialités régionales :**\n- 🥐 **Paris / Île-de-France** : Croissant, croque-monsieur\n- 🧈 **Normandie** : Camembert, cidre, tarte aux pommes\n- 🥞 **Bretagne** : Crêpes, galettes de sarrasin\n- 🍷 **Bordeaux** : Vin rouge, canelés\n- 🫒 **Provence** : Ratatouille, bouillabaisse, tapenade\n- 🥘 **Lyon** : Quenelles, saucisson\n- 🧀 **Savoie** : Raclette, fondue, tartiflette\n- 🍰 **Alsace** : Choucroute, flammekueche\n\n🏆 **Le repas gastronomique français** est inscrit au patrimoine mondial de l'UNESCO depuis 2010 !\n\n📍 **À Antibes :**\n- La socca (galette de pois chiches)\n- La pissaladière (tarte aux oignons)\n- Le pan bagnat (sandwich niçois)`,
        tip: '💡 La France produit plus de 1 200 variétés de fromages ! Comme disait le Général de Gaulle : « Comment voulez-vous gouverner un pays qui a 246 variétés de fromage ? »'
      },
      {
        id: 'L93-2', type: 'listening', title: 'Écoute — Spécialités', characterId: 'thomas',
        text: 'Chaque région de France a ses spécialités. En Normandie, on mange du camembert et on boit du cidre. En Bretagne, on adore les crêpes. À Lyon, on mange des quenelles. Et ici, à Antibes, on mange de la socca et de la pissaladière. C\'est délicieux !',
        question: 'Quelle spécialité mange-t-on en Bretagne ?',
        options: ['Le camembert', 'Les crêpes', 'Les quenelles', 'La socca'],
        correctIndex: 1
      },
      {
        id: 'L93-3', type: 'qcm', title: 'Spécialités', characterId: 'elena',
        characterMessage: "J'ai compris cette règle en comparant avec l'espagnol.",
        question: 'La raclette est une spécialité de…',
        options: ['Bretagne', 'Normandie', 'Savoie', 'Provence'],
        correctIndex: 2,
        explanation: 'La raclette, la fondue et la tartiflette sont des spécialités savoyardes (montagnes des Alpes).'
      },
      {
        id: 'L93-4', type: 'flashcard', title: 'Gastronomie', characterId: 'thomas',
        characterMessage: "En tant que guide, j'utilise ces mots tous les jours avec les touristes.",
        cards: [
          { front: 'La socca', back: 'Galette de pois chiches (Nice/Antibes)' },
          { front: 'La ratatouille', back: 'Plat de légumes provençal' },
          { front: 'Le camembert', back: 'Fromage normand' },
          { front: 'La raclette', back: 'Plat de fromage fondu (Savoie)' },
          { front: 'Les crêpes', back: 'Thin pancakes (Bretagne)' },
          { front: 'La bouillabaisse', back: 'Soupe de poisson (Marseille)' },
        ]
      },
      {
        id: 'L93-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        characterMessage: "Pense à la conjugaison et à l'accord — c'est souvent la clé.",
        sentence: 'Le repas gastronomique français est inscrit au patrimoine de l\' ___.',
        options: ['ONU', 'UNESCO', 'UE', 'OTAN'],
        correctAnswer: 'UNESCO'
      },
      {
        id: 'L93-6', type: 'drag-drop', title: 'Région → Spécialité', characterId: 'yuki',
        characterMessage: "Commence par trouver le sujet, puis le verbe. Le reste suivra !",
        instruction: 'Associez la spécialité à sa région (du nord au sud) :',
        items: ['La socca (Antibes)', 'Le camembert (Normandie)', 'Les quenelles (Lyon)', 'Les crêpes (Bretagne)'],
        correctOrder: ['Le camembert (Normandie)', 'Les crêpes (Bretagne)', 'Les quenelles (Lyon)', 'La socca (Antibes)']
      },
      {
        id: 'L93-7', type: 'qcm', title: 'Culture culinaire', characterId: 'omar',
        characterMessage: "Cette question me rappelle mes premiers mois en France.",
        question: 'Combien de variétés de fromages en France ?',
        options: ['Plus de 200', 'Plus de 500', 'Plus de 1 200', 'Plus de 2 000'],
        correctIndex: 2,
        explanation: 'La France produit plus de 1 200 variétés de fromages différents !'
      },
      {
        id: 'L93-8', type: 'final-quiz', title: 'Quiz final — Gastronomie', characterId: 'marie',
        characterMessage: "Quiz final ! Prenez votre temps, relisez bien chaque question.",
        questions: [
          { question: 'La socca est une spécialité de…', options: ['Paris', 'Lyon', 'Antibes/Nice', 'Bordeaux'], correctIndex: 2 },
          { question: 'La raclette vient de…', options: ['Bretagne', 'Normandie', 'Savoie', 'Alsace'], correctIndex: 2 },
          { question: 'Les crêpes sont bretonnes.', options: ['Vrai', 'Faux', 'Ça dépend', 'Personne ne sait'], correctIndex: 0 },
          { question: 'Le repas français est au patrimoine…', options: ['National', 'UNESCO', 'Européen', 'Municipal'], correctIndex: 1 },
          { question: 'La bouillabaisse est…', options: ['Un dessert', 'Une soupe de poisson', 'Un fromage', 'Un vin'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 94: PC vs Imparfait — Approfondissement
  {
    courseId: 'lesson-94',
    steps: [
      {
        id: 'L94-1', type: 'lesson', title: 'PC vs Imparfait — Approfondissement', characterId: 'marie',
        characterMessage: "Vous êtes prêts pour un défi un peu plus grand ? Allons-y !",
        content: `Approfondissons la distinction **Passé composé / Imparfait** ! 🎯\n\n📐 **Rappel :**\n- **PC** = action ponctuelle, datée, terminée\n- **Imparfait** = description, habitude, durée\n\n🆕 **Cas avancés :**\n\n1️⃣ **Narration :**\nImparfait (décor) + PC (événements)\n- Il **faisait** nuit. Soudain, un bruit **a retenti**.\n\n2️⃣ **Habitude vs action unique :**\n- Chaque été, je **visitais** ma grand-mère. (habitude)\n- L'été dernier, j'**ai visité** ma grand-mère. (une fois)\n\n3️⃣ **Durée vs interruption :**\n- Je **dormais** quand le téléphone **a sonné**.\n- (dormais = en cours / a sonné = interruption)\n\n4️⃣ **États mentaux / émotions :**\n- J'**étais** content. (état → imparfait)\n- J'**ai été** surpris quand il est arrivé. (réaction → PC)`,
        tip: '💡 Question test : « Combien de fois ? » → Si la réponse est « une fois » → PC. Si c\'est « toujours, souvent » → Imparfait.'
      },
      {
        id: 'L94-2', type: 'listening', title: 'Écoute — Souvenir', characterId: 'lucas',
        characterMessage: "Concentre-toi sur les mots-clés, pas besoin de tout comprendre.",
        text: 'C\'était un samedi soir. Il faisait chaud et la mer était calme. Nous étions sur la plage de la Gravette. Soudain, des feux d\'artifice ont illuminé le ciel ! Tout le monde a applaudi. C\'était magique.',
        question: 'Que s\'est-il passé soudainement ?',
        options: ['Il a plu', 'Des feux d\'artifice ont illuminé le ciel', 'Un bateau est arrivé', 'La musique a commencé'],
        correctIndex: 1
      },
      {
        id: 'L94-3', type: 'qcm', title: 'PC ou Imparfait ?', characterId: 'elena',
        characterMessage: "Ne traduis pas mot à mot — pense directement en français !",
        question: '« Chaque été, je ___ à Antibes. » (aller, habitude)',
        options: ['suis allé', 'allais', 'vais', 'irai'],
        correctIndex: 1,
        explanation: '« Chaque été » indique une habitude passée → imparfait : j\'allais.'
      },
      {
        id: 'L94-4', type: 'flashcard', title: 'Indicateurs temporels', characterId: 'thomas',
        characterMessage: "Le vocabulaire français reflète l'art de vivre à la française.",
        cards: [
          { front: 'Soudain / Tout à coup', back: '→ Passé composé (action soudaine)' },
          { front: 'Chaque jour / Tous les étés', back: '→ Imparfait (habitude)' },
          { front: 'Hier / Lundi dernier', back: '→ Passé composé (action datée)' },
          { front: 'Quand j\'étais petit…', back: '→ Imparfait (description passée)' },
          { front: 'Pendant que… / Alors que…', back: '→ Imparfait (action en cours)' },
        ]
      },
      {
        id: 'L94-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        characterMessage: "Le français a des règles précises. Cet exercice t'aide à les maîtriser.",
        sentence: 'L\'été dernier, nous ___ la Corse. (visiter, une fois)',
        options: ['visitions', 'avons visité', 'visitons', 'visiterons'],
        correctAnswer: 'avons visité'
      },
      {
        id: 'L94-6', type: 'drag-drop', title: 'Construisez un récit', characterId: 'yuki',
        characterMessage: "Cet exercice entraîne ta pensée à fonctionner en français.",
        instruction: 'Formez un récit cohérent :',
        items: ['le téléphone a sonné.', 'Il était minuit.', 'Soudain,', 'Tout était calme.'],
        correctOrder: ['Il était minuit.', 'Tout était calme.', 'Soudain,', 'le téléphone a sonné.']
      },
      {
        id: 'L94-7', type: 'qcm', title: 'Distinction fine', characterId: 'omar',
        characterMessage: "Cette question me rappelle mes premiers mois en France.",
        question: '« Pendant que je ___, il est parti. » (dormir)',
        options: ['ai dormi', 'dormais', 'dors', 'dormirai'],
        correctIndex: 1,
        explanation: '« Pendant que » + action en cours → imparfait. L\'autre action (il est parti) est au PC.'
      },
      {
        id: 'L94-8', type: 'final-quiz', title: 'Quiz final — PC vs Imparfait avancé', characterId: 'marie',
        characterMessage: "Vous avez bien travaillé, ce quiz va le prouver !",
        questions: [
          { question: '« Chaque été, nous ___ en vacances. » (habitude)', options: ['sommes allés', 'allions', 'allons', 'irons'], correctIndex: 1 },
          { question: '« Soudain, il ___. » (tomber, action)', options: ['tombait', 'est tombé', 'tombe', 'tombera'], correctIndex: 1 },
          { question: '« Il ___ nuit quand nous sommes arrivés. »', options: ['a fait', 'faisait', 'fait', 'fera'], correctIndex: 1 },
          { question: '« L\'été dernier, j\' ___ la Provence. » (une fois)', options: ['ai visité', 'visitais', 'visite', 'visiterai'], correctIndex: 0 },
          { question: '« Pendant que » → quel temps ?', options: ['Passé composé', 'Imparfait', 'Futur', 'Présent'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 95: Raconter un souvenir d'enfance
  {
    courseId: 'lesson-95',
    steps: [
      {
        id: 'L95-1', type: 'lesson', title: 'Raconter un souvenir d\'enfance', characterId: 'marie',
        characterMessage: "Cette leçon vous sera très utile dans la vie quotidienne.",
        content: `Racontons des **souvenirs d'enfance** ! 👶\n\n📝 **Structure :**\n- « Quand j'étais petit(e)… » → When I was little…\n- « Je me souviens que… » → I remember that…\n- « À l'époque… » → At that time…\n\n📐 **Temps utilisés :**\n- **Imparfait** pour le décor et les habitudes\n- **Passé composé** pour les événements marquants\n\n🔵 **Exemples :**\n- Quand j'**étais** petit, j'**habitais** à Antibes.\n- Chaque été, ma famille **allait** à la plage.\n- Un jour, j'**ai trouvé** un crabe sur la plage !\n- Je me **souviens** que ma grand-mère **faisait** des gâteaux.\n\n💬 **Vocabulaire :**\n- L'enfance → childhood\n- Un souvenir → a memory\n- Se souvenir de → to remember\n- Grandir → to grow up\n- À l'époque → at that time`,
        tip: '💡 Pour un souvenir, commencez par le décor (imparfait), puis racontez l\'événement (passé composé).'
      },
      {
        id: 'L95-2', type: 'listening', title: 'Écoute — Souvenir', characterId: 'elena',
        characterMessage: "Les sons du français sont parfois trompeurs pour nous, Espagnols !",
        text: 'Quand j\'étais petite, j\'habitais en Espagne. Chaque été, ma famille allait en vacances sur la Costa Brava. On jouait sur la plage tous les jours. Un jour, j\'ai trouvé un coquillage magnifique. Je me souviens que ma mère faisait toujours de la paella le dimanche. C\'était une époque merveilleuse.',
        question: 'Qu\'a-t-elle trouvé un jour ?',
        options: ['Un crabe', 'Un coquillage', 'Un trésor', 'Un poisson'],
        correctIndex: 1
      },
      {
        id: 'L95-3', type: 'qcm', title: 'Temps verbal', characterId: 'lucas',
        characterMessage: "J'ai posé cette question à Marie hier en classe. Maintenant je sais !",
        question: '« Quand j\' ___ petit, je jouais au football. »',
        options: ['ai été', 'suis', 'étais', 'serai'],
        correctIndex: 2,
        explanation: 'Le décor/contexte d\'un souvenir → imparfait : quand j\'étais petit.'
      },
      {
        id: 'L95-4', type: 'flashcard', title: 'Souvenirs d\'enfance', characterId: 'thomas',
        characterMessage: "Chaque nouveau mot te rapproche de la culture française.",
        cards: [
          { front: 'Quand j\'étais petit(e)…', back: 'When I was little…' },
          { front: 'Je me souviens que…', back: 'I remember that…' },
          { front: 'À l\'époque…', back: 'At that time…' },
          { front: 'L\'enfance', back: 'Childhood' },
          { front: 'Un souvenir', back: 'A memory' },
          { front: 'Grandir', back: 'To grow up' },
        ]
      },
      {
        id: 'L95-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        characterMessage: "Lis la phrase à voix haute avec chaque option — tu entendras la bonne !",
        sentence: 'Je me ___ que ma grand-mère faisait des crêpes.',
        options: ['rappelle', 'souviens', 'pense', 'crois'],
        correctAnswer: 'souviens'
      },
      {
        id: 'L95-6', type: 'drag-drop', title: 'Construisez un souvenir', characterId: 'yuki',
        characterMessage: "En japonais, le verbe est à la fin. En français, il est au milieu !",
        instruction: 'Ordonnez ce souvenir :',
        items: ['C\'était magique !', 'Quand j\'étais petit,', 'Un jour, j\'ai vu un dauphin.', 'j\'allais souvent à la plage.'],
        correctOrder: ['Quand j\'étais petit,', 'j\'allais souvent à la plage.', 'Un jour, j\'ai vu un dauphin.', 'C\'était magique !']
      },
      {
        id: 'L95-7', type: 'qcm', title: 'Expression', characterId: 'omar',
        characterMessage: "Cette question me rappelle mes premiers mois en France.",
        question: '« Se souvenir de » signifie…',
        options: ['To forget', 'To remember', 'To dream', 'To imagine'],
        correctIndex: 1,
        explanation: '« Se souvenir de » = to remember. « Je me souviens de mon enfance. »'
      },
      {
        id: 'L95-8', type: 'final-quiz', title: 'Quiz final — Souvenirs', characterId: 'marie',
        characterMessage: "C'est le moment de briller ! Bonne chance !",
        questions: [
          { question: '« Quand j\' ___ petit… » (être)', options: ['ai été', 'suis', 'étais', 'serai'], correctIndex: 2 },
          { question: '« Childhood » = …', options: ['L\'adolescence', 'L\'enfance', 'La vieillesse', 'La jeunesse'], correctIndex: 1 },
          { question: '« Chaque été, je ___ au foot. » (habitude)', options: ['ai joué', 'jouais', 'joue', 'jouerai'], correctIndex: 1 },
          { question: '« Un jour, j\' ___ un trésor. » (action unique)', options: ['ai trouvé', 'trouvais', 'trouve', 'trouverai'], correctIndex: 0 },
          { question: '« Je me ___ que… »', options: ['rappelle', 'souviens', 'pense', 'sais'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 96: La musique française
  {
    courseId: 'lesson-96',
    steps: [
      {
        id: 'L96-1', type: 'lesson', title: 'La musique française', characterId: 'marie',
        characterMessage: "Vous progressez bien ! Cette leçon va enrichir votre français.",
        content: `Découvrons la **musique française** ! 🎵\n\n🎶 **Genres et artistes célèbres :**\n\n🎤 **Chanson française (classique) :**\n- Édith Piaf — « La Vie en Rose », « Non, je ne regrette rien »\n- Jacques Brel — « Ne me quitte pas »\n- Charles Aznavour — « La Bohème »\n\n🎧 **Pop/Variété :**\n- Stromae — « Alors on danse », « Papaoutai »\n- Zaz — « Je veux »\n- Louane — « Avenir »\n\n🎹 **Électro/DJ :**\n- Daft Punk — « Get Lucky »\n- David Guetta\n\n🎤 **Rap français :**\n- MC Solaar, Nekfeu, Aya Nakamura\n\n📍 **À Antibes :**\n- Le Festival de Jazz de Juan-les-Pins (depuis 1960 !)`,
        tip: '💡 « La Vie en Rose » d\'Édith Piaf est la chanson française la plus connue dans le monde !'
      },
      {
        id: 'L96-2', type: 'listening', title: 'Écoute — Musique', characterId: 'lucas',
        characterMessage: "Concentre-toi sur les mots-clés, pas besoin de tout comprendre.",
        text: 'La musique française est très variée. Édith Piaf est la chanteuse la plus célèbre avec « La Vie en Rose ». Aujourd\'hui, Stromae est très populaire avec « Alors on danse ». Et à Antibes, il y a le Festival de Jazz de Juan-les-Pins, un des plus anciens festivals de jazz au monde !',
        question: 'Quelle chanson est la plus célèbre d\'Édith Piaf ?',
        options: ['Alors on danse', 'Ne me quitte pas', 'La Vie en Rose', 'Je veux'],
        correctIndex: 2
      },
      {
        id: 'L96-3', type: 'qcm', title: 'Artistes', characterId: 'elena',
        characterMessage: "Cette structure est différente en espagnol. Fais attention !",
        question: '« Alors on danse » est de…',
        options: ['Édith Piaf', 'Stromae', 'Daft Punk', 'Jacques Brel'],
        correctIndex: 1,
        explanation: '« Alors on danse » est le tube international de Stromae (artiste belge francophone).'
      },
      {
        id: 'L96-4', type: 'flashcard', title: 'Musique française', characterId: 'thomas',
        characterMessage: "Le français est riche de mots qui n'existent pas dans d'autres langues.",
        cards: [
          { front: 'Édith Piaf', back: '« La Vie en Rose » — Chanson française' },
          { front: 'Stromae', back: '« Alors on danse » — Pop/Électro' },
          { front: 'Daft Punk', back: '« Get Lucky » — Électro' },
          { front: 'Jacques Brel', back: '« Ne me quitte pas » — Chanson' },
          { front: 'Festival de Juan-les-Pins', back: 'Festival de Jazz (Antibes)' },
        ]
      },
      {
        id: 'L96-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        characterMessage: "La grammaire française, c'est comme une recette : il faut les bons ingrédients !",
        sentence: 'Le Festival de Jazz de Juan-les-Pins existe depuis ___.',
        options: ['1940', '1960', '1980', '2000'],
        correctAnswer: '1960'
      },
      {
        id: 'L96-6', type: 'drag-drop', title: 'Artiste → Genre', characterId: 'yuki',
        characterMessage: "Les phrases sont plus longues maintenant. Lis d'abord tous les mots !",
        instruction: 'Classez ces artistes du plus ancien au plus récent :',
        items: ['Stromae (2010s)', 'Édith Piaf (1940s)', 'Daft Punk (1990s)', 'Jacques Brel (1960s)'],
        correctOrder: ['Édith Piaf (1940s)', 'Jacques Brel (1960s)', 'Daft Punk (1990s)', 'Stromae (2010s)']
      },
      {
        id: 'L96-7', type: 'qcm', title: 'Culture', characterId: 'omar',
        characterMessage: "Cette question me rappelle mes premiers mois en France.",
        question: 'Daft Punk fait de la musique…',
        options: ['Classique', 'Jazz', 'Électronique', 'Rap'],
        correctIndex: 2,
        explanation: 'Daft Punk est un duo français de musique électronique, mondialement connu.'
      },
      {
        id: 'L96-8', type: 'final-quiz', title: 'Quiz final — La musique', characterId: 'marie',
        characterMessage: "Ce quiz est un peu plus long, mais vous êtes prêts !",
        questions: [
          { question: '« La Vie en Rose » est de…', options: ['Zaz', 'Édith Piaf', 'Stromae', 'Louane'], correctIndex: 1 },
          { question: 'Stromae est…', options: ['Français', 'Belge', 'Suisse', 'Canadien'], correctIndex: 1 },
          { question: 'Le Festival de Jazz est à…', options: ['Cannes', 'Nice', 'Juan-les-Pins', 'Monaco'], correctIndex: 2 },
          { question: 'Daft Punk fait de la musique…', options: ['Rap', 'Jazz', 'Électronique', 'Classique'], correctIndex: 2 },
          { question: '« Ne me quitte pas » est de…', options: ['Piaf', 'Brel', 'Aznavour', 'Stromae'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 97: Écrire une lettre amicale
  {
    courseId: 'lesson-97',
    steps: [
      {
        id: 'L97-1', type: 'lesson', title: 'Écrire une lettre amicale', characterId: 'marie',
        characterMessage: "Bravo pour votre travail ! Continuons avec un nouveau thème.",
        content: `Apprenons à écrire une **lettre ou un email amical** ! ✉️\n\n📝 **Structure :**\n\n1. **Lieu et date :**\n   Antibes, le 15 mars 2026\n\n2. **Formule d'ouverture :**\n   - Cher Thomas, / Chère Marie,\n   - Salut ! / Coucou !\n\n3. **Nouvelles :**\n   - Comment vas-tu ? / Comment ça va ?\n   - Ici, tout va bien.\n   - J'espère que tu vas bien.\n\n4. **Corps du message :**\n   - Je t'écris pour te raconter…\n   - Tu sais quoi ? / Devine quoi !\n\n5. **Formule de clôture :**\n   - J'espère te voir bientôt.\n   - Écris-moi vite !\n   - Donne-moi de tes nouvelles.\n\n6. **Signature :**\n   - Bisous / Grosses bises\n   - Amicalement / À bientôt`,
        tip: '💡 « Bisous » et « Bises » sont pour les amis proches et la famille. « Amicalement » est plus neutre.'
      },
      {
        id: 'L97-2', type: 'listening', title: 'Écoute — Lettre amicale', characterId: 'lucas',
        characterMessage: "Concentre-toi sur les mots-clés, pas besoin de tout comprendre.",
        text: 'Cher Thomas, comment vas-tu ? Ici à Antibes, tout va bien. Je t\'écris pour te raconter mes vacances. La semaine dernière, j\'ai visité le Cap d\'Antibes. C\'était magnifique ! J\'espère te voir bientôt. Grosses bises, Lucas.',
        question: 'Qu\'a visité Lucas ?',
        options: ['Nice', 'Cannes', 'Le Cap d\'Antibes', 'Monaco'],
        correctIndex: 2
      },
      {
        id: 'L97-3', type: 'qcm', title: 'Formule', characterId: 'elena',
        characterMessage: "C'est plus facile quand on parle déjà une langue latine !",
        question: '« Grosses bises » est une formule…',
        options: ['Formelle', 'Professionnelle', 'Amicale', 'Administrative'],
        correctIndex: 2,
        explanation: '« Grosses bises » est une formule affectueuse pour les amis et la famille.'
      },
      {
        id: 'L97-4', type: 'flashcard', title: 'Lettre amicale', characterId: 'thomas',
        characterMessage: "Ces expressions colorent la langue française. Apprends-les par cœur !",
        cards: [
          { front: 'Cher / Chère + prénom', back: 'Dear + name (informal)' },
          { front: 'Comment vas-tu ?', back: 'How are you? (informal)' },
          { front: 'Je t\'écris pour…', back: 'I\'m writing to you to…' },
          { front: 'J\'espère te voir bientôt.', back: 'I hope to see you soon.' },
          { front: 'Donne-moi de tes nouvelles.', back: 'Let me hear from you.' },
          { front: 'Bisous / Bises', back: 'Kisses (friendly closing)' },
        ]
      },
      {
        id: 'L97-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        characterMessage: "À Dakar, mes professeurs nous faisaient faire beaucoup de ces exercices.",
        sentence: '___ Marie, comment vas-tu ? Ici, tout va bien.',
        options: ['Madame', 'Chère', 'Bonjour', 'Salutations'],
        correctAnswer: 'Chère'
      },
      {
        id: 'L97-6', type: 'drag-drop', title: 'Structure de la lettre', characterId: 'yuki',
        characterMessage: "La structure française est plus souple qu'on ne le pense.",
        instruction: 'Ordonnez les éléments de la lettre :',
        items: ['Bisous, Yuki.', 'Chère Marie,', 'J\'espère te voir bientôt.', 'Je t\'écris pour te raconter mes vacances.'],
        correctOrder: ['Chère Marie,', 'Je t\'écris pour te raconter mes vacances.', 'J\'espère te voir bientôt.', 'Bisous, Yuki.']
      },
      {
        id: 'L97-7', type: 'qcm', title: 'Registre', characterId: 'omar',
        characterMessage: "Cette question me rappelle mes premiers mois en France.",
        question: '« Cordialement » est pour quel type de message ?',
        options: ['Amical', 'Professionnel', 'Romantique', 'Familial'],
        correctIndex: 1,
        explanation: '« Cordialement » est professionnel. Pour les amis, utilisez « Bisous », « Bises » ou « Amicalement ».'
      },
      {
        id: 'L97-8', type: 'final-quiz', title: 'Quiz final — Lettre amicale', characterId: 'marie',
        characterMessage: "Montrez-moi tout ce que vous avez appris. Je crois en vous !",
        questions: [
          { question: 'On commence par…', options: ['Madame, Monsieur', 'Cher / Chère + prénom', 'Objet :', 'Cordialement'], correctIndex: 1 },
          { question: '« Bisous » est…', options: ['Formel', 'Amical', 'Professionnel', 'Incorrect'], correctIndex: 1 },
          { question: '« J\'espère ___ voir bientôt. »', options: ['me', 'te', 'se', 'le'], correctIndex: 1 },
          { question: '« Donne-moi de tes ___ . »', options: ['lettres', 'nouvelles', 'messages', 'histoires'], correctIndex: 1 },
          { question: 'La date dans une lettre française : « Antibes, ___ 15 mars 2026 »', options: ['en', 'le', 'du', 'au'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 98: Bilan de communication A2
  {
    courseId: 'lesson-98',
    steps: [
      {
        id: 'L98-1', type: 'lesson', title: 'Bilan de communication A2', characterId: 'marie',
        characterMessage: "Aujourd'hui, on approfondit vos connaissances. C'est parti !",
        content: `📚 **Bilan A2 — Ce que vous savez faire maintenant !**\n\n✅ **Raconter au passé** (PC + Imparfait)\n✅ **Exprimer des opinions** et des émotions\n✅ **Comparer** (comparatif et superlatif)\n✅ **Parler du monde du travail** (CV, entretien, bureau)\n✅ **Utiliser le futur proche** (aller + infinitif)\n✅ **Donner des ordres et conseils** (impératif)\n✅ **Parler de sa santé** et de son bien-être\n✅ **Connaître la France** (régions, fêtes, gastronomie, musique)\n✅ **Écrire** (email pro, avis, lettre amicale, carte postale)\n✅ **Utiliser les pronoms** COD et COI\n\n🎯 **Niveau A2 = vous pouvez :**\n- Communiquer lors de tâches simples\n- Décrire votre environnement\n- Raconter des événements passés\n- Comprendre l'essentiel d'une conversation`,
        tip: '💡 Bravo ! Vous êtes presque prêt(e) pour l\'examen final A2 !'
      },
      {
        id: 'L98-2', type: 'qcm', title: 'Bilan — Passé', characterId: 'lucas',
        characterMessage: "Souviens-toi de ce qu'on a vu dans la leçon, ça va t'aider.",
        question: '« Il ___ beau quand nous sommes arrivés. »',
        options: ['a fait', 'faisait', 'fait', 'fera'],
        correctIndex: 1,
        explanation: 'Description/contexte → imparfait : il faisait beau.'
      },
      {
        id: 'L98-3', type: 'fill-blank', title: 'Bilan — Comparatif', characterId: 'fatou',
        characterMessage: "Pense à la conjugaison et à l'accord — c'est souvent la clé.",
        sentence: 'Ce restaurant est ___ que l\'autre. (better)',
        options: ['plus bon', 'meilleur', 'mieux', 'le meilleur'],
        correctAnswer: 'meilleur'
      },
      {
        id: 'L98-4', type: 'qcm', title: 'Bilan — Futur proche', characterId: 'elena',
        characterMessage: "Attention, le français a des pièges que l'espagnol n'a pas.",
        question: '« Nous ___ partir demain. »',
        options: ['allons', 'avons', 'sommes', 'faisons'],
        correctIndex: 0,
        explanation: 'Futur proche = aller + infinitif.'
      },
      {
        id: 'L98-5', type: 'drag-drop', title: 'Bilan — Email pro', characterId: 'yuki',
        characterMessage: "Commence par trouver le sujet, puis le verbe. Le reste suivra !",
        instruction: 'Ordonnez l\'email :',
        items: ['Cordialement,', 'Madame, Monsieur,', 'Je vous remercie.', 'Je me permets de vous contacter.'],
        correctOrder: ['Madame, Monsieur,', 'Je me permets de vous contacter.', 'Je vous remercie.', 'Cordialement,']
      },
      {
        id: 'L98-6', type: 'fill-blank', title: 'Bilan — Pronoms', characterId: 'omar',
        sentence: 'Je ___ ai téléphoné hier. (à mes parents)',
        options: ['les', 'lui', 'leur', 'leurs'],
        correctAnswer: 'leur'
      },
      {
        id: 'L98-7', type: 'qcm', title: 'Bilan — Impératif', characterId: 'lucas',
        characterMessage: "Cette règle est importante — on l'utilise tous les jours !",
        question: '« ___ ! » (écouter, vous)',
        options: ['Écoute', 'Écoutez', 'Écoutons', 'Écouter'],
        correctIndex: 1,
        explanation: 'Impératif (vous) = Écoutez !'
      },
      {
        id: 'L98-8', type: 'final-quiz', title: 'Quiz bilan A2', characterId: 'marie',
        characterMessage: "Quiz final ! Prenez votre temps, relisez bien chaque question.",
        questions: [
          { question: '« Je ___ content hier. » (être)', options: ['suis', 'étais', 'ai été', 'serai'], correctIndex: 1 },
          { question: '« Nice est ___ grande que Paris. »', options: ['plus', 'moins', 'aussi', 'la plus'], correctIndex: 1 },
          { question: '« Elle va ___ demain. »', options: ['partie', 'partir', 'part', 'partant'], correctIndex: 1 },
          { question: '« Je ___ parle. » (à Marie)', options: ['la', 'le', 'lui', 'leur'], correctIndex: 2 },
          { question: 'La socca est une spécialité de…', options: ['Paris', 'Lyon', 'Antibes', 'Bordeaux'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 99: Révision finale A2
  {
    courseId: 'lesson-99',
    steps: [
      {
        id: 'L99-1', type: 'lesson', title: 'Révision finale A2', characterId: 'marie',
        characterMessage: "Vous êtes prêts pour un défi un peu plus grand ? Allons-y !",
        content: `🎯 **Révision finale — Tous les modules A2**\n\nCette révision couvre les 5 modules :\n\n📖 **A2.1** — Raconter au passé (PC, imparfait, connecteurs)\n🦋 **A2.2** — La vie sociale (opinions, émotions, comparatif, superlatif, COD)\n💼 **A2.3** — Le monde du travail (métiers, CV, futur proche, COI)\n💪 **A2.4** — Santé et bien-être (corps, impératif, sport, adverbes de fréquence)\n🎓 **A2.5** — Découvrir la France (régions, fêtes, gastronomie, musique)\n\nPréparez-vous pour l'examen final ! 💪`,
        tip: '💡 C\'est votre dernière révision avant l\'examen final A2. Concentrez-vous !'
      },
      {
        id: 'L99-2', type: 'qcm', title: 'Révision globale Q1', characterId: 'lucas',
        characterMessage: "Au Brésil, on n'a pas cette règle. J'ai mis du temps à comprendre !",
        question: '« Elles sont ___ au cinéma. » (aller)',
        options: ['allé', 'allés', 'allée', 'allées'],
        correctIndex: 3,
        explanation: 'Elles = féminin pluriel → allées (accord avec ÊTRE).'
      },
      {
        id: 'L99-3', type: 'fill-blank', title: 'Révision globale Q2', characterId: 'fatou',
        characterMessage: "Le français a des règles précises. Cet exercice t'aide à les maîtriser.",
        sentence: 'Je ___ que c\'est une bonne idée.',
        options: ['vais', 'pense', 'fais', 'sais'],
        correctAnswer: 'pense'
      },
      {
        id: 'L99-4', type: 'qcm', title: 'Révision globale Q3', characterId: 'elena',
        characterMessage: "J'ai compris cette règle en comparant avec l'espagnol.",
        question: '« Elle est ___ . » (nurse, fém.)',
        options: ['infirmier', 'infirmière', 'une infirmière', 'l\'infirmière'],
        correctIndex: 1,
        explanation: 'Sans article + accord féminin : elle est infirmière.'
      },
      {
        id: 'L99-5', type: 'drag-drop', title: 'Révision globale Q4', characterId: 'yuki',
        characterMessage: "Cet exercice entraîne ta pensée à fonctionner en français.",
        instruction: 'Ordonnez ce récit :',
        items: ['C\'était magnifique !', 'Il faisait beau.', 'Soudain, un feu d\'artifice a illuminé le ciel.', 'Nous étions sur la plage.'],
        correctOrder: ['Il faisait beau.', 'Nous étions sur la plage.', 'Soudain, un feu d\'artifice a illuminé le ciel.', 'C\'était magnifique !']
      },
      {
        id: 'L99-6', type: 'fill-blank', title: 'Révision globale Q5', characterId: 'omar',
        sentence: '___ attention ! La route est glissante. (faire, vous)',
        options: ['Fais', 'Fait', 'Faites', 'Faisons'],
        correctAnswer: 'Faites'
      },
      {
        id: 'L99-7', type: 'qcm', title: 'Révision globale Q6', characterId: 'lucas',
        characterMessage: "C'est une question classique d'examen. Prends ton temps.",
        question: 'Le 14 juillet commémore…',
        options: ['Noël', 'La prise de la Bastille', 'Pâques', 'La Toussaint'],
        correctIndex: 1,
        explanation: 'Le 14 juillet 1789 = la prise de la Bastille, début de la Révolution française.'
      },
      {
        id: 'L99-8', type: 'final-quiz', title: 'Quiz de révision finale A2', characterId: 'marie',
        characterMessage: "Vous avez bien travaillé, ce quiz va le prouver !",
        questions: [
          { question: '« Nous ___ voyagé en Italie. »', options: ['sommes', 'avons', 'avez', 'sont'], correctIndex: 1 },
          { question: '« Le ___ restaurant de la ville. » (best)', options: ['plus bon', 'meilleur', 'mieux', 'bon'], correctIndex: 1 },
          { question: '« Ils ___ partir bientôt. »', options: ['vont', 'sont', 'ont', 'font'], correctIndex: 0 },
          { question: '« Je ___ regarde. » (le film)', options: ['lui', 'la', 'le', 'leur'], correctIndex: 2 },
          { question: 'Édith Piaf a chanté…', options: ['Alors on danse', 'La Vie en Rose', 'Get Lucky', 'Je veux'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 100: EXAMEN FINAL A2
  {
    courseId: 'lesson-100',
    steps: [
      {
        id: 'L100-1', type: 'lesson', title: 'EXAMEN FINAL A2', characterId: 'marie',
        characterMessage: "Cette leçon vous sera très utile dans la vie quotidienne.",
        content: `🎓 **EXAMEN FINAL — NIVEAU A2**\n\nFélicitations d'être arrivé(e) jusqu'ici ! 🎉\n\nCet examen couvre **tous les modules A2** :\n- Raconter au passé (PC + Imparfait)\n- La vie sociale (opinions, émotions, comparatif)\n- Le monde du travail (CV, futur proche, pronoms)\n- Santé et bien-être (corps, impératif, sport)\n- Découvrir la France (culture, gastronomie)\n\n📋 **Conditions de réussite :**\n- Score minimum : 60%\n- Badge débloqué : « Niveau A2 validé — Survie » 🎓\n- Certificat de niveau A2\n\n💪 **Bonne chance !** Vous avez travaillé dur pour arriver ici. Montrez ce que vous savez !`,
        tip: '💡 Prenez votre temps pour chaque question. Lisez bien les options avant de répondre.'
      },
      {
        id: 'L100-2', type: 'qcm', title: 'Examen Final Q1', characterId: 'marie',
        question: '« Hier, je ___ au marché d\'Antibes. » (aller)',
        options: ['ai allé', 'suis allé(e)', 'vais', 'allais'],
        correctIndex: 1,
        explanation: '« Aller » utilise ÊTRE au passé composé.'
      },
      {
        id: 'L100-3', type: 'fill-blank', title: 'Examen Final Q2', characterId: 'marie',
        sentence: 'Il ___ beau quand nous sommes arrivés à la plage.',
        options: ['a fait', 'faisait', 'fait', 'fera'],
        correctAnswer: 'faisait'
      },
      {
        id: 'L100-4', type: 'qcm', title: 'Examen Final Q3', characterId: 'marie',
        question: '« Ce film est ___ que l\'autre. » (better)',
        options: ['plus bon', 'meilleur', 'mieux', 'le meilleur'],
        correctIndex: 1,
        explanation: 'Bon → meilleur (comparatif irrégulier).'
      },
      {
        id: 'L100-5', type: 'drag-drop', title: 'Examen Final Q4', characterId: 'marie',
        instruction: 'Ordonnez cette lettre amicale :',
        items: ['Bisous, Lucas.', 'Cher Thomas,', 'J\'espère te voir bientôt !', 'Je t\'écris pour te raconter mes vacances.'],
        correctOrder: ['Cher Thomas,', 'Je t\'écris pour te raconter mes vacances.', 'J\'espère te voir bientôt !', 'Bisous, Lucas.']
      },
      {
        id: 'L100-6', type: 'fill-blank', title: 'Examen Final Q5', characterId: 'marie',
        sentence: '___ vos devoirs ! (faire, vous)',
        options: ['Fais', 'Fait', 'Faites', 'Faisons'],
        correctAnswer: 'Faites'
      },
      {
        id: 'L100-7', type: 'qcm', title: 'Examen Final Q6', characterId: 'marie',
        question: '« Je ___ téléphone. » (à Marie)',
        options: ['la', 'le', 'lui', 'leur'],
        correctIndex: 2,
        explanation: 'Téléphoner à → COI → lui.'
      },
      {
        id: 'L100-8', type: 'final-quiz', title: 'Examen Final A2 — Questions finales', characterId: 'marie',
        characterMessage: "C'est le moment de briller ! Bonne chance !",
        questions: [
          { question: '« Nous ___ partir en vacances. » (futur proche)', options: ['allons', 'avons', 'sommes', 'faisons'], correctIndex: 0 },
          { question: '« J\'ai mal ___ tête. »', options: ['au', 'à la', 'aux', 'à l\''], correctIndex: 1 },
          { question: '« Ne… jamais » = …', options: ['Always', 'Sometimes', 'Never', 'Often'], correctIndex: 2 },
          { question: 'La socca est une spécialité de…', options: ['Paris', 'Lyon', 'Antibes/Nice', 'Bordeaux'], correctIndex: 2 },
          { question: '« La Vie en Rose » est de…', options: ['Stromae', 'Édith Piaf', 'Daft Punk', 'Zaz'], correctIndex: 1 },
        ]
      }
    ]
  },
];
