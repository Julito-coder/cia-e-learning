import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

const FAVORITES_KEY = 'cia-favorites';

export function useFavorites() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      try {
        const stored = localStorage.getItem(FAVORITES_KEY);
        setFavorites(stored ? new Set(JSON.parse(stored)) : new Set());
      } catch {
        setFavorites(new Set());
      }
      setLoading(false);
      return;
    }

    const fetchFavorites = async () => {
      const { data } = await supabase
        .from('user_favorites')
        .select('course_id')
        .eq('user_id', user.id);

      if (data) {
        const ids = new Set(data.map((f) => f.course_id));
        setFavorites(ids);

        // Sync localStorage favorites to backend on first login
        try {
          const stored = localStorage.getItem(FAVORITES_KEY);
          if (stored) {
            const localFavs: string[] = JSON.parse(stored);
            const toSync = localFavs.filter((id) => !ids.has(id));
            if (toSync.length > 0) {
              await supabase.from('user_favorites').insert(
                toSync.map((course_id) => ({ user_id: user.id, course_id }))
              );
              toSync.forEach((id) => ids.add(id));
              setFavorites(new Set(ids));
            }
            localStorage.removeItem(FAVORITES_KEY);
          }
        } catch {}
      }
      setLoading(false);
    };
    fetchFavorites();
  }, [user]);

  const toggleFavorite = useCallback(async (courseId: string) => {
    const isFav = favorites.has(courseId);
    const next = new Set(favorites);

    if (isFav) {
      next.delete(courseId);
    } else {
      next.add(courseId);
    }
    setFavorites(next);

    if (user) {
      if (isFav) {
        await supabase.from('user_favorites').delete().eq('user_id', user.id).eq('course_id', courseId);
      } else {
        await supabase.from('user_favorites').insert({ user_id: user.id, course_id: courseId });
      }
    } else {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify([...next]));
    }
  }, [favorites, user]);

  return { favorites, toggleFavorite, loading };
}
