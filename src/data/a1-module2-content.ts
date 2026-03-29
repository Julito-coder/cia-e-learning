// Interactive lesson content for A1 Module 2: Mon monde quotidien (Lessons 11-20)
import type { CourseContent } from './course-content';

export const a1Module2Content: CourseContent[] = [
  // Lesson 11: Ma famille
  {
    courseId: 'lesson-11',
    steps: [
      {
        id: 'L11-1', type: 'lesson', title: 'Ma famille',
        content: `👨‍👩‍👧‍👦 **Les membres de la famille :**\n\n👨 **Le père** (papa) → Father\n👩 **La mère** (maman) → Mother\n👦 **Le frère** → Brother\n👧 **La sœur** → Sister\n👴 **Le grand-père** (papi) → Grandfather\n👵 **La grand-mère** (mamie) → Grandmother\n👶 **Le bébé** → Baby\n\n💑 **Relations :**\n- **Le mari** / **La femme** → Husband / Wife\n- **Le fils** / **La fille** → Son / Daughter\n- **L'oncle** / **La tante** → Uncle / Aunt\n- **Le cousin** / **La cousine** → Cousin (m/f)\n\n📝 **Exemples :**\n- « J'ai un frère et deux sœurs. »\n- « Ma grand-mère habite à Antibes. »`,
        tip: '💡 En français, « parent » peut signifier "relative" (un parent = a relative) ou "parent" (les parents = mother & father).'
      },
      {
        id: 'L11-2', type: 'flashcard', title: 'La famille — Vocabulaire', characterId: 'marie',
        characterMessage: "Bienvenue dans ma classe ! Aujourd'hui, on découvre ensemble un nouveau sujet.",
        cards: [
          { front: 'Le père', back: 'Father (papa)' },
          { front: 'La mère', back: 'Mother (maman)' },
          { front: 'Le frère', back: 'Brother' },
          { front: 'La sœur', back: 'Sister' },
          { front: 'Le grand-père', back: 'Grandfather' },
          { front: 'La grand-mère', back: 'Grandmother' },
          { front: 'Le fils', back: 'Son' },
          { front: 'La fille', back: 'Daughter' },
        ]
      },
      {
        id: 'L11-3', type: 'listening', title: 'Écoute — La famille de Lucas',
        text: 'Ma famille est grande. J\'ai un frère, il s\'appelle Pedro, et une sœur, Maria. Mon père est médecin et ma mère est professeure.',
        question: 'Combien de frères et sœurs a Lucas ?',
        options: ['Un frère', 'Une sœur', 'Un frère et une sœur', 'Deux frères'],
        correctIndex: 2
      },
      {
        id: 'L11-4', type: 'qcm', title: 'Le bon mot', characterId: 'omar',
        characterMessage: "Écoute bien ! Je vais te parler comme au marché d'Antibes.",
        question: 'La mère de ma mère, c\'est ma…',
        options: ['Tante', 'Cousine', 'Grand-mère', 'Sœur'],
        correctIndex: 2,
        explanation: 'La mère de votre mère (ou de votre père) est votre grand-mère.'
      },
      {
        id: 'L11-5', type: 'fill-blank', title: 'Complétez la phrase',
        sentence: 'Mon ___ est le mari de ma mère.',
        options: ['frère', 'père', 'fils', 'oncle'],
        correctAnswer: 'père'
      },
      {
        id: 'L11-6', type: 'drag-drop', title: 'L\'arbre généalogique', characterId: 'fatou',
        characterMessage: "Complète la phrase ! C'est comme un puzzle — trouve la pièce manquante.",
        instruction: 'Remettez dans l\'ordre du plus âgé au plus jeune :',
        items: ['Le bébé', 'La grand-mère', 'La mère', 'La fille'],
        correctOrder: ['La grand-mère', 'La mère', 'La fille', 'Le bébé']
      },
      {
        id: 'L11-7', type: 'qcm', title: 'Masculin ou féminin ?',
        question: 'Quel est le féminin de « cousin » ?',
        options: ['Cousine', 'Cousina', 'Cousone', 'Cousinne'],
        correctIndex: 0,
        explanation: 'En français, cousin → cousine. On ajoute un « e » pour le féminin.'
      },
      {
        id: 'L11-8', type: 'final-quiz', title: 'Quiz final — Ma famille', characterId: 'lucas',
        characterMessage: "Moi aussi au début, je trouvais ça compliqué ! Mais on s'y habitue.",
        questions: [
          { question: 'Le frère de ma mère est mon…', options: ['Cousin', 'Oncle', 'Grand-père', 'Père'], correctIndex: 1 },
          { question: '« La fille » signifie…', options: ['The son', 'The mother', 'The daughter', 'The sister'], correctIndex: 2 },
          { question: 'Comment dit-on "grandmother" ?', options: ['La tante', 'La grand-mère', 'La cousine', 'La mère'], correctIndex: 1 },
          { question: '« J\'ai deux ___. » (sisters)', options: ['frères', 'sœurs', 'filles', 'mères'], correctIndex: 1 },
          { question: 'Le mari de ma sœur est mon…', options: ['Frère', 'Cousin', 'Beau-frère', 'Oncle'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 12: Il est grand, elle est petite
  {
    courseId: 'lesson-12',
    steps: [
      {
        id: 'L12-1', type: 'lesson', title: 'Il est grand, elle est petite — La description physique',
        content: `Pour décrire une personne en français, on utilise des **adjectifs** :\n\n📏 **Taille :**\n- **grand / grande** → tall\n- **petit / petite** → short\n\n💇 **Cheveux :**\n- **blond / blonde** → blond\n- **brun / brune** → dark-haired\n- **roux / rousse** → red-haired\n- **courts / longs** → short / long\n\n👤 **Apparence :**\n- **jeune** → young\n- **âgé(e)** → elderly\n- **mince** → slim\n- **gros / grosse** → big\n- **beau / belle** → handsome / beautiful\n\n⚠️ **Accord masculin / féminin :**\n- Il est grand → Elle est grand**e**\n- Il est brun → Elle est brun**e**\n- Il est gros → Elle est gross**e**\n- Il est beau → Elle est bell**e** (irrégulier !)`,
        tip: '💡 La plupart des adjectifs prennent un « e » au féminin. Certains sont irréguliers : beau → belle, roux → rousse.'
      },
      {
        id: 'L12-2', type: 'flashcard', title: 'Les adjectifs — Masculin / Féminin', characterId: 'marie',
        characterMessage: "Bonjour à tous ! Prêts pour une nouvelle leçon ?",
        cards: [
          { front: 'grand → ?', back: 'grande (tall, f.)' },
          { front: 'petit → ?', back: 'petite (short, f.)' },
          { front: 'brun → ?', back: 'brune (dark-haired, f.)' },
          { front: 'blond → ?', back: 'blonde (blond, f.)' },
          { front: 'beau → ?', back: 'belle (beautiful, f.)' },
          { front: 'roux → ?', back: 'rousse (red-haired, f.)' },
        ]
      },
      {
        id: 'L12-3', type: 'qcm', title: 'L\'accord de l\'adjectif',
        question: 'Marie est ___ . (tall)',
        options: ['grand', 'grande', 'grands', 'grandes'],
        correctIndex: 1,
        explanation: 'Marie est féminin singulier, donc l\'adjectif prend un « e » : grande.'
      },
      {
        id: 'L12-4', type: 'fill-blank', title: 'Décrivez le personnage', characterId: 'lucas',
        characterMessage: "Cette question m'a piégé la première fois. Fais attention !",
        sentence: 'Lucas est ___ et brun. (tall)',
        options: ['grande', 'grand', 'grands', 'petit'],
        correctAnswer: 'grand'
      },
      {
        id: 'L12-5', type: 'listening', title: 'Écoute — Description de Yuki',
        text: 'Yuki est petite et brune. Elle a les cheveux longs et les yeux noirs. Elle est très jolie.',
        question: 'Comment sont les cheveux de Yuki ?',
        options: ['Courts et blonds', 'Longs et bruns', 'Roux et courts', 'Blonds et longs'],
        correctIndex: 1
      },
      {
        id: 'L12-6', type: 'drag-drop', title: 'Construisez une description', characterId: 'omar',
        characterMessage: "Dans ma cuisine, j'écoute toujours la radio française. Ça aide !",
        instruction: 'Remettez les mots dans l\'ordre :',
        items: ['est', 'Elle', 'et', 'grande', 'blonde'],
        correctOrder: ['Elle', 'est', 'grande', 'et', 'blonde']
      },
      {
        id: 'L12-7', type: 'final-quiz', title: 'Quiz final — La description physique',
        questions: [
          { question: 'Le féminin de « beau » est…', options: ['Beaue', 'Belle', 'Beau', 'Bella'], correctIndex: 1 },
          { question: '« Elle est ___ . » (slim)', options: ['mince', 'minces', 'gros', 'grosse'], correctIndex: 0 },
          { question: '« Il a les cheveux ___ . » (short)', options: ['long', 'courts', 'courtes', 'longs'], correctIndex: 1 },
          { question: 'Le féminin de « roux » est…', options: ['Rouxe', 'Rouse', 'Rousse', 'Rousse'], correctIndex: 2 },
          { question: '« Jeune » est le contraire de…', options: ['Petit', 'Grand', 'Âgé', 'Mince'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 13: Les couleurs de la Provence
  {
    courseId: 'lesson-13',
    steps: [
      {
        id: 'L13-1', type: 'lesson', title: 'Les couleurs de la Provence',
        content: `🎨 **Les couleurs en français :**\n\n🔴 **rouge** → red\n🔵 **bleu / bleue** → blue\n🟢 **vert / verte** → green\n🟡 **jaune** → yellow\n🟠 **orange** → orange\n🟣 **violet / violette** → purple\n⚫ **noir / noire** → black\n⚪ **blanc / blanche** → white\n🩷 **rose** → pink\n🟤 **marron** → brown\n🩶 **gris / grise** → grey\n\n🌿 **Les couleurs de la Provence :**\n- La **lavande** est **violette** 💜\n- La **mer** est **bleue** 💙\n- Les **oliviers** sont **verts** 💚\n- Le **soleil** est **jaune** ☀️\n- Les **tomates** du marché sont **rouges** ❤️\n\n⚠️ **Accord :**\n- Un sac **rouge** / Une robe **rouge** (pas de changement)\n- Un ciel **bleu** / Une mer **bleue** (+ e au féminin)\n- ⚡ **Marron** et **orange** sont invariables !`,
        tip: '💡 « Marron » et « orange » ne changent jamais : des chaussures marron, des fleurs orange.'
      },
      {
        id: 'L13-2', type: 'flashcard', title: 'Les couleurs — Vocabulaire', characterId: 'marie',
        characterMessage: "Installez-vous confortablement, on commence !",
        cards: [
          { front: '🔴', back: 'rouge (red)' },
          { front: '🔵', back: 'bleu / bleue (blue)' },
          { front: '🟢', back: 'vert / verte (green)' },
          { front: '🟡', back: 'jaune (yellow)' },
          { front: '⚪', back: 'blanc / blanche (white)' },
          { front: '⚫', back: 'noir / noire (black)' },
          { front: '🩷', back: 'rose (pink)' },
          { front: '🟣', back: 'violet / violette (purple)' },
        ]
      },
      {
        id: 'L13-3', type: 'qcm', title: 'Quelle couleur ?',
        question: 'La lavande de Provence est de quelle couleur ?',
        options: ['Rouge', 'Bleue', 'Violette', 'Jaune'],
        correctIndex: 2,
        explanation: 'La lavande est violette. C\'est une fleur emblématique de la Provence !'
      },
      {
        id: 'L13-4', type: 'fill-blank', title: 'Complétez avec la couleur', characterId: 'lucas',
        characterMessage: "Réfléchis bien, la réponse est plus simple qu'on ne le pense.",
        sentence: 'La mer Méditerranée est ___ .',
        options: ['verte', 'bleue', 'rouge', 'noire'],
        correctAnswer: 'bleue'
      },
      {
        id: 'L13-5', type: 'qcm', title: 'L\'accord des couleurs',
        question: 'Quelle phrase est correcte ?',
        options: ['Des chaussures marronnes', 'Des chaussures marrons', 'Des chaussures marron', 'Des chaussures marrone'],
        correctIndex: 2,
        explanation: '« Marron » est invariable — il ne change jamais, même au pluriel ou au féminin.'
      },
      {
        id: 'L13-6', type: 'listening', title: 'Écoute — Au marché de Provence', characterId: 'lucas',
        characterMessage: "J'ai fait cette erreur au début — ne tombe pas dans le piège !",
        text: 'Regardez ces belles tomates rouges ! Et là, des olives noires et vertes. Les citrons sont jaunes et les aubergines sont violettes.',
        question: 'De quelle couleur sont les olives ?',
        options: ['Rouges et jaunes', 'Noires et vertes', 'Bleues et blanches', 'Violettes et roses'],
        correctIndex: 1
      },
      {
        id: 'L13-7', type: 'final-quiz', title: 'Quiz final — Les couleurs',
        questions: [
          { question: 'Le féminin de « blanc » est…', options: ['Blanque', 'Blanche', 'Blanc', 'Blance'], correctIndex: 1 },
          { question: 'Le soleil est…', options: ['Bleu', 'Vert', 'Jaune', 'Rouge'], correctIndex: 2 },
          { question: '« Orange » au pluriel donne…', options: ['Oranges', 'Orange', 'Orangs', 'Oranger'], correctIndex: 1 },
          { question: 'La neige est…', options: ['Noire', 'Grise', 'Blanche', 'Bleue'], correctIndex: 2 },
          { question: 'Le féminin de « vert » est…', options: ['Vert', 'Verte', 'Verts', 'Verde'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 14: Qu'est-ce que c'est ?
  {
    courseId: 'lesson-14',
    steps: [
      {
        id: 'L14-1', type: 'lesson', title: 'Qu\'est-ce que c\'est ? — Les objets du quotidien',
        content: `Pour identifier un objet, on demande :\n❓ **Qu'est-ce que c'est ?** → What is it?\n✅ **C'est un/une…** → It's a…\n\n📱 **Objets courants :**\n- **un téléphone** → a phone\n- **un sac** → a bag\n- **un livre** → a book\n- **une clé** → a key\n- **une montre** → a watch\n- **un stylo** → a pen\n- **un cahier** → a notebook\n- **une chaise** → a chair\n- **une table** → a table\n- **un ordinateur** → a computer\n\n📐 **Articles :**\n- **UN** → masculin singulier (un livre)\n- **UNE** → féminin singulier (une clé)\n- **LE / LA** → quand on connaît l'objet\n- **L'** → devant une voyelle (l'ordinateur)`,
        tip: '💡 Pour savoir si un mot est masculin ou féminin, apprenez-le avec son article : « un livre », « une clé ».'
      },
      {
        id: 'L14-2', type: 'flashcard', title: 'Les objets — Vocabulaire', characterId: 'marie',
        characterMessage: "Aujourd'hui, je vais vous expliquer quelque chose de très utile.",
        cards: [
          { front: '📱', back: 'un téléphone (a phone)' },
          { front: '🔑', back: 'une clé (a key)' },
          { front: '📖', back: 'un livre (a book)' },
          { front: '🖊️', back: 'un stylo (a pen)' },
          { front: '💻', back: 'un ordinateur (a computer)' },
          { front: '⌚', back: 'une montre (a watch)' },
        ]
      },
      {
        id: 'L14-3', type: 'qcm', title: 'Un ou une ?',
        question: 'Quel article pour « ___ clé » ?',
        options: ['Un', 'Une', 'Le', 'Des'],
        correctIndex: 1,
        explanation: '« Clé » est féminin : une clé.'
      },
      {
        id: 'L14-4', type: 'fill-blank', title: 'Complétez', characterId: 'lucas',
        characterMessage: "Quand je suis arrivé à Antibes, j'ai dû apprendre ça aussi !",
        sentence: 'C\'est ___ livre de français.',
        options: ['une', 'un', 'la', 'des'],
        correctAnswer: 'un'
      },
      {
        id: 'L14-5', type: 'listening', title: 'Écoute — Dans la classe',
        text: 'Sur la table, il y a un livre, un stylo et une gomme. L\'ordinateur est sur le bureau.',
        question: 'Où est l\'ordinateur ?',
        options: ['Sur la table', 'Sur le bureau', 'Dans le sac', 'Par terre'],
        correctIndex: 1
      },
      {
        id: 'L14-6', type: 'drag-drop', title: 'Classez : masculin ou féminin', characterId: 'omar',
        characterMessage: "Concentre-toi sur les mots que tu connais déjà.",
        instruction: 'Remettez cette phrase dans l\'ordre :',
        items: ['c\'est', 'Qu\'est-ce que', '?', 'C\'est', 'un stylo.'],
        correctOrder: ['Qu\'est-ce que', 'c\'est', '?', 'C\'est', 'un stylo.']
      },
      {
        id: 'L14-7', type: 'final-quiz', title: 'Quiz final — Les objets',
        questions: [
          { question: '« Un cahier » est…', options: ['Féminin', 'Masculin', 'Pluriel', 'Neutre'], correctIndex: 1 },
          { question: 'Comment dit-on "a key" ?', options: ['Un clé', 'Une clé', 'Le clé', 'La clés'], correctIndex: 1 },
          { question: '« L\'ordinateur » utilise « l\' » car…', options: ['C\'est pluriel', 'Ça commence par une voyelle', 'C\'est féminin', 'C\'est un nom propre'], correctIndex: 1 },
          { question: '« Une montre » est…', options: ['A book', 'A watch', 'A bag', 'A pen'], correctIndex: 1 },
          { question: '« Qu\'est-ce que c\'est ? » signifie…', options: ['Where is it?', 'Who is it?', 'What is it?', 'How is it?'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 15: Les chiffres de 20 à 100
  {
    courseId: 'lesson-15',
    steps: [
      {
        id: 'L15-1', type: 'lesson', title: 'Les chiffres de 20 à 100',
        content: `🔢 **Les nombres de 20 à 100 :**\n\n20 — vingt\n21 — vingt **et un**\n22 — vingt-deux\n30 — trente\n31 — trente **et un**\n40 — quarante\n50 — cinquante\n60 — soixante\n\n⚠️ **Les nombres « spéciaux » :**\n70 — soixante-**dix** (60+10)\n71 — soixante **et onze** (60+11)\n72 — soixante-douze (60+12)\n80 — quatre-**vingts** (4×20)\n81 — quatre-vingt-un\n90 — quatre-vingt-**dix** (4×20+10)\n91 — quatre-vingt-onze\n100 — **cent**\n\n💰 **Dire les prix :**\n- « Ça coûte trente-cinq euros. » (35€)\n- « C'est quatre-vingt-dix centimes. » (0,90€)`,
        tip: '💡 70 = soixante-dix (60+10), 80 = quatre-vingts (4×20), 90 = quatre-vingt-dix (4×20+10). La logique française !'
      },
      {
        id: 'L15-2', type: 'flashcard', title: 'Les dizaines — Flashcards', characterId: 'marie',
        characterMessage: "C'est un sujet passionnant, vous allez voir !",
        cards: [
          { front: '30', back: 'trente' },
          { front: '50', back: 'cinquante' },
          { front: '70', back: 'soixante-dix' },
          { front: '80', back: 'quatre-vingts' },
          { front: '90', back: 'quatre-vingt-dix' },
          { front: '100', back: 'cent' },
        ]
      },
      {
        id: 'L15-3', type: 'qcm', title: 'Comment dit-on 70 ?',
        question: 'Comment dit-on « 70 » en français ?',
        options: ['Septante', 'Soixante-dix', 'Sept-dix', 'Soixante-sept'],
        correctIndex: 1,
        explanation: '70 = soixante-dix en français standard (en Belgique et en Suisse, on dit « septante »).'
      },
      {
        id: 'L15-4', type: 'fill-blank', title: 'Écrivez le nombre', characterId: 'lucas',
        characterMessage: "Moi aussi au début, je trouvais ça compliqué ! Mais on s'y habitue.",
        sentence: '85 en lettres : ___',
        options: ['quatre-vingt-cinq', 'huitante-cinq', 'quatre-vingt-quinze', 'soixante-vingt-cinq'],
        correctAnswer: 'quatre-vingt-cinq'
      },
      {
        id: 'L15-5', type: 'listening', title: 'Écoute — Les prix au marché',
        text: 'Les tomates coûtent trois euros cinquante le kilo. Le fromage coûte huit euros quatre-vingts.',
        question: 'Combien coûte le fromage ?',
        options: ['3,50€', '8,80€', '8,40€', '4,80€'],
        correctIndex: 1
      },
      {
        id: 'L15-6', type: 'qcm', title: 'Le bon nombre', characterId: 'omar',
        characterMessage: "Au Maroc aussi, on apprend en écoutant. C'est la meilleure méthode !",
        question: 'Comment écrit-on « 91 » en lettres ?',
        options: ['Nonante et un', 'Quatre-vingt-onze', 'Neuf-un', 'Quatre-vingt-un'],
        correctIndex: 1,
        explanation: '91 = quatre-vingt-onze (4×20 + 11).'
      },
      {
        id: 'L15-7', type: 'final-quiz', title: 'Quiz final — Les chiffres 20-100',
        questions: [
          { question: '80 en français est…', options: ['Huitante', 'Quatre-vingts', 'Octante', 'Huit-dix'], correctIndex: 1 },
          { question: '71 en français est…', options: ['Soixante-onze', 'Soixante et onze', 'Sept-un', 'Septante et un'], correctIndex: 1 },
          { question: '99 en français est…', options: ['Nonante-neuf', 'Quatre-vingt-dix-neuf', 'Neuf-neuf', 'Quatre-vingt-neuf'], correctIndex: 1 },
          { question: '« Cinquante » correspond à…', options: ['40', '50', '60', '15'], correctIndex: 1 },
          { question: '« Soixante-quinze » correspond à…', options: ['65', '70', '75', '85'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 16: J'ai / Je n'ai pas
  {
    courseId: 'lesson-16',
    steps: [
      {
        id: 'L16-1', type: 'lesson', title: 'J\'ai / Je n\'ai pas — Le verbe avoir',
        content: `Le verbe **AVOIR** est essentiel en français :\n\n✅ **Conjugaison au présent :**\n- J'**ai**\n- Tu **as**\n- Il/Elle/On **a**\n- Nous **avons**\n- Vous **avez**\n- Ils/Elles **ont**\n\n❌ **La négation :**\nSujet + **ne** + verbe + **pas**\n- Je **n'ai pas** de chat.\n- Elle **n'a pas** de voiture.\n- Nous **n'avons pas** d'enfants.\n\n⚠️ **Attention : un/une/des → de/d' à la négation !**\n- J'ai **un** frère → Je n'ai pas **de** frère\n- Elle a **des** amis → Elle n'a pas **d'**amis\n\n💬 **Expressions avec AVOIR :**\n- J'ai **faim** → I'm hungry\n- J'ai **soif** → I'm thirsty\n- J'ai **froid** / **chaud** → I'm cold/hot\n- J'ai **peur** → I'm afraid`,
        tip: '💡 En français, on dit « J\'ai faim » (I HAVE hunger), pas « Je suis faim ».'
      },
      {
        id: 'L16-2', type: 'qcm', title: 'Conjugaison d\'avoir', characterId: 'marie',
        characterMessage: "Bienvenue dans ma classe ! Aujourd'hui, on découvre ensemble un nouveau sujet.",
        question: 'Complétez : « Nous ___ trois chats. »',
        options: ['a', 'as', 'avons', 'avez'],
        correctIndex: 2,
        explanation: 'Avec « nous », le verbe avoir se conjugue : « avons ».'
      },
      {
        id: 'L16-3', type: 'fill-blank', title: 'La négation',
        sentence: 'Je ___ pas de voiture.',
        options: ['n\'ai', 'n\'est', 'ne suis', 'n\'as'],
        correctAnswer: 'n\'ai'
      },
      {
        id: 'L16-4', type: 'flashcard', title: 'Expressions avec AVOIR', characterId: 'fatou',
        characterMessage: "Au Sénégal, on apprend le français à l'école. C'est un exercice classique !",
        cards: [
          { front: 'J\'ai faim', back: 'I\'m hungry' },
          { front: 'J\'ai soif', back: 'I\'m thirsty' },
          { front: 'J\'ai froid', back: 'I\'m cold' },
          { front: 'J\'ai chaud', back: 'I\'m hot' },
          { front: 'J\'ai peur', back: 'I\'m afraid' },
          { front: 'J\'ai sommeil', back: 'I\'m sleepy' },
        ]
      },
      {
        id: 'L16-5', type: 'listening', title: 'Écoute — Qu\'est-ce que tu as ?',
        text: 'J\'ai un chien et deux chats. Je n\'ai pas de poisson. Mon frère a un hamster.',
        question: 'Qu\'est-ce que le frère a ?',
        options: ['Un chien', 'Un chat', 'Un poisson', 'Un hamster'],
        correctIndex: 3
      },
      {
        id: 'L16-6', type: 'drag-drop', title: 'Formez la négation', characterId: 'omar',
        characterMessage: "Pas de panique si tu ne comprends pas tout. L'important, c'est les mots-clés !",
        instruction: 'Remettez les mots dans l\'ordre :',
        items: ['n\'ai', 'Je', 'de', 'pas', 'frère'],
        correctOrder: ['Je', 'n\'ai', 'pas', 'de', 'frère']
      },
      {
        id: 'L16-7', type: 'final-quiz', title: 'Quiz final — Avoir et la négation',
        questions: [
          { question: '« Tu ___ quel âge ? »', options: ['est', 'as', 'a', 'es'], correctIndex: 1 },
          { question: '« Ils ___ des enfants. »', options: ['a', 'avons', 'ont', 'as'], correctIndex: 2 },
          { question: 'La négation correcte : « Elle ___ . »', options: ['n\'a pas de chat', 'n\'a pas un chat', 'ne pas a chat', 'n\'a de chat pas'], correctIndex: 0 },
          { question: '« J\'ai faim » signifie…', options: ['I\'m tired', 'I\'m hungry', 'I\'m cold', 'I\'m thirsty'], correctIndex: 1 },
          { question: '« Vous ___ un stylo ? »', options: ['a', 'as', 'avez', 'avons'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 17: C'est mon / ma / mes
  {
    courseId: 'lesson-17',
    steps: [
      {
        id: 'L17-1', type: 'lesson', title: 'C\'est mon / ma / mes — Les adjectifs possessifs',
        content: `Les **adjectifs possessifs** indiquent à qui appartient quelque chose :\n\n👤 **Je** :\n- **mon** (masc.) → mon livre\n- **ma** (fém.) → ma clé\n- **mes** (pluriel) → mes amis\n\n👤 **Tu** :\n- **ton** → ton sac\n- **ta** → ta sœur\n- **tes** → tes parents\n\n👤 **Il/Elle** :\n- **son** → son père\n- **sa** → sa mère\n- **ses** → ses frères\n\n⚠️ **Devant une voyelle :**\nMême au féminin, on utilise **mon/ton/son** :\n- **mon** amie (pas « ma amie »)\n- **son** école (pas « sa école »)\n\n📝 **Exemples :**\n- « C'est **mon** téléphone. »\n- « Où est **ta** voiture ? »\n- « **Ses** enfants sont à l'école. »`,
        tip: '💡 Devant un mot féminin qui commence par une voyelle, on dit « mon/ton/son » pour éviter le « hiatus » (deux voyelles).'
      },
      {
        id: 'L17-2', type: 'flashcard', title: 'Les possessifs — Tableau', characterId: 'marie',
        characterMessage: "Bonjour à tous ! Prêts pour une nouvelle leçon ?",
        cards: [
          { front: 'my (masc.)', back: 'mon' },
          { front: 'my (fem.)', back: 'ma' },
          { front: 'my (plural)', back: 'mes' },
          { front: 'your (masc., informal)', back: 'ton' },
          { front: 'his/her (masc.)', back: 'son' },
          { front: 'his/her (plural)', back: 'ses' },
        ]
      },
      {
        id: 'L17-3', type: 'qcm', title: 'Le bon possessif',
        question: 'Complétez : « C\'est ___ sac. » (my, masc.)',
        options: ['ma', 'mon', 'mes', 'ton'],
        correctIndex: 1,
        explanation: '« Sac » est masculin, donc on utilise « mon ».'
      },
      {
        id: 'L17-4', type: 'fill-blank', title: 'Complétez la phrase', characterId: 'lucas',
        characterMessage: "Cette question m'a piégé la première fois. Fais attention !",
        sentence: 'Où est ___ clé ? (your, informal)',
        options: ['ton', 'ta', 'tes', 'ma'],
        correctAnswer: 'ta'
      },
      {
        id: 'L17-5', type: 'qcm', title: 'Devant une voyelle',
        question: 'Comment dit-on « my friend (female) » ?',
        options: ['Ma amie', 'Mon amie', 'Mes amie', 'Mon ami'],
        correctIndex: 1,
        explanation: 'Devant une voyelle, on utilise « mon » même pour le féminin : mon amie.'
      },
      {
        id: 'L17-6', type: 'listening', title: 'Écoute — Les affaires de Lucas', characterId: 'lucas',
        characterMessage: "Réfléchis bien, la réponse est plus simple qu'on ne le pense.",
        text: 'Voilà mon sac. Dans mon sac, il y a mes livres, ma trousse et mon téléphone. Et toi, où est ton sac ?',
        question: 'Qu\'est-ce qu\'il y a dans le sac de Lucas ?',
        options: ['Des vêtements', 'Des livres, une trousse et un téléphone', 'De la nourriture', 'Un ordinateur'],
        correctIndex: 1
      },
      {
        id: 'L17-7', type: 'final-quiz', title: 'Quiz final — Les possessifs',
        questions: [
          { question: '« ___ mère est professeure. » (his/her)', options: ['Mon', 'Sa', 'Ses', 'Ma'], correctIndex: 1 },
          { question: '« ___ amis sont gentils. » (my)', options: ['Mon', 'Ma', 'Mes', 'Son'], correctIndex: 2 },
          { question: '« ___ école est grande. » (my, fem. + vowel)', options: ['Ma', 'Mon', 'Mes', 'Sa'], correctIndex: 1 },
          { question: '« Où sont ___ clés ? » (your, informal)', options: ['ton', 'ta', 'tes', 'vos'], correctIndex: 2 },
          { question: '« ___ fils a trois ans. » (his/her)', options: ['Sa', 'Ses', 'Son', 'Mon'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 18: Chez moi
  {
    courseId: 'lesson-18',
    steps: [
      {
        id: 'L18-1', type: 'lesson', title: 'Chez moi — Décrire son logement',
        content: `🏠 **Les pièces de la maison :**\n\n- **le salon** → living room\n- **la cuisine** → kitchen\n- **la chambre** → bedroom\n- **la salle de bains** → bathroom\n- **les toilettes** → toilet\n- **l'entrée** → entrance/hallway\n- **le balcon** → balcony\n- **le jardin** → garden\n\n🪑 **Les meubles :**\n- **un lit** → a bed\n- **un canapé** → a sofa\n- **une armoire** → a wardrobe\n- **un bureau** → a desk\n- **une étagère** → a shelf\n\n📝 **Décrire :**\n- « Mon appartement a deux chambres, un salon et une cuisine. »\n- « La salle de bains est petite mais le balcon est grand. »\n- « J'habite dans un appartement à Juan-les-Pins, près de la plage. »\n\n🏢 **Types de logement :**\n- **un appartement** → an apartment\n- **une maison** → a house\n- **un studio** → a studio`,
        tip: '💡 « Chez moi » signifie "at my place" / "at home". « Chez » + personne = at someone\'s place.'
      },
      {
        id: 'L18-2', type: 'flashcard', title: 'Le logement — Vocabulaire', characterId: 'marie',
        characterMessage: "Installez-vous confortablement, on commence !",
        cards: [
          { front: 'le salon', back: 'living room' },
          { front: 'la cuisine', back: 'kitchen' },
          { front: 'la chambre', back: 'bedroom' },
          { front: 'la salle de bains', back: 'bathroom' },
          { front: 'un lit', back: 'a bed' },
          { front: 'un canapé', back: 'a sofa' },
        ]
      },
      {
        id: 'L18-3', type: 'qcm', title: 'Les pièces',
        question: 'Où prépare-t-on les repas ?',
        options: ['Dans le salon', 'Dans la chambre', 'Dans la cuisine', 'Dans la salle de bains'],
        correctIndex: 2,
        explanation: 'On prépare les repas dans la cuisine.'
      },
      {
        id: 'L18-4', type: 'fill-blank', title: 'Décrivez l\'appartement', characterId: 'lucas',
        characterMessage: "J'ai fait cette erreur au début — ne tombe pas dans le piège !",
        sentence: 'Mon appartement a un ___, une cuisine et deux chambres.',
        options: ['jardin', 'salon', 'balcon', 'garage'],
        correctAnswer: 'salon'
      },
      {
        id: 'L18-5', type: 'listening', title: 'Écoute — L\'appartement de Yuki',
        text: 'J\'habite dans un petit appartement à Juan-les-Pins. Il y a un salon avec un balcon, une chambre, une cuisine et une salle de bains. J\'adore mon balcon, on voit la mer !',
        question: 'Qu\'est-ce que Yuki voit depuis son balcon ?',
        options: ['La montagne', 'La mer', 'La ville', 'Le jardin'],
        correctIndex: 1
      },
      {
        id: 'L18-6', type: 'drag-drop', title: 'Décrivez le logement', characterId: 'omar',
        characterMessage: "Écoute bien ! Je vais te parler comme au marché d'Antibes.",
        instruction: 'Remettez les mots dans l\'ordre :',
        items: ['a', 'Mon', 'trois', 'appartement', 'chambres'],
        correctOrder: ['Mon', 'appartement', 'a', 'trois', 'chambres']
      },
      {
        id: 'L18-7', type: 'final-quiz', title: 'Quiz final — Chez moi',
        questions: [
          { question: '« La cuisine » est…', options: ['The bedroom', 'The kitchen', 'The bathroom', 'The garden'], correctIndex: 1 },
          { question: '« Un canapé » se trouve dans…', options: ['La cuisine', 'La salle de bains', 'Le salon', 'Le jardin'], correctIndex: 2 },
          { question: '« Chez moi » signifie…', options: ['At school', 'At my place', 'At work', 'Outside'], correctIndex: 1 },
          { question: 'Un « studio » est…', options: ['A house', 'A big apartment', 'A small one-room apartment', 'A hotel'], correctIndex: 2 },
          { question: '« La salle de bains » est…', options: ['The living room', 'The bathroom', 'The bedroom', 'The kitchen'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 19: Révision Module A1.2
  {
    courseId: 'lesson-19',
    steps: [
      {
        id: 'L19-1', type: 'lesson', title: 'Révision — Module A1.2',
        content: `📚 **Révision de tout ce que vous avez appris dans le Module A1.2 :**\n\n👨‍👩‍👧‍👦 **La famille** : père, mère, frère, sœur, grand-père, grand-mère, oncle, tante, cousin(e)\n\n👤 **La description physique** : grand/grande, petit/petite, brun/brune, blond/blonde, beau/belle\n\n🎨 **Les couleurs** : rouge, bleu(e), vert(e), jaune, blanc/blanche, noir(e), rose, violet(te)\n\n📱 **Les objets** : un téléphone, un livre, une clé, un stylo, une montre, un ordinateur\n\n🔢 **Les nombres 20-100** : vingt, trente, quarante, cinquante, soixante, soixante-dix, quatre-vingts, quatre-vingt-dix, cent\n\n✅ **Le verbe AVOIR** : j'ai, tu as, il a, nous avons, vous avez, ils ont + la négation (ne...pas de)\n\n👜 **Les possessifs** : mon/ma/mes, ton/ta/tes, son/sa/ses\n\n🏠 **Le logement** : salon, cuisine, chambre, salle de bains`,
        tip: '💡 Ce quiz couvre toutes les leçons du Module A1.2. Prenez votre temps !'
      },
      {
        id: 'L19-2', type: 'qcm', title: 'Révision — Famille', characterId: 'marie',
        characterMessage: "Aujourd'hui, je vais vous expliquer quelque chose de très utile.",
        question: 'La sœur de mon père est ma…',
        options: ['Cousine', 'Grand-mère', 'Tante', 'Mère'],
        correctIndex: 2,
        explanation: 'La sœur de votre père (ou de votre mère) est votre tante.'
      },
      {
        id: 'L19-3', type: 'fill-blank', title: 'Révision — Description',
        sentence: 'Marie est grande et ___ . (blond, fem.)',
        options: ['blond', 'blonde', 'blonds', 'blondes'],
        correctAnswer: 'blonde'
      },
      {
        id: 'L19-4', type: 'qcm', title: 'Révision — Couleurs', characterId: 'fatou',
        characterMessage: "Lis toute la phrase avant de choisir. Le contexte est la clé !",
        question: '« Des chaussures orange » → pas d\'accord car…',
        options: ['C\'est pluriel', 'Orange est invariable', 'C\'est féminin', 'C\'est un adverbe'],
        correctIndex: 1,
        explanation: '« Orange » et « marron » sont des couleurs invariables.'
      },
      {
        id: 'L19-5', type: 'fill-blank', title: 'Révision — Avoir',
        sentence: 'Nous ___ pas de jardin.',
        options: ['n\'avons', 'n\'ai', 'n\'ont', 'n\'a'],
        correctAnswer: 'n\'avons'
      },
      {
        id: 'L19-6', type: 'qcm', title: 'Révision — Nombres', characterId: 'fatou',
        characterMessage: "Ne te précipite pas, réfléchis au sens de la phrase complète.",
        question: 'Comment dit-on 95 ?',
        options: ['Quatre-vingt-cinq', 'Quatre-vingt-quinze', 'Nonante-cinq', 'Soixante-quinze'],
        correctIndex: 1,
        explanation: '95 = quatre-vingt-quinze (4×20 + 15).'
      },
      {
        id: 'L19-7', type: 'final-quiz', title: 'Quiz récapitulatif — Module A1.2',
        questions: [
          { question: '« Mon amie » (pas « ma amie ») car…', options: ['C\'est masculin', 'Devant une voyelle, on utilise mon', 'C\'est pluriel', 'C\'est informel'], correctIndex: 1 },
          { question: 'Le féminin de « beau » est…', options: ['Beaue', 'Belle', 'Bel', 'Baux'], correctIndex: 1 },
          { question: '« Il ___ 40 ans. »', options: ['est', 'a', 'fait', 'va'], correctIndex: 1 },
          { question: '« La chambre » est…', options: ['The kitchen', 'The bedroom', 'The garden', 'The office'], correctIndex: 1 },
          { question: '70 en français est…', options: ['Septante', 'Soixante-dix', 'Sept-dix', 'Soixante-sept'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 20: Examen Module A1.2
  {
    courseId: 'lesson-20',
    steps: [
      {
        id: 'L20-1', type: 'lesson', title: 'Examen Final — Module A1.2',
        content: `🎓 **Examen du Module A1.2 : Mon monde quotidien**\n\nCet examen teste toutes vos connaissances du Module A1.2 :\n\n✅ La famille\n✅ La description physique\n✅ Les couleurs\n✅ Les objets du quotidien\n✅ Les nombres de 20 à 100\n✅ Le verbe avoir et la négation\n✅ Les adjectifs possessifs\n✅ Le logement\n\n🏅 **Réussissez avec 70% ou plus pour débloquer le badge « Explorateur » !**\n\nBonne chance ! 🍀`,
        tip: '💡 Prenez votre temps, relisez bien chaque question. Vous avez tout révisé, vous êtes prêt(e) !'
      },
      {
        id: 'L20-2', type: 'final-quiz', title: '🎓 Examen Module A1.2 — Mon monde quotidien', characterId: 'marie',
        characterMessage: "C'est un sujet passionnant, vous allez voir !",
        questions: [
          { question: 'Le fils de ma tante est mon…', options: ['Frère', 'Oncle', 'Cousin', 'Neveu'], correctIndex: 2 },
          { question: '« Elle est ___ . » (small, fem.)', options: ['petit', 'petite', 'petits', 'petites'], correctIndex: 1 },
          { question: 'Le féminin de « blanc » est…', options: ['Blanche', 'Blanque', 'Blanc', 'Blance'], correctIndex: 0 },
          { question: '« Une clé » est…', options: ['A pen', 'A book', 'A key', 'A phone'], correctIndex: 2 },
          { question: '80 en français est…', options: ['Huitante', 'Quatre-vingts', 'Octante', 'Soixante-vingt'], correctIndex: 1 },
          { question: '« Je n\'ai pas ___ chat. »', options: ['un', 'de', 'le', 'du'], correctIndex: 1 },
          { question: '« ___ école est grande. » (my)', options: ['Ma', 'Mon', 'Mes', 'Sa'], correctIndex: 1 },
          { question: 'Où dort-on dans la maison ?', options: ['La cuisine', 'Le salon', 'La chambre', 'Le balcon'], correctIndex: 2 },
          { question: '« Nous ___ trois enfants. »', options: ['a', 'avons', 'ont', 'as'], correctIndex: 1 },
          { question: 'Le féminin de « roux » est…', options: ['Rousse', 'Rousse', 'Rouxe', 'Rouse'], correctIndex: 1 },
          { question: '« La lavande est ___ . »', options: ['rouge', 'bleue', 'violette', 'verte'], correctIndex: 2 },
          { question: '« Son » peut signifier…', options: ['Only "his"', 'Only "her"', '"His" or "her"', '"My"'], correctIndex: 2 },
          { question: '91 en français est…', options: ['Quatre-vingt-onze', 'Nonante et un', 'Quatre-vingt-un', 'Soixante-vingt-onze'], correctIndex: 0 },
          { question: '« J\'ai soif » signifie…', options: ['I\'m hungry', 'I\'m thirsty', 'I\'m tired', 'I\'m cold'], correctIndex: 1 },
          { question: '« Chez moi » signifie…', options: ['At school', 'At my place', 'In the garden', 'At work'], correctIndex: 1 },
        ]
      }
    ]
  },
];
