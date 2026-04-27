import { curriculum } from '@/data/curriculum';
import { getCourseContent } from '@/data/course-content';
import type { CECRLevel } from '@/data/demo-courses';

export const DAILY_LEVELS: CECRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export interface DailyLessonInfo {
  lessonId: string;            // "lesson-12"
  numericId: number;
  title: string;
  moduleId: string;
  moduleTitle: string;
  level: CECRLevel;
}

function getAllPlayableLessons(level: CECRLevel) {
  const lvl = curriculum.find((l) => l.level === level);
  if (!lvl) return [];
  const out: { id: number; title: string; moduleId: string; moduleTitle: string }[] = [];
  for (const mod of lvl.modules) {
    for (const lesson of mod.lessons) {
      if (getCourseContent(`lesson-${lesson.id}`)) {
        out.push({ id: lesson.id, title: lesson.title, moduleId: mod.id, moduleTitle: mod.title });
      }
    }
  }
  return out;
}

/** Stable date key in user's local timezone, format YYYY-MM-DD */
export function todayKey(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/** Hash a string into a small integer (deterministic across clients) */
function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

export function getDailyLesson(level: CECRLevel, date = new Date()): DailyLessonInfo | null {
  const lessons = getAllPlayableLessons(level);
  if (!lessons.length) return null;
  const seed = hash(`${level}:${todayKey(date)}`);
  const picked = lessons[seed % lessons.length];
  return {
    lessonId: `lesson-${picked.id}`,
    numericId: picked.id,
    title: picked.title,
    moduleId: picked.moduleId,
    moduleTitle: picked.moduleTitle,
    level,
  };
}

/** Returns the next streak value given the previous completion date (YYYY-MM-DD or null/undefined). */
export function computeStreakUpdate(
  lastDate: string | null | undefined,
  currentStreak: number,
  todayDate = new Date(),
): { streak: number; alreadyDone: boolean } {
  const today = todayKey(todayDate);
  if (lastDate === today) return { streak: currentStreak, alreadyDone: true };
  const yest = new Date(todayDate);
  yest.setDate(yest.getDate() - 1);
  const yesterday = todayKey(yest);
  if (lastDate === yesterday) return { streak: currentStreak + 1, alreadyDone: false };
  return { streak: 1, alreadyDone: false };
}

/** Reset streak to 0 if user missed yesterday (and didn't do today either). */
export function effectiveStreak(
  lastDate: string | null | undefined,
  storedStreak: number,
  todayDate = new Date(),
): number {
  if (!lastDate) return 0;
  const today = todayKey(todayDate);
  const yest = new Date(todayDate);
  yest.setDate(yest.getDate() - 1);
  const yesterday = todayKey(yest);
  if (lastDate === today || lastDate === yesterday) return storedStreak;
  return 0;
}
