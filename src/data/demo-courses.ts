import { curriculum, type Module } from './curriculum';
import { readCourseProgressMap } from '@/lib/courseProgress';

export type CECRLevel = 'A0' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export type CourseTheme = 
  | 'Grammaire' 
  | 'Vocabulaire' 
  | 'Culture & Civilisation' 
  | 'Expression orale' 
  | 'Compréhension écrite' 
  | 'Compréhension orale'
  | string;

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
  moduleId?: string;
  lessonCount?: number;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  level: CECRLevel;
  relatedCourseIds: string[];
}

export const CECR_LEVELS: { value: CECRLevel; label: string; color: string }[] = [
  { value: 'A0', label: 'A0 — Initiation', color: 'bg-lime-100 text-lime-800' },
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

// Thematic images per module
const moduleImages: Record<string, string> = {
  'A1.1': 'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=800&h=500&fit=crop&q=80',
  'A1.2': 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop&q=80',
  'A1.3': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop&q=80',
  'A1.4': 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop&q=80',
  'A1.5': 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=500&fit=crop&q=80',
  'A2.1': 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&h=500&fit=crop&q=80',
  'A2.2': 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop&q=80',
  'A2.3': 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop&q=80',
  'A2.4': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop&q=80',
  'A2.5': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=500&fit=crop&q=80',
  'B1.1': 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop&q=80',
  'B1.2': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop&q=80',
  'B1.3': 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop&q=80',
  'B1.4': 'https://images.unsplash.com/photo-1523050854058-8df90110c6f1?w=800&h=500&fit=crop&q=80',
  'B1.5': 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&h=500&fit=crop&q=80',
  'B2.1': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop&q=80',
  'B2.2': 'https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=800&h=500&fit=crop&q=80',
  'B2.3': 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&h=500&fit=crop&q=80',
  'B2.4': 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=500&fit=crop&q=80',
  'B2.5': 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=500&fit=crop&q=80',
  'C1.1': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop&q=80',
  'C1.2': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop&q=80',
  'C1.3': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop&q=80',
  'C1.4': 'https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=800&h=500&fit=crop&q=80',
  'C1.5': 'https://images.unsplash.com/photo-1546410531-bb4caa6b3624?w=800&h=500&fit=crop&q=80',
  'C2.1': 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=500&fit=crop&q=80',
  'C2.2': 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=500&fit=crop&q=80',
  'C2.3': 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&h=500&fit=crop&q=80',
  'C2.4': 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=500&fit=crop&q=80',
  'C2.5': 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=500&fit=crop&q=80',
};

function getModuleProgress(mod: Module): { progress: number; score?: number } {
  const savedProgress = readCourseProgressMap();
  const completedLessons = mod.lessons.filter(l => savedProgress[`lesson-${l.id}`]?.completed).length;
  const progress = Math.round((completedLessons / mod.lessons.length) * 100);
  const scores = mod.lessons
    .map(l => savedProgress[`lesson-${l.id}`]?.score)
    .filter((s): s is number => s !== undefined);
  const avgScore = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : undefined;
  return { progress, score: avgScore };
}

function mapTheme(theme: string): CourseTheme {
  const lower = theme.toLowerCase();
  if (lower.includes('gramm')) return 'Grammaire';
  if (lower.includes('vocab')) return 'Vocabulaire';
  if (lower.includes('cultur') || lower.includes('civil') || lower.includes('géograph') || lower.includes('tradition')) return 'Culture & Civilisation';
  if (lower.includes('oral') && lower.includes('express')) return 'Expression orale';
  if (lower.includes('écrit') && lower.includes('compréhen')) return 'Compréhension écrite';
  if (lower.includes('oral') && lower.includes('compréhen')) return 'Compréhension orale';
  return theme;
}

// Generate courses from curriculum modules
export const demoCourses: Course[] = curriculum.flatMap(level =>
  level.modules.map(mod => {
    const { progress, score } = getModuleProgress(mod);
    const totalDuration = mod.lessons.length * 10;
    return {
      id: `module-${mod.id}`,
      code: mod.id,
      title: mod.title,
      description: `${level.level} · ${mod.theme}. ${mod.lessons.length} leçons interactives.`,
      level: mod.level,
      theme: mapTheme(mod.theme),
      duration: totalDuration,
      isNew: mod.id === 'A1.1' || mod.id === 'A1.2',
      imageUrl: moduleImages[mod.id] || 'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=800&h=500&fit=crop&q=80',
      progress,
      score,
      contentTypes: ['text', 'qcm', 'fill-blank', 'flashcard', 'audio'] as any[],
      moduleId: mod.id,
      lessonCount: mod.lessons.length,
    };
  })
);

export const demoGlossary: GlossaryTerm[] = [
  { id: '1', term: 'Article défini', definition: 'Déterminant qui précède un nom pour indiquer qu\'il est identifié (le, la, les).', level: 'A1', relatedCourseIds: ['1'] },
  { id: '2', term: 'Passé composé', definition: 'Temps verbal utilisé pour exprimer une action terminée dans le passé.', level: 'A2', relatedCourseIds: ['4'] },
  { id: '3', term: 'Subjonctif', definition: 'Mode verbal exprimant le souhait, le doute, la nécessité ou l\'émotion.', level: 'B2', relatedCourseIds: ['9'] },
  { id: '4', term: 'CECRL', definition: 'Cadre Européen Commun de Référence pour les Langues — échelle de A1 à C2.', level: 'A1', relatedCourseIds: [] },
  { id: '5', term: 'FLE', definition: 'Français Langue Étrangère — enseignement du français aux non-francophones.', level: 'A1', relatedCourseIds: [] },
];
