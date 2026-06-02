import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import type { CECRLevel } from '@/data/demo-courses';

const LEVEL_ORDER: CECRLevel[] = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const XP_PER_LEVEL = 5000;

const XP_UPDATE_EVENT = 'xp-update';

interface AwardXPResult {
  xp_before: number;
  xp_after: number;
  level_before: CECRLevel;
  level_after: CECRLevel;
  leveled_up: boolean;
}

interface SetPlacementLevelResult {
  level: CECRLevel;
  total_xp: number;
  taken_at: string;
}

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
  const [placementTestTakenAt, setPlacementTestTakenAt] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Cross-component sync
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (!detail) return;
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
        .select('total_xp, cecr_level, placement_test_taken_at')
        .eq('user_id', user.id)
        .maybeSingle();

      if (data) {
        setTotalXP(data.total_xp || 0);
        setCecrLevel((data.cecr_level as CECRLevel) || 'A1');
        setPlacementTestTakenAt(data.placement_test_taken_at ?? null);
      }
      setLoading(false);
    };
    fetchProgress();
  }, [user]);

  const addXP = useCallback(
    async (
      amount: number,
      source: string = 'unknown',
      sourceRef?: string,
    ): Promise<{ leveledUp: boolean; newLevel: CECRLevel }> => {
      if (!Number.isFinite(amount) || amount <= 0) {
        return { leveledUp: false, newLevel: cecrLevel };
      }

      const previousLevel = cecrLevel;

      if (user) {
        const { data, error } = await supabase.rpc('award_xp', {
          _amount: amount,
          _source: source,
          _source_ref: sourceRef,
        });
        if (error) {
          console.error('[addXP] award_xp failed', error);
          toast.error(`Erreur tokens: ${error.message}`);
          return { leveledUp: false, newLevel: cecrLevel };
        }
        const result = data as AwardXPResult | null;
        const newXP = result?.xp_after ?? totalXP;
        const newLevel = result?.level_after ?? cecrLevel;
        const leveledUp = !!result?.leveled_up;

        setTotalXP(newXP);
        setCecrLevel(newLevel);
        emitXPUpdate(newXP, newLevel);
        window.dispatchEvent(new CustomEvent('weekly-xp-update'));
        if (leveledUp) {
          window.dispatchEvent(new CustomEvent('level-up', {
            detail: { level: newLevel, previousLevel },
          }));
        }
        return { leveledUp, newLevel };
      }

      // Anonymous fallback (local only)
      const newXP = Math.max(0, totalXP + amount);
      const newLevel = getLevelFromXP(newXP);
      const leveledUp = newLevel !== cecrLevel;
      setTotalXP(newXP);
      setCecrLevel(newLevel);
      emitXPUpdate(newXP, newLevel);
      localStorage.setItem('user-xp', String(newXP));
      localStorage.setItem('user-cecr-level', newLevel);
      if (leveledUp) {
        window.dispatchEvent(new CustomEvent('level-up', {
          detail: { level: newLevel, previousLevel },
        }));
      }
      return { leveledUp, newLevel };
    },
    [totalXP, cecrLevel, user],
  );

  // Auto-progression CECRL (multi-appel)
  const setLevel = useCallback(
    async (level: CECRLevel) => {
      setCecrLevel(level);
      emitXPUpdate(totalXP, level);

      if (user) {
        const { error } = await supabase.rpc('set_cecr_level', { _level: level });
        if (error) {
          console.error('[setLevel] set_cecr_level failed', error);
          toast.error(`Erreur niveau: ${error.message}`);
        }
      } else {
        localStorage.setItem('user-cecr-level', level);
      }
    },
    [user, totalXP],
  );

  // Test de placement (one-shot côté serveur)
  const setPlacementLevel = useCallback(
    async (level: CECRLevel): Promise<{ ok: boolean; alreadyTaken: boolean; message?: string }> => {
      if (!user) {
        // Anonyme : applique localement
        const xp = getXPForLevel(level);
        setTotalXP(xp);
        setCecrLevel(level);
        emitXPUpdate(xp, level);
        localStorage.setItem('user-xp', String(xp));
        localStorage.setItem('user-cecr-level', level);
        return { ok: true, alreadyTaken: false };
      }
      const { data, error } = await supabase.rpc('set_placement_level', { _level: level });
      if (error) {
        const msg = error.message || '';
        const already = msg.includes('déjà passé');
        if (already) {
          toast.warning('Test de placement déjà passé — votre niveau n\'a pas été modifié.');
        } else {
          toast.error(`Erreur test de placement: ${msg}`);
        }
        return { ok: false, alreadyTaken: already, message: msg };
      }
      const result = data as SetPlacementLevelResult | null;
      const newXP = result?.total_xp ?? totalXP;
      setTotalXP(newXP);
      setCecrLevel(level);
      setPlacementTestTakenAt(result?.taken_at ?? new Date().toISOString());
      emitXPUpdate(newXP, level);
      window.dispatchEvent(new CustomEvent('weekly-xp-update'));
      return { ok: true, alreadyTaken: false };
    },
    [user, totalXP],
  );

  return {
    totalXP,
    cecrLevel,
    placementTestTakenAt,
    loading,
    addXP,
    setLevel,
    setPlacementLevel,
    xpProgress: getXPForNextLevel(totalXP),
  };
}
