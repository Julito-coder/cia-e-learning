import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const LEVEL_COLORS: Record<string, string> = {
  A1: '#10b981', A2: '#22c55e', B1: '#0ea5e9', B2: '#3b82f6', C1: '#8b5cf6', C2: '#a855f7',
};

export default function AdminAnalytics() {
  const [levelData, setLevelData] = useState<{ name: string; value: number }[]>([]);
  const [courseStats, setCourseStats] = useState<{ name: string; completions: number }[]>([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    async function load() {
      // Users by level
      const { data: profiles } = await supabase.from('profiles').select('cecr_level, is_active');
      if (profiles) {
        setTotalUsers(profiles.length);
        setActiveUsers(profiles.filter((p) => p.is_active).length);
        const levelCounts: Record<string, number> = {};
        profiles.forEach((p) => { const l = p.cecr_level || 'A1'; levelCounts[l] = (levelCounts[l] || 0) + 1; });
        setLevelData(Object.entries(levelCounts).map(([name, value]) => ({ name, value })).sort((a, b) => a.name.localeCompare(b.name)));
      }

      // Course completion stats
      const { data: progress } = await supabase.from('user_progress').select('course_id, progress_pct');
      const { data: courses } = await supabase.from('courses').select('id, title');
      if (progress && courses) {
        const completionMap: Record<string, number> = {};
        progress.forEach((p) => {
          if (p.progress_pct === 100) completionMap[p.course_id] = (completionMap[p.course_id] || 0) + 1;
        });
        const stats = courses
          .map((c) => ({ name: c.title.slice(0, 25), completions: completionMap[c.id] || 0 }))
          .sort((a, b) => b.completions - a.completions)
          .slice(0, 8);
        setCourseStats(stats);
      }
    }
    load();
  }, []);

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="font-display text-2xl font-bold">Analytics</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card>
          <CardHeader><CardTitle className="text-base">Utilisateurs totaux</CardTitle></CardHeader>
          <CardContent><span className="text-3xl font-bold">{totalUsers}</span></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-base">Utilisateurs actifs</CardTitle></CardHeader>
          <CardContent><span className="text-3xl font-bold">{activeUsers}</span></CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="text-base">Répartition par niveau CECRL</CardTitle></CardHeader>
          <CardContent className="h-[300px]">
            {levelData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={levelData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={({ name, value }) => `${name} (${value})`}>
                    {levelData.map((entry) => (
                      <Cell key={entry.name} fill={LEVEL_COLORS[entry.name] || '#94a3b8'} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">Aucune donnée</div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base">Cours les plus complétés</CardTitle></CardHeader>
          <CardContent className="h-[300px]">
            {courseStats.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={courseStats} layout="vertical" margin={{ left: 10, right: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="name" width={150} tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Bar dataKey="completions" fill="hsl(207, 52%, 23%)" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">Aucune donnée</div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
