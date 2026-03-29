// Interactive lesson content for B2 Module 4: Arts et littérature (Lessons 181-190)
import type { CourseContent } from './course-content';

export const b2Module4Content: CourseContent[] = [
  // Lesson 181: La littérature française
  {
    courseId: 'lesson-181',
    steps: [
      {
        id: 'L181-1', type: 'lesson', title: 'La littérature française', characterId: 'marie',
        content: `La littérature française est l'une des plus riches au monde.\n\n📚 **Grands auteurs et œuvres :**\n\n🔵 **Le XIXe siècle :**\n- **Victor Hugo** — Les Misérables, Notre-Dame de Paris\n- **Gustave Flaubert** — Madame Bovary\n- **Guy de Maupassant** — Boule de Suif, nouvelles\n- **Émile Zola** — Germinal, L'Assommoir\n\n🟢 **Le XXe siècle :**\n- **Albert Camus** — L'Étranger, La Peste\n- **Jean-Paul Sartre** — La Nausée, Huis clos\n- **Simone de Beauvoir** — Le Deuxième Sexe\n- **Antoine de Saint-Exupéry** — Le Petit Prince\n- **Jacques Prévert** — Paroles (poésie)\n\n📝 **Vocabulaire littéraire :**\n- Un roman, une nouvelle, un poème, une pièce de théâtre\n- Un personnage, l'intrigue, le dénouement\n- Le narrateur, le point de vue, le style`,
        tip: '💡 Le Petit Prince est le livre français le plus traduit au monde : plus de 300 langues !'
      },
      {
        id: 'L181-2', type: 'listening', title: 'Écoute — Extrait du Petit Prince', characterId: 'omar',
        text: 'On ne voit bien qu\'avec le cœur. L\'essentiel est invisible pour les yeux. C\'est le temps que tu as perdu pour ta rose qui fait ta rose si importante. Tu deviens responsable pour toujours de ce que tu as apprivoisé.',
        question: 'Selon le Petit Prince, avec quoi voit-on bien ?',
        options: ['Les yeux', 'Le cœur', 'Les mains', 'Le cerveau'],
        correctIndex: 1
      },
      {
        id: 'L181-3', type: 'qcm', title: 'Auteurs français', characterId: 'elena',
        question: 'Qui a écrit L\'Étranger ?',
        options: ['Victor Hugo', 'Albert Camus', 'Gustave Flaubert', 'Émile Zola'],
        correctIndex: 1,
        explanation: 'L\'Étranger (1942) est un roman d\'Albert Camus, classique de la littérature existentialiste.'
      },
      {
        id: 'L181-4', type: 'flashcard', title: 'Vocabulaire littéraire', characterId: 'thomas',
        cards: [
          { front: 'L\'intrigue', back: 'The plot' },
          { front: 'Le dénouement', back: 'The ending / resolution' },
          { front: 'Le narrateur', back: 'The narrator' },
          { front: 'Une nouvelle', back: 'A short story' },
          { front: 'Le personnage principal', back: 'The main character' },
          { front: 'Le point de vue', back: 'The point of view / perspective' },
        ]
      },
      {
        id: 'L181-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        sentence: 'Victor Hugo a écrit « Les ___ », l\'un des plus grands romans français.',
        options: ['Misérables', 'Fleurs', 'Étrangers', 'Mots'],
        correctAnswer: 'Misérables'
      },
      {
        id: 'L181-6', type: 'drag-drop', title: 'Associez auteur et œuvre', characterId: 'yuki',
        instruction: 'Classez dans l\'ordre chronologique :',
        items: ['Camus — L\'Étranger (1942)', 'Saint-Exupéry — Le Petit Prince (1943)', 'Hugo — Les Misérables (1862)'],
        correctOrder: ['Hugo — Les Misérables (1862)', 'Camus — L\'Étranger (1942)', 'Saint-Exupéry — Le Petit Prince (1943)']
      },
      {
        id: 'L181-7', type: 'qcm', title: 'Le Petit Prince', characterId: 'lucas',
        question: 'Quel est le record du Petit Prince ?',
        options: ['Le plus long roman', 'Le livre français le plus traduit', 'Le premier roman français', 'Le livre le plus cher'],
        correctIndex: 1,
        explanation: 'Le Petit Prince est le livre français le plus traduit au monde (300+ langues).'
      },
      {
        id: 'L181-8', type: 'final-quiz', title: 'Quiz final — Littérature française', characterId: 'marie',
        questions: [
          { question: 'Qui a écrit Les Misérables ?', options: ['Flaubert', 'Camus', 'Hugo', 'Zola'], correctIndex: 2 },
          { question: '« L\'intrigue » d\'un roman, c\'est :', options: ['Le titre', 'L\'histoire / le plot', 'L\'auteur', 'La couverture'], correctIndex: 1 },
          { question: 'Albert Camus est associé à :', options: ['Le romantisme', 'L\'existentialisme', 'Le classicisme', 'Le surréalisme'], correctIndex: 1 },
          { question: 'Une « nouvelle » est :', options: ['Un long roman', 'Un récit court', 'Un journal', 'Un poème'], correctIndex: 1 },
          { question: 'Madame Bovary est de :', options: ['Hugo', 'Camus', 'Flaubert', 'Maupassant'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 182: Écrire une nouvelle courte
  {
    courseId: 'lesson-182',
    steps: [
      {
        id: 'L182-1', type: 'lesson', title: 'Écrire une nouvelle courte', characterId: 'marie',
        content: `La **nouvelle** est un récit court avec une intrigue resserrée et souvent une **chute** (twist final).\n\n📐 **Structure :**\n\n1️⃣ **Situation initiale** — Qui ? Où ? Quand ?\n2️⃣ **Élément perturbateur** — Quelque chose change\n3️⃣ **Péripéties** — Les événements se développent\n4️⃣ **Climax** — Le point culminant\n5️⃣ **Dénouement / Chute** — La fin (souvent inattendue)\n\n📝 **Techniques narratives :**\n- **La description** — planter le décor\n- **Le dialogue** — donner vie aux personnages\n- **Le suspense** — retarder l'information clé\n- **La chute** — surprendre le lecteur\n\n💡 **Temps du récit :**\n- Passé simple + imparfait (récit littéraire)\n- Passé composé + imparfait (récit plus moderne)`,
        tip: '💡 Une bonne chute change complètement la compréhension de l\'histoire !'
      },
      {
        id: 'L182-2', type: 'listening', title: 'Écoute — Micro-nouvelle', characterId: 'omar',
        text: 'Ce matin-là, Pierre se leva plus tôt que d\'habitude. Il s\'habilla avec soin, prit son café en silence, et regarda une dernière fois son appartement. Sur la table, il laissa un mot : « Je pars à Antibes. Ne me cherchez pas. » En descendant les escaliers, il souriait.',
        question: 'Comment se sent Pierre en partant ?',
        options: ['Triste', 'En colère', 'Content / soulagé', 'Effrayé'],
        correctIndex: 2
      },
      {
        id: 'L182-3', type: 'qcm', title: 'Structure narrative', characterId: 'elena',
        question: 'L\'élément perturbateur est :',
        options: ['La fin de l\'histoire', 'Le début de l\'histoire', 'L\'événement qui déclenche l\'action', 'Le résumé'],
        correctIndex: 2,
        explanation: 'L\'élément perturbateur est l\'événement qui rompt l\'équilibre initial et lance l\'intrigue.'
      },
      {
        id: 'L182-4', type: 'flashcard', title: 'Vocabulaire narratif', characterId: 'thomas',
        cards: [
          { front: 'La chute (d\'une nouvelle)', back: 'The twist ending' },
          { front: 'L\'élément perturbateur', back: 'The inciting incident' },
          { front: 'Le climax', back: 'The climax / turning point' },
          { front: 'Le dénouement', back: 'The resolution' },
          { front: 'Planter le décor', back: 'To set the scene' },
          { front: 'Le suspense', back: 'Suspense / tension' },
        ]
      },
      {
        id: 'L182-5', type: 'fill-blank', title: 'Complétez la phrase', characterId: 'fatou',
        sentence: 'La ___ d\'une nouvelle est souvent inattendue et surprend le lecteur.',
        options: ['chute', 'introduction', 'description', 'situation'],
        correctAnswer: 'chute'
      },
      {
        id: 'L182-6', type: 'drag-drop', title: 'Structure de la nouvelle', characterId: 'yuki',
        instruction: 'Ordonnez les étapes narratives :',
        items: ['Dénouement', 'Situation initiale', 'Climax', 'Élément perturbateur', 'Péripéties'],
        correctOrder: ['Situation initiale', 'Élément perturbateur', 'Péripéties', 'Climax', 'Dénouement']
      },
      {
        id: 'L182-7', type: 'qcm', title: 'Temps du récit', characterId: 'lucas',
        question: 'Dans un récit littéraire classique, quels temps utilise-t-on ?',
        options: ['Présent + futur', 'Passé simple + imparfait', 'Conditionnel + subjonctif', 'Futur + passé composé'],
        correctIndex: 1,
        explanation: 'Le récit littéraire classique utilise le passé simple (actions) et l\'imparfait (descriptions).'
      },
      {
        id: 'L182-8', type: 'final-quiz', title: 'Quiz final — Écrire une nouvelle', characterId: 'marie',
        questions: [
          { question: 'La « chute » d\'une nouvelle est :', options: ['Le début', 'La fin inattendue', 'Un accident', 'Un personnage'], correctIndex: 1 },
          { question: 'L\'élément perturbateur déclenche :', options: ['La fin', 'L\'action', 'La description', 'Le titre'], correctIndex: 1 },
          { question: 'Les temps du récit littéraire :', options: ['Présent', 'Passé simple + imparfait', 'Futur', 'Conditionnel'], correctIndex: 1 },
          { question: '« Planter le décor » signifie :', options: ['Jardiner', 'Décrire le lieu et l\'ambiance', 'Construire', 'Démolir'], correctIndex: 1 },
          { question: 'Le climax est :', options: ['Le début', 'Le point culminant', 'La fin', 'L\'introduction'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 183: Le passé simple
  {
    courseId: 'lesson-183',
    steps: [
      {
        id: 'L183-1', type: 'lesson', title: 'Le passé simple', characterId: 'marie',
        content: `Le **passé simple** est un temps littéraire utilisé à l'écrit pour exprimer des actions passées.\n\n📐 **Formation :**\n\n🔵 **1er groupe (-er) :** radical + -ai, -as, -a, -âmes, -âtes, -èrent\n- Parler : je parlai, tu parlas, il parla, nous parlâmes, vous parlâtes, ils parlèrent\n\n🟢 **2e groupe (-ir) :** radical + -is, -is, -it, -îmes, -îtes, -irent\n- Finir : je finis, tu finis, il finit, nous finîmes, vous finîtes, ils finirent\n\n🟣 **3e groupe (irréguliers) :**\n- Avoir : j'eus, il eut, ils eurent\n- Être : je fus, il fut, ils furent\n- Faire : je fis, il fit, ils firent\n- Prendre : je pris, il prit, ils prirent\n- Voir : je vis, il vit, ils virent\n\n⚠️ On ne l'utilise PAS à l'oral (sauf contexte très soutenu). Il est remplacé par le passé composé.`,
        tip: '💡 Vous n\'avez pas besoin de conjuguer au passé simple, mais vous devez le RECONNAÎTRE dans les textes.'
      },
      {
        id: 'L183-2', type: 'listening', title: 'Écoute — Extrait littéraire', characterId: 'omar',
        text: 'Il sortit de la maison à l\'aube. Le soleil se levait lentement sur la Méditerranée. Il marcha longtemps le long de la plage, puis s\'arrêta devant le vieux port. Il contempla les bateaux et soupira. Ce fut à cet instant qu\'il prit sa décision.',
        question: 'Quand le personnage prit-il sa décision ?',
        options: ['En sortant de la maison', 'En marchant', 'En contemplant les bateaux', 'Le soir'],
        correctIndex: 2
      },
      {
        id: 'L183-3', type: 'qcm', title: 'Reconnaître le passé simple', characterId: 'elena',
        question: '« Il fut surpris par la nouvelle. » — « fut » est le passé simple de :',
        options: ['Faire', 'Avoir', 'Être', 'Aller'],
        correctIndex: 2,
        explanation: '« Il fut » est le passé simple du verbe « être » (il fut = il a été).'
      },
      {
        id: 'L183-4', type: 'flashcard', title: 'Passé simple — Formes clés', characterId: 'thomas',
        cards: [
          { front: 'Il fut (être)', back: 'He was' },
          { front: 'Il eut (avoir)', back: 'He had' },
          { front: 'Il fit (faire)', back: 'He did / made' },
          { front: 'Il prit (prendre)', back: 'He took' },
          { front: 'Il vit (voir)', back: 'He saw' },
          { front: 'Ils allèrent (aller)', back: 'They went' },
        ]
      },
      {
        id: 'L183-5', type: 'fill-blank', title: 'Identifiez le verbe', characterId: 'fatou',
        sentence: '« Elle ___ la porte et entra. » (ouvrir au passé simple)',
        options: ['ouvrit', 'ouvra', 'ouvris', 'ouvrait'],
        correctAnswer: 'ouvrit'
      },
      {
        id: 'L183-6', type: 'drag-drop', title: 'Passé simple vs Passé composé', characterId: 'yuki',
        instruction: 'Classez : d\'abord passé simple, puis passé composé :',
        items: ['Il a mangé', 'Il mangea', 'Elle est partie', 'Elle partit'],
        correctOrder: ['Il mangea', 'Elle partit', 'Il a mangé', 'Elle est partie']
      },
      {
        id: 'L183-7', type: 'qcm', title: 'Usage du passé simple', characterId: 'lucas',
        question: 'Où trouve-t-on le passé simple ?',
        options: ['Dans les SMS', 'Dans les textes littéraires', 'À l\'oral courant', 'Dans les tweets'],
        correctIndex: 1,
        explanation: 'Le passé simple est réservé à l\'écrit littéraire (romans, contes, récits historiques).'
      },
      {
        id: 'L183-8', type: 'final-quiz', title: 'Quiz final — Le passé simple', characterId: 'marie',
        questions: [
          { question: '« Il fut » est le passé simple de :', options: ['Faire', 'Être', 'Avoir', 'Aller'], correctIndex: 1 },
          { question: '« Ils prirent » vient de :', options: ['Prier', 'Prendre', 'Partir', 'Porter'], correctIndex: 1 },
          { question: 'Le passé simple s\'utilise :', options: ['À l\'oral', 'À l\'écrit littéraire', 'En SMS', 'Partout'], correctIndex: 1 },
          { question: '« Elle vit » (passé simple) = elle…', options: ['vécut', 'a vu', 'vivait', 'viendra'], correctIndex: 1 },
          { question: '« Il parla » → terminaison du 1er groupe :', options: ['-it', '-ut', '-a', '-is'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 184: La chanson française
  {
    courseId: 'lesson-184',
    steps: [
      {
        id: 'L184-1', type: 'lesson', title: 'La chanson française', characterId: 'marie',
        content: `La chanson française est un art à part entière, riche en poésie et en émotion.\n\n🎵 **Grands noms de la chanson française :**\n\n🎤 **Classiques :**\n- **Édith Piaf** — La Vie en rose, Non je ne regrette rien\n- **Jacques Brel** — Ne me quitte pas, Amsterdam\n- **Charles Aznavour** — La Bohème, Emmenez-moi\n- **Georges Brassens** — Les copains d'abord\n\n🎶 **Modernes / Contemporains :**\n- **Stromae** — Papaoutai, Alors on danse\n- **Zaz** — Je veux\n- **Angèle** — Balance ton quoi\n- **MC Solaar** — Bouge de là (rap français)\n\n📝 **Analyser une chanson :**\n- Le thème (amour, société, nostalgie…)\n- Les figures de style (métaphore, répétition…)\n- Le rapport texte/musique\n- Le message de l'artiste`,
        tip: '💡 Écouter des chansons françaises est l\'un des meilleurs moyens d\'améliorer votre compréhension orale !'
      },
      {
        id: 'L184-2', type: 'listening', title: 'Écoute — Analyse de paroles', characterId: 'omar',
        text: 'Dans sa chanson Papaoutai, Stromae pose la question de l\'absence paternelle. Le titre est un jeu de mots : Papa, où t\'es ? Le clip montre un enfant qui essaie de communiquer avec un père immobile. C\'est une métaphore de l\'absence émotionnelle.',
        question: 'Quel est le thème de Papaoutai ?',
        options: ['L\'amour', 'L\'absence du père', 'Les vacances', 'La politique'],
        correctIndex: 1
      },
      {
        id: 'L184-3', type: 'qcm', title: 'Chanson classique', characterId: 'elena',
        question: 'Qui chante « Non, je ne regrette rien » ?',
        options: ['Jacques Brel', 'Stromae', 'Édith Piaf', 'Charles Aznavour'],
        correctIndex: 2,
        explanation: '« Non, je ne regrette rien » est la chanson emblématique d\'Édith Piaf (1960).'
      },
      {
        id: 'L184-4', type: 'flashcard', title: 'Vocabulaire musical', characterId: 'thomas',
        cards: [
          { front: 'Les paroles', back: 'The lyrics' },
          { front: 'Le refrain', back: 'The chorus' },
          { front: 'Un couplet', back: 'A verse' },
          { front: 'La mélodie', back: 'The melody' },
          { front: 'Un jeu de mots', back: 'A play on words / pun' },
          { front: 'Un auteur-compositeur-interprète', back: 'A singer-songwriter' },
        ]
      },
      {
        id: 'L184-5', type: 'fill-blank', title: 'Vocabulaire musical', characterId: 'fatou',
        sentence: 'Les ___ de cette chanson sont très poétiques.',
        options: ['paroles', 'notes', 'sons', 'bruits'],
        correctAnswer: 'paroles'
      },
      {
        id: 'L184-6', type: 'drag-drop', title: 'Chronologie musicale', characterId: 'yuki',
        instruction: 'Du plus ancien au plus récent :',
        items: ['Stromae', 'Édith Piaf', 'Jacques Brel'],
        correctOrder: ['Édith Piaf', 'Jacques Brel', 'Stromae']
      },
      {
        id: 'L184-7', type: 'qcm', title: 'Papaoutai', characterId: 'lucas',
        question: '« Papaoutai » est un jeu de mots sur :',
        options: ['Papa, où tu vas ?', 'Papa, où t\'es ?', 'Papa, qui es-tu ?', 'Papa, quand ?'],
        correctIndex: 1,
        explanation: '« Papaoutai » → « Papa, où t\'es ? » (Papa, where are you?)'
      },
      {
        id: 'L184-8', type: 'final-quiz', title: 'Quiz final — La chanson française', characterId: 'marie',
        questions: [
          { question: 'Édith Piaf est célèbre pour :', options: ['Papaoutai', 'Non, je ne regrette rien', 'La Bohème', 'Ne me quitte pas'], correctIndex: 1 },
          { question: 'Le « refrain » d\'une chanson est :', options: ['Le début', 'La partie qui se répète', 'La fin', 'Le solo'], correctIndex: 1 },
          { question: '« Ne me quitte pas » est de :', options: ['Piaf', 'Aznavour', 'Brel', 'Stromae'], correctIndex: 2 },
          { question: 'Stromae est un artiste :', options: ['Classique (XIXe)', 'Contemporain', 'Baroque', 'Médiéval'], correctIndex: 1 },
          { question: 'Analyser une chanson inclut :', options: ['Compter les mots', 'Thème, figures de style, message', 'La durée uniquement', 'Le prix de l\'album'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 185: L'art contemporain
  {
    courseId: 'lesson-185',
    steps: [
      {
        id: 'L185-1', type: 'lesson', title: 'L\'art contemporain', characterId: 'marie',
        content: `L'art contemporain est un domaine riche en débats et en expressions.\n\n🎨 **Mouvements clés :**\n- **L'impressionnisme** — Monet, Renoir (lumière, couleur)\n- **Le cubisme** — Picasso, Braque (formes géométriques)\n- **Le surréalisme** — Dalí, Magritte (rêve, inconscient)\n- **L'art abstrait** — Kandinsky, Mondrian\n- **Le street art** — Banksy, JR, Invader\n\n📝 **Décrire une œuvre d'art :**\n- « Cette œuvre représente / illustre / évoque… »\n- « L'artiste cherche à exprimer / transmettre… »\n- « Les couleurs dominantes sont… »\n- « On ressent une impression de… »\n- « Cette pièce interroge le spectateur sur… »\n\n🏛️ **Musées célèbres :**\n- Le Louvre, le Musée d'Orsay, le Centre Pompidou (Paris)\n- Le MAMAC (Nice), le Musée Picasso (Antibes)`,
        tip: '💡 Pour décrire une œuvre, commencez par ce que vous VOYEZ, puis dites ce que vous RESSENTEZ.'
      },
      {
        id: 'L185-2', type: 'listening', title: 'Écoute — Visite guidée', characterId: 'omar',
        text: 'Nous voici devant une œuvre de Picasso, datant de sa période à Antibes. Cette peinture représente la joie de vivre. Les couleurs vives évoquent la lumière méditerranéenne. L\'artiste cherche à transmettre un sentiment de liberté et de bonheur.',
        question: 'Quel sentiment l\'œuvre évoque-t-elle ?',
        options: ['La tristesse', 'La colère', 'La joie et la liberté', 'La peur'],
        correctIndex: 2
      },
      {
        id: 'L185-3', type: 'qcm', title: 'Mouvements artistiques', characterId: 'elena',
        question: 'L\'impressionnisme se caractérise par :',
        options: ['Les formes géométriques', 'Le jeu de lumière et de couleur', 'Les images de rêve', 'Le noir et blanc'],
        correctIndex: 1,
        explanation: 'L\'impressionnisme (Monet, Renoir) se caractérise par le travail sur la lumière et la couleur.'
      },
      {
        id: 'L185-4', type: 'flashcard', title: 'Vocabulaire artistique', characterId: 'thomas',
        cards: [
          { front: 'Cette œuvre représente…', back: 'This work depicts…' },
          { front: 'L\'artiste cherche à exprimer…', back: 'The artist seeks to express…' },
          { front: 'Les couleurs dominantes', back: 'The dominant colors' },
          { front: 'Une impression de…', back: 'An impression of…' },
          { front: 'Le spectateur', back: 'The viewer / spectator' },
          { front: 'Un autoportrait', back: 'A self-portrait' },
        ]
      },
      {
        id: 'L185-5', type: 'fill-blank', title: 'Décrire une œuvre', characterId: 'fatou',
        sentence: 'L\'artiste ___ à exprimer la solitude à travers des couleurs froides.',
        options: ['cherche', 'mange', 'dort', 'court'],
        correctAnswer: 'cherche'
      },
      {
        id: 'L185-6', type: 'drag-drop', title: 'Chronologie artistique', characterId: 'yuki',
        instruction: 'Du plus ancien au plus récent :',
        items: ['Street art', 'Impressionnisme', 'Cubisme'],
        correctOrder: ['Impressionnisme', 'Cubisme', 'Street art']
      },
      {
        id: 'L185-7', type: 'qcm', title: 'Musées', characterId: 'lucas',
        question: 'Quel musée est à Antibes ?',
        options: ['Le Louvre', 'Le Centre Pompidou', 'Le Musée Picasso', 'Le Musée d\'Orsay'],
        correctIndex: 2,
        explanation: 'Le Musée Picasso est situé dans le château Grimaldi à Antibes.'
      },
      {
        id: 'L185-8', type: 'final-quiz', title: 'Quiz final — L\'art contemporain', characterId: 'marie',
        questions: [
          { question: 'L\'impressionnisme est associé à :', options: ['Picasso', 'Monet', 'Dalí', 'Banksy'], correctIndex: 1 },
          { question: 'Le cubisme utilise :', options: ['La lumière naturelle', 'Les formes géométriques', 'Les rêves', 'La photographie'], correctIndex: 1 },
          { question: '« Cette œuvre ___ la joie de vivre. »', options: ['mange', 'représente', 'dort', 'court'], correctIndex: 1 },
          { question: 'Le Musée Picasso d\'Antibes est dans :', options: ['Une gare', 'Le château Grimaldi', 'Un hôtel', 'Une plage'], correctIndex: 1 },
          { question: 'Le surréalisme explore :', options: ['La géométrie', 'Le rêve et l\'inconscient', 'La lumière', 'L\'architecture'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 186: Le cinéma d'auteur
  {
    courseId: 'lesson-186',
    steps: [
      {
        id: 'L186-1', type: 'lesson', title: 'Le cinéma d\'auteur', characterId: 'marie',
        content: `Le **cinéma d'auteur** français est reconnu dans le monde entier.\n\n🎬 **La Nouvelle Vague (années 1960) :**\n- **François Truffaut** — Les 400 coups, Jules et Jim\n- **Jean-Luc Godard** — À bout de souffle\n- Rupture avec le cinéma classique : caméra portée, tournages en extérieur, improvisation\n\n🎥 **Réalisateurs contemporains :**\n- **Jacques Audiard** — Un prophète, Dheepan (Palme d'or 2015)\n- **Céline Sciamma** — Portrait de la jeune fille en feu\n- **Julia Ducournau** — Titane (Palme d'or 2021)\n\n🏆 **Festival de Cannes :**\n- Le plus prestigieux festival de cinéma au monde\n- La Palme d'or récompense le meilleur film\n- Se tient chaque année en mai, sur la Côte d'Azur\n\n📝 **Analyser un film :**\n- Le scénario / l'histoire\n- La mise en scène\n- La photographie (plans, lumière)\n- La bande originale\n- Le jeu des acteurs`,
        tip: '💡 Cannes est à seulement 30 minutes d\'Antibes ! Le festival a lieu chaque année en mai.'
      },
      {
        id: 'L186-2', type: 'listening', title: 'Écoute — Critique de film', characterId: 'omar',
        text: 'Le dernier film de Jacques Audiard est un chef-d\'œuvre. La mise en scène est époustouflante, les acteurs sont remarquables, et la bande originale accompagne parfaitement l\'intrigue. Le film a reçu la Palme d\'or à Cannes. Je le recommande vivement.',
        question: 'Quel est l\'avis du critique ?',
        options: ['Négatif', 'Neutre', 'Très positif', 'Indifférent'],
        correctIndex: 2
      },
      {
        id: 'L186-3', type: 'qcm', title: 'La Nouvelle Vague', characterId: 'elena',
        question: 'Qui est le réalisateur de « À bout de souffle » ?',
        options: ['Truffaut', 'Godard', 'Audiard', 'Ducournau'],
        correctIndex: 1,
        explanation: '« À bout de souffle » (1960) est le film emblématique de Jean-Luc Godard et de la Nouvelle Vague.'
      },
      {
        id: 'L186-4', type: 'flashcard', title: 'Vocabulaire du cinéma', characterId: 'thomas',
        cards: [
          { front: 'La mise en scène', back: 'The directing / staging' },
          { front: 'La bande originale', back: 'The soundtrack' },
          { front: 'Un plan (cinéma)', back: 'A shot / a frame' },
          { front: 'Le scénario', back: 'The screenplay / script' },
          { front: 'La Palme d\'or', back: 'The Palme d\'Or (highest Cannes award)' },
          { front: 'Un chef-d\'œuvre', back: 'A masterpiece' },
        ]
      },
      {
        id: 'L186-5', type: 'fill-blank', title: 'Critique de film', characterId: 'fatou',
        sentence: 'La ___ en scène de ce film est remarquable.',
        options: ['mise', 'prise', 'vue', 'entrée'],
        correctAnswer: 'mise'
      },
      {
        id: 'L186-6', type: 'drag-drop', title: 'Éléments d\'analyse', characterId: 'yuki',
        instruction: 'Classez les éléments pour analyser un film :',
        items: ['Bande originale', 'Scénario', 'Jeu des acteurs', 'Mise en scène'],
        correctOrder: ['Scénario', 'Mise en scène', 'Jeu des acteurs', 'Bande originale']
      },
      {
        id: 'L186-7', type: 'qcm', title: 'Festival de Cannes', characterId: 'lucas',
        question: 'Le Festival de Cannes a lieu en :',
        options: ['Janvier', 'Mars', 'Mai', 'Septembre'],
        correctIndex: 2,
        explanation: 'Le Festival de Cannes se tient chaque année en mai sur la Côte d\'Azur.'
      },
      {
        id: 'L186-8', type: 'final-quiz', title: 'Quiz final — Le cinéma d\'auteur', characterId: 'marie',
        questions: [
          { question: 'La Nouvelle Vague date des années :', options: ['1940', '1960', '1980', '2000'], correctIndex: 1 },
          { question: 'La Palme d\'or récompense :', options: ['Un livre', 'Le meilleur film à Cannes', 'Un acteur', 'Un musicien'], correctIndex: 1 },
          { question: '« La bande originale » d\'un film est :', options: ['Les acteurs', 'La musique', 'Le scénario', 'Les décors'], correctIndex: 1 },
          { question: '« À bout de souffle » est de :', options: ['Truffaut', 'Godard', 'Audiard', 'Sciamma'], correctIndex: 1 },
          { question: 'Cannes est proche de :', options: ['Paris', 'Lyon', 'Antibes', 'Lille'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 187: Les figures de style
  {
    courseId: 'lesson-187',
    steps: [
      {
        id: 'L187-1', type: 'lesson', title: 'Les figures de style', characterId: 'marie',
        content: `Les **figures de style** enrichissent l'expression écrite et orale.\n\n📝 **Figures principales :**\n\n🔵 **La métaphore** — Comparaison sans « comme »\n- « Cet homme est un lion. » (= il est courageux)\n\n🟢 **La comparaison** — Avec « comme, tel, semblable à »\n- « Elle chante comme un oiseau. »\n\n🟣 **L'hyperbole** — Exagération\n- « Je meurs de faim. » « Il fait un froid de canard. »\n\n🟡 **La litote** — Dire moins pour exprimer plus\n- « Ce n'est pas mal. » (= c'est bien)\n- « Il n'est pas bête. » (= il est intelligent)\n\n🔴 **L'ironie** — Dire le contraire\n- « Quel beau temps ! » (quand il pleut)\n\n🟠 **L'anaphore** — Répétition en début de phrase\n- « Moi, président… Moi, président… Moi, président… »`,
        tip: '💡 Les figures de style sont essentielles pour analyser un texte littéraire au DELF B2.'
      },
      {
        id: 'L187-2', type: 'listening', title: 'Écoute — Texte avec figures de style', characterId: 'omar',
        text: 'La mer était un miroir d\'argent sous le soleil d\'Antibes. Le vent chantait comme un musicien invisible. J\'aurais donné mille ans pour rester sur cette plage. Ce n\'était pas mal du tout, cette vie méditerranéenne.',
        question: '« La mer était un miroir d\'argent » est :',
        options: ['Une comparaison', 'Une métaphore', 'Une hyperbole', 'Une litote'],
        correctIndex: 1
      },
      {
        id: 'L187-3', type: 'qcm', title: 'Identifier la figure', characterId: 'elena',
        question: '« Je meurs de faim. » est :',
        options: ['Une litote', 'Une métaphore', 'Une hyperbole', 'Une ironie'],
        correctIndex: 2,
        explanation: '« Je meurs de faim » est une hyperbole : une exagération volontaire.'
      },
      {
        id: 'L187-4', type: 'flashcard', title: 'Figures de style', characterId: 'thomas',
        cards: [
          { front: 'La métaphore', back: 'Comparison without "like" — "He is a lion"' },
          { front: 'La comparaison', back: 'Comparison with "like/as" — "She sings like a bird"' },
          { front: 'L\'hyperbole', back: 'Exaggeration — "I\'m dying of hunger"' },
          { front: 'La litote', back: 'Understatement — "It\'s not bad" (= it\'s good)' },
          { front: 'L\'ironie', back: 'Saying the opposite — "Nice weather!" (when raining)' },
          { front: 'L\'anaphore', back: 'Repetition at the start of phrases' },
        ]
      },
      {
        id: 'L187-5', type: 'fill-blank', title: 'Identifiez la figure', characterId: 'fatou',
        sentence: '« Ce n\'est pas mal. » (= c\'est bien) est une ___.',
        options: ['litote', 'hyperbole', 'métaphore', 'anaphore'],
        correctAnswer: 'litote'
      },
      {
        id: 'L187-6', type: 'drag-drop', title: 'Classez les figures', characterId: 'yuki',
        instruction: 'De l\'exagération à l\'atténuation :',
        items: ['La litote (atténuation)', 'L\'hyperbole (exagération)', 'La comparaison (neutre)'],
        correctOrder: ['L\'hyperbole (exagération)', 'La comparaison (neutre)', 'La litote (atténuation)']
      },
      {
        id: 'L187-7', type: 'qcm', title: 'Métaphore ou comparaison ?', characterId: 'lucas',
        question: '« Elle chante comme un oiseau. » est :',
        options: ['Une métaphore', 'Une comparaison', 'Une hyperbole', 'Une litote'],
        correctIndex: 1,
        explanation: 'Avec « comme », c\'est une comparaison. Sans « comme » (« Elle est un oiseau »), ce serait une métaphore.'
      },
      {
        id: 'L187-8', type: 'final-quiz', title: 'Quiz final — Figures de style', characterId: 'marie',
        questions: [
          { question: '« Il est un lion. » = :', options: ['Comparaison', 'Métaphore', 'Litote', 'Ironie'], correctIndex: 1 },
          { question: '« Je meurs de soif. » = :', options: ['Litote', 'Hyperbole', 'Anaphore', 'Comparaison'], correctIndex: 1 },
          { question: '« Ce n\'est pas bête. » (= c\'est intelligent) = :', options: ['Hyperbole', 'Métaphore', 'Litote', 'Ironie'], correctIndex: 2 },
          { question: 'L\'anaphore est une figure de :', options: ['Exagération', 'Répétition', 'Atténuation', 'Comparaison'], correctIndex: 1 },
          { question: '« … comme un oiseau » = :', options: ['Métaphore', 'Comparaison', 'Hyperbole', 'Litote'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 188: Écrire une critique culturelle
  {
    courseId: 'lesson-188',
    steps: [
      {
        id: 'L188-1', type: 'lesson', title: 'Écrire une critique culturelle', characterId: 'marie',
        content: `La **critique culturelle** (film, livre, expo, spectacle) est un exercice de rédaction argumentée.\n\n📐 **Structure (300+ mots, ton soutenu) :**\n\n1️⃣ **Présentation** — Titre, auteur/réalisateur, genre, date\n2️⃣ **Résumé** — Synopsis SANS révéler la fin\n3️⃣ **Analyse** — Points forts et points faibles\n4️⃣ **Jugement personnel** — Votre avis argumenté\n5️⃣ **Recommandation** — Pour quel public ?\n\n📝 **Formules :**\n- « Ce film/roman/spectacle se distingue par… »\n- « L'auteur/le réalisateur réussit à… »\n- « On peut toutefois regretter que… »\n- « Je recommande vivement cette œuvre à… »\n- « En dépit de quelques longueurs, l'ensemble reste… »`,
        tip: '💡 Ne JAMAIS révéler la fin dans une critique ! C\'est ce qu\'on appelle un « spoiler ».'
      },
      {
        id: 'L188-2', type: 'listening', title: 'Écoute — Critique de restaurant', characterId: 'omar',
        text: 'Le restaurant Le Provençal, situé dans le vieil Antibes, se distingue par sa cuisine méditerranéenne raffinée. Le chef réussit à sublimer les produits locaux. On peut toutefois regretter que les portions soient un peu petites. Je recommande vivement cet établissement aux amateurs de gastronomie.',
        question: 'Quel est le point faible mentionné ?',
        options: ['Le service', 'Les portions petites', 'Le prix', 'L\'emplacement'],
        correctIndex: 1
      },
      {
        id: 'L188-3', type: 'qcm', title: 'Structure de la critique', characterId: 'elena',
        question: 'Que NE DOIT-ON PAS faire dans une critique ?',
        options: ['Donner son avis', 'Résumer l\'œuvre', 'Révéler la fin', 'Recommander'],
        correctIndex: 2,
        explanation: 'Révéler la fin (spoiler) est à éviter absolument dans une critique.'
      },
      {
        id: 'L188-4', type: 'flashcard', title: 'Formules pour la critique', characterId: 'thomas',
        cards: [
          { front: 'Ce film se distingue par…', back: 'This film stands out for…' },
          { front: 'Le réalisateur réussit à…', back: 'The director succeeds in…' },
          { front: 'On peut regretter que…', back: 'One may regret that…' },
          { front: 'Je recommande vivement…', back: 'I highly recommend…' },
          { front: 'En dépit de quelques longueurs…', back: 'Despite a few slow parts…' },
          { front: 'L\'ensemble reste convaincant', back: 'The whole remains convincing' },
        ]
      },
      {
        id: 'L188-5', type: 'fill-blank', title: 'Complétez la critique', characterId: 'fatou',
        sentence: 'On peut toutefois ___ que le scénario manque de profondeur.',
        options: ['regretter', 'aimer', 'oublier', 'ignorer'],
        correctAnswer: 'regretter'
      },
      {
        id: 'L188-6', type: 'drag-drop', title: 'Structure de la critique', characterId: 'yuki',
        instruction: 'Ordonnez les parties :',
        items: ['Recommandation', 'Présentation', 'Analyse', 'Résumé'],
        correctOrder: ['Présentation', 'Résumé', 'Analyse', 'Recommandation']
      },
      {
        id: 'L188-7', type: 'qcm', title: 'Ton de la critique', characterId: 'lucas',
        question: 'Le ton d\'une critique culturelle est :',
        options: ['Familier', 'Soutenu et argumenté', 'Enfantin', 'Agressif'],
        correctIndex: 1,
        explanation: 'La critique culturelle exige un ton soutenu avec des arguments et des exemples.'
      },
      {
        id: 'L188-8', type: 'final-quiz', title: 'Quiz final — La critique culturelle', characterId: 'marie',
        questions: [
          { question: 'Une critique ne doit PAS :', options: ['Donner un avis', 'Révéler la fin', 'Résumer', 'Argumenter'], correctIndex: 1 },
          { question: '« Ce film ___ par sa mise en scène. »', options: ['se distingue', 'se cache', 'se perd', 'se trompe'], correctIndex: 0 },
          { question: 'Le ton d\'une critique est :', options: ['Familier', 'Soutenu', 'Oral', 'SMS'], correctIndex: 1 },
          { question: '« On peut ___ que les dialogues soient faibles. »', options: ['regretter', 'adorer', 'ignorer', 'cacher'], correctIndex: 0 },
          { question: 'La dernière partie d\'une critique est :', options: ['Le résumé', 'L\'analyse', 'La recommandation', 'L\'introduction'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 189: Révision B2.4
  {
    courseId: 'lesson-189',
    steps: [
      {
        id: 'L189-1', type: 'lesson', title: 'Révision B2.4 — Arts et littérature', characterId: 'marie',
        content: `Révisons le module B2.4 !\n\n📝 **Ce que vous avez appris :**\n\n1️⃣ **Littérature française** — Hugo, Camus, Saint-Exupéry\n2️⃣ **Écrire une nouvelle** — Structure narrative, chute\n3️⃣ **Le passé simple** — Reconnaissance à l'écrit\n4️⃣ **La chanson française** — Piaf, Brel, Stromae\n5️⃣ **L'art contemporain** — Mouvements, description d'œuvres\n6️⃣ **Le cinéma d'auteur** — Nouvelle Vague, Cannes\n7️⃣ **Les figures de style** — Métaphore, hyperbole, litote…\n8️⃣ **La critique culturelle** — Structure, ton soutenu`,
        tip: '💡 Révisez les figures de style et le vocabulaire artistique pour le DELF B2 !'
      },
      {
        id: 'L189-2', type: 'qcm', title: 'Révision — Littérature', characterId: 'elena',
        question: 'Qui a écrit Le Petit Prince ?',
        options: ['Camus', 'Hugo', 'Saint-Exupéry', 'Flaubert'],
        correctIndex: 2,
        explanation: 'Le Petit Prince (1943) est d\'Antoine de Saint-Exupéry.'
      },
      {
        id: 'L189-3', type: 'fill-blank', title: 'Révision — Passé simple', characterId: 'fatou',
        sentence: '« Il ___ surpris par la nouvelle. » (être, passé simple)',
        options: ['fut', 'est', 'sera', 'était'],
        correctAnswer: 'fut'
      },
      {
        id: 'L189-4', type: 'qcm', title: 'Révision — Figures de style', characterId: 'lucas',
        question: '« Je meurs de soif » est :',
        options: ['Une litote', 'Une métaphore', 'Une hyperbole', 'Une anaphore'],
        correctIndex: 2,
        explanation: 'Exagérer avec « je meurs » = hyperbole.'
      },
      {
        id: 'L189-5', type: 'fill-blank', title: 'Révision — Cinéma', characterId: 'fatou',
        sentence: 'La ___ d\'or est le prix le plus prestigieux du Festival de Cannes.',
        options: ['Palme', 'Médaille', 'Coupe', 'Étoile'],
        correctAnswer: 'Palme'
      },
      {
        id: 'L189-6', type: 'drag-drop', title: 'Révision — Narrative', characterId: 'yuki',
        instruction: 'Ordonnez la structure narrative :',
        items: ['Dénouement', 'Situation initiale', 'Péripéties', 'Élément perturbateur'],
        correctOrder: ['Situation initiale', 'Élément perturbateur', 'Péripéties', 'Dénouement']
      },
      {
        id: 'L189-7', type: 'qcm', title: 'Révision — Chanson', characterId: 'elena',
        question: '« Non, je ne regrette rien » est de :',
        options: ['Brel', 'Aznavour', 'Piaf', 'Stromae'],
        correctIndex: 2,
        explanation: 'Édith Piaf est la voix de « Non, je ne regrette rien ».'
      },
      {
        id: 'L189-8', type: 'final-quiz', title: 'Quiz récapitulatif B2.4', characterId: 'marie',
        questions: [
          { question: 'L\'Étranger est de :', options: ['Hugo', 'Camus', 'Flaubert', 'Zola'], correctIndex: 1 },
          { question: 'La « chute » d\'une nouvelle est :', options: ['Le début', 'La fin inattendue', 'Le milieu', 'Le titre'], correctIndex: 1 },
          { question: '« Il fut » (passé simple de être)', options: ['Vrai', 'Faux', 'C\'est « il fut » de faire', 'C\'est « il fut » d\'avoir'], correctIndex: 0 },
          { question: 'Papaoutai = Papa, où ___ ?', options: ['tu vas', 't\'es', 'tu fais', 'tu dors'], correctIndex: 1 },
          { question: '« Cette œuvre ___ la joie de vivre. »', options: ['mange', 'représente', 'dort', 'crie'], correctIndex: 1 },
          { question: 'Le Festival de Cannes a lieu en :', options: ['Janvier', 'Mai', 'Août', 'Décembre'], correctIndex: 1 },
          { question: '« Comme un oiseau » est une :', options: ['Métaphore', 'Comparaison', 'Hyperbole', 'Litote'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 190: Examen B2.4
  {
    courseId: 'lesson-190',
    steps: [
      {
        id: 'L190-1', type: 'lesson', title: 'Examen B2.4 — Arts et littérature', characterId: 'marie',
        content: `🏆 **Examen du module B2.4 — Arts et littérature**\n\nToutes les compétences sont testées :\n- Littérature française\n- Écriture narrative\n- Le passé simple\n- La chanson française\n- L'art contemporain\n- Le cinéma d'auteur\n- Les figures de style\n- La critique culturelle\n\n🎭 Badge à débloquer : **Critique Littéraire**\n\nBonne chance !`,
        tip: '💡 Concentrez-vous et prenez le temps de réfléchir.'
      },
      {
        id: 'L190-2', type: 'final-quiz', title: 'Examen final B2.4', characterId: 'marie',
        questions: [
          { question: 'Les Misérables sont de :', options: ['Camus', 'Hugo', 'Flaubert', 'Maupassant'], correctIndex: 1 },
          { question: 'L\'élément perturbateur d\'un récit est :', options: ['La fin', 'Le début de l\'action', 'Le résumé', 'La morale'], correctIndex: 1 },
          { question: '« Il eut » est le passé simple de :', options: ['Être', 'Avoir', 'Aller', 'Faire'], correctIndex: 1 },
          { question: 'Édith Piaf chante :', options: ['Papaoutai', 'La Vie en rose', 'Ne me quitte pas', 'La Bohème'], correctIndex: 1 },
          { question: 'Le cubisme est associé à :', options: ['Monet', 'Picasso', 'Dalí', 'Banksy'], correctIndex: 1 },
          { question: 'La Nouvelle Vague date des années :', options: ['1920', '1960', '1990', '2010'], correctIndex: 1 },
          { question: '« Il est un lion. » = :', options: ['Comparaison', 'Métaphore', 'Litote', 'Hyperbole'], correctIndex: 1 },
          { question: 'Une critique ne doit PAS :', options: ['Argumenter', 'Résumer', 'Révéler la fin', 'Recommander'], correctIndex: 2 },
          { question: '« Ce film se ___ par sa beauté. »', options: ['distingue', 'cache', 'perd', 'ennuie'], correctIndex: 0 },
          { question: 'Le refrain d\'une chanson est la partie qui :', options: ['Commence', 'Se répète', 'Finit', 'N\'existe pas'], correctIndex: 1 },
        ]
      }
    ]
  },
];
