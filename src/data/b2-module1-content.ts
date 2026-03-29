// Interactive lesson content for B2 Module 1: Argumenter et convaincre (Lessons 151-160)
import type { CourseContent } from './course-content';

export const b2Module1Content: CourseContent[] = [
  // Lesson 151: Structurer un argument
  {
    courseId: 'lesson-151',
    steps: [
      {
        id: 'L151-1', type: 'lesson', title: 'Structurer un argument', characterId: 'marie',
        characterMessage: "À ce niveau, vous maîtrisez déjà beaucoup. Allons plus loin ensemble.",
        content: `Bienvenue au niveau B2 ! 🎤\n\nVous allez apprendre à **argumenter de façon structurée** en français.\n\n📐 **Structure classique d'une argumentation :**\n\n1️⃣ **Thèse** — Votre position\n2️⃣ **Arguments** — Vos raisons (avec exemples)\n3️⃣ **Antithèse** — Le point de vue opposé\n4️⃣ **Synthèse** — Votre conclusion nuancée\n\n🔗 **Connecteurs avancés :**\n- **Addition :** de surcroît, en outre, qui plus est, par ailleurs\n- **Opposition :** néanmoins, toutefois, en revanche, cependant\n- **Cause :** étant donné que, dans la mesure où, puisque\n- **Conséquence :** de ce fait, par conséquent, c'est pourquoi, si bien que\n- **Concession :** certes… mais, bien que (+ subj.), quoique\n\n💡 **Exemple :**\nCertes, le tourisme de masse **apporte** des revenus à Antibes. **Toutefois**, il **engendre** également des problèmes environnementaux. **C'est pourquoi** un tourisme plus durable **serait** souhaitable.`,
        tip: '💡 Un bon argument repose sur trois piliers : une affirmation, une justification et un exemple concret.'
      },
      {
        id: 'L151-2', type: 'listening', title: 'Écoute — Un éditorial radio', characterId: 'omar',
        characterMessage: "À ce niveau, tu peux suivre des conversations rapides et nuancées.",
        text: 'De nos jours, le télétravail se généralise. Certes, il offre une grande flexibilité aux employés. Néanmoins, il peut engendrer un sentiment d\'isolement. Par conséquent, de nombreuses entreprises adoptent un modèle hybride, combinant présence au bureau et travail à distance.',
        question: 'Quelle solution les entreprises adoptent-elles ?',
        options: ['Le télétravail à 100%', 'Le retour au bureau obligatoire', 'Un modèle hybride', 'La suppression du télétravail'],
        correctIndex: 2
      },
      {
        id: 'L151-3', type: 'qcm', title: 'Choisir le bon connecteur', characterId: 'elena',
        characterMessage: "Question subtile ! Même moi, j'ai dû réfléchir longtemps.",
        question: 'Complétez : « ___ le coût soit élevé, ce projet est indispensable. »',
        options: ['Puisque', 'Bien que', 'Parce que', 'Étant donné que'],
        correctIndex: 1,
        explanation: '« Bien que » exprime la concession et est suivi du subjonctif : « Bien que le coût soit élevé… »'
      },
      {
        id: 'L151-4', type: 'flashcard', title: 'Connecteurs logiques avancés', characterId: 'thomas',
        characterMessage: "Ce vocabulaire te rapproche du niveau d'un francophone cultivé.",
        cards: [
          { front: 'De surcroît', back: 'Furthermore / Moreover' },
          { front: 'Néanmoins', back: 'Nevertheless' },
          { front: 'Étant donné que', back: 'Given that' },
          { front: 'Par conséquent', back: 'Consequently' },
          { front: 'En revanche', back: 'On the other hand' },
          { front: 'C\'est pourquoi', back: 'That is why' },
        ]
      },
      {
        id: 'L151-5', type: 'fill-blank', title: 'Complétez l\'argumentation', characterId: 'fatou',
        characterMessage: "À ce niveau, les choix sont tous plausibles. La nuance fait la différence.",
        sentence: 'Le tourisme est vital pour l\'économie. ___, il faut limiter ses effets négatifs sur l\'environnement.',
        options: ['Toutefois', 'Puisque', 'De surcroît', 'Grâce à'],
        correctAnswer: 'Toutefois'
      },
      {
        id: 'L151-6', type: 'drag-drop', title: 'Construisez un argument', characterId: 'yuki',
        characterMessage: "Ces phrases complexes reflètent le français écrit authentique.",
        instruction: 'Remettez les éléments dans l\'ordre logique :',
        items: ['C\'est pourquoi il faut agir', 'Certes, les progrès existent', 'mais ils restent insuffisants'],
        correctOrder: ['Certes, les progrès existent', 'mais ils restent insuffisants', 'C\'est pourquoi il faut agir']
      },
      {
        id: 'L151-7', type: 'qcm', title: 'Identifier la concession', characterId: 'lucas',
        characterMessage: "À ce niveau, les pièges sont plus subtils. Reste vigilant !",
        question: 'Quelle phrase exprime une concession ?',
        options: ['Je suis d\'accord parce que c\'est logique.', 'Certes, c\'est difficile, mais c\'est possible.', 'C\'est impossible, donc j\'abandonne.', 'Je refuse car c\'est injuste.'],
        correctIndex: 1,
        explanation: '« Certes… mais » est une structure de concession : on admet un point avant de le nuancer.'
      },
      {
        id: 'L151-8', type: 'final-quiz', title: 'Quiz final — Structurer un argument', characterId: 'marie',
        characterMessage: "Ce quiz exige précision et nuance. Vous en êtes capables !",
        questions: [
          { question: 'Quel connecteur exprime la conséquence ?', options: ['Bien que', 'Par conséquent', 'En outre', 'Puisque'], correctIndex: 1 },
          { question: '« ___ les efforts fournis, les résultats sont décevants. »', options: ['Grâce à', 'Malgré', 'À cause de', 'Parce que'], correctIndex: 1 },
          { question: 'Dans la structure argumentative, que vient après la thèse ?', options: ['La conclusion', 'L\'antithèse', 'Les arguments', 'L\'introduction'], correctIndex: 2 },
          { question: '« Il pleut. ___, nous restons à l\'intérieur. »', options: ['De ce fait', 'Bien que', 'En outre', 'Certes'], correctIndex: 0 },
          { question: '« ___ le projet soit ambitieux, il est réalisable. »', options: ['Parce que', 'Puisque', 'Quoique', 'Vu que'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 152: Le conditionnel passé
  {
    courseId: 'lesson-152',
    steps: [
      {
        id: 'L152-1', type: 'lesson', title: 'Le conditionnel passé', characterId: 'marie',
        characterMessage: "Cette leçon exige de la nuance — c'est ça, le vrai français !",
        content: `Le **conditionnel passé** exprime une action qui **aurait pu se produire** mais ne s'est pas réalisée.\n\n📐 **Formation :**\nAuxiliaire (avoir/être) au conditionnel présent + participe passé\n\n🔵 **Avec AVOIR :**\n- J'**aurais aimé** voyager\n- Tu **aurais dû** partir plus tôt\n- Il **aurait fallu** prévenir\n\n🟢 **Avec ÊTRE :**\n- Je **serais allé(e)** à la plage\n- Elle **serait venue** si elle avait su\n\n💬 **Usages :**\n- **Le regret :** J'aurais voulu être artiste.\n- **Le reproche :** Tu aurais pu m'aider !\n- **L'information non confirmée :** L'accident aurait fait deux blessés.\n- **L'hypothèse irréelle passée :** Si j'avais su, j'aurais agi autrement.`,
        tip: '💡 Le conditionnel passé est aussi utilisé en journalisme pour rapporter des faits non vérifiés.'
      },
      {
        id: 'L152-2', type: 'listening', title: 'Écoute — Regrets de vacances', characterId: 'omar',
        characterMessage: "Écoute les subtilités : ironie, humour, sous-entendus.",
        text: 'Si nous avions réservé plus tôt, nous aurions obtenu un meilleur prix pour l\'hôtel à Antibes. Nous aurions aussi pu visiter le Cap d\'Antibes. J\'aurais tellement aimé voir les villas de la Belle Époque !',
        question: 'Pourquoi n\'ont-ils pas obtenu un bon prix ?',
        options: ['L\'hôtel était complet', 'Ils ont réservé trop tard', 'Ils n\'avaient pas assez d\'argent', 'L\'hôtel était fermé'],
        correctIndex: 1
      },
      {
        id: 'L152-3', type: 'qcm', title: 'Formation du conditionnel passé', characterId: 'elena',
        characterMessage: "C'est le niveau où on comprend vraiment les nuances du français.",
        question: 'Complétez : « Elle ___ venue si elle avait pu. »',
        options: ['aurait', 'serait', 'avait', 'sera'],
        correctIndex: 1,
        explanation: '« Venir » se conjugue avec ÊTRE, donc au conditionnel passé : elle serait venue.'
      },
      {
        id: 'L152-4', type: 'flashcard', title: 'Exprimer le regret', characterId: 'thomas',
        characterMessage: "Ces termes sont essentiels pour comprendre la littérature française.",
        cards: [
          { front: 'J\'aurais aimé…', back: 'I would have liked…' },
          { front: 'Tu aurais dû…', back: 'You should have…' },
          { front: 'Il aurait fallu…', back: 'It would have been necessary…' },
          { front: 'Nous aurions pu…', back: 'We could have…' },
          { front: 'Vous auriez dû…', back: 'You should have… (formal)' },
          { front: 'Si seulement j\'avais su…', back: 'If only I had known…' },
        ]
      },
      {
        id: 'L152-5', type: 'fill-blank', title: 'Exprimez un regret', characterId: 'fatou',
        characterMessage: "Pense au registre de langue — formel ou informel ?",
        sentence: 'Si j\'avais étudié davantage, j\' ___ réussi l\'examen.',
        options: ['aurais', 'avais', 'aurai', 'serais'],
        correctAnswer: 'aurais'
      },
      {
        id: 'L152-6', type: 'drag-drop', title: 'Formez une phrase au conditionnel passé', characterId: 'yuki',
        characterMessage: "L'ordre des mots peut changer la nuance. Sois précis !",
        instruction: 'Remettez les mots dans l\'ordre :',
        items: ['aimé', 'à Antibes', 'J\'aurais', 'vivre'],
        correctOrder: ['J\'aurais', 'aimé', 'vivre', 'à Antibes']
      },
      {
        id: 'L152-7', type: 'qcm', title: 'Reproche au conditionnel passé', characterId: 'lucas',
        characterMessage: "C'est le genre de question qu'on trouve dans les examens DELF B2.",
        question: 'Quelle phrase exprime un reproche ?',
        options: ['Tu devrais partir.', 'Tu aurais dû me prévenir !', 'Tu devras revenir.', 'Tu dois m\'écouter.'],
        correctIndex: 1,
        explanation: '« Tu aurais dû » exprime un reproche sur une action passée non réalisée.'
      },
      {
        id: 'L152-8', type: 'final-quiz', title: 'Quiz final — Le conditionnel passé', characterId: 'marie',
        characterMessage: "Questions avancées — faites appel à tout ce que vous savez.",
        questions: [
          { question: '« Si elle avait su, elle ___ venue. »', options: ['serait', 'aurait', 'sera', 'avait'], correctIndex: 0 },
          { question: '« Nous ___ pu arriver à l\'heure. »', options: ['serions', 'aurions', 'avions', 'étions'], correctIndex: 1 },
          { question: 'Le conditionnel passé sert à exprimer :', options: ['Un ordre', 'Un regret', 'Une certitude', 'Un futur'], correctIndex: 1 },
          { question: '« J\' ___ aimé voir ce film. »', options: ['avais', 'aurais', 'aurai', 'ai'], correctIndex: 1 },
          { question: '« L\'incendie ___ fait 3 blessés. » (information non confirmée)', options: ['a', 'avait', 'aurait', 'aura'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 153: L'hypothèse irréelle
  {
    courseId: 'lesson-153',
    steps: [
      {
        id: 'L153-1', type: 'lesson', title: 'L\'hypothèse irréelle', characterId: 'marie',
        characterMessage: "On aborde un sujet qui demande une réflexion approfondie.",
        content: `L'**hypothèse irréelle** exprime une condition qui ne s'est pas réalisée dans le passé.\n\n📐 **Structure :**\n**Si** + plus-que-parfait → conditionnel passé\n\n🔵 **Exemples :**\n- Si j'**avais su**, je **serais resté(e)**.\n- Si tu **avais pris** le train, tu **serais arrivé** à l'heure.\n- Si nous **avions habité** à Antibes, nous **aurions profité** de la mer.\n\n⚠️ **Ne confondez pas les 3 types de « si » :**\n- Si + présent → futur (possible) : Si il pleut, je prendrai un parapluie.\n- Si + imparfait → conditionnel présent (improbable) : Si j'étais riche, j'achèterais un yacht.\n- Si + plus-que-parfait → conditionnel passé (irréel passé) : Si j'avais été riche, j'aurais acheté un yacht.`,
        tip: '💡 Rappel : on ne met JAMAIS le conditionnel après « si ». C\'est « si + indicatif → conditionnel ».'
      },
      {
        id: 'L153-2', type: 'listening', title: 'Écoute — Et si on avait fait autrement ?', characterId: 'omar',
        characterMessage: "Tu es presque comme un francophone maintenant. Bravo !",
        text: 'Si j\'avais choisi de vivre à Paris au lieu d\'Antibes, ma vie aurait été complètement différente. Je n\'aurais pas appris à naviguer, et je n\'aurais jamais rencontré ma femme au marché provençal. Si j\'avais su à l\'avance, j\'aurais fait exactement le même choix !',
        question: 'Comment l\'homme juge-t-il son choix de vivre à Antibes ?',
        options: ['Il le regrette profondément', 'Il le referait à l\'identique', 'Il hésite encore', 'Il préférerait Paris'],
        correctIndex: 1
      },
      {
        id: 'L153-3', type: 'qcm', title: 'Si + plus-que-parfait', characterId: 'elena',
        characterMessage: "Analyse chaque option avec un œil critique.",
        question: 'Complétez : « Si nous ___ plus tôt, nous aurions trouvé des places. »',
        options: ['arrivions', 'étions arrivés', 'arriverions', 'sommes arrivés'],
        correctIndex: 1,
        explanation: 'Après « si » pour une hypothèse irréelle passée, on utilise le plus-que-parfait.'
      },
      {
        id: 'L153-4', type: 'flashcard', title: 'Hypothèses irréelles', characterId: 'thomas',
        characterMessage: "La richesse lexicale du français est l'une de ses plus grandes beautés.",
        cards: [
          { front: 'Si j\'avais su…', back: 'If I had known…' },
          { front: 'Si tu étais venu(e)…', back: 'If you had come…' },
          { front: 'Si nous avions eu le temps…', back: 'If we had had time…' },
          { front: '… j\'aurais agi autrement', back: '… I would have acted differently' },
          { front: '… ça aurait changé tout', back: '… it would have changed everything' },
          { front: '… nous serions partis ensemble', back: '… we would have left together' },
        ]
      },
      {
        id: 'L153-5', type: 'fill-blank', title: 'Complétez l\'hypothèse irréelle', characterId: 'fatou',
        characterMessage: "La précision grammaticale est ce qui distingue un bon francophone.",
        sentence: 'Si elle avait étudié le français, elle ___ déménagé en France.',
        options: ['aurait', 'avait', 'aura', 'serait'],
        correctAnswer: 'aurait'
      },
      {
        id: 'L153-6', type: 'drag-drop', title: 'Formez une hypothèse irréelle', characterId: 'yuki',
        characterMessage: "C'est un exercice exigeant mais très formateur.",
        instruction: 'Remettez les mots dans l\'ordre :',
        items: ['avais eu', 'j\'aurais voyagé', 'de l\'argent', 'Si j\'', 'plus'],
        correctOrder: ['Si j\'', 'avais eu', 'de l\'argent', 'j\'aurais voyagé', 'plus']
      },
      {
        id: 'L153-7', type: 'qcm', title: 'Distinguer les types d\'hypothèses', characterId: 'lucas',
        characterMessage: "La différence est fine mais cruciale. Analyse bien chaque option.",
        question: 'Quel type d\'hypothèse : « Si j\'étais toi, je partirais. » ?',
        options: ['Hypothèse réelle (présent)', 'Hypothèse improbable (imparfait/conditionnel)', 'Hypothèse irréelle passée', 'Certitude'],
        correctIndex: 1,
        explanation: '« Si + imparfait → conditionnel présent » exprime une hypothèse improbable au présent.'
      },
      {
        id: 'L153-8', type: 'final-quiz', title: 'Quiz final — L\'hypothèse irréelle', characterId: 'marie',
        characterMessage: "C'est un vrai défi, mais vous avez le niveau pour réussir.",
        questions: [
          { question: '« Si tu ___ venu, tu aurais aimé. »', options: ['es', 'étais', 'serais', 'seras'], correctIndex: 1 },
          { question: '« Si j\'avais su, je ne ___ pas parti. »', options: ['suis', 'serais', 'serai', 'étais'], correctIndex: 1 },
          { question: 'Quelle structure pour l\'irréel du passé ?', options: ['Si + présent → futur', 'Si + imparfait → conditionnel', 'Si + PQP → conditionnel passé', 'Si + futur → présent'], correctIndex: 2 },
          { question: '« Si nous ___ le train, nous serions arrivés. »', options: ['prenions', 'avions pris', 'prendrions', 'prendrons'], correctIndex: 1 },
          { question: '« Elle ___ restée si elle avait pu. »', options: ['aurait', 'serait', 'avait', 'sera'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 154: Analyser un discours
  {
    courseId: 'lesson-154',
    steps: [
      {
        id: 'L154-1', type: 'lesson', title: 'Analyser un discours', characterId: 'marie',
        characterMessage: "Vous êtes presque bilingues ! Perfectionnons encore votre français.",
        content: `Savoir analyser un discours est une compétence essentielle au niveau B2.\n\n🎯 **Éléments à identifier :**\n\n1️⃣ **La thèse** — Quelle est la position de l'orateur ?\n2️⃣ **Les arguments** — Quelles raisons avance-t-il ?\n3️⃣ **Les exemples** — Quels faits concrets cite-t-il ?\n4️⃣ **Les techniques de persuasion :**\n- L'appel aux émotions (pathos)\n- L'appel à la logique (logos)\n- L'appel à la crédibilité (ethos)\n- Les questions rhétoriques\n- Les répétitions (anaphores)\n\n📝 **Mots pour analyser :**\n- L'orateur **soutient** que…\n- Il **affirme / prétend / démontre** que…\n- Il **s'appuie sur** l'exemple de…\n- Il **recourt à** une métaphore / une anaphore`,
        tip: '💡 Quand vous analysez un discours, demandez-vous toujours : « Qui parle ? À qui ? Pourquoi ? »'
      },
      {
        id: 'L154-2', type: 'listening', title: 'Écoute — Extrait de discours', characterId: 'omar',
        characterMessage: "Les registres de langue changent selon le contexte. Repère-les !",
        text: 'Mes chers concitoyens, le changement climatique n\'est pas une menace lointaine. Il est là, maintenant, devant nous. Nos plages se réduisent, nos forêts brûlent. Allons-nous rester les bras croisés ? Non ! Il est temps d\'agir, ensemble, pour les générations futures.',
        question: 'Quelle technique de persuasion est utilisée ?',
        options: ['L\'humour', 'La question rhétorique', 'La citation d\'un expert', 'L\'anecdote personnelle'],
        correctIndex: 1
      },
      {
        id: 'L154-3', type: 'qcm', title: 'Vocabulaire de l\'analyse', characterId: 'elena',
        characterMessage: "Cette question teste ta compréhension profonde de la langue.",
        question: 'Quel verbe signifie « affirmer sans preuve certaine » ?',
        options: ['Démontrer', 'Prouver', 'Prétendre', 'Confirmer'],
        correctIndex: 2,
        explanation: '« Prétendre » implique une affirmation qui n\'est pas nécessairement prouvée.'
      },
      {
        id: 'L154-4', type: 'flashcard', title: 'Analyser un discours', characterId: 'thomas',
        characterMessage: "Maîtriser ce vocabulaire, c'est accéder à la pensée française.",
        cards: [
          { front: 'L\'orateur soutient que…', back: 'The speaker maintains that…' },
          { front: 'Il recourt à une métaphore', back: 'He/She uses a metaphor' },
          { front: 'Une question rhétorique', back: 'A rhetorical question' },
          { front: 'Il s\'appuie sur des faits', back: 'He/She relies on facts' },
          { front: 'L\'appel aux émotions', back: 'Appeal to emotions (pathos)' },
          { front: 'L\'ethos', back: 'Credibility / authority of the speaker' },
        ]
      },
      {
        id: 'L154-5', type: 'fill-blank', title: 'Complétez l\'analyse', characterId: 'fatou',
        characterMessage: "Cet exercice te prépare à l'écrit académique et professionnel.",
        sentence: 'L\'orateur ___ une question rhétorique pour interpeller son public.',
        options: ['utilise', 'a utilisé', 'utilisera', 'utiliserait'],
        correctAnswer: 'utilise'
      },
      {
        id: 'L154-6', type: 'drag-drop', title: 'Ordonnez l\'analyse', characterId: 'yuki',
        characterMessage: "Maîtriser la syntaxe, c'est la clé d'un français élégant.",
        instruction: 'Mettez les étapes d\'analyse dans le bon ordre :',
        items: ['Identifier les arguments', 'Identifier la thèse', 'Conclure sur l\'efficacité', 'Repérer les techniques'],
        correctOrder: ['Identifier la thèse', 'Identifier les arguments', 'Repérer les techniques', 'Conclure sur l\'efficacité']
      },
      {
        id: 'L154-7', type: 'qcm', title: 'Pathos, logos ou ethos ?', characterId: 'lucas',
        characterMessage: "J'ai appris cette nuance en lisant des articles de journaux français.",
        question: '« Selon les scientifiques, 97% des experts confirment… » — Quel procédé ?',
        options: ['Pathos (émotions)', 'Logos (logique/faits)', 'Ethos (crédibilité)', 'Anaphore'],
        correctIndex: 2,
        explanation: 'Citer des scientifiques et des experts relève de l\'ethos : on s\'appuie sur leur autorité/crédibilité.'
      },
      {
        id: 'L154-8', type: 'final-quiz', title: 'Quiz final — Analyser un discours', characterId: 'marie',
        characterMessage: "Quiz final de niveau avancé. Concentration maximale !",
        questions: [
          { question: 'Que signifie « logos » en rhétorique ?', options: ['L\'émotion', 'La logique', 'La crédibilité', 'Le style'], correctIndex: 1 },
          { question: 'Une question rhétorique attend-elle une réponse ?', options: ['Oui, toujours', 'Non, jamais', 'Parfois', 'Seulement à l\'écrit'], correctIndex: 1 },
          { question: '« L\'orateur ___ que le climat se dégrade. »', options: ['affirme', 'parle', 'dit de', 'raconte à'], correctIndex: 0 },
          { question: 'L\'anaphore est une figure de :', options: ['Comparaison', 'Répétition', 'Exagération', 'Atténuation'], correctIndex: 1 },
          { question: 'L\'appel aux émotions s\'appelle :', options: ['Logos', 'Ethos', 'Pathos', 'Mythos'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 155: Rédiger un essai argumentatif
  {
    courseId: 'lesson-155',
    steps: [
      {
        id: 'L155-1', type: 'lesson', title: 'Rédiger un essai argumentatif', characterId: 'marie',
        characterMessage: "Aujourd'hui, on explore les subtilités de la langue française.",
        content: `L'essai argumentatif est un exercice central au DELF B2.\n\n📐 **Structure type (250+ mots) :**\n\n**Introduction :**\n- Phrase d'accroche\n- Présentation du sujet\n- Problématique\n- Annonce du plan\n\n**Développement :**\n- Partie 1 : Argument pour + exemple\n- Partie 2 : Argument contre + exemple\n- (Partie 3 optionnelle : nuance/synthèse)\n\n**Conclusion :**\n- Bilan des arguments\n- Prise de position personnelle\n- Ouverture\n\n📝 **Formules utiles :**\n- « Il est indéniable que… »\n- « Force est de constater que… »\n- « On ne saurait ignorer que… »\n- « En définitive… »\n- « Tout bien considéré… »`,
        tip: '💡 Au DELF B2, l\'essai doit faire 250 mots minimum. Structurez bien vos paragraphes !'
      },
      {
        id: 'L155-2', type: 'listening', title: 'Écoute — Modèle d\'introduction', characterId: 'omar',
        characterMessage: "Comprendre le français oral authentique, c'est une vraie victoire.",
        text: 'De nos jours, la question de l\'interdiction des voitures en centre-ville suscite un vif débat. D\'un côté, les défenseurs de l\'environnement y voient une nécessité. De l\'autre, les commerçants craignent des pertes économiques. Nous analyserons ces deux perspectives.',
        question: 'De quoi parle cette introduction ?',
        options: ['L\'interdiction des voitures en ville', 'La pollution des plages', 'Le prix de l\'essence', 'Les transports publics'],
        correctIndex: 0
      },
      {
        id: 'L155-3', type: 'qcm', title: 'Formules d\'introduction', characterId: 'elena',
        characterMessage: "En espagnol, on dirait ça différemment. Le français a sa logique !",
        question: 'Quelle formule convient pour commencer un essai ?',
        options: ['Salut, aujourd\'hui je vais parler de…', 'Force est de constater que…', 'Bon, voilà le truc…', 'Je pense que c\'est bien.'],
        correctIndex: 1,
        explanation: '« Force est de constater que… » est une formule soutenue adaptée au registre de l\'essai.'
      },
      {
        id: 'L155-4', type: 'flashcard', title: 'Formules pour l\'essai', characterId: 'thomas',
        characterMessage: "Avec ces mots, tu pourras apprécier les subtilités du français.",
        cards: [
          { front: 'Il est indéniable que…', back: 'It is undeniable that…' },
          { front: 'Force est de constater que…', back: 'One must acknowledge that…' },
          { front: 'On ne saurait ignorer que…', back: 'One cannot ignore that…' },
          { front: 'En définitive…', back: 'Ultimately…' },
          { front: 'Tout bien considéré…', back: 'All things considered…' },
          { front: 'Il convient de souligner que…', back: 'It is worth highlighting that…' },
        ]
      },
      {
        id: 'L155-5', type: 'fill-blank', title: 'Complétez la conclusion', characterId: 'fatou',
        characterMessage: "Chaque détail compte. Le français est une langue de précision !",
        sentence: '___, les avantages du numérique l\'emportent sur les inconvénients.',
        options: ['Tout bien considéré', 'Salut', 'Premièrement', 'Par exemple'],
        correctAnswer: 'Tout bien considéré'
      },
      {
        id: 'L155-6', type: 'drag-drop', title: 'Ordonnez les parties de l\'essai', characterId: 'yuki',
        characterMessage: "Imagine que tu rédiges un article — chaque mot à sa place !",
        instruction: 'Remettez dans l\'ordre logique :',
        items: ['Conclusion et prise de position', 'Introduction et problématique', 'Argument contre + exemple', 'Argument pour + exemple'],
        correctOrder: ['Introduction et problématique', 'Argument pour + exemple', 'Argument contre + exemple', 'Conclusion et prise de position']
      },
      {
        id: 'L155-7', type: 'qcm', title: 'Registre de l\'essai', characterId: 'lucas',
        characterMessage: "Même les natifs peuvent hésiter sur cette question !",
        question: 'Quel registre de langue convient pour un essai argumentatif ?',
        options: ['Familier', 'Courant', 'Soutenu', 'Argot'],
        correctIndex: 2,
        explanation: 'L\'essai argumentatif exige un registre soutenu avec des formules académiques.'
      },
      {
        id: 'L155-8', type: 'final-quiz', title: 'Quiz final — L\'essai argumentatif', characterId: 'marie',
        characterMessage: "Montrez votre maîtrise du français. Je compte sur vous !",
        questions: [
          { question: 'Quelle est la longueur minimale au DELF B2 ?', options: ['100 mots', '150 mots', '250 mots', '500 mots'], correctIndex: 2 },
          { question: 'Que contient l\'introduction ?', options: ['Accroche + problématique + plan', 'Seulement la thèse', 'Les exemples', 'La conclusion'], correctIndex: 0 },
          { question: '« ___ que cette mesure est nécessaire. »', options: ['Il est indéniable', 'C\'est cool', 'J\'aime dire', 'On s\'en fiche'], correctIndex: 0 },
          { question: 'La conclusion doit contenir :', options: ['De nouveaux arguments', 'Un bilan + ouverture', 'Des exemples', 'Une accroche'], correctIndex: 1 },
          { question: '« ___, cette réforme semble bénéfique. »', options: ['En définitive', 'Salut', 'Voilà', 'D\'abord'], correctIndex: 0 },
        ]
      }
    ]
  },

  // Lesson 156: Le subjonctif passé
  {
    courseId: 'lesson-156',
    steps: [
      {
        id: 'L156-1', type: 'lesson', title: 'Le subjonctif passé', characterId: 'marie',
        characterMessage: "À ce niveau, vous maîtrisez déjà beaucoup. Allons plus loin ensemble.",
        content: `Le **subjonctif passé** exprime une action antérieure à celle de la principale, dans un contexte de subjonctif.\n\n📐 **Formation :**\nAuxiliaire (avoir/être) au **subjonctif présent** + participe passé\n\n🔵 **Exemples :**\n- Bien qu'il **ait plu**, nous sommes sortis.\n- Je suis content que tu **sois venu(e)**.\n- Avant qu'elle **soit partie**, je lui ai dit au revoir.\n- Il est dommage qu'ils **aient perdu** le match.\n\n⚠️ **Subjonctif présent d'avoir et être :**\n- que j'aie, que tu aies, qu'il ait, que nous ayons, que vous ayez, qu'ils aient\n- que je sois, que tu sois, qu'il soit, que nous soyons, que vous soyez, qu'ils soient`,
        tip: '💡 Utilisez le subjonctif passé quand l\'action au subjonctif s\'est produite AVANT l\'action principale.'
      },
      {
        id: 'L156-2', type: 'listening', title: 'Écoute — Déception et satisfaction', characterId: 'omar',
        characterMessage: "À ce niveau, tu peux suivre des conversations rapides et nuancées.",
        text: 'Je suis ravi que vous ayez terminé le projet à temps. Cependant, il est regrettable que nous n\'ayons pas pu inclure les dernières modifications. Bien que nous ayons travaillé dur, le résultat final aurait pu être meilleur.',
        question: 'Comment le locuteur juge-t-il le résultat ?',
        options: ['Parfait', 'Satisfaisant mais améliorable', 'Catastrophique', 'Sans intérêt'],
        correctIndex: 1
      },
      {
        id: 'L156-3', type: 'qcm', title: 'Subjonctif passé', characterId: 'elena',
        characterMessage: "Question subtile ! Même moi, j'ai dû réfléchir longtemps.",
        question: 'Complétez : « Je regrette qu\'elle ___ partie si tôt. »',
        options: ['est', 'soit', 'a', 'sera'],
        correctIndex: 1,
        explanation: '« Regretter que » est suivi du subjonctif. « Partir » prend l\'auxiliaire être → qu\'elle soit partie.'
      },
      {
        id: 'L156-4', type: 'flashcard', title: 'Expressions + subjonctif passé', characterId: 'thomas',
        characterMessage: "Ce vocabulaire te rapproche du niveau d'un francophone cultivé.",
        cards: [
          { front: 'Bien qu\'il ait fait…', back: 'Although he did/has done…' },
          { front: 'Je suis content que tu sois venu(e)', back: 'I\'m happy that you came' },
          { front: 'Avant qu\'il soit parti…', back: 'Before he left…' },
          { front: 'Il est dommage que nous ayons perdu', back: 'It\'s a pity that we lost' },
          { front: 'Je doute qu\'ils aient compris', back: 'I doubt they understood' },
          { front: 'Il est possible qu\'elle ait oublié', back: 'It\'s possible she forgot' },
        ]
      },
      {
        id: 'L156-5', type: 'fill-blank', title: 'Choisissez la bonne forme', characterId: 'fatou',
        characterMessage: "À ce niveau, les choix sont tous plausibles. La nuance fait la différence.",
        sentence: 'Bien qu\'il ___ beaucoup travaillé, il a échoué.',
        options: ['a', 'ait', 'avait', 'aura'],
        correctAnswer: 'ait'
      },
      {
        id: 'L156-6', type: 'drag-drop', title: 'Formez une phrase', characterId: 'yuki',
        characterMessage: "Ces phrases complexes reflètent le français écrit authentique.",
        instruction: 'Remettez dans l\'ordre :',
        items: ['qu\'elle', 'Je suis content', 'réussi', 'ait', 'son examen'],
        correctOrder: ['Je suis content', 'qu\'elle', 'ait', 'réussi', 'son examen']
      },
      {
        id: 'L156-7', type: 'qcm', title: 'Subjonctif passé ou présent ?', characterId: 'lucas',
        characterMessage: "À ce niveau, les pièges sont plus subtils. Reste vigilant !",
        question: '« Il faut que tu ___ avant midi. » — Passé ou présent ?',
        options: ['aies fini (passé)', 'finisses (présent)', 'finiras (futur)', 'as fini (indicatif)'],
        correctIndex: 0,
        explanation: 'L\'action de finir doit être accomplie avant midi → subjonctif passé : « que tu aies fini ».'
      },
      {
        id: 'L156-8', type: 'final-quiz', title: 'Quiz final — Le subjonctif passé', characterId: 'marie',
        characterMessage: "Ce quiz exige précision et nuance. Vous en êtes capables !",
        questions: [
          { question: '« Bien qu\'il ___ plu, nous sommes sortis. »', options: ['a', 'ait', 'avait', 'aura'], correctIndex: 1 },
          { question: '« Je doute qu\'ils ___ compris. »', options: ['ont', 'aient', 'avaient', 'auront'], correctIndex: 1 },
          { question: '« Avant qu\'il ___ parti… »', options: ['est', 'soit', 'sera', 'a'], correctIndex: 1 },
          { question: 'Le subjonctif passé = auxiliaire au subjonctif + :', options: ['Infinitif', 'Imparfait', 'Participe passé', 'Gérondif'], correctIndex: 2 },
          { question: '« Il est dommage que vous n\' ___ pas pu venir. »', options: ['avez', 'ayez', 'aviez', 'aurez'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 157: Débat contradictoire
  {
    courseId: 'lesson-157',
    steps: [
      {
        id: 'L157-1', type: 'lesson', title: 'Débat contradictoire', characterId: 'marie',
        characterMessage: "Cette leçon exige de la nuance — c'est ça, le vrai français !",
        content: `Le **débat contradictoire** est un exercice clé pour le DELF B2.\n\n🎯 **Objectifs :**\n- Défendre une position clairement\n- Réfuter les arguments adverses\n- Concéder certains points\n- Conclure de façon nuancée\n\n📝 **Expressions utiles :**\n\n✅ **Défendre :**\n- Je suis fermement convaincu(e) que…\n- Les faits démontrent que…\n- Il est avéré que…\n\n❌ **Réfuter :**\n- Cet argument ne tient pas car…\n- Je conteste cette idée parce que…\n- C'est inexact dans la mesure où…\n\n🤝 **Concéder :**\n- Vous avez raison sur ce point, cependant…\n- J'admets que… mais il faut nuancer…\n- Certes… toutefois…`,
        tip: '💡 Dans un débat, concéder un point à votre adversaire vous rend plus crédible !'
      },
      {
        id: 'L157-2', type: 'listening', title: 'Écoute — Débat sur l\'énergie nucléaire', characterId: 'omar',
        characterMessage: "Écoute les subtilités : ironie, humour, sous-entendus.",
        text: 'Je suis fermement convaincu que l\'énergie nucléaire est indispensable pour réduire les émissions de CO2. Mon interlocutrice conteste cette idée en affirmant que les risques sont trop élevés. J\'admets que la question des déchets est préoccupante, toutefois les nouvelles technologies permettent de mieux les gérer.',
        question: 'Que concède le premier interlocuteur ?',
        options: ['Que le nucléaire est dangereux', 'Que les déchets nucléaires sont un problème', 'Que les énergies renouvelables sont meilleures', 'Que le CO2 n\'est pas un problème'],
        correctIndex: 1
      },
      {
        id: 'L157-3', type: 'qcm', title: 'Réfuter un argument', characterId: 'elena',
        characterMessage: "C'est le niveau où on comprend vraiment les nuances du français.",
        question: 'Quelle formule sert à réfuter ?',
        options: ['Je suis d\'accord avec vous.', 'Vous avez entièrement raison.', 'Cet argument ne tient pas car…', 'En effet, c\'est vrai.'],
        correctIndex: 2,
        explanation: '« Cet argument ne tient pas car… » est une formule de réfutation directe.'
      },
      {
        id: 'L157-4', type: 'flashcard', title: 'Vocabulaire du débat', characterId: 'thomas',
        characterMessage: "Ces termes sont essentiels pour comprendre la littérature française.",
        cards: [
          { front: 'Je suis fermement convaincu(e) que…', back: 'I am firmly convinced that…' },
          { front: 'Cet argument ne tient pas', back: 'This argument doesn\'t hold up' },
          { front: 'J\'admets que… mais…', back: 'I admit that… but…' },
          { front: 'Il est avéré que…', back: 'It has been established that…' },
          { front: 'Je conteste cette idée', back: 'I challenge this idea' },
          { front: 'Nuancer sa position', back: 'To qualify one\'s position' },
        ]
      },
      {
        id: 'L157-5', type: 'fill-blank', title: 'Concéder et nuancer', characterId: 'fatou',
        characterMessage: "Pense au registre de langue — formel ou informel ?",
        sentence: 'Vous avez raison sur ce point, ___ il faut aussi considérer les inconvénients.',
        options: ['cependant', 'parce que', 'de plus', 'en effet'],
        correctAnswer: 'cependant'
      },
      {
        id: 'L157-6', type: 'drag-drop', title: 'Structure du débat', characterId: 'yuki',
        characterMessage: "L'ordre des mots peut changer la nuance. Sois précis !",
        instruction: 'Ordonnez les étapes d\'un débat :',
        items: ['Concéder certains points', 'Présenter sa thèse', 'Conclure', 'Réfuter les arguments adverses'],
        correctOrder: ['Présenter sa thèse', 'Réfuter les arguments adverses', 'Concéder certains points', 'Conclure']
      },
      {
        id: 'L157-7', type: 'qcm', title: 'Registre du débat', characterId: 'lucas',
        characterMessage: "C'est le genre de question qu'on trouve dans les examens DELF B2.",
        question: 'Dans un débat formel, on dit :',
        options: ['T\'as complètement tort !', 'C\'est n\'importe quoi.', 'Je me permets de contester ce point.', 'Pfff, c\'est nul.'],
        correctIndex: 2,
        explanation: '« Je me permets de contester ce point » est une formule de désaccord polie et soutenue.'
      },
      {
        id: 'L157-8', type: 'final-quiz', title: 'Quiz final — Débat contradictoire', characterId: 'marie',
        characterMessage: "Questions avancées — faites appel à tout ce que vous savez.",
        questions: [
          { question: 'Quelle formule pour défendre sa position ?', options: ['Bof, je sais pas', 'Les faits démontrent que…', 'Peut-être, je sais pas trop', 'Moi, personnellement…'], correctIndex: 1 },
          { question: '« ___ que le coût soit élevé, les bénéfices sont réels. »', options: ['J\'admets', 'Je refuse', 'J\'ignore', 'Je déteste'], correctIndex: 0 },
          { question: 'Concéder un point sert à :', options: ['Abandonner le débat', 'Montrer de la nuance et de la crédibilité', 'Donner raison à l\'autre', 'Changer de sujet'], correctIndex: 1 },
          { question: '« C\'est ___ dans la mesure où les données montrent le contraire. »', options: ['vrai', 'inexact', 'certain', 'évident'], correctIndex: 1 },
          { question: 'Un bon débat se termine par :', options: ['Des insultes', 'Une conclusion nuancée', 'Un abandon', 'Le silence'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 158: Les registres de langue
  {
    courseId: 'lesson-158',
    steps: [
      {
        id: 'L158-1', type: 'lesson', title: 'Les registres de langue', characterId: 'marie',
        characterMessage: "On aborde un sujet qui demande une réflexion approfondie.",
        content: `En français, on distingue trois principaux **registres de langue** :\n\n🟢 **Familier** (entre amis, à l'oral) :\n- « T'es où ? » « J'capte rien. » « C'est ouf ! »\n- Élisions, verlan, abréviations\n\n🔵 **Courant** (usage quotidien neutre) :\n- « Où es-tu ? » « Je ne comprends pas. » « C'est incroyable ! »\n- Standard, correct sans être formel\n\n🟣 **Soutenu** (écrit formel, discours, essais) :\n- « Où vous trouvez-vous ? » « Je ne saisis pas. » « C'est extraordinaire ! »\n- Passé simple, subjonctif, vocabulaire recherché\n\n📝 **Exemples comparatifs :**\n| Familier | Courant | Soutenu |\n|----------|---------|----------|\n| bouquin | livre | ouvrage |\n| boulot | travail | emploi |\n| bagnole | voiture | véhicule |\n| flic | policier | agent de l'ordre |\n| baraque | maison | demeure |`,
        tip: '💡 Au DELF B2, vous devez reconnaître les 3 registres et savoir utiliser le registre soutenu à l\'écrit.'
      },
      {
        id: 'L158-2', type: 'listening', title: 'Écoute — Trois versions', characterId: 'omar',
        characterMessage: "Tu es presque comme un francophone maintenant. Bravo !",
        text: 'Version familière : « J\'suis crevé, j\'ai bossé comme un dingue. » Version courante : « Je suis fatigué, j\'ai beaucoup travaillé. » Version soutenue : « Je suis épuisé, j\'ai travaillé de manière intensive. »',
        question: 'Quel mot appartient au registre familier ?',
        options: ['Fatigué', 'Épuisé', 'Crevé', 'Exténué'],
        correctIndex: 2
      },
      {
        id: 'L158-3', type: 'qcm', title: 'Identifier le registre', characterId: 'elena',
        characterMessage: "Analyse chaque option avec un œil critique.",
        question: '« Veuillez agréer l\'expression de mes sentiments distingués. » — Quel registre ?',
        options: ['Familier', 'Courant', 'Soutenu', 'Argot'],
        correctIndex: 2,
        explanation: 'Cette formule de politesse est caractéristique du registre soutenu (correspondance formelle).'
      },
      {
        id: 'L158-4', type: 'flashcard', title: 'Registres comparés', characterId: 'thomas',
        characterMessage: "La richesse lexicale du français est l'une de ses plus grandes beautés.",
        cards: [
          { front: 'Bouquin (fam.)', back: 'Livre (cour.) / Ouvrage (sout.)' },
          { front: 'Boulot (fam.)', back: 'Travail (cour.) / Emploi (sout.)' },
          { front: 'Bagnole (fam.)', back: 'Voiture (cour.) / Véhicule (sout.)' },
          { front: 'Flic (fam.)', back: 'Policier (cour.) / Agent de l\'ordre (sout.)' },
          { front: 'Piger (fam.)', back: 'Comprendre (cour.) / Saisir (sout.)' },
          { front: 'Se barrer (fam.)', back: 'Partir (cour.) / S\'en aller (sout.)' },
        ]
      },
      {
        id: 'L158-5', type: 'fill-blank', title: 'Choisissez le registre soutenu', characterId: 'fatou',
        characterMessage: "La précision grammaticale est ce qui distingue un bon francophone.",
        sentence: 'Le directeur a quitté son ___ après trente années de service.',
        options: ['boulot', 'travail', 'emploi', 'job'],
        correctAnswer: 'emploi'
      },
      {
        id: 'L158-6', type: 'drag-drop', title: 'Classez par registre', characterId: 'yuki',
        characterMessage: "C'est un exercice exigeant mais très formateur.",
        instruction: 'Du familier au soutenu, classez ces mots pour « maison » :',
        items: ['demeure', 'baraque', 'maison'],
        correctOrder: ['baraque', 'maison', 'demeure']
      },
      {
        id: 'L158-7', type: 'qcm', title: 'Adapter son registre', characterId: 'lucas',
        characterMessage: "La différence est fine mais cruciale. Analyse bien chaque option.",
        question: 'Dans quel contexte utilise-t-on le registre soutenu ?',
        options: ['Avec ses amis au café', 'Dans un essai ou un discours', 'Dans un SMS', 'En parlant à son chat'],
        correctIndex: 1,
        explanation: 'Le registre soutenu est réservé aux situations formelles : essais, discours, correspondance officielle.'
      },
      {
        id: 'L158-8', type: 'final-quiz', title: 'Quiz final — Les registres de langue', characterId: 'marie',
        characterMessage: "C'est un vrai défi, mais vous avez le niveau pour réussir.",
        questions: [
          { question: '« Bagnole » est du registre :', options: ['Soutenu', 'Courant', 'Familier', 'Technique'], correctIndex: 2 },
          { question: 'L\'équivalent soutenu de « comprendre » :', options: ['Piger', 'Capter', 'Saisir', 'Choper'], correctIndex: 2 },
          { question: 'Au DELF B2, on attend quel registre à l\'écrit ?', options: ['Familier', 'Argot', 'Soutenu', 'SMS'], correctIndex: 2 },
          { question: '« Demeure » est synonyme de :', options: ['Bureau', 'École', 'Maison', 'Jardin'], correctIndex: 2 },
          { question: '« Je ne saisis pas » appartient au registre :', options: ['Familier', 'Courant', 'Soutenu', 'Enfantin'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 159: Révision B2.1
  {
    courseId: 'lesson-159',
    steps: [
      {
        id: 'L159-1', type: 'lesson', title: 'Révision B2.1 — Argumenter et convaincre', characterId: 'marie',
        characterMessage: "Vous êtes presque bilingues ! Perfectionnons encore votre français.",
        content: `Révisons les points clés du module B2.1 !\n\n📝 **Ce que vous avez appris :**\n\n1️⃣ **Structurer un argument** — thèse, arguments, antithèse, synthèse\n2️⃣ **Le conditionnel passé** — J'aurais aimé, il aurait fallu\n3️⃣ **L'hypothèse irréelle** — Si + PQP → conditionnel passé\n4️⃣ **Analyser un discours** — pathos, logos, ethos\n5️⃣ **L'essai argumentatif** — 250+ mots, format DELF B2\n6️⃣ **Le subjonctif passé** — Bien qu'il ait fait…\n7️⃣ **Le débat contradictoire** — Défendre, réfuter, concéder\n8️⃣ **Les registres de langue** — Familier, courant, soutenu`,
        tip: '💡 Prenez le temps de revoir les connecteurs logiques — ils sont essentiels pour le DELF B2 !'
      },
      {
        id: 'L159-2', type: 'qcm', title: 'Révision — Connecteurs', characterId: 'elena',
        characterMessage: "Cette question teste ta compréhension profonde de la langue.",
        question: 'Quel connecteur exprime la concession ?',
        options: ['Par conséquent', 'Néanmoins', 'De surcroît', 'Puisque'],
        correctIndex: 1,
        explanation: '« Néanmoins » exprime une opposition/concession : on admet un fait tout en le nuançant.'
      },
      {
        id: 'L159-3', type: 'fill-blank', title: 'Révision — Conditionnel passé', characterId: 'fatou',
        characterMessage: "Cet exercice te prépare à l'écrit académique et professionnel.",
        sentence: 'Si nous avions su, nous ___ venus plus tôt.',
        options: ['serions', 'aurions', 'étions', 'avions'],
        correctAnswer: 'serions'
      },
      {
        id: 'L159-4', type: 'qcm', title: 'Révision — Subjonctif passé', characterId: 'lucas',
        characterMessage: "J'ai appris cette nuance en lisant des articles de journaux français.",
        question: '« Je suis surpris qu\'il ___ accepté cette offre. »',
        options: ['a', 'ait', 'avait', 'aura'],
        correctIndex: 1,
        explanation: '« Être surpris que » demande le subjonctif → « qu\'il ait accepté ».'
      },
      {
        id: 'L159-5', type: 'drag-drop', title: 'Révision — Ordre logique', characterId: 'yuki',
        characterMessage: "Maîtriser la syntaxe, c'est la clé d'un français élégant.",
        instruction: 'Ordonnez les parties d\'un essai :',
        items: ['Développement', 'Conclusion', 'Introduction'],
        correctOrder: ['Introduction', 'Développement', 'Conclusion']
      },
      {
        id: 'L159-6', type: 'fill-blank', title: 'Révision — Registre', characterId: 'fatou',
        characterMessage: "Chaque détail compte. Le français est une langue de précision !",
        sentence: 'L\'équivalent soutenu de « boulot » est ___.',
        options: ['emploi', 'job', 'boulot', 'taf'],
        correctAnswer: 'emploi'
      },
      {
        id: 'L159-7', type: 'qcm', title: 'Révision — Hypothèse', characterId: 'elena',
        characterMessage: "En espagnol, on dirait ça différemment. Le français a sa logique !",
        question: 'Pour l\'irréel du passé : Si + ___ → conditionnel passé',
        options: ['Présent', 'Imparfait', 'Plus-que-parfait', 'Futur'],
        correctIndex: 2,
        explanation: 'L\'hypothèse irréelle passée utilise « Si + plus-que-parfait → conditionnel passé ».'
      },
      {
        id: 'L159-8', type: 'final-quiz', title: 'Quiz récapitulatif B2.1', characterId: 'marie',
        characterMessage: "Quiz final de niveau avancé. Concentration maximale !",
        questions: [
          { question: '« ___ il ait raison, je maintiens ma position. »', options: ['Bien que', 'Parce que', 'Puisque', 'Vu que'], correctIndex: 0 },
          { question: '« Tu ___ dû m\'appeler ! » (reproche)', options: ['avais', 'aurais', 'auras', 'as'], correctIndex: 1 },
          { question: 'L\'ethos en rhétorique, c\'est :', options: ['L\'émotion', 'La logique', 'La crédibilité', 'Le style'], correctIndex: 2 },
          { question: '« Véhicule » est du registre :', options: ['Familier', 'Courant', 'Soutenu', 'Argot'], correctIndex: 2 },
          { question: '« ___ est de constater que les résultats sont positifs. »', options: ['Force', 'Grâce', 'Chance', 'Il'], correctIndex: 0 },
          { question: '« Si elle ___ su, elle aurait refusé. »', options: ['a', 'avait', 'aurait', 'aura'], correctIndex: 1 },
          { question: 'Un essai argumentatif au DELF B2 fait minimum :', options: ['100 mots', '250 mots', '500 mots', '1000 mots'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 160: Examen B2.1
  {
    courseId: 'lesson-160',
    steps: [
      {
        id: 'L160-1', type: 'lesson', title: 'Examen B2.1 — Argumenter et convaincre', characterId: 'marie',
        characterMessage: "Aujourd'hui, on explore les subtilités de la langue française.",
        content: `🏆 **Examen du module B2.1 — Argumenter et convaincre**\n\nCet examen teste toutes les compétences acquises :\n- Les connecteurs logiques avancés\n- Le conditionnel passé et l'hypothèse irréelle\n- L'analyse de discours\n- L'essai argumentatif\n- Le subjonctif passé\n- Le débat contradictoire\n- Les registres de langue\n\n🎤 Badge à débloquer : **Orateur**\n\nBonne chance !`,
        tip: '💡 Lisez bien chaque question et prenez le temps de réfléchir avant de répondre.'
      },
      {
        id: 'L160-2', type: 'final-quiz', title: 'Examen final B2.1', characterId: 'marie',
        characterMessage: "Montrez votre maîtrise du français. Je compte sur vous !",
        questions: [
          { question: '« ___ le mauvais temps, la fête a été un succès. »', options: ['Grâce à', 'Malgré', 'À cause de', 'Puisque'], correctIndex: 1 },
          { question: '« Si j\'avais eu le choix, je ___ resté à Antibes. »', options: ['suis', 'serais', 'serai', 'étais'], correctIndex: 1 },
          { question: '« Je doute qu\'il ___ compris la leçon. »', options: ['a', 'ait', 'avait', 'aura'], correctIndex: 1 },
          { question: '« Cet argument ne ___ pas car les faits le contredisent. »', options: ['marche', 'tient', 'va', 'fait'], correctIndex: 1 },
          { question: '« De ___, les avantages l\'emportent sur les inconvénients. »', options: ['ce fait', 'surcroît', 'mon avis', 'ma part'], correctIndex: 0 },
          { question: '« L\'orateur ___ à une métaphore pour convaincre. »', options: ['recourt', 'fait', 'dit', 'parle'], correctIndex: 0 },
          { question: '« Baraque » est l\'équivalent familier de :', options: ['Voiture', 'Maison', 'Travail', 'Argent'], correctIndex: 1 },
          { question: '« Elle ___ partie si elle avait pu. »', options: ['sera', 'serait', 'est', 'a'], correctIndex: 1 },
          { question: '« ___ bien considéré, cette mesure est nécessaire. »', options: ['Tout', 'Bien', 'Après', 'En'], correctIndex: 0 },
          { question: '« Certes, c\'est difficile, ___ c\'est possible. »', options: ['parce que', 'mais', 'donc', 'car'], correctIndex: 1 },
        ]
      }
    ]
  },
];
