import { useEffect, useMemo, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line,
} from 'recharts';
import { Users, UserCheck, Zap, Flame } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AdminPageHeader } from '@/components/admin/AdminPageHeader';
import { StatCard } from '@/components/admin/StatCard';
import { AdminSectionCard } from '@/components/admin/AdminSectionCard';
import { Skeleton } from '@/components/ui/skeleton';

type Period = '7' | '30' | '90';

const LEVEL_KEYS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export default function AdminAnalytics() {
  const [period, setPeriod] = useState<Period>('30');
  const [loading, setLoading] = useState(true);

  const [levelData, setLevelData] = useState<{ name: string; value: number }[]>([]);
  const [courseStats, setCourseStats] = useState<{ name: string; completions: number }[]>([]);
  const [weeklyXP, setWeeklyXP] = useState<{ week: string; xp: number }[]>([]);
  const [kpis, setKpis] = useState({ totalUsers: 0, activeUsers: 0, totalXP: 0, avgStreak: 0 });

  const since = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() - parseInt(period, 10));
    return d.toISOString();
  }, [period]);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);

      const [profilesRes, progressRes, coursesRes, xpRes] = await Promise.all([
        supabase.from('profiles').select('cecr_level, is_active, daily_streak'),
        supabase.from('user_progress').select('course_id, progress_pct'),
        supabase.from('courses').select('id, title'),
        supabase.from('xp_audit_log').select('amount, created_at').gte('created_at', since).order('created_at', { ascending: true }).limit(5000),
      ]);

      if (cancelled) return;

      const profiles = profilesRes.data || [];
      const totalUsers = profiles.length;
      const activeUsers = profiles.filter((p) => p.is_active).length;
      const avgStreak = profiles.length
        ? Math.round((profiles.reduce((acc, p) => acc + (p.daily_streak || 0), 0) / profiles.length) * 10) / 10
        : 0;

      const levelCounts: Record<string, number> = {};
      profiles.forEach((p) => { const l = p.cecr_level || 'A1'; levelCounts[l] = (levelCounts[l] || 0) + 1; });
      setLevelData(LEVEL_KEYS.filter((k) => levelCounts[k]).map((k) => ({ name: k, value: levelCounts[k] })));

      const xpRows = xpRes.data || [];
      const totalXP = xpRows.reduce((acc, r) => acc + (r.amount || 0), 0);

      // Weekly XP - bucket by ISO week
      const buckets: Record<string, number> = {};
      xpRows.forEach((r) => {
        const d = new Date(r.created_at);
        const monday = new Date(d);
        monday.setDate(d.getDate() - ((d.getDay() + 6) % 7));
        const key = `${monday.getMonth() + 1}/${monday.getDate()}`;
        buckets[key] = (buckets[key] || 0) + (r.amount || 0);
      });
      setWeeklyXP(Object.entries(buckets).map(([week, xp]) => ({ week, xp })));

      const completionMap: Record<string, number> = {};
      (progressRes.data || []).forEach((p) => {
        if (p.progress_pct === 100) completionMap[p.course_id] = (completionMap[p.course_id] || 0) + 1;
      });
      const stats = (coursesRes.data || [])
        .map((c) => ({ name: c.title.length > 25 ? c.title.slice(0, 25) + '…' : c.title, completions: completionMap[c.id] || 0 }))
        .sort((a, b) => b.completions - a.completions)
        .slice(0, 8);
      setCourseStats(stats);

      setKpis({ totalUsers, activeUsers, totalXP, avgStreak });
      setLoading(false);
    }
    load();
    return () => { cancelled = true; };
  }, [since]);

  // Semantic CSS-var palette for pie segments
  const pieColors = [
    'hsl(var(--primary))',
    'hsl(var(--cia-success))',
    'hsl(var(--cia-gold))',
    'hsl(var(--accent))',
    'hsl(var(--secondary))',
    'hsl(var(--muted-foreground))',
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <AdminPageHeader
        title="Analytics"
        description="Indicateurs clés de la plateforme"
        actions={
          <Select value={period} onValueChange={(v) => setPeriod(v as Period)}>
            <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="7">7 jours</SelectItem>
              <SelectItem value="30">30 jours</SelectItem>
              <SelectItem value="90">90 jours</SelectItem>
            </SelectContent>
          </Select>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Utilisateurs" value={kpis.totalUsers} icon={Users} tint="primary" loading={loading} />
        <StatCard label="Actifs" value={kpis.activeUsers} icon={UserCheck} tint="success" loading={loading} />
        <StatCard label={`XP gagnés (${period}j)`} value={kpis.totalXP.toLocaleString('fr-FR')} icon={Zap} tint="gold" loading={loading} />
        <StatCard label="Série moyenne" value={`${kpis.avgStreak} j`} icon={Flame} tint="destructive" loading={loading} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AdminSectionCard title="Répartition par niveau CECRL" description="Distribution des apprenants">
          <div className="h-[280px]">
            {loading ? (
              <Skeleton className="h-full w-full rounded-lg" />
            ) : levelData.length === 0 ? (
              <div className="flex items-center justify-center h-full text-sm text-muted-foreground">Aucune donnée</div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={levelData} cx="50%" cy="50%" outerRadius={95} dataKey="value" label={({ name, value }) => `${name} (${value})`}>
                    {levelData.map((entry, i) => (
                      <Cell key={entry.name} fill={pieColors[i % pieColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))', borderRadius: 8 }} />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </AdminSectionCard>

        <AdminSectionCard title="Cours les plus complétés" description="Top 8 par complétion 100%">
          <div className="h-[280px]">
            {loading ? (
              <Skeleton className="h-full w-full rounded-lg" />
            ) : courseStats.length === 0 ? (
              <div className="flex items-center justify-center h-full text-sm text-muted-foreground">Aucune complétion enregistrée</div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={courseStats} layout="vertical" margin={{ left: 10, right: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis type="category" dataKey="name" width={140} tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip contentStyle={{ background: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))', borderRadius: 8 }} />
                  <Bar dataKey="completions" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </AdminSectionCard>
      </div>

      <AdminSectionCard title="Tendance XP" description={`XP gagnés par semaine (derniers ${period} jours)`}>
        <div className="h-[260px]">
          {loading ? (
            <Skeleton className="h-full w-full rounded-lg" />
          ) : weeklyXP.length === 0 ? (
            <div className="flex items-center justify-center h-full text-sm text-muted-foreground">Aucun gain d'XP sur la période</div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyXP}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} />
                <Tooltip contentStyle={{ background: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))', borderRadius: 8 }} />
                <Line type="monotone" dataKey="xp" stroke="hsl(var(--cia-gold))" strokeWidth={2.5} dot={{ r: 3, fill: 'hsl(var(--cia-gold))' }} />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </AdminSectionCard>
    </div>
  );
}
