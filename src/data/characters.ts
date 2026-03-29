import type { CECRLevel } from '@/data/demo-courses';

export interface CharacterEvolution {
  level: CECRLevel;
  bio: string;
  catchphrase: string;
  voiceSettings: {
    stability: number;
    similarity_boost: number;
    style: number;
    speed: number;
  };
}

export interface Character {
  id: string;
  name: string;
  role: string;
  nationality: string;
  age: number;
  gender: 'male' | 'female';
  avatarPath: string;
  voiceId: string; // ElevenLabs voice ID
  color: string; // Tailwind color class for UI
  evolution: CharacterEvolution[];
}

/**
 * 8 personnages récurrents de l'univers CIA Antibes.
 * Chaque personnage a une voix ElevenLabs distincte et évolue
 * linguistiquement et narrativement du niveau A0 au C2.
 */
export const CHARACTERS: Character[] = [
  {
    id: 'marie',
    name: 'Marie Leclerc',
    role: 'Professeure de français',
    nationality: 'Française',
    age: 35,
    gender: 'female',
    avatarPath: '/characters/marie.jpg',
    voiceId: 'FGY2WhTYpPnrIDTdsKH5', // Laura - warm French female
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    evolution: [
      {
        level: 'A0',
        bio: 'Marie est professeure au CIA Antibes. Elle parle lentement et clairement pour ses nouveaux élèves.',
        catchphrase: 'Très bien ! On continue ensemble.',
        voiceSettings: { stability: 0.8, similarity_boost: 0.75, style: 0.2, speed: 0.75 },
      },
      {
        level: 'A1',
        bio: 'Marie guide ses élèves dans les premiers pas. Elle utilise des phrases simples et répète souvent.',
        catchphrase: 'N\'ayez pas peur de faire des erreurs !',
        voiceSettings: { stability: 0.7, similarity_boost: 0.75, style: 0.3, speed: 0.8 },
      },
      {
        level: 'A2',
        bio: 'Marie organise des sorties culturelles à Antibes pour pratiquer le français en situation réelle.',
        catchphrase: 'Aujourd\'hui, on sort de la classe !',
        voiceSettings: { stability: 0.6, similarity_boost: 0.75, style: 0.4, speed: 0.85 },
      },
      {
        level: 'B1',
        bio: 'Marie commence à utiliser des expressions idiomatiques et encourage les débats en classe.',
        catchphrase: 'Dites-moi ce que vous en pensez, vraiment.',
        voiceSettings: { stability: 0.5, similarity_boost: 0.75, style: 0.5, speed: 0.9 },
      },
      {
        level: 'B2',
        bio: 'Marie prépare un livre sur l\'enseignement du FLE. Elle parle à vitesse normale avec du vocabulaire riche.',
        catchphrase: 'Vous êtes prêts pour les nuances !',
        voiceSettings: { stability: 0.5, similarity_boost: 0.75, style: 0.5, speed: 0.95 },
      },
      {
        level: 'C1',
        bio: 'Marie anime des conférences et discute de littérature. Son registre est soutenu.',
        catchphrase: 'Approfondissons cette idée ensemble.',
        voiceSettings: { stability: 0.4, similarity_boost: 0.8, style: 0.6, speed: 1.0 },
      },
      {
        level: 'C2',
        bio: 'Marie et ses élèves sont devenus collègues. Elle utilise humour, ironie et registre académique.',
        catchphrase: 'À ce stade, c\'est vous qui m\'apprenez des choses.',
        voiceSettings: { stability: 0.3, similarity_boost: 0.8, style: 0.7, speed: 1.0 },
      },
    ],
  },
  {
    id: 'lucas',
    name: 'Lucas Silva',
    role: 'Étudiant brésilien',
    nationality: 'Brésilienne',
    age: 22,
    gender: 'male',
    avatarPath: '/characters/lucas.jpg',
    voiceId: 'TX3LPaxmHKxFdv7VOQHJ', // Liam - young male
    color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    evolution: [
      {
        level: 'A0',
        bio: 'Lucas vient d\'arriver à Antibes depuis São Paulo. Il ne parle pas encore français.',
        catchphrase: 'Comment on dit... en français ?',
        voiceSettings: { stability: 0.4, similarity_boost: 0.7, style: 0.5, speed: 0.7 },
      },
      {
        level: 'A1',
        bio: 'Lucas apprend à se présenter et à commander au café. Il mélange parfois portugais et français.',
        catchphrase: 'Ah, c\'est comme en portugais !',
        voiceSettings: { stability: 0.4, similarity_boost: 0.7, style: 0.5, speed: 0.75 },
      },
      {
        level: 'A2',
        bio: 'Lucas a trouvé un job d\'été dans un restaurant d\'Antibes. Il pratique avec les clients.',
        catchphrase: 'Je comprends de plus en plus !',
        voiceSettings: { stability: 0.45, similarity_boost: 0.7, style: 0.5, speed: 0.85 },
      },
      {
        level: 'B1',
        bio: 'Lucas s\'est inscrit à l\'université de Nice. Il participe activement aux discussions.',
        catchphrase: 'Attendez, j\'ai une question !',
        voiceSettings: { stability: 0.5, similarity_boost: 0.7, style: 0.5, speed: 0.9 },
      },
      {
        level: 'B2',
        bio: 'Lucas organise des soirées d\'échange linguistique. Son français est fluide avec un charmant accent.',
        catchphrase: 'Le français, c\'est ma deuxième maison maintenant.',
        voiceSettings: { stability: 0.5, similarity_boost: 0.7, style: 0.6, speed: 0.95 },
      },
      {
        level: 'C1',
        bio: 'Lucas fait un master en relations internationales à Nice. Il rédige sa thèse en français.',
        catchphrase: 'Je pense même en français maintenant !',
        voiceSettings: { stability: 0.5, similarity_boost: 0.75, style: 0.6, speed: 1.0 },
      },
      {
        level: 'C2',
        bio: 'Lucas est devenu traducteur français-portugais et vit définitivement sur la Côte d\'Azur.',
        catchphrase: 'Le bilinguisme, c\'est voir le monde en stéréo.',
        voiceSettings: { stability: 0.5, similarity_boost: 0.75, style: 0.7, speed: 1.0 },
      },
    ],
  },
  {
    id: 'yuki',
    name: 'Yuki Tanaka',
    role: 'Étudiante japonaise',
    nationality: 'Japonaise',
    age: 20,
    gender: 'female',
    avatarPath: '/characters/yuki.jpg',
    voiceId: 'EXAVITQu4vr4xnSDxMaL', // Sarah - soft female
    color: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
    evolution: [
      {
        level: 'A0',
        bio: 'Yuki est arrivée de Tokyo pour un séjour linguistique. Elle est timide mais très studieuse.',
        catchphrase: 'Pardon, pouvez-vous répéter ?',
        voiceSettings: { stability: 0.7, similarity_boost: 0.75, style: 0.2, speed: 0.7 },
      },
      {
        level: 'A1',
        bio: 'Yuki tient un journal en français. Elle note chaque nouveau mot qu\'elle apprend.',
        catchphrase: 'J\'écris tout dans mon cahier !',
        voiceSettings: { stability: 0.65, similarity_boost: 0.75, style: 0.3, speed: 0.8 },
      },
      {
        level: 'A2',
        bio: 'Yuki a découvert la cuisine provençale et suit un cours de cuisine en français.',
        catchphrase: 'La ratatouille, c\'est comme un haiku de légumes !',
        voiceSettings: { stability: 0.6, similarity_boost: 0.75, style: 0.4, speed: 0.85 },
      },
      {
        level: 'B1',
        bio: 'Yuki crée un blog comparant la culture française et japonaise. Elle s\'exprime avec confiance.',
        catchphrase: 'Au Japon, on fait différemment, mais j\'adore la façon française.',
        voiceSettings: { stability: 0.55, similarity_boost: 0.75, style: 0.5, speed: 0.9 },
      },
      {
        level: 'B2',
        bio: 'Yuki fait un stage dans une galerie d\'art à Antibes. Elle discute d\'art contemporain en français.',
        catchphrase: 'L\'art n\'a pas de frontière, et la langue non plus.',
        voiceSettings: { stability: 0.5, similarity_boost: 0.75, style: 0.5, speed: 0.95 },
      },
      {
        level: 'C1',
        bio: 'Yuki prépare une exposition franco-japonaise. Son français est devenu élégant et nuancé.',
        catchphrase: 'Entre deux cultures, on trouve une richesse infinie.',
        voiceSettings: { stability: 0.45, similarity_boost: 0.8, style: 0.6, speed: 1.0 },
      },
      {
        level: 'C2',
        bio: 'Yuki est commissaire d\'exposition à Nice. Elle publie des critiques d\'art en français.',
        catchphrase: 'Le français m\'a donné les mots pour voir autrement.',
        voiceSettings: { stability: 0.4, similarity_boost: 0.8, style: 0.7, speed: 1.0 },
      },
    ],
  },
  {
    id: 'omar',
    name: 'Omar Benali',
    role: 'Chef cuisinier',
    nationality: 'Marocaine',
    age: 40,
    gender: 'male',
    avatarPath: '/characters/omar.jpg',
    voiceId: 'onwK4e9ZLuTAKqWW03F9', // Daniel - deep warm male
    color: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
    evolution: [
      {
        level: 'A0',
        bio: 'Omar vient d\'ouvrir un restaurant marocain à Antibes. Il parle déjà un peu français grâce au Maroc.',
        catchphrase: 'Goûtez, goûtez ! C\'est bon !',
        voiceSettings: { stability: 0.5, similarity_boost: 0.7, style: 0.5, speed: 0.8 },
      },
      {
        level: 'A1',
        bio: 'Omar apprend le vocabulaire de la cuisine française pour enrichir sa carte.',
        catchphrase: 'Au Maroc on dit couscous, ici on dit... couscous aussi !',
        voiceSettings: { stability: 0.5, similarity_boost: 0.7, style: 0.5, speed: 0.85 },
      },
      {
        level: 'A2',
        bio: 'Omar participe au marché provençal d\'Antibes et négocie avec les producteurs locaux.',
        catchphrase: 'Les meilleurs produits font les meilleurs plats.',
        voiceSettings: { stability: 0.5, similarity_boost: 0.7, style: 0.5, speed: 0.9 },
      },
      {
        level: 'B1',
        bio: 'Omar fusionne cuisine marocaine et provençale. Il est interviewé par le journal local.',
        catchphrase: 'La cuisine, c\'est un pont entre les cultures.',
        voiceSettings: { stability: 0.5, similarity_boost: 0.75, style: 0.5, speed: 0.9 },
      },
      {
        level: 'B2',
        bio: 'Omar anime des cours de cuisine en français et accueille des touristes internationaux.',
        catchphrase: 'En cuisine comme en français, il faut de la patience et de l\'amour.',
        voiceSettings: { stability: 0.5, similarity_boost: 0.75, style: 0.6, speed: 0.95 },
      },
      {
        level: 'C1',
        bio: 'Omar écrit un livre de recettes bilingue français-arabe. Son restaurant a une étoile.',
        catchphrase: 'Chaque recette raconte une histoire de deux pays.',
        voiceSettings: { stability: 0.45, similarity_boost: 0.8, style: 0.6, speed: 1.0 },
      },
      {
        level: 'C2',
        bio: 'Omar est jury dans un concours culinaire télévisé. Son éloquence impressionne.',
        catchphrase: 'La gastronomie est un art qui se conjugue au passé et au présent.',
        voiceSettings: { stability: 0.4, similarity_boost: 0.8, style: 0.7, speed: 1.0 },
      },
    ],
  },
  {
    id: 'elena',
    name: 'Elena Rossi',
    role: 'Étudiante italienne en architecture',
    nationality: 'Italienne',
    age: 24,
    gender: 'female',
    avatarPath: '/characters/elena.jpg',
    voiceId: 'Xb7hH8MSUJpSbSDYk0k2', // Alice - clear female
    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    evolution: [
      {
        level: 'A0',
        bio: 'Elena arrive de Rome pour étudier l\'architecture méditerranéenne. L\'italien l\'aide beaucoup.',
        catchphrase: 'C\'est presque comme l\'italien... presque !',
        voiceSettings: { stability: 0.5, similarity_boost: 0.7, style: 0.4, speed: 0.8 },
      },
      {
        level: 'A1',
        bio: 'Elena dessine les bâtiments d\'Antibes et apprend le vocabulaire de la ville.',
        catchphrase: 'Chaque rue a une histoire à raconter.',
        voiceSettings: { stability: 0.5, similarity_boost: 0.7, style: 0.4, speed: 0.85 },
      },
      {
        level: 'A2',
        bio: 'Elena fait un stage dans un cabinet d\'architecte à Nice. Elle apprend le français technique.',
        catchphrase: 'L\'architecture, c\'est de la poésie en pierre.',
        voiceSettings: { stability: 0.5, similarity_boost: 0.75, style: 0.5, speed: 0.9 },
      },
      {
        level: 'B1',
        bio: 'Elena présente son projet de rénovation du vieux Nice. Elle argumente en français.',
        catchphrase: 'Il faut préserver le patrimoine tout en innovant.',
        voiceSettings: { stability: 0.5, similarity_boost: 0.75, style: 0.5, speed: 0.9 },
      },
      {
        level: 'B2',
        bio: 'Elena collabore avec des architectes français sur un projet de villa éco-responsable.',
        catchphrase: 'Construire durable, c\'est construire l\'avenir.',
        voiceSettings: { stability: 0.5, similarity_boost: 0.75, style: 0.6, speed: 0.95 },
      },
      {
        level: 'C1',
        bio: 'Elena donne des conférences sur l\'architecture durable en Méditerranée.',
        catchphrase: 'L\'espace public définit notre façon de vivre ensemble.',
        voiceSettings: { stability: 0.45, similarity_boost: 0.8, style: 0.6, speed: 1.0 },
      },
      {
        level: 'C2',
        bio: 'Elena a ouvert son propre cabinet franco-italien sur la Côte d\'Azur.',
        catchphrase: 'Entre Rome et Antibes, mon cœur a deux adresses.',
        voiceSettings: { stability: 0.4, similarity_boost: 0.8, style: 0.7, speed: 1.0 },
      },
    ],
  },
  {
    id: 'thomas',
    name: 'Thomas Durand',
    role: 'Guide touristique local',
    nationality: 'Française',
    age: 28,
    gender: 'male',
    avatarPath: '/characters/thomas.jpg',
    voiceId: 'IKne3meq5aSn9XLyUdCD', // Charlie - friendly male
    color: 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200',
    evolution: [
      {
        level: 'A0',
        bio: 'Thomas est guide touristique à Antibes. Il adapte son français pour les débutants.',
        catchphrase: 'Bienvenue à Antibes ! Suivez-moi !',
        voiceSettings: { stability: 0.6, similarity_boost: 0.7, style: 0.4, speed: 0.75 },
      },
      {
        level: 'A1',
        bio: 'Thomas fait découvrir le vieil Antibes avec des phrases simples et des gestes.',
        catchphrase: 'Regardez ! Ici, c\'est le marché provençal.',
        voiceSettings: { stability: 0.55, similarity_boost: 0.7, style: 0.5, speed: 0.8 },
      },
      {
        level: 'A2',
        bio: 'Thomas emmène le groupe en excursion au Cap d\'Antibes et raconte des anecdotes.',
        catchphrase: 'Vous saviez que Picasso a peint ici ?',
        voiceSettings: { stability: 0.5, similarity_boost: 0.75, style: 0.5, speed: 0.85 },
      },
      {
        level: 'B1',
        bio: 'Thomas raconte l\'histoire d\'Antibes avec plus de détails et d\'expressions locales.',
        catchphrase: 'Ici, on ne dit pas "beaucoup", on dit "un paquet" !',
        voiceSettings: { stability: 0.5, similarity_boost: 0.75, style: 0.5, speed: 0.9 },
      },
      {
        level: 'B2',
        bio: 'Thomas crée des visites thématiques (art, gastronomie) et utilise un vocabulaire enrichi.',
        catchphrase: 'La Côte d\'Azur, c\'est bien plus que la plage.',
        voiceSettings: { stability: 0.45, similarity_boost: 0.75, style: 0.6, speed: 0.95 },
      },
      {
        level: 'C1',
        bio: 'Thomas écrit un guide historique d\'Antibes et utilise un registre littéraire par moments.',
        catchphrase: 'Chaque pierre de cette ville murmure son histoire.',
        voiceSettings: { stability: 0.4, similarity_boost: 0.8, style: 0.6, speed: 1.0 },
      },
      {
        level: 'C2',
        bio: 'Thomas est devenu historien local et conférencier. Son style mêle érudition et humour provençal.',
        catchphrase: 'Antibes est un palimpseste à ciel ouvert.',
        voiceSettings: { stability: 0.35, similarity_boost: 0.8, style: 0.7, speed: 1.0 },
      },
    ],
  },
  {
    id: 'fatou',
    name: 'Fatou Diallo',
    role: 'Médecin et mère de famille',
    nationality: 'Sénégalaise',
    age: 38,
    gender: 'female',
    avatarPath: '/characters/fatou.jpg',
    voiceId: 'XrExE9yKIg1WjnnlVkGX', // Matilda - mature female
    color: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
    evolution: [
      {
        level: 'A0',
        bio: 'Fatou est médecin sénégalaise installée à Antibes. Elle parle français depuis l\'enfance mais perfectionne son écrit.',
        catchphrase: 'En Afrique, le français a mille accents.',
        voiceSettings: { stability: 0.6, similarity_boost: 0.7, style: 0.4, speed: 0.85 },
      },
      {
        level: 'A1',
        bio: 'Fatou aide ses enfants avec leurs devoirs de français tout en apprenant elle-même.',
        catchphrase: 'On apprend ensemble, c\'est plus amusant.',
        voiceSettings: { stability: 0.55, similarity_boost: 0.7, style: 0.4, speed: 0.85 },
      },
      {
        level: 'A2',
        bio: 'Fatou s\'implique dans l\'association de parents d\'élèves et pratique le français administratif.',
        catchphrase: 'Comprendre les formulaires, c\'est un exploit !',
        voiceSettings: { stability: 0.55, similarity_boost: 0.75, style: 0.5, speed: 0.9 },
      },
      {
        level: 'B1',
        bio: 'Fatou prépare l\'équivalence de son diplôme médical. Elle étudie le français médical.',
        catchphrase: 'Soigner, c\'est aussi savoir écouter dans la bonne langue.',
        voiceSettings: { stability: 0.5, similarity_boost: 0.75, style: 0.5, speed: 0.9 },
      },
      {
        level: 'B2',
        bio: 'Fatou exerce enfin la médecine en France. Elle communique avec aisance avec ses patients.',
        catchphrase: 'La confiance du patient commence par les mots justes.',
        voiceSettings: { stability: 0.5, similarity_boost: 0.75, style: 0.6, speed: 0.95 },
      },
      {
        level: 'C1',
        bio: 'Fatou donne des formations en médecine interculturelle. Son discours est précis et empathique.',
        catchphrase: 'La médecine sans frontières commence par la langue.',
        voiceSettings: { stability: 0.45, similarity_boost: 0.8, style: 0.6, speed: 1.0 },
      },
      {
        level: 'C2',
        bio: 'Fatou publie des articles médicaux en français et milite pour la diversité dans la santé.',
        catchphrase: 'Maîtriser une langue, c\'est aussi une forme de soin.',
        voiceSettings: { stability: 0.4, similarity_boost: 0.8, style: 0.7, speed: 1.0 },
      },
    ],
  },
  {
    id: 'hans',
    name: 'Hans Weber',
    role: 'Retraité passionné de voile',
    nationality: 'Allemande',
    age: 62,
    gender: 'male',
    avatarPath: '/characters/hans.jpg',
    voiceId: 'nPczCjzI2devNBz1zQrb', // Brian - older male
    color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    evolution: [
      {
        level: 'A0',
        bio: 'Hans est un retraité allemand qui s\'installe à Antibes pour naviguer. Il débute en français.',
        catchphrase: 'Je suis trop vieux ? Non, jamais trop vieux pour apprendre !',
        voiceSettings: { stability: 0.6, similarity_boost: 0.7, style: 0.3, speed: 0.75 },
      },
      {
        level: 'A1',
        bio: 'Hans apprend le français au port d\'Antibes avec les autres plaisanciers.',
        catchphrase: 'La mer n\'a pas besoin de mots, mais le port, si !',
        voiceSettings: { stability: 0.6, similarity_boost: 0.7, style: 0.4, speed: 0.8 },
      },
      {
        level: 'A2',
        bio: 'Hans rejoint un club de voile et apprend le vocabulaire nautique français.',
        catchphrase: 'Tribord, bâbord... le français de la mer est magnifique.',
        voiceSettings: { stability: 0.55, similarity_boost: 0.75, style: 0.4, speed: 0.85 },
      },
      {
        level: 'B1',
        bio: 'Hans participe à la vie sociale d\'Antibes et raconte ses voyages en mer.',
        catchphrase: 'Chaque port a son histoire, chaque langue sa musique.',
        voiceSettings: { stability: 0.5, similarity_boost: 0.75, style: 0.5, speed: 0.9 },
      },
      {
        level: 'B2',
        bio: 'Hans écrit un journal de bord bilingue et organise des régates franco-allemandes.',
        catchphrase: 'Naviguer entre deux langues, c\'est comme louvoyer avec le vent.',
        voiceSettings: { stability: 0.5, similarity_boost: 0.75, style: 0.5, speed: 0.9 },
      },
      {
        level: 'C1',
        bio: 'Hans traduit des poèmes maritimes allemands en français et anime un cercle littéraire.',
        catchphrase: 'La poésie perd toujours quelque chose en traduction, mais gagne en mystère.',
        voiceSettings: { stability: 0.45, similarity_boost: 0.8, style: 0.6, speed: 0.95 },
      },
      {
        level: 'C2',
        bio: 'Hans publie ses mémoires en français. Son style est empreint de philosophie germanique et de poésie marine.',
        catchphrase: 'Deux langues, c\'est deux façons de regarder l\'horizon.',
        voiceSettings: { stability: 0.4, similarity_boost: 0.8, style: 0.7, speed: 1.0 },
      },
    ],
  },
];

/** Get a character by ID */
export function getCharacter(id: string): Character | undefined {
  return CHARACTERS.find((c) => c.id === id);
}

/** Get the evolution of a character for a given level (falls back to closest lower level) */
export function getCharacterEvolution(character: Character, level: CECRLevel): CharacterEvolution {
  const LEVEL_ORDER: CECRLevel[] = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const levelIdx = LEVEL_ORDER.indexOf(level);
  
  // Find exact match or closest lower level
  for (let i = levelIdx; i >= 0; i--) {
    const evo = character.evolution.find((e) => e.level === LEVEL_ORDER[i]);
    if (evo) return evo;
  }
  
  return character.evolution[0];
}
