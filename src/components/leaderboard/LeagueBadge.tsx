import { Crown, Medal, Trophy } from 'lucide-react';
import type { League } from '@/hooks/useLeague';

const CONFIG: Record<League, { label: string; icon: typeof Trophy; gradient: string; ring: string; text: string }> = {
  or: {
    label: 'OR',
    icon: Crown,
    gradient: 'bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500',
    ring: 'ring-yellow-400/60',
    text: 'text-yellow-900',
  },
  argent: {
    label: 'ARGENT',
    icon: Trophy,
    gradient: 'bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400',
    ring: 'ring-slate-300/60',
    text: 'text-slate-800',
  },
  bronze: {
    label: 'BRONZE',
    icon: Medal,
    gradient: 'bg-gradient-to-br from-orange-300 via-orange-400 to-orange-600',
    ring: 'ring-orange-400/60',
    text: 'text-orange-950',
  },
};

export function LeagueBadge({ league, size = 'md' }: { league: League; size?: 'sm' | 'md' | 'lg' }) {
  const c = CONFIG[league];
  const Icon = c.icon;
  const sz = size === 'lg' ? 'h-24 w-24' : size === 'md' ? 'h-14 w-14' : 'h-9 w-9';
  const iconSz = size === 'lg' ? 'h-12 w-12' : size === 'md' ? 'h-7 w-7' : 'h-5 w-5';
  return (
    <div className={`${sz} rounded-2xl ${c.gradient} ${c.text} shadow-lg ring-4 ${c.ring} flex items-center justify-center`}>
      <Icon className={iconSz} />
    </div>
  );
}

export function leagueLabel(l: League) {
  return CONFIG[l].label;
}