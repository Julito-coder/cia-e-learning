import { useMemo } from 'react';
import { curriculum, type Module } from '@/data/curriculum';

const LEVEL_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

function getModuleCompletionPercent(mod: Module): number {
  try {
    const savedProgress = JSON.parse(localStorage.getItem('course-progress') || '{}');
    const completed = mod.lessons.filter(l => savedProgress[`lesson-${l.id}`]?.completed).length;
    return Math.round((completed / mod.lessons.length) * 100);
  } catch {
    return 0;
  }
}

function isModuleComplete(mod: Module): boolean {
  return getModuleCompletionPercent(mod) === 100;
}

/**
 * Module unlock rules:
 * 1. A1.1 is always unlocked
 * 2. Within same level: module X requires module X-1 to be 100% complete
 * 3. Cross-level: level N+1 module X requires level N module X to be 100% complete
 *    AND all previous modules within level N+1 to be unlocked (sequential within level)
 */
export function isModuleUnlocked(moduleId: string): boolean {
  const [levelStr, modNumStr] = moduleId.split('.');
  const modNum = parseInt(modNumStr, 10);
  const levelIdx = LEVEL_ORDER.indexOf(levelStr);

  // A1.1 is always unlocked
  if (levelIdx === 0 && modNum === 1) return true;

  // Find module data helper
  const findModule = (level: string, num: number): Module | undefined => {
    const levelData = curriculum.find(l => l.level === level);
    return levelData?.modules.find(m => m.number === num);
  };

  // Rule 2: Within same level, previous module must be complete
  if (modNum > 1) {
    const prevInLevel = findModule(levelStr, modNum - 1);
    if (!prevInLevel || !isModuleComplete(prevInLevel)) return false;
  }

  // Rule 3: Cross-level, same-numbered module in previous level must be complete
  if (levelIdx > 0) {
    const prevLevel = LEVEL_ORDER[levelIdx - 1];
    const prevLevelModule = findModule(prevLevel, modNum);
    if (!prevLevelModule || !isModuleComplete(prevLevelModule)) return false;
  }

  return true;
}

export function useModuleUnlock() {
  const unlockedMap = useMemo(() => {
    const map: Record<string, boolean> = {};
    for (const levelData of curriculum) {
      for (const mod of levelData.modules) {
        map[mod.id] = isModuleUnlocked(mod.id);
      }
    }
    return map;
  }, []);

  return {
    isUnlocked: (moduleId: string) => unlockedMap[moduleId] ?? false,
    getProgress: getModuleCompletionPercent,
  };
}
