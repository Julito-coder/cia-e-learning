// Interactive lesson content for B1 Module 1: Exprimer son opinion (Lessons 101-110)
import type { CourseContent } from './course-content';

export const b1Module1Content: CourseContent[] = [
  // Lesson 101: Je pense que…
  {
    courseId: 'lesson-101',
    steps: [
      {
        id: 'L101-1', type: 'lesson', title: 'Je pense que…', characterId: 'marie',
        characterMessage: "Vous êtes maintenant capables de comprendre des sujets plus complexes.",
        content: `Bienvenue au niveau B1 ! 🧠\n\nVous allez apprendre à **exprimer votre opinion** en français.\n\n📐 **Structures pour donner son opinion :**\n\n✅ **Indicatif** (certitude) :\n- Je pense que + indicatif\n- Je crois que + indicatif\n- Je trouve que + indicatif\n- Il me semble que + indicatif\n\n⚠️ **Subjonctif** (doute, sentiment) :\n- Je ne pense pas que + subjonctif\n- Il est possible que + subjonctif\n- Je doute que + subjonctif\n\n🔵 **Exemples :**\n- Je pense que la Côte d'Azur **est** magnifique.\n- Je ne crois pas qu'il **fasse** beau demain.\n- Il me semble que ce restaurant **a** bonne réputation.`,
        tip: '💡 Après « je pense que » affirmatif → indicatif. Après « je ne pense pas que » → subjonctif !'
      },
      {
        id: 'L101-2', type: 'listening', title: 'Écoute — Un débat entre amis', characterId: 'omar',
        characterMessage: "Tu devrais maintenant comprendre l'essentiel des conversations courantes.",
        text: 'Moi, je pense que le français est une langue difficile mais très belle. Elena n\'est pas d\'accord, elle trouve que l\'espagnol est plus mélodieux. Thomas, lui, croit que toutes les langues sont belles à leur manière.',
        question: 'Que pense Thomas ?',
        options: ['Le français est la plus belle langue', 'L\'espagnol est plus beau', 'Toutes les langues sont belles', 'Les langues ne sont pas importantes'],
        correctIndex: 2
      },
      {
        id: 'L101-3', type: 'qcm', title: 'Indicatif ou subjonctif ?', characterId: 'elena',
        characterMessage: "À ce niveau, il faut aller au-delà de la traduction.",
        question: 'Complétez : « Je ne crois pas qu\'il ___ raison. »',
        options: ['a', 'ait', 'aura', 'avait'],
        correctIndex: 1,
        explanation: 'Après « je ne crois pas que », on utilise le subjonctif : qu\'il ait.'
      },
      {
        id: 'L101-4', type: 'flashcard', title: 'Expressions d\'opinion', characterId: 'thomas',
        characterMessage: "Ces termes enrichissent considérablement ton expression.",
        cards: [
          { front: 'À mon avis…', back: 'In my opinion…' },
          { front: 'Je suis convaincu(e) que…', back: 'I am convinced that…' },
          { front: 'Il me semble que…', back: 'It seems to me that…' },
          { front: 'Je doute que… (+ subjonctif)', back: 'I doubt that…' },
          { front: 'En ce qui me concerne…', back: 'As far as I\'m concerned…' },
          { front: 'D\'après moi…', back: 'According to me…' },
        ]
      },
      {
        id: 'L101-5', type: 'fill-blank', title: 'Complétez avec la bonne expression', characterId: 'fatou',
        characterMessage: "Les phrases sont plus complexes, mais tu as les outils pour réussir.",
        sentence: '___ , la cuisine française est la meilleure du monde.',
        options: ['À mon avis', 'Je doute que', 'Il faut que', 'Bien que'],
        correctAnswer: 'À mon avis'
      },
      {
        id: 'L101-6', type: 'drag-drop', title: 'Formez une phrase d\'opinion', characterId: 'yuki',
        characterMessage: "Les structures deviennent complexes. Attention aux propositions !",
        instruction: 'Remettez les mots dans l\'ordre :',
        items: ['que', 'Je', 'est', 'ce film', 'pense', 'excellent'],
        correctOrder: ['Je', 'pense', 'que', 'ce film', 'est', 'excellent']
      },
      {
        id: 'L101-7', type: 'qcm', title: 'Nuancer son opinion', characterId: 'lucas',
        characterMessage: "Même après deux ans en France, ce point me fait parfois hésiter.",
        question: 'Quelle expression exprime un doute ?',
        options: ['Je suis sûr que…', 'Il est évident que…', 'Il est possible que…', 'Je sais que…'],
        correctIndex: 2,
        explanation: '« Il est possible que… » exprime une incertitude et est suivi du subjonctif.'
      },
      {
        id: 'L101-8', type: 'final-quiz', title: 'Quiz final — Exprimer son opinion', characterId: 'marie',
        characterMessage: "Ce quiz teste votre compréhension en profondeur. Allez-y !",
        questions: [
          { question: '« Je pense que ce livre ___ intéressant. »', options: ['est', 'soit', 'serait', 'ait été'], correctIndex: 0 },
          { question: '« Je ne crois pas qu\'elle ___ venir. »', options: ['peut', 'puisse', 'pourra', 'pouvait'], correctIndex: 1 },
          { question: 'Quelle expression introduit une opinion ?', options: ['Parce que', 'À mon avis', 'Ensuite', 'Pourtant'], correctIndex: 1 },
          { question: '« Il me semble que tu ___ fatigué. »', options: ['es', 'sois', 'seras', 'fusses'], correctIndex: 0 },
          { question: '« Il est possible qu\'il ___ demain. »', options: ['pleut', 'pleuve', 'pleuvra', 'a plu'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 102: Le subjonctif présent — Introduction
  {
    courseId: 'lesson-102',
    steps: [
      {
        id: 'L102-1', type: 'lesson', title: 'Le subjonctif présent — Introduction', characterId: 'marie',
        characterMessage: "On entre dans le vif du sujet aujourd'hui — accrochez-vous !",
        content: `Le **subjonctif** est un mode verbal qui exprime le souhait, le doute, la nécessité ou le sentiment.\n\n📐 **Formation :**\nRadical de la 3e pers. pluriel du présent + terminaisons :\n- que je **-e**\n- que tu **-es**\n- qu'il/elle **-e**\n- que nous **-ions**\n- que vous **-iez**\n- qu'ils/elles **-ent**\n\n🔵 **Exemples avec « parler » :**\n- que je parle, que tu parles, qu'il parle\n- que nous parlions, que vous parliez, qu'ils parlent\n\n⚠️ **Verbes irréguliers courants :**\n- être → que je sois, que nous soyons\n- avoir → que j'aie, que nous ayons\n- faire → que je fasse\n- pouvoir → que je puisse\n- aller → que j'aille\n- savoir → que je sache`,
        tip: '💡 Le subjonctif s\'utilise après des expressions comme « il faut que », « je veux que », « il est important que ».'
      },
      {
        id: 'L102-2', type: 'listening', title: 'Écoute — Les souhaits de Marie', characterId: 'marie',
        text: 'Pour ce semestre, il faut que vous fassiez tous vos devoirs. Je veux que vous parliez français en classe. Il est important que chacun participe. J\'aimerais que vous soyez tous présents à l\'examen.',
        question: 'Que demande Marie à ses étudiants ?',
        options: ['De parler anglais', 'De faire leurs devoirs et parler français', 'De quitter le cours', 'De passer un examen en anglais'],
        correctIndex: 1
      },
      {
        id: 'L102-3', type: 'qcm', title: 'Conjugaison au subjonctif', characterId: 'elena',
        characterMessage: "La nuance est importante — chaque option est crédible !",
        question: 'Complétez : « Il faut que tu ___ tes devoirs. »',
        options: ['fais', 'fasses', 'fera', 'fait'],
        correctIndex: 1,
        explanation: 'Après « il faut que », on utilise le subjonctif : que tu fasses.'
      },
      {
        id: 'L102-4', type: 'flashcard', title: 'Subjonctifs irréguliers', characterId: 'thomas',
        characterMessage: "Le vocabulaire avancé te permet de nuancer ta pensée en français.",
        cards: [
          { front: 'être → que je…', back: 'que je sois' },
          { front: 'avoir → que j\'…', back: 'que j\'aie' },
          { front: 'faire → que je…', back: 'que je fasse' },
          { front: 'pouvoir → que je…', back: 'que je puisse' },
          { front: 'aller → que j\'…', back: 'que j\'aille' },
          { front: 'savoir → que je…', back: 'que je sache' },
        ]
      },
      {
        id: 'L102-5', type: 'fill-blank', title: 'Complétez au subjonctif', characterId: 'fatou',
        characterMessage: "Pense aux temps verbaux — passé, présent, futur ?",
        sentence: 'Je veux que vous ___ à l\'heure demain.',
        options: ['êtes', 'soyez', 'serez', 'étiez'],
        correctAnswer: 'soyez'
      },
      {
        id: 'L102-6', type: 'drag-drop', title: 'Formez une phrase au subjonctif', characterId: 'yuki',
        characterMessage: "Cherche les connecteurs logiques pour comprendre l'enchaînement.",
        instruction: 'Remettez les mots dans l\'ordre :',
        items: ['que', 'Il', 'tu', 'faut', 'viennes'],
        correctOrder: ['Il', 'faut', 'que', 'tu', 'viennes']
      },
      {
        id: 'L102-7', type: 'qcm', title: 'Quand utiliser le subjonctif ?', characterId: 'lucas',
        characterMessage: "C'est subtil, mais une fois que tu as compris, c'est automatique.",
        question: 'Après quelle expression utilise-t-on le subjonctif ?',
        options: ['Je sais que…', 'Je crois que…', 'Il est nécessaire que…', 'Je pense que…'],
        correctIndex: 2,
        explanation: '« Il est nécessaire que… » exprime une obligation et est toujours suivi du subjonctif.'
      },
      {
        id: 'L102-8', type: 'final-quiz', title: 'Quiz final — Le subjonctif présent', characterId: 'marie',
        characterMessage: "Les questions sont plus nuancées à ce niveau. Réfléchissez bien !",
        questions: [
          { question: '« Il faut que nous ___ en français. »', options: ['parlons', 'parlions', 'parlerons', 'parlez'], correctIndex: 1 },
          { question: '« Je veux qu\'il ___ la vérité. »', options: ['dit', 'dise', 'dira', 'disait'], correctIndex: 1 },
          { question: 'Le subjonctif de « avoir » (je) est…', options: ['aie', 'ai', 'ais', 'aies'], correctIndex: 0 },
          { question: '« Il est important que vous ___ attention. »', options: ['faites', 'fassiez', 'ferez', 'faisiez'], correctIndex: 1 },
          { question: '« Je souhaite que tu ___ heureux. »', options: ['es', 'sois', 'seras', 'étais'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 103: Débattre poliment
  {
    courseId: 'lesson-103',
    steps: [
      {
        id: 'L103-1', type: 'lesson', title: 'Débattre poliment', characterId: 'marie',
        characterMessage: "Cette leçon demande un peu plus de réflexion. Je compte sur vous !",
        content: `En français, il est important de **débattre avec politesse**. Voici les formules clés :\n\n✅ **Exprimer son accord :**\n- Je suis tout à fait d'accord.\n- Effectivement, c'est vrai.\n- Vous avez raison.\n- Absolument !\n\n❌ **Exprimer son désaccord poliment :**\n- Je ne suis pas tout à fait d'accord.\n- Je comprends votre point de vue, mais…\n- Permettez-moi de nuancer…\n- C'est discutable.\n- Je vois les choses autrement.\n\n🔄 **Nuancer :**\n- D'un côté… de l'autre…\n- Certes… mais…\n- Il est vrai que… cependant…`,
        tip: '💡 En France, dire « Je ne suis pas d\'accord » directement n\'est pas impoli, mais « Permettez-moi de nuancer » est plus diplomatique.'
      },
      {
        id: 'L103-2', type: 'listening', title: 'Écoute — Un débat en classe', characterId: 'omar',
        characterMessage: "Écoute les intonations — elles donnent beaucoup d'informations.",
        text: 'Lucas dit : « Je pense que le sport est essentiel pour la santé. » Elena répond : « Je comprends ton point de vue, mais je crois que la lecture est tout aussi importante pour le bien-être. » Lucas nuance : « C\'est vrai, les deux sont complémentaires. »',
        question: 'Comment Elena exprime-t-elle son désaccord ?',
        options: ['Elle crie « Non ! »', 'Elle dit « Tu as tort »', 'Elle dit « Je comprends ton point de vue, mais… »', 'Elle ne répond pas'],
        correctIndex: 2
      },
      {
        id: 'L103-3', type: 'qcm', title: 'Accord ou désaccord ?', characterId: 'elena',
        characterMessage: "J'ai appris cette subtilité en discutant avec des Français.",
        question: 'Quelle expression exprime un désaccord poli ?',
        options: ['Absolument !', 'C\'est n\'importe quoi !', 'Je vois les choses autrement.', 'Tout à fait d\'accord.'],
        correctIndex: 2,
        explanation: '« Je vois les choses autrement » est une manière polie et élégante d\'exprimer un désaccord.'
      },
      {
        id: 'L103-4', type: 'flashcard', title: 'Formules de débat', characterId: 'thomas',
        characterMessage: "J'ai découvert ces mots en explorant les villages provençaux.",
        cards: [
          { front: 'Certes… mais…', back: 'Admittedly… but…' },
          { front: 'D\'un côté… de l\'autre…', back: 'On one hand… on the other…' },
          { front: 'Permettez-moi de nuancer', back: 'Allow me to qualify that' },
          { front: 'C\'est discutable', back: 'That\'s debatable' },
          { front: 'En revanche', back: 'On the other hand / However' },
          { front: 'Je suis de votre avis', back: 'I share your view' },
        ]
      },
      {
        id: 'L103-5', type: 'fill-blank', title: 'Complétez le débat', characterId: 'fatou',
        characterMessage: "La concordance des temps, c'est un point crucial à ce niveau.",
        sentence: 'Je comprends votre point de vue, ___ je ne suis pas tout à fait d\'accord.',
        options: ['mais', 'et', 'donc', 'parce que'],
        correctAnswer: 'mais'
      },
      {
        id: 'L103-6', type: 'drag-drop', title: 'Formez une nuance', characterId: 'yuki',
        characterMessage: "Cet exercice te prépare à écrire des textes plus élaborés.",
        instruction: 'Remettez les mots dans l\'ordre :',
        items: ['vrai', 'est', 'cependant', 'Il', 'que', ','],
        correctOrder: ['Il', 'est', 'vrai', 'que', ',', 'cependant']
      },
      {
        id: 'L103-7', type: 'qcm', title: 'Quelle réponse est polie ?', characterId: 'hans',
        characterMessage: "Le monde professionnel exige ce genre de compétence. Entraîne-toi !",
        question: 'Comment exprimer poliment un désaccord total ?',
        options: ['C\'est faux !', 'Tu dis n\'importe quoi.', 'Je respecte votre opinion, mais je ne partage pas cet avis.', 'Non, non et non !'],
        correctIndex: 2,
        explanation: 'La formule « Je respecte votre opinion, mais… » reconnaît le point de vue de l\'autre avant de le contredire.'
      },
      {
        id: 'L103-8', type: 'final-quiz', title: 'Quiz final — Débattre poliment', characterId: 'marie',
        characterMessage: "Montrez-moi que vous maîtrisez ce sujet. C'est parti !",
        questions: [
          { question: 'Quelle expression nuance une affirmation ?', options: ['Absolument', 'Certes… mais…', 'Exactement', 'Bien sûr'], correctIndex: 1 },
          { question: '« Je ___ votre point de vue, mais… »', options: ['déteste', 'comprends', 'ignore', 'refuse'], correctIndex: 1 },
          { question: 'Comment exprimer un accord total ?', options: ['C\'est discutable', 'Permettez-moi de nuancer', 'Je suis tout à fait d\'accord', 'Je vois les choses autrement'], correctIndex: 2 },
          { question: '« D\'un côté… ___ l\'autre… »', options: ['dans', 'de', 'sur', 'pour'], correctIndex: 1 },
          { question: 'Quelle expression est impolie en débat ?', options: ['Je ne partage pas cet avis', 'C\'est n\'importe quoi !', 'Permettez-moi de nuancer', 'Je vois les choses autrement'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 104: Les médias français
  {
    courseId: 'lesson-104',
    steps: [
      {
        id: 'L104-1', type: 'lesson', title: 'Les médias français', characterId: 'marie',
        characterMessage: "Vous allez adorer ce thème, il est très riche culturellement.",
        content: `Découvrons les **médias français** et apprenons à lire un article de presse.\n\n📰 **La presse écrite :**\n- Le Monde, Le Figaro, Libération (quotidiens)\n- L'Obs, Le Point, L'Express (hebdomadaires)\n- Nice-Matin (presse régionale, Côte d'Azur)\n\n📺 **La télévision :**\n- France 2, France 3 (chaînes publiques)\n- TF1, M6 (chaînes privées)\n- Arte (chaîne culturelle franco-allemande)\n\n📻 **La radio :**\n- France Inter, France Info (info)\n- NRJ, Skyrock (musique)\n\n🌐 **Les médias en ligne :**\n- Mediapart (investigation)\n- 20 Minutes (gratuit)\n- Brut (vidéo/réseaux sociaux)`,
        tip: '💡 France Info (radio et TV) donne les informations 24h/24 — c\'est parfait pour s\'entraîner à la compréhension orale !'
      },
      {
        id: 'L104-2', type: 'listening', title: 'Écoute — Un flash info', characterId: 'omar',
        characterMessage: "Dans mon restaurant, les clients parlent vite. C'est un bon entraînement !",
        text: 'Bonjour, il est huit heures sur France Info. Les titres de ce matin : le festival de jazz d\'Antibes commence ce soir avec un concert exceptionnel. La météo sera ensoleillée sur toute la Côte d\'Azur. Enfin, le marché provençal d\'Antibes est élu meilleur marché de France.',
        question: 'Quel événement commence ce soir à Antibes ?',
        options: ['Un festival de cinéma', 'Le festival de jazz', 'Un match de football', 'Une exposition d\'art'],
        correctIndex: 1
      },
      {
        id: 'L104-3', type: 'qcm', title: 'Les médias français', characterId: 'elena',
        characterMessage: "Pense au contexte avant de choisir ta réponse.",
        question: 'Quel média est une chaîne culturelle franco-allemande ?',
        options: ['TF1', 'France 2', 'Arte', 'M6'],
        correctIndex: 2,
        explanation: 'Arte est une chaîne publique franco-allemande dédiée à la culture, aux documentaires et au cinéma d\'auteur.'
      },
      {
        id: 'L104-4', type: 'flashcard', title: 'Vocabulaire des médias', characterId: 'thomas',
        characterMessage: "La langue française est un trésor. Chaque mot est une perle !",
        cards: [
          { front: 'Un quotidien', back: 'A daily newspaper' },
          { front: 'Un hebdomadaire', back: 'A weekly magazine' },
          { front: 'Un flash info', back: 'A news flash / news bulletin' },
          { front: 'Un journaliste / une journaliste', back: 'A journalist' },
          { front: 'Un article de presse', back: 'A press article' },
          { front: 'Les réseaux sociaux', back: 'Social media / Social networks' },
        ]
      },
      {
        id: 'L104-5', type: 'fill-blank', title: 'Complétez la phrase', characterId: 'fatou',
        characterMessage: "Au Sénégal, le français a ses particularités. Ici, on apprend le standard.",
        sentence: 'J\'ai lu un article intéressant dans ___ ce matin.',
        options: ['Le Monde', 'la télévision', 'la radio', 'le cinéma'],
        correctAnswer: 'Le Monde'
      },
      {
        id: 'L104-6', type: 'drag-drop', title: 'Classez les médias', characterId: 'yuki',
        characterMessage: "La syntaxe française a ses subtilités — entraîne-toi bien !",
        instruction: 'Formez la phrase correcte :',
        items: ['préfère', 'en ligne', 'Je', 'lire', 'les actualités'],
        correctOrder: ['Je', 'préfère', 'lire', 'les actualités', 'en ligne']
      },
      {
        id: 'L104-7', type: 'qcm', title: 'Presse régionale', characterId: 'hans',
        characterMessage: "Le monde professionnel exige ce genre de compétence. Entraîne-toi !",
        question: 'Quel journal couvre l\'actualité de la Côte d\'Azur ?',
        options: ['Le Monde', 'Le Figaro', 'Nice-Matin', 'Libération'],
        correctIndex: 2,
        explanation: 'Nice-Matin est le quotidien régional de référence pour la Côte d\'Azur.'
      },
      {
        id: 'L104-8', type: 'final-quiz', title: 'Quiz final — Les médias français', characterId: 'marie',
        characterMessage: "Quiz de niveau intermédiaire — je sais que vous pouvez y arriver.",
        questions: [
          { question: 'Le Monde est un…', options: ['hebdomadaire', 'quotidien', 'mensuel', 'site web uniquement'], correctIndex: 1 },
          { question: 'France Info donne des informations…', options: ['une fois par jour', '24h/24', 'une fois par semaine', 'uniquement le matin'], correctIndex: 1 },
          { question: 'Arte est une chaîne…', options: ['sportive', 'musicale', 'culturelle', 'de téléréalité'], correctIndex: 2 },
          { question: 'Un « hebdomadaire » paraît…', options: ['tous les jours', 'toutes les semaines', 'tous les mois', 'tous les ans'], correctIndex: 1 },
          { question: 'Brut est un média…', options: ['de presse papier', 'de radio', 'de vidéo en ligne', 'de télévision'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 105: Écrire un essai simple
  {
    courseId: 'lesson-105',
    steps: [
      {
        id: 'L105-1', type: 'lesson', title: 'Écrire un essai simple', characterId: 'marie',
        characterMessage: "Aujourd'hui, on travaille un point de grammaire plus avancé.",
        content: `Apprenons à structurer un **essai simple** en français (150 mots).\n\n📐 **Structure en 3 parties :**\n\n1️⃣ **Introduction** (2-3 phrases) :\n- Présenter le sujet\n- Poser la problématique\n- Annoncer le plan\n\n2️⃣ **Développement** (2 paragraphes) :\n- Argument 1 + exemple\n- Argument 2 + exemple\n- Connecteurs : de plus, en outre, par ailleurs\n\n3️⃣ **Conclusion** (2-3 phrases) :\n- Résumer les arguments\n- Donner son opinion\n- Ouvrir le débat\n\n📝 **Connecteurs essentiels :**\n- D'abord, ensuite, enfin\n- De plus, en outre, par ailleurs\n- Cependant, néanmoins, toutefois\n- En conclusion, pour conclure`,
        tip: '💡 Un bon essai = une idée par paragraphe + un exemple concret pour chaque argument.'
      },
      {
        id: 'L105-2', type: 'listening', title: 'Écoute — Un modèle d\'essai oral', characterId: 'omar',
        characterMessage: "Cherche à comprendre l'intention derrière les mots.",
        text: 'D\'abord, vivre à Antibes est agréable grâce au climat méditerranéen. Ensuite, la ville offre de nombreuses activités culturelles comme le festival de jazz. Cependant, le coût de la vie est assez élevé sur la Côte d\'Azur. En conclusion, Antibes reste une ville idéale malgré ses prix.',
        question: 'Quel est l\'inconvénient mentionné ?',
        options: ['Le manque d\'activités', 'Le mauvais temps', 'Le coût de la vie élevé', 'Le bruit'],
        correctIndex: 2
      },
      {
        id: 'L105-3', type: 'qcm', title: 'Les connecteurs', characterId: 'elena',
        characterMessage: "Le français et l'espagnol divergent sur ce point. Mémorise bien !",
        question: 'Quel connecteur introduit une opposition ?',
        options: ['De plus', 'D\'abord', 'Cependant', 'Ensuite'],
        correctIndex: 2,
        explanation: '« Cependant » introduit une idée contraire ou une nuance, c\'est un connecteur d\'opposition.'
      },
      {
        id: 'L105-4', type: 'flashcard', title: 'Connecteurs logiques', characterId: 'thomas',
        characterMessage: "Avec ce vocabulaire, tu peux tenir des conversations plus riches.",
        cards: [
          { front: 'D\'abord / Premièrement', back: 'First / Firstly' },
          { front: 'Ensuite / Puis', back: 'Then / Next' },
          { front: 'De plus / En outre', back: 'Moreover / Furthermore' },
          { front: 'Cependant / Toutefois', back: 'However / Nevertheless' },
          { front: 'En conclusion / Pour conclure', back: 'In conclusion / To conclude' },
          { front: 'Par conséquent / Donc', back: 'Consequently / Therefore' },
        ]
      },
      {
        id: 'L105-5', type: 'fill-blank', title: 'Complétez l\'essai', characterId: 'fatou',
        characterMessage: "Cet exercice teste ta maîtrise de la grammaire en contexte.",
        sentence: 'La vie à Antibes est agréable. ___, le climat est doux toute l\'année.',
        options: ['D\'abord', 'En conclusion', 'Cependant', 'Malgré'],
        correctAnswer: 'D\'abord'
      },
      {
        id: 'L105-6', type: 'drag-drop', title: 'Ordonnez les parties d\'un essai', characterId: 'yuki',
        characterMessage: "Pense au sens global avant de placer chaque mot.",
        instruction: 'Remettez dans l\'ordre logique :',
        items: ['Conclusion', 'Introduction', 'Argument 2', 'Argument 1'],
        correctOrder: ['Introduction', 'Argument 1', 'Argument 2', 'Conclusion']
      },
      {
        id: 'L105-7', type: 'qcm', title: 'Structure de l\'essai', characterId: 'lucas',
        characterMessage: "J'ai discuté de ça avec des amis français — même eux hésitent parfois !",
        question: 'Que doit-on faire dans l\'introduction d\'un essai ?',
        options: ['Donner sa conclusion', 'Présenter le sujet et la problématique', 'Citer tous les arguments', 'Raconter une histoire personnelle'],
        correctIndex: 1,
        explanation: 'L\'introduction présente le sujet, pose la problématique et annonce le plan.'
      },
      {
        id: 'L105-8', type: 'final-quiz', title: 'Quiz final — L\'essai simple', characterId: 'marie',
        characterMessage: "Prenez le temps de bien lire chaque option. Bonne chance !",
        questions: [
          { question: 'Un essai simple comporte combien de parties ?', options: ['2', '3', '4', '5'], correctIndex: 1 },
          { question: '« De plus » est un connecteur de…', options: ['opposition', 'conclusion', 'addition', 'cause'], correctIndex: 2 },
          { question: 'Que fait-on dans la conclusion ?', options: ['On ajoute des arguments', 'On résume et donne son avis', 'On pose des questions', 'On présente le sujet'], correctIndex: 1 },
          { question: '« Toutefois » est synonyme de…', options: ['ensuite', 'de plus', 'cependant', 'en conclusion'], correctIndex: 2 },
          { question: 'Combien d\'arguments minimum dans le développement ?', options: ['1', '2', '4', '5'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 106: Les pronoms relatifs : qui, que, où
  {
    courseId: 'lesson-106',
    steps: [
      {
        id: 'L106-1', type: 'lesson', title: 'Les pronoms relatifs : qui, que, où', characterId: 'marie',
        characterMessage: "Vous êtes maintenant capables de comprendre des sujets plus complexes.",
        content: `Les **pronoms relatifs** permettent de relier deux phrases en une seule.\n\n📐 **QUI** — remplace le sujet :\n- C'est Marie. Marie enseigne le français.\n→ C'est Marie **qui** enseigne le français.\n\n📐 **QUE (QU')** — remplace le COD :\n- J'ai vu le film. Tu m'as recommandé ce film.\n→ J'ai vu le film **que** tu m'as recommandé.\n\n📐 **OÙ** — remplace un lieu ou un moment :\n- Antibes est la ville. J'habite dans cette ville.\n→ Antibes est la ville **où** j'habite.\n- C'était le jour. Je suis arrivé ce jour-là.\n→ C'était le jour **où** je suis arrivé.\n\n⚠️ **Astuce :**\n- QUI + verbe (pas d'autre sujet après)\n- QUE + sujet + verbe (il y a un sujet après)`,
        tip: '💡 Pour choisir entre QUI et QUE, regardez ce qui suit : QUI + verbe, QUE + sujet + verbe.'
      },
      {
        id: 'L106-2', type: 'listening', title: 'Écoute — Antibes, la ville où je vis', characterId: 'omar',
        characterMessage: "Le français parlé est différent du français écrit. Entraîne ton oreille !",
        text: 'Antibes est la ville où je vis depuis trois ans. C\'est une ville qui est très ensoleillée. La plage que je préfère s\'appelle la Gravette. Le restaurant où nous mangeons souvent est sur le port.',
        question: 'Quel pronom relatif est utilisé pour la plage ?',
        options: ['qui', 'que', 'où', 'dont'],
        correctIndex: 1
      },
      {
        id: 'L106-3', type: 'qcm', title: 'Qui, que ou où ?', characterId: 'elena',
        characterMessage: "À ce niveau, il faut aller au-delà de la traduction.",
        question: 'Complétez : « C\'est le professeur ___ m\'a aidé. »',
        options: ['que', 'qui', 'où', 'dont'],
        correctIndex: 1,
        explanation: '« Le professeur » est sujet de « m\'a aidé » → on utilise QUI.'
      },
      {
        id: 'L106-4', type: 'flashcard', title: 'Pronoms relatifs en contexte', characterId: 'thomas',
        characterMessage: "Ces termes enrichissent considérablement ton expression.",
        cards: [
          { front: 'Le livre QUI est sur la table', back: 'The book THAT is on the table (subject)' },
          { front: 'Le livre QUE je lis', back: 'The book THAT I\'m reading (object)' },
          { front: 'La ville OÙ j\'habite', back: 'The city WHERE I live (place)' },
          { front: 'Le jour OÙ je suis arrivé', back: 'The day WHEN I arrived (time)' },
          { front: 'La fille QUI parle', back: 'The girl WHO is speaking' },
          { front: 'Le gâteau QUE tu as fait', back: 'The cake THAT you made' },
        ]
      },
      {
        id: 'L106-5', type: 'fill-blank', title: 'Complétez avec le bon pronom', characterId: 'fatou',
        characterMessage: "Les phrases sont plus complexes, mais tu as les outils pour réussir.",
        sentence: 'Voici le musée ___ nous avons visité hier.',
        options: ['qui', 'que', 'où', 'dont'],
        correctAnswer: 'que'
      },
      {
        id: 'L106-6', type: 'drag-drop', title: 'Reliez les deux phrases', characterId: 'yuki',
        characterMessage: "Les structures deviennent complexes. Attention aux propositions !",
        instruction: 'Formez une seule phrase :',
        items: ['la ville', 'est', 'où', 'j\'étudie', 'Antibes'],
        correctOrder: ['Antibes', 'est', 'la ville', 'où', 'j\'étudie']
      },
      {
        id: 'L106-7', type: 'qcm', title: 'Application', characterId: 'lucas',
        characterMessage: "La nuance est importante ici. Réfléchis au contexte.",
        question: '« La personne ___ j\'ai rencontrée est très gentille. »',
        options: ['qui', 'que', 'où', 'dont'],
        correctIndex: 1,
        explanation: '« La personne » est COD de « j\'ai rencontrée » → on utilise QUE.'
      },
      {
        id: 'L106-8', type: 'final-quiz', title: 'Quiz final — Pronoms relatifs', characterId: 'marie',
        characterMessage: "Ce quiz teste votre compréhension en profondeur. Allez-y !",
        questions: [
          { question: '« L\'homme ___ parle est mon voisin. »', options: ['que', 'qui', 'où', 'dont'], correctIndex: 1 },
          { question: '« Le film ___ j\'ai vu était super. »', options: ['qui', 'que', 'où', 'dont'], correctIndex: 1 },
          { question: '« La rue ___ j\'habite est calme. »', options: ['qui', 'que', 'où', 'dont'], correctIndex: 2 },
          { question: '« C\'est l\'école ___ enseigne Marie. »', options: ['que', 'qui', 'où', 'dont'], correctIndex: 2 },
          { question: '« Les amis ___ je vois souvent sont sympathiques. »', options: ['qui', 'que', 'où', 'dont'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 107: La presse et les fake news
  {
    courseId: 'lesson-107',
    steps: [
      {
        id: 'L107-1', type: 'lesson', title: 'La presse et les fake news', characterId: 'marie',
        characterMessage: "On entre dans le vif du sujet aujourd'hui — accrochez-vous !",
        content: `Apprenons à **identifier les fausses informations** et à analyser un article.\n\n🔍 **Comment reconnaître une fake news ?**\n\n1️⃣ **Vérifier la source :**\n- Qui a écrit l'article ? Un journaliste professionnel ?\n- Le site est-il connu et fiable ?\n\n2️⃣ **Croiser les sources :**\n- L'info est-elle reprise par d'autres médias ?\n- Les faits sont-ils vérifiables ?\n\n3️⃣ **Analyser le ton :**\n- Le titre est-il sensationnel ?\n- L'article joue-t-il sur les émotions ?\n\n4️⃣ **Vérifier les images :**\n- Les photos correspondent-elles à l'article ?\n- Sont-elles récentes ?\n\n📝 **Vocabulaire utile :**\n- Une source fiable / douteuse\n- Vérifier / confirmer / démentir\n- Un titre racoleur\n- La désinformation`,
        tip: '💡 En France, des sites comme « Les Décodeurs » (Le Monde) ou « CheckNews » (Libération) vérifient les informations.'
      },
      {
        id: 'L107-2', type: 'listening', title: 'Écoute — Vrai ou faux ?', characterId: 'omar',
        characterMessage: "Tu devrais maintenant comprendre l'essentiel des conversations courantes.",
        text: 'Attention aux fausses informations sur les réseaux sociaux ! Avant de partager un article, vérifiez toujours la source. Cherchez l\'auteur, vérifiez si d\'autres médias parlent du même sujet, et méfiez-vous des titres trop sensationnels.',
        question: 'Que faut-il faire avant de partager un article ?',
        options: ['Le partager rapidement', 'Vérifier la source', 'Regarder les commentaires', 'Changer le titre'],
        correctIndex: 1
      },
      {
        id: 'L107-3', type: 'qcm', title: 'Reconnaître les fake news', characterId: 'elena',
        characterMessage: "La nuance est importante — chaque option est crédible !",
        question: 'Quel indice peut révéler une fake news ?',
        options: ['Un article avec des sources citées', 'Un titre très sensationnel', 'Un article signé par un journaliste', 'Des informations vérifiées par d\'autres médias'],
        correctIndex: 1,
        explanation: 'Les titres sensationnels qui jouent sur les émotions sont souvent un signe de désinformation.'
      },
      {
        id: 'L107-4', type: 'flashcard', title: 'Vocabulaire de l\'information', characterId: 'thomas',
        characterMessage: "Le vocabulaire avancé te permet de nuancer ta pensée en français.",
        cards: [
          { front: 'Une fake news / infox', back: 'Fake news / Misinformation' },
          { front: 'Une source fiable', back: 'A reliable source' },
          { front: 'Croiser les sources', back: 'To cross-reference sources' },
          { front: 'Un titre racoleur', back: 'A clickbait headline' },
          { front: 'Démentir une information', back: 'To deny / debunk information' },
          { front: 'La désinformation', back: 'Disinformation / Misinformation' },
        ]
      },
      {
        id: 'L107-5', type: 'fill-blank', title: 'Complétez la phrase', characterId: 'fatou',
        characterMessage: "Pense aux temps verbaux — passé, présent, futur ?",
        sentence: 'Il faut toujours ___ les sources avant de partager un article.',
        options: ['ignorer', 'vérifier', 'supprimer', 'copier'],
        correctAnswer: 'vérifier'
      },
      {
        id: 'L107-6', type: 'drag-drop', title: 'Les étapes de vérification', characterId: 'yuki',
        characterMessage: "Cherche les connecteurs logiques pour comprendre l'enchaînement.",
        instruction: 'Remettez les étapes dans l\'ordre logique :',
        items: ['Partager l\'article', 'Vérifier la source', 'Lire l\'article', 'Croiser avec d\'autres médias'],
        correctOrder: ['Lire l\'article', 'Vérifier la source', 'Croiser avec d\'autres médias', 'Partager l\'article']
      },
      {
        id: 'L107-7', type: 'qcm', title: 'Vocabulaire', characterId: 'hans',
        characterMessage: "Le monde professionnel exige ce genre de compétence. Entraîne-toi !",
        question: 'Comment dit-on « fake news » en français officiel ?',
        options: ['Fausse nouvelle', 'Infox', 'Mensonge', 'Rumeur'],
        correctIndex: 1,
        explanation: '« Infox » est le terme officiel français recommandé pour « fake news » (mot-valise de info + intox).'
      },
      {
        id: 'L107-8', type: 'final-quiz', title: 'Quiz final — Fake news', characterId: 'marie',
        characterMessage: "Les questions sont plus nuancées à ce niveau. Réfléchissez bien !",
        questions: [
          { question: 'Un « titre racoleur » cherche à…', options: ['informer objectivement', 'attirer l\'attention par l\'émotion', 'résumer les faits', 'citer les sources'], correctIndex: 1 },
          { question: 'Que signifie « croiser les sources » ?', options: ['Supprimer les sources', 'Comparer plusieurs sources', 'Inventer des sources', 'Ignorer les sources'], correctIndex: 1 },
          { question: 'Le terme officiel français pour fake news est…', options: ['mensonge', 'rumeur', 'infox', 'canular'], correctIndex: 2 },
          { question: 'Quel site français vérifie les informations ?', options: ['Netflix', 'Les Décodeurs', 'Spotify', 'Wikipedia'], correctIndex: 1 },
          { question: '« Démentir » signifie…', options: ['confirmer', 'nier / contredire', 'partager', 'écrire'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 108: Exprimer la cause et la conséquence
  {
    courseId: 'lesson-108',
    steps: [
      {
        id: 'L108-1', type: 'lesson', title: 'Exprimer la cause et la conséquence', characterId: 'marie',
        characterMessage: "Cette leçon demande un peu plus de réflexion. Je compte sur vous !",
        content: `Apprenons à exprimer **la cause** et **la conséquence** en français.\n\n🔵 **La cause (pourquoi ?) :**\n- **Parce que** + phrase → Il reste chez lui parce qu'il pleut.\n- **Car** (plus formel) → Il est absent, car il est malade.\n- **Grâce à** + nom (cause positive) → Grâce au soleil, nous sommes allés à la plage.\n- **À cause de** + nom (cause négative) → À cause de la pluie, le match est annulé.\n- **Puisque** (cause connue) → Puisque tu es fatigué, repose-toi.\n- **Comme** (en début de phrase) → Comme il fait beau, sortons !\n\n🟢 **La conséquence (quel résultat ?) :**\n- **Donc** → Il pleut, donc je prends un parapluie.\n- **C'est pourquoi** → Il est malade, c'est pourquoi il est absent.\n- **Par conséquent** (formel) → Le train est annulé, par conséquent nous prendrons le bus.\n- **Alors** → Tu es prêt ? Alors, allons-y !`,
        tip: '💡 « Grâce à » = cause positive, « à cause de » = cause négative. Ne les confondez pas !'
      },
      {
        id: 'L108-2', type: 'listening', title: 'Écoute — Cause et conséquence', characterId: 'lucas',
        characterMessage: "L'écoute est plus rapide maintenant. Reste attentif aux détails !",
        text: 'Comme il faisait très beau hier, nous sommes allés à la plage à Antibes. Grâce au beau temps, nous avons pu nous baigner. Cependant, à cause du vent, l\'eau était un peu froide. Donc, nous ne sommes pas restés longtemps dans l\'eau.',
        question: 'Pourquoi l\'eau était-elle froide ?',
        options: ['À cause de la pluie', 'À cause du vent', 'Grâce au soleil', 'Parce que c\'était l\'hiver'],
        correctIndex: 1
      },
      {
        id: 'L108-3', type: 'qcm', title: 'Cause positive ou négative ?', characterId: 'elena',
        characterMessage: "J'ai appris cette subtilité en discutant avec des Français.",
        question: 'Complétez : « ___ ton aide, j\'ai réussi mon examen. »',
        options: ['À cause de', 'Grâce à', 'Malgré', 'Donc'],
        correctIndex: 1,
        explanation: '« Grâce à » exprime une cause positive. L\'aide a permis de réussir → c\'est positif.'
      },
      {
        id: 'L108-4', type: 'flashcard', title: 'Cause et conséquence', characterId: 'thomas',
        characterMessage: "J'ai découvert ces mots en explorant les villages provençaux.",
        cards: [
          { front: 'Parce que (+ phrase)', back: 'Because (most common)' },
          { front: 'Grâce à (+ nom, positif)', back: 'Thanks to' },
          { front: 'À cause de (+ nom, négatif)', back: 'Because of (negative)' },
          { front: 'Donc', back: 'Therefore / So' },
          { front: 'C\'est pourquoi', back: 'That is why' },
          { front: 'Par conséquent', back: 'Consequently (formal)' },
        ]
      },
      {
        id: 'L108-5', type: 'fill-blank', title: 'Complétez la phrase', characterId: 'fatou',
        characterMessage: "La concordance des temps, c'est un point crucial à ce niveau.",
        sentence: 'Le concert est annulé ___ la pluie.',
        options: ['grâce à', 'à cause de', 'donc', 'parce que'],
        correctAnswer: 'à cause de'
      },
      {
        id: 'L108-6', type: 'drag-drop', title: 'Formez une phrase de conséquence', characterId: 'yuki',
        characterMessage: "Cet exercice te prépare à écrire des textes plus élaborés.",
        instruction: 'Remettez les mots dans l\'ordre :',
        items: ['donc', 'Il pleut', 'un parapluie', ',', 'je prends'],
        correctOrder: ['Il pleut', ',', 'donc', 'je prends', 'un parapluie']
      },
      {
        id: 'L108-7', type: 'qcm', title: 'Différence entre cause et conséquence', characterId: 'hans',
        characterMessage: "Le monde professionnel exige ce genre de compétence. Entraîne-toi !",
        question: '« C\'est pourquoi » exprime…',
        options: ['une cause', 'une conséquence', 'une opposition', 'un but'],
        correctIndex: 1,
        explanation: '« C\'est pourquoi » introduit la conséquence d\'une situation présentée avant.'
      },
      {
        id: 'L108-8', type: 'final-quiz', title: 'Quiz final — Cause et conséquence', characterId: 'marie',
        characterMessage: "Montrez-moi que vous maîtrisez ce sujet. C'est parti !",
        questions: [
          { question: '« ___ il est malade, il ne vient pas. »', options: ['Donc', 'Comme', 'C\'est pourquoi', 'Par conséquent'], correctIndex: 1 },
          { question: '« J\'ai réussi ___ mon travail. »', options: ['à cause de', 'grâce à', 'malgré', 'sans'], correctIndex: 1 },
          { question: '« Il pleut, ___ je reste chez moi. »', options: ['parce que', 'car', 'donc', 'grâce à'], correctIndex: 2 },
          { question: '« ___ de l\'orage, le vol est retardé. »', options: ['Grâce', 'À cause', 'Donc', 'Puisque'], correctIndex: 1 },
          { question: '« Puisque » exprime une cause…', options: ['inconnue', 'connue de tous', 'douteuse', 'future'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 109: Révision B1.1
  {
    courseId: 'lesson-109',
    steps: [
      {
        id: 'L109-1', type: 'lesson', title: 'Révision B1.1 — Ce que nous avons appris', characterId: 'marie',
        characterMessage: "Vous allez adorer ce thème, il est très riche culturellement.",
        content: `Révisons les points clés du module B1.1 ! 📚\n\n🧠 **Opinion :** Je pense que / À mon avis / Il me semble que\n\n📐 **Subjonctif :** Il faut que + subjonctif (que je fasse, que tu sois…)\n\n🗣️ **Débat :** Certes… mais / Permettez-moi de nuancer / Je vois les choses autrement\n\n📰 **Médias :** Quotidien, hebdomadaire, source fiable, infox\n\n📝 **Essai :** Introduction → Développement → Conclusion + connecteurs\n\n🔗 **Pronoms relatifs :** qui (sujet), que (COD), où (lieu/temps)\n\n🔄 **Cause/conséquence :** Parce que, grâce à, à cause de / donc, c'est pourquoi`,
        tip: '💡 Ce quiz de révision couvre tous les thèmes du module. Bonne chance !'
      },
      {
        id: 'L109-2', type: 'qcm', title: 'Révision — Subjonctif', characterId: 'elena',
        characterMessage: "Pense au contexte avant de choisir ta réponse.",
        question: '« Je veux que tu ___ attention. »',
        options: ['fais', 'fasses', 'fera', 'faisais'],
        correctIndex: 1,
        explanation: 'Après « je veux que » → subjonctif : que tu fasses.'
      },
      {
        id: 'L109-3', type: 'fill-blank', title: 'Révision — Pronoms relatifs', characterId: 'fatou',
        characterMessage: "Au Sénégal, le français a ses particularités. Ici, on apprend le standard.",
        sentence: 'La ville ___ j\'habite est magnifique.',
        options: ['qui', 'que', 'où', 'dont'],
        correctAnswer: 'où'
      },
      {
        id: 'L109-4', type: 'qcm', title: 'Révision — Cause', characterId: 'lucas',
        characterMessage: "En portugais, c'est différent. Il faut penser « à la française » !",
        question: '« ___ de la tempête, l\'école est fermée. »',
        options: ['Grâce', 'À cause', 'Donc', 'Puisque'],
        correctIndex: 1,
        explanation: 'Une tempête est une cause négative → « à cause de ».'
      },
      {
        id: 'L109-5', type: 'drag-drop', title: 'Révision — Formez un argument', characterId: 'yuki',
        characterMessage: "La syntaxe française a ses subtilités — entraîne-toi bien !",
        instruction: 'Remettez dans l\'ordre :',
        items: ['est', 'c\'est pourquoi', 'Il', 'absent', ',', 'malade'],
        correctOrder: ['Il', 'est', 'malade', ',', 'c\'est pourquoi', 'absent']
      },
      {
        id: 'L109-6', type: 'qcm', title: 'Révision — Débat', characterId: 'hans',
        characterMessage: "Le monde professionnel exige ce genre de compétence. Entraîne-toi !",
        question: 'Comment exprimer un désaccord poli ?',
        options: ['C\'est faux !', 'Je comprends votre point de vue, mais…', 'Non, pas du tout !', 'Vous avez tort.'],
        correctIndex: 1,
        explanation: '« Je comprends votre point de vue, mais… » reconnaît l\'avis de l\'autre avant de le nuancer.'
      },
      {
        id: 'L109-7', type: 'fill-blank', title: 'Révision — Connecteurs', characterId: 'fatou',
        characterMessage: "Cet exercice teste ta maîtrise de la grammaire en contexte.",
        sentence: 'D\'abord, la Côte d\'Azur est belle. ___, les gens sont accueillants.',
        options: ['Cependant', 'De plus', 'Malgré', 'À cause de'],
        correctAnswer: 'De plus'
      },
      {
        id: 'L109-8', type: 'final-quiz', title: 'Quiz de révision B1.1', characterId: 'marie',
        characterMessage: "Quiz de niveau intermédiaire — je sais que vous pouvez y arriver.",
        questions: [
          { question: '« Il faut que nous ___ en cours. »', options: ['allons', 'allions', 'irons', 'allaient'], correctIndex: 1 },
          { question: '« Le professeur ___ parle est Mme Dubois. »', options: ['que', 'qui', 'où', 'dont'], correctIndex: 1 },
          { question: '« ___ à ton aide, j\'ai compris. »', options: ['À cause de', 'Grâce', 'Malgré', 'Sans'], correctIndex: 1 },
          { question: '« Cependant » exprime…', options: ['une cause', 'une conséquence', 'une opposition', 'un but'], correctIndex: 2 },
          { question: 'Le terme français pour « fake news » est…', options: ['canular', 'infox', 'blague', 'erreur'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 110: Examen B1.1
  {
    courseId: 'lesson-110',
    steps: [
      {
        id: 'L110-1', type: 'lesson', title: 'Examen B1.1 — Penseur Critique 🧠', characterId: 'marie',
        characterMessage: "Aujourd'hui, on travaille un point de grammaire plus avancé.",
        content: `Bienvenue à l'examen du module B1.1 !\n\n🎯 **Ce que vous devez maîtriser :**\n- Exprimer son opinion avec nuance\n- Utiliser le subjonctif présent\n- Débattre poliment\n- Comprendre les médias français\n- Structurer un essai simple\n- Utiliser les pronoms relatifs (qui, que, où)\n- Exprimer la cause et la conséquence\n\n⏱️ Cet examen comporte 8 questions.\n\nBonne chance ! 🍀`,
        tip: '💡 Lisez chaque question attentivement. Prenez votre temps !'
      },
      {
        id: 'L110-2', type: 'qcm', title: 'Examen — Question 1', characterId: 'marie',
        question: '« Je ne pense pas qu\'il ___ capable de le faire. »',
        options: ['est', 'soit', 'sera', 'était'],
        correctIndex: 1,
        explanation: 'Après « je ne pense pas que » → subjonctif.'
      },
      {
        id: 'L110-3', type: 'fill-blank', title: 'Examen — Question 2', characterId: 'marie',
        sentence: 'Le restaurant ___ nous avons dîné était excellent.',
        options: ['qui', 'que', 'où', 'dont'],
        correctAnswer: 'où'
      },
      {
        id: 'L110-4', type: 'qcm', title: 'Examen — Question 3', characterId: 'marie',
        question: '« ___ il fait froid, prends ton manteau. »',
        options: ['Donc', 'Puisque', 'C\'est pourquoi', 'Par conséquent'],
        correctIndex: 1,
        explanation: '« Puisque » introduit une cause évidente en début de phrase.'
      },
      {
        id: 'L110-5', type: 'fill-blank', title: 'Examen — Question 4', characterId: 'marie',
        sentence: 'Il est important que vous ___ vos devoirs.',
        options: ['faites', 'fassiez', 'ferez', 'faisiez'],
        correctAnswer: 'fassiez'
      },
      {
        id: 'L110-6', type: 'qcm', title: 'Examen — Question 5', characterId: 'marie',
        question: 'Quel connecteur introduit une opposition ?',
        options: ['De plus', 'Ensuite', 'Néanmoins', 'D\'abord'],
        correctIndex: 2,
        explanation: '« Néanmoins » (= cependant, toutefois) introduit une idée opposée.'
      },
      {
        id: 'L110-7', type: 'drag-drop', title: 'Examen — Question 6', characterId: 'marie',
        instruction: 'Formez une phrase avec un pronom relatif :',
        items: ['que', 'Le livre', 'est passionnant', 'je lis'],
        correctOrder: ['Le livre', 'que', 'je lis', 'est passionnant']
      },
      {
        id: 'L110-8', type: 'final-quiz', title: 'Examen final B1.1 — Badge Penseur Critique', characterId: 'marie',
        characterMessage: "Prenez le temps de bien lire chaque option. Bonne chance !",
        questions: [
          { question: '« Certes… mais… » sert à…', options: ['s\'opposer totalement', 'nuancer un propos', 'exprimer la cause', 'conclure'], correctIndex: 1 },
          { question: '« Il est ___ que tu viennes. » (nécessité)', options: ['sûr', 'nécessaire', 'évident', 'clair'], correctIndex: 1 },
          { question: '« ___ au beau temps, la fête a été réussie. »', options: ['À cause du', 'Grâce', 'Malgré le', 'Sans le'], correctIndex: 1 },
          { question: '« Arte » est une chaîne…', options: ['sportive', 'musicale', 'culturelle franco-allemande', 'américaine'], correctIndex: 2 },
          { question: '« L\'homme ___ j\'ai parlé est mon professeur. »', options: ['qui', 'que', 'où', 'à qui'], correctIndex: 3 },
        ]
      }
    ]
  },
];
