import { useEffect, useState } from 'react';
import { readLastLessonOpened, readCourseProgressMap, type LastLessonOpened } from '@/lib/courseProgress';
import { getLessonById } from '@/data/curriculum';

export interface LastLessonView {
  courseId: string;
  moduleId?: string;
  title: string;
  level?: string;
  openedAt?: string;
  completed: boolean;
  score?: number;
  source: 'explicit' | 'progress-map';
}

/**
 * Returns the most-recent lesson the learner interacted with.
 * Falls back to scanning `course-progress` map (lessons completed/scored)
 * if `cia-last-lesson-opened` was never set (e.g. legacy user).
 */
export function useLastLessonOpened(): LastLessonView | null {
  const [value, setValue] = useState<LastLessonView | null>(null);

  useEffect(() => {
    const recompute = () => setValue(computeLastLessonView());
    recompute();

    const onStorage = (e: StorageEvent) => {
      if (e.key && (e.key.includes('cia-last-lesson') || e.key.includes('course-progress'))) {
        recompute();
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  return value;
}

function computeLastLessonView(): LastLessonView | null {
  const explicit = readLastLessonOpened();
  const progressMap = readCourseProgressMap();

  if (explicit) {
    return enrichLastLesson(explicit, progressMap);
  }

  // Fallback: pick the most recent entry from `course-progress` map.
  const entries = Object.entries(progressMap)
    .filter(([, v]) => Boolean(v?.date))
    .sort((a, b) => (b[1].date ?? '').localeCompare(a[1].date ?? ''));

  if (entries.length === 0) return null;

  const [courseId, entry] = entries[0];
  const meta = lookupMeta(courseId);
  return {
    courseId,
    moduleId: meta?.moduleId,
    title: meta?.title ?? courseId,
    level: meta?.level,
    openedAt: entry.date,
    completed: Boolean(entry.completed),
    score: entry.score,
    source: 'progress-map',
  };
}

function enrichLastLesson(
  explicit: LastLessonOpened,
  progressMap: ReturnType<typeof readCourseProgressMap>,
): LastLessonView {
  const meta = lookupMeta(explicit.courseId);
  const progressEntry = progressMap[explicit.courseId];
  return {
    courseId: explicit.courseId,
    moduleId: explicit.moduleId ?? meta?.moduleId,
    title: explicit.title ?? meta?.title ?? explicit.courseId,
    level: explicit.level ?? meta?.level,
    openedAt: explicit.openedAt,
    completed: Boolean(progressEntry?.completed),
    score: progressEntry?.score,
    source: 'explicit',
  };
}

function lookupMeta(courseId: string): { moduleId: string; title: string; level: string } | null {
  if (!courseId.startsWith('lesson-')) return null;
  const lessonId = parseInt(courseId.replace('lesson-', ''), 10);
  if (Number.isNaN(lessonId)) return null;
  const found = getLessonById(lessonId);
  if (!found) return null;
  return { moduleId: found.module.id, title: found.lesson.title, level: found.level.level };
}
