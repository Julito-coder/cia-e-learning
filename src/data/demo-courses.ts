export type CECRLevel = 'A0' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export type CourseTheme = 
  | 'Grammaire' 
  | 'Vocabulaire' 
  | 'Culture & Civilisation' 
  | 'Expression orale' 
  | 'Compréhension écrite' 
  | 'Compréhension orale';

export interface Course {
  id: string;
  code: string;
  title: string;
  description: string;
  level: CECRLevel;
  theme: CourseTheme;
  duration: number;
  isNew: boolean;
  imageUrl: string;
  progress?: number;
  score?: number;
  contentTypes: ('text' | 'audio' | 'video' | 'qcm' | 'drag-drop' | 'fill-blank' | 'flashcard' | 'voice')[];
}

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  level: CECRLevel;
  relatedCourseIds: string[];
}

export const CECR_LEVELS: { value: CECRLevel; label: string; color: string }[] = [
  { value: 'A1', label: 'A1 — Découverte', color: 'bg-emerald-100 text-emerald-800' },
  { value: 'A2', label: 'A2 — Survie', color: 'bg-green-100 text-green-800' },
  { value: 'B1', label: 'B1 — Seuil', color: 'bg-sky-100 text-sky-800' },
  { value: 'B2', label: 'B2 — Avancé', color: 'bg-blue-100 text-blue-800' },
  { value: 'C1', label: 'C1 — Autonome', color: 'bg-violet-100 text-violet-800' },
  { value: 'C2', label: 'C2 — Maîtrise', color: 'bg-purple-100 text-purple-800' },
];

export const COURSE_THEMES: CourseTheme[] = [
  'Grammaire',
  'Vocabulaire',
  'Culture & Civilisation',
  'Expression orale',
  'Compréhension écrite',
  'Compréhension orale',
];

export const demoCourses: Course[] = [
  {
    id: '1',
    code: 'A1-GRA-001',
    title: 'Les articles définis et indéfinis',
    description: 'Apprenez à utiliser le, la, les, un, une, des dans les contextes du quotidien.',
    level: 'A1',
    theme: 'Grammaire',
    duration: 20,
    isNew: true,
    imageUrl: 'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=800&h=500&fit=crop&q=80',
    progress: 0,
    contentTypes: ['text', 'qcm', 'fill-blank'],
  },
  {
    id: '2',
    code: 'A1-VOC-001',
    title: 'Se présenter en français',
    description: 'Les mots et expressions essentiels pour se présenter et faire connaissance.',
    level: 'A1',
    theme: 'Vocabulaire',
    duration: 15,
    isNew: true,
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop&q=80',
    progress: 45,
    score: 72,
    contentTypes: ['text', 'audio', 'flashcard', 'voice'],
  },
  {
    id: '3',
    code: 'A1-CUL-001',
    title: 'Découvrir Antibes et la Côte d\'Azur',
    description: 'Explorez la ville d\'Antibes, sa culture et ses traditions méditerranéennes.',
    level: 'A1',
    theme: 'Culture & Civilisation',
    duration: 25,
    isNew: false,
    imageUrl: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&h=500&fit=crop&q=80',
    progress: 100,
    score: 88,
    contentTypes: ['text', 'video', 'qcm'],
  },
  {
    id: '4',
    code: 'A2-GRA-001',
    title: 'Le passé composé',
    description: 'Maîtrisez la formation et l\'utilisation du passé composé avec être et avoir.',
    level: 'A2',
    theme: 'Grammaire',
    duration: 30,
    isNew: false,
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=500&fit=crop&q=80',
    progress: 20,
    score: 60,
    contentTypes: ['text', 'qcm', 'fill-blank', 'drag-drop'],
  },
  {
    id: '5',
    code: 'A2-COM-001',
    title: 'Comprendre une conversation simple',
    description: 'Écoutez et comprenez des dialogues de la vie quotidienne.',
    level: 'A2',
    theme: 'Compréhension orale',
    duration: 20,
    isNew: true,
    imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=500&fit=crop&q=80',
    progress: 0,
    contentTypes: ['audio', 'qcm', 'fill-blank'],
  },
  {
    id: '6',
    code: 'B1-VOC-012',
    title: 'Le monde du travail',
    description: 'Vocabulaire professionnel : entretien, CV, vie en entreprise.',
    level: 'B1',
    theme: 'Vocabulaire',
    duration: 35,
    isNew: false,
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop&q=80',
    progress: 75,
    score: 82,
    contentTypes: ['text', 'audio', 'flashcard', 'qcm'],
  },
  {
    id: '7',
    code: 'B1-EXP-001',
    title: 'Donner son opinion',
    description: 'Apprenez à exprimer, nuancer et défendre votre point de vue.',
    level: 'B1',
    theme: 'Expression orale',
    duration: 25,
    isNew: false,
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop&q=80',
    progress: 50,
    contentTypes: ['text', 'video', 'voice'],
  },
  {
    id: '8',
    code: 'B2-CRE-001',
    title: 'Lire la presse française',
    description: 'Techniques de lecture et compréhension d\'articles de presse.',
    level: 'B2',
    theme: 'Compréhension écrite',
    duration: 40,
    isNew: true,
    imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=800&h=500&fit=crop&q=80',
    progress: 0,
    contentTypes: ['text', 'qcm', 'fill-blank'],
  },
  {
    id: '9',
    code: 'B2-GRA-005',
    title: 'Le subjonctif présent',
    description: 'Comprendre et utiliser le subjonctif dans ses différents contextes.',
    level: 'B2',
    theme: 'Grammaire',
    duration: 45,
    isNew: false,
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop&q=80',
    progress: 30,
    score: 55,
    contentTypes: ['text', 'qcm', 'drag-drop', 'fill-blank'],
  },
  {
    id: '10',
    code: 'C1-CUL-003',
    title: 'La littérature française contemporaine',
    description: 'Découvrez les grands auteurs et mouvements littéraires actuels.',
    level: 'C1',
    theme: 'Culture & Civilisation',
    duration: 50,
    isNew: false,
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=500&fit=crop&q=80',
    progress: 10,
    contentTypes: ['text', 'video', 'qcm'],
  },
];

export const demoGlossary: GlossaryTerm[] = [
  { id: '1', term: 'Article défini', definition: 'Déterminant qui précède un nom pour indiquer qu\'il est identifié (le, la, les).', level: 'A1', relatedCourseIds: ['1'] },
  { id: '2', term: 'Passé composé', definition: 'Temps verbal utilisé pour exprimer une action terminée dans le passé.', level: 'A2', relatedCourseIds: ['4'] },
  { id: '3', term: 'Subjonctif', definition: 'Mode verbal exprimant le souhait, le doute, la nécessité ou l\'émotion.', level: 'B2', relatedCourseIds: ['9'] },
  { id: '4', term: 'CECRL', definition: 'Cadre Européen Commun de Référence pour les Langues — échelle de A1 à C2.', level: 'A1', relatedCourseIds: [] },
  { id: '5', term: 'FLE', definition: 'Français Langue Étrangère — enseignement du français aux non-francophones.', level: 'A1', relatedCourseIds: [] },
];
