import { allRegistryLessons } from '@/data/contentRegistry';
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

// Pulls playable lessons for a level from the canonical content registry,
// so the daily challenge uses the exact same content surface as Catalogue
// and Parcours — no divergence possible.
function getAllPlayableLessons(level: CECRLevel) {
  return allRegistryLessons
    .filter((l) => l.level === level && l.hasContent)
    .map((l) => ({
      id: l.numericId,
      title: l.title,
      moduleId: l.moduleId,
      moduleTitle: l.moduleTitle,
    }));
}

/**
 * Stable date key in Europe/Paris, format YYYY-MM-DD.
 *
 * The daily challenge MUST roll over at Paris midnight regardless of where
 * the user is, otherwise a Parisian leaving for NYC could "extend" their
 * streak by playing the same lesson twice within a single Paris day.
 * Using `Intl.DateTimeFormat` with `timeZone: 'Europe/Paris'` is the only
 * way to get the date a Parisian sees, irrespective of the runtime tz.
 */
const PARIS_DATE_FMT = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Europe/Paris',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

export function todayKey(date = new Date()): string {
  // `en-CA` formats as YYYY-MM-DD natively.
  return PARIS_DATE_FMT.format(date);
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

// Use raw 24h timestamp arithmetic for "yesterday" so the result is
// independent of the runtime tz and DST boundaries — the date conversion
// happens via todayKey() (Europe/Paris).
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

/** Returns the next streak value given the previous completion date (YYYY-MM-DD or null/undefined). */
export function computeStreakUpdate(
  lastDate: string | null | undefined,
  currentStreak: number,
  todayDate = new Date(),
): { streak: number; alreadyDone: boolean } {
  const today = todayKey(todayDate);
  if (lastDate === today) return { streak: currentStreak, alreadyDone: true };
  const yesterday = todayKey(new Date(todayDate.getTime() - ONE_DAY_MS));
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
  const yesterday = todayKey(new Date(todayDate.getTime() - ONE_DAY_MS));
  if (lastDate === today || lastDate === yesterday) return storedStreak;
  return 0;
}
