// Interactive lesson content for A2 Module 2: La vie sociale (Lessons 61-70)
import type { CourseContent } from './course-content';

export const a2Module2Content: CourseContent[] = [
  // Lesson 61: On sort ce soir ?
  {
    courseId: 'lesson-61',
    steps: [
      {
        id: 'L61-1', type: 'lesson', title: 'On sort ce soir ?', characterId: 'marie',
        content: `Apprenons à **proposer, accepter et refuser** une sortie ! 🎉\n\n📝 **Proposer :**\n- On va au cinéma ce soir ?\n- Tu veux venir au restaurant ?\n- Ça te dit d'aller à la plage ?\n- Si on allait au marché ?\n\n✅ **Accepter :**\n- Oui, avec plaisir !\n- Bonne idée ! / Super !\n- D'accord, pourquoi pas ?\n- Ça me dit bien !\n\n❌ **Refuser poliment :**\n- Désolé(e), je ne peux pas.\n- Merci, mais j'ai déjà quelque chose.\n- C'est gentil, mais je suis fatigué(e).\n- Peut-être une autre fois ?`,
        tip: '💡 « Ça te dit ? » est une expression très courante pour proposer quelque chose de manière informelle.'
      },
      {
        id: 'L61-2', type: 'listening', title: 'Écoute — Invitation', characterId: 'lucas',
        text: 'Salut Yuki ! Ça te dit d\'aller au restaurant ce soir ? Il y a un super restaurant de poissons sur le port d\'Antibes. Oui, avec plaisir ! On se retrouve à quelle heure ? À vingt heures, devant le restaurant. D\'accord, à ce soir !',
        question: 'Où veulent-ils aller ?',
        options: ['Au cinéma', 'Au restaurant', 'À la plage', 'Au musée'],
        correctIndex: 1
      },
      {
        id: 'L61-3', type: 'qcm', title: 'Proposer une sortie', characterId: 'elena',
        question: 'Quelle phrase sert à PROPOSER ?',
        options: ['Désolé, je ne peux pas.', 'Avec plaisir !', 'Ça te dit d\'aller au cinéma ?', 'Merci beaucoup.'],
        correctIndex: 2,
        explanation: '« Ça te dit de… ? » est une formule pour proposer une activité.'
      },
      {
        id: 'L61-4', type: 'flashcard', title: 'Expressions sociales', characterId: 'thomas',
        cards: [
          { front: 'Ça te dit ?', back: 'Do you feel like it? / How about it?' },
          { front: 'Avec plaisir !', back: 'With pleasure!' },
          { front: 'Bonne idée !', back: 'Good idea!' },
          { front: 'Désolé(e), je ne peux pas.', back: 'Sorry, I can\'t.' },
          { front: 'Peut-être une autre fois.', back: 'Maybe another time.' },
          { front: 'On se retrouve à…', back: 'Let\'s meet at…' },
        ]
      },
      {
        id: 'L61-5', type: 'fill-blank', title: 'Complétez le dialogue', characterId: 'fatou',
        sentence: '— Tu veux aller au cinéma ? — Oui, ___ !',
        options: ['désolé', 'avec plaisir', 'je ne peux pas', 'peut-être'],
        correctAnswer: 'avec plaisir'
      },
      {
        id: 'L61-6', type: 'drag-drop', title: 'Ordonnez le dialogue', characterId: 'yuki',
        instruction: 'Remettez ce dialogue dans l\'ordre :',
        items: ['D\'accord, à ce soir !', 'Ça te dit d\'aller au restaurant ?', 'À vingt heures.', 'Oui, avec plaisir ! À quelle heure ?'],
        correctOrder: ['Ça te dit d\'aller au restaurant ?', 'Oui, avec plaisir ! À quelle heure ?', 'À vingt heures.', 'D\'accord, à ce soir !']
      },
      {
        id: 'L61-7', type: 'qcm', title: 'Refuser poliment', characterId: 'omar',
        question: 'Quelle est une façon POLIE de refuser ?',
        options: ['Non !', 'Pas question !', 'C\'est gentil, mais je suis fatigué(e).', 'Jamais !'],
        correctIndex: 2,
        explanation: 'En français, on refuse poliment avec « C\'est gentil, mais… » ou « Désolé(e), je ne peux pas. »'
      },
      {
        id: 'L61-8', type: 'final-quiz', title: 'Quiz final — Invitations', characterId: 'marie',
        questions: [
          { question: '« ___ d\'aller à la plage ? » (proposer)', options: ['Merci', 'Ça te dit', 'Désolé', 'Au revoir'], correctIndex: 1 },
          { question: 'Pour accepter, on dit…', options: ['Non merci', 'Avec plaisir !', 'Je ne peux pas', 'Peut-être'], correctIndex: 1 },
          { question: '« Désolé, ___ » est un refus.', options: ['avec plaisir', 'bonne idée', 'je ne peux pas', 'super'], correctIndex: 2 },
          { question: '« On ___ retrouve à quelle heure ? »', options: ['nous', 'se', 'te', 'me'], correctIndex: 1 },
          { question: '« ___ une autre fois ? » (refus poli)', options: ['Jamais', 'Peut-être', 'Toujours', 'Souvent'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 62: Qu'est-ce que tu en penses ?
  {
    courseId: 'lesson-62',
    steps: [
      {
        id: 'L62-1', type: 'lesson', title: 'Qu\'est-ce que tu en penses ?', characterId: 'marie',
        content: `Apprenons à **donner une opinion** en français ! 💭\n\n📝 **Demander une opinion :**\n- Qu'est-ce que tu en penses ?\n- Tu trouves ça comment ?\n- Quel est ton avis ?\n\n👍 **Donner une opinion positive :**\n- Je trouve que c'est bien / génial / intéressant.\n- À mon avis, c'est super.\n- Je pense que c'est une bonne idée.\n\n👎 **Donner une opinion négative :**\n- Je ne trouve pas ça bien.\n- À mon avis, ce n'est pas terrible.\n- Je pense que c'est ennuyeux.\n\n🤷 **Être neutre :**\n- Je ne sais pas trop.\n- Ça dépend.\n- Bof… (indifférence)`,
        tip: '💡 « Je trouve que… » et « Je pense que… » sont suivis de l\'indicatif en français.'
      },
      {
        id: 'L62-2', type: 'listening', title: 'Écoute — Au café', characterId: 'elena',
        text: 'Qu\'est-ce que tu penses du nouveau restaurant sur le port ? Je trouve que c\'est très bon, mais un peu cher. Et toi ? À mon avis, la pizza était excellente. Je pense qu\'on devrait y retourner !',
        question: 'Que pense la première personne du restaurant ?',
        options: ['C\'est mauvais', 'C\'est bon mais cher', 'C\'est pas cher', 'C\'est ennuyeux'],
        correctIndex: 1
      },
      {
        id: 'L62-3', type: 'qcm', title: 'Expression d\'opinion', characterId: 'lucas',
        question: 'Complétez : « ___ mon avis, c\'est un bon film. »',
        options: ['Dans', 'À', 'Pour', 'En'],
        correctIndex: 1,
        explanation: 'L\'expression est « À mon avis » = "In my opinion".'
      },
      {
        id: 'L62-4', type: 'flashcard', title: 'Donner son opinion', characterId: 'thomas',
        cards: [
          { front: 'Je pense que…', back: 'I think that…' },
          { front: 'À mon avis…', back: 'In my opinion…' },
          { front: 'Je trouve que…', back: 'I find that…' },
          { front: 'Ça dépend.', back: 'It depends.' },
          { front: 'C\'est génial !', back: 'It\'s great!' },
          { front: 'Ce n\'est pas terrible.', back: 'It\'s not great. / It\'s so-so.' },
        ]
      },
      {
        id: 'L62-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        sentence: 'Je ___ que ce film est très intéressant.',
        options: ['vais', 'trouve', 'fais', 'veux'],
        correctAnswer: 'trouve'
      },
      {
        id: 'L62-6', type: 'drag-drop', title: 'Formez une opinion', characterId: 'yuki',
        instruction: 'Construisez une phrase d\'opinion :',
        items: ['que', 'pense', 'bonne idée', 'Je', 'c\'est', 'une'],
        correctOrder: ['Je', 'pense', 'que', 'c\'est', 'une', 'bonne idée']
      },
      {
        id: 'L62-7', type: 'qcm', title: 'Registre', characterId: 'omar',
        question: '« Bof… » exprime…',
        options: ['L\'enthousiasme', 'L\'indifférence', 'La colère', 'La surprise'],
        correctIndex: 1,
        explanation: '« Bof » est une interjection familière qui exprime l\'indifférence ou le manque d\'intérêt.'
      },
      {
        id: 'L62-8', type: 'final-quiz', title: 'Quiz final — Opinions', characterId: 'marie',
        questions: [
          { question: '« ___ mon avis, c\'est trop cher. »', options: ['En', 'À', 'Dans', 'Pour'], correctIndex: 1 },
          { question: 'Pour demander un avis : « Qu\'est-ce que tu ___ ? »', options: ['fais', 'en penses', 'veux', 'dis'], correctIndex: 1 },
          { question: '« Je ___ que c\'est bien. »', options: ['vais', 'trouve', 'fais', 'sais'], correctIndex: 1 },
          { question: '« Bof » exprime…', options: ['La joie', 'L\'indifférence', 'La peur', 'La tristesse'], correctIndex: 1 },
          { question: '« Ce n\'est pas ___ » = It\'s not great.', options: ['bon', 'terrible', 'beau', 'vrai'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 63: Les émotions
  {
    courseId: 'lesson-63',
    steps: [
      {
        id: 'L63-1', type: 'lesson', title: 'Les émotions', characterId: 'marie',
        content: `Apprenons le vocabulaire des **émotions** ! 😊😢😡\n\n😊 **Positif :**\n- Content(e) / Heureux(se) → Happy\n- Ravi(e) → Delighted\n- Excité(e) → Excited\n- Fier / Fière → Proud\n\n😢 **Négatif :**\n- Triste → Sad\n- Déçu(e) → Disappointed\n- Inquiet / Inquiète → Worried\n- En colère → Angry\n\n😮 **Autres :**\n- Surpris(e) → Surprised\n- Fatigué(e) → Tired\n- Stressé(e) → Stressed\n- Jaloux / Jalouse → Jealous\n\n📐 **Structure :**\n- Je suis + adjectif → Je suis content(e)\n- Il/Elle est + adjectif → Elle est triste\n- Ça me rend + adjectif → Ça me rend heureux`,
        tip: '💡 N\'oubliez pas l\'accord : « il est content » mais « elle est contente » (ajoutez -e au féminin).'
      },
      {
        id: 'L63-2', type: 'listening', title: 'Écoute — Comment tu te sens ?', characterId: 'omar',
        text: 'Aujourd\'hui, je suis très content parce que j\'ai réussi mon examen de français ! Mais ma copine est un peu triste parce qu\'elle a raté le sien. Je suis aussi un peu fatigué après toutes ces révisions.',
        question: 'Pourquoi est-il content ?',
        options: ['Il a trouvé un travail', 'Il a réussi son examen', 'Il part en vacances', 'C\'est son anniversaire'],
        correctIndex: 1
      },
      {
        id: 'L63-3', type: 'qcm', title: 'Vocabulaire des émotions', characterId: 'elena',
        question: 'Comment dit-on "worried" en français ?',
        options: ['Fatigué', 'Stressé', 'Inquiet', 'Surpris'],
        correctIndex: 2,
        explanation: '« Inquiet » (masculin) / « Inquiète » (féminin) = worried.'
      },
      {
        id: 'L63-4', type: 'flashcard', title: 'Les émotions', characterId: 'thomas',
        cards: [
          { front: 'Content(e)', back: 'Happy / Glad' },
          { front: 'Triste', back: 'Sad' },
          { front: 'En colère', back: 'Angry' },
          { front: 'Surpris(e)', back: 'Surprised' },
          { front: 'Fatigué(e)', back: 'Tired' },
          { front: 'Déçu(e)', back: 'Disappointed' },
          { front: 'Fier / Fière', back: 'Proud' },
        ]
      },
      {
        id: 'L63-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        sentence: 'Elle est ___ parce qu\'elle a raté son examen.',
        options: ['contente', 'triste', 'fière', 'ravie'],
        correctAnswer: 'triste'
      },
      {
        id: 'L63-6', type: 'drag-drop', title: 'Associez', characterId: 'yuki',
        instruction: 'Formez une phrase avec une émotion :',
        items: ['suis', 'parce que', 'Je', 'content', 'c\'est les vacances'],
        correctOrder: ['Je', 'suis', 'content', 'parce que', 'c\'est les vacances']
      },
      {
        id: 'L63-7', type: 'qcm', title: 'Accord', characterId: 'lucas',
        question: '« Marie est ___ de son résultat. » (fier)',
        options: ['fier', 'fière', 'fiers', 'fières'],
        correctIndex: 1,
        explanation: 'Marie est féminin, donc : fière (avec un -e et un accent grave).'
      },
      {
        id: 'L63-8', type: 'final-quiz', title: 'Quiz final — Les émotions', characterId: 'marie',
        questions: [
          { question: '« Happy » en français = …', options: ['Triste', 'Content', 'Surpris', 'Fatigué'], correctIndex: 1 },
          { question: '« En ___ » = Angry', options: ['colère', 'retard', 'avance', 'forme'], correctIndex: 0 },
          { question: '« Elle est ___ » (surprised, fém.)', options: ['surpris', 'surprise', 'surprises', 'surprit'], correctIndex: 1 },
          { question: '« Ça me ___ triste. »', options: ['fait', 'rend', 'donne', 'prend'], correctIndex: 1 },
          { question: '« Disappointed » = …', options: ['Inquiet', 'Déçu', 'Stressé', 'Jaloux'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 64: Comparer
  {
    courseId: 'lesson-64',
    steps: [
      {
        id: 'L64-1', type: 'lesson', title: 'Comparer', characterId: 'marie',
        content: `Apprenons à **comparer** en français ! ⚖️\n\n📐 **Le comparatif :**\n\n🔼 **Supériorité :** plus + adjectif + que\n- Paris est **plus grand que** Nice.\n- Ce film est **plus intéressant que** l'autre.\n\n🔽 **Infériorité :** moins + adjectif + que\n- Antibes est **moins grand que** Paris.\n- Ce livre est **moins ennuyeux que** le premier.\n\n🟰 **Égalité :** aussi + adjectif + que\n- Marie est **aussi grande que** Sophie.\n- Ce café est **aussi bon que** l'autre.\n\n⚠️ **Irrégulier :**\n- bon → **meilleur** (pas « plus bon »)\n- bien → **mieux** (pas « plus bien »)\n- mauvais → **pire** (ou « plus mauvais »)`,
        tip: '💡 Ne dites JAMAIS « plus bon » ! Le comparatif de « bon » est toujours « meilleur ».'
      },
      {
        id: 'L64-2', type: 'listening', title: 'Écoute — Comparer les villes', characterId: 'lucas',
        text: 'Antibes est plus petite que Nice, mais elle est aussi belle. La plage d\'Antibes est meilleure que celle de Cannes, à mon avis. Et le marché d\'Antibes est moins cher que celui de Nice.',
        question: 'Selon lui, quelle plage est meilleure ?',
        options: ['Celle de Nice', 'Celle de Cannes', 'Celle d\'Antibes', 'Celle de Marseille'],
        correctIndex: 2
      },
      {
        id: 'L64-3', type: 'qcm', title: 'Le comparatif', characterId: 'elena',
        question: 'Complétez : « Ce restaurant est ___ que l\'autre. » (= better)',
        options: ['plus bon', 'meilleur', 'moins bon', 'aussi bon'],
        correctIndex: 1,
        explanation: '« Bon » a un comparatif irrégulier : meilleur (pas « plus bon »).'
      },
      {
        id: 'L64-4', type: 'flashcard', title: 'Le comparatif', characterId: 'thomas',
        cards: [
          { front: 'plus + adj + que', back: 'more … than (supériorité)' },
          { front: 'moins + adj + que', back: 'less … than (infériorité)' },
          { front: 'aussi + adj + que', back: 'as … as (égalité)' },
          { front: 'bon → ?', back: 'meilleur (not « plus bon »)' },
          { front: 'bien → ?', back: 'mieux (not « plus bien »)' },
          { front: 'mauvais → ?', back: 'pire (or « plus mauvais »)' },
        ]
      },
      {
        id: 'L64-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        sentence: 'Antibes est ___ grande que Paris.',
        options: ['plus', 'moins', 'aussi', 'meilleure'],
        correctAnswer: 'moins'
      },
      {
        id: 'L64-6', type: 'drag-drop', title: 'Formez une comparaison', characterId: 'yuki',
        instruction: 'Construisez une phrase comparative :',
        items: ['est', 'que', 'Marie', 'grande', 'plus', 'Sophie'],
        correctOrder: ['Marie', 'est', 'plus', 'grande', 'que', 'Sophie']
      },
      {
        id: 'L64-7', type: 'qcm', title: 'Irrégulier', characterId: 'omar',
        question: '« Il parle ___ que moi. » (= better)',
        options: ['plus bien', 'mieux', 'meilleur', 'plus bon'],
        correctIndex: 1,
        explanation: '« Bien » → « mieux ». « Meilleur » est pour « bon », « mieux » est pour « bien ».'
      },
      {
        id: 'L64-8', type: 'final-quiz', title: 'Quiz final — Le comparatif', characterId: 'marie',
        questions: [
          { question: '« Nice est ___ grande que Paris. »', options: ['plus', 'moins', 'aussi', 'meilleure'], correctIndex: 1 },
          { question: '« Ce gâteau est ___ que l\'autre. » (better)', options: ['plus bon', 'meilleur', 'mieux', 'aussi bon'], correctIndex: 1 },
          { question: '« Elle est ___ intelligente ___ son frère. »', options: ['plus / que', 'plus / de', 'aussi / comme', 'moins / à'], correctIndex: 0 },
          { question: '« Bien » → comparatif = …', options: ['plus bien', 'meilleur', 'mieux', 'pire'], correctIndex: 2 },
          { question: '« Aussi + adj + ___ »', options: ['de', 'que', 'à', 'en'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 65: Le superlatif
  {
    courseId: 'lesson-65',
    steps: [
      {
        id: 'L65-1', type: 'lesson', title: 'Le superlatif', characterId: 'marie',
        content: `Le **superlatif** exprime le degré le plus élevé ! 🏆\n\n📐 **Formation :**\n\n🔼 **Superlatif de supériorité :**\nle/la/les + plus + adjectif\n- Paris est **la plus grande** ville de France.\n- C'est **le plus beau** paysage.\n\n🔽 **Superlatif d'infériorité :**\nle/la/les + moins + adjectif\n- C'est **le moins cher** des hôtels.\n\n⚠️ **Irréguliers :**\n- bon → **le meilleur / la meilleure**\n- mauvais → **le pire / la pire**\n\n📍 **Exemples à Antibes :**\n- La socca est **la meilleure** spécialité !\n- Le Fort Carré est **le plus ancien** monument.\n- C'est **le plus bel** endroit de la Côte d'Azur.`,
        tip: '💡 Attention à la place de l\'adjectif ! « le plus beau paysage » (avant le nom) mais « la ville la plus grande » (après le nom).'
      },
      {
        id: 'L65-2', type: 'listening', title: 'Écoute — Les records', characterId: 'omar',
        text: 'Antibes est l\'une des plus belles villes de la Côte d\'Azur. Le marché provençal est le plus coloré de la région. Et la socca ? C\'est la meilleure spécialité ! Le Cap d\'Antibes est l\'endroit le plus chic.',
        question: 'Quel est l\'endroit le plus chic ?',
        options: ['Le vieux port', 'Le marché', 'Le Cap d\'Antibes', 'Le Fort Carré'],
        correctIndex: 2
      },
      {
        id: 'L65-3', type: 'qcm', title: 'Le superlatif', characterId: 'elena',
        question: '« C\'est ___ restaurant de la ville. » (the best)',
        options: ['le plus bon', 'le meilleur', 'le mieux', 'le bon'],
        correctIndex: 1,
        explanation: '« Bon » → superlatif = « le meilleur » (pas « le plus bon »).'
      },
      {
        id: 'L65-4', type: 'flashcard', title: 'Le superlatif', characterId: 'thomas',
        cards: [
          { front: 'le/la plus + adj', back: 'the most + adj (superlative)' },
          { front: 'le/la moins + adj', back: 'the least + adj' },
          { front: 'bon → le meilleur', back: 'good → the best' },
          { front: 'mauvais → le pire', back: 'bad → the worst' },
          { front: 'le plus beau', back: 'the most beautiful' },
        ]
      },
      {
        id: 'L65-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        sentence: 'C\'est la ville ___ belle de France.',
        options: ['la plus', 'le plus', 'la moins', 'plus'],
        correctAnswer: 'la plus'
      },
      {
        id: 'L65-6', type: 'drag-drop', title: 'Formez un superlatif', characterId: 'yuki',
        instruction: 'Construisez une phrase superlative :',
        items: ['est', 'C\'', 'restaurant', 'le meilleur', 'd\'Antibes'],
        correctOrder: ['C\'', 'est', 'le meilleur', 'restaurant', 'd\'Antibes']
      },
      {
        id: 'L65-7', type: 'qcm', title: 'Place de l\'adjectif', characterId: 'lucas',
        question: 'Quelle phrase est correcte ?',
        options: ['La plus grande ville', 'La grande plus ville', 'La ville grande plus', 'Plus la grande ville'],
        correctIndex: 0,
        explanation: 'Avec les adjectifs courts (grand, beau, bon…), le superlatif se place AVANT le nom.'
      },
      {
        id: 'L65-8', type: 'final-quiz', title: 'Quiz final — Le superlatif', characterId: 'marie',
        questions: [
          { question: '« C\'est ___ film de l\'année. » (the best)', options: ['le plus bon', 'le meilleur', 'le mieux', 'le bon'], correctIndex: 1 },
          { question: '« Paris est la ville ___ de France. »', options: ['la plus grande', 'le plus grand', 'plus grande', 'la grande'], correctIndex: 0 },
          { question: '« C\'est l\'hôtel ___ cher. »', options: ['le plus', 'la plus', 'le moins', 'les plus'], correctIndex: 2 },
          { question: '« Mauvais » → superlatif = …', options: ['le plus mauvais', 'le pire', 'le moins bon', 'Les trois sont possibles'], correctIndex: 3 },
          { question: '« C\'est ___ endroit de la Côte d\'Azur. »', options: ['le plus bel', 'le plus beau', 'la plus belle', 'le bel plus'], correctIndex: 0 },
        ]
      }
    ]
  },

  // Lesson 66: Raconter un film
  {
    courseId: 'lesson-66',
    steps: [
      {
        id: 'L66-1', type: 'lesson', title: 'Raconter un film', characterId: 'marie',
        content: `Apprenons à **résumer un film** en français ! 🎬\n\n📝 **Structure d'un résumé :**\n1. Le titre et le genre\n2. L'histoire (au présent ou au passé)\n3. Les personnages principaux\n4. Votre opinion\n\n🎥 **Vocabulaire :**\n- Une comédie / un drame / un thriller\n- Un film d'action / d'horreur / romantique\n- Le personnage principal / le héros\n- L'histoire se passe à… / en…\n- Le film raconte l'histoire de…\n- À la fin, le héros…\n\n💬 **Donner son avis :**\n- J'ai adoré / J'ai détesté\n- C'est un film émouvant / drôle / ennuyeux\n- Je recommande ce film !`,
        tip: '💡 Pour résumer un film, on peut utiliser le présent de narration : « Le héros arrive à Paris et rencontre une femme mystérieuse… »'
      },
      {
        id: 'L66-2', type: 'listening', title: 'Écoute — Résumé de film', characterId: 'lucas',
        text: 'J\'ai vu le film « Intouchables ». C\'est une comédie dramatique. L\'histoire raconte l\'amitié entre un riche homme paralysé et son aide-soignant. C\'est un film très émouvant et drôle. Je le recommande !',
        question: 'Quel est le genre du film ?',
        options: ['Un thriller', 'Un film d\'horreur', 'Une comédie dramatique', 'Un film d\'action'],
        correctIndex: 2
      },
      {
        id: 'L66-3', type: 'qcm', title: 'Vocabulaire du cinéma', characterId: 'elena',
        question: 'Un film qui fait rire est…',
        options: ['Un drame', 'Une comédie', 'Un thriller', 'Un documentaire'],
        correctIndex: 1,
        explanation: 'Une comédie est un film dont l\'objectif principal est de faire rire.'
      },
      {
        id: 'L66-4', type: 'flashcard', title: 'Genres de films', characterId: 'thomas',
        cards: [
          { front: 'Une comédie', back: 'A comedy' },
          { front: 'Un drame', back: 'A drama' },
          { front: 'Un film d\'action', back: 'An action movie' },
          { front: 'Un film d\'horreur', back: 'A horror movie' },
          { front: 'Un film romantique', back: 'A romantic movie' },
          { front: 'Un documentaire', back: 'A documentary' },
        ]
      },
      {
        id: 'L66-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        sentence: 'L\'histoire ___ passe à Paris dans les années 1960.',
        options: ['se', 'a', 'en', 'est'],
        correctAnswer: 'se'
      },
      {
        id: 'L66-6', type: 'drag-drop', title: 'Structure d\'un résumé', characterId: 'yuki',
        instruction: 'Ordonnez les éléments d\'un résumé de film :',
        items: ['Mon opinion : j\'ai adoré !', 'Le titre : « Amélie »', 'L\'histoire : une jeune femme aide les gens.', 'Le genre : une comédie romantique.'],
        correctOrder: ['Le titre : « Amélie »', 'Le genre : une comédie romantique.', 'L\'histoire : une jeune femme aide les gens.', 'Mon opinion : j\'ai adoré !']
      },
      {
        id: 'L66-7', type: 'qcm', title: 'Expression', characterId: 'omar',
        question: '« Émouvant » signifie…',
        options: ['Funny', 'Moving / Touching', 'Boring', 'Scary'],
        correctIndex: 1,
        explanation: '« Émouvant » = moving, touching — un film qui provoque des émotions.'
      },
      {
        id: 'L66-8', type: 'final-quiz', title: 'Quiz final — Raconter un film', characterId: 'marie',
        questions: [
          { question: '« Un film qui fait peur » est…', options: ['Une comédie', 'Un drame', 'Un film d\'horreur', 'Un documentaire'], correctIndex: 2 },
          { question: '« L\'histoire ___ passe à Nice. »', options: ['a', 'se', 'en', 'est'], correctIndex: 1 },
          { question: '« J\'ai ___ ce film. » (loved it)', options: ['adoré', 'détesté', 'trouvé', 'regardé'], correctIndex: 0 },
          { question: '« Intouchables » est…', options: ['Un thriller', 'Une comédie dramatique', 'Un film d\'horreur', 'Un western'], correctIndex: 1 },
          { question: '« Je ___ ce film ! » (recommend)', options: ['recommande', 'regarde', 'déteste', 'oublie'], correctIndex: 0 },
        ]
      }
    ]
  },

  // Lesson 67: Écrire un avis en ligne
  {
    courseId: 'lesson-67',
    steps: [
      {
        id: 'L67-1', type: 'lesson', title: 'Écrire un avis en ligne', characterId: 'marie',
        content: `Apprenons à **rédiger un avis** sur un restaurant ou un hôtel ! ⭐\n\n📝 **Structure d'un avis :**\n1. **Contexte** : Quand ? Avec qui ?\n2. **Positif** : Ce que vous avez aimé\n3. **Négatif** : Ce que vous n'avez pas aimé\n4. **Recommandation** : Note et conclusion\n\n✅ **Expressions positives :**\n- Le service était excellent.\n- La nourriture était délicieuse.\n- L'ambiance était agréable.\n- Le personnel était accueillant.\n\n❌ **Expressions négatives :**\n- L'attente était trop longue.\n- C'était un peu cher.\n- La chambre n'était pas propre.\n\n⭐ **Conclusion :**\n- Je recommande cet endroit !\n- Je n'y retournerai pas.\n- 4 étoiles sur 5.`,
        tip: '💡 Un bon avis est équilibré : mentionnez les points positifs ET négatifs.'
      },
      {
        id: 'L67-2', type: 'listening', title: 'Écoute — Avis restaurant', characterId: 'elena',
        text: 'Nous avons dîné dans ce restaurant samedi soir. La nourriture était excellente, surtout le poisson. Le service était rapide et le personnel était très sympa. Par contre, c\'était un peu bruyant. Je recommande quand même ! Quatre étoiles sur cinq.',
        question: 'Quel était le point négatif ?',
        options: ['La nourriture', 'Le service', 'Le bruit', 'Le prix'],
        correctIndex: 2
      },
      {
        id: 'L67-3', type: 'qcm', title: 'Vocabulaire des avis', characterId: 'lucas',
        question: '« Accueillant » signifie…',
        options: ['Expensive', 'Welcoming', 'Noisy', 'Clean'],
        correctIndex: 1,
        explanation: '« Accueillant » = welcoming, friendly — un endroit ou une personne qui vous fait sentir bienvenu(e).'
      },
      {
        id: 'L67-4', type: 'flashcard', title: 'Avis et critiques', characterId: 'thomas',
        cards: [
          { front: 'Le service était excellent.', back: 'The service was excellent.' },
          { front: 'La nourriture était délicieuse.', back: 'The food was delicious.' },
          { front: 'C\'était un peu cher.', back: 'It was a bit expensive.' },
          { front: 'L\'ambiance était agréable.', back: 'The atmosphere was pleasant.' },
          { front: 'Je recommande !', back: 'I recommend it!' },
          { front: 'Par contre…', back: 'On the other hand… / However…' },
        ]
      },
      {
        id: 'L67-5', type: 'fill-blank', title: 'Complétez l\'avis', characterId: 'fatou',
        sentence: 'La chambre était propre, ___ le petit déjeuner n\'était pas bon.',
        options: ['et', 'par contre', 'aussi', 'donc'],
        correctAnswer: 'par contre'
      },
      {
        id: 'L67-6', type: 'drag-drop', title: 'Structure d\'un avis', characterId: 'yuki',
        instruction: 'Ordonnez cet avis :',
        items: ['Je recommande ! 4/5.', 'Nous avons dîné samedi.', 'Par contre, c\'était cher.', 'La nourriture était excellente.'],
        correctOrder: ['Nous avons dîné samedi.', 'La nourriture était excellente.', 'Par contre, c\'était cher.', 'Je recommande ! 4/5.']
      },
      {
        id: 'L67-7', type: 'qcm', title: 'Expression', characterId: 'omar',
        question: '« Par contre » introduit…',
        options: ['Un point positif', 'Un point négatif / contraste', 'Une conclusion', 'Un exemple'],
        correctIndex: 1,
        explanation: '« Par contre » introduit un contraste ou un point négatif après un point positif.'
      },
      {
        id: 'L67-8', type: 'final-quiz', title: 'Quiz final — Écrire un avis', characterId: 'marie',
        questions: [
          { question: '« Le personnel ___ accueillant. »', options: ['a été', 'était', 'sera', 'est'], correctIndex: 1 },
          { question: '« ___ » introduit un contraste.', options: ['Et', 'Aussi', 'Par contre', 'Donc'], correctIndex: 2 },
          { question: '« Délicieux » signifie…', options: ['Disgusting', 'Expensive', 'Delicious', 'Boring'], correctIndex: 2 },
          { question: 'Un avis complet a des points…', options: ['Seulement positifs', 'Seulement négatifs', 'Positifs et négatifs', 'Neutres'], correctIndex: 2 },
          { question: '« Je ___ cet endroit ! »', options: ['recommande', 'déteste', 'oublie', 'quitte'], correctIndex: 0 },
        ]
      }
    ]
  },

  // Lesson 68: Les pronoms COD
  {
    courseId: 'lesson-68',
    steps: [
      {
        id: 'L68-1', type: 'lesson', title: 'Les pronoms COD', characterId: 'marie',
        content: `Les **pronoms COD** (Complément d'Objet Direct) remplacent un nom déjà mentionné. 🔄\n\n📐 **Les pronoms COD :**\n- **me** (m') → me\n- **te** (t') → you (informal)\n- **le** (l') → him / it (masc.)\n- **la** (l') → her / it (fem.)\n- **nous** → us\n- **vous** → you (formal/plural)\n- **les** → them\n\n📍 **Position :** AVANT le verbe\n- Tu aimes **le chocolat** ? → Tu **l'**aimes ?\n- Je regarde **le film**. → Je **le** regarde.\n- Elle connaît **Marie**. → Elle **la** connaît.\n\n⚠️ **Au passé composé :** avant l'auxiliaire\n- J'ai vu **le film**. → Je **l'**ai vu.\n- Elle a lu **les livres**. → Elle **les** a lus.`,
        tip: '💡 Le pronom COD se place toujours AVANT le verbe conjugué (ou l\'auxiliaire au passé composé).'
      },
      {
        id: 'L68-2', type: 'listening', title: 'Écoute — Conversation', characterId: 'omar',
        text: 'Tu as vu le nouveau film de Luc Besson ? Oui, je l\'ai vu hier. Et la bande-annonce du prochain ? Non, je ne l\'ai pas encore regardée. Tu devrais la regarder, elle est super !',
        question: 'A-t-il vu la bande-annonce ?',
        options: ['Oui, il l\'a vue', 'Non, pas encore', 'Oui, deux fois', 'Il ne sait pas'],
        correctIndex: 1
      },
      {
        id: 'L68-3', type: 'qcm', title: 'Pronom COD', characterId: 'elena',
        question: '« Je mange la pizza. » → « Je ___ mange. »',
        options: ['le', 'la', 'les', 'lui'],
        correctIndex: 1,
        explanation: '« La pizza » est féminin singulier, on utilise « la » : je la mange.'
      },
      {
        id: 'L68-4', type: 'flashcard', title: 'Les pronoms COD', characterId: 'thomas',
        cards: [
          { front: 'me / m\'', back: 'me (Il me regarde.)' },
          { front: 'te / t\'', back: 'you — informal (Je te connais.)' },
          { front: 'le / l\'', back: 'him / it masc. (Je le vois.)' },
          { front: 'la / l\'', back: 'her / it fem. (Je la connais.)' },
          { front: 'nous', back: 'us (Il nous attend.)' },
          { front: 'les', back: 'them (Je les adore.)' },
        ]
      },
      {
        id: 'L68-5', type: 'fill-blank', title: 'Remplacez par un pronom', characterId: 'fatou',
        sentence: 'Tu connais Marie ? — Oui, je ___ connais bien.',
        options: ['le', 'la', 'les', 'lui'],
        correctAnswer: 'la'
      },
      {
        id: 'L68-6', type: 'drag-drop', title: 'Ordre des mots', characterId: 'yuki',
        instruction: 'Remettez dans l\'ordre avec le pronom COD :',
        items: ['ai', 'Je', 'vu', 'l\''],
        correctOrder: ['Je', 'l\'', 'ai', 'vu']
      },
      {
        id: 'L68-7', type: 'qcm', title: 'Au passé composé', characterId: 'lucas',
        question: '« J\'ai acheté les fleurs. » → « Je ___ ai achetées. »',
        options: ['le', 'la', 'les', 'lui'],
        correctIndex: 2,
        explanation: '« Les fleurs » = féminin pluriel → pronom « les ». Au PC avec avoir, le participe s\'accorde avec le COD placé avant.'
      },
      {
        id: 'L68-8', type: 'final-quiz', title: 'Quiz final — Pronoms COD', characterId: 'marie',
        questions: [
          { question: '« Je regarde le film. » → « Je ___ regarde. »', options: ['le', 'la', 'les', 'lui'], correctIndex: 0 },
          { question: '« Elle aime les chats. » → « Elle ___ aime. »', options: ['le', 'la', 'les', 'leur'], correctIndex: 2 },
          { question: 'Le pronom COD se place…', options: ['Après le verbe', 'Avant le verbe', 'Après le sujet', 'À la fin'], correctIndex: 1 },
          { question: '« Tu ___ connais ? » (Marie)', options: ['le', 'la', 'les', 'lui'], correctIndex: 1 },
          { question: '« Je l\'ai ___ hier. » (voir)', options: ['vu', 'vus', 'vue', 'voir'], correctIndex: 0 },
        ]
      }
    ]
  },

  // Lesson 69: Révision A2.2
  {
    courseId: 'lesson-69',
    steps: [
      {
        id: 'L69-1', type: 'lesson', title: 'Révision — La vie sociale', characterId: 'marie',
        content: `📚 **Révision du Module A2.2** — La vie sociale\n\n✅ **Proposer / Accepter / Refuser :**\nÇa te dit ? — Avec plaisir ! — Désolé, je ne peux pas.\n\n✅ **Donner une opinion :**\nJe pense que… / À mon avis… / Je trouve que…\n\n✅ **Les émotions :**\nContent, triste, en colère, surpris, fatigué, déçu…\n\n✅ **Le comparatif :**\nPlus… que / Moins… que / Aussi… que\nBon → meilleur / Bien → mieux\n\n✅ **Le superlatif :**\nLe/la plus + adj / Le meilleur / Le pire\n\n✅ **Raconter un film et écrire un avis**\n\n✅ **Les pronoms COD :**\nme, te, le, la, nous, vous, les (avant le verbe)`,
        tip: '💡 Révisez bien les comparatifs irréguliers : bon → meilleur, bien → mieux !'
      },
      {
        id: 'L69-2', type: 'qcm', title: 'Révision — Invitation', characterId: 'lucas',
        question: '« Ça te ___ d\'aller au cinéma ? »',
        options: ['fait', 'dit', 'va', 'prend'],
        correctIndex: 1,
        explanation: '« Ça te dit de… ? » = Do you feel like…?'
      },
      {
        id: 'L69-3', type: 'fill-blank', title: 'Révision — Comparatif', characterId: 'fatou',
        sentence: 'Ce restaurant est ___ que l\'autre. (better)',
        options: ['plus bon', 'meilleur', 'mieux', 'le meilleur'],
        correctAnswer: 'meilleur'
      },
      {
        id: 'L69-4', type: 'qcm', title: 'Révision — Émotions', characterId: 'elena',
        question: '« Disappointed » en français = …',
        options: ['Surpris', 'Déçu', 'Inquiet', 'Fatigué'],
        correctIndex: 1,
        explanation: 'Déçu(e) = disappointed.'
      },
      {
        id: 'L69-5', type: 'drag-drop', title: 'Révision — Pronom COD', characterId: 'yuki',
        instruction: 'Remettez dans l\'ordre :',
        items: ['la', 'connais', 'Je', 'bien'],
        correctOrder: ['Je', 'la', 'connais', 'bien']
      },
      {
        id: 'L69-6', type: 'fill-blank', title: 'Révision — Opinion', characterId: 'omar',
        sentence: '___ mon avis, ce film est excellent.',
        options: ['En', 'À', 'Pour', 'Dans'],
        correctAnswer: 'À'
      },
      {
        id: 'L69-7', type: 'qcm', title: 'Révision — Superlatif', characterId: 'lucas',
        question: '« C\'est ___ film de l\'année. » (the best)',
        options: ['le plus bon', 'le meilleur', 'le mieux', 'le bon'],
        correctIndex: 1,
        explanation: 'Bon → le meilleur (superlatif).'
      },
      {
        id: 'L69-8', type: 'final-quiz', title: 'Quiz de révision A2.2', characterId: 'marie',
        questions: [
          { question: 'Pour proposer : « ___ te dit ? »', options: ['Ça', 'Ce', 'Il', 'On'], correctIndex: 0 },
          { question: '« Par contre » introduit…', options: ['Un accord', 'Un contraste', 'Une conclusion', 'Un exemple'], correctIndex: 1 },
          { question: '« Angry » = …', options: ['Triste', 'En colère', 'Surpris', 'Fatigué'], correctIndex: 1 },
          { question: '« Bien » → comparatif = …', options: ['Plus bien', 'Meilleur', 'Mieux', 'Le mieux'], correctIndex: 2 },
          { question: '« Je ___ ai vus hier. » (les films)', options: ['le', 'la', 'les', 'lui'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 70: Examen A2.2
  {
    courseId: 'lesson-70',
    steps: [
      {
        id: 'L70-1', type: 'lesson', title: 'Examen Module A2.2 — La vie sociale', characterId: 'marie',
        content: `🎓 **Examen du Module A2.2**\n\nVous allez passer l'examen final du module « La vie sociale ».\n\n📋 **Ce qui sera évalué :**\n- Proposer / Accepter / Refuser\n- Donner une opinion\n- Les émotions\n- Le comparatif et le superlatif\n- Raconter un film / Écrire un avis\n- Les pronoms COD\n\n💪 Bonne chance ! Badge « Social Butterfly » 🦋 à débloquer !`,
        tip: '💡 Lisez attentivement chaque question. Vous avez toutes les connaissances nécessaires !'
      },
      {
        id: 'L70-2', type: 'qcm', title: 'Examen Q1', characterId: 'marie',
        question: '« ___ de sortir ce soir ? »',
        options: ['Ça te dit', 'Tu fais', 'Il va', 'Nous avons'],
        correctIndex: 0,
        explanation: '« Ça te dit de… ? » est la formule pour proposer une sortie.'
      },
      {
        id: 'L70-3', type: 'fill-blank', title: 'Examen Q2', characterId: 'marie',
        sentence: 'Elle est ___ parce qu\'elle a raté son examen.',
        options: ['contente', 'déçue', 'fière', 'ravie'],
        correctAnswer: 'déçue'
      },
      {
        id: 'L70-4', type: 'qcm', title: 'Examen Q3', characterId: 'marie',
        question: '« Nice est ___ que Cannes. » (bigger)',
        options: ['plus grande', 'moins grande', 'aussi grande', 'la plus grande'],
        correctIndex: 0,
        explanation: 'Plus grande que = bigger than (comparatif de supériorité).'
      },
      {
        id: 'L70-5', type: 'drag-drop', title: 'Examen Q4', characterId: 'marie',
        instruction: 'Ordonnez cet avis de restaurant :',
        items: ['Je recommande ! 5/5.', 'Nous avons dîné hier soir.', 'Par contre, c\'était bruyant.', 'La nourriture était délicieuse.'],
        correctOrder: ['Nous avons dîné hier soir.', 'La nourriture était délicieuse.', 'Par contre, c\'était bruyant.', 'Je recommande ! 5/5.']
      },
      {
        id: 'L70-6', type: 'fill-blank', title: 'Examen Q5', characterId: 'marie',
        sentence: 'Tu connais ce film ? — Oui, je ___ ai vu hier.',
        options: ['le', 'la', 'l\'', 'les'],
        correctAnswer: 'l\''
      },
      {
        id: 'L70-7', type: 'qcm', title: 'Examen Q6', characterId: 'marie',
        question: '« C\'est ___ restaurant de la ville. » (the best)',
        options: ['le plus bon', 'le meilleur', 'le mieux', 'plus bon'],
        correctIndex: 1,
        explanation: 'Bon → le meilleur (superlatif irrégulier).'
      },
      {
        id: 'L70-8', type: 'final-quiz', title: 'Examen final A2.2', characterId: 'marie',
        questions: [
          { question: '« Je ___ que c\'est intéressant. »', options: ['vais', 'trouve', 'fais', 'sais'], correctIndex: 1 },
          { question: '« Avec plaisir ! » est pour…', options: ['Refuser', 'Proposer', 'Accepter', 'Demander'], correctIndex: 2 },
          { question: '« Il chante ___ que moi. »', options: ['plus bien', 'mieux', 'meilleur', 'plus bon'], correctIndex: 1 },
          { question: '« Worried » = …', options: ['Triste', 'Inquiet', 'En colère', 'Surpris'], correctIndex: 1 },
          { question: '« Elle ___ connaît. » (Marie / les amis)', options: ['le', 'la', 'les', 'lui'], correctIndex: 2 },
        ]
      }
    ]
  },
];
