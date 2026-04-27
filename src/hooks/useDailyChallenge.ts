import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useUserProgress } from '@/hooks/useUserProgress';
import {
  getDailyLesson,
  computeStreakUpdate,
  effectiveStreak,
  todayKey,
  type DailyLessonInfo,
} from '@/lib/dailyChallenge';
import type { CECRLevel } from '@/data/demo-courses';

const STREAK_BONUS_XP = 25;
const LS_STREAK = 'daily-streak';
const LS_LAST = 'daily-last-date';

export function useDailyChallenge(initialLevel?: CECRLevel) {
  const { user } = useAuth();
  const { cecrLevel, addXP } = useUserProgress();
  const [selectedLevel, setSelectedLevel] = useState<CECRLevel>(initialLevel || cecrLevel);
  const [streak, setStreak] = useState(0);
  const [lastDate, setLastDate] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Sync default level to user's CECR level once
  useEffect(() => {
    if (!initialLevel) setSelectedLevel(cecrLevel);
  }, [cecrLevel, initialLevel]);

  // Load streak data
  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('daily_streak, last_daily_completed_at')
          .eq('user_id', user.id)
          .maybeSingle();
        if (cancelled) return;
        const stored = data?.daily_streak ?? 0;
        const last = (data?.last_daily_completed_at as string) ?? null;
        const eff = effectiveStreak(last, stored);
        setStreak(eff);
        setLastDate(last);
        // Persist auto-reset
        if (eff !== stored) {
          await supabase.from('profiles').update({ daily_streak: eff }).eq('user_id', user.id);
        }
      } else {
        const stored = parseInt(localStorage.getItem(LS_STREAK) || '0', 10);
        const last = localStorage.getItem(LS_LAST);
        const eff = effectiveStreak(last, stored);
        setStreak(eff);
        setLastDate(last);
        if (eff !== stored) localStorage.setItem(LS_STREAK, String(eff));
      }
      setLoading(false);
    };
    load();
    return () => { cancelled = true; };
  }, [user]);

  const dailyLesson: DailyLessonInfo | null = getDailyLesson(selectedLevel);
  const isDoneToday = lastDate === todayKey();

  const markDoneToday = useCallback(async (): Promise<{ awarded: boolean; xp: number; newStreak: number }> => {
    const { streak: newStreak, alreadyDone } = computeStreakUpdate(lastDate, streak);
    if (alreadyDone) return { awarded: false, xp: 0, newStreak: streak };
    const today = todayKey();
    setStreak(newStreak);
    setLastDate(today);
    if (user) {
      const { error } = await supabase
        .from('profiles')
        .update({ daily_streak: newStreak, last_daily_completed_at: today })
        .eq('user_id', user.id);
      if (error) {
        console.error('[markDoneToday] update profile failed', error);
        return { awarded: false, xp: 0, newStreak: streak };
      }
    } else {
      localStorage.setItem(LS_STREAK, String(newStreak));
      localStorage.setItem(LS_LAST, today);
    }
    await addXP(STREAK_BONUS_XP);
    return { awarded: true, xp: STREAK_BONUS_XP, newStreak };
  }, [lastDate, streak, user, addXP]);

  return {
    selectedLevel,
    setSelectedLevel,
    dailyLesson,
    streak,
    isDoneToday,
    loading,
    markDoneToday,
  };
}
