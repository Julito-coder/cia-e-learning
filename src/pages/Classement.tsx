import { useEffect, useState, useCallback } from 'react';
import { Trophy, Crown, Medal, Flame, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useUserProgress } from '@/hooks/useUserProgress';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { LeagueView } from '@/components/leaderboard/LeagueView';

type LeaderboardEntry = {
  user_id: string;
  first_name: string | null;
  last_name: string | null;
  avatar_url: string | null;
  total_xp: number;
  cecr_level: string | null;
  daily_streak?: number;
};

type Mode = 'league' | 'global' | 'level' | 'streak';

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

const PodiumCard = ({ entry, rank, isMe, mode }: { entry: LeaderboardEntry; rank: 1 | 2 | 3; isMe: boolean; mode: Mode }) => {
  const config = {
    1: { icon: Crown, color: 'text-yellow-500', bg: 'bg-gradient-to-b from-yellow-100 to-yellow-50 dark:from-yellow-900/30 dark:to-yellow-900/10', border: 'border-yellow-400', height: 'md:h-64', label: 'OR' },
    2: { icon: Medal, color: 'text-slate-400', bg: 'bg-gradient-to-b from-slate-100 to-slate-50 dark:from-slate-800/40 dark:to-slate-800/10', border: 'border-slate-300', height: 'md:h-56', label: 'ARGENT' },
    3: { icon: Medal, color: 'text-orange-500', bg: 'bg-gradient-to-b from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-900/10', border: 'border-orange-400', height: 'md:h-52', label: 'BRONZE' },
  }[rank];
  const Icon = config.icon;
  const delay = (rank === 1 ? 0.2 : rank === 2 ? 0.05 : 0.35);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
    >
    <Card className={`${config.bg} ${config.height} border-2 ${config.border} ${isMe ? 'ring-4 ring-primary/40' : ''} flex flex-col items-center justify-end p-4 rounded-3xl relative overflow-hidden transition-transform hover:scale-105`}>
      {rank === 1 && (
        <>
          <Sparkles className="absolute top-3 right-3 h-5 w-5 text-yellow-500 animate-pulse" />
          <div className="absolute inset-0 -z-10 bg-gradient-radial from-yellow-300/40 via-transparent to-transparent blur-2xl animate-pulse" />
        </>
      )}
      <motion.div
        animate={rank === 1 ? { rotate: [-5, 5, -5] } : undefined}
        transition={rank === 1 ? { repeat: Infinity, duration: 3, ease: 'easeInOut' } : undefined}
      >
        <Icon className={`${config.color} h-8 w-8 mb-2`} />
      </motion.div>
      <Avatar entry={entry} size="lg" />
      <p className="font-bold text-sm mt-2 text-center truncate max-w-full">{displayName(entry)}</p>
      <p className="text-xs text-muted-foreground">{entry.cecr_level || 'A1'}</p>
      <div className="mt-2 px-3 py-1 rounded-full bg-cia-xp/15 text-cia-xp text-xs font-bold">
        {mode === 'streak'
          ? <span className="inline-flex items-center gap-1 text-cia-streak">🔥 {entry.daily_streak ?? 0} j</span>
          : <>⚡ {entry.total_xp.toLocaleString()} XP</>}
      </div>
      <p className={`mt-1 text-[10px] font-extrabold tracking-wider ${config.color}`}>#{rank} • {config.label}</p>
    </Card>
    </motion.div>
  );
};

const Row = ({ entry, rank, isMe, mode }: { entry: LeaderboardEntry; rank: number; isMe: boolean; mode: Mode }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.25 }}
    className={`flex items-center gap-3 p-3 rounded-2xl transition-colors ${isMe ? 'bg-primary/10 border-2 border-primary ring-2 ring-primary/20' : 'bg-card hover:bg-muted/50 border border-border/40'}`}
  >
    <div className={`w-9 text-center font-extrabold ${rank <= 10 ? 'text-primary' : 'text-muted-foreground'}`}>
      #{rank}
    </div>
    <Avatar entry={entry} size="sm" />
    <div className="flex-1 min-w-0">
      <p className="font-bold text-sm truncate">{displayName(entry)} {isMe && <span className="text-xs text-primary">(vous)</span>}</p>
      <p className="text-xs text-muted-foreground">Niveau {entry.cecr_level || 'A1'}</p>
    </div>
    {mode === 'streak' ? (
      <div className="px-3 py-1.5 rounded-full bg-cia-streak/15 text-cia-streak text-xs font-bold flex items-center gap-1">
        🔥 {entry.daily_streak ?? 0}
      </div>
    ) : (
      <div className="px-3 py-1.5 rounded-full bg-cia-xp/15 text-cia-xp text-xs font-bold flex items-center gap-1">
        ⚡ {entry.total_xp.toLocaleString()}
      </div>
    )}
  </motion.div>
);

const TABS: { key: Mode; label: string }[] = [
  { key: 'league', label: '🏆 Ligue' },
  { key: 'global', label: '🌍 Global' },
  { key: 'level', label: '🎯' },
  { key: 'streak', label: '🔥 Streak' },
];

function AnimatedTabs({ value, onChange, levelLabel }: { value: Mode; onChange: (m: Mode) => void; levelLabel: string }) {
  return (
    <div className="grid w-full grid-cols-4 rounded-2xl bg-muted p-1 mb-6">
      {TABS.map((t) => {
        const active = value === t.key;
        const display = t.key === 'level' ? `${t.label} ${levelLabel}` : t.label;
        return (
          <button
            key={t.key}
            onClick={() => onChange(t.key)}
            className={`relative rounded-xl py-2 text-sm font-bold transition-colors ${active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            {active && (
              <motion.span
                layoutId="classement-tab-pill"
                className="absolute inset-0 rounded-xl bg-card shadow"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{display}</span>
          </button>
        );
      })}
    </div>
  );
}

export default function Classement() {
  const { user } = useAuth();
  const { totalXP, cecrLevel } = useUserProgress();
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<Mode>('league');
  const [myRank, setMyRank] = useState<number | null>(null);

  const fetchLeaderboard = useCallback(async () => {
    if (tab === 'league') {
      setLoading(false);
      setEntries([]);
      return;
    }
    const orderField = tab === 'streak' ? 'daily_streak' : 'total_xp';
    let q = supabase
      .from('profiles')
      .select('user_id, first_name, last_name, avatar_url, total_xp, cecr_level, daily_streak')
      .eq('is_active', true)
      .order(orderField, { ascending: false })
      .limit(50);
    if (tab === 'level') q = q.eq('cecr_level', cecrLevel);
    if (tab === 'streak') q = q.gt('daily_streak', 0);
    const { data, error } = await q;
    if (error) {
      console.error('[Classement] fetch error', error);
    }
    setEntries((data as LeaderboardEntry[]) || []);

    if (user) {
      if (tab === 'streak') {
        // We don't compute "my rank" for streak (kept simple); leaderboard shows all top users with streak > 0
        setMyRank(null);
      } else {
        let countQ = supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true })
          .eq('is_active', true)
          .gt('total_xp', totalXP);
        if (tab === 'level') countQ = countQ.eq('cecr_level', cecrLevel);
        const { count } = await countQ;
        setMyRank((count ?? 0) + 1);
      }
    }
    setLoading(false);
  }, [tab, cecrLevel, totalXP, user]);

  // Show skeleton only on tab switch / initial mount, not on every refresh.
  useEffect(() => {
    setLoading(true);
  }, [tab]);

  useEffect(() => {
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
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 mb-3 shadow-lg relative"
        >
          <div className="absolute inset-0 rounded-2xl bg-yellow-400/40 blur-xl -z-10" />
          <Trophy className="h-9 w-9 text-white" />
        </motion.div>
        <h1 className="font-display text-3xl md:text-4xl text-primary mb-2">Classement</h1>
        <p className="text-muted-foreground text-sm">Affrontez les autres apprenants et grimpez dans le classement !</p>
      </div>

      <AnimatedTabs value={tab} onChange={setTab} levelLabel={cecrLevel} />

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25 }}
        >
      {tab === 'league' ? (
        <LeagueView />
      ) : loading ? (
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
                <PodiumCard entry={top3[1]} rank={2} isMe={user?.id === top3[1].user_id} mode={tab} />
              </div>
              <div className="order-2">
                <PodiumCard entry={top3[0]} rank={1} isMe={user?.id === top3[0].user_id} mode={tab} />
              </div>
              <div className="order-3">
                <PodiumCard entry={top3[2]} rank={3} isMe={user?.id === top3[2].user_id} mode={tab} />
              </div>
            </div>
          )}

          {/* Rest */}
          <motion.div layout className="space-y-2">
            {rest.map((e, i) => (
              <Row key={e.user_id} entry={e} rank={i + 4} isMe={user?.id === e.user_id} mode={tab} />
            ))}
            {top3.length > 0 && top3.length < 3 && top3.map((e, i) => (
              <Row key={e.user_id} entry={e} rank={i + 1} isMe={user?.id === e.user_id} mode={tab} />
            ))}
          </motion.div>

          {/* My position if outside top 50 */}
          {user && !meInTop && myRank && (
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 220, damping: 24 }}
              className="mt-6 sticky bottom-4"
            >
              <div className="bg-gradient-to-r from-primary via-primary to-cia-gold-500 text-primary-foreground p-4 rounded-2xl shadow-2xl flex items-center gap-3 ring-2 ring-primary/30">
                <Flame className="h-6 w-6" />
                <div className="flex-1">
                  <p className="text-xs font-bold opacity-90">VOTRE POSITION</p>
                  <p className="font-extrabold">#{myRank} • {totalXP.toLocaleString()} XP</p>
                </div>
                <p className="text-xs opacity-90">Continuez pour entrer dans le top 50 !</p>
              </div>
            </motion.div>
          )}
        </>
      )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
