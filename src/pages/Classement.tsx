import { useEffect, useState, useCallback } from 'react';
import { Trophy, Crown, Medal, Flame, Sparkles } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useUserProgress } from '@/hooks/useUserProgress';
import { Card } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';

type LeaderboardEntry = {
  user_id: string;
  first_name: string | null;
  last_name: string | null;
  avatar_url: string | null;
  total_xp: number;
  cecr_level: string | null;
};

const displayName = (e: LeaderboardEntry) => {
  const fn = (e.first_name || '').trim();
  const ln = (e.last_name || '').trim();
  if (!fn && !ln) return 'Apprenant';
  return `${fn}${ln ? ' ' + ln[0] + '.' : ''}`;
};

const Avatar = ({ entry, size = 'md' }: { entry: LeaderboardEntry; size?: 'sm' | 'md' | 'lg' }) => {
  const sz = size === 'lg' ? 'h-20 w-20 text-2xl' : size === 'md' ? 'h-12 w-12 text-base' : 'h-10 w-10 text-sm';
  const initial = (entry.first_name?.[0] || entry.last_name?.[0] || '?').toUpperCase();
  if (entry.avatar_url) {
    return <img src={entry.avatar_url} alt={displayName(entry)} className={`${sz} rounded-full object-cover border-2 border-primary/30`} />;
  }
  return (
    <div className={`${sz} rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary border-2 border-primary/30`}>
      {initial}
    </div>
  );
};

const PodiumCard = ({ entry, rank, isMe }: { entry: LeaderboardEntry; rank: 1 | 2 | 3; isMe: boolean }) => {
  const config = {
    1: { icon: Crown, color: 'text-yellow-500', bg: 'bg-gradient-to-b from-yellow-100 to-yellow-50 dark:from-yellow-900/30 dark:to-yellow-900/10', border: 'border-yellow-400', height: 'md:h-64', label: 'OR' },
    2: { icon: Medal, color: 'text-slate-400', bg: 'bg-gradient-to-b from-slate-100 to-slate-50 dark:from-slate-800/40 dark:to-slate-800/10', border: 'border-slate-300', height: 'md:h-56', label: 'ARGENT' },
    3: { icon: Medal, color: 'text-orange-500', bg: 'bg-gradient-to-b from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-900/10', border: 'border-orange-400', height: 'md:h-52', label: 'BRONZE' },
  }[rank];
  const Icon = config.icon;
  return (
    <Card className={`${config.bg} ${config.height} border-2 ${config.border} ${isMe ? 'ring-4 ring-primary/40' : ''} flex flex-col items-center justify-end p-4 rounded-3xl relative overflow-hidden transition-transform hover:scale-105`}>
      {rank === 1 && <Sparkles className="absolute top-3 right-3 h-5 w-5 text-yellow-500 animate-pulse" />}
      <Icon className={`${config.color} h-8 w-8 mb-2`} />
      <Avatar entry={entry} size="lg" />
      <p className="font-bold text-sm mt-2 text-center truncate max-w-full">{displayName(entry)}</p>
      <p className="text-xs text-muted-foreground">{entry.cecr_level || 'A1'}</p>
      <div className="mt-2 px-3 py-1 rounded-full bg-cia-xp/15 text-cia-xp text-xs font-bold">
        ⚡ {entry.total_xp.toLocaleString()} XP
      </div>
      <p className={`mt-1 text-[10px] font-extrabold tracking-wider ${config.color}`}>#{rank} • {config.label}</p>
    </Card>
  );
};

const Row = ({ entry, rank, isMe }: { entry: LeaderboardEntry; rank: number; isMe: boolean }) => (
  <div className={`flex items-center gap-3 p-3 rounded-2xl transition-all ${isMe ? 'bg-primary/10 border-2 border-primary ring-2 ring-primary/20' : 'bg-card hover:bg-muted/50 border border-border/40'}`}>
    <div className={`w-9 text-center font-extrabold ${rank <= 10 ? 'text-primary' : 'text-muted-foreground'}`}>
      #{rank}
    </div>
    <Avatar entry={entry} size="sm" />
    <div className="flex-1 min-w-0">
      <p className="font-bold text-sm truncate">{displayName(entry)} {isMe && <span className="text-xs text-primary">(vous)</span>}</p>
      <p className="text-xs text-muted-foreground">Niveau {entry.cecr_level || 'A1'}</p>
    </div>
    <div className="px-3 py-1.5 rounded-full bg-cia-xp/15 text-cia-xp text-xs font-bold flex items-center gap-1">
      ⚡ {entry.total_xp.toLocaleString()}
    </div>
  </div>
);

export default function Classement() {
  const { user } = useAuth();
  const { totalXP, cecrLevel } = useUserProgress();
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<'global' | 'level'>('global');
  const [myRank, setMyRank] = useState<number | null>(null);

  const fetchLeaderboard = useCallback(async () => {
    let q = supabase
      .from('profiles')
      .select('user_id, first_name, last_name, avatar_url, total_xp, cecr_level')
      .eq('is_active', true)
      .order('total_xp', { ascending: false })
      .limit(50);
    if (tab === 'level') q = q.eq('cecr_level', cecrLevel);
    const { data } = await q;
    setEntries((data as LeaderboardEntry[]) || []);

    if (user) {
      let countQ = supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true })
        .eq('is_active', true)
        .gt('total_xp', totalXP);
      if (tab === 'level') countQ = countQ.eq('cecr_level', cecrLevel);
      const { count } = await countQ;
      setMyRank((count ?? 0) + 1);
    }
    setLoading(false);
  }, [tab, cecrLevel, totalXP, user]);

  useEffect(() => {
    setLoading(true);
    fetchLeaderboard();
    const interval = setInterval(fetchLeaderboard, 30000);
    const onXPUpdate = () => fetchLeaderboard();
    window.addEventListener('xp-update', onXPUpdate);
    return () => {
      clearInterval(interval);
      window.removeEventListener('xp-update', onXPUpdate);
    };
  }, [fetchLeaderboard]);

  const top3 = entries.slice(0, 3);
  const rest = entries.slice(3);
  const meInTop = user && entries.some((e) => e.user_id === user.id);

  return (
    <div className="container py-8 max-w-4xl">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 mb-3 shadow-lg">
          <Trophy className="h-9 w-9 text-white" />
        </div>
        <h1 className="font-display text-3xl md:text-4xl text-primary mb-2">Classement</h1>
        <p className="text-muted-foreground text-sm">Affrontez les autres apprenants et grimpez dans le classement !</p>
      </div>

      <Tabs value={tab} onValueChange={(v) => setTab(v as 'global' | 'level')} className="mb-6">
        <TabsList className="grid w-full grid-cols-2 rounded-2xl">
          <TabsTrigger value="global" className="rounded-xl font-bold">🌍 Global</TabsTrigger>
          <TabsTrigger value="level" className="rounded-xl font-bold">🎯 Niveau {cecrLevel}</TabsTrigger>
        </TabsList>
      </Tabs>

      {loading ? (
        <div className="space-y-3">
          {Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} className="h-16 rounded-2xl" />)}
        </div>
      ) : entries.length === 0 ? (
        <Card className="p-12 text-center rounded-3xl">
          <Trophy className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground font-bold">Aucun apprenant à ce niveau pour l'instant.</p>
          <p className="text-xs text-muted-foreground mt-2">Soyez le premier à grimper dans le classement !</p>
        </Card>
      ) : (
        <>
          {/* Podium */}
          {top3.length >= 3 && (
            <div className="grid grid-cols-3 gap-3 mb-8 items-end">
              <div className="order-1">
                <PodiumCard entry={top3[1]} rank={2} isMe={user?.id === top3[1].user_id} />
              </div>
              <div className="order-2">
                <PodiumCard entry={top3[0]} rank={1} isMe={user?.id === top3[0].user_id} />
              </div>
              <div className="order-3">
                <PodiumCard entry={top3[2]} rank={3} isMe={user?.id === top3[2].user_id} />
              </div>
            </div>
          )}

          {/* Rest */}
          <div className="space-y-2">
            {rest.map((e, i) => (
              <Row key={e.user_id} entry={e} rank={i + 4} isMe={user?.id === e.user_id} />
            ))}
            {top3.length > 0 && top3.length < 3 && top3.map((e, i) => (
              <Row key={e.user_id} entry={e} rank={i + 1} isMe={user?.id === e.user_id} />
            ))}
          </div>

          {/* My position if outside top 50 */}
          {user && !meInTop && myRank && (
            <div className="mt-6 sticky bottom-4">
              <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <Flame className="h-6 w-6" />
                <div className="flex-1">
                  <p className="text-xs font-bold opacity-90">VOTRE POSITION</p>
                  <p className="font-extrabold">#{myRank} • {totalXP.toLocaleString()} XP</p>
                </div>
                <p className="text-xs opacity-90">Continuez pour entrer dans le top 50 !</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
