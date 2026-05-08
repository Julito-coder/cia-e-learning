import { useEffect, useRef, useState } from 'react';
import { XPBurst } from './XPBurst';
import { LevelUpCelebration } from './LevelUpCelebration';
import { StreakMilestone } from './StreakMilestone';
import { AchievementToast } from './AchievementToast';
import { useAchievements } from '@/hooks/useAchievements';
import type { Achievement } from '@/data/achievements';

export function GamificationOverlay() {
  useAchievements();

  const [bursts, setBursts] = useState<Array<{ id: string; amount: number; x: number; y: number }>>([]);
  const [levelUp, setLevelUp] = useState<{ level: string } | null>(null);
  const [streakMilestone, setStreakMilestone] = useState<{ streak: number } | null>(null);
  const [achievementQueue, setAchievementQueue] = useState<Achievement[]>([]);
  const currentAchievement = achievementQueue[0] ?? null;

  const getXPOrigin = (): { x: number; y: number } => {
    const el = document.querySelector('[data-xp-origin]');
    if (el) {
      const r = el.getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    }
    return { x: window.innerWidth - 80, y: 50 };
  };

  const prevXPRef = useRef<number | null>(null);

  useEffect(() => {
    const onXPUpdate = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (!detail || typeof detail.xp !== 'number') return;
      const newXP = detail.xp;
      if (prevXPRef.current != null && newXP > prevXPRef.current) {
        const amount = newXP - prevXPRef.current;
        if (amount > 0) {
          const origin = getXPOrigin();
          setBursts((q) => [...q, { id: `${Date.now()}-${Math.random()}`, amount, x: origin.x, y: origin.y }]);
        }
      }
      prevXPRef.current = newXP;
    };
    const onLevelUp = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.level) setLevelUp({ level: detail.level });
    };
    const onStreakMilestone = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.streak && [7, 14, 30, 100].includes(detail.streak)) {
        setStreakMilestone({ streak: detail.streak });
      }
    };
    const onAchievement = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.achievement) setAchievementQueue((q) => [...q, detail.achievement]);
    };

    window.addEventListener('xp-update', onXPUpdate);
    window.addEventListener('level-up', onLevelUp);
    window.addEventListener('streak-milestone', onStreakMilestone);
    window.addEventListener('achievement-unlocked', onAchievement);
    return () => {
      window.removeEventListener('xp-update', onXPUpdate);
      window.removeEventListener('level-up', onLevelUp);
      window.removeEventListener('streak-milestone', onStreakMilestone);
      window.removeEventListener('achievement-unlocked', onAchievement);
    };
  }, []);

  return (
    <>
      {bursts.map((b) => (
        <XPBurst
          key={b.id}
          x={b.x}
          y={b.y}
          amount={b.amount}
          onComplete={() => setBursts((q) => q.filter((x) => x.id !== b.id))}
        />
      ))}

      <LevelUpCelebration
        level={levelUp?.level ?? ''}
        open={levelUp != null}
        onClose={() => setLevelUp(null)}
      />

      <StreakMilestone
        streak={streakMilestone?.streak ?? 0}
        open={streakMilestone != null}
        onClose={() => setStreakMilestone(null)}
      />

      <AchievementToast
        achievement={currentAchievement}
        onDismiss={() => setAchievementQueue((q) => q.slice(1))}
      />
    </>
  );
}