// Canonical content registry — single source of truth for resolving
// course IDs across Catalogue, Parcours (Curriculum), and CoursePlayer.
//
// Why this file exists
// --------------------
// Before this registry, surfaces emitted incompatible identifiers :
//   - Catalogue cards used `module.id` (e.g. `A1.1`) as the link id.
//   - Parcours drawer same (`/cours/${moduleId}`).
//   - CourseDetail only resolved `lesson-N` (curriculum) or demo course ids.
// Result : clicking any catalogue/parcours module landed on "Cours introuvable".
//
// This registry exposes one canonical key — `lesson-N` (the curriculum
// lesson id) — and helpers to navigate between modules and lessons. Surfaces
// now ALWAYS link to a playable lesson directly.
import { curriculum } from './curriculum';
import { getCourseContent } from './course-content';
import type { CECRLevel } from './demo-courses';

export interface RegistryLesson {
  /** Canonical key, e.g. `lesson-12`. Stable across surfaces. */
  lessonId: string;
  /** Numeric lesson id from curriculum. */
  numericId: number;
  title: string;
  description: string;
  competence: string;
  level: CECRLevel;
  moduleId: string;
  moduleTitle: string;
  moduleNumber: number;
  /** 1-indexed position of the lesson inside its module (1..10). */
  order: number;
  /** True when `course-content` exposes interactive steps for this lesson. */
  hasContent: boolean;
}

export interface RegistryModule {
  moduleId: string;
  moduleNumber: number;
  moduleTitle: string;
  moduleTheme: string;
  level: CECRLevel;
  badge: string;
  badgeEmoji: string;
  lessons: RegistryLesson[];
  /** Lessons within the module that actually have playable content. */
  playableLessons: RegistryLesson[];
}

function buildRegistry(): {
  lessons: RegistryLesson[];
  modules: RegistryModule[];
  lessonsByKey: Map<string, RegistryLesson>;
  modulesById: Map<string, RegistryModule>;
} {
  const lessons: RegistryLesson[] = [];
  const modules: RegistryModule[] = [];
  const lessonsByKey = new Map<string, RegistryLesson>();
  const modulesById = new Map<string, RegistryModule>();

  for (const level of curriculum) {
    for (const mod of level.modules) {
      const modLessons: RegistryLesson[] = mod.lessons.map((l, idx) => {
        const lessonId = `lesson-${l.id}`;
        const entry: RegistryLesson = {
          lessonId,
          numericId: l.id,
          title: l.title,
          description: l.description,
          competence: l.competence,
          level: level.level,
          moduleId: mod.id,
          moduleTitle: mod.title,
          moduleNumber: mod.number,
          order: idx + 1,
          hasContent: !!getCourseContent(lessonId),
        };
        return entry;
      });

      const registryModule: RegistryModule = {
        moduleId: mod.id,
        moduleNumber: mod.number,
        moduleTitle: mod.title,
        moduleTheme: mod.theme,
        level: level.level,
        badge: mod.badge,
        badgeEmoji: mod.badgeEmoji,
        lessons: modLessons,
        playableLessons: modLessons.filter((l) => l.hasContent),
      };

      lessons.push(...modLessons);
      modules.push(registryModule);
      modulesById.set(mod.id, registryModule);
      for (const l of modLessons) lessonsByKey.set(l.lessonId, l);
    }
  }

  return { lessons, modules, lessonsByKey, modulesById };
}

const registry = buildRegistry();

export const allRegistryLessons: ReadonlyArray<RegistryLesson> = registry.lessons;
export const allRegistryModules: ReadonlyArray<RegistryModule> = registry.modules;

/** Resolve a lesson by its canonical `lesson-N` key. */
export function getRegistryLesson(lessonId: string): RegistryLesson | undefined {
  return registry.lessonsByKey.get(lessonId);
}

/** Resolve a module by its curriculum id (e.g. `A1.1`). */
export function getRegistryModule(moduleId: string): RegistryModule | undefined {
  return registry.modulesById.get(moduleId);
}

/**
 * For a given module, return the first lesson the user should actually
 * be sent to when starting / resuming the module :
 *   1. First lesson with content that has not been completed yet (caller
 *      passes `completedLessonIds` — empty set is fine and yields lesson 1).
 *   2. Falls back to the first playable lesson regardless of completion.
 *   3. Falls back to the very first lesson of the module so the user lands
 *      on a "Bientôt disponible" CTA instead of "Cours introuvable".
 */
export function getEntryLessonForModule(
  moduleId: string,
  completedLessonIds: ReadonlySet<string> = new Set(),
): RegistryLesson | undefined {
  const mod = registry.modulesById.get(moduleId);
  if (!mod) return undefined;
  const firstNotDone = mod.playableLessons.find((l) => !completedLessonIds.has(l.lessonId));
  if (firstNotDone) return firstNotDone;
  if (mod.playableLessons.length) return mod.playableLessons[0];
  return mod.lessons[0];
}

/** Convenience: does this `lesson-N` key have playable content right now ? */
export function hasLessonContent(lessonId: string): boolean {
  return !!getCourseContent(lessonId);
}

/** Aggregate count by level — used by Catalogue / Programme metrics. */
export function countPlayableLessonsByLevel(): Record<CECRLevel, number> {
  const out = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 } as Record<CECRLevel, number>;
  for (const l of registry.lessons) {
    if (l.hasContent) out[l.level] = (out[l.level] ?? 0) + 1;
  }
  return out;
}
