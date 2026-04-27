import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Flame, Calendar, Play, Check, Trophy, ArrowLeft, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useDailyChallenge } from '@/hooks/useDailyChallenge';
import { DAILY_LEVELS, todayKey } from '@/lib/dailyChallenge';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import type { CECRLevel } from '@/data/demo-courses';

type StreakRow = {
  user_id: string;
  first_name: string | null;
  last_name: string | null;
  avatar_url: string | null;
  daily_streak: number;
  cecr_level: string | null;
};

const todayLabel = () => {
  const d = new Date();
  return d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
};

export default function DailyChallenge() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { selectedLevel, setSelectedLevel, dailyLesson, streak, isDoneToday } = useDailyChallenge();
  const [topStreaks, setTopStreaks] = useState<StreakRow[]>([]);

  useEffect(() => {
    supabase
      .from('profiles')
      .select('user_id, first_name, last_name, avatar_url, daily_streak, cecr_level')
      .eq('is_active', true)
      .gt('daily_streak', 0)
      .order('daily_streak', { ascending: false })
      .limit(10)
      .then(({ data }) => setTopStreaks((data as StreakRow[]) || []));
  }, [streak]);

  const displayName = (e: StreakRow) => {
    const fn = (e.first_name || '').trim();
    const ln = (e.last_name || '').trim();
    if (!fn && !ln) return 'Apprenant';
    return `${fn}${ln ? ' ' + ln[0] + '.' : ''}`;
  };

  return (
    <div className="container py-8 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4" /> Accueil
      </Link>

      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 shadow-lg">
            <Flame className="h-9 w-9 text-white" />
          </div>
          <Badge className="bg-orange-500 text-white">DÉFI DU JOUR</Badge>
        </div>
        <h1 className="font-display text-3xl md:text-4xl text-primary mb-1">Leçon du jour</h1>
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
          <Calendar className="h-4 w-4" /> {todayLabel()}
        </p>
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cia-streak/15 text-cia-streak font-extrabold">
          <Flame className="h-5 w-5" /> {streak} {streak > 1 ? 'jours' : 'jour'} de série
        </div>
      </div>

      {/* Level selector */}
      <div className="mb-6">
        <p className="text-xs font-bold text-muted-foreground mb-2 text-center">CHOISIS TON NIVEAU</p>
        <div className="grid grid-cols-6 gap-2">
          {DAILY_LEVELS.map((lv) => (
            <button
              key={lv}
              onClick={() => setSelectedLevel(lv as CECRLevel)}
              className={`py-2.5 rounded-xl text-sm font-extrabold transition-all ${
                selectedLevel === lv
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-muted text-muted-foreground hover:bg-muted/70'
              }`}
            >
              {lv}
            </button>
          ))}
        </div>
      </div>

      {/* Daily lesson card */}
      {dailyLesson ? (
        <Card className={`p-6 rounded-3xl mb-8 border-2 ${
          isDoneToday
            ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 border-green-400'
            : 'bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 border-orange-300'
        }`}>
          {isDoneToday && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold mb-3">
              <Check className="h-3.5 w-3.5" /> FAIT AUJOURD'HUI
            </div>
          )}
          <Badge variant="outline" className="mb-2 font-bold">{selectedLevel} · {dailyLesson.moduleId}</Badge>
          <h2 className="font-display text-2xl mb-1">{dailyLesson.title}</h2>
          <p className="text-sm text-muted-foreground mb-5">Module : {dailyLesson.moduleTitle}</p>

          {isDoneToday ? (
            <div className="text-center py-2">
              <p className="text-sm font-bold text-green-700 dark:text-green-400 mb-3">
                🎉 Bravo ! Reviens demain pour maintenir ta série.
              </p>
              <Button onClick={() => navigate(`/cours/${dailyLesson.lessonId}`)} variant="outline" className="rounded-xl">
                Refaire la leçon
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => navigate(`/cours/${dailyLesson.lessonId}?daily=1`)}
              size="lg"
              className="w-full rounded-2xl gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 font-bold"
            >
              <Play className="h-5 w-5" /> Commencer le défi
            </Button>
          )}
          <p className="text-[11px] text-center text-muted-foreground mt-3">
            +25 XP bonus si tu termines aujourd'hui ⚡
          </p>
        </Card>
      ) : (
        <Card className="p-6 text-center rounded-3xl mb-8">
          <p className="text-muted-foreground">Pas de leçon disponible pour ce niveau pour le moment.</p>
        </Card>
      )}

      {/* Streak leaderboard */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display text-lg flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" /> Top des séries
          </h3>
          <Link to="/classement" className="text-xs text-primary hover:underline font-bold">Voir tout</Link>
        </div>
        {topStreaks.length === 0 ? (
          <Card className="p-6 text-center rounded-2xl text-sm text-muted-foreground">
            Sois le premier à lancer ta série ! 🔥
          </Card>
        ) : (
          <div className="space-y-2">
            {topStreaks.map((row, i) => {
              const isMe = user?.id === row.user_id;
              const initial = (row.first_name?.[0] || row.last_name?.[0] || '?').toUpperCase();
              return (
                <div key={row.user_id} className={`flex items-center gap-3 p-3 rounded-2xl border ${isMe ? 'bg-primary/10 border-primary' : 'bg-card border-border/40'}`}>
                  <div className={`w-8 text-center font-extrabold ${i === 0 ? 'text-yellow-500' : i < 3 ? 'text-primary' : 'text-muted-foreground'}`}>
                    {i === 0 ? <Crown className="h-5 w-5 inline" /> : `#${i + 1}`}
                  </div>
                  {row.avatar_url ? (
                    <img src={row.avatar_url} alt="" className="h-9 w-9 rounded-full object-cover border-2 border-primary/30" />
                  ) : (
                    <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary border-2 border-primary/30">{initial}</div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm truncate">{displayName(row)} {isMe && <span className="text-xs text-primary">(vous)</span>}</p>
                    <p className="text-xs text-muted-foreground">{row.cecr_level || 'A1'}</p>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-cia-streak/15 text-cia-streak text-sm font-extrabold flex items-center gap-1">
                    <Flame className="h-4 w-4" /> {row.daily_streak}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
