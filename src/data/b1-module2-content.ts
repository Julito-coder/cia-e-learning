// Interactive lesson content for B1 Module 2: Voyager et se débrouiller (Lessons 111-120)
import type { CourseContent } from './course-content';

export const b1Module2Content: CourseContent[] = [
  // Lesson 111: Réserver un hôtel
  {
    courseId: 'lesson-111',
    steps: [
      {
        id: 'L111-1', type: 'lesson', title: 'Réserver un hôtel', characterId: 'marie',
        characterMessage: "Vous êtes maintenant capables de comprendre des sujets plus complexes.",
        content: `Apprenons à **réserver un hôtel** en français ! 🏨\n\n📞 **Par téléphone :**\n- « Bonjour, je voudrais réserver une chambre, s'il vous plaît. »\n- « Pour combien de nuits ? »\n- « Du 15 au 20 juillet, soit 5 nuits. »\n- « Chambre simple ou double ? »\n- « Une chambre double avec vue sur la mer. »\n\n📧 **Par email :**\n- Objet : Demande de réservation\n- Madame, Monsieur,\n- Je souhaiterais réserver une chambre…\n- Pourriez-vous me confirmer la disponibilité ?\n- Dans l'attente de votre réponse, cordialement.\n\n💰 **Vocabulaire utile :**\n- Le tarif / le prix par nuit\n- Le petit-déjeuner inclus\n- La climatisation / le wifi\n- Annuler / modifier une réservation`,
        tip: '💡 Utilisez le conditionnel (« je voudrais », « pourriez-vous ») pour être poli dans vos demandes.'
      },
      {
        id: 'L111-2', type: 'listening', title: 'Écoute — Réservation par téléphone', characterId: 'omar',
        characterMessage: "Tu devrais maintenant comprendre l'essentiel des conversations courantes.",
        text: 'Bonjour, hôtel du Cap d\'Antibes. Je voudrais réserver une chambre double du 10 au 14 août, s\'il vous plaît. Bien sûr, nous avons une chambre disponible à 120 euros la nuit, petit-déjeuner inclus. C\'est parfait, je la prends.',
        question: 'Combien coûte la chambre par nuit ?',
        options: ['100 euros', '110 euros', '120 euros', '150 euros'],
        correctIndex: 2
      },
      {
        id: 'L111-3', type: 'qcm', title: 'Vocabulaire hôtelier', characterId: 'elena',
        characterMessage: "À ce niveau, il faut aller au-delà de la traduction.",
        question: 'Que signifie « petit-déjeuner inclus » ?',
        options: ['Le petit-déjeuner est en supplément', 'Le petit-déjeuner est compris dans le prix', 'Il n\'y a pas de petit-déjeuner', 'Le petit-déjeuner est gratuit le dimanche'],
        correctIndex: 1,
        explanation: '« Inclus » signifie que le petit-déjeuner est compris dans le prix de la chambre.'
      },
      {
        id: 'L111-4', type: 'flashcard', title: 'Vocabulaire de l\'hôtel', characterId: 'thomas',
        characterMessage: "Ces termes enrichissent considérablement ton expression.",
        cards: [
          { front: 'Une chambre simple', back: 'A single room' },
          { front: 'Une chambre double', back: 'A double room' },
          { front: 'La réception', back: 'The reception / front desk' },
          { front: 'Le tarif par nuit', back: 'The rate per night' },
          { front: 'Annuler une réservation', back: 'To cancel a booking' },
          { front: 'La climatisation', back: 'Air conditioning' },
        ]
      },
      {
        id: 'L111-5', type: 'fill-blank', title: 'Complétez la demande', characterId: 'fatou',
        characterMessage: "Les phrases sont plus complexes, mais tu as les outils pour réussir.",
        sentence: 'Je ___ réserver une chambre pour deux nuits.',
        options: ['veux', 'voudrais', 'voulais', 'voudrai'],
        correctAnswer: 'voudrais'
      },
      {
        id: 'L111-6', type: 'drag-drop', title: 'Formez une demande polie', characterId: 'yuki',
        characterMessage: "Les structures deviennent complexes. Attention aux propositions !",
        instruction: 'Remettez les mots dans l\'ordre :',
        items: ['réserver', 'voudrais', 'chambre', 'Je', 'une'],
        correctOrder: ['Je', 'voudrais', 'réserver', 'une', 'chambre']
      },
      {
        id: 'L111-7', type: 'qcm', title: 'Formule de politesse', characterId: 'hans',
        characterMessage: "Le monde professionnel exige ce genre de compétence. Entraîne-toi !",
        question: 'Quelle formule de fin d\'email est correcte ?',
        options: ['Bisous', 'Cordialement', 'À plus', 'Tchao'],
        correctIndex: 1,
        explanation: '« Cordialement » est la formule standard pour terminer un email formel ou semi-formel.'
      },
      {
        id: 'L111-8', type: 'final-quiz', title: 'Quiz final — Réserver un hôtel', characterId: 'marie',
        characterMessage: "Ce quiz teste votre compréhension en profondeur. Allez-y !",
        questions: [
          { question: '« Je ___ réserver une chambre. » (poli)', options: ['veux', 'voudrais', 'dois', 'peux'], correctIndex: 1 },
          { question: '« Petit-déjeuner inclus » signifie…', options: ['en supplément', 'compris dans le prix', 'non disponible', 'gratuit le week-end'], correctIndex: 1 },
          { question: 'Comment terminer un email formel ?', options: ['Bisous', 'Salut', 'Cordialement', 'Ciao'], correctIndex: 2 },
          { question: '« Pourriez-vous me confirmer… » est au…', options: ['présent', 'passé composé', 'conditionnel', 'subjonctif'], correctIndex: 2 },
          { question: '« Annuler » une réservation signifie…', options: ['confirmer', 'modifier', 'supprimer', 'payer'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 112: Raconter un voyage
  {
    courseId: 'lesson-112',
    steps: [
      {
        id: 'L112-1', type: 'lesson', title: 'Raconter un voyage', characterId: 'marie',
        characterMessage: "On entre dans le vif du sujet aujourd'hui — accrochez-vous !",
        content: `Pour raconter un voyage, on utilise les **temps du passé** de manière fluide :\n\n📐 **Passé composé** = actions ponctuelles, succession d'événements :\n- Nous **sommes partis** le 10 juillet.\n- J'**ai visité** le musée Picasso.\n- Nous **avons pris** le train pour Nice.\n\n📐 **Imparfait** = description, habitudes, état d'esprit :\n- Il **faisait** très beau.\n- Les gens **étaient** sympathiques.\n- Chaque matin, nous **allions** à la plage.\n\n🔄 **Combiner les deux :**\n- Je **me promenais** (imparfait = contexte) quand j'**ai rencontré** (PC = événement) un ami.\n- Il **faisait** nuit quand nous **sommes rentrés**.\n\n📝 **Expressions temporelles :**\n- D'abord, ensuite, puis, enfin\n- Le premier jour / Le lendemain\n- Pendant que / Tandis que`,
        tip: '💡 L\'imparfait = le décor. Le passé composé = les événements qui se produisent dans ce décor.'
      },
      {
        id: 'L112-2', type: 'listening', title: 'Écoute — Mon voyage à Antibes', characterId: 'lucas',
        characterMessage: "L'écoute est plus rapide maintenant. Reste attentif aux détails !",
        text: 'L\'été dernier, je suis allé à Antibes avec ma famille. Il faisait très chaud et le ciel était bleu. Le premier jour, nous avons visité le vieil Antibes. Le lendemain, nous sommes allés au Cap d\'Antibes. C\'était magnifique !',
        question: 'Qu\'ont-ils fait le premier jour ?',
        options: ['Ils sont allés à la plage', 'Ils ont visité le vieil Antibes', 'Ils sont allés au Cap', 'Ils sont restés à l\'hôtel'],
        correctIndex: 1
      },
      {
        id: 'L112-3', type: 'qcm', title: 'PC ou imparfait ?', characterId: 'elena',
        characterMessage: "La nuance est importante — chaque option est crédible !",
        question: '« Il ___ beau quand nous sommes arrivés. »',
        options: ['a fait', 'faisait', 'fera', 'fait'],
        correctIndex: 1,
        explanation: 'Le beau temps est une description du contexte → imparfait.'
      },
      {
        id: 'L112-4', type: 'flashcard', title: 'Expressions pour raconter', characterId: 'thomas',
        characterMessage: "Le vocabulaire avancé te permet de nuancer ta pensée en français.",
        cards: [
          { front: 'Le premier jour', back: 'The first day' },
          { front: 'Le lendemain', back: 'The next day' },
          { front: 'Pendant ce temps', back: 'Meanwhile' },
          { front: 'Ensuite / Puis', back: 'Then / Next' },
          { front: 'Enfin / Finalement', back: 'Finally' },
          { front: 'C\'était magnifique !', back: 'It was magnificent!' },
        ]
      },
      {
        id: 'L112-5', type: 'fill-blank', title: 'Complétez le récit', characterId: 'fatou',
        characterMessage: "Pense aux temps verbaux — passé, présent, futur ?",
        sentence: 'Nous nous ___ sur la plage quand il a commencé à pleuvoir.',
        options: ['promenions', 'avons promené', 'promènerons', 'promenons'],
        correctAnswer: 'promenions'
      },
      {
        id: 'L112-6', type: 'drag-drop', title: 'Ordonnez le récit de voyage', characterId: 'yuki',
        characterMessage: "Cherche les connecteurs logiques pour comprendre l'enchaînement.",
        instruction: 'Remettez dans l\'ordre chronologique :',
        items: ['Enfin, nous sommes rentrés', 'D\'abord, nous avons pris le train', 'Ensuite, nous avons visité la ville', 'Puis, nous avons mangé au restaurant'],
        correctOrder: ['D\'abord, nous avons pris le train', 'Ensuite, nous avons visité la ville', 'Puis, nous avons mangé au restaurant', 'Enfin, nous sommes rentrés']
      },
      {
        id: 'L112-7', type: 'qcm', title: 'Temps du passé', characterId: 'lucas',
        characterMessage: "Même après deux ans en France, ce point me fait parfois hésiter.",
        question: '« Le lendemain » signifie…',
        options: ['la veille', 'le jour suivant', 'le même jour', 'la semaine prochaine'],
        correctIndex: 1,
        explanation: '« Le lendemain » = le jour d\'après, le jour suivant.'
      },
      {
        id: 'L112-8', type: 'final-quiz', title: 'Quiz final — Raconter un voyage', characterId: 'marie',
        characterMessage: "Les questions sont plus nuancées à ce niveau. Réfléchissez bien !",
        questions: [
          { question: '« Il ___ chaud et le soleil brillait. » (description)', options: ['a fait', 'faisait', 'fera', 'fit'], correctIndex: 1 },
          { question: '« Soudain, nous ___ un dauphin. » (événement)', options: ['voyions', 'avons vu', 'verrons', 'voyons'], correctIndex: 1 },
          { question: '« Le lendemain » signifie…', options: ['hier', 'le jour suivant', 'aujourd\'hui', 'la veille'], correctIndex: 1 },
          { question: 'L\'imparfait sert à décrire…', options: ['un événement ponctuel', 'le décor et le contexte', 'le futur', 'un ordre'], correctIndex: 1 },
          { question: '« D\'abord… ensuite… enfin » exprime…', options: ['l\'opposition', 'la chronologie', 'la cause', 'le doute'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 113: Le conditionnel présent
  {
    courseId: 'lesson-113',
    steps: [
      {
        id: 'L113-1', type: 'lesson', title: 'Le conditionnel présent', characterId: 'marie',
        characterMessage: "Cette leçon demande un peu plus de réflexion. Je compte sur vous !",
        content: `Le **conditionnel présent** exprime la politesse, un souhait ou une hypothèse.\n\n📐 **Formation :**\nRadical du futur + terminaisons de l'imparfait\n(-ais, -ais, -ait, -ions, -iez, -aient)\n\n🔵 **Exemples :**\n- Parler → je parler**ais**, tu parler**ais**, il parler**ait**\n- Finir → je finir**ais**, nous finir**ions**\n- Être → je ser**ais**, nous ser**ions**\n- Avoir → j'aur**ais**, nous aur**ions**\n- Pouvoir → je pourr**ais**\n- Vouloir → je voudr**ais**\n\n📝 **Usages :**\n1. **Politesse** : Je voudrais un café. Pourriez-vous m'aider ?\n2. **Souhait** : J'aimerais voyager en France.\n3. **Hypothèse** : Si j'avais le temps, je visiterais Antibes.\n4. **Conseil** : Tu devrais étudier davantage.\n5. **Information non confirmée** : Le président serait en vacances.`,
        tip: '💡 Le conditionnel = radical du futur + terminaisons de l\'imparfait. Si vous connaissez ces deux temps, c\'est facile !'
      },
      {
        id: 'L113-2', type: 'listening', title: 'Écoute — Que feriez-vous ?', characterId: 'omar',
        characterMessage: "Écoute les intonations — elles donnent beaucoup d'informations.",
        text: 'Si j\'avais un mois de vacances, je voyagerais sur toute la Côte d\'Azur. Je visiterais Nice, Cannes et Saint-Tropez. J\'irais au festival de jazz d\'Antibes et je mangerais dans les meilleurs restaurants. Ce serait fantastique !',
        question: 'Où irait-il s\'il avait des vacances ?',
        options: ['À Paris', 'Sur la Côte d\'Azur', 'En Espagne', 'En Italie'],
        correctIndex: 1
      },
      {
        id: 'L113-3', type: 'qcm', title: 'Conjugaison au conditionnel', characterId: 'elena',
        characterMessage: "J'ai appris cette subtilité en discutant avec des Français.",
        question: 'Quel est le conditionnel de « pouvoir » (je) ?',
        options: ['je peux', 'je pouvais', 'je pourrais', 'je pourrai'],
        correctIndex: 2,
        explanation: 'Pouvoir → je pourrais (radical « pourr- » + terminaison « -ais »).'
      },
      {
        id: 'L113-4', type: 'flashcard', title: 'Conditionnels irréguliers', characterId: 'thomas',
        characterMessage: "J'ai découvert ces mots en explorant les villages provençaux.",
        cards: [
          { front: 'être → je…', back: 'je serais' },
          { front: 'avoir → j\'…', back: 'j\'aurais' },
          { front: 'aller → j\'…', back: 'j\'irais' },
          { front: 'faire → je…', back: 'je ferais' },
          { front: 'vouloir → je…', back: 'je voudrais' },
          { front: 'devoir → je…', back: 'je devrais' },
        ]
      },
      {
        id: 'L113-5', type: 'fill-blank', title: 'Complétez au conditionnel', characterId: 'fatou',
        characterMessage: "La concordance des temps, c'est un point crucial à ce niveau.",
        sentence: 'Si j\'avais le temps, je ___ la Provence.',
        options: ['visite', 'visiterais', 'visiterai', 'visitais'],
        correctAnswer: 'visiterais'
      },
      {
        id: 'L113-6', type: 'drag-drop', title: 'Formez un souhait', characterId: 'yuki',
        characterMessage: "Cet exercice te prépare à écrire des textes plus élaborés.",
        instruction: 'Remettez les mots dans l\'ordre :',
        items: ['parler', 'J\'', 'couramment', 'aimerais', 'français'],
        correctOrder: ['J\'', 'aimerais', 'parler', 'français', 'couramment']
      },
      {
        id: 'L113-7', type: 'qcm', title: 'Usage du conditionnel', characterId: 'hans',
        characterMessage: "Le monde professionnel exige ce genre de compétence. Entraîne-toi !",
        question: '« Tu devrais te reposer » exprime…',
        options: ['un ordre', 'un conseil', 'une obligation', 'un fait'],
        correctIndex: 1,
        explanation: 'Le conditionnel de « devoir » (tu devrais) exprime un conseil.'
      },
      {
        id: 'L113-8', type: 'final-quiz', title: 'Quiz final — Le conditionnel présent', characterId: 'marie',
        characterMessage: "Montrez-moi que vous maîtrisez ce sujet. C'est parti !",
        questions: [
          { question: '« Je ___ un café, s\'il vous plaît. » (poli)', options: ['veux', 'voudrais', 'voulais', 'voudrai'], correctIndex: 1 },
          { question: '« Si j\'avais de l\'argent, j\' ___ une maison. »', options: ['achète', 'achetais', 'achèterai', 'achèterais'], correctIndex: 3 },
          { question: 'Le conditionnel se forme avec…', options: ['radical du présent + -ais', 'radical du futur + terminaisons de l\'imparfait', 'radical de l\'imparfait + -é', 'infinitif + -ons'], correctIndex: 1 },
          { question: '« Elle ___ heureuse d\'y aller. » (être)', options: ['est', 'serait', 'sera', 'était'], correctIndex: 1 },
          { question: '« Pourriez-vous m\'aider ? » exprime…', options: ['un ordre', 'une obligation', 'une demande polie', 'un fait'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 114: Si j'avais le temps…
  {
    courseId: 'lesson-114',
    steps: [
      {
        id: 'L114-1', type: 'lesson', title: 'Si j\'avais le temps…', characterId: 'marie',
        characterMessage: "Vous allez adorer ce thème, il est très riche culturellement.",
        content: `L'**hypothèse avec SI** est essentielle en français.\n\n📐 **Les 3 types d'hypothèses :**\n\n1️⃣ **Hypothèse réalisable** (probable) :\nSi + **présent** → **futur** / présent / impératif\n- Si tu **viens**, je **serai** content.\n- Si il **pleut**, **prends** un parapluie.\n\n2️⃣ **Hypothèse irréelle du présent** (imaginaire) :\nSi + **imparfait** → **conditionnel présent**\n- Si j'**avais** le temps, je **voyagerais**.\n- Si nous **étions** riches, nous **achèterions** un bateau.\n\n3️⃣ **Hypothèse irréelle du passé** (regret) :\nSi + **plus-que-parfait** → **conditionnel passé**\n- Si j'**avais su**, je **serais venu**.\n\n⚠️ **Règle d'or : « Les SI n'aiment pas les -RAIS »**\n→ Jamais de conditionnel ou futur après SI !`,
        tip: '💡 « Les si n\'aiment pas les -rais » : après « si », jamais de conditionnel ni de futur !'
      },
      {
        id: 'L114-2', type: 'listening', title: 'Écoute — Rêves d\'étudiants', characterId: 'lucas',
        characterMessage: "L'écoute est plus rapide maintenant. Reste attentif aux détails !",
        text: 'Si j\'avais plus de temps, j\'apprendrais à jouer de la guitare. Si je parlais parfaitement français, je travaillerais sur la Côte d\'Azur. Et si j\'étais riche, j\'achèterais un appartement à Antibes !',
        question: 'Que ferait Lucas s\'il était riche ?',
        options: ['Il voyagerait', 'Il achèterait un appartement à Antibes', 'Il apprendrait la guitare', 'Il travaillerait à Paris'],
        correctIndex: 1
      },
      {
        id: 'L114-3', type: 'qcm', title: 'La bonne structure', characterId: 'elena',
        characterMessage: "Pense au contexte avant de choisir ta réponse.",
        question: 'Complétez : « Si j\'___ le temps, je ferais du sport. »',
        options: ['ai', 'avais', 'aurais', 'aurai'],
        correctIndex: 1,
        explanation: 'Hypothèse irréelle du présent : Si + imparfait → conditionnel. Donc « Si j\'avais ».'
      },
      {
        id: 'L114-4', type: 'flashcard', title: 'Hypothèses courantes', characterId: 'thomas',
        characterMessage: "La langue française est un trésor. Chaque mot est une perle !",
        cards: [
          { front: 'Si j\'avais le temps…', back: 'If I had the time…' },
          { front: 'Si j\'étais toi…', back: 'If I were you…' },
          { front: 'Si c\'était possible…', back: 'If it were possible…' },
          { front: 'Si je pouvais…', back: 'If I could…' },
          { front: 'Si nous avions de l\'argent…', back: 'If we had money…' },
          { front: 'Si tu voulais…', back: 'If you wanted…' },
        ]
      },
      {
        id: 'L114-5', type: 'fill-blank', title: 'Complétez l\'hypothèse', characterId: 'fatou',
        characterMessage: "Au Sénégal, le français a ses particularités. Ici, on apprend le standard.",
        sentence: 'Si nous ___ en France, nous parlerions français tous les jours.',
        options: ['vivons', 'vivions', 'vivrions', 'vivrons'],
        correctAnswer: 'vivions'
      },
      {
        id: 'L114-6', type: 'drag-drop', title: 'Formez l\'hypothèse', characterId: 'yuki',
        characterMessage: "La syntaxe française a ses subtilités — entraîne-toi bien !",
        instruction: 'Remettez dans l\'ordre :',
        items: ['j\'irais', 'Si', 'en vacances', 'j\'avais le temps', ','],
        correctOrder: ['Si', 'j\'avais le temps', ',', 'j\'irais', 'en vacances']
      },
      {
        id: 'L114-7', type: 'qcm', title: 'La règle des SI', characterId: 'hans',
        characterMessage: "Le monde professionnel exige ce genre de compétence. Entraîne-toi !",
        question: 'Pourquoi dit-on « les si n\'aiment pas les -rais » ?',
        options: ['On ne peut pas utiliser « si » en français', 'Après « si », on n\'utilise jamais le conditionnel', 'Le conditionnel n\'existe pas', 'Il faut toujours utiliser le subjonctif après « si »'],
        correctIndex: 1,
        explanation: 'On ne met jamais le conditionnel (ni le futur) directement après « si ».'
      },
      {
        id: 'L114-8', type: 'final-quiz', title: 'Quiz final — L\'hypothèse avec SI', characterId: 'marie',
        characterMessage: "Quiz de niveau intermédiaire — je sais que vous pouvez y arriver.",
        questions: [
          { question: '« Si tu viens, je ___ content. » (probable)', options: ['serais', 'serai', 'suis', 'étais'], correctIndex: 1 },
          { question: '« Si j\'___ riche, j\'achèterais un yacht. »', options: ['étais', 'suis', 'serais', 'serai'], correctIndex: 0 },
          { question: 'Après « si », on ne met jamais…', options: ['l\'imparfait', 'le présent', 'le conditionnel', 'le subjonctif'], correctIndex: 2 },
          { question: '« Si elle ___ là, elle t\'aiderait. »', options: ['est', 'était', 'serait', 'sera'], correctIndex: 1 },
          { question: '« Si + présent → … »', options: ['conditionnel', 'imparfait', 'futur', 'subjonctif'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 115: Résoudre un problème
  {
    courseId: 'lesson-115',
    steps: [
      {
        id: 'L115-1', type: 'lesson', title: 'Résoudre un problème', characterId: 'marie',
        characterMessage: "Aujourd'hui, on travaille un point de grammaire plus avancé.",
        content: `En voyage, il faut savoir **se plaindre poliment** et **résoudre des problèmes**.\n\n😤 **Exprimer un problème :**\n- « Excusez-moi, il y a un problème avec… »\n- « Je suis désolé(e) de vous déranger, mais… »\n- « J'ai un souci avec… »\n- « La chambre n'a pas été nettoyée. »\n\n🙏 **Demander une solution poliment :**\n- « Serait-il possible de… ? »\n- « Pourriez-vous résoudre ce problème ? »\n- « J'apprécierais si vous pouviez… »\n- « Je souhaiterais un remboursement / un échange. »\n\n😤➡️😊 **Registre de réclamation :**\n- Décrire le problème avec des faits\n- Rester poli mais ferme\n- Proposer une solution\n- Remercier pour la prise en charge`,
        tip: '💡 Même en situation de conflit, la politesse ouvre toutes les portes en France. Utilisez le conditionnel !'
      },
      {
        id: 'L115-2', type: 'listening', title: 'Écoute — Problème à l\'hôtel', characterId: 'omar',
        characterMessage: "Dans mon restaurant, les clients parlent vite. C'est un bon entraînement !",
        text: 'Excusez-moi, j\'ai un problème avec ma chambre. La climatisation ne fonctionne pas et il fait très chaud. Serait-il possible de changer de chambre, s\'il vous plaît ? Je vous remercie de votre compréhension.',
        question: 'Quel est le problème dans la chambre ?',
        options: ['Il n\'y a pas de wifi', 'La climatisation ne fonctionne pas', 'La porte ne ferme pas', 'Il n\'y a pas d\'eau chaude'],
        correctIndex: 1
      },
      {
        id: 'L115-3', type: 'qcm', title: 'Réclamation polie', characterId: 'elena',
        characterMessage: "Le français et l'espagnol divergent sur ce point. Mémorise bien !",
        question: 'Quelle formule est la plus polie pour se plaindre ?',
        options: ['Ça ne va pas du tout !', 'C\'est inacceptable !', 'Serait-il possible de résoudre ce problème ?', 'Je veux parler au directeur !'],
        correctIndex: 2,
        explanation: '« Serait-il possible de… » utilise le conditionnel et est très poli.'
      },
      {
        id: 'L115-4', type: 'flashcard', title: 'Expressions de réclamation', characterId: 'thomas',
        characterMessage: "Avec ce vocabulaire, tu peux tenir des conversations plus riches.",
        cards: [
          { front: 'Il y a un problème avec…', back: 'There is a problem with…' },
          { front: 'Serait-il possible de… ?', back: 'Would it be possible to…?' },
          { front: 'Je souhaiterais un remboursement', back: 'I would like a refund' },
          { front: 'La chambre n\'a pas été nettoyée', back: 'The room hasn\'t been cleaned' },
          { front: 'Je vous remercie de votre compréhension', back: 'Thank you for your understanding' },
          { front: 'Un échange', back: 'An exchange' },
        ]
      },
      {
        id: 'L115-5', type: 'fill-blank', title: 'Complétez la réclamation', characterId: 'fatou',
        characterMessage: "Cet exercice teste ta maîtrise de la grammaire en contexte.",
        sentence: '___ de vous déranger, mais la climatisation ne fonctionne pas.',
        options: ['Je suis content', 'Je suis désolé', 'Je suis fâché', 'Je suis heureux'],
        correctAnswer: 'Je suis désolé'
      },
      {
        id: 'L115-6', type: 'drag-drop', title: 'Étapes d\'une réclamation', characterId: 'yuki',
        characterMessage: "Pense au sens global avant de placer chaque mot.",
        instruction: 'Remettez les étapes dans l\'ordre logique :',
        items: ['Remercier pour la prise en charge', 'Décrire le problème', 'Demander une solution', 'S\'excuser de déranger'],
        correctOrder: ['S\'excuser de déranger', 'Décrire le problème', 'Demander une solution', 'Remercier pour la prise en charge']
      },
      {
        id: 'L115-7', type: 'qcm', title: 'Le bon registre', characterId: 'hans',
        characterMessage: "Le monde professionnel exige ce genre de compétence. Entraîne-toi !",
        question: 'En France, pour faire une réclamation efficace, il faut…',
        options: ['Crier fort', 'Être poli mais ferme', 'Menacer', 'Ne rien dire'],
        correctIndex: 1,
        explanation: 'En France, la politesse associée à la fermeté est la meilleure stratégie pour obtenir satisfaction.'
      },
      {
        id: 'L115-8', type: 'final-quiz', title: 'Quiz final — Résoudre un problème', characterId: 'marie',
        characterMessage: "Prenez le temps de bien lire chaque option. Bonne chance !",
        questions: [
          { question: '« Serait-il ___ de changer de chambre ? »', options: ['bien', 'possible', 'bon', 'normal'], correctIndex: 1 },
          { question: '« Je ___ un remboursement. » (poli)', options: ['veux', 'exige', 'souhaiterais', 'demande'], correctIndex: 2 },
          { question: 'Que dire pour commencer une réclamation ?', options: ['C\'est honteux !', 'Excusez-moi, il y a un problème…', 'Je ne suis pas content !', 'Au secours !'], correctIndex: 1 },
          { question: '« Je vous remercie de votre ___ »', options: ['patience', 'compréhension', 'aide', 'les trois sont corrects'], correctIndex: 3 },
          { question: 'Le conditionnel rend la réclamation…', options: ['agressive', 'plus polie', 'plus longue', 'incompréhensible'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 116: Les transports en France
  {
    courseId: 'lesson-116',
    steps: [
      {
        id: 'L116-1', type: 'lesson', title: 'Les transports en France', characterId: 'marie',
        characterMessage: "Vous êtes maintenant capables de comprendre des sujets plus complexes.",
        content: `Découvrons les **moyens de transport** en France ! 🚄\n\n🚂 **Le train :**\n- TGV (Train à Grande Vitesse) : jusqu'à 320 km/h\n- TER (Transport Express Régional) : trains régionaux\n- La SNCF gère le réseau ferroviaire\n\n🚇 **Le métro :**\n- Paris : 16 lignes, 303 stations\n- Lyon, Marseille, Lille, Toulouse, Rennes aussi\n\n🚗 **La route :**\n- Le covoiturage (BlaBlaCar) : très populaire\n- L'autoroute : péages payants\n\n✈️ **L'avion :**\n- Paris-CDG, Orly (Paris)\n- Nice-Côte d'Azur (2e aéroport de France)\n\n🚲 **Les mobilités douces :**\n- Vélib' (Paris), vélos en libre-service\n- Trottinettes électriques\n- Bus et tramway`,
        tip: '💡 Le TGV peut relier Paris à Nice en 5h30 ! C\'est souvent moins cher en réservant à l\'avance.'
      },
      {
        id: 'L116-2', type: 'listening', title: 'Écoute — Quel transport choisir ?', characterId: 'omar',
        characterMessage: "Cherche à comprendre l'intention derrière les mots.",
        text: 'Pour aller de Paris à Antibes, vous avez plusieurs options. Le TGV met environ 5 heures et coûte entre 30 et 120 euros selon la date de réservation. L\'avion prend une heure et demie mais l\'aéroport est à Nice. Le covoiturage est moins cher, environ 40 euros, mais il faut compter 8 heures de route.',
        question: 'Combien de temps met le TGV de Paris à Antibes ?',
        options: ['3 heures', '5 heures', '8 heures', '1 heure 30'],
        correctIndex: 1
      },
      {
        id: 'L116-3', type: 'qcm', title: 'Transports français', characterId: 'elena',
        characterMessage: "À ce niveau, il faut aller au-delà de la traduction.",
        question: 'Que signifie TGV ?',
        options: ['Train Général de Voyage', 'Train à Grande Vitesse', 'Transport Global Véhicule', 'Train Gratuit de Ville'],
        correctIndex: 1,
        explanation: 'TGV = Train à Grande Vitesse, pouvant atteindre 320 km/h.'
      },
      {
        id: 'L116-4', type: 'flashcard', title: 'Vocabulaire des transports', characterId: 'thomas',
        characterMessage: "Ces termes enrichissent considérablement ton expression.",
        cards: [
          { front: 'Un aller simple', back: 'A one-way ticket' },
          { front: 'Un aller-retour', back: 'A round trip ticket' },
          { front: 'Le quai', back: 'The platform' },
          { front: 'Une correspondance', back: 'A connection / transfer' },
          { front: 'Le covoiturage', back: 'Carpooling / Ride-sharing' },
          { front: 'Composter son billet', back: 'To validate one\'s ticket' },
        ]
      },
      {
        id: 'L116-5', type: 'fill-blank', title: 'Complétez la phrase', characterId: 'fatou',
        characterMessage: "Les phrases sont plus complexes, mais tu as les outils pour réussir.",
        sentence: 'Je voudrais un ___ pour Nice, s\'il vous plaît.',
        options: ['aller-retour', 'avion', 'taxi', 'hôtel'],
        correctAnswer: 'aller-retour'
      },
      {
        id: 'L116-6', type: 'drag-drop', title: 'Acheter un billet de train', characterId: 'yuki',
        characterMessage: "Les structures deviennent complexes. Attention aux propositions !",
        instruction: 'Remettez les étapes dans l\'ordre :',
        items: ['Monter dans le train', 'Aller sur le quai', 'Acheter un billet', 'Vérifier l\'horaire'],
        correctOrder: ['Vérifier l\'horaire', 'Acheter un billet', 'Aller sur le quai', 'Monter dans le train']
      },
      {
        id: 'L116-7', type: 'qcm', title: 'Géographie des transports', characterId: 'hans',
        characterMessage: "Le monde professionnel exige ce genre de compétence. Entraîne-toi !",
        question: 'Quel est le 2e plus grand aéroport de France ?',
        options: ['Lyon-Saint Exupéry', 'Marseille-Provence', 'Nice-Côte d\'Azur', 'Toulouse-Blagnac'],
        correctIndex: 2,
        explanation: 'Nice-Côte d\'Azur est le 2e aéroport de France en termes de trafic passagers.'
      },
      {
        id: 'L116-8', type: 'final-quiz', title: 'Quiz final — Les transports', characterId: 'marie',
        characterMessage: "Ce quiz teste votre compréhension en profondeur. Allez-y !",
        questions: [
          { question: 'TGV signifie…', options: ['Train à Grande Vitesse', 'Transport Gratuit de Ville', 'Train Général Voyageur', 'Taxe Générale sur les Voitures'], correctIndex: 0 },
          { question: 'BlaBlaCar est un service de…', options: ['taxi', 'bus', 'covoiturage', 'avion'], correctIndex: 2 },
          { question: 'La SNCF gère…', options: ['les avions', 'le réseau ferroviaire', 'les autoroutes', 'les trottinettes'], correctIndex: 1 },
          { question: 'Un « aller-retour » est…', options: ['un aller simple', 'un billet pour aller et revenir', 'un abonnement', 'une réduction'], correctIndex: 1 },
          { question: 'Le TGV peut atteindre…', options: ['200 km/h', '250 km/h', '320 km/h', '400 km/h'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 117: La France d'outre-mer
  {
    courseId: 'lesson-117',
    steps: [
      {
        id: 'L117-1', type: 'lesson', title: 'La France d\'outre-mer', characterId: 'marie',
        characterMessage: "On entre dans le vif du sujet aujourd'hui — accrochez-vous !",
        content: `La France ne se limite pas à l'Hexagone ! 🌍\n\n🏝️ **Les DROM (Départements et Régions d'Outre-Mer) :**\n- **Guadeloupe** 🇬🇵 — Caraïbes, archipel volcanique\n- **Martinique** 🇲🇶 — Caraïbes, « île aux fleurs »\n- **Guyane française** 🇬🇫 — Amérique du Sud, base spatiale de Kourou\n- **La Réunion** 🇷🇪 — Océan Indien, volcan le Piton de la Fournaise\n- **Mayotte** 🇾🇹 — Océan Indien, entre Madagascar et l'Afrique\n\n🏝️ **Les COM (Collectivités d'Outre-Mer) :**\n- Polynésie française (Tahiti)\n- Nouvelle-Calédonie\n- Saint-Martin, Saint-Barthélemy\n\n📝 **Pourquoi c'est important :**\n- 2,7 millions de citoyens français\n- Le français et les langues locales (créole, tahitien…)\n- La France est présente dans tous les océans !`,
        tip: '💡 Grâce à l\'outre-mer, la France possède le 2e espace maritime mondial et est présente sur tous les continents.'
      },
      {
        id: 'L117-2', type: 'listening', title: 'Écoute — Un étudiant de la Réunion', characterId: 'lucas',
        characterMessage: "L'écoute est plus rapide maintenant. Reste attentif aux détails !",
        text: 'Je m\'appelle Kévin, je viens de la Réunion. C\'est une île dans l\'océan Indien. Chez nous, on parle français et créole réunionnais. Il y a un volcan actif, le Piton de la Fournaise. Le climat est tropical et on mange très bien : cari, rougail, samoussas !',
        question: 'Où se situe la Réunion ?',
        options: ['Dans les Caraïbes', 'En Amérique du Sud', 'Dans l\'océan Indien', 'Dans le Pacifique'],
        correctIndex: 2
      },
      {
        id: 'L117-3', type: 'qcm', title: 'Géographie ultramarine', characterId: 'elena',
        characterMessage: "La nuance est importante — chaque option est crédible !",
        question: 'Où se trouve la base spatiale française ?',
        options: ['En Guadeloupe', 'En Martinique', 'En Guyane française', 'À la Réunion'],
        correctIndex: 2,
        explanation: 'La base spatiale de Kourou, en Guyane française, est utilisée par l\'Agence spatiale européenne (ESA).'
      },
      {
        id: 'L117-4', type: 'flashcard', title: 'L\'outre-mer français', characterId: 'thomas',
        characterMessage: "Le vocabulaire avancé te permet de nuancer ta pensée en français.",
        cards: [
          { front: 'Les DROM', back: 'Départements et Régions d\'Outre-Mer' },
          { front: 'Le créole', back: 'Langue locale née du contact entre le français et d\'autres langues' },
          { front: 'L\'Hexagone', back: 'Surnom de la France métropolitaine (à cause de sa forme)' },
          { front: 'La Polynésie française', back: 'Territoire français dans le Pacifique (Tahiti)' },
          { front: 'Le Piton de la Fournaise', back: 'Volcan actif de la Réunion' },
          { front: 'Kourou', back: 'Base spatiale en Guyane française' },
        ]
      },
      {
        id: 'L117-5', type: 'fill-blank', title: 'Complétez la phrase', characterId: 'fatou',
        characterMessage: "Pense aux temps verbaux — passé, présent, futur ?",
        sentence: 'La Martinique est surnommée l\'« île aux ___ ».',
        options: ['fleurs', 'épices', 'volcans', 'plages'],
        correctAnswer: 'fleurs'
      },
      {
        id: 'L117-6', type: 'drag-drop', title: 'Associez les territoires', characterId: 'yuki',
        characterMessage: "Cherche les connecteurs logiques pour comprendre l'enchaînement.",
        instruction: 'Remettez dans l\'ordre géographique (ouest → est) :',
        items: ['La Réunion', 'La Guadeloupe', 'La Guyane', 'La Polynésie'],
        correctOrder: ['La Polynésie', 'La Guadeloupe', 'La Guyane', 'La Réunion']
      },
      {
        id: 'L117-7', type: 'qcm', title: 'Culture ultramarine', characterId: 'omar',
        characterMessage: "Réfléchis comme un Français — pas mot à mot depuis ta langue !",
        question: 'On parle français en Polynésie française. Quelle autre langue y parle-t-on ?',
        options: ['Le créole', 'Le tahitien', 'L\'arabe', 'Le breton'],
        correctIndex: 1,
        explanation: 'En Polynésie française, on parle français et tahitien (reo tahiti).'
      },
      {
        id: 'L117-8', type: 'final-quiz', title: 'Quiz final — La France d\'outre-mer', characterId: 'marie',
        characterMessage: "Les questions sont plus nuancées à ce niveau. Réfléchissez bien !",
        questions: [
          { question: 'Combien de DROM la France possède-t-elle ?', options: ['3', '4', '5', '6'], correctIndex: 2 },
          { question: 'La Guyane française est en…', options: ['Afrique', 'Asie', 'Amérique du Sud', 'Océanie'], correctIndex: 2 },
          { question: '« L\'Hexagone » désigne…', options: ['l\'outre-mer', 'la France métropolitaine', 'Paris', 'l\'Europe'], correctIndex: 1 },
          { question: 'Le créole est…', options: ['une danse', 'une langue', 'un plat', 'un instrument'], correctIndex: 1 },
          { question: 'Grâce à l\'outre-mer, la France est présente…', options: ['en Europe seulement', 'sur 3 continents', 'dans tous les océans', 'en Afrique seulement'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 118: Écrire une réclamation
  {
    courseId: 'lesson-118',
    steps: [
      {
        id: 'L118-1', type: 'lesson', title: 'Écrire une réclamation', characterId: 'marie',
        characterMessage: "Cette leçon demande un peu plus de réflexion. Je compte sur vous !",
        content: `Apprenons à rédiger un **email de réclamation** poli et structuré.\n\n📧 **Structure d'un email de réclamation :**\n\n1️⃣ **Objet** : clair et précis\n→ « Réclamation — Chambre 204, séjour du 10/07 »\n\n2️⃣ **Formule d'appel** :\n→ « Madame, Monsieur, »\n\n3️⃣ **Contexte** (quand, où, quoi) :\n→ « J'ai séjourné dans votre hôtel du 10 au 14 juillet. »\n\n4️⃣ **Problème** (faits précis) :\n→ « La climatisation de ma chambre ne fonctionnait pas. »\n\n5️⃣ **Demande** (solution souhaitée) :\n→ « Je souhaiterais obtenir un geste commercial. »\n\n6️⃣ **Formule de politesse** :\n→ « Dans l'attente de votre réponse, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées. »`,
        tip: '💡 Restez factuel : décrivez le problème avec des dates, des numéros et des faits précis.'
      },
      {
        id: 'L118-2', type: 'listening', title: 'Écoute — Un email de réclamation', characterId: 'hans',
        text: 'Madame, Monsieur. J\'ai séjourné dans votre hôtel du 5 au 8 mars. Malheureusement, la chambre n\'avait pas été nettoyée à mon arrivée et le wifi ne fonctionnait pas pendant tout mon séjour. Je souhaiterais obtenir un remboursement partiel. Dans l\'attente de votre réponse, cordialement.',
        question: 'Quels problèmes sont mentionnés ?',
        options: ['Le bruit et la nourriture', 'Le nettoyage et le wifi', 'La climatisation et l\'eau chaude', 'Le parking et la piscine'],
        correctIndex: 1
      },
      {
        id: 'L118-3', type: 'qcm', title: 'Formules de politesse', characterId: 'elena',
        characterMessage: "J'ai appris cette subtilité en discutant avec des Français.",
        question: 'Quelle formule de politesse est la plus formelle ?',
        options: ['Cordialement', 'À bientôt', 'Je vous prie d\'agréer l\'expression de mes salutations distinguées', 'Bien à vous'],
        correctIndex: 2,
        explanation: 'Cette longue formule est la plus formelle et convient aux réclamations officielles.'
      },
      {
        id: 'L118-4', type: 'flashcard', title: 'Vocabulaire de réclamation écrite', characterId: 'thomas',
        characterMessage: "J'ai découvert ces mots en explorant les villages provençaux.",
        cards: [
          { front: 'Une réclamation', back: 'A complaint / claim' },
          { front: 'Un geste commercial', back: 'A goodwill gesture / compensation' },
          { front: 'Un remboursement', back: 'A refund' },
          { front: 'Malheureusement', back: 'Unfortunately' },
          { front: 'Dans l\'attente de votre réponse', back: 'Awaiting your reply' },
          { front: 'Veuillez agréer', back: 'Please accept (formal)' },
        ]
      },
      {
        id: 'L118-5', type: 'fill-blank', title: 'Complétez l\'email', characterId: 'fatou',
        characterMessage: "La concordance des temps, c'est un point crucial à ce niveau.",
        sentence: 'Je ___ obtenir un remboursement pour ce désagrément.',
        options: ['veux', 'souhaiterais', 'dois', 'peux'],
        correctAnswer: 'souhaiterais'
      },
      {
        id: 'L118-6', type: 'drag-drop', title: 'Ordonnez les parties de l\'email', characterId: 'yuki',
        characterMessage: "Cet exercice te prépare à écrire des textes plus élaborés.",
        instruction: 'Remettez les parties de l\'email dans l\'ordre :',
        items: ['Formule de politesse', 'Objet', 'Demande de solution', 'Description du problème', 'Contexte du séjour'],
        correctOrder: ['Objet', 'Contexte du séjour', 'Description du problème', 'Demande de solution', 'Formule de politesse']
      },
      {
        id: 'L118-7', type: 'qcm', title: 'Registre formel', characterId: 'hans',
        characterMessage: "Le monde professionnel exige ce genre de compétence. Entraîne-toi !",
        question: '« Je souhaiterais » est plus formel que…',
        options: ['Je voudrais', 'Je désirerais', 'Je veux', 'J\'aimerais'],
        correctIndex: 2,
        explanation: '« Je veux » est direct et peut paraître impoli dans une réclamation. « Je souhaiterais » est bien plus poli.'
      },
      {
        id: 'L118-8', type: 'final-quiz', title: 'Quiz final — La réclamation écrite', characterId: 'marie',
        characterMessage: "Montrez-moi que vous maîtrisez ce sujet. C'est parti !",
        questions: [
          { question: 'L\'objet d\'un email de réclamation doit être…', options: ['vague', 'drôle', 'clair et précis', 'très long'], correctIndex: 2 },
          { question: '« Je ___ un geste commercial. » (poli)', options: ['veux', 'exige', 'souhaiterais', 'demande'], correctIndex: 2 },
          { question: '« Malheureusement » signifie…', options: ['heureusement', 'unfortunately', 'parfois', 'souvent'], correctIndex: 1 },
          { question: 'Que faut-il inclure dans le contexte ?', options: ['Son humeur', 'Les dates et les faits', 'Ses émotions', 'Ses menaces'], correctIndex: 1 },
          { question: '« Dans l\'attente de votre réponse » se place…', options: ['au début', 'au milieu', 'avant la formule de fin', 'dans l\'objet'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 119: Révision B1.2
  {
    courseId: 'lesson-119',
    steps: [
      {
        id: 'L119-1', type: 'lesson', title: 'Révision B1.2 — Ce que nous avons appris', characterId: 'marie',
        characterMessage: "Vous allez adorer ce thème, il est très riche culturellement.",
        content: `Révisons les points clés du module B1.2 ! 📚\n\n🏨 **Réservation :** Je voudrais réserver… / Pourriez-vous… ?\n\n✈️ **Voyage :** PC (événement) + imparfait (décor) / Le lendemain…\n\n📐 **Conditionnel :** Radical futur + terminaisons imparfait / Politesse, souhait, hypothèse\n\n💭 **Hypothèse avec SI :**\n- Si + présent → futur\n- Si + imparfait → conditionnel\n\n😤 **Réclamation :** Serait-il possible de… / Je souhaiterais…\n\n🚄 **Transports :** TGV, TER, SNCF, covoiturage\n\n🏝️ **Outre-mer :** DROM, Guadeloupe, Martinique, Guyane, Réunion, Mayotte`,
        tip: '💡 Ce quiz de révision couvre tous les thèmes du module B1.2. Bonne chance !'
      },
      {
        id: 'L119-2', type: 'qcm', title: 'Révision — Conditionnel', characterId: 'elena',
        characterMessage: "Pense au contexte avant de choisir ta réponse.",
        question: '« Je ___ un café, s\'il vous plaît. » (poli)',
        options: ['veux', 'voudrais', 'voulais', 'voudrai'],
        correctIndex: 1,
        explanation: '« Je voudrais » est la forme polie au conditionnel.'
      },
      {
        id: 'L119-3', type: 'fill-blank', title: 'Révision — Hypothèse', characterId: 'fatou',
        characterMessage: "Au Sénégal, le français a ses particularités. Ici, on apprend le standard.",
        sentence: 'Si j\'___ riche, j\'achèterais une villa à Antibes.',
        options: ['suis', 'étais', 'serais', 'serai'],
        correctAnswer: 'étais'
      },
      {
        id: 'L119-4', type: 'qcm', title: 'Révision — Transports', characterId: 'lucas',
        characterMessage: "C'est subtil, mais une fois que tu as compris, c'est automatique.",
        question: 'TGV signifie…',
        options: ['Train à Grande Vitesse', 'Transport Gratuit de Ville', 'Taxi Général Voyageurs', 'Train Général de Voyage'],
        correctIndex: 0,
        explanation: 'TGV = Train à Grande Vitesse.'
      },
      {
        id: 'L119-5', type: 'drag-drop', title: 'Révision — Réclamation', characterId: 'yuki',
        characterMessage: "La syntaxe française a ses subtilités — entraîne-toi bien !",
        instruction: 'Ordonnez un email de réclamation :',
        items: ['Formule de politesse', 'Objet', 'Problème', 'Demande de solution'],
        correctOrder: ['Objet', 'Problème', 'Demande de solution', 'Formule de politesse']
      },
      {
        id: 'L119-6', type: 'qcm', title: 'Révision — Outre-mer', characterId: 'omar',
        characterMessage: "Réfléchis comme un Français — pas mot à mot depuis ta langue !",
        question: 'La Guyane française se situe en…',
        options: ['Afrique', 'Amérique du Sud', 'Asie', 'Océanie'],
        correctIndex: 1,
        explanation: 'La Guyane française est en Amérique du Sud.'
      },
      {
        id: 'L119-7', type: 'fill-blank', title: 'Révision — Récit de voyage', characterId: 'fatou',
        characterMessage: "Cet exercice teste ta maîtrise de la grammaire en contexte.",
        sentence: 'Il ___ beau quand nous sommes arrivés. (description)',
        options: ['a fait', 'faisait', 'fera', 'fait'],
        correctAnswer: 'faisait'
      },
      {
        id: 'L119-8', type: 'final-quiz', title: 'Quiz de révision B1.2', characterId: 'marie',
        characterMessage: "Quiz de niveau intermédiaire — je sais que vous pouvez y arriver.",
        questions: [
          { question: '« Si elle venait, nous ___ contents. »', options: ['sommes', 'serions', 'serons', 'étions'], correctIndex: 1 },
          { question: '« Serait-il ___ de m\'aider ? »', options: ['bien', 'possible', 'bon', 'juste'], correctIndex: 1 },
          { question: 'L\'imparfait dans un récit sert au…', options: ['événement ponctuel', 'décor et contexte', 'futur', 'conditionnel'], correctIndex: 1 },
          { question: '« Je ___ réserver une chambre. » (poli)', options: ['veux', 'voudrais', 'dois', 'peux'], correctIndex: 1 },
          { question: 'Nice-Côte d\'Azur est le ___ aéroport de France.', options: ['1er', '2e', '3e', '4e'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 120: Examen B1.2
  {
    courseId: 'lesson-120',
    steps: [
      {
        id: 'L120-1', type: 'lesson', title: 'Examen B1.2 — Globe-Trotter 🌍', characterId: 'marie',
        characterMessage: "Aujourd'hui, on travaille un point de grammaire plus avancé.",
        content: `Bienvenue à l'examen du module B1.2 !\n\n🎯 **Ce que vous devez maîtriser :**\n- Réserver un hôtel par téléphone/email\n- Raconter un voyage (PC + imparfait)\n- Utiliser le conditionnel présent\n- Former des hypothèses avec SI\n- Se plaindre poliment\n- Connaître les transports français\n- Connaître la France d'outre-mer\n- Rédiger une réclamation\n\n⏱️ Cet examen comporte 8 questions.\n\nBonne chance ! 🍀`,
        tip: '💡 Prenez votre temps et relisez chaque question.'
      },
      {
        id: 'L120-2', type: 'qcm', title: 'Examen — Question 1', characterId: 'marie',
        question: '« Si nous ___ le temps, nous visiterions Cannes. »',
        options: ['avons', 'avions', 'aurions', 'aurons'],
        correctIndex: 1,
        explanation: 'Si + imparfait → conditionnel. Donc « Si nous avions ».'
      },
      {
        id: 'L120-3', type: 'fill-blank', title: 'Examen — Question 2', characterId: 'marie',
        sentence: 'Je ___ obtenir un remboursement, s\'il vous plaît.',
        options: ['veux', 'souhaiterais', 'peux', 'dois'],
        correctAnswer: 'souhaiterais'
      },
      {
        id: 'L120-4', type: 'qcm', title: 'Examen — Question 3', characterId: 'marie',
        question: '« Le lendemain » signifie…',
        options: ['le jour précédent', 'le jour suivant', 'le même jour', 'la veille'],
        correctIndex: 1,
        explanation: '« Le lendemain » = le jour d\'après.'
      },
      {
        id: 'L120-5', type: 'fill-blank', title: 'Examen — Question 4', characterId: 'marie',
        sentence: 'Il ___ très chaud quand nous sommes arrivés à Antibes.',
        options: ['a fait', 'faisait', 'fera', 'fait'],
        correctAnswer: 'faisait'
      },
      {
        id: 'L120-6', type: 'qcm', title: 'Examen — Question 5', characterId: 'marie',
        question: 'La Martinique est surnommée…',
        options: ['l\'île de beauté', 'l\'île aux fleurs', 'l\'île mystérieuse', 'l\'île verte'],
        correctIndex: 1,
        explanation: 'La Martinique est surnommée « l\'île aux fleurs ».'
      },
      {
        id: 'L120-7', type: 'drag-drop', title: 'Examen — Question 6', characterId: 'marie',
        instruction: 'Formez une hypothèse :',
        items: ['j\'irais', 'j\'avais de l\'argent', 'en vacances', 'Si', ','],
        correctOrder: ['Si', 'j\'avais de l\'argent', ',', 'j\'irais', 'en vacances']
      },
      {
        id: 'L120-8', type: 'final-quiz', title: 'Examen final B1.2 — Badge Globe-Trotter', characterId: 'marie',
        characterMessage: "Prenez le temps de bien lire chaque option. Bonne chance !",
        questions: [
          { question: '« Pourriez-vous me ___ ? » (poli)', options: ['aide', 'aider', 'aidé', 'aidez'], correctIndex: 1 },
          { question: 'Le TGV peut atteindre…', options: ['200 km/h', '280 km/h', '320 km/h', '400 km/h'], correctIndex: 2 },
          { question: '« Cordialement » termine un email…', options: ['amical', 'formel', 'drôle', 'personnel'], correctIndex: 1 },
          { question: '« Si + imparfait → … »', options: ['futur', 'présent', 'conditionnel', 'subjonctif'], correctIndex: 2 },
          { question: 'Après « si », on ne met jamais…', options: ['l\'imparfait', 'le présent', 'le conditionnel', 'l\'indicatif'], correctIndex: 2 },
        ]
      }
    ]
  },
];
