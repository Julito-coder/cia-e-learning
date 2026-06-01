import { useMemo } from 'react';
import { curriculum } from '@/data/curriculum';
import { readCourseProgressMap } from '@/lib/courseProgress';
import type { CECRLevel } from '@/data/demo-courses';

export interface RecommendedLesson {
  lessonId: number;
  moduleId: string;
  level: CECRLevel;
  title: string;
  description: string;
  competence: string;
  badgeEmoji: string;
}

/**
 * V1 recommendation: surface up to N lessons of the user's current level
 * that have NOT yet been completed (or never opened). Falls back to lessons
 * from the next level if the current level is fully done, then to A1 if no
 * level matches (e.g. brand-new user with no placement).
 *
 * TODO(sprint-4): replace this client-side iteration with a Supabase RPC
 * that joins `user_progress` and `course_sections`, with a real
 * recommendation algorithm (recency + difficulty match + theme variety).
 */
export function useRecommendedLessons(level: CECRLevel, limit = 3): RecommendedLesson[] {
  return useMemo(() => {
    const progressMap = readCourseProgressMap();

    const findInLevel = (lvl: CECRLevel): RecommendedLesson[] => {
      const levelData = curriculum.find((c) => c.level === lvl);
      if (!levelData) return [];
      const candidates: RecommendedLesson[] = [];
      for (const mod of levelData.modules) {
        for (const lesson of mod.lessons) {
          const courseId = `lesson-${lesson.id}`;
          const entry = progressMap[courseId];
          if (!entry?.completed) {
            candidates.push({
              lessonId: lesson.id,
              moduleId: mod.id,
              level: lvl,
              title: lesson.title,
              description: lesson.description,
              competence: lesson.competence,
              badgeEmoji: mod.badgeEmoji,
            });
            if (candidates.length >= limit) return candidates;
          }
        }
      }
      return candidates;
    };

    const primary = findInLevel(level);
    if (primary.length >= limit) return primary;

    // Fallback to next level if available
    const orderedLevels: CECRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const idx = orderedLevels.indexOf(level);
    if (idx >= 0 && idx + 1 < orderedLevels.length) {
      const extra = findInLevel(orderedLevels[idx + 1]);
      return [...primary, ...extra].slice(0, limit);
    }
    return primary;
  }, [level, limit]);
}
