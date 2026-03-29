// Interactive lesson content for A2 Module 3: Le monde du travail (Lessons 71-80)
import type { CourseContent } from './course-content';

export const a2Module3Content: CourseContent[] = [
  // Lesson 71: Les métiers
  {
    courseId: 'lesson-71',
    steps: [
      {
        id: 'L71-1', type: 'lesson', title: 'Les métiers', characterId: 'marie',
        characterMessage: "Vous progressez bien ! Cette leçon va enrichir votre français.",
        content: `Découvrons les **professions** en français ! 💼\n\n👨‍⚕️ **Professions courantes (masculin / féminin) :**\n- Un médecin / Une médecin(e)\n- Un professeur / Une professeure\n- Un avocat / Une avocate\n- Un ingénieur / Une ingénieure\n- Un serveur / Une serveuse\n- Un boulanger / Une boulangère\n- Un infirmier / Une infirmière\n- Un vendeur / Une vendeuse\n- Un comptable / Une comptable\n- Un journaliste / Une journaliste\n\n📐 **Structure :**\n- Je suis + profession (sans article !)\n- Il est médecin. / Elle est avocate.\n- Je travaille comme + profession\n- Je travaille dans + domaine (la santé, l'éducation…)`,
        tip: '💡 En français, on ne met PAS d\'article devant la profession : « Je suis médecin » (pas « je suis un médecin »).'
      },
      {
        id: 'L71-2', type: 'listening', title: 'Écoute — Présentations', characterId: 'hans',
        text: 'Bonjour, je m\'appelle Hans. Je suis ingénieur. Je travaille dans une entreprise de technologie à Sophia Antipolis. Ma collègue Sophie est comptable. Elle travaille dans le même bureau.',
        question: 'Où travaille Hans ?',
        options: ['À Paris', 'À Nice', 'À Sophia Antipolis', 'À Cannes'],
        correctIndex: 2
      },
      {
        id: 'L71-3', type: 'qcm', title: 'Masculin / Féminin', characterId: 'elena',
        characterMessage: "C'est plus facile quand on parle déjà une langue latine !",
        question: 'Quel est le féminin de « boulanger » ?',
        options: ['Boulangeuse', 'Boulangère', 'Boulangère', 'Boulangeresse'],
        correctIndex: 1,
        explanation: 'Boulanger → boulangère (le -er devient -ère au féminin).'
      },
      {
        id: 'L71-4', type: 'flashcard', title: 'Les métiers', characterId: 'thomas',
        characterMessage: "Le français est riche de mots qui n'existent pas dans d'autres langues.",
        cards: [
          { front: 'Un médecin', back: 'A doctor' },
          { front: 'Un avocat / Une avocate', back: 'A lawyer' },
          { front: 'Un infirmier / Une infirmière', back: 'A nurse' },
          { front: 'Un serveur / Une serveuse', back: 'A waiter / waitress' },
          { front: 'Un comptable', back: 'An accountant' },
          { front: 'Un journaliste', back: 'A journalist' },
        ]
      },
      {
        id: 'L71-5', type: 'fill-blank', title: 'Sans article !', characterId: 'fatou',
        characterMessage: "La grammaire française, c'est comme une recette : il faut les bons ingrédients !",
        sentence: 'Marie ___ professeure de français.',
        options: ['est une', 'est', 'a une', 'fait'],
        correctAnswer: 'est'
      },
      {
        id: 'L71-6', type: 'drag-drop', title: 'Présentez-vous', characterId: 'yuki',
        characterMessage: "Les phrases sont plus longues maintenant. Lis d'abord tous les mots !",
        instruction: 'Formez une phrase de présentation professionnelle :',
        items: ['dans', 'travaille', 'la santé', 'Je', 'comme', 'infirmière'],
        correctOrder: ['Je', 'travaille', 'comme', 'infirmière', 'dans', 'la santé']
      },
      {
        id: 'L71-7', type: 'qcm', title: 'Sophia Antipolis', characterId: 'omar',
        characterMessage: "Cette question me rappelle mes premiers mois en France.",
        question: 'Sophia Antipolis est…',
        options: ['Un musée', 'Une plage', 'Un parc technologique', 'Un restaurant'],
        correctIndex: 2,
        explanation: 'Sophia Antipolis est le plus grand parc technologique d\'Europe, situé près d\'Antibes !'
      },
      {
        id: 'L71-8', type: 'final-quiz', title: 'Quiz final — Les métiers', characterId: 'marie',
        characterMessage: "Ce quiz est un peu plus long, mais vous êtes prêts !",
        questions: [
          { question: '« Elle est ___ . » (doctor)', options: ['une médecin', 'médecin', 'la médecin', 'de médecin'], correctIndex: 1 },
          { question: 'Féminin de « serveur » = …', options: ['Serveuse', 'Serveure', 'Servante', 'Servrice'], correctIndex: 0 },
          { question: '« Je travaille ___ ingénieur. »', options: ['comme', 'dans', 'pour', 'en'], correctIndex: 0 },
          { question: '« A nurse » = …', options: ['Un médecin', 'Un infirmier', 'Un pharmacien', 'Un dentiste'], correctIndex: 1 },
          { question: 'Sophia Antipolis est près de…', options: ['Paris', 'Lyon', 'Antibes', 'Bordeaux'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 72: Mon CV en français
  {
    courseId: 'lesson-72',
    steps: [
      {
        id: 'L72-1', type: 'lesson', title: 'Mon CV en français', characterId: 'marie',
        characterMessage: "Bravo pour votre travail ! Continuons avec un nouveau thème.",
        content: `Apprenons à rédiger un **CV** en français ! 📄\n\n📋 **Structure d'un CV français :**\n\n1. **État civil :**\n- Nom, prénom\n- Adresse, téléphone, email\n- Date de naissance\n\n2. **Formation :**\n- Diplômes, études\n- Université, école\n\n3. **Expérience professionnelle :**\n- Poste occupé\n- Entreprise et dates\n- Responsabilités\n\n4. **Compétences :**\n- Langues parlées\n- Informatique\n- Permis de conduire\n\n5. **Centres d'intérêt :**\n- Loisirs, sports, voyages\n\n📝 **Vocabulaire :**\n- Une formation → education/training\n- Un diplôme → a degree\n- Une expérience → an experience\n- Une compétence → a skill`,
        tip: '💡 En France, on ajoute souvent une photo sur le CV. C\'est différent dans d\'autres pays !'
      },
      {
        id: 'L72-2', type: 'listening', title: 'Écoute — Présentation CV', characterId: 'hans',
        text: 'Je m\'appelle Lucas Martin. J\'ai vingt-huit ans. J\'ai un master en marketing de l\'université de Nice. J\'ai travaillé pendant trois ans comme responsable marketing chez L\'Oréal. Je parle français, anglais et portugais.',
        question: 'Combien de langues parle Lucas ?',
        options: ['Deux', 'Trois', 'Quatre', 'Une'],
        correctIndex: 1
      },
      {
        id: 'L72-3', type: 'qcm', title: 'Structure du CV', characterId: 'elena',
        characterMessage: "Attention, le français a des pièges que l'espagnol n'a pas.",
        question: 'Quelle section contient les diplômes ?',
        options: ['Expérience', 'Formation', 'Compétences', 'Centres d\'intérêt'],
        correctIndex: 1,
        explanation: 'La section « Formation » contient les études et les diplômes obtenus.'
      },
      {
        id: 'L72-4', type: 'flashcard', title: 'Vocabulaire du CV', characterId: 'thomas',
        characterMessage: "Ces expressions colorent la langue française. Apprends-les par cœur !",
        cards: [
          { front: 'Un CV (Curriculum Vitae)', back: 'A resume / CV' },
          { front: 'La formation', back: 'Education / Training' },
          { front: 'L\'expérience professionnelle', back: 'Work experience' },
          { front: 'Un diplôme', back: 'A degree / diploma' },
          { front: 'Les compétences', back: 'Skills' },
          { front: 'Les centres d\'intérêt', back: 'Hobbies / Interests' },
        ]
      },
      {
        id: 'L72-5', type: 'fill-blank', title: 'Complétez le CV', characterId: 'fatou',
        characterMessage: "À Dakar, mes professeurs nous faisaient faire beaucoup de ces exercices.",
        sentence: '___ professionnelle : Serveur au Restaurant du Port (2022-2024).',
        options: ['Formation', 'Expérience', 'Compétence', 'Intérêt'],
        correctAnswer: 'Expérience'
      },
      {
        id: 'L72-6', type: 'drag-drop', title: 'Ordre du CV', characterId: 'yuki',
        characterMessage: "La structure française est plus souple qu'on ne le pense.",
        instruction: 'Mettez les sections du CV dans l\'ordre :',
        items: ['Centres d\'intérêt', 'État civil', 'Expérience professionnelle', 'Formation'],
        correctOrder: ['État civil', 'Formation', 'Expérience professionnelle', 'Centres d\'intérêt']
      },
      {
        id: 'L72-7', type: 'qcm', title: 'Vocabulaire', characterId: 'lucas',
        characterMessage: "Au Brésil, on n'a pas cette règle. J'ai mis du temps à comprendre !",
        question: '« Skills » en français = …',
        options: ['Formations', 'Diplômes', 'Compétences', 'Expériences'],
        correctIndex: 2,
        explanation: 'Les compétences = skills (langues, informatique, etc.).'
      },
      {
        id: 'L72-8', type: 'final-quiz', title: 'Quiz final — Le CV', characterId: 'marie',
        characterMessage: "Montrez-moi tout ce que vous avez appris. Je crois en vous !",
        questions: [
          { question: 'Les diplômes sont dans la section…', options: ['Expérience', 'Formation', 'Compétences', 'État civil'], correctIndex: 1 },
          { question: '« A degree » = …', options: ['Un métier', 'Un diplôme', 'Un stage', 'Un salaire'], correctIndex: 1 },
          { question: 'La première section d\'un CV est…', options: ['La formation', 'L\'expérience', 'L\'état civil', 'Les compétences'], correctIndex: 2 },
          { question: '« Work experience » = …', options: ['Formation', 'Expérience professionnelle', 'Compétences', 'Loisirs'], correctIndex: 1 },
          { question: 'En France, on met souvent ___ sur le CV.', options: ['Son signe astro', 'Une photo', 'Son salaire', 'Ses notes'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 73: L'entretien d'embauche
  {
    courseId: 'lesson-73',
    steps: [
      {
        id: 'L73-1', type: 'lesson', title: 'L\'entretien d\'embauche', characterId: 'marie',
        characterMessage: "Aujourd'hui, on approfondit vos connaissances. C'est parti !",
        content: `Préparez-vous pour un **entretien d'embauche** en français ! 🤝\n\n📝 **Questions fréquentes :**\n- Parlez-moi de vous.\n- Pourquoi voulez-vous ce poste ?\n- Quelles sont vos qualités / vos défauts ?\n- Où vous voyez-vous dans 5 ans ?\n- Avez-vous des questions ?\n\n✅ **Réponses types :**\n- Je suis motivé(e) et organisé(e).\n- J'ai de l'expérience dans ce domaine.\n- Je suis passionné(e) par…\n- Mon défaut : je suis parfois trop perfectionniste.\n\n🎯 **Vocabulaire :**\n- Un entretien → an interview\n- Un poste → a position\n- Un candidat / une candidate → a candidate\n- Embaucher → to hire\n- Le salaire → the salary\n- Un stage → an internship`,
        tip: '💡 En France, serrez la main fermement, regardez dans les yeux et utilisez le vouvoiement pendant l\'entretien !'
      },
      {
        id: 'L73-2', type: 'listening', title: 'Écoute — Entretien', characterId: 'hans',
        text: 'Bonjour, asseyez-vous. Parlez-moi de vous. Bonjour, je m\'appelle Elena. J\'ai vingt-six ans. J\'ai étudié le commerce international à l\'université de Nice. J\'ai fait un stage de six mois chez une entreprise de tourisme à Antibes. Je suis motivée et j\'aime le contact avec les clients.',
        question: 'Où a-t-elle fait son stage ?',
        options: ['À Paris', 'À Nice', 'À Antibes', 'À Cannes'],
        correctIndex: 2
      },
      {
        id: 'L73-3', type: 'qcm', title: 'Questions d\'entretien', characterId: 'elena',
        characterMessage: "J'ai compris cette règle en comparant avec l'espagnol.",
        question: '« Parlez-moi de vous » est…',
        options: ['Une demande de CV', 'Une invitation à se présenter', 'Une question sur le salaire', 'Une question technique'],
        correctIndex: 1,
        explanation: '« Parlez-moi de vous » est la première question classique d\'un entretien : présentez-vous brièvement.'
      },
      {
        id: 'L73-4', type: 'flashcard', title: 'Vocabulaire de l\'entretien', characterId: 'thomas',
        characterMessage: "En tant que guide, j'utilise ces mots tous les jours avec les touristes.",
        cards: [
          { front: 'Un entretien d\'embauche', back: 'A job interview' },
          { front: 'Un poste', back: 'A position / job' },
          { front: 'Un stage', back: 'An internship' },
          { front: 'Embaucher', back: 'To hire' },
          { front: 'Le salaire', back: 'The salary' },
          { front: 'Motivé(e)', back: 'Motivated' },
        ]
      },
      {
        id: 'L73-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        characterMessage: "Pense à la conjugaison et à l'accord — c'est souvent la clé.",
        sentence: 'Je suis ___ par le marketing digital.',
        options: ['passionnée', 'salariée', 'embauchée', 'diplômée'],
        correctAnswer: 'passionnée'
      },
      {
        id: 'L73-6', type: 'drag-drop', title: 'Ordonnez l\'entretien', characterId: 'yuki',
        characterMessage: "Commence par trouver le sujet, puis le verbe. Le reste suivra !",
        instruction: 'Mettez les étapes de l\'entretien dans l\'ordre :',
        items: ['Merci, au revoir.', 'Bonjour, asseyez-vous.', 'Avez-vous des questions ?', 'Parlez-moi de vous.'],
        correctOrder: ['Bonjour, asseyez-vous.', 'Parlez-moi de vous.', 'Avez-vous des questions ?', 'Merci, au revoir.']
      },
      {
        id: 'L73-7', type: 'qcm', title: 'Qualités', characterId: 'omar',
        characterMessage: "Cette question me rappelle mes premiers mois en France.",
        question: 'Quelle est une qualité professionnelle ?',
        options: ['Paresseux', 'Organisé', 'Distrait', 'Impatient'],
        correctIndex: 1,
        explanation: '« Organisé » est une qualité. Les autres sont des défauts.'
      },
      {
        id: 'L73-8', type: 'final-quiz', title: 'Quiz final — L\'entretien', characterId: 'marie',
        characterMessage: "Quiz final ! Prenez votre temps, relisez bien chaque question.",
        questions: [
          { question: '« An internship » = …', options: ['Un entretien', 'Un stage', 'Un diplôme', 'Un poste'], correctIndex: 1 },
          { question: 'Première question classique : « ___ de vous. »', options: ['Dites-moi', 'Parlez-moi', 'Montrez-moi', 'Écrivez-moi'], correctIndex: 1 },
          { question: '« Embaucher » signifie…', options: ['To fire', 'To hire', 'To train', 'To pay'], correctIndex: 1 },
          { question: 'En entretien, on utilise le…', options: ['Tutoiement', 'Vouvoiement', 'Nous', 'On'], correctIndex: 1 },
          { question: 'Une qualité : « Je suis ___ . »', options: ['paresseux', 'distrait', 'motivé', 'impatient'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 74: Au bureau
  {
    courseId: 'lesson-74',
    steps: [
      {
        id: 'L74-1', type: 'lesson', title: 'Au bureau', characterId: 'marie',
        characterMessage: "Vous êtes prêts pour un défi un peu plus grand ? Allons-y !",
        content: `Découvrons le vocabulaire du **bureau** ! 🏢\n\n🖥️ **Objets du bureau :**\n- Un ordinateur → a computer\n- Un clavier → a keyboard\n- Une souris → a mouse\n- Un écran → a screen\n- Une imprimante → a printer\n- Un bureau (meuble) → a desk\n- Un dossier → a file / folder\n- Un classeur → a binder\n- Une agrafeuse → a stapler\n\n🏢 **Lieux :**\n- Le bureau → the office\n- La salle de réunion → the meeting room\n- La machine à café → the coffee machine\n- L\'accueil → the reception\n\n💬 **Actions :**\n- Envoyer un email → to send an email\n- Imprimer un document → to print a document\n- Participer à une réunion → to attend a meeting`,
        tip: '💡 « Bureau » a deux sens : le meuble (desk) et la pièce (office).'
      },
      {
        id: 'L74-2', type: 'listening', title: 'Écoute — Au bureau', characterId: 'hans',
        text: 'Ce matin, j\'ai allumé mon ordinateur et j\'ai lu mes emails. Ensuite, j\'ai participé à une réunion dans la salle de réunion. Après, j\'ai imprimé un document important. À midi, j\'ai pris un café à la machine.',
        question: 'Qu\'a-t-il fait en premier ?',
        options: ['Imprimer un document', 'Participer à une réunion', 'Allumer son ordinateur', 'Prendre un café'],
        correctIndex: 2
      },
      {
        id: 'L74-3', type: 'qcm', title: 'Vocabulaire', characterId: 'elena',
        characterMessage: "Ne traduis pas mot à mot — pense directement en français !",
        question: '« A printer » en français = …',
        options: ['Un écran', 'Une imprimante', 'Un clavier', 'Une souris'],
        correctIndex: 1,
        explanation: 'Une imprimante = a printer (machine pour imprimer des documents).'
      },
      {
        id: 'L74-4', type: 'flashcard', title: 'Au bureau', characterId: 'thomas',
        characterMessage: "Le vocabulaire français reflète l'art de vivre à la française.",
        cards: [
          { front: 'Un ordinateur', back: 'A computer' },
          { front: 'Un clavier', back: 'A keyboard' },
          { front: 'Une souris', back: 'A mouse (computer)' },
          { front: 'Une imprimante', back: 'A printer' },
          { front: 'La salle de réunion', back: 'The meeting room' },
          { front: 'Un dossier', back: 'A file / folder' },
        ]
      },
      {
        id: 'L74-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        characterMessage: "Le français a des règles précises. Cet exercice t'aide à les maîtriser.",
        sentence: 'J\'ai ___ un email à mon collègue.',
        options: ['envoyé', 'imprimé', 'lu', 'reçu'],
        correctAnswer: 'envoyé'
      },
      {
        id: 'L74-6', type: 'drag-drop', title: 'Journée au bureau', characterId: 'yuki',
        characterMessage: "Cet exercice entraîne ta pensée à fonctionner en français.",
        instruction: 'Ordonnez la journée de travail :',
        items: ['Je suis parti à 18h.', 'J\'ai allumé mon ordinateur.', 'J\'ai participé à une réunion.', 'J\'ai lu mes emails.'],
        correctOrder: ['J\'ai allumé mon ordinateur.', 'J\'ai lu mes emails.', 'J\'ai participé à une réunion.', 'Je suis parti à 18h.']
      },
      {
        id: 'L74-7', type: 'qcm', title: 'Double sens', characterId: 'lucas',
        characterMessage: "C'est une question classique d'examen. Prends ton temps.",
        question: '« Bureau » peut signifier…',
        options: ['Desk et office', 'Chair et table', 'Computer et phone', 'Door et window'],
        correctIndex: 0,
        explanation: '« Bureau » = desk (le meuble) et office (la pièce).'
      },
      {
        id: 'L74-8', type: 'final-quiz', title: 'Quiz final — Au bureau', characterId: 'marie',
        characterMessage: "Vous avez bien travaillé, ce quiz va le prouver !",
        questions: [
          { question: '« A keyboard » = …', options: ['Un écran', 'Un clavier', 'Une souris', 'Une imprimante'], correctIndex: 1 },
          { question: '« Envoyer un ___ »', options: ['café', 'email', 'bureau', 'clavier'], correctIndex: 1 },
          { question: '« Meeting room » = …', options: ['Le bureau', 'La salle de réunion', 'L\'accueil', 'La cafétéria'], correctIndex: 1 },
          { question: '« ___ un document »', options: ['Envoyer', 'Imprimer', 'Allumer', 'Éteindre'], correctIndex: 1 },
          { question: '« Bureau » a ___ sens.', options: ['Un', 'Deux', 'Trois', 'Quatre'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 75: Le futur proche
  {
    courseId: 'lesson-75',
    steps: [
      {
        id: 'L75-1', type: 'lesson', title: 'Le futur proche', characterId: 'marie',
        characterMessage: "Cette leçon vous sera très utile dans la vie quotidienne.",
        content: `Le **futur proche** exprime une action qui va se passer bientôt ! 🔮\n\n📐 **Formation :**\n**ALLER** (au présent) + **infinitif**\n\n🔵 **Exemples :**\n- Je **vais travailler** demain. → I'm going to work tomorrow.\n- Tu **vas manger** au restaurant. → You're going to eat at the restaurant.\n- Il **va pleuvoir**. → It's going to rain.\n- Nous **allons partir** en vacances. → We're going to leave on vacation.\n- Vous **allez comprendre**. → You're going to understand.\n- Ils **vont arriver** ce soir. → They're going to arrive tonight.\n\n❌ **Négatif :**\n- Je **ne vais pas** travailler demain.\n- Elle **ne va pas** venir.\n\n❓ **Interrogatif :**\n- Est-ce que tu **vas** manger ?\n- **Vas-tu** venir ?`,
        tip: '💡 Le futur proche est très utilisé en français parlé, souvent à la place du futur simple !'
      },
      {
        id: 'L75-2', type: 'listening', title: 'Écoute — Projets', characterId: 'lucas',
        characterMessage: "Concentre-toi sur les mots-clés, pas besoin de tout comprendre.",
        text: 'Ce week-end, je vais aller à la plage avec mes amis. Samedi, nous allons faire un pique-nique. Dimanche, je vais visiter le musée Picasso à Antibes. Et lundi, je vais commencer mon nouveau travail !',
        question: 'Que va-t-il faire dimanche ?',
        options: ['Aller à la plage', 'Faire un pique-nique', 'Visiter le musée Picasso', 'Commencer son travail'],
        correctIndex: 2
      },
      {
        id: 'L75-3', type: 'qcm', title: 'Futur proche', characterId: 'elena',
        characterMessage: "Cette structure est différente en espagnol. Fais attention !",
        question: 'Complétez : « Nous ___ manger au restaurant ce soir. »',
        options: ['allons', 'avons', 'sommes', 'faisons'],
        correctIndex: 0,
        explanation: 'Futur proche = aller au présent + infinitif : nous allons manger.'
      },
      {
        id: 'L75-4', type: 'flashcard', title: 'Le futur proche', characterId: 'thomas',
        characterMessage: "Chaque nouveau mot te rapproche de la culture française.",
        cards: [
          { front: 'je vais + infinitif', back: 'I\'m going to…' },
          { front: 'tu vas + infinitif', back: 'You\'re going to…' },
          { front: 'il/elle va + infinitif', back: 'He/She is going to…' },
          { front: 'nous allons + infinitif', back: 'We\'re going to…' },
          { front: 'vous allez + infinitif', back: 'You\'re going to…' },
          { front: 'ils/elles vont + infinitif', back: 'They\'re going to…' },
        ]
      },
      {
        id: 'L75-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        characterMessage: "Lis la phrase à voix haute avec chaque option — tu entendras la bonne !",
        sentence: 'Demain, elle ___ commencer un nouveau travail.',
        options: ['va', 'est', 'a', 'fait'],
        correctAnswer: 'va'
      },
      {
        id: 'L75-6', type: 'drag-drop', title: 'Formez une phrase', characterId: 'yuki',
        characterMessage: "En japonais, le verbe est à la fin. En français, il est au milieu !",
        instruction: 'Construisez une phrase au futur proche :',
        items: ['vais', 'Je', 'français', 'étudier', 'le'],
        correctOrder: ['Je', 'vais', 'étudier', 'le', 'français']
      },
      {
        id: 'L75-7', type: 'qcm', title: 'Négatif', characterId: 'omar',
        characterMessage: "Cette question me rappelle mes premiers mois en France.",
        question: '« Je ___ travailler demain. » (négatif)',
        options: ['ne vais pas', 'ne suis pas', 'n\'ai pas', 'ne fais pas'],
        correctIndex: 0,
        explanation: 'Au négatif : ne + aller + pas + infinitif → Je ne vais pas travailler.'
      },
      {
        id: 'L75-8', type: 'final-quiz', title: 'Quiz final — Le futur proche', characterId: 'marie',
        characterMessage: "C'est le moment de briller ! Bonne chance !",
        questions: [
          { question: '« Nous ___ partir demain. »', options: ['allons', 'avons', 'sommes', 'faisons'], correctIndex: 0 },
          { question: '« Elle ne ___ pas venir. »', options: ['est', 'a', 'va', 'fait'], correctIndex: 2 },
          { question: 'Le futur proche = …', options: ['être + participe', 'aller + infinitif', 'avoir + participe', 'faire + infinitif'], correctIndex: 1 },
          { question: '« Ils ___ arriver ce soir. »', options: ['vont', 'sont', 'ont', 'font'], correctIndex: 0 },
          { question: '« ___ manger au restaurant ? » (tu)', options: ['Es-tu allé', 'Vas-tu', 'As-tu', 'Fais-tu'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 76: Téléphoner au travail
  {
    courseId: 'lesson-76',
    steps: [
      {
        id: 'L76-1', type: 'lesson', title: 'Téléphoner au travail', characterId: 'marie',
        characterMessage: "Vous progressez bien ! Cette leçon va enrichir votre français.",
        content: `Apprenons à **téléphoner** dans un contexte professionnel ! 📞\n\n📞 **Décrocher :**\n- Allô ? / Bonjour, entreprise X, bonjour.\n- Société ABC, Marie à l'appareil.\n\n📞 **Demander quelqu'un :**\n- Je voudrais parler à M. Dupont, s'il vous plaît.\n- Pourriez-vous me passer le service commercial ?\n- Est-ce que Mme Martin est disponible ?\n\n📝 **Laisser un message :**\n- Pourriez-vous lui laisser un message ?\n- Pourriez-vous lui demander de me rappeler ?\n- Mon numéro est le 06 12 34 56 78.\n\n✅ **Formules de politesse :**\n- Merci, bonne journée.\n- Je vous remercie. Au revoir.`,
        tip: '💡 En France, les numéros de téléphone se disent par groupes de deux : 06-12-34-56-78.'
      },
      {
        id: 'L76-2', type: 'listening', title: 'Écoute — Appel professionnel', characterId: 'hans',
        text: 'Société Méditerranée, bonjour. Bonjour, je voudrais parler à Monsieur Leroy, s\'il vous plaît. Je suis désolée, Monsieur Leroy est en réunion. Voulez-vous laisser un message ? Oui, pourriez-vous lui demander de me rappeler ? Je suis Hans Müller, mon numéro est le zéro six, quarante-cinq, vingt-trois, dix-huit, soixante-sept.',
        question: 'Pourquoi M. Leroy ne peut-il pas répondre ?',
        options: ['Il est absent', 'Il est en réunion', 'Il déjeune', 'Il est en vacances'],
        correctIndex: 1
      },
      {
        id: 'L76-3', type: 'qcm', title: 'Formule téléphonique', characterId: 'elena',
        characterMessage: "C'est plus facile quand on parle déjà une langue latine !",
        question: '« Pourriez-vous me ___ le service commercial ? »',
        options: ['donner', 'passer', 'envoyer', 'montrer'],
        correctIndex: 1,
        explanation: '« Passer » = to transfer/put through. « Me passer quelqu\'un » = to put someone through to me.'
      },
      {
        id: 'L76-4', type: 'flashcard', title: 'Au téléphone (pro)', characterId: 'thomas',
        characterMessage: "Le français est riche de mots qui n'existent pas dans d'autres langues.",
        cards: [
          { front: 'X à l\'appareil', back: 'X speaking (on the phone)' },
          { front: 'Je voudrais parler à…', back: 'I\'d like to speak to…' },
          { front: 'Laisser un message', back: 'To leave a message' },
          { front: 'Rappeler', back: 'To call back' },
          { front: 'Pourriez-vous…', back: 'Could you… (formal)' },
          { front: 'Bonne journée', back: 'Have a good day' },
        ]
      },
      {
        id: 'L76-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        characterMessage: "La grammaire française, c'est comme une recette : il faut les bons ingrédients !",
        sentence: 'Pourriez-vous lui demander de me ___ ?',
        options: ['appeler', 'rappeler', 'parler', 'envoyer'],
        correctAnswer: 'rappeler'
      },
      {
        id: 'L76-6', type: 'drag-drop', title: 'Ordonnez l\'appel', characterId: 'yuki',
        characterMessage: "Les phrases sont plus longues maintenant. Lis d'abord tous les mots !",
        instruction: 'Mettez l\'appel téléphonique dans l\'ordre :',
        items: ['Merci, au revoir.', 'Allô, société ABC, bonjour.', 'Il est en réunion, voulez-vous laisser un message ?', 'Je voudrais parler à M. Dupont.'],
        correctOrder: ['Allô, société ABC, bonjour.', 'Je voudrais parler à M. Dupont.', 'Il est en réunion, voulez-vous laisser un message ?', 'Merci, au revoir.']
      },
      {
        id: 'L76-7', type: 'qcm', title: 'Numéros français', characterId: 'omar',
        characterMessage: "Cette question me rappelle mes premiers mois en France.",
        question: 'Comment dit-on le numéro 06 45 23 18 67 ?',
        options: ['Six quatre cinq…', 'Zéro six, quarante-cinq, vingt-trois…', 'Zéro, six, quatre, cinq…', 'Soixante-quatre, cinquante-deux…'],
        correctIndex: 1,
        explanation: 'En France, on dit les numéros par groupes de deux chiffres.'
      },
      {
        id: 'L76-8', type: 'final-quiz', title: 'Quiz final — Téléphoner', characterId: 'marie',
        characterMessage: "Ce quiz est un peu plus long, mais vous êtes prêts !",
        questions: [
          { question: '« X ___ l\'appareil. »', options: ['à', 'de', 'sur', 'en'], correctIndex: 0 },
          { question: '« ___ un message » = to leave a message', options: ['Donner', 'Laisser', 'Prendre', 'Envoyer'], correctIndex: 1 },
          { question: '« Rappeler » signifie…', options: ['To call', 'To call back', 'To hang up', 'To answer'], correctIndex: 1 },
          { question: 'On dit les numéros par groupes de…', options: ['Un', 'Deux', 'Trois', 'Quatre'], correctIndex: 1 },
          { question: '« Pourriez-vous… » est…', options: ['Informel', 'Familier', 'Formel / poli', 'Incorrect'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 77: Écrire un email professionnel
  {
    courseId: 'lesson-77',
    steps: [
      {
        id: 'L77-1', type: 'lesson', title: 'Écrire un email professionnel', characterId: 'marie',
        characterMessage: "Bravo pour votre travail ! Continuons avec un nouveau thème.",
        content: `Apprenons à écrire un **email professionnel** en français ! ✉️\n\n📧 **Structure :**\n\n1. **Objet :** clair et précis\n   - Demande de rendez-vous / Candidature au poste de…\n\n2. **Formule d'ouverture :**\n   - Madame, Monsieur,\n   - Cher Monsieur / Chère Madame,\n\n3. **Corps du message :**\n   - Je me permets de vous contacter pour…\n   - Suite à notre conversation…\n   - Je souhaiterais obtenir des informations sur…\n\n4. **Formule de clôture :**\n   - Je vous remercie par avance.\n   - Dans l'attente de votre réponse…\n\n5. **Formule de politesse :**\n   - Cordialement,\n   - Bien cordialement,\n   - Veuillez agréer, Madame, mes salutations distinguées.`,
        tip: '💡 « Cordialement » est la formule de politesse la plus courante dans les emails professionnels.'
      },
      {
        id: 'L77-2', type: 'listening', title: 'Écoute — Email type', characterId: 'hans',
        text: 'Objet : Demande de rendez-vous. Madame, Monsieur, je me permets de vous contacter pour solliciter un rendez-vous. Je souhaiterais discuter du projet de marketing digital. Seriez-vous disponible mardi prochain à quatorze heures ? Je vous remercie par avance. Cordialement, Hans Müller.',
        question: 'Quel jour propose-t-il ?',
        options: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi'],
        correctIndex: 1
      },
      {
        id: 'L77-3', type: 'qcm', title: 'Formule de politesse', characterId: 'elena',
        characterMessage: "Attention, le français a des pièges que l'espagnol n'a pas.",
        question: 'Quelle est la formule de clôture la plus courante ?',
        options: ['Bisous', 'Cordialement', 'Salut', 'À plus'],
        correctIndex: 1,
        explanation: '« Cordialement » est la formule standard pour terminer un email professionnel.'
      },
      {
        id: 'L77-4', type: 'flashcard', title: 'Email professionnel', characterId: 'thomas',
        characterMessage: "Ces expressions colorent la langue française. Apprends-les par cœur !",
        cards: [
          { front: 'Madame, Monsieur,', back: 'Dear Sir or Madam,' },
          { front: 'Je me permets de…', back: 'I am writing to… (formal)' },
          { front: 'Suite à…', back: 'Following… / Further to…' },
          { front: 'Je vous remercie par avance.', back: 'Thank you in advance.' },
          { front: 'Cordialement,', back: 'Kind regards,' },
          { front: 'Dans l\'attente de votre réponse…', back: 'Looking forward to your reply…' },
        ]
      },
      {
        id: 'L77-5', type: 'fill-blank', title: 'Complétez l\'email', characterId: 'fatou',
        characterMessage: "À Dakar, mes professeurs nous faisaient faire beaucoup de ces exercices.",
        sentence: 'Je me ___ de vous contacter pour solliciter un rendez-vous.',
        options: ['veux', 'permets', 'fais', 'dois'],
        correctAnswer: 'permets'
      },
      {
        id: 'L77-6', type: 'drag-drop', title: 'Structure de l\'email', characterId: 'yuki',
        characterMessage: "La structure française est plus souple qu'on ne le pense.",
        instruction: 'Ordonnez les éléments de l\'email :',
        items: ['Cordialement, Marie.', 'Madame, Monsieur,', 'Je vous remercie par avance.', 'Je me permets de vous contacter pour…'],
        correctOrder: ['Madame, Monsieur,', 'Je me permets de vous contacter pour…', 'Je vous remercie par avance.', 'Cordialement, Marie.']
      },
      {
        id: 'L77-7', type: 'qcm', title: 'Registre', characterId: 'lucas',
        characterMessage: "J'ai posé cette question à Marie hier en classe. Maintenant je sais !",
        question: '« Bisous » est approprié dans un email…',
        options: ['Professionnel', 'Amical', 'Administratif', 'Commercial'],
        correctIndex: 1,
        explanation: '« Bisous » est uniquement pour les emails amicaux/intimes. En professionnel, utilisez « Cordialement ».'
      },
      {
        id: 'L77-8', type: 'final-quiz', title: 'Quiz final — Email pro', characterId: 'marie',
        characterMessage: "Montrez-moi tout ce que vous avez appris. Je crois en vous !",
        questions: [
          { question: 'Formule d\'ouverture formelle = …', options: ['Salut !', 'Coucou !', 'Madame, Monsieur,', 'Yo !'], correctIndex: 2 },
          { question: '« Cordialement » est pour un email…', options: ['Amical', 'Professionnel', 'Romantique', 'Familier'], correctIndex: 1 },
          { question: '« Suite à » signifie…', options: ['Before', 'Following', 'Instead of', 'Without'], correctIndex: 1 },
          { question: '« Je me ___ de vous contacter. »', options: ['veux', 'permets', 'dois', 'peux'], correctIndex: 1 },
          { question: '« Thank you in advance » = …', options: ['Merci beaucoup', 'Je vous remercie par avance', 'De rien', 'S\'il vous plaît'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 78: Les pronoms COI
  {
    courseId: 'lesson-78',
    steps: [
      {
        id: 'L78-1', type: 'lesson', title: 'Les pronoms COI', characterId: 'marie',
        characterMessage: "Aujourd'hui, on approfondit vos connaissances. C'est parti !",
        content: `Les **pronoms COI** (Complément d'Objet Indirect) remplacent « à + personne ». 🔄\n\n📐 **Les pronoms COI :**\n- **me** (m') → to me\n- **te** (t') → to you (informal)\n- **lui** → to him / to her\n- **nous** → to us\n- **vous** → to you (formal/plural)\n- **leur** → to them\n\n📍 **Position :** AVANT le verbe\n- Je parle **à Marie** → Je **lui** parle.\n- Il téléphone **à ses parents** → Il **leur** téléphone.\n- Elle m'envoie un email → She sends me an email.\n\n⚠️ **COD vs COI :**\n- COD : verbe + nom (sans préposition) → le, la, les\n- COI : verbe + **à** + personne → lui, leur\n\n📝 **Verbes courants + à :**\nparler à, téléphoner à, écrire à, donner à, envoyer à, demander à, répondre à`,
        tip: '💡 « Lui » remplace aussi bien un homme qu\'une femme : je lui parle (à Pierre / à Marie).'
      },
      {
        id: 'L78-2', type: 'listening', title: 'Écoute — Au bureau', characterId: 'hans',
        text: 'J\'ai parlé à mon chef ce matin. Je lui ai demandé des vacances. Il m\'a répondu oui ! Ensuite, j\'ai téléphoné à mes collègues pour leur dire la bonne nouvelle.',
        question: 'Qu\'a-t-il demandé à son chef ?',
        options: ['Une augmentation', 'Des vacances', 'Un nouveau bureau', 'Un transfert'],
        correctIndex: 1
      },
      {
        id: 'L78-3', type: 'qcm', title: 'Pronom COI', characterId: 'elena',
        characterMessage: "J'ai compris cette règle en comparant avec l'espagnol.",
        question: '« Je téléphone à mes parents. » → « Je ___ téléphone. »',
        options: ['les', 'lui', 'leur', 'leurs'],
        correctIndex: 2,
        explanation: '« À mes parents » (pluriel) → « leur ». Attention : pas de -s à « leur » pronom !'
      },
      {
        id: 'L78-4', type: 'flashcard', title: 'Les pronoms COI', characterId: 'thomas',
        characterMessage: "En tant que guide, j'utilise ces mots tous les jours avec les touristes.",
        cards: [
          { front: 'me / m\'', back: 'to me (Il me parle.)' },
          { front: 'te / t\'', back: 'to you (Je te réponds.)' },
          { front: 'lui', back: 'to him / to her (Je lui écris.)' },
          { front: 'nous', back: 'to us (Il nous dit bonjour.)' },
          { front: 'vous', back: 'to you (Je vous réponds.)' },
          { front: 'leur', back: 'to them (Je leur téléphone.)' },
        ]
      },
      {
        id: 'L78-5', type: 'fill-blank', title: 'Remplacez', characterId: 'fatou',
        characterMessage: "Pense à la conjugaison et à l'accord — c'est souvent la clé.",
        sentence: 'Elle écrit à son professeur. → Elle ___ écrit.',
        options: ['le', 'la', 'lui', 'leur'],
        correctAnswer: 'lui'
      },
      {
        id: 'L78-6', type: 'drag-drop', title: 'Ordre des mots', characterId: 'yuki',
        characterMessage: "Commence par trouver le sujet, puis le verbe. Le reste suivra !",
        instruction: 'Remettez dans l\'ordre avec le pronom COI :',
        items: ['lui', 'Je', 'un email', 'ai', 'envoyé'],
        correctOrder: ['Je', 'lui', 'ai', 'envoyé', 'un email']
      },
      {
        id: 'L78-7', type: 'qcm', title: 'COD ou COI ?', characterId: 'omar',
        characterMessage: "Cette question me rappelle mes premiers mois en France.",
        question: '« Je regarde Marie. » — Quel pronom ?',
        options: ['lui (COI)', 'la (COD)', 'leur (COI)', 'les (COD)'],
        correctIndex: 1,
        explanation: '« Regarder » est un verbe direct (pas de « à ») → COD → la.'
      },
      {
        id: 'L78-8', type: 'final-quiz', title: 'Quiz final — Pronoms COI', characterId: 'marie',
        characterMessage: "Quiz final ! Prenez votre temps, relisez bien chaque question.",
        questions: [
          { question: '« Je parle à Pierre. » → « Je ___ parle. »', options: ['le', 'la', 'lui', 'leur'], correctIndex: 2 },
          { question: '« Ils téléphonent à leurs amis. » → « Ils ___ téléphonent. »', options: ['les', 'lui', 'leur', 'leurs'], correctIndex: 2 },
          { question: 'Le pronom COI se place…', options: ['Après le verbe', 'Avant le verbe', 'Après le sujet', 'À la fin'], correctIndex: 1 },
          { question: '« Lui » remplace…', options: ['Un homme seulement', 'Une femme seulement', 'Un homme ou une femme', 'Plusieurs personnes'], correctIndex: 2 },
          { question: '« Écrire à » utilise un pronom…', options: ['COD', 'COI', 'Sujet', 'Possessif'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 79: Révision A2.3
  {
    courseId: 'lesson-79',
    steps: [
      {
        id: 'L79-1', type: 'lesson', title: 'Révision — Le monde du travail', characterId: 'marie',
        characterMessage: "Vous êtes prêts pour un défi un peu plus grand ? Allons-y !",
        content: `📚 **Révision du Module A2.3** — Le monde du travail\n\n✅ **Les métiers :** médecin, avocat, ingénieur… (sans article !)\n\n✅ **Le CV :** état civil, formation, expérience, compétences\n\n✅ **L'entretien :** Parlez-moi de vous, qualités/défauts\n\n✅ **Au bureau :** ordinateur, clavier, réunion, email\n\n✅ **Le futur proche :** aller + infinitif\n\n✅ **Téléphoner :** formules professionnelles, laisser un message\n\n✅ **Email pro :** Madame/Monsieur, Cordialement\n\n✅ **Pronoms COI :** me, te, lui, nous, vous, leur`,
        tip: '💡 Révisez les pronoms COI vs COD : COD = verbe direct, COI = verbe + à + personne.'
      },
      {
        id: 'L79-2', type: 'qcm', title: 'Révision', characterId: 'hans',
        characterMessage: "Cet exercice demande de la précision. Analyse chaque option.",
        question: '« Elle est ___ . » (avocat, féminin)',
        options: ['avocat', 'avocate', 'une avocate', 'l\'avocate'],
        correctIndex: 1,
        explanation: 'Profession sans article + accord féminin : elle est avocate.'
      },
      {
        id: 'L79-3', type: 'fill-blank', title: 'Révision', characterId: 'fatou',
        characterMessage: "Le français a des règles précises. Cet exercice t'aide à les maîtriser.",
        sentence: 'Demain, nous ___ commencer le nouveau projet.',
        options: ['allons', 'avons', 'sommes', 'faisons'],
        correctAnswer: 'allons'
      },
      {
        id: 'L79-4', type: 'qcm', title: 'Révision', characterId: 'elena',
        characterMessage: "Ne traduis pas mot à mot — pense directement en français !",
        question: '« Cordialement » termine un email…',
        options: ['Amical', 'Professionnel', 'Romantique', 'Familier'],
        correctIndex: 1,
        explanation: '« Cordialement » est la formule standard d\'un email professionnel.'
      },
      {
        id: 'L79-5', type: 'drag-drop', title: 'Révision', characterId: 'yuki',
        characterMessage: "Cet exercice entraîne ta pensée à fonctionner en français.",
        instruction: 'Ordonnez les sections du CV :',
        items: ['Compétences', 'État civil', 'Formation', 'Expérience'],
        correctOrder: ['État civil', 'Formation', 'Expérience', 'Compétences']
      },
      {
        id: 'L79-6', type: 'fill-blank', title: 'Révision', characterId: 'omar',
        sentence: 'Je ___ ai envoyé un email. (à mes collègues)',
        options: ['les', 'lui', 'leur', 'leurs'],
        correctAnswer: 'leur'
      },
      {
        id: 'L79-7', type: 'qcm', title: 'Révision', characterId: 'lucas',
        characterMessage: "Souviens-toi de ce qu'on a vu dans la leçon, ça va t'aider.",
        question: '« Sophia Antipolis » est…',
        options: ['Une ville', 'Un parc technologique', 'Un musée', 'Une plage'],
        correctIndex: 1,
        explanation: 'Sophia Antipolis est le plus grand parc technologique d\'Europe, près d\'Antibes.'
      },
      {
        id: 'L79-8', type: 'final-quiz', title: 'Quiz de révision A2.3', characterId: 'marie',
        characterMessage: "Vous avez bien travaillé, ce quiz va le prouver !",
        questions: [
          { question: '« A job interview » = …', options: ['Un entretien', 'Un stage', 'Un diplôme', 'Un poste'], correctIndex: 0 },
          { question: '« Nous ___ partir bientôt. » (futur proche)', options: ['allons', 'avons', 'sommes', 'faisons'], correctIndex: 0 },
          { question: '« Je ___ parle. » (à Marie)', options: ['la', 'le', 'lui', 'leur'], correctIndex: 2 },
          { question: '« A keyboard » = …', options: ['Un écran', 'Un clavier', 'Une souris', 'Un dossier'], correctIndex: 1 },
          { question: '« Je me ___ de vous contacter. »', options: ['veux', 'permets', 'dois', 'fais'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 80: Examen A2.3
  {
    courseId: 'lesson-80',
    steps: [
      {
        id: 'L80-1', type: 'lesson', title: 'Examen Module A2.3 — Le monde du travail', characterId: 'marie',
        characterMessage: "Cette leçon vous sera très utile dans la vie quotidienne.",
        content: `🎓 **Examen du Module A2.3**\n\nVous allez passer l'examen final du module « Le monde du travail ».\n\n📋 **Ce qui sera évalué :**\n- Les métiers et leur genre\n- La structure du CV\n- L'entretien d'embauche\n- Le vocabulaire du bureau\n- Le futur proche\n- Les formules téléphoniques et d'email\n- Les pronoms COI\n\n💪 Badge « Pro Débutant » 💼 à débloquer !`,
        tip: '💡 Concentrez-vous et bonne chance !'
      },
      {
        id: 'L80-2', type: 'qcm', title: 'Examen Q1', characterId: 'marie',
        question: '« Il est ___ . » (nurse, masc.)',
        options: ['infirmier', 'infirmière', 'un infirmier', 'l\'infirmier'],
        correctIndex: 0,
        explanation: 'Sans article devant la profession : il est infirmier.'
      },
      {
        id: 'L80-3', type: 'fill-blank', title: 'Examen Q2', characterId: 'marie',
        sentence: 'Les diplômes sont dans la section « ___ » du CV.',
        options: ['Expérience', 'Formation', 'Compétences', 'État civil'],
        correctAnswer: 'Formation'
      },
      {
        id: 'L80-4', type: 'qcm', title: 'Examen Q3', characterId: 'marie',
        question: '« Ils ___ déménager le mois prochain. » (futur proche)',
        options: ['vont', 'sont', 'ont', 'font'],
        correctIndex: 0,
        explanation: 'Futur proche : aller + infinitif → ils vont déménager.'
      },
      {
        id: 'L80-5', type: 'drag-drop', title: 'Examen Q4', characterId: 'marie',
        instruction: 'Ordonnez cet email professionnel :',
        items: ['Cordialement, Elena.', 'Madame, Monsieur,', 'Je vous remercie par avance.', 'Je souhaiterais prendre rendez-vous.'],
        correctOrder: ['Madame, Monsieur,', 'Je souhaiterais prendre rendez-vous.', 'Je vous remercie par avance.', 'Cordialement, Elena.']
      },
      {
        id: 'L80-6', type: 'fill-blank', title: 'Examen Q5', characterId: 'marie',
        sentence: 'J\'ai parlé à mon chef. Je ___ ai demandé une augmentation.',
        options: ['le', 'la', 'lui', 'leur'],
        correctAnswer: 'lui'
      },
      {
        id: 'L80-7', type: 'qcm', title: 'Examen Q6', characterId: 'marie',
        question: '« Pourriez-vous ___ un message ? »',
        options: ['donner', 'laisser', 'prendre', 'faire'],
        correctIndex: 1,
        explanation: '« Laisser un message » est l\'expression correcte.'
      },
      {
        id: 'L80-8', type: 'final-quiz', title: 'Examen final A2.3', characterId: 'marie',
        characterMessage: "C'est le moment de briller ! Bonne chance !",
        questions: [
          { question: '« To hire » = …', options: ['Licencier', 'Embaucher', 'Former', 'Payer'], correctIndex: 1 },
          { question: '« Elle va ___ demain. » (partir)', options: ['partie', 'partant', 'partir', 'part'], correctIndex: 2 },
          { question: '« Je ___ téléphone. » (à Marie)', options: ['la', 'le', 'lui', 'leur'], correctIndex: 2 },
          { question: '« Suite à » signifie…', options: ['Before', 'Following', 'Without', 'Instead of'], correctIndex: 1 },
          { question: 'Première question d\'entretien : « ___ de vous. »', options: ['Dites-moi', 'Parlez-moi', 'Écrivez-moi', 'Montrez-moi'], correctIndex: 1 },
        ]
      }
    ]
  },
];
