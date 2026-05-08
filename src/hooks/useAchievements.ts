import { useEffect, useMemo, useRef } from 'react';
import { useUserProgress } from './useUserProgress';
import { useLeague } from './useLeague';
import { useDailyChallenge } from './useDailyChallenge';
import { ACHIEVEMENTS, type UserGameState, type Achievement } from '@/data/achievements';

const LS_SEEN_KEY = 'cia-achievements-seen';

function readSeen(): Set<string> {
  try {
    const raw = localStorage.getItem(LS_SEEN_KEY);
    if (!raw) return new Set();
    const arr = JSON.parse(raw);
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}

function writeSeen(set: Set<string>) {
  try { localStorage.setItem(LS_SEEN_KEY, JSON.stringify(Array.from(set))); } catch {}
}

export function useAchievements() {
  const { totalXP, cecrLevel, placementTestTakenAt } = useUserProgress();
  const { myLeague } = useLeague();
  const { streak } = useDailyChallenge();
  const seenRef = useRef<Set<string>>(readSeen());

  const state: UserGameState = useMemo(() => ({
    totalXP,
    cecrLevel: cecrLevel as UserGameState['cecrLevel'],
    dailyStreak: streak,
    league: (myLeague ?? null) as UserGameState['league'],
    placementTestTaken: placementTestTakenAt != null,
  }), [totalXP, cecrLevel, streak, myLeague, placementTestTakenAt]);

  const unlocked = useMemo(
    () => ACHIEVEMENTS.filter((a) => a.isUnlocked(state)),
    [state],
  );

  useEffect(() => {
    const newly: Achievement[] = [];
    unlocked.forEach((a) => {
      if (!seenRef.current.has(a.id)) {
        newly.push(a);
        seenRef.current.add(a.id);
      }
    });
    if (newly.length > 0) {
      writeSeen(seenRef.current);
      newly.forEach((a, i) => {
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('achievement-unlocked', { detail: { achievement: a } }));
        }, i * 4500);
      });
    }
  }, [unlocked]);

  return {
    achievements: ACHIEVEMENTS,
    unlocked,
    locked: ACHIEVEMENTS.filter((a) => !a.isUnlocked(state)),
    progress: ACHIEVEMENTS.length > 0 ? unlocked.length / ACHIEVEMENTS.length : 0,
  };
}