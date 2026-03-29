// Interactive lesson content for B1 Module 3: Vie quotidienne avancée (Lessons 121-130)
import type { CourseContent } from './course-content';

export const b1Module3Content: CourseContent[] = [
  // Lesson 121: Chercher un logement
  {
    courseId: 'lesson-121',
    steps: [
      {
        id: 'L121-1', type: 'lesson', title: 'Chercher un logement', characterId: 'marie',
        characterMessage: "Vous êtes maintenant capables de comprendre des sujets plus complexes.",
        content: `Apprenons à **chercher un logement** en France ! 🏠\n\n📋 **Types de logement :**\n- Un studio / un T1 (une pièce + cuisine/sdb)\n- Un T2 / F2 (deux pièces)\n- Un T3 / F3 (trois pièces)\n- Une maison / un pavillon\n\n📰 **Lire une annonce :**\n- « T2, 45m², 3e ét., asc., pkg, 750€ CC »\n→ 2 pièces, 45 mètres carrés, 3e étage, ascenseur, parking, 750€ charges comprises\n\n💰 **Vocabulaire du logement :**\n- Le loyer : le prix mensuel\n- Les charges : eau, chauffage, entretien\n- CC = charges comprises / HC = hors charges\n- La caution : le dépôt de garantie\n- Un bail : le contrat de location\n- Le propriétaire / le locataire`,
        tip: '💡 En France, la caution est généralement d\'un mois de loyer (hors charges) pour une location non meublée.'
      },
      {
        id: 'L121-2', type: 'listening', title: 'Écoute — Visite d\'un appartement', characterId: 'omar',
        characterMessage: "Tu devrais maintenant comprendre l'essentiel des conversations courantes.",
        text: 'Bonjour, je viens visiter l\'appartement. C\'est un T2 de 50 mètres carrés au deuxième étage avec ascenseur. Il y a un salon lumineux, une chambre, une cuisine équipée et une salle de bains. Le loyer est de 680 euros charges comprises.',
        question: 'Combien coûte le loyer ?',
        options: ['580 euros', '680 euros', '780 euros', '880 euros'],
        correctIndex: 1
      },
      {
        id: 'L121-3', type: 'qcm', title: 'Vocabulaire immobilier', characterId: 'elena',
        characterMessage: "À ce niveau, il faut aller au-delà de la traduction.",
        question: 'Que signifie « CC » dans une annonce ?',
        options: ['Cuisine Complète', 'Charges Comprises', 'Cave et Cave', 'Chauffage Central'],
        correctIndex: 1,
        explanation: '« CC » = Charges Comprises, c\'est-à-dire que les charges sont incluses dans le loyer.'
      },
      {
        id: 'L121-4', type: 'flashcard', title: 'Vocabulaire du logement', characterId: 'thomas',
        characterMessage: "Ces termes enrichissent considérablement ton expression.",
        cards: [
          { front: 'Le loyer', back: 'The rent' },
          { front: 'Les charges', back: 'Utility charges / Service fees' },
          { front: 'La caution', back: 'The security deposit' },
          { front: 'Un bail', back: 'A lease / rental contract' },
          { front: 'Le propriétaire', back: 'The landlord / owner' },
          { front: 'Le locataire', back: 'The tenant' },
        ]
      },
      {
        id: 'L121-5', type: 'fill-blank', title: 'Complétez l\'annonce', characterId: 'fatou',
        characterMessage: "Les phrases sont plus complexes, mais tu as les outils pour réussir.",
        sentence: 'T3, 65m², 4e ét., ___, balcon, 950€ HC.',
        options: ['ascenseur', 'voiture', 'chien', 'jardin'],
        correctAnswer: 'ascenseur'
      },
      {
        id: 'L121-6', type: 'drag-drop', title: 'Étapes pour louer', characterId: 'yuki',
        characterMessage: "Les structures deviennent complexes. Attention aux propositions !",
        instruction: 'Remettez les étapes dans l\'ordre :',
        items: ['Signer le bail', 'Chercher des annonces', 'Visiter l\'appartement', 'Payer la caution'],
        correctOrder: ['Chercher des annonces', 'Visiter l\'appartement', 'Signer le bail', 'Payer la caution']
      },
      {
        id: 'L121-7', type: 'qcm', title: 'Types de logement', characterId: 'hans',
        characterMessage: "Le monde professionnel exige ce genre de compétence. Entraîne-toi !",
        question: 'Un « T2 » ou « F2 » désigne un appartement de…',
        options: ['une pièce', 'deux pièces', 'trois pièces', 'quatre pièces'],
        correctIndex: 1,
        explanation: 'T2 = Type 2 = un appartement avec 2 pièces principales (généralement un salon + une chambre).'
      },
      {
        id: 'L121-8', type: 'final-quiz', title: 'Quiz final — Chercher un logement', characterId: 'marie',
        characterMessage: "Ce quiz teste votre compréhension en profondeur. Allez-y !",
        questions: [
          { question: '« CC » signifie…', options: ['Cave Comprise', 'Charges Comprises', 'Chauffage Central', 'Cuisine Complète'], correctIndex: 1 },
          { question: 'La caution est…', options: ['le loyer mensuel', 'un dépôt de garantie', 'les charges', 'l\'assurance'], correctIndex: 1 },
          { question: 'Un T3 a…', options: ['1 pièce', '2 pièces', '3 pièces', '4 pièces'], correctIndex: 2 },
          { question: 'Le « bail » est…', options: ['un meuble', 'le contrat de location', 'le gardien', 'l\'ascenseur'], correctIndex: 1 },
          { question: '« HC » signifie…', options: ['Haut de gamme Complet', 'Hors Charges', 'Haute Cuisine', 'Habitat Collectif'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 122: La vie en colocation
  {
    courseId: 'lesson-122',
    steps: [
      {
        id: 'L122-1', type: 'lesson', title: 'La vie en colocation', characterId: 'marie',
        characterMessage: "On entre dans le vif du sujet aujourd'hui — accrochez-vous !",
        content: `La **colocation** (ou « coloc ») est très populaire en France, surtout chez les étudiants ! 🏠👥\n\n📋 **Avantages :**\n- Partager le loyer et les charges\n- Se faire des amis\n- Pratiquer le français au quotidien\n- Ne pas se sentir seul(e)\n\n📋 **Inconvénients :**\n- Le bruit, le ménage\n- Les habitudes différentes\n- Le respect de l'espace de chacun\n\n📝 **Règles de vie commune :**\n- Faire le ménage à tour de rôle\n- Respecter les espaces communs\n- Prévenir si on invite des amis\n- Partager les courses\n- Ne pas faire de bruit après 22h\n\n💬 **Expressions utiles :**\n- C'est à ton/votre tour de…\n- On pourrait se partager les tâches.\n- Ça te dérange si… ?`,
        tip: '💡 En France, le site « La Carte des Colocs » est très utilisé pour trouver une colocation.'
      },
      {
        id: 'L122-2', type: 'listening', title: 'Écoute — Règles de la coloc', characterId: 'lucas',
        characterMessage: "L'écoute est plus rapide maintenant. Reste attentif aux détails !",
        text: 'Dans notre colocation, on a des règles simples. Chacun fait le ménage à tour de rôle. On partage les courses pour le petit-déjeuner. Si quelqu\'un invite des amis, il prévient les autres. Et surtout, pas de bruit après 22 heures !',
        question: 'Que doit-on faire si on invite des amis ?',
        options: ['Payer plus cher', 'Prévenir les autres', 'Ne pas les inviter', 'Nettoyer avant'],
        correctIndex: 1
      },
      {
        id: 'L122-3', type: 'qcm', title: 'Vie en colocation', characterId: 'elena',
        characterMessage: "La nuance est importante — chaque option est crédible !",
        question: '« C\'est à ton tour de… » signifie…',
        options: ['C\'est ta maison', 'C\'est ta responsabilité cette fois', 'Tu dois partir', 'Tu peux te reposer'],
        correctIndex: 1,
        explanation: '« C\'est à ton tour » = it\'s your turn, c\'est ta responsabilité cette fois-ci.'
      },
      {
        id: 'L122-4', type: 'flashcard', title: 'Vocabulaire de la colocation', characterId: 'thomas',
        characterMessage: "Le vocabulaire avancé te permet de nuancer ta pensée en français.",
        cards: [
          { front: 'La colocation (la coloc)', back: 'Flat-sharing / House-sharing' },
          { front: 'Un(e) colocataire (un/une coloc)', back: 'A flatmate / housemate' },
          { front: 'Les espaces communs', back: 'Shared spaces' },
          { front: 'À tour de rôle', back: 'Taking turns' },
          { front: 'Partager les tâches', back: 'To share the chores' },
          { front: 'Les courses', back: 'Grocery shopping' },
        ]
      },
      {
        id: 'L122-5', type: 'fill-blank', title: 'Complétez la règle', characterId: 'fatou',
        characterMessage: "Pense aux temps verbaux — passé, présent, futur ?",
        sentence: 'Chacun fait le ménage ___ de rôle.',
        options: ['à tour', 'en tour', 'par tour', 'au tour'],
        correctAnswer: 'à tour'
      },
      {
        id: 'L122-6', type: 'drag-drop', title: 'Bonnes pratiques en coloc', characterId: 'yuki',
        characterMessage: "Cherche les connecteurs logiques pour comprendre l'enchaînement.",
        instruction: 'Classez du plus important au moins important :',
        items: ['Décorer sa chambre', 'Respecter le silence après 22h', 'Partager les tâches ménagères', 'Prévenir si on invite des amis'],
        correctOrder: ['Respecter le silence après 22h', 'Partager les tâches ménagères', 'Prévenir si on invite des amis', 'Décorer sa chambre']
      },
      {
        id: 'L122-7', type: 'qcm', title: 'Avantages de la coloc', characterId: 'omar',
        characterMessage: "Réfléchis comme un Français — pas mot à mot depuis ta langue !",
        question: 'Quel est le principal avantage financier de la colocation ?',
        options: ['Un meilleur quartier', 'Le partage du loyer', 'Plus d\'espace', 'Un jardin privé'],
        correctIndex: 1,
        explanation: 'Le partage du loyer permet de vivre dans un logement plus grand pour moins cher.'
      },
      {
        id: 'L122-8', type: 'final-quiz', title: 'Quiz final — La colocation', characterId: 'marie',
        characterMessage: "Les questions sont plus nuancées à ce niveau. Réfléchissez bien !",
        questions: [
          { question: '« La coloc » est l\'abréviation de…', options: ['la collection', 'la colocation', 'la collaboration', 'la colline'], correctIndex: 1 },
          { question: '« À tour de rôle » signifie…', options: ['ensemble', 'en alternance', 'jamais', 'rapidement'], correctIndex: 1 },
          { question: 'Un avantage de la coloc est…', options: ['plus de bruit', 'partager le loyer', 'être seul', 'moins d\'espace'], correctIndex: 1 },
          { question: '« Ça te dérange si… ? » sert à…', options: ['ordonner', 'interdire', 'demander poliment', 'refuser'], correctIndex: 2 },
          { question: 'Que partage-t-on en colocation ?', options: ['Le salaire', 'Les espaces communs', 'Les vêtements', 'Le travail'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 123: Les pronoms EN et Y
  {
    courseId: 'lesson-123',
    steps: [
      {
        id: 'L123-1', type: 'lesson', title: 'Les pronoms EN et Y', characterId: 'marie',
        characterMessage: "Cette leçon demande un peu plus de réflexion. Je compte sur vous !",
        content: `Les pronoms **EN** et **Y** remplacent des compléments pour éviter les répétitions.\n\n📐 **EN** remplace :\n- **de + nom** : Tu veux du café ? → Oui, j'**en** veux.\n- **une quantité** : Tu as des pommes ? → Oui, j'**en** ai trois.\n- **de + lieu** : Tu viens de Paris ? → Oui, j'**en** viens.\n\n📐 **Y** remplace :\n- **à + nom (lieu)** : Tu vas à Antibes ? → Oui, j'**y** vais.\n- **à + chose** : Tu penses à ton examen ? → Oui, j'**y** pense.\n- **dans/sur/chez + lieu** : Tu es chez toi ? → Oui, j'**y** suis.\n\n⚠️ **Position dans la phrase :**\n- Avant le verbe : J'en veux. / J'y vais.\n- Aux temps composés : J'en ai mangé. / J'y suis allé.\n- Impératif affirmatif : Vas-y ! / Prends-en !\n- Impératif négatif : N'y va pas ! / N'en prends pas !`,
        tip: '💡 EN = de quelque chose. Y = à quelque part / à quelque chose. Pensez « DE → EN, À → Y ».'
      },
      {
        id: 'L123-2', type: 'listening', title: 'Écoute — Au marché d\'Antibes', characterId: 'omar',
        characterMessage: "Écoute les intonations — elles donnent beaucoup d'informations.",
        text: 'Tu veux des tomates ? J\'en prends un kilo. Et du fromage ? Oui, j\'en veux bien. Tu vas au marché demain aussi ? Oui, j\'y vais tous les samedis. Tu penses à acheter du pain ? J\'y pense, ne t\'inquiète pas !',
        question: 'Le pronom « y » dans « j\'y vais » remplace…',
        options: ['les tomates', 'le fromage', 'au marché', 'le pain'],
        correctIndex: 2
      },
      {
        id: 'L123-3', type: 'qcm', title: 'EN ou Y ?', characterId: 'elena',
        characterMessage: "J'ai appris cette subtilité en discutant avec des Français.",
        question: '« Tu veux du café ? — Oui, j\' ___ veux bien. »',
        options: ['y', 'en', 'le', 'la'],
        correctIndex: 1,
        explanation: '« Du café » = de + nom → on utilise EN.'
      },
      {
        id: 'L123-4', type: 'flashcard', title: 'EN et Y en contexte', characterId: 'thomas',
        characterMessage: "J'ai découvert ces mots en explorant les villages provençaux.",
        cards: [
          { front: 'Tu vas à Paris ? → J\'y vais.', back: 'Y replaces « à Paris » (lieu)' },
          { front: 'Tu veux du thé ? → J\'en veux.', back: 'EN replaces « du thé » (de + nom)' },
          { front: 'Tu as des frères ? → J\'en ai deux.', back: 'EN replaces « des frères » (quantité)' },
          { front: 'Tu penses à l\'examen ? → J\'y pense.', back: 'Y replaces « à l\'examen »' },
          { front: 'Tu viens de France ? → J\'en viens.', back: 'EN replaces « de France »' },
          { front: 'Tu es chez toi ? → J\'y suis.', back: 'Y replaces « chez toi » (lieu)' },
        ]
      },
      {
        id: 'L123-5', type: 'fill-blank', title: 'Complétez avec EN ou Y', characterId: 'fatou',
        characterMessage: "La concordance des temps, c'est un point crucial à ce niveau.",
        sentence: 'Tu vas à la plage ? — Oui, j\' ___ vais cet après-midi.',
        options: ['en', 'y', 'le', 'la'],
        correctAnswer: 'y'
      },
      {
        id: 'L123-6', type: 'drag-drop', title: 'Replacez le pronom', characterId: 'yuki',
        characterMessage: "Cet exercice te prépare à écrire des textes plus élaborés.",
        instruction: 'Formez la phrase avec le pronom EN :',
        items: ['en', 'J\'', 'trois', 'ai'],
        correctOrder: ['J\'', 'en', 'ai', 'trois']
      },
      {
        id: 'L123-7', type: 'qcm', title: 'Position du pronom', characterId: 'lucas',
        characterMessage: "Même après deux ans en France, ce point me fait parfois hésiter.",
        question: 'Où place-t-on EN et Y dans une phrase ?',
        options: ['Après le verbe', 'Avant le verbe', 'En fin de phrase', 'Au début de la phrase'],
        correctIndex: 1,
        explanation: 'EN et Y se placent avant le verbe conjugué (ou avant l\'auxiliaire aux temps composés).'
      },
      {
        id: 'L123-8', type: 'final-quiz', title: 'Quiz final — EN et Y', characterId: 'marie',
        characterMessage: "Montrez-moi que vous maîtrisez ce sujet. C'est parti !",
        questions: [
          { question: '« Tu viens de Lyon ? — Oui, j\' ___ viens. »', options: ['y', 'en', 'le', 'la'], correctIndex: 1 },
          { question: '« Elle va au cinéma ? — Oui, elle ___ va. »', options: ['en', 'y', 'le', 'la'], correctIndex: 1 },
          { question: 'EN remplace un complément introduit par…', options: ['à', 'de', 'pour', 'avec'], correctIndex: 1 },
          { question: '« J\'ai des amis. → J\' ___ ai beaucoup. »', options: ['y', 'en', 'les', 'leur'], correctIndex: 1 },
          { question: '« Tu penses à l\'examen ? → Tu ___ penses ? »', options: ['en', 'y', 'le', 'la'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 124: Gérer son budget
  {
    courseId: 'lesson-124',
    steps: [
      {
        id: 'L124-1', type: 'lesson', title: 'Gérer son budget', characterId: 'marie',
        characterMessage: "Vous allez adorer ce thème, il est très riche culturellement.",
        content: `Apprenons à **gérer son budget** et à parler d'argent en français ! 💰\n\n📊 **Vocabulaire bancaire :**\n- Un compte bancaire / un compte courant\n- Un relevé bancaire : la liste des opérations\n- Un virement : transfert d'argent\n- Un prélèvement : paiement automatique\n- Être à découvert : avoir un solde négatif\n\n💳 **Moyens de paiement :**\n- La carte bancaire (CB)\n- Le chèque (de moins en moins utilisé)\n- Le virement bancaire\n- Le paiement sans contact\n- L'espèce (les billets et les pièces)\n\n📝 **Expressions utiles :**\n- Économiser / mettre de l'argent de côté\n- Dépenser / faire des dépenses\n- Le budget / les revenus / les dépenses\n- Faire ses comptes`,
        tip: '💡 En France, on paie presque tout par carte bancaire, même les petits montants grâce au paiement sans contact.'
      },
      {
        id: 'L124-2', type: 'listening', title: 'Écoute — À la banque', characterId: 'hans',
        text: 'Bonjour, je voudrais consulter mon solde, s\'il vous plaît. Votre compte affiche un solde de 1 250 euros. Vous avez reçu un virement de 800 euros hier et un prélèvement de 680 euros pour votre loyer a été effectué ce matin.',
        question: 'Combien a coûté le prélèvement du loyer ?',
        options: ['800 euros', '680 euros', '1 250 euros', '570 euros'],
        correctIndex: 1
      },
      {
        id: 'L124-3', type: 'qcm', title: 'Vocabulaire bancaire', characterId: 'elena',
        characterMessage: "Pense au contexte avant de choisir ta réponse.",
        question: '« Être à découvert » signifie…',
        options: ['Avoir beaucoup d\'argent', 'Avoir un solde négatif', 'Ouvrir un compte', 'Fermer un compte'],
        correctIndex: 1,
        explanation: '« Être à découvert » = avoir dépensé plus d\'argent qu\'il n\'y en a sur le compte.'
      },
      {
        id: 'L124-4', type: 'flashcard', title: 'Vocabulaire financier', characterId: 'thomas',
        characterMessage: "La langue française est un trésor. Chaque mot est une perle !",
        cards: [
          { front: 'Un compte bancaire', back: 'A bank account' },
          { front: 'Un relevé bancaire', back: 'A bank statement' },
          { front: 'Un virement', back: 'A bank transfer' },
          { front: 'Un prélèvement', back: 'A direct debit' },
          { front: 'Économiser', back: 'To save (money)' },
          { front: 'Le paiement sans contact', back: 'Contactless payment' },
        ]
      },
      {
        id: 'L124-5', type: 'fill-blank', title: 'Complétez la phrase', characterId: 'fatou',
        characterMessage: "Au Sénégal, le français a ses particularités. Ici, on apprend le standard.",
        sentence: 'Je dois ___ de l\'argent de côté pour les vacances.',
        options: ['dépenser', 'mettre', 'prendre', 'donner'],
        correctAnswer: 'mettre'
      },
      {
        id: 'L124-6', type: 'drag-drop', title: 'Opérations bancaires', characterId: 'yuki',
        characterMessage: "La syntaxe française a ses subtilités — entraîne-toi bien !",
        instruction: 'Remettez les étapes dans l\'ordre logique :',
        items: ['Recevoir sa CB', 'Ouvrir un compte', 'Déposer de l\'argent', 'Aller à la banque'],
        correctOrder: ['Aller à la banque', 'Ouvrir un compte', 'Déposer de l\'argent', 'Recevoir sa CB']
      },
      {
        id: 'L124-7', type: 'qcm', title: 'Moyens de paiement', characterId: 'lucas',
        characterMessage: "C'est subtil, mais une fois que tu as compris, c'est automatique.",
        question: 'En France, le moyen de paiement le plus courant est…',
        options: ['le chèque', 'l\'espèce', 'la carte bancaire', 'le virement'],
        correctIndex: 2,
        explanation: 'La carte bancaire est le moyen de paiement le plus utilisé en France.'
      },
      {
        id: 'L124-8', type: 'final-quiz', title: 'Quiz final — Gérer son budget', characterId: 'marie',
        characterMessage: "Quiz de niveau intermédiaire — je sais que vous pouvez y arriver.",
        questions: [
          { question: 'Un « prélèvement » est…', options: ['un dépôt', 'un paiement automatique', 'un chèque', 'une carte'], correctIndex: 1 },
          { question: '« Économiser » signifie…', options: ['dépenser', 'emprunter', 'mettre de l\'argent de côté', 'perdre de l\'argent'], correctIndex: 2 },
          { question: '« Être à découvert » = …', options: ['avoir beaucoup d\'argent', 'solde négatif', 'compte fermé', 'compte épargne'], correctIndex: 1 },
          { question: 'CB signifie…', options: ['Compte Bancaire', 'Carte Bancaire', 'Crédit Bancaire', 'Centre Bancaire'], correctIndex: 1 },
          { question: 'Un « virement » est…', options: ['un retrait', 'un transfert d\'argent', 'un achat', 'une taxe'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 125: Le discours indirect au présent
  {
    courseId: 'lesson-125',
    steps: [
      {
        id: 'L125-1', type: 'lesson', title: 'Le discours indirect au présent', characterId: 'marie',
        characterMessage: "Aujourd'hui, on travaille un point de grammaire plus avancé.",
        content: `Le **discours indirect** permet de rapporter les paroles de quelqu'un.\n\n📐 **Transformation :**\n\n🔵 **Affirmation** → il dit **que**\n- Direct : « Je suis fatigué. »\n- Indirect : Il dit **qu'**il est fatigué.\n\n🔵 **Question fermée** → il demande **si**\n- Direct : « Tu viens demain ? »\n- Indirect : Il demande **si** tu viens demain.\n\n🔵 **Question avec mot interrogatif** → il demande + mot interrogatif\n- Direct : « Où habites-tu ? »\n- Indirect : Il demande **où** tu habites.\n\n🔵 **Impératif** → il dit **de** + infinitif\n- Direct : « Fermez la porte ! »\n- Indirect : Il dit **de** fermer la porte.\n\n⚠️ **Changements de pronoms :**\n- je → il/elle\n- tu → je (si on s'adresse à moi)\n- mon → son, ma → sa`,
        tip: '💡 Au discours indirect, on ne met jamais de point d\'interrogation, et « est-ce que » disparaît.'
      },
      {
        id: 'L125-2', type: 'listening', title: 'Écoute — Rapporter des paroles', characterId: 'lucas',
        characterMessage: "L'écoute est plus rapide maintenant. Reste attentif aux détails !",
        text: 'Marie dit qu\'elle est contente du travail de ses étudiants. Elle demande si tout le monde a compris la leçon. Elle veut savoir qui a des questions. Enfin, elle dit de préparer l\'exercice pour demain.',
        question: 'Que demande Marie à ses étudiants ?',
        options: ['De partir', 'Si tout le monde a compris', 'De chanter', 'Où ils habitent'],
        correctIndex: 1
      },
      {
        id: 'L125-3', type: 'qcm', title: 'Discours indirect', characterId: 'elena',
        characterMessage: "Le français et l'espagnol divergent sur ce point. Mémorise bien !",
        question: '« Tu viens demain ? » → Il demande ___ tu viens demain.',
        options: ['que', 'si', 'où', 'quand'],
        correctIndex: 1,
        explanation: 'Pour une question fermée (oui/non), on utilise « si » au discours indirect.'
      },
      {
        id: 'L125-4', type: 'flashcard', title: 'Transformations au discours indirect', characterId: 'thomas',
        characterMessage: "Avec ce vocabulaire, tu peux tenir des conversations plus riches.",
        cards: [
          { front: '« Je suis content. » → Il dit que…', back: 'Il dit qu\'il est content.' },
          { front: '« Tu viens ? » → Il demande si…', back: 'Il demande si je viens.' },
          { front: '« Où vas-tu ? » → Il demande où…', back: 'Il demande où je vais.' },
          { front: '« Ferme la porte ! » → Il dit de…', back: 'Il dit de fermer la porte.' },
          { front: '« Qu\'est-ce que tu fais ? » → Il demande ce que…', back: 'Il demande ce que je fais.' },
          { front: '« Est-ce que tu aimes ? » → Il demande si…', back: 'Il demande si j\'aime.' },
        ]
      },
      {
        id: 'L125-5', type: 'fill-blank', title: 'Transformez au discours indirect', characterId: 'fatou',
        characterMessage: "Cet exercice teste ta maîtrise de la grammaire en contexte.",
        sentence: '« Où habites-tu ? » → Il demande ___ j\'habite.',
        options: ['si', 'que', 'où', 'quand'],
        correctAnswer: 'où'
      },
      {
        id: 'L125-6', type: 'drag-drop', title: 'Formez le discours indirect', characterId: 'yuki',
        characterMessage: "Pense au sens global avant de placer chaque mot.",
        instruction: 'Transformez : « Je suis fatigué. »',
        items: ['est', 'dit', 'qu\'il', 'Il', 'fatigué'],
        correctOrder: ['Il', 'dit', 'qu\'il', 'est', 'fatigué']
      },
      {
        id: 'L125-7', type: 'qcm', title: 'Impératif au discours indirect', characterId: 'hans',
        characterMessage: "Le monde professionnel exige ce genre de compétence. Entraîne-toi !",
        question: '« Faites vos devoirs ! » → Le professeur dit ___ faire nos devoirs.',
        options: ['que', 'si', 'de', 'pour'],
        correctIndex: 2,
        explanation: 'L\'impératif se transforme en « dire de + infinitif » au discours indirect.'
      },
      {
        id: 'L125-8', type: 'final-quiz', title: 'Quiz final — Discours indirect', characterId: 'marie',
        characterMessage: "Prenez le temps de bien lire chaque option. Bonne chance !",
        questions: [
          { question: '« Je suis content. » → Il dit ___ il est content.', options: ['si', 'qu\'', 'de', 'où'], correctIndex: 1 },
          { question: '« Tu viens ? » → Il demande ___', options: ['que tu viens', 'si je viens', 'de venir', 'où je viens'], correctIndex: 1 },
          { question: '« Où vas-tu ? » → Elle demande ___', options: ['si je vais', 'que je vais', 'où je vais', 'de aller'], correctIndex: 2 },
          { question: '« Étudiez ! » → Il dit ___', options: ['qu\'on étudie', 'si on étudie', 'd\'étudier', 'étudier'], correctIndex: 2 },
          { question: 'Au discours indirect, « est-ce que »…', options: ['reste', 'disparaît', 'se transforme en « que »', 'devient « si »'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 126-130: Chez le banquier, Démarches administratives, Technologie, Révision, Examen
  // Lesson 126
  {
    courseId: 'lesson-126',
    steps: [
      {
        id: 'L126-1', type: 'lesson', title: 'Chez le banquier', characterId: 'marie',
        characterMessage: "Vous êtes maintenant capables de comprendre des sujets plus complexes.",
        content: `Apprenons à **interagir avec un banquier** en français.\n\n🏦 **Ouvrir un compte :**\n- « Je voudrais ouvrir un compte courant. »\n- Documents nécessaires : pièce d'identité, justificatif de domicile, RIB\n\n💳 **Demander une carte bancaire :**\n- « Quelles cartes proposez-vous ? »\n- Carte à débit immédiat / différé\n- Plafond de retrait / de paiement\n\n💰 **Demander un prêt :**\n- « Je souhaiterais me renseigner sur un prêt immobilier. »\n- Le taux d'intérêt\n- Les mensualités\n- La durée du prêt\n\n📝 **Vocabulaire bancaire :**\n- Un RIB (Relevé d'Identité Bancaire)\n- Un conseiller bancaire\n- Le taux d'intérêt\n- Un découvert autorisé`,
        tip: '💡 Le RIB est indispensable en France pour recevoir un salaire ou faire des virements.'
      },
      {
        id: 'L126-2', type: 'listening', title: 'Écoute — Rendez-vous à la banque', characterId: 'hans',
        text: 'Bonjour, je voudrais ouvrir un compte courant. Bien sûr, avez-vous une pièce d\'identité et un justificatif de domicile ? Oui, voici mon passeport et une facture d\'électricité. Très bien, nous allons aussi vous donner un RIB et une carte bancaire.',
        question: 'Quels documents sont nécessaires pour ouvrir un compte ?',
        options: ['Passeport et CV', 'Pièce d\'identité et justificatif de domicile', 'Diplôme et lettre', 'Photo et contrat'],
        correctIndex: 1
      },
      {
        id: 'L126-3', type: 'qcm', title: 'Vocabulaire bancaire', characterId: 'elena',
        characterMessage: "À ce niveau, il faut aller au-delà de la traduction.",
        question: 'Que signifie « RIB » ?',
        options: ['Relevé d\'Impôts Bancaires', 'Relevé d\'Identité Bancaire', 'Reçu d\'Investissement Bancaire', 'Rapport d\'Information Bancaire'],
        correctIndex: 1,
        explanation: 'RIB = Relevé d\'Identité Bancaire, un document qui identifie votre compte bancaire.'
      },
      {
        id: 'L126-4', type: 'flashcard', title: 'À la banque', characterId: 'thomas',
        characterMessage: "Ces termes enrichissent considérablement ton expression.",
        cards: [
          { front: 'Un compte courant', back: 'A current / checking account' },
          { front: 'Un conseiller bancaire', back: 'A bank advisor' },
          { front: 'Le taux d\'intérêt', back: 'The interest rate' },
          { front: 'Un prêt immobilier', back: 'A mortgage / property loan' },
          { front: 'Les mensualités', back: 'Monthly payments / installments' },
          { front: 'Un justificatif de domicile', back: 'Proof of address' },
        ]
      },
      {
        id: 'L126-5', type: 'fill-blank', title: 'Complétez la demande', characterId: 'fatou',
        characterMessage: "Les phrases sont plus complexes, mais tu as les outils pour réussir.",
        sentence: 'Je voudrais me ___ sur un prêt immobilier.',
        options: ['renseigner', 'inscrire', 'plaindre', 'présenter'],
        correctAnswer: 'renseigner'
      },
      {
        id: 'L126-6', type: 'drag-drop', title: 'Étapes pour ouvrir un compte', characterId: 'yuki',
        characterMessage: "Les structures deviennent complexes. Attention aux propositions !",
        instruction: 'Remettez dans l\'ordre :',
        items: ['Recevoir votre RIB', 'Prendre rendez-vous', 'Apporter vos documents', 'Signer le contrat'],
        correctOrder: ['Prendre rendez-vous', 'Apporter vos documents', 'Signer le contrat', 'Recevoir votre RIB']
      },
      {
        id: 'L126-7', type: 'qcm', title: 'Prêt bancaire', characterId: 'hans',
        characterMessage: "Le monde professionnel exige ce genre de compétence. Entraîne-toi !",
        question: 'Les « mensualités » sont les paiements que l\'on fait…',
        options: ['chaque semaine', 'chaque mois', 'chaque année', 'une seule fois'],
        correctIndex: 1,
        explanation: 'Mensualités vient de « mensuel » = chaque mois.'
      },
      {
        id: 'L126-8', type: 'final-quiz', title: 'Quiz final — Chez le banquier', characterId: 'marie',
        characterMessage: "Ce quiz teste votre compréhension en profondeur. Allez-y !",
        questions: [
          { question: 'RIB signifie…', options: ['Relevé d\'Identité Bancaire', 'Registre International Bancaire', 'Reçu d\'Information Bancaire', 'Relevé d\'Impôts Bancaires'], correctIndex: 0 },
          { question: 'Pour ouvrir un compte, il faut…', options: ['un CV', 'une pièce d\'identité', 'un diplôme', 'un billet d\'avion'], correctIndex: 1 },
          { question: '« Le taux d\'intérêt » concerne…', options: ['le coût du crédit', 'le nom du banquier', 'l\'adresse de la banque', 'le numéro de compte'], correctIndex: 0 },
          { question: 'Un « découvert autorisé » permet de…', options: ['fermer son compte', 'avoir un solde négatif temporaire', 'changer de banque', 'ouvrir un second compte'], correctIndex: 1 },
          { question: '« Je voudrais me renseigner » signifie…', options: ['je veux me plaindre', 'je veux des informations', 'je veux partir', 'je veux payer'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 127
  {
    courseId: 'lesson-127',
    steps: [
      {
        id: 'L127-1', type: 'lesson', title: 'Les démarches administratives', characterId: 'marie',
        characterMessage: "On entre dans le vif du sujet aujourd'hui — accrochez-vous !",
        content: `En France, les **démarches administratives** font partie de la vie quotidienne.\n\n📋 **Documents importants :**\n- La carte d'identité / le passeport\n- Le titre de séjour (pour les étrangers)\n- La carte Vitale (sécurité sociale)\n- Le permis de conduire\n\n🏛️ **Où faire ses démarches :**\n- La mairie : état civil, élections\n- La préfecture : titre de séjour, passeport\n- La CAF : allocations familiales, aides au logement\n- La Sécurité sociale : carte Vitale, remboursements\n- Pôle emploi : inscription chômage\n\n📝 **Remplir un formulaire :**\n- Nom de famille / Nom de naissance\n- Prénom(s)\n- Date et lieu de naissance\n- Adresse / Domicile\n- Nationalité\n- Situation familiale : célibataire, marié(e), divorcé(e)`,
        tip: '💡 De plus en plus de démarches se font en ligne sur service-public.fr, le site officiel de l\'administration française.'
      },
      {
        id: 'L127-2', type: 'listening', title: 'Écoute — À la préfecture', characterId: 'omar',
        characterMessage: "Dans mon restaurant, les clients parlent vite. C'est un bon entraînement !",
        text: 'Bonjour, je viens pour renouveler mon titre de séjour. Avez-vous votre ancien titre, votre passeport et un justificatif de domicile ? Oui, j\'ai tout. Très bien, remplissez ce formulaire et prenez un numéro, on vous appellera.',
        question: 'Pourquoi la personne va-t-elle à la préfecture ?',
        options: ['Pour voter', 'Pour renouveler son titre de séjour', 'Pour un passeport', 'Pour une carte Vitale'],
        correctIndex: 1
      },
      {
        id: 'L127-3', type: 'qcm', title: 'Administration française', characterId: 'elena',
        characterMessage: "La nuance est importante — chaque option est crédible !",
        question: 'La carte Vitale est liée à…',
        options: ['la banque', 'la sécurité sociale', 'la mairie', 'l\'école'],
        correctIndex: 1,
        explanation: 'La carte Vitale est la carte d\'assurance maladie de la Sécurité sociale.'
      },
      {
        id: 'L127-4', type: 'flashcard', title: 'Vocabulaire administratif', characterId: 'thomas',
        characterMessage: "Le vocabulaire avancé te permet de nuancer ta pensée en français.",
        cards: [
          { front: 'Un titre de séjour', back: 'A residence permit' },
          { front: 'La carte Vitale', back: 'French health insurance card' },
          { front: 'La mairie', back: 'The town hall / city hall' },
          { front: 'La préfecture', back: 'The prefecture (regional admin office)' },
          { front: 'Un formulaire', back: 'A form (to fill out)' },
          { front: 'Un justificatif', back: 'A supporting document / proof' },
        ]
      },
      {
        id: 'L127-5', type: 'fill-blank', title: 'Complétez le formulaire', characterId: 'fatou',
        characterMessage: "Pense aux temps verbaux — passé, présent, futur ?",
        sentence: 'Situation familiale : ___',
        options: ['français', 'célibataire', 'étudiant', 'bleu'],
        correctAnswer: 'célibataire'
      },
      {
        id: 'L127-6', type: 'drag-drop', title: 'Informations d\'un formulaire', characterId: 'yuki',
        characterMessage: "Cherche les connecteurs logiques pour comprendre l'enchaînement.",
        instruction: 'Remettez les champs dans l\'ordre habituel d\'un formulaire :',
        items: ['Adresse', 'Nom', 'Nationalité', 'Prénom', 'Date de naissance'],
        correctOrder: ['Nom', 'Prénom', 'Date de naissance', 'Nationalité', 'Adresse']
      },
      {
        id: 'L127-7', type: 'qcm', title: 'Où aller ?', characterId: 'hans',
        characterMessage: "Le monde professionnel exige ce genre de compétence. Entraîne-toi !",
        question: 'Pour demander une aide au logement, on s\'adresse à…',
        options: ['la mairie', 'la préfecture', 'la CAF', 'Pôle emploi'],
        correctIndex: 2,
        explanation: 'La CAF (Caisse d\'Allocations Familiales) gère les aides au logement (APL).'
      },
      {
        id: 'L127-8', type: 'final-quiz', title: 'Quiz final — Démarches administratives', characterId: 'marie',
        characterMessage: "Les questions sont plus nuancées à ce niveau. Réfléchissez bien !",
        questions: [
          { question: 'La carte Vitale est liée à…', options: ['la banque', 'la santé', 'l\'éducation', 'le transport'], correctIndex: 1 },
          { question: 'Pour un titre de séjour, on va à…', options: ['la mairie', 'la préfecture', 'la CAF', 'la banque'], correctIndex: 1 },
          { question: 'CAF signifie…', options: ['Centre d\'Aide Financière', 'Caisse d\'Allocations Familiales', 'Comité d\'Action Française', 'Carte Administrative Française'], correctIndex: 1 },
          { question: 'Un « justificatif de domicile » prouve…', options: ['votre identité', 'votre adresse', 'votre emploi', 'votre nationalité'], correctIndex: 1 },
          { question: 'Le site officiel de l\'administration française est…', options: ['google.fr', 'service-public.fr', 'france.fr', 'admin.fr'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 128
  {
    courseId: 'lesson-128',
    steps: [
      {
        id: 'L128-1', type: 'lesson', title: 'La technologie au quotidien', characterId: 'marie',
        characterMessage: "Cette leçon demande un peu plus de réflexion. Je compte sur vous !",
        content: `Le vocabulaire du **numérique** est essentiel dans la vie moderne ! 💻📱\n\n🖥️ **Appareils :**\n- Un ordinateur (portable / de bureau)\n- Un smartphone / un téléphone portable\n- Une tablette\n- Une imprimante\n\n🌐 **Internet :**\n- Le wifi / la connexion internet\n- Un site web / une page web\n- Un moteur de recherche (Google)\n- Télécharger / mettre en ligne\n- Un mot de passe / un identifiant\n\n📱 **Applications et réseaux sociaux :**\n- Une application (une appli)\n- Un réseau social\n- Publier / partager / liker\n- Un abonné / s'abonner\n\n📧 **Communication numérique :**\n- Un email / un courriel (terme officiel)\n- Un SMS / un texto\n- Une visioconférence`,
        tip: '💡 En français, on dit « un courriel » (courrier + électronique) au lieu de « email », mais « email » est très utilisé dans la vie quotidienne.'
      },
      {
        id: 'L128-2', type: 'listening', title: 'Écoute — Problème technique', characterId: 'lucas',
        characterMessage: "L'écoute est plus rapide maintenant. Reste attentif aux détails !",
        text: 'Mon ordinateur ne fonctionne plus. J\'ai essayé de le redémarrer mais rien ne se passe. En plus, le wifi ne marche pas dans l\'appartement. Je ne peux même pas envoyer un email depuis mon téléphone !',
        question: 'Quels sont les deux problèmes mentionnés ?',
        options: ['L\'imprimante et le téléphone', 'L\'ordinateur et le wifi', 'La tablette et le SMS', 'Le clavier et la souris'],
        correctIndex: 1
      },
      {
        id: 'L128-3', type: 'qcm', title: 'Vocabulaire numérique', characterId: 'elena',
        characterMessage: "J'ai appris cette subtilité en discutant avec des Français.",
        question: 'Le terme officiel français pour « email » est…',
        options: ['e-lettre', 'courriel', 'message net', 'poste électrique'],
        correctIndex: 1,
        explanation: '« Courriel » est le mot officiel français (courrier + électronique).'
      },
      {
        id: 'L128-4', type: 'flashcard', title: 'Vocabulaire numérique', characterId: 'thomas',
        characterMessage: "J'ai découvert ces mots en explorant les villages provençaux.",
        cards: [
          { front: 'Télécharger', back: 'To download' },
          { front: 'Mettre en ligne', back: 'To upload' },
          { front: 'Un mot de passe', back: 'A password' },
          { front: 'Un moteur de recherche', back: 'A search engine' },
          { front: 'Un courriel', back: 'An email (official French term)' },
          { front: 'Une visioconférence', back: 'A video conference' },
        ]
      },
      {
        id: 'L128-5', type: 'fill-blank', title: 'Complétez la phrase', characterId: 'fatou',
        characterMessage: "La concordance des temps, c'est un point crucial à ce niveau.",
        sentence: 'Je dois ___ cette application sur mon téléphone.',
        options: ['télécharger', 'imprimer', 'écrire', 'lire'],
        correctAnswer: 'télécharger'
      },
      {
        id: 'L128-6', type: 'drag-drop', title: 'Actions numériques', characterId: 'yuki',
        characterMessage: "Cet exercice te prépare à écrire des textes plus élaborés.",
        instruction: 'Remettez les étapes pour envoyer un email :',
        items: ['Cliquer sur Envoyer', 'Écrire l\'objet', 'Ouvrir la boîte mail', 'Rédiger le message'],
        correctOrder: ['Ouvrir la boîte mail', 'Écrire l\'objet', 'Rédiger le message', 'Cliquer sur Envoyer']
      },
      {
        id: 'L128-7', type: 'qcm', title: 'Réseaux sociaux', characterId: 'omar',
        characterMessage: "Réfléchis comme un Français — pas mot à mot depuis ta langue !",
        question: '« S\'abonner » à un compte signifie…',
        options: ['supprimer le compte', 'suivre le compte', 'bloquer le compte', 'signaler le compte'],
        correctIndex: 1,
        explanation: 'S\'abonner = suivre un compte pour recevoir ses publications.'
      },
      {
        id: 'L128-8', type: 'final-quiz', title: 'Quiz final — Technologie au quotidien', characterId: 'marie',
        characterMessage: "Montrez-moi que vous maîtrisez ce sujet. C'est parti !",
        questions: [
          { question: '« Courriel » est le terme officiel pour…', options: ['SMS', 'email', 'wifi', 'blog'], correctIndex: 1 },
          { question: '« Télécharger » signifie…', options: ['upload', 'download', 'delete', 'print'], correctIndex: 1 },
          { question: 'Un « mot de passe » est un…', options: ['username', 'password', 'email', 'website'], correctIndex: 1 },
          { question: 'Google est un…', options: ['réseau social', 'moteur de recherche', 'navigateur', 'système d\'exploitation'], correctIndex: 1 },
          { question: '« Mettre en ligne » signifie…', options: ['télécharger', 'imprimer', 'publier sur internet', 'supprimer'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 129: Révision B1.3
  {
    courseId: 'lesson-129',
    steps: [
      {
        id: 'L129-1', type: 'lesson', title: 'Révision B1.3', characterId: 'marie',
        characterMessage: "Vous allez adorer ce thème, il est très riche culturellement.",
        content: `Révisons le module B1.3 ! 📚\n\n🏠 **Logement :** T1, T2, T3, loyer, charges, CC/HC, bail, caution\n\n👥 **Colocation :** Partager le loyer, règles de vie, à tour de rôle\n\n🔄 **Pronoms EN et Y :** EN = de + nom / quantité. Y = à + lieu/chose.\n\n💰 **Budget :** Compte bancaire, virement, prélèvement, économiser\n\n💬 **Discours indirect :** Il dit que… / Il demande si… / Il dit de…\n\n🏦 **Banque :** RIB, conseiller, taux d'intérêt, prêt\n\n🏛️ **Administration :** Mairie, préfecture, CAF, carte Vitale\n\n💻 **Technologie :** Courriel, télécharger, mot de passe`,
        tip: '💡 Bonne chance pour cette révision !'
      },
      {
        id: 'L129-2', type: 'qcm', title: 'Révision — Logement', characterId: 'elena',
        characterMessage: "Pense au contexte avant de choisir ta réponse.",
        question: '« CC » dans une annonce signifie…',
        options: ['Cave Comprise', 'Charges Comprises', 'Chambre Confortable', 'Cuisine Complète'],
        correctIndex: 1,
        explanation: 'CC = Charges Comprises.'
      },
      {
        id: 'L129-3', type: 'fill-blank', title: 'Révision — EN et Y', characterId: 'fatou',
        characterMessage: "Au Sénégal, le français a ses particularités. Ici, on apprend le standard.",
        sentence: 'Tu vas au cinéma ? — Oui, j\' ___ vais.',
        options: ['en', 'y', 'le', 'la'],
        correctAnswer: 'y'
      },
      {
        id: 'L129-4', type: 'qcm', title: 'Révision — Discours indirect', characterId: 'lucas',
        characterMessage: "J'ai discuté de ça avec des amis français — même eux hésitent parfois !",
        question: '« Où habites-tu ? » → Il demande ___ j\'habite.',
        options: ['si', 'que', 'où', 'quand'],
        correctIndex: 2,
        explanation: 'Le mot interrogatif « où » est conservé au discours indirect.'
      },
      {
        id: 'L129-5', type: 'fill-blank', title: 'Révision — Banque', characterId: 'fatou',
        characterMessage: "Cet exercice teste ta maîtrise de la grammaire en contexte.",
        sentence: 'RIB signifie Relevé d\'Identité ___.',
        options: ['Bancaire', 'Budget', 'Bureau', 'Base'],
        correctAnswer: 'Bancaire'
      },
      {
        id: 'L129-6', type: 'drag-drop', title: 'Révision — Administration', characterId: 'yuki',
        characterMessage: "La syntaxe française a ses subtilités — entraîne-toi bien !",
        instruction: 'Associez le lieu à la démarche :',
        items: ['Carte Vitale → Sécurité sociale', 'Titre de séjour → Préfecture', 'Aide au logement → CAF', 'Passeport → Mairie'],
        correctOrder: ['Passeport → Mairie', 'Titre de séjour → Préfecture', 'Carte Vitale → Sécurité sociale', 'Aide au logement → CAF']
      },
      {
        id: 'L129-7', type: 'qcm', title: 'Révision — Technologie', characterId: 'omar',
        characterMessage: "Réfléchis comme un Français — pas mot à mot depuis ta langue !",
        question: 'Le terme officiel français pour « email » est…',
        options: ['e-message', 'courriel', 'mél', 'poste-net'],
        correctIndex: 1,
        explanation: '« Courriel » = courrier + électronique.'
      },
      {
        id: 'L129-8', type: 'final-quiz', title: 'Quiz de révision B1.3', characterId: 'marie',
        characterMessage: "Quiz de niveau intermédiaire — je sais que vous pouvez y arriver.",
        questions: [
          { question: 'Un T3 a combien de pièces ?', options: ['1', '2', '3', '4'], correctIndex: 2 },
          { question: '« J\'en ai deux » → EN remplace…', options: ['un lieu', 'une quantité', 'un verbe', 'un adjectif'], correctIndex: 1 },
          { question: '« Il dit de partir » rapporte…', options: ['une question', 'une affirmation', 'un ordre', 'un souhait'], correctIndex: 2 },
          { question: '« Être à découvert » signifie…', options: ['avoir beaucoup d\'argent', 'solde négatif', 'compte fermé', 'nouveau compte'], correctIndex: 1 },
          { question: 'La CAF gère les…', options: ['impôts', 'allocations familiales', 'trains', 'passeports'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 130: Examen B1.3
  {
    courseId: 'lesson-130',
    steps: [
      {
        id: 'L130-1', type: 'lesson', title: 'Examen B1.3 — Autonome 🏠', characterId: 'marie',
        characterMessage: "Aujourd'hui, on travaille un point de grammaire plus avancé.",
        content: `Bienvenue à l'examen du module B1.3 !\n\n🎯 **Compétences testées :**\n- Chercher et comprendre une annonce de logement\n- Vivre en colocation\n- Utiliser les pronoms EN et Y\n- Gérer son budget et parler à un banquier\n- Utiliser le discours indirect\n- Faire des démarches administratives\n- Vocabulaire de la technologie\n\nBonne chance ! 🍀`,
        tip: '💡 Relisez bien chaque question avant de répondre.'
      },
      {
        id: 'L130-2', type: 'qcm', title: 'Examen — Question 1', characterId: 'marie',
        question: '« Tu veux du fromage ? — Oui, j\' ___ veux bien. »',
        options: ['y', 'en', 'le', 'la'],
        correctIndex: 1,
        explanation: 'Du fromage = de + nom → EN.'
      },
      {
        id: 'L130-3', type: 'fill-blank', title: 'Examen — Question 2', characterId: 'marie',
        sentence: '« Fermez la porte ! » → Le professeur dit ___ fermer la porte.',
        options: ['que', 'si', 'de', 'pour'],
        correctAnswer: 'de'
      },
      {
        id: 'L130-4', type: 'qcm', title: 'Examen — Question 3', characterId: 'marie',
        question: 'Pour renouveler un titre de séjour, on va à…',
        options: ['la CAF', 'la mairie', 'la préfecture', 'la banque'],
        correctIndex: 2,
        explanation: 'La préfecture gère les titres de séjour.'
      },
      {
        id: 'L130-5', type: 'fill-blank', title: 'Examen — Question 4', characterId: 'marie',
        sentence: 'Le loyer est de 750 euros ___ comprises.',
        options: ['caves', 'charges', 'chambres', 'cuisines'],
        correctAnswer: 'charges'
      },
      {
        id: 'L130-6', type: 'qcm', title: 'Examen — Question 5', characterId: 'marie',
        question: '« Mettre de l\'argent de côté » signifie…',
        options: ['dépenser', 'économiser', 'emprunter', 'perdre'],
        correctIndex: 1,
        explanation: '« Mettre de l\'argent de côté » = économiser.'
      },
      {
        id: 'L130-7', type: 'drag-drop', title: 'Examen — Question 6', characterId: 'marie',
        instruction: 'Transformez au discours indirect : « Je suis fatigué. »',
        items: ['qu\'il', 'dit', 'fatigué', 'est', 'Il'],
        correctOrder: ['Il', 'dit', 'qu\'il', 'est', 'fatigué']
      },
      {
        id: 'L130-8', type: 'final-quiz', title: 'Examen final B1.3 — Badge Autonome', characterId: 'marie',
        characterMessage: "Prenez le temps de bien lire chaque option. Bonne chance !",
        questions: [
          { question: '« Tu vas à Paris ? — Oui, j\' ___ vais. »', options: ['en', 'y', 'le', 'la'], correctIndex: 1 },
          { question: 'Un « bail » est un…', options: ['meuble', 'contrat de location', 'formulaire', 'document bancaire'], correctIndex: 1 },
          { question: '« Télécharger » signifie…', options: ['to upload', 'to download', 'to print', 'to delete'], correctIndex: 1 },
          { question: 'La carte Vitale concerne…', options: ['la banque', 'la santé', 'le transport', 'l\'éducation'], correctIndex: 1 },
          { question: '« À tour de rôle » signifie…', options: ['ensemble', 'en alternance', 'jamais', 'souvent'], correctIndex: 1 },
        ]
      }
    ]
  },
];
