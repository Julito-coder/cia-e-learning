import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import type { CECRLevel } from '@/data/demo-courses';

const LEVEL_ORDER: CECRLevel[] = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const XP_PER_LEVEL = 5000;

// Global event for cross-component XP sync
const XP_UPDATE_EVENT = 'xp-update';

function emitXPUpdate(xp: number, level: CECRLevel) {
  window.dispatchEvent(new CustomEvent(XP_UPDATE_EVENT, { detail: { xp, level } }));
}

export function getLevelFromXP(xp: number): CECRLevel {
  const idx = Math.min(Math.floor(xp / XP_PER_LEVEL), LEVEL_ORDER.length - 1);
  return LEVEL_ORDER[idx];
}

export function getXPForNextLevel(xp: number): { current: number; needed: number; progress: number } {
  const currentLevelXP = Math.floor(xp / XP_PER_LEVEL) * XP_PER_LEVEL;
  const current = xp - currentLevelXP;
  return { current, needed: XP_PER_LEVEL, progress: Math.round((current / XP_PER_LEVEL) * 100) };
}

export function isLevelAccessible(courseLevel: CECRLevel, userLevel: CECRLevel): boolean {
  const userIdx = LEVEL_ORDER.indexOf(userLevel);
  const courseIdx = LEVEL_ORDER.indexOf(courseLevel);
  return courseIdx <= userIdx + 1;
}

export function getXPForLevel(level: CECRLevel): number {
  const idx = LEVEL_ORDER.indexOf(level);
  return idx * XP_PER_LEVEL;
}

export function useUserProgress() {
  const { user } = useAuth();
  const [totalXP, setTotalXP] = useState(0);
  const [cecrLevel, setCecrLevel] = useState<CECRLevel>('A1');
  const [loading, setLoading] = useState(true);

  // Listen for XP updates from other hook instances (cross-component sync)
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (!detail) return;
      // Use functional updates to avoid stale closures and skip identical values
      setTotalXP((prev) => (prev === detail.xp ? prev : detail.xp));
      setCecrLevel((prev) => (prev === detail.level ? prev : detail.level));
    };
    window.addEventListener(XP_UPDATE_EVENT, handler);
    return () => window.removeEventListener(XP_UPDATE_EVENT, handler);
  }, []);

  useEffect(() => {
    if (!user) {
      const stored = localStorage.getItem('user-xp');
      const storedLevel = localStorage.getItem('user-cecr-level');
      if (storedLevel) {
        setCecrLevel(storedLevel as CECRLevel);
        const xp = stored ? parseInt(stored, 10) : getXPForLevel(storedLevel as CECRLevel);
        setTotalXP(xp);
      } else if (stored) {
        const xp = parseInt(stored, 10);
        setTotalXP(xp);
        setCecrLevel(getLevelFromXP(xp));
      }
      setLoading(false);
      return;
    }

    const fetchProgress = async () => {
      const { data } = await supabase
        .from('profiles')
        .select('total_xp, cecr_level')
        .eq('user_id', user.id)
        .maybeSingle();

      if (data) {
        setTotalXP(data.total_xp || 0);
        setCecrLevel((data.cecr_level as CECRLevel) || 'A1');
      }
      setLoading(false);
    };
    fetchProgress();
  }, [user]);

  const addXP = useCallback(async (amount: number): Promise<{ leveledUp: boolean; newLevel: CECRLevel }> => {
    if (!Number.isFinite(amount) || amount === 0) {
      return { leveledUp: false, newLevel: cecrLevel };
    }

    if (user) {
      // Atomic-ish update: re-read DB to avoid stale closure overwrites,
      // then write back. Logs any error so silent failures (RLS, network) become visible.
      const { data: fresh, error: readErr } = await supabase
        .from('profiles')
        .select('total_xp, cecr_level')
        .eq('user_id', user.id)
        .maybeSingle();
      if (readErr) console.error('[addXP] read profile failed', readErr);

      const baseXP = fresh?.total_xp ?? totalXP ?? 0;
      const newXP = Math.max(0, baseXP + amount);
      const newLevel = getLevelFromXP(newXP);
      const prevLevel = (fresh?.cecr_level as CECRLevel) ?? cecrLevel;
      const leveledUp = newLevel !== prevLevel;

      const { error: updErr } = await supabase
        .from('profiles')
        .update({ total_xp: newXP, cecr_level: newLevel })
        .eq('user_id', user.id);
      if (updErr) {
        console.error('[addXP] update profile failed', updErr);
        // Do not optimistically update UI when persistence fails
        return { leveledUp: false, newLevel: prevLevel };
      }

      setTotalXP(newXP);
      setCecrLevel(newLevel);
      emitXPUpdate(newXP, newLevel);

      if (amount > 0) {
        const { error: weeklyErr } = await supabase.rpc('add_weekly_xp', {
          _user_id: user.id,
          _amount: amount,
        });
        if (weeklyErr) console.error('[addXP] add_weekly_xp failed', weeklyErr);
        window.dispatchEvent(new CustomEvent('weekly-xp-update'));
      }

      return { leveledUp, newLevel };
    }

    // Anonymous (no user) — keep purely local
    const newXP = Math.max(0, totalXP + amount);
    const newLevel = getLevelFromXP(newXP);
    const leveledUp = newLevel !== cecrLevel;
    setTotalXP(newXP);
    setCecrLevel(newLevel);
    emitXPUpdate(newXP, newLevel);
    localStorage.setItem('user-xp', String(newXP));
    localStorage.setItem('user-cecr-level', newLevel);
    return { leveledUp, newLevel };
  }, [totalXP, cecrLevel, user]);

  const setLevel = useCallback(async (level: CECRLevel) => {
    const xp = getXPForLevel(level);
    setTotalXP(xp);
    setCecrLevel(level);
    emitXPUpdate(xp, level);

    if (user) {
      await supabase
        .from('profiles')
        .update({ total_xp: xp, cecr_level: level })
        .eq('user_id', user.id);
    } else {
      localStorage.setItem('user-xp', String(xp));
      localStorage.setItem('user-cecr-level', level);
    }
  }, [user]);

  return { totalXP, cecrLevel, loading, addXP, setLevel, xpProgress: getXPForNextLevel(totalXP) };
}
