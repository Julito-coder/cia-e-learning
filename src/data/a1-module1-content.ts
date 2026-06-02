// Interactive lesson content for A1 Module 1: Premiers pas en français (Lessons 1-10)
import type { CourseContent } from './course-content';

export const a1Module1Content: CourseContent[] = [
  // Lesson 1: Bonjour !
  {
    courseId: 'lesson-1',
    steps: [
      {
        id: 'L1-1', type: 'lesson', title: 'Bonjour ! — Les salutations',
        content: `Bienvenue au Centre International d'Antibes ! 🏖️\n\nVoici les **salutations** essentielles en français :\n\n☀️ **Le matin / l'après-midi :**\n- **Bonjour** → Hello / Good morning\n- **Salut** → Hi (informal)\n\n🌙 **Le soir :**\n- **Bonsoir** → Good evening\n\n👋 **Pour partir :**\n- **Au revoir** → Goodbye\n- **À bientôt** → See you soon\n- **À demain** → See you tomorrow\n- **Bonne nuit** → Good night\n\n🤝 **Formules de politesse :**\n- **S'il vous plaît** → Please (formal)\n- **Merci** → Thank you\n- **De rien** → You're welcome`,
        tip: '💡 « Salut » est informel — utilisez-le avec des amis. « Bonjour » est toujours approprié !'
      },
      {
        id: 'L1-2', type: 'listening', title: 'Écoute — Arrivée au CIA', characterId: 'marie',
        text: 'Bonjour ! Bienvenue au Centre International d\'Antibes. Je m\'appelle Marie. Comment allez-vous ?',
        question: 'Où se passe cette scène ?',
        options: ['À Paris', 'Au Centre International d\'Antibes', 'À la gare', 'Au restaurant'],
        correctIndex: 1
      },
      {
        id: 'L1-3', type: 'qcm', title: 'Quelle salutation ?',
        question: 'Il est 9h du matin. Que dites-vous ?',
        options: ['Bonsoir', 'Bonne nuit', 'Bonjour', 'Au revoir'],
        correctIndex: 2,
        explanation: 'Le matin et l\'après-midi, on dit « Bonjour ». « Bonsoir » est réservé au soir.'
      },
      {
        id: 'L1-4', type: 'flashcard', title: 'Les salutations — Vocabulaire', characterId: 'lucas',
        characterMessage: "Moi aussi au début, je trouvais ça compliqué ! Mais on s'y habitue.",
        cards: [
          { front: 'Bonjour', back: 'Hello / Good morning' },
          { front: 'Bonsoir', back: 'Good evening' },
          { front: 'Au revoir', back: 'Goodbye' },
          { front: 'Salut !', back: 'Hi! / Bye! (informal)' },
          { front: 'À bientôt', back: 'See you soon' },
          { front: 'Merci', back: 'Thank you' },
          { front: 'S\'il vous plaît', back: 'Please (formal)' },
          { front: 'De rien', back: 'You\'re welcome' },
        ]
      },
      {
        id: 'L1-5', type: 'fill-blank', title: 'Complétez le dialogue',
        sentence: '— ___, je m\'appelle Lucas. Et vous ?',
        options: ['Au revoir', 'Bonne nuit', 'Bonjour', 'À demain'],
        correctAnswer: 'Bonjour'
      },
      {
        id: 'L1-6', type: 'qcm', title: 'Formel ou informel ?', characterId: 'fatou',
        characterMessage: "Complète la phrase ! C'est comme un puzzle — trouve la pièce manquante.",
        question: 'Vous parlez à votre professeur. Que dites-vous ?',
        options: ['Salut !', 'Bonjour, Madame.', 'Coucou !', 'Yo !'],
        correctIndex: 1,
        explanation: 'Avec un professeur, on utilise « Bonjour » + le titre (Madame, Monsieur). « Salut » est pour les amis.'
      },
      {
        id: 'L1-7', type: 'drag-drop', title: 'Remettez dans l\'ordre',
        instruction: 'Formez un dialogue de salutation :',
        items: ['Bonjour !', 'Comment allez-vous ?', 'Très bien, merci.', 'Et vous ?'],
        correctOrder: ['Bonjour !', 'Comment allez-vous ?', 'Très bien, merci.', 'Et vous ?']
      },
      {
        id: 'L1-8', type: 'listening', title: 'Compréhension — Au café', characterId: 'omar',
        characterMessage: "Écoute bien ! Je vais te parler comme au marché d'Antibes.",
        text: 'Bonsoir madame ! Bonsoir monsieur. Comment allez-vous ? Très bien, merci. Au revoir et bonne soirée !',
        question: 'À quel moment de la journée se passe cette scène ?',
        options: ['Le matin', 'L\'après-midi', 'Le soir', 'La nuit'],
        correctIndex: 2
      },
      {
        id: 'L1-9', type: 'final-quiz', title: 'Quiz final — Bonjour !',
        questions: [
          { question: 'Comment dit-on "Goodbye" en français ?', options: ['Bonjour', 'Merci', 'Au revoir', 'Salut'], correctIndex: 2 },
          { question: '« Bonsoir » s\'utilise…', options: ['Le matin', 'L\'après-midi', 'Le soir', 'Toute la journée'], correctIndex: 2 },
          { question: '« Salut » est…', options: ['Très formel', 'Informel', 'Une insulte', 'Un verbe'], correctIndex: 1 },
          { question: 'Que veut dire « S\'il vous plaît » ?', options: ['Thank you', 'Please', 'Sorry', 'Hello'], correctIndex: 1 },
          { question: 'Vous quittez un ami. Que dites-vous ?', options: ['Bonjour', 'À bientôt !', 'Bonsoir', 'S\'il vous plaît'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 2: Je m'appelle…
  {
    courseId: 'lesson-2',
    steps: [
      {
        id: 'L2-1', type: 'lesson', title: 'Je m\'appelle… — Se présenter',
        content: `Pour se présenter en français, voici les phrases clés :\n\n👤 **Identité :**\n- **Je m'appelle…** → My name is…\n- **Je suis…** → I am…\n- **J'ai … ans** → I am … years old\n\n🌍 **Origine :**\n- **Je suis** + nationalité → I am (nationality)\n- **Je viens de…** → I come from…\n- **J'habite à…** → I live in…\n\n📝 **Exemples :**\n- « Je m'appelle Lucas. J'ai 22 ans. Je suis brésilien. J'habite à Antibes. »\n- « Je m'appelle Yuki. Je suis japonaise. Je viens de Tokyo. »\n\n🤝 **Pour demander :**\n- **Comment vous appelez-vous ?** (formel)\n- **Comment tu t'appelles ?** (informel)\n- **Quel âge avez-vous / as-tu ?**`,
        tip: '💡 En français, on dit « J\'ai 20 ans » (I HAVE 20 years), pas « Je suis 20 ans ».'
      },
      {
        id: 'L2-2', type: 'flashcard', title: 'Vocabulaire — Se présenter', characterId: 'marie',
        characterMessage: "Bonjour à tous ! Prêts pour une nouvelle leçon ?",
        cards: [
          { front: 'Comment vous appelez-vous ?', back: 'What is your name? (formal)' },
          { front: 'Je m\'appelle…', back: 'My name is…' },
          { front: 'J\'ai vingt ans.', back: 'I am twenty years old.' },
          { front: 'Je suis étudiant(e).', back: 'I am a student.' },
          { front: 'J\'habite à Antibes.', back: 'I live in Antibes.' },
          { front: 'Enchanté(e) !', back: 'Nice to meet you!' },
        ]
      },
      {
        id: 'L2-3', type: 'listening', title: 'Écoute — Présentation de Lucas', characterId: 'lucas',
        characterMessage: "Écoute bien, je vais te lire quelque chose. C'est parti !",
        text: 'Bonjour ! Je m\'appelle Lucas. J\'ai vingt-deux ans. Je suis brésilien. J\'habite à Antibes pour apprendre le français.',
        question: 'D\'où vient Lucas ?',
        options: ['De France', 'Du Japon', 'Du Brésil', 'D\'Espagne'],
        correctIndex: 2
      },
      {
        id: 'L2-4', type: 'qcm', title: 'L\'âge en français',
        question: 'Comment dit-on "I am 25 years old" en français ?',
        options: ['Je suis 25 ans', 'J\'ai 25 ans', 'Je fais 25 ans', 'Mon âge est 25'],
        correctIndex: 1,
        explanation: 'En français on utilise le verbe AVOIR pour l\'âge : « J\'ai 25 ans ».'
      },
      {
        id: 'L2-5', type: 'fill-blank', title: 'Complétez la présentation', characterId: 'lucas',
        characterMessage: "Cette question m'a piégé la première fois. Fais attention !",
        sentence: 'Je ___ Marie et j\'___ trente ans.',
        options: ['m\'appelle / ai', 'suis / suis', 'appelle / suis', 'm\'appelle / suis'],
        correctAnswer: 'm\'appelle / ai'
      },
      {
        id: 'L2-6', type: 'drag-drop', title: 'Construisez une présentation',
        instruction: 'Remettez les mots dans l\'ordre :',
        items: ['m\'appelle', 'Je', 'Ahmed', 'et', 'marocain', 'je', 'suis'],
        correctOrder: ['Je', 'm\'appelle', 'Ahmed', 'et', 'je', 'suis', 'marocain']
      },
      {
        id: 'L2-7', type: 'qcm', title: 'Formel ou informel ?', characterId: 'hans',
        characterMessage: "Sujet, verbe, complément — c'est la structure de base en français.",
        question: 'Vous êtes à l\'école. La professeure vous demande votre nom. Que dit-elle ?',
        options: ['Tu t\'appelles comment ?', 'C\'est quoi ton nom ?', 'Comment vous appelez-vous ?', 'T\'es qui ?'],
        correctIndex: 2,
        explanation: '« Comment vous appelez-vous ? » est la forme formelle, utilisée par un professeur.'
      },
      {
        id: 'L2-8', type: 'final-quiz', title: 'Quiz final — Je m\'appelle…',
        questions: [
          { question: '« ___ tu t\'appelles ? »', options: ['Que', 'Comment', 'Où', 'Quand'], correctIndex: 1 },
          { question: '« J\'___ à Antibes. »', options: ['suis', 'ai', 'habite', 'appelle'], correctIndex: 2 },
          { question: '« Elle ___ vingt-deux ans. »', options: ['est', 'a', 'fait', 'va'], correctIndex: 1 },
          { question: '« Je suis ___. » (nationality, female)', options: ['français', 'française', 'France', 'francais'], correctIndex: 1 },
          { question: '« ___ ! » (Nice to meet you)', options: ['Au revoir', 'Merci', 'Enchanté', 'Pardon'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 3: Les sons du français
  {
    courseId: 'lesson-3',
    steps: [
      {
        id: 'L3-1', type: 'lesson', title: 'Les sons du français',
        content: `L'alphabet français a **26 lettres**, comme en anglais, mais les sons sont différents !\n\n🔤 **Les accents :**\n- **é** (accent aigu) → son fermé : café, étudiant\n- **è / ê** (accent grave/circonflexe) → son ouvert : mère, fête\n- **ë** (tréma) → on prononce les deux voyelles : Noël\n- **ç** (cédille) → son « s » : français, garçon\n\n🎵 **Sons spécifiques du français :**\n- **ou** → « ou » comme dans « bonjour »\n- **u** → « u » (arrondir les lèvres) : « salut, tu, rue »\n- **on** → son nasal : « bonjour, bon, nom »\n- **an/en** → son nasal : « France, étudiant, en »\n- **in/ain** → son nasal : « vin, main, cinq »\n- **oi** → « wa » : « moi, toi, bonsoir »`,
        tip: '💡 Le son « u » français n\'existe pas en anglais ! Dites « ee » et arrondissez vos lèvres → « u ».'
      },
      {
        id: 'L3-2', type: 'listening', title: 'Écoute — Les voyelles nasales', characterId: 'thomas',
        text: 'Bonjour, mon nom est Antoine. Je suis français. J\'habite à Antibes, en France.',
        question: 'Combien de sons nasaux (on, an, in) entendez-vous dans cette phrase ?',
        options: ['1', '2', '3', '4 ou plus'],
        correctIndex: 3
      },
      {
        id: 'L3-3', type: 'qcm', title: 'Les accents',
        question: 'Quel accent se trouve sur le « e » de « café » ?',
        options: ['Accent grave', 'Accent aigu', 'Accent circonflexe', 'Tréma'],
        correctIndex: 1,
        explanation: 'L\'accent aigu (é) donne un son fermé. On le trouve dans : café, étudiant, été.'
      },
      {
        id: 'L3-4', type: 'flashcard', title: 'Les sons — Exemples', characterId: 'lucas',
        characterMessage: "Réfléchis bien, la réponse est plus simple qu'on ne le pense.",
        cards: [
          { front: 'ou → bonjour', back: 'Sound: "oo" like in "food"' },
          { front: 'u → salut', back: 'Sound: round your lips while saying "ee"' },
          { front: 'on → bon', back: 'Nasal sound: "on" (nose vibrates)' },
          { front: 'an → France', back: 'Nasal sound: "ahn" (nose vibrates)' },
          { front: 'oi → moi', back: 'Sound: "wa" like in "wand"' },
          { front: 'é → café', back: 'Closed "e" sound: "ay"' },
        ]
      },
      {
        id: 'L3-5', type: 'fill-blank', title: 'L\'accent correct',
        sentence: 'Je suis ___ (étudiant/etudiant) au Centre International d\'Antibes.',
        options: ['etudiant', 'étudiant', 'ètudiant', 'êtudiant'],
        correctAnswer: 'étudiant'
      },
      {
        id: 'L3-6', type: 'qcm', title: 'La cédille', characterId: 'fatou',
        characterMessage: "Au Sénégal, on apprend le français à l'école. C'est un exercice classique !",
        question: 'Pourquoi met-on une cédille sous le « c » de « français » ?',
        options: ['Pour décorer', 'Pour faire le son « k »', 'Pour faire le son « s » devant a/o/u', 'C\'est optionnel'],
        correctIndex: 2,
        explanation: 'Sans cédille, « ca » se prononce « ka ». La cédille transforme le son en « sa » : français, garçon.'
      },
      {
        id: 'L3-7', type: 'final-quiz', title: 'Quiz final — Les sons du français',
        questions: [
          { question: 'Le son « u » dans « salut » est…', options: ['Comme "oo" en anglais', 'Unique au français', 'Comme "uh"', 'Silencieux'], correctIndex: 1 },
          { question: '« ç » se prononce comme…', options: ['k', 'ch', 's', 'z'], correctIndex: 2 },
          { question: '« oi » dans « bonsoir » se prononce…', options: ['"oy"', '"oh"', '"wa"', '"ow"'], correctIndex: 2 },
          { question: 'Quel mot contient un son nasal ?', options: ['Café', 'Merci', 'Bonjour', 'Salut'], correctIndex: 2 },
          { question: 'L\'accent aigu (´) donne un son…', options: ['Ouvert', 'Fermé', 'Nasal', 'Silencieux'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 4: Tu ou vous ?
  {
    courseId: 'lesson-4',
    steps: [
      {
        id: 'L4-1', type: 'lesson', title: 'Tu ou vous ? — Le tutoiement et le vouvoiement',
        content: `En français, il y a **deux façons** de dire « you » :\n\n🟢 **TU** — informel, singulier :\n- Amis, famille, enfants, camarades de classe\n- « Comment tu t'appelles ? », « Tu habites où ? »\n\n🔵 **VOUS** — formel OU pluriel :\n- Professeurs, inconnus, personnes plus âgées, au travail\n- « Comment vous appelez-vous ? », « Vous habitez où ? »\n- Aussi pour parler à **plusieurs personnes**\n\n⚠️ **Attention :**\n- Au marché provençal d'Antibes → **vous** (le commerçant est un inconnu)\n- Avec votre colocataire → **tu** (c'est un ami)\n- Avec la directrice de l'école → **vous** (c'est une autorité)\n\n📍 **Dialogue au marché d'Antibes :**\n- « Bonjour monsieur, **vous** avez des tomates ? »\n- « Oui madame, **vous** voulez combien ? »`,
        tip: '💡 En cas de doute, commencez par « vous ». L\'autre personne vous dira « On peut se tutoyer ! » si elle préfère « tu ».'
      },
      {
        id: 'L4-2', type: 'qcm', title: 'Tu ou vous ?', characterId: 'marie',
        characterMessage: "Aujourd'hui, je vais vous expliquer quelque chose de très utile.",
        question: 'Vous parlez à un vendeur au marché d\'Antibes. Que dites-vous ?',
        options: ['Tu as des oranges ?', 'Vous avez des oranges ?', 'T\'as des oranges ?', 'Avez des oranges ?'],
        correctIndex: 1,
        explanation: 'Avec un commerçant qu\'on ne connaît pas, on utilise « vous ».'
      },
      {
        id: 'L4-3', type: 'listening', title: 'Écoute — Au marché provençal',
        text: 'Bonjour monsieur ! Vous avez des olives ? Oui madame, vous voulez les vertes ou les noires ? Les noires, s\'il vous plaît. Voilà ! Ça fait trois euros.',
        question: 'Qu\'achète la cliente ?',
        options: ['Des tomates', 'Des oranges', 'Des olives noires', 'Du fromage'],
        correctIndex: 2
      },
      {
        id: 'L4-4', type: 'fill-blank', title: 'Choisissez tu ou vous', characterId: 'omar',
        characterMessage: "Dans ma cuisine, j'écoute toujours la radio française. Ça aide !",
        sentence: 'Salut Marie ! ___ vas bien ? (à une amie)',
        options: ['Vous', 'Tu', 'Il', 'Elle'],
        correctAnswer: 'Tu'
      },
      {
        id: 'L4-5', type: 'qcm', title: 'Le bon choix',
        question: 'Avec votre professeur de français, vous dites :',
        options: ['Tu peux répéter ?', 'Vous pouvez répéter ?', 'Peux-tu répéter ?', 'Répète !'],
        correctIndex: 1,
        explanation: 'On utilise « vous » avec un professeur pour montrer du respect.'
      },
      {
        id: 'L4-6', type: 'drag-drop', title: 'Classez les situations', characterId: 'lucas',
        characterMessage: "J'ai fait cette erreur au début — ne tombe pas dans le piège !",
        instruction: 'Remettez dans l\'ordre ce dialogue au marché :',
        items: ['Voilà, merci !', 'Bonjour, vous avez du miel ?', 'Oui, cinq euros le pot.', 'J\'en prends un, s\'il vous plaît.'],
        correctOrder: ['Bonjour, vous avez du miel ?', 'Oui, cinq euros le pot.', 'J\'en prends un, s\'il vous plaît.', 'Voilà, merci !']
      },
      {
        id: 'L4-7', type: 'final-quiz', title: 'Quiz final — Tu ou vous ?',
        questions: [
          { question: 'Avec un enfant, on utilise…', options: ['Vous', 'Tu', 'Ils', 'On'], correctIndex: 1 },
          { question: 'Avec votre directeur, on utilise…', options: ['Tu', 'Il', 'Vous', 'Eux'], correctIndex: 2 },
          { question: '« Vous » peut aussi signifier…', options: ['Singulier informel', 'Pluriel (several people)', 'Passé', 'Futur'], correctIndex: 1 },
          { question: 'Au restaurant, au serveur…', options: ['Tu veux quoi ?', 'Vous avez le menu ?', 'T\'as la carte ?', 'Donne-moi ça.'], correctIndex: 1 },
          { question: '« On peut se tutoyer » veut dire…', options: ['Let\'s use "vous"', 'Let\'s use "tu"', 'Let\'s leave', 'Please sit down'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 5: Les chiffres de 0 à 20
  {
    courseId: 'lesson-5',
    steps: [
      {
        id: 'L5-1', type: 'lesson', title: 'Les chiffres de 0 à 20',
        content: `🔢 **Les nombres de 0 à 20 :**\n\n0 — zéro\n1 — un\n2 — deux\n3 — trois\n4 — quatre\n5 — cinq\n6 — six\n7 — sept\n8 — huit\n9 — neuf\n10 — dix\n\n11 — onze\n12 — douze\n13 — treize\n14 — quatorze\n15 — quinze\n16 — seize\n17 — dix-sept\n18 — dix-huit\n19 — dix-neuf\n20 — vingt\n\n📞 **Donner son numéro de téléphone :**\nEn France, les numéros se lisent par paires :\n06 45 12 78 03 → « zéro six, quarante-cinq, douze, soixante-dix-huit, zéro trois »\n\n🎂 **Donner son âge :**\n- J'ai dix-huit ans.\n- J'ai vingt ans.`,
        tip: '💡 Les nombres de 11 à 16 sont irréguliers — il faut les mémoriser ! À partir de 17, c\'est logique : dix-sept, dix-huit, dix-neuf.'
      },
      {
        id: 'L5-2', type: 'flashcard', title: 'Les nombres — Flashcards', characterId: 'marie',
        characterMessage: "C'est un sujet passionnant, vous allez voir !",
        cards: [
          { front: '0', back: 'zéro' },
          { front: '5', back: 'cinq' },
          { front: '8', back: 'huit' },
          { front: '11', back: 'onze' },
          { front: '14', back: 'quatorze' },
          { front: '16', back: 'seize' },
          { front: '19', back: 'dix-neuf' },
          { front: '20', back: 'vingt' },
        ]
      },
      {
        id: 'L5-3', type: 'listening', title: 'Écoute — L\'âge',
        text: 'J\'ai dix-neuf ans et mon frère a quinze ans.',
        question: 'Quel âge a le frère ?',
        options: ['13 ans', '15 ans', '17 ans', '19 ans'],
        correctIndex: 1
      },
      {
        id: 'L5-4', type: 'qcm', title: 'Le bon nombre', characterId: 'omar',
        characterMessage: "Concentre-toi sur les mots que tu connais déjà.",
        question: 'Comment écrit-on « 17 » en lettres ?',
        options: ['Dix-sept', 'Sept-dix', 'Dixsept', 'Septante'],
        correctIndex: 0,
        explanation: 'À partir de 17 : dix + le chiffre. Dix-sept, dix-huit, dix-neuf.'
      },
      {
        id: 'L5-5', type: 'fill-blank', title: 'Complétez',
        sentence: 'J\'ai ___ ans. (18)',
        options: ['dix-six', 'dix-huit', 'dix-sept', 'huit-dix'],
        correctAnswer: 'dix-huit'
      },
      {
        id: 'L5-6', type: 'drag-drop', title: 'L\'ordre des nombres', characterId: 'fatou',
        characterMessage: "Lis toute la phrase avant de choisir. Le contexte est la clé !",
        instruction: 'Remettez ces nombres dans l\'ordre croissant :',
        items: ['quinze', 'trois', 'onze', 'vingt', 'sept'],
        correctOrder: ['trois', 'sept', 'onze', 'quinze', 'vingt']
      },
      {
        id: 'L5-7', type: 'final-quiz', title: 'Quiz final — Les chiffres',
        questions: [
          { question: 'Comment dit-on « 12 » ?', options: ['Douze', 'Dix-deux', 'Doze', 'Duze'], correctIndex: 0 },
          { question: 'Comment dit-on « 16 » ?', options: ['Six-dix', 'Seize', 'Seizième', 'Dix-six'], correctIndex: 1 },
          { question: '« J\'ai ___ ans. » (20)', options: ['vingt', 'ving', 'vint', 'vingts'], correctIndex: 0 },
          { question: 'Quel nombre est « quatorze » ?', options: ['4', '14', '40', '44'], correctIndex: 1 },
          { question: '« Treize » c\'est…', options: ['12', '13', '30', '3'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 6: Quelle est ta nationalité ?
  {
    courseId: 'lesson-6',
    steps: [
      {
        id: 'L6-1', type: 'lesson', title: 'Les nationalités',
        content: `En français, les adjectifs de nationalité changent selon le **genre** (masculin/féminin) :\n\n🌍 **Règle générale : ajouter -e au féminin**\n\n| Pays | Masculin | Féminin |\n|------|----------|----------|\n| 🇫🇷 France | français | français**e** |\n| 🇪🇸 Espagne | espagnol | espagnol**e** |\n| 🇩🇪 Allemagne | allemand | allemand**e** |\n| 🇯🇵 Japon | japonais | japonais**e** |\n| 🇺🇸 États-Unis | américain | américain**e** |\n\n🔄 **Cas spéciaux : -ien → -ienne**\n| 🇧🇷 Brésil | brésilien | brésilienne |\n| 🇮🇹 Italie | italien | italienne |\n\n🔄 **-c → -que**\n| 🇲🇦 Maroc | marocain | marocaine |\n| 🇹🇷 Turquie | turc | turque |\n\n📝 **Phrase modèle :**\n- « Je suis française. » / « Il est brésilien. »`,
        tip: '💡 Les nationalités ne prennent PAS de majuscule quand elles sont des adjectifs : « Je suis français. »'
      },
      {
        id: 'L6-2', type: 'flashcard', title: 'Nationalités — Masculin / Féminin', characterId: 'marie',
        characterMessage: "Bienvenue dans ma classe ! Aujourd'hui, on découvre ensemble un nouveau sujet.",
        cards: [
          { front: '🇫🇷 français / française', back: 'French (m/f)' },
          { front: '🇧🇷 brésilien / brésilienne', back: 'Brazilian (m/f)' },
          { front: '🇯🇵 japonais / japonaise', back: 'Japanese (m/f)' },
          { front: '🇺🇸 américain / américaine', back: 'American (m/f)' },
          { front: '🇪🇸 espagnol / espagnole', back: 'Spanish (m/f)' },
          { front: '🇩🇪 allemand / allemande', back: 'German (m/f)' },
        ]
      },
      {
        id: 'L6-3', type: 'qcm', title: 'Masculin ou féminin ?',
        question: 'Yuki est une femme japonaise. On dit :',
        options: ['Elle est japonais', 'Elle est japonaise', 'Elle est japon', 'Elle est japonienne'],
        correctIndex: 1,
        explanation: 'Japonais → japonaise (on ajoute -e au féminin).'
      },
      {
        id: 'L6-4', type: 'fill-blank', title: 'La bonne nationalité', characterId: 'lucas',
        characterMessage: "Quand je suis arrivé à Antibes, j'ai dû apprendre ça aussi !",
        sentence: 'Lucas est brésilien. Maria est ___.',
        options: ['brésilien', 'brésilienne', 'brésiliene', 'brasilienne'],
        correctAnswer: 'brésilienne'
      },
      {
        id: 'L6-5', type: 'qcm', title: 'Le bon accord',
        question: 'Ahmed est du Maroc. Il est…',
        options: ['marocaine', 'marocain', 'maroc', 'marocien'],
        correctIndex: 1,
        explanation: 'Ahmed est un homme, donc on utilise le masculin : marocain.'
      },
      {
        id: 'L6-6', type: 'final-quiz', title: 'Quiz final — Les nationalités', characterId: 'lucas',
        characterMessage: "Moi aussi au début, je trouvais ça compliqué ! Mais on s'y habitue.",
        questions: [
          { question: 'Sophie est de France. Elle est…', options: ['français', 'française', 'France', 'francaise'], correctIndex: 1 },
          { question: 'Le féminin de « italien » est…', options: ['italiene', 'italienne', 'italianne', 'itale'], correctIndex: 1 },
          { question: 'Il vient d\'Allemagne. Il est…', options: ['allemand', 'allemagne', 'allemanien', 'germain'], correctIndex: 0 },
          { question: 'Elle est des États-Unis. Elle est…', options: ['américain', 'américaine', 'america', 'états-unienne'], correctIndex: 1 },
          { question: 'Le féminin de « turc » est…', options: ['turce', 'turque', 'turquie', 'turque'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 7: Les jours et les mois
  {
    courseId: 'lesson-7',
    steps: [
      {
        id: 'L7-1', type: 'lesson', title: 'Les jours et les mois',
        content: `📅 **Les jours de la semaine :**\n- lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche\n\n📅 **Les mois de l'année :**\n- janvier, février, mars, avril, mai, juin\n- juillet, août, septembre, octobre, novembre, décembre\n\n🌸 **Les saisons :**\n- le printemps (mars-mai)\n- l'été (juin-août) ☀️\n- l'automne (septembre-novembre) 🍂\n- l'hiver (décembre-février) ❄️\n\n📝 **Phrases utiles :**\n- « Quel jour sommes-nous ? » → « Nous sommes lundi. »\n- « Quelle est la date ? » → « C'est le 15 mars. »\n- « En été, il fait chaud à Antibes ! »\n\n⚠️ En français, les jours et les mois s'écrivent en **minuscules** (pas de majuscule).`,
        tip: '💡 À Antibes, l\'été est magnifique ! La saison dure de juin à septembre avec plus de 300 jours de soleil par an.'
      },
      {
        id: 'L7-2', type: 'flashcard', title: 'Jours et mois', characterId: 'marie',
        characterMessage: "Bonjour à tous ! Prêts pour une nouvelle leçon ?",
        cards: [
          { front: 'lundi', back: 'Monday' },
          { front: 'mercredi', back: 'Wednesday' },
          { front: 'vendredi', back: 'Friday' },
          { front: 'dimanche', back: 'Sunday' },
          { front: 'janvier', back: 'January' },
          { front: 'août', back: 'August' },
        ]
      },
      {
        id: 'L7-3', type: 'drag-drop', title: 'L\'ordre des jours',
        instruction: 'Remettez les jours dans l\'ordre (lundi → dimanche) :',
        items: ['vendredi', 'lundi', 'mercredi', 'dimanche', 'mardi'],
        correctOrder: ['lundi', 'mardi', 'mercredi', 'vendredi', 'dimanche']
      },
      {
        id: 'L7-4', type: 'qcm', title: 'Les saisons', characterId: 'hans',
        characterMessage: "Prends le temps de lire tous les mots avant de les placer.",
        question: 'En France, « l\'été » correspond à…',
        options: ['Décembre-février', 'Mars-mai', 'Juin-août', 'Septembre-novembre'],
        correctIndex: 2,
        explanation: 'L\'été en France va de juin à août. C\'est la période la plus chaude.'
      },
      {
        id: 'L7-5', type: 'fill-blank', title: 'Le bon mois',
        sentence: 'Noël est en ___.',
        options: ['janvier', 'mars', 'décembre', 'octobre'],
        correctAnswer: 'décembre'
      },
      {
        id: 'L7-6', type: 'final-quiz', title: 'Quiz final — Jours et mois', characterId: 'fatou',
        characterMessage: "Ne te précipite pas, réfléchis au sens de la phrase complète.",
        questions: [
          { question: 'Quel jour vient après mercredi ?', options: ['Mardi', 'Jeudi', 'Vendredi', 'Lundi'], correctIndex: 1 },
          { question: 'Combien de jours dans une semaine ?', options: ['5', '6', '7', '8'], correctIndex: 2 },
          { question: 'Le 14 juillet est en…', options: ['Juin', 'Juillet', 'Août', 'Septembre'], correctIndex: 1 },
          { question: 'Le printemps est en…', options: ['Déc-Fév', 'Mar-Mai', 'Jun-Aoû', 'Sep-Nov'], correctIndex: 1 },
          { question: 'En français, « monday » se dit…', options: ['Lundi', 'Mardi', 'Lunes', 'Montag'], correctIndex: 0 },
        ]
      }
    ]
  },

  // Lesson 8: Au café d'Antibes
  {
    courseId: 'lesson-8',
    steps: [
      {
        id: 'L8-1', type: 'lesson', title: 'Au café d\'Antibes — Commander',
        content: `☕ **Au café, les phrases essentielles :**\n\n🗣️ **Le serveur :**\n- « Bonjour ! Qu'est-ce que vous désirez ? »\n- « Vous voulez autre chose ? »\n- « Ça fait 3,50 €. »\n\n👤 **Le client :**\n- « Je voudrais un café, s'il vous plaît. »\n- « Un thé, s'il vous plaît. »\n- « L'addition, s'il vous plaît. »\n\n🥐 **Les boissons et encas :**\n- un café / un expresso\n- un café crème\n- un thé (vert, noir, à la menthe)\n- un jus d'orange\n- un verre d'eau\n- un croissant\n- une tartine\n\n📍 **Dialogue au café « Le Provençal » à Antibes :**\nSophie : « Bonjour ! Qu'est-ce que je vous sers ? »\nLucas : « Bonjour ! Je voudrais un café et un croissant, s'il vous plaît. »\nSophie : « Tout de suite ! Ça fait 4 euros 50. »\nLucas : « Voilà. Merci ! »\nSophie : « Merci à vous. Bonne journée ! »`,
        tip: '💡 « Je voudrais » est plus poli que « Je veux ». Utilisez toujours « je voudrais » au café et au restaurant !'
      },
      {
        id: 'L8-2', type: 'listening', title: 'Écoute — Au café', characterId: 'marie',
        characterMessage: "Installez-vous confortablement, on commence !",
        text: 'Bonjour madame ! Je voudrais un thé à la menthe et un croissant, s\'il vous plaît. Très bien ! Ça fait cinq euros.',
        question: 'Que commande le client ?',
        options: ['Un café et un croissant', 'Un thé à la menthe et un croissant', 'Un jus d\'orange', 'Un verre d\'eau'],
        correctIndex: 1
      },
      {
        id: 'L8-3', type: 'flashcard', title: 'Au café — Vocabulaire',
        cards: [
          { front: 'Je voudrais…', back: 'I would like…' },
          { front: 'L\'addition, s\'il vous plaît.', back: 'The check, please.' },
          { front: 'Un café crème', back: 'A coffee with milk/cream' },
          { front: 'Un jus d\'orange', back: 'An orange juice' },
          { front: 'Ça fait combien ?', back: 'How much is it?' },
          { front: 'Bonne journée !', back: 'Have a nice day!' },
        ]
      },
      {
        id: 'L8-4', type: 'fill-blank', title: 'Commander au café',
        sentence: 'Je ___ un café, s\'il vous plaît.',
        options: ['veux', 'voudrais', 'prends', 'mange'],
        correctAnswer: 'voudrais'
      },
      {
        id: 'L8-5', type: 'drag-drop', title: 'L\'ordre du dialogue', characterId: 'fatou',
        characterMessage: "Cet exercice entraîne ta grammaire et ton vocabulaire en même temps.",
        instruction: 'Remettez ce dialogue au café dans l\'ordre :',
        items: ['Ça fait trois euros.', 'Bonjour ! Qu\'est-ce que vous désirez ?', 'Voilà, merci !', 'Un café, s\'il vous plaît.'],
        correctOrder: ['Bonjour ! Qu\'est-ce que vous désirez ?', 'Un café, s\'il vous plaît.', 'Ça fait trois euros.', 'Voilà, merci !']
      },
      {
        id: 'L8-6', type: 'qcm', title: 'La politesse',
        question: 'Quelle est la façon la plus polie de commander ?',
        options: ['Donne-moi un café !', 'Un café.', 'Je voudrais un café, s\'il vous plaît.', 'Café !'],
        correctIndex: 2,
        explanation: '« Je voudrais… s\'il vous plaît » est la formule polie standard.'
      },
      {
        id: 'L8-7', type: 'final-quiz', title: 'Quiz final — Au café', characterId: 'lucas',
        characterMessage: "Cette question m'a piégé la première fois. Fais attention !",
        questions: [
          { question: '« Je voudrais » signifie…', options: ['I must', 'I would like', 'I can', 'I know'], correctIndex: 1 },
          { question: 'Pour demander le prix, on dit…', options: ['C\'est quoi ?', 'Ça fait combien ?', 'C\'est où ?', 'C\'est qui ?'], correctIndex: 1 },
          { question: '« L\'addition » c\'est…', options: ['The menu', 'The tip', 'The bill', 'The table'], correctIndex: 2 },
          { question: 'Un « café crème » contient…', options: ['Du lait/crème', 'Du sucre', 'Du chocolat', 'De la glace'], correctIndex: 0 },
          { question: 'Pour finir la conversation, on dit…', options: ['Salut', 'Bonne journée !', 'À demain', 'Pardon'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 9: Révision Module A1.1
  {
    courseId: 'lesson-9',
    steps: [
      {
        id: 'L9-1', type: 'lesson', title: 'Révision — Premiers pas en français',
        content: `📝 **Récapitulatif du Module A1.1**\n\nVous avez appris :\n\n✅ **Les salutations** : bonjour, bonsoir, au revoir, salut\n✅ **Se présenter** : je m\'appelle, j\'ai … ans, j\'habite à\n✅ **Les sons du français** : les accents, les voyelles nasales\n✅ **Tu vs Vous** : informel vs formel\n✅ **Les chiffres de 0 à 20**\n✅ **Les nationalités** : masculin/féminin\n✅ **Les jours et les mois**\n✅ **Commander au café** : je voudrais, s\'il vous plaît\n\n🎯 **Objectif atteint :**\nVous pouvez maintenant vous présenter, saluer, compter, et commander au café en français !`,
        tip: '💡 C\'est le moment de tout réviser avant l\'examen du module !'
      },
      {
        id: 'L9-2', type: 'qcm', title: 'Révision — Salutations', characterId: 'marie',
        characterMessage: "Aujourd'hui, je vais vous expliquer quelque chose de très utile.",
        question: 'Il est 21h. Que dites-vous ?',
        options: ['Bonjour', 'Bonsoir', 'Bonne nuit', 'Salut'],
        correctIndex: 1,
        explanation: 'Le soir, on dit « Bonsoir ». « Bonne nuit » est pour aller dormir.'
      },
      {
        id: 'L9-3', type: 'fill-blank', title: 'Révision — Présentation',
        sentence: 'Je ___ Sophie et j\'___ 25 ans.',
        options: ['m\'appelle / ai', 'suis / suis', 'appelle / ai', 'm\'appelle / est'],
        correctAnswer: 'm\'appelle / ai'
      },
      {
        id: 'L9-4', type: 'qcm', title: 'Révision — Tu ou vous ?', characterId: 'fatou',
        characterMessage: "Complète la phrase ! C'est comme un puzzle — trouve la pièce manquante.",
        question: 'Avec votre professeur :',
        options: ['Tu parles français ?', 'Vous parlez français ?', 'Il parle français ?', 'On parle français ?'],
        correctIndex: 1,
        explanation: 'Avec un professeur, on utilise « vous » (formel).'
      },
      {
        id: 'L9-5', type: 'listening', title: 'Révision — Compréhension',
        text: 'Je m\'appelle Yuki. J\'ai dix-neuf ans. Je suis japonaise. J\'habite à Antibes.',
        question: 'Quel âge a Yuki ?',
        options: ['17 ans', '18 ans', '19 ans', '20 ans'],
        correctIndex: 2
      },
      {
        id: 'L9-6', type: 'final-quiz', title: 'Quiz de révision — Module A1.1', characterId: 'omar',
        characterMessage: "Au Maroc aussi, on apprend en écoutant. C'est la meilleure méthode !",
        questions: [
          { question: '« Au revoir » signifie…', options: ['Hello', 'Please', 'Goodbye', 'Thank you'], correctIndex: 2 },
          { question: 'Comment dit-on « 15 » ?', options: ['Quinze', 'Cinquante', 'Cinq', 'Quatorze'], correctIndex: 0 },
          { question: 'Le féminin de « français »…', options: ['française', 'francaise', 'francese', 'frances'], correctIndex: 0 },
          { question: '« Décembre » est en quelle saison ?', options: ['Été', 'Printemps', 'Automne', 'Hiver'], correctIndex: 3 },
          { question: '« Je voudrais un café » est…', options: ['Impoli', 'Poli', 'Familier', 'Incorrect'], correctIndex: 1 },
          { question: '« J\'ai 20 ans » utilise le verbe…', options: ['Être', 'Avoir', 'Faire', 'Aller'], correctIndex: 1 },
          { question: 'Quel jour vient après jeudi ?', options: ['Mercredi', 'Vendredi', 'Samedi', 'Mardi'], correctIndex: 1 },
          { question: 'Un « expresso » est…', options: ['Un thé', 'Un café court', 'Un jus', 'Un dessert'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 10: Examen Module A1.1
  {
    courseId: 'lesson-10',
    steps: [
      {
        id: 'L10-1', type: 'lesson', title: '🎓 Examen Module A1.1 — Premiers pas en français',
        content: `🏆 **Examen du Module A1.1**\n\nCet examen teste **toutes les compétences** apprises dans ce module :\n\n📋 **Contenu de l'examen :**\n- 15 questions variées\n- Salutations, présentation, sons, tu/vous\n- Chiffres, nationalités, jours/mois\n- Commander au café\n\n⏱️ **Barème :**\n- Chaque bonne réponse = 1 point\n- Score minimum pour valider : 10/15 (67%)\n- Score parfait = 50 tokens bonus !\n\n🏅 **Récompense :**\n- Badge « Bienvenue à Antibes » 🏖️\n- 50 tokens pour le module validé\n\nBonne chance ! 🍀`,
        tip: '💡 Prenez votre temps et relisez bien chaque question avant de répondre.'
      },
      {
        id: 'L10-2', type: 'final-quiz', title: 'Examen — Module A1.1', characterId: 'marie',
        characterMessage: "C'est un sujet passionnant, vous allez voir !",
        questions: [
          { question: 'Il est 8h du matin. Vous dites…', options: ['Bonsoir', 'Bonne nuit', 'Bonjour', 'Au revoir'], correctIndex: 2 },
          { question: '« Je m\'appelle Marie » signifie…', options: ['I like Marie', 'My name is Marie', 'I am calling Marie', 'Marie is here'], correctIndex: 1 },
          { question: 'L\'accent sur « é » donne un son…', options: ['Ouvert', 'Fermé', 'Nasal', 'Silencieux'], correctIndex: 1 },
          { question: 'Au médecin, vous dites…', options: ['Tu', 'Vous', 'Il', 'Eux'], correctIndex: 1 },
          { question: 'Comment dit-on « 13 » ?', options: ['Treize', 'Trieze', 'Treze', 'Traize'], correctIndex: 0 },
          { question: 'Elle est du Japon. Elle est…', options: ['japonnais', 'japonaise', 'japonais', 'japon'], correctIndex: 1 },
          { question: 'Quel jour vient après mardi ?', options: ['Lundi', 'Jeudi', 'Mercredi', 'Vendredi'], correctIndex: 2 },
          { question: '« Je voudrais un thé » est…', options: ['Impoli', 'Poli', 'Incorrect', 'Familier'], correctIndex: 1 },
          { question: '« J\'ai 20 ans » signifie…', options: ['I have 20 years', 'I am 20 years old', 'I want 20 years', 'I do 20 years'], correctIndex: 1 },
          { question: '« Ça fait combien ? » veut dire…', options: ['How are you?', 'How much is it?', 'What is it?', 'Where is it?'], correctIndex: 1 },
          { question: 'Le mois de Noël est…', options: ['Novembre', 'Décembre', 'Janvier', 'Février'], correctIndex: 1 },
          { question: '« Enchanté » signifie…', options: ['Sorry', 'Goodbye', 'Nice to meet you', 'Excuse me'], correctIndex: 2 },
          { question: '« oi » dans « bonsoir » se prononce…', options: ['"oy"', '"wa"', '"oh"', '"ow"'], correctIndex: 1 },
          { question: '« Un café crème » contient…', options: ['Du chocolat', 'Du lait', 'Du miel', 'Du citron'], correctIndex: 1 },
          { question: 'Combien de jours dans une semaine ?', options: ['5', '6', '7', '10'], correctIndex: 2 },
        ]
      }
    ]
  },
];
