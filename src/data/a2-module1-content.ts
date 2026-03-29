// Interactive lesson content for A2 Module 1: Raconter au passé (Lessons 51-60)
import type { CourseContent } from './course-content';

export const a2Module1Content: CourseContent[] = [
  // Lesson 51: Hier, j'ai visité Cannes
  {
    courseId: 'lesson-51',
    steps: [
      {
        id: 'L51-1', type: 'lesson', title: 'Hier, j\'ai visité Cannes', characterId: 'marie',
        characterMessage: "Vous progressez bien ! Cette leçon va enrichir votre français.",
        content: `Bienvenue au niveau A2 ! 🎉\n\nVous allez apprendre à **raconter au passé** en français.\n\n📐 **Le passé composé avec AVOIR :**\nSujet + **avoir** au présent + **participe passé**\n\n🔵 **Exemples :**\n- J'**ai visité** Cannes → I visited Cannes\n- Tu **as mangé** une salade niçoise → You ate a Niçoise salad\n- Il **a regardé** le coucher de soleil → He watched the sunset\n- Nous **avons marché** sur la Croisette → We walked on the Croisette\n\n📝 **Participes passés réguliers :**\n- Verbes en -ER → -É (visiter → visité)\n- Verbes en -IR → -I (finir → fini)\n- Verbes en -RE → -U (vendre → vendu)`,
        tip: '💡 La majorité des verbes français utilisent AVOIR au passé composé. Retenez la formule : AVOIR + participe passé !'
      },
      {
        id: 'L51-2', type: 'listening', title: 'Écoute — Une journée à Cannes', characterId: 'lucas',
        characterMessage: "Concentre-toi sur les mots-clés, pas besoin de tout comprendre.",
        text: 'Hier, j\'ai visité Cannes avec mes amis. Nous avons marché sur la Croisette et nous avons mangé une glace. Le soir, nous avons regardé un film au cinéma.',
        question: 'Qu\'ont-ils fait le soir ?',
        options: ['Ils ont mangé au restaurant', 'Ils ont regardé un film', 'Ils ont visité un musée', 'Ils ont nagé dans la mer'],
        correctIndex: 1
      },
      {
        id: 'L51-3', type: 'qcm', title: 'Quel auxiliaire ?', characterId: 'elena',
        characterMessage: "C'est plus facile quand on parle déjà une langue latine !",
        question: 'Complétez : « Nous ___ visité le musée Picasso. »',
        options: ['sommes', 'avons', 'avez', 'sont'],
        correctIndex: 1,
        explanation: '« Visiter » utilise l\'auxiliaire AVOIR au passé composé : nous avons visité.'
      },
      {
        id: 'L51-4', type: 'flashcard', title: 'Participes passés réguliers', characterId: 'thomas',
        characterMessage: "Le français est riche de mots qui n'existent pas dans d'autres langues.",
        cards: [
          { front: 'visiter → ?', back: 'visité (j\'ai visité)' },
          { front: 'manger → ?', back: 'mangé (j\'ai mangé)' },
          { front: 'finir → ?', back: 'fini (j\'ai fini)' },
          { front: 'choisir → ?', back: 'choisi (j\'ai choisi)' },
          { front: 'attendre → ?', back: 'attendu (j\'ai attendu)' },
          { front: 'répondre → ?', back: 'répondu (j\'ai répondu)' },
        ]
      },
      {
        id: 'L51-5', type: 'fill-blank', title: 'Complétez au passé composé', characterId: 'fatou',
        characterMessage: "La grammaire française, c'est comme une recette : il faut les bons ingrédients !",
        sentence: 'Hier, Marie ___ une tarte aux fraises.',
        options: ['a préparé', 'est préparé', 'prépare', 'va préparer'],
        correctAnswer: 'a préparé'
      },
      {
        id: 'L51-6', type: 'drag-drop', title: 'Formez une phrase au passé', characterId: 'yuki',
        characterMessage: "Les phrases sont plus longues maintenant. Lis d'abord tous les mots !",
        instruction: 'Remettez les mots dans l\'ordre :',
        items: ['avons', 'Nous', 'la Croisette', 'sur', 'marché'],
        correctOrder: ['Nous', 'avons', 'marché', 'sur', 'la Croisette']
      },
      {
        id: 'L51-7', type: 'qcm', title: 'Participe passé', characterId: 'omar',
        characterMessage: "Cette question me rappelle mes premiers mois en France.",
        question: 'Quel est le participe passé de « choisir » ?',
        options: ['choisu', 'choisi', 'choisé', 'choisit'],
        correctIndex: 1,
        explanation: 'Les verbes en -IR du 2e groupe font leur participe passé en -I : choisir → choisi.'
      },
      {
        id: 'L51-8', type: 'final-quiz', title: 'Quiz final — Le passé composé avec avoir', characterId: 'marie',
        characterMessage: "Ce quiz est un peu plus long, mais vous êtes prêts !",
        questions: [
          { question: '« J\' ___ mangé une pizza hier. »', options: ['suis', 'ai', 'est', 'as'], correctIndex: 1 },
          { question: 'Participe passé de « regarder » ?', options: ['regardé', 'regardi', 'regardu', 'regardis'], correctIndex: 0 },
          { question: '« Elles ___ fini leurs devoirs. »', options: ['sont', 'ont', 'avons', 'avez'], correctIndex: 1 },
          { question: '« Tu ___ répondu au téléphone. »', options: ['es', 'as', 'a', 'ai'], correctIndex: 1 },
          { question: '« Nous ___ choisi un restaurant. »', options: ['sommes', 'avons', 'avez', 'ont'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 52: Je suis allé(e) à la plage
  {
    courseId: 'lesson-52',
    steps: [
      {
        id: 'L52-1', type: 'lesson', title: 'Je suis allé(e) à la plage', characterId: 'marie',
        characterMessage: "Bravo pour votre travail ! Continuons avec un nouveau thème.",
        content: `Certains verbes utilisent **ÊTRE** au passé composé :\n\n🟢 **Formation :**\nSujet + **être** au présent + **participe passé**\n\n⚠️ **Accord avec le sujet :**\n- Il est all**é** / Elle est all**ée**\n- Ils sont all**és** / Elles sont all**ées**\n\n🏠 **Les verbes avec ÊTRE (DR MRS VANDERTRAMP) :**\n- **D**evenir, **R**evenir\n- **M**onter, **R**ester, **S**ortir\n- **V**enir, **A**ller, **N**aître\n- **D**escendre, **E**ntrer, **R**entrer\n- **T**omber, **R**etourner, **A**rriver, **M**ourir, **P**artir\n\n📍 **Exemples à Antibes :**\n- Je suis allé(e) à la plage de la Gravette\n- Marie est arrivée au CIA ce matin\n- Nous sommes partis en excursion`,
        tip: '💡 Avec ÊTRE, le participe passé s\'accorde comme un adjectif : il est parti, elle est partie, ils sont partis, elles sont parties.'
      },
      {
        id: 'L52-2', type: 'listening', title: 'Écoute — Sortie à la plage', characterId: 'omar',
        characterMessage: "Au marché de Forville à Cannes, j'entends ces conversations chaque jour.",
        text: 'Samedi dernier, je suis allé à la plage avec Yuki. Elle est arrivée en retard parce qu\'elle est tombée de son vélo ! Nous sommes restés à la plage jusqu\'au coucher du soleil.',
        question: 'Pourquoi Yuki est-elle arrivée en retard ?',
        options: ['Elle a dormi trop longtemps', 'Elle est tombée de son vélo', 'Elle a raté le bus', 'Elle a oublié l\'heure'],
        correctIndex: 1
      },
      {
        id: 'L52-3', type: 'qcm', title: 'Accord du participe', characterId: 'elena',
        characterMessage: "Attention, le français a des pièges que l'espagnol n'a pas.",
        question: 'Complétez : « Sophie et Marie sont ___ au cinéma. »',
        options: ['allé', 'allés', 'allée', 'allées'],
        correctIndex: 3,
        explanation: 'Sophie et Marie = féminin pluriel, donc le participe s\'accorde : allées.'
      },
      {
        id: 'L52-4', type: 'flashcard', title: 'Verbes avec ÊTRE', characterId: 'thomas',
        characterMessage: "Ces expressions colorent la langue française. Apprends-les par cœur !",
        cards: [
          { front: 'aller → ?', back: 'allé(e) — je suis allé(e)' },
          { front: 'partir → ?', back: 'parti(e) — je suis parti(e)' },
          { front: 'arriver → ?', back: 'arrivé(e) — je suis arrivé(e)' },
          { front: 'tomber → ?', back: 'tombé(e) — je suis tombé(e)' },
          { front: 'naître → ?', back: 'né(e) — je suis né(e)' },
          { front: 'mourir → ?', back: 'mort(e) — il/elle est mort(e)' },
        ]
      },
      {
        id: 'L52-5', type: 'fill-blank', title: 'Complétez la phrase', characterId: 'fatou',
        characterMessage: "À Dakar, mes professeurs nous faisaient faire beaucoup de ces exercices.",
        sentence: 'Les étudiants ___ arrivés à Antibes hier soir.',
        options: ['ont', 'sont', 'avons', 'êtes'],
        correctAnswer: 'sont'
      },
      {
        id: 'L52-6', type: 'drag-drop', title: 'Remettez dans l\'ordre', characterId: 'yuki',
        characterMessage: "La structure française est plus souple qu'on ne le pense.",
        instruction: 'Formez une phrase au passé composé avec être :',
        items: ['est', 'Marie', 'au marché', 'allée'],
        correctOrder: ['Marie', 'est', 'allée', 'au marché']
      },
      {
        id: 'L52-7', type: 'qcm', title: 'Avoir ou être ?', characterId: 'lucas',
        characterMessage: "Au Brésil, on n'a pas cette règle. J'ai mis du temps à comprendre !",
        question: '« Elle ___ descendue du bus. » Quel auxiliaire ?',
        options: ['a', 'est', 'va', 'fait'],
        correctIndex: 1,
        explanation: '« Descendre » fait partie des verbes DR MRS VANDERTRAMP : on utilise ÊTRE.'
      },
      {
        id: 'L52-8', type: 'final-quiz', title: 'Quiz final — PC avec être', characterId: 'marie',
        characterMessage: "Montrez-moi tout ce que vous avez appris. Je crois en vous !",
        questions: [
          { question: '« Je ___ parti(e) tôt ce matin. »', options: ['ai', 'suis', 'as', 'est'], correctIndex: 1 },
          { question: '« Elle ___ née en 1995. »', options: ['a', 'est', 'va', 'fait'], correctIndex: 1 },
          { question: '« Ils ___ restés à la maison. »', options: ['ont', 'sont', 'avons', 'êtes'], correctIndex: 1 },
          { question: 'Accord : « Elles sont ___ » (rentrer)', options: ['rentré', 'rentrés', 'rentrée', 'rentrées'], correctIndex: 3 },
          { question: '« Nous ___ montés au fort Carré. »', options: ['avons', 'sommes', 'ont', 'sont'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 53: Mon week-end à Nice
  {
    courseId: 'lesson-53',
    steps: [
      {
        id: 'L53-1', type: 'lesson', title: 'Mon week-end à Nice', characterId: 'marie',
        characterMessage: "Aujourd'hui, on approfondit vos connaissances. C'est parti !",
        content: `Apprenons à **raconter un week-end** au passé composé ! ✍️\n\n📝 **Structure d'un récit :**\n1. **Quand ?** → Samedi dernier, le week-end passé, hier…\n2. **Où ?** → À Nice, sur la Promenade des Anglais…\n3. **Quoi ?** → J'ai visité, je suis allé(e), j'ai mangé…\n4. **Avec qui ?** → Avec mes amis, avec ma famille…\n5. **Comment c'était ?** → C'était super / génial / magnifique !\n\n🔗 **Connecteurs temporels :**\n- D'abord → First\n- Ensuite / Puis → Then\n- Après → After\n- Enfin / Finalement → Finally`,
        tip: '💡 Pour raconter, utilisez les connecteurs : « D\'abord, j\'ai visité… Ensuite, j\'ai mangé… Enfin, je suis rentré(e). »'
      },
      {
        id: 'L53-2', type: 'listening', title: 'Écoute — Récit de week-end', characterId: 'lucas',
        characterMessage: "Concentre-toi sur les mots-clés, pas besoin de tout comprendre.",
        text: 'Le week-end dernier, je suis allé à Nice. D\'abord, j\'ai visité le Vieux-Nice. Ensuite, j\'ai mangé une socca sur le marché. Après, je suis monté à la colline du Château. Enfin, j\'ai pris le train pour rentrer à Antibes. C\'était magnifique !',
        question: 'Qu\'a-t-il mangé au marché ?',
        options: ['Une pizza', 'Un croissant', 'Une socca', 'Une salade'],
        correctIndex: 2
      },
      {
        id: 'L53-3', type: 'qcm', title: 'Connecteurs temporels', characterId: 'elena',
        characterMessage: "J'ai compris cette règle en comparant avec l'espagnol.",
        question: 'Quel connecteur signifie "finally" ?',
        options: ['D\'abord', 'Ensuite', 'Après', 'Enfin'],
        correctIndex: 3,
        explanation: '« Enfin » ou « Finalement » signifie "finally" — c\'est le dernier événement du récit.'
      },
      {
        id: 'L53-4', type: 'flashcard', title: 'Connecteurs et expressions', characterId: 'thomas',
        characterMessage: "En tant que guide, j'utilise ces mots tous les jours avec les touristes.",
        cards: [
          { front: 'D\'abord', back: 'First' },
          { front: 'Ensuite / Puis', back: 'Then / Next' },
          { front: 'Après', back: 'After / Afterwards' },
          { front: 'Enfin / Finalement', back: 'Finally' },
          { front: 'Le week-end dernier', back: 'Last weekend' },
          { front: 'C\'était magnifique !', back: 'It was amazing!' },
        ]
      },
      {
        id: 'L53-5', type: 'fill-blank', title: 'Complétez le récit', characterId: 'fatou',
        characterMessage: "Pense à la conjugaison et à l'accord — c'est souvent la clé.",
        sentence: '___, j\'ai visité le musée. Ensuite, j\'ai déjeuné au restaurant.',
        options: ['Enfin', 'D\'abord', 'Après', 'Aussi'],
        correctAnswer: 'D\'abord'
      },
      {
        id: 'L53-6', type: 'drag-drop', title: 'Ordonnez le récit', characterId: 'yuki',
        characterMessage: "Commence par trouver le sujet, puis le verbe. Le reste suivra !",
        instruction: 'Remettez ce récit dans l\'ordre logique :',
        items: ['Enfin, je suis rentré.', 'D\'abord, j\'ai pris le bus.', 'Après, j\'ai visité le château.', 'Ensuite, j\'ai mangé au marché.'],
        correctOrder: ['D\'abord, j\'ai pris le bus.', 'Ensuite, j\'ai mangé au marché.', 'Après, j\'ai visité le château.', 'Enfin, je suis rentré.']
      },
      {
        id: 'L53-7', type: 'qcm', title: 'Compréhension', characterId: 'omar',
        characterMessage: "Cette question me rappelle mes premiers mois en France.",
        question: '« La socca » est une spécialité de quelle ville ?',
        options: ['Paris', 'Lyon', 'Nice', 'Marseille'],
        correctIndex: 2,
        explanation: 'La socca est une galette de pois chiches, spécialité emblématique de Nice !'
      },
      {
        id: 'L53-8', type: 'final-quiz', title: 'Quiz final — Raconter au passé', characterId: 'marie',
        characterMessage: "Quiz final ! Prenez votre temps, relisez bien chaque question.",
        questions: [
          { question: '« ___, j\'ai pris mon petit déjeuner. »', options: ['Enfin', 'D\'abord', 'Finalement', 'Aussi'], correctIndex: 1 },
          { question: '« Samedi, nous ___ visité Nice. »', options: ['sommes', 'avons', 'avez', 'sont'], correctIndex: 1 },
          { question: '« ___, je suis rentré à la maison. »', options: ['D\'abord', 'Ensuite', 'Enfin', 'Puis'], correctIndex: 2 },
          { question: '« C\'___ une belle journée. »', options: ['a été', 'est', 'était', 'avait'], correctIndex: 2 },
          { question: '« Elle ___ allée au Vieux-Nice. »', options: ['a', 'est', 'va', 'fait'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 54: Le Festival de Cannes
  {
    courseId: 'lesson-54',
    steps: [
      {
        id: 'L54-1', type: 'lesson', title: 'Le Festival de Cannes', characterId: 'marie',
        characterMessage: "Vous êtes prêts pour un défi un peu plus grand ? Allons-y !",
        content: `🎬 **Le Festival de Cannes** est le festival de cinéma le plus célèbre au monde !\n\n📍 **Informations clés :**\n- Lieu : Cannes, Côte d'Azur (à 11 km d'Antibes !)\n- Quand : Chaque année en mai\n- Prix : La **Palme d'Or** (le prix le plus prestigieux)\n\n🎥 **Vocabulaire du cinéma :**\n- Un film / un long-métrage → a movie\n- Un réalisateur / une réalisatrice → a director\n- Un acteur / une actrice → an actor/actress\n- Le tapis rouge → the red carpet\n- La bande-annonce → the trailer\n- Les sous-titres → subtitles\n- Une salle de cinéma → a movie theater`,
        tip: '💡 Le Festival de Cannes existe depuis 1946 et attire des stars du monde entier chaque mois de mai !'
      },
      {
        id: 'L54-2', type: 'listening', title: 'Écoute — Le Festival', characterId: 'omar',
        characterMessage: "Écoute le rythme de la phrase, pas seulement les mots.",
        text: 'Le Festival de Cannes a lieu chaque année au mois de mai. Les réalisateurs du monde entier présentent leurs films. Le prix le plus important est la Palme d\'Or. L\'année dernière, j\'ai vu des acteurs célèbres sur le tapis rouge !',
        question: 'Quel est le prix le plus important ?',
        options: ['L\'Oscar', 'Le César', 'La Palme d\'Or', 'Le Lion d\'Or'],
        correctIndex: 2
      },
      {
        id: 'L54-3', type: 'qcm', title: 'Vocabulaire du cinéma', characterId: 'elena',
        characterMessage: "Ne traduis pas mot à mot — pense directement en français !",
        question: 'Comment dit-on "director" en français ?',
        options: ['Un acteur', 'Un producteur', 'Un réalisateur', 'Un scénariste'],
        correctIndex: 2,
        explanation: 'Un réalisateur (ou une réalisatrice) est la personne qui dirige le film.'
      },
      {
        id: 'L54-4', type: 'flashcard', title: 'Vocabulaire du cinéma', characterId: 'thomas',
        characterMessage: "Le vocabulaire français reflète l'art de vivre à la française.",
        cards: [
          { front: 'Un film', back: 'A movie / A film' },
          { front: 'Un réalisateur', back: 'A director' },
          { front: 'Un acteur / une actrice', back: 'An actor / An actress' },
          { front: 'Le tapis rouge', back: 'The red carpet' },
          { front: 'La Palme d\'Or', back: 'The Golden Palm (top prize)' },
          { front: 'La bande-annonce', back: 'The trailer' },
        ]
      },
      {
        id: 'L54-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        characterMessage: "Le français a des règles précises. Cet exercice t'aide à les maîtriser.",
        sentence: 'Le Festival de Cannes a ___ en mai dernier.',
        options: ['lieu', 'fait', 'été', 'eu'],
        correctAnswer: 'eu'
      },
      {
        id: 'L54-6', type: 'drag-drop', title: 'Remettez dans l\'ordre', characterId: 'yuki',
        characterMessage: "Cet exercice entraîne ta pensée à fonctionner en français.",
        instruction: 'Formez une phrase correcte :',
        items: ['un film', 'Nous', 'français', 'avons', 'regardé'],
        correctOrder: ['Nous', 'avons', 'regardé', 'un film', 'français']
      },
      {
        id: 'L54-7', type: 'qcm', title: 'Culture cinéma', characterId: 'lucas',
        characterMessage: "C'est une question classique d'examen. Prends ton temps.",
        question: 'Où se trouve Cannes ?',
        options: ['En Bretagne', 'En Normandie', 'Sur la Côte d\'Azur', 'En Alsace'],
        correctIndex: 2,
        explanation: 'Cannes est sur la Côte d\'Azur, à seulement 11 km d\'Antibes !'
      },
      {
        id: 'L54-8', type: 'final-quiz', title: 'Quiz final — Le Festival de Cannes', characterId: 'marie',
        characterMessage: "Vous avez bien travaillé, ce quiz va le prouver !",
        questions: [
          { question: 'Le Festival a lieu en…', options: ['Janvier', 'Mai', 'Août', 'Décembre'], correctIndex: 1 },
          { question: 'Le prix principal s\'appelle…', options: ['Le César', 'L\'Oscar', 'La Palme d\'Or', 'Le Molière'], correctIndex: 2 },
          { question: '« Un réalisateur » signifie…', options: ['An actor', 'A producer', 'A director', 'A writer'], correctIndex: 2 },
          { question: 'Cannes est à combien de km d\'Antibes ?', options: ['5 km', '11 km', '50 km', '100 km'], correctIndex: 1 },
          { question: '« La bande-annonce » signifie…', options: ['The poster', 'The trailer', 'The script', 'The review'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 55: Poser des questions au passé
  {
    courseId: 'lesson-55',
    steps: [
      {
        id: 'L55-1', type: 'lesson', title: 'Poser des questions au passé', characterId: 'marie',
        characterMessage: "Cette leçon vous sera très utile dans la vie quotidienne.",
        content: `Pour parler au passé, il faut aussi savoir **poser des questions** ! ❓\n\n📐 **3 façons de poser une question au passé :**\n\n1️⃣ **Intonation** (informel) :\n- Tu as mangé ? ↗️\n- Vous êtes allés au marché ? ↗️\n\n2️⃣ **Est-ce que** (standard) :\n- Est-ce que tu as visité Nice ?\n- Est-ce qu'elle est arrivée ?\n\n3️⃣ **Inversion** (formel) :\n- Avez-vous voyagé en France ?\n- Êtes-vous allé(e) à Cannes ?\n\n🔑 **Mots interrogatifs :**\n- **Où** es-tu allé(e) ? → Where?\n- **Quand** es-tu parti(e) ? → When?\n- **Qu'est-ce que** tu as fait ? → What?\n- **Comment** as-tu voyagé ? → How?`,
        tip: '💡 « Est-ce que » est la manière la plus courante de poser une question en français parlé.'
      },
      {
        id: 'L55-2', type: 'listening', title: 'Écoute — Interview', characterId: 'elena',
        characterMessage: "Les sons du français sont parfois trompeurs pour nous, Espagnols !",
        text: 'Où êtes-vous allé le week-end dernier ? Je suis allé à Monaco. Qu\'est-ce que vous avez fait là-bas ? J\'ai visité le Palais princier et j\'ai mangé dans un bon restaurant. C\'était comment ? C\'était fantastique !',
        question: 'Où est-il allé ?',
        options: ['À Nice', 'À Cannes', 'À Monaco', 'À Marseille'],
        correctIndex: 2
      },
      {
        id: 'L55-3', type: 'qcm', title: 'Forme interrogative', characterId: 'lucas',
        characterMessage: "J'ai posé cette question à Marie hier en classe. Maintenant je sais !",
        question: 'Quelle question est correcte ?',
        options: ['As mangé tu ?', 'Est-ce que tu as mangé ?', 'Tu mangé as ?', 'Mangé tu as ?'],
        correctIndex: 1,
        explanation: 'La forme correcte avec « Est-ce que » : Est-ce que + sujet + auxiliaire + participe passé.'
      },
      {
        id: 'L55-4', type: 'flashcard', title: 'Questions au passé', characterId: 'thomas',
        characterMessage: "Chaque nouveau mot te rapproche de la culture française.",
        cards: [
          { front: 'Où es-tu allé(e) ?', back: 'Where did you go?' },
          { front: 'Qu\'est-ce que tu as fait ?', back: 'What did you do?' },
          { front: 'Quand es-tu parti(e) ?', back: 'When did you leave?' },
          { front: 'Comment as-tu voyagé ?', back: 'How did you travel?' },
          { front: 'Avec qui as-tu mangé ?', back: 'Who did you eat with?' },
          { front: 'Pourquoi es-tu resté(e) ?', back: 'Why did you stay?' },
        ]
      },
      {
        id: 'L55-5', type: 'fill-blank', title: 'Quel mot interrogatif ?', characterId: 'fatou',
        characterMessage: "Lis la phrase à voix haute avec chaque option — tu entendras la bonne !",
        sentence: '___ est-ce que tu as visité à Nice ?',
        options: ['Où', 'Quand', 'Qu\'est-ce que', 'Comment'],
        correctAnswer: 'Qu\'est-ce que'
      },
      {
        id: 'L55-6', type: 'drag-drop', title: 'Formez la question', characterId: 'yuki',
        characterMessage: "En japonais, le verbe est à la fin. En français, il est au milieu !",
        instruction: 'Remettez dans l\'ordre pour former une question :',
        items: ['tu', 'Où', 'allé', 'es', '?'],
        correctOrder: ['Où', 'es', 'tu', 'allé', '?']
      },
      {
        id: 'L55-7', type: 'qcm', title: 'Compréhension', characterId: 'omar',
        characterMessage: "Cette question me rappelle mes premiers mois en France.",
        question: '« Avez-vous voyagé ? » est quel registre ?',
        options: ['Informel', 'Standard', 'Formel', 'Familier'],
        correctIndex: 2,
        explanation: 'L\'inversion sujet-verbe (Avez-vous…) est la forme formelle de la question.'
      },
      {
        id: 'L55-8', type: 'final-quiz', title: 'Quiz final — Questions au passé', characterId: 'marie',
        characterMessage: "C'est le moment de briller ! Bonne chance !",
        questions: [
          { question: '« ___ as-tu mangé ? » → Pour demander le lieu.', options: ['Quand', 'Où', 'Comment', 'Pourquoi'], correctIndex: 1 },
          { question: 'Forme standard : « ___ tu as visité Nice ? »', options: ['Que', 'Est-ce que', 'As', 'Vas'], correctIndex: 1 },
          { question: '« ___ êtes-vous parti ? » → Pour demander le moment.', options: ['Où', 'Comment', 'Quand', 'Pourquoi'], correctIndex: 2 },
          { question: '« Comment ___ voyagé ? » (tu)', options: ['es-tu', 'as-tu', 'a-t-il', 'avez-vous'], correctIndex: 1 },
          { question: 'L\'inversion est…', options: ['Informelle', 'Familière', 'Formelle', 'Incorrecte'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 56: Les vacances
  {
    courseId: 'lesson-56',
    steps: [
      {
        id: 'L56-1', type: 'lesson', title: 'Les vacances', characterId: 'marie',
        characterMessage: "Vous progressez bien ! Cette leçon va enrichir votre français.",
        content: `🏖️ Parlons des **vacances** en français !\n\n📝 **Vocabulaire des vacances :**\n- Les vacances d'été → summer vacation\n- Un voyage → a trip\n- Une valise → a suitcase\n- Un billet d'avion → a plane ticket\n- Un hôtel / un camping → a hotel / a campsite\n- La plage / la montagne → the beach / the mountains\n- Bronzer → to sunbathe\n- Se baigner → to swim (in the sea)\n\n✉️ **Écrire une carte postale :**\n- Cher / Chère + prénom,\n- Je suis à… / Il fait beau…\n- J'ai visité… / J'ai mangé…\n- Bisous / Amicalement / À bientôt !`,
        tip: '💡 En France, les grandes vacances durent 2 mois (juillet-août). On dit « partir en vacances » et non « aller en vacances ».'
      },
      {
        id: 'L56-2', type: 'listening', title: 'Écoute — Carte postale', characterId: 'lucas',
        characterMessage: "Concentre-toi sur les mots-clés, pas besoin de tout comprendre.",
        text: 'Chère Anna, je suis à Antibes ! Il fait très beau. Hier, j\'ai visité le Cap d\'Antibes et j\'ai nagé dans la mer. La Côte d\'Azur est magnifique ! Bisous, Lucas.',
        question: 'D\'où écrit Lucas ?',
        options: ['De Paris', 'De Nice', 'D\'Antibes', 'De Cannes'],
        correctIndex: 2
      },
      {
        id: 'L56-3', type: 'qcm', title: 'Vocabulaire', characterId: 'elena',
        characterMessage: "Cette structure est différente en espagnol. Fais attention !",
        question: 'Comment dit-on "suitcase" en français ?',
        options: ['Un sac', 'Une valise', 'Un bagage', 'Un coffre'],
        correctIndex: 1,
        explanation: 'Une valise = a suitcase. On dit « faire sa valise » pour "to pack".'
      },
      {
        id: 'L56-4', type: 'flashcard', title: 'Vocabulaire des vacances', characterId: 'thomas',
        characterMessage: "Le français est riche de mots qui n'existent pas dans d'autres langues.",
        cards: [
          { front: 'Les vacances d\'été', back: 'Summer vacation' },
          { front: 'Faire sa valise', back: 'To pack (one\'s suitcase)' },
          { front: 'Bronzer', back: 'To sunbathe' },
          { front: 'Se baigner', back: 'To swim (in the sea/pool)' },
          { front: 'Un billet d\'avion', back: 'A plane ticket' },
          { front: 'Partir en vacances', back: 'To go on vacation' },
        ]
      },
      {
        id: 'L56-5', type: 'fill-blank', title: 'Complétez la carte postale', characterId: 'fatou',
        characterMessage: "La grammaire française, c'est comme une recette : il faut les bons ingrédients !",
        sentence: '___ Thomas, je suis en vacances à Nice. Bisous !',
        options: ['Cher', 'Chère', 'Mon', 'Bonjour'],
        correctAnswer: 'Cher'
      },
      {
        id: 'L56-6', type: 'drag-drop', title: 'Structure de la carte postale', characterId: 'yuki',
        characterMessage: "Les phrases sont plus longues maintenant. Lis d'abord tous les mots !",
        instruction: 'Remettez cette carte postale dans l\'ordre :',
        items: ['Bisous, Yuki.', 'Chère Marie,', 'J\'ai visité le vieux port.', 'Je suis à Marseille !'],
        correctOrder: ['Chère Marie,', 'Je suis à Marseille !', 'J\'ai visité le vieux port.', 'Bisous, Yuki.']
      },
      {
        id: 'L56-7', type: 'qcm', title: 'Expression', characterId: 'omar',
        characterMessage: "Cette question me rappelle mes premiers mois en France.",
        question: 'Comment dit-on "to go on vacation" ?',
        options: ['Aller en vacances', 'Partir en vacances', 'Faire des vacances', 'Prendre en vacances'],
        correctIndex: 1,
        explanation: 'L\'expression correcte est « partir en vacances ».'
      },
      {
        id: 'L56-8', type: 'final-quiz', title: 'Quiz final — Les vacances', characterId: 'marie',
        characterMessage: "Ce quiz est un peu plus long, mais vous êtes prêts !",
        questions: [
          { question: '« Faire sa ___ » signifie "to pack".', options: ['valise', 'maison', 'chambre', 'voiture'], correctIndex: 0 },
          { question: 'On commence une carte postale par…', options: ['Au revoir', 'Cher/Chère', 'Merci', 'Salut'], correctIndex: 1 },
          { question: '« ___ » signifie "to sunbathe".', options: ['Nager', 'Bronzer', 'Marcher', 'Dormir'], correctIndex: 1 },
          { question: 'Les grandes vacances en France durent…', options: ['1 mois', '2 mois', '3 mois', '2 semaines'], correctIndex: 1 },
          { question: '« Je suis ___ vacances à Antibes. »', options: ['à', 'de', 'en', 'pour'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 57: C'était comment ?
  {
    courseId: 'lesson-57',
    steps: [
      {
        id: 'L57-1', type: 'lesson', title: 'C\'était comment ? — L\'imparfait', characterId: 'marie',
        characterMessage: "Bravo pour votre travail ! Continuons avec un nouveau thème.",
        content: `L'**imparfait** sert à décrire le passé : situations, habitudes, descriptions. 🕰️\n\n📐 **Formation :**\nRadical du « nous » au présent + terminaisons :\n- je → -ais\n- tu → -ais\n- il/elle → -ait\n- nous → -ions\n- vous → -iez\n- ils/elles → -aient\n\n🔵 **Exemples :**\n- parler → nous parl**ons** → je parl**ais**\n- finir → nous finiss**ons** → je finiss**ais**\n- faire → nous fais**ons** → je fais**ais**\n\n⚠️ **Exception : ÊTRE**\n- j'étais, tu étais, il était, nous étions, vous étiez, ils étaient\n\n🎯 **Utilisation :**\n- Description : Il **faisait** beau, la mer **était** calme\n- Habitude : Quand j'**étais** petit, je **jouais** au foot`,
        tip: '💡 Seul le verbe « être » est irrégulier à l\'imparfait. Tous les autres suivent la même règle !'
      },
      {
        id: 'L57-2', type: 'listening', title: 'Écoute — Souvenirs d\'Antibes', characterId: 'omar',
        characterMessage: "Quand je suis arrivé en France, je comprenais rien. Maintenant, tout va bien !",
        text: 'Quand j\'étais enfant, j\'habitais à Antibes. Il faisait toujours beau. Je jouais sur la plage tous les jours. C\'était merveilleux !',
        question: 'Que faisait-il quand il était enfant ?',
        options: ['Il travaillait', 'Il jouait sur la plage', 'Il étudiait', 'Il cuisinait'],
        correctIndex: 1
      },
      {
        id: 'L57-3', type: 'qcm', title: 'Conjugaison', characterId: 'elena',
        characterMessage: "C'est plus facile quand on parle déjà une langue latine !",
        question: 'Complétez : « Quand j\' ___ petit, j\'aimais le chocolat. »',
        options: ['ai été', 'suis', 'étais', 'avais'],
        correctIndex: 2,
        explanation: 'Pour décrire une situation passée habituelle, on utilise l\'imparfait : j\'étais.'
      },
      {
        id: 'L57-4', type: 'flashcard', title: 'L\'imparfait — Conjugaison', characterId: 'thomas',
        characterMessage: "Ces expressions colorent la langue française. Apprends-les par cœur !",
        cards: [
          { front: 'être → j\' ...', back: 'j\'étais' },
          { front: 'avoir → j\' ...', back: 'j\'avais' },
          { front: 'faire → il ...', back: 'il faisait' },
          { front: 'habiter → nous ...', back: 'nous habitions' },
          { front: 'jouer → ils ...', back: 'ils jouaient' },
          { front: 'aller → vous ...', back: 'vous alliez' },
        ]
      },
      {
        id: 'L57-5', type: 'fill-blank', title: 'Complétez à l\'imparfait', characterId: 'fatou',
        characterMessage: "À Dakar, mes professeurs nous faisaient faire beaucoup de ces exercices.",
        sentence: 'Quand nous ___ enfants, nous jouions à la plage.',
        options: ['sommes', 'avons été', 'étions', 'serons'],
        correctAnswer: 'étions'
      },
      {
        id: 'L57-6', type: 'drag-drop', title: 'Formez une phrase', characterId: 'yuki',
        characterMessage: "La structure française est plus souple qu'on ne le pense.",
        instruction: 'Construisez une phrase à l\'imparfait :',
        items: ['Il', 'beau', 'faisait', 'à Antibes'],
        correctOrder: ['Il', 'faisait', 'beau', 'à Antibes']
      },
      {
        id: 'L57-7', type: 'qcm', title: 'Quand utiliser l\'imparfait ?', characterId: 'lucas',
        characterMessage: "Souviens-toi de ce qu'on a vu dans la leçon, ça va t'aider.",
        question: 'L\'imparfait sert à exprimer…',
        options: ['Une action ponctuelle terminée', 'Une description ou habitude passée', 'Le futur', 'Un ordre'],
        correctIndex: 1,
        explanation: 'L\'imparfait décrit des situations, des habitudes et des descriptions dans le passé.'
      },
      {
        id: 'L57-8', type: 'final-quiz', title: 'Quiz final — L\'imparfait', characterId: 'marie',
        characterMessage: "Montrez-moi tout ce que vous avez appris. Je crois en vous !",
        questions: [
          { question: '« Elle ___ très gentille. » (être)', options: ['a été', 'est', 'était', 'sera'], correctIndex: 2 },
          { question: '« Nous ___ au cinéma tous les samedis. » (aller)', options: ['allons', 'sommes allés', 'allions', 'irons'], correctIndex: 2 },
          { question: '« Il ___ chaud en été. » (faire)', options: ['fait', 'a fait', 'faisait', 'fera'], correctIndex: 2 },
          { question: 'L\'imparfait de « avoir » : tu …', options: ['as', 'avais', 'auras', 'avais eu'], correctIndex: 1 },
          { question: '« Je ___ du piano. » (jouer, habitude)', options: ['ai joué', 'joue', 'jouais', 'jouerai'], correctIndex: 2 },
        ]
      }
    ]
  },

  // Lesson 58: Passé composé vs Imparfait — Intro
  {
    courseId: 'lesson-58',
    steps: [
      {
        id: 'L58-1', type: 'lesson', title: 'Passé composé vs Imparfait', characterId: 'marie',
        characterMessage: "Aujourd'hui, on approfondit vos connaissances. C'est parti !",
        content: `La grande question : **Passé composé ou Imparfait ?** 🤔\n\n🔵 **Passé composé** = Action **ponctuelle**, terminée :\n- Hier, j'**ai mangé** une pizza.\n- Elle **est arrivée** à 8 heures.\n\n🟡 **Imparfait** = **Description**, habitude, situation :\n- Il **faisait** beau.\n- Quand j'**étais** petit, je **jouais** dehors.\n\n🔗 **Ensemble dans une phrase :**\nImparfait (contexte) + Passé composé (action)\n\n- Il **faisait** beau quand nous **sommes arrivés**.\n- Je **dormais** quand le téléphone **a sonné**.\n- Elle **regardait** la télé quand quelqu'un **a frappé** à la porte.\n\n📝 **Astuce :**\n- PC → « Qu'est-ce qui s'est passé ? » (What happened?)\n- Imparfait → « Comment c'était ? » (What was it like?)`,
        tip: '💡 Pensez à une photo (imparfait = le décor) vs un film (passé composé = l\'action qui se passe).'
      },
      {
        id: 'L58-2', type: 'listening', title: 'Écoute — Une journée spéciale', characterId: 'lucas',
        characterMessage: "Concentre-toi sur les mots-clés, pas besoin de tout comprendre.",
        text: 'Il faisait très beau ce matin-là. Les oiseaux chantaient. Soudain, mon téléphone a sonné. C\'était Marie. Elle m\'a dit : « Viens vite, il y a une fête sur la plage ! » Je me suis habillé et je suis parti.',
        question: 'Que s\'est-il passé soudainement ?',
        options: ['Il a plu', 'Le téléphone a sonné', 'Il est tombé', 'La fête a commencé'],
        correctIndex: 1
      },
      {
        id: 'L58-3', type: 'qcm', title: 'PC ou Imparfait ?', characterId: 'elena',
        characterMessage: "Attention, le français a des pièges que l'espagnol n'a pas.",
        question: '« Il ___ beau quand nous sommes arrivés. » Quel temps ?',
        options: ['a fait', 'fait', 'faisait', 'fera'],
        correctIndex: 2,
        explanation: 'La description du temps (contexte) est à l\'imparfait : il faisait beau.'
      },
      {
        id: 'L58-4', type: 'flashcard', title: 'PC vs Imparfait', characterId: 'thomas',
        characterMessage: "En tant que guide, j'utilise ces mots tous les jours avec les touristes.",
        cards: [
          { front: 'Action ponctuelle terminée', back: 'Passé composé (j\'ai mangé)' },
          { front: 'Description / décor', back: 'Imparfait (il faisait beau)' },
          { front: 'Habitude passée', back: 'Imparfait (je jouais tous les jours)' },
          { front: 'Événement soudain', back: 'Passé composé (le téléphone a sonné)' },
          { front: 'Contexte + action', back: 'Imparfait + Passé composé' },
        ]
      },
      {
        id: 'L58-5', type: 'fill-blank', title: 'Complétez', characterId: 'fatou',
        characterMessage: "Pense à la conjugaison et à l'accord — c'est souvent la clé.",
        sentence: 'Je ___ quand le téléphone a sonné.',
        options: ['ai dormi', 'dormais', 'dors', 'dormirai'],
        correctAnswer: 'dormais'
      },
      {
        id: 'L58-6', type: 'drag-drop', title: 'Construisez la phrase', characterId: 'yuki',
        characterMessage: "Commence par trouver le sujet, puis le verbe. Le reste suivra !",
        instruction: 'Formez une phrase avec PC et imparfait :',
        items: ['est arrivé', 'Il', 'pleuvait', 'quand', 'il'],
        correctOrder: ['Il', 'pleuvait', 'quand', 'il', 'est arrivé']
      },
      {
        id: 'L58-7', type: 'qcm', title: 'Quel temps choisir ?', characterId: 'omar',
        characterMessage: "Cette question me rappelle mes premiers mois en France.",
        question: '« Soudain, elle ___ ! » (tomber)',
        options: ['tombait', 'est tombée', 'tombe', 'tombera'],
        correctIndex: 1,
        explanation: '« Soudain » indique une action ponctuelle et soudaine → passé composé.'
      },
      {
        id: 'L58-8', type: 'final-quiz', title: 'Quiz final — PC vs Imparfait', characterId: 'marie',
        characterMessage: "Quiz final ! Prenez votre temps, relisez bien chaque question.",
        questions: [
          { question: '« Il ___ beau. » (description)', options: ['a fait', 'faisait', 'fait', 'fera'], correctIndex: 1 },
          { question: '« Soudain, il ___ . » (pleuvoir, action)', options: ['pleuvait', 'a plu', 'pleut', 'pleuvra'], correctIndex: 1 },
          { question: '« Quand j\' ___ petit… » (être)', options: ['ai été', 'suis', 'étais', 'serai'], correctIndex: 2 },
          { question: '« Elle ___ une lettre hier. » (écrire, action)', options: ['écrivait', 'a écrit', 'écrit', 'écrira'], correctIndex: 1 },
          { question: 'L\'imparfait est comme…', options: ['Un film', 'Une photo (décor)', 'Un ordre', 'Le futur'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 59: Révision A2.1
  {
    courseId: 'lesson-59',
    steps: [
      {
        id: 'L59-1', type: 'lesson', title: 'Révision — Raconter au passé', characterId: 'marie',
        characterMessage: "Vous êtes prêts pour un défi un peu plus grand ? Allons-y !",
        content: `📚 **Révision du Module A2.1** — Raconter au passé\n\nVoici ce que vous avez appris :\n\n✅ **Passé composé avec AVOIR :**\nJ'ai visité, tu as mangé, il a regardé\n\n✅ **Passé composé avec ÊTRE :**\nJe suis allé(e), elle est partie, ils sont arrivés\n\n✅ **Les connecteurs temporels :**\nD'abord, ensuite, après, enfin\n\n✅ **Le vocabulaire du cinéma et des vacances**\n\n✅ **Poser des questions au passé :**\nOù es-tu allé ? Qu'est-ce que tu as fait ?\n\n✅ **L'imparfait :**\nDescription et habitudes (il faisait beau, j'étais petit)\n\n✅ **PC vs Imparfait :**\nImparfait (contexte) + PC (action ponctuelle)`,
        tip: '💡 Prenez le temps de bien revoir chaque point. Vous êtes prêt(e) pour le quiz de révision !'
      },
      {
        id: 'L59-2', type: 'qcm', title: 'Révision — Auxiliaire', characterId: 'lucas',
        characterMessage: "Cette règle est importante — on l'utilise tous les jours !",
        question: '« Elle ___ arrivée en retard. »',
        options: ['a', 'est', 'va', 'fait'],
        correctIndex: 1,
        explanation: '« Arriver » se conjugue avec ÊTRE au passé composé.'
      },
      {
        id: 'L59-3', type: 'fill-blank', title: 'Révision — Imparfait', characterId: 'fatou',
        characterMessage: "Le français a des règles précises. Cet exercice t'aide à les maîtriser.",
        sentence: 'Quand nous ___ enfants, nous habitions à Antibes.',
        options: ['sommes', 'avons été', 'étions', 'serons'],
        correctAnswer: 'étions'
      },
      {
        id: 'L59-4', type: 'qcm', title: 'Révision — PC vs Imparfait', characterId: 'elena',
        characterMessage: "J'ai compris cette règle en comparant avec l'espagnol.",
        question: '« Il ___ quand je suis sorti. » (pleuvoir)',
        options: ['a plu', 'pleuvait', 'pleut', 'pleuvra'],
        correctIndex: 1,
        explanation: 'La description du temps (contexte) = imparfait. « Il pleuvait » décrit le décor.'
      },
      {
        id: 'L59-5', type: 'drag-drop', title: 'Révision — Ordre des mots', characterId: 'yuki',
        characterMessage: "Cet exercice entraîne ta pensée à fonctionner en français.",
        instruction: 'Formez une phrase au passé :',
        items: ['avons', 'un film', 'regardé', 'Nous', 'français'],
        correctOrder: ['Nous', 'avons', 'regardé', 'un film', 'français']
      },
      {
        id: 'L59-6', type: 'fill-blank', title: 'Révision — Question', characterId: 'omar',
        sentence: '___ es-tu allé pendant les vacances ?',
        options: ['Quand', 'Où', 'Comment', 'Pourquoi'],
        correctAnswer: 'Où'
      },
      {
        id: 'L59-7', type: 'qcm', title: 'Révision — Vocabulaire', characterId: 'lucas',
        characterMessage: "Au Brésil, on n'a pas cette règle. J'ai mis du temps à comprendre !",
        question: '« La Palme d\'Or » est un prix de…',
        options: ['Musique', 'Littérature', 'Cinéma', 'Cuisine'],
        correctIndex: 2,
        explanation: 'La Palme d\'Or est le prix le plus prestigieux du Festival de Cannes.'
      },
      {
        id: 'L59-8', type: 'final-quiz', title: 'Quiz de révision A2.1', characterId: 'marie',
        characterMessage: "Vous avez bien travaillé, ce quiz va le prouver !",
        questions: [
          { question: '« J\' ___ mangé une salade. »', options: ['suis', 'ai', 'est', 'as'], correctIndex: 1 },
          { question: '« Elles ___ parties tôt. »', options: ['ont', 'sont', 'avons', 'êtes'], correctIndex: 1 },
          { question: '« Il ___ beau hier. » (description)', options: ['a fait', 'faisait', 'fait', 'fera'], correctIndex: 1 },
          { question: '« ___, j\'ai visité le château. »', options: ['Enfin', 'D\'abord', 'Après', 'Ensuite'], correctIndex: 1 },
          { question: '« ___ as-tu fait hier ? »', options: ['Où', 'Qu\'est-ce que', 'Comment', 'Quand'], correctIndex: 1 },
        ]
      }
    ]
  },

  // Lesson 60: Examen A2.1
  {
    courseId: 'lesson-60',
    steps: [
      {
        id: 'L60-1', type: 'lesson', title: 'Examen Module A2.1 — Raconter au passé', characterId: 'marie',
        characterMessage: "Cette leçon vous sera très utile dans la vie quotidienne.",
        content: `🎓 **Examen du Module A2.1**\n\nVous allez passer l'examen final du module « Raconter au passé ».\n\n📋 **Ce qui sera évalué :**\n- Le passé composé (avoir et être)\n- L'accord du participe passé\n- Les connecteurs temporels\n- L'imparfait (introduction)\n- La distinction PC vs Imparfait\n- Le vocabulaire (cinéma, vacances)\n- Les questions au passé\n\n💪 Bonne chance ! Vous devez obtenir au moins 60% pour débloquer le badge « Conteur Débutant » 📖`,
        tip: '💡 Lisez bien chaque question. Prenez votre temps !'
      },
      {
        id: 'L60-2', type: 'qcm', title: 'Examen Q1', characterId: 'marie',
        question: '« Hier, je ___ au marché d\'Antibes. » (aller)',
        options: ['ai allé', 'suis allé', 'vais', 'allais'],
        correctIndex: 1,
        explanation: '« Aller » se conjugue avec ÊTRE : je suis allé(e).'
      },
      {
        id: 'L60-3', type: 'fill-blank', title: 'Examen Q2', characterId: 'marie',
        sentence: 'Sophie et Marie sont ___ au cinéma. (aller, fém.)',
        options: ['allé', 'allés', 'allée', 'allées'],
        correctAnswer: 'allées'
      },
      {
        id: 'L60-4', type: 'qcm', title: 'Examen Q3', characterId: 'marie',
        question: '« Il ___ froid quand nous sommes sortis. » PC ou Imparfait ?',
        options: ['a fait', 'faisait', 'fait', 'fera'],
        correctIndex: 1,
        explanation: 'La description du temps (contexte) utilise l\'imparfait : il faisait froid.'
      },
      {
        id: 'L60-5', type: 'drag-drop', title: 'Examen Q4', characterId: 'marie',
        instruction: 'Remettez le récit dans l\'ordre chronologique :',
        items: ['Enfin, je suis rentré chez moi.', 'D\'abord, j\'ai pris le bus.', 'Ensuite, j\'ai visité le musée.', 'Après, j\'ai déjeuné au restaurant.'],
        correctOrder: ['D\'abord, j\'ai pris le bus.', 'Ensuite, j\'ai visité le musée.', 'Après, j\'ai déjeuné au restaurant.', 'Enfin, je suis rentré chez moi.']
      },
      {
        id: 'L60-6', type: 'fill-blank', title: 'Examen Q5', characterId: 'marie',
        sentence: 'Quand j\' ___ petit, j\'habitais à Nice.',
        options: ['ai été', 'suis', 'étais', 'serai'],
        correctAnswer: 'étais'
      },
      {
        id: 'L60-7', type: 'qcm', title: 'Examen Q6', characterId: 'marie',
        question: '« ___ est-ce que tu as visité à Cannes ? »',
        options: ['Où', 'Quand', 'Qu\'est-ce que', 'Comment'],
        correctIndex: 2,
        explanation: '« Qu\'est-ce que » = What. On demande ce qui a été visité.'
      },
      {
        id: 'L60-8', type: 'final-quiz', title: 'Examen final A2.1', characterId: 'marie',
        characterMessage: "C'est le moment de briller ! Bonne chance !",
        questions: [
          { question: '« Nous ___ voyagé en Italie l\'été dernier. »', options: ['sommes', 'avons', 'avez', 'sont'], correctIndex: 1 },
          { question: '« Elle ___ née en 1998. »', options: ['a', 'est', 'va', 'fait'], correctIndex: 1 },
          { question: '« Je ___ quand le réveil a sonné. »', options: ['ai dormi', 'dormais', 'dors', 'dormirai'], correctIndex: 1 },
          { question: '« ___ as-tu voyagé ? — En train. »', options: ['Où', 'Quand', 'Comment', 'Pourquoi'], correctIndex: 2 },
          { question: '« Un réalisateur » est…', options: ['An actor', 'A writer', 'A director', 'A producer'], correctIndex: 2 },
        ]
      }
    ]
  },
];
