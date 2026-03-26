import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, TrendingUp, CreditCard } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ users: 0, courses: 0, activeSubscriptions: 0, completionRate: 0 });

  useEffect(() => {
    async function loadStats() {
      const [profilesRes, coursesRes, subsRes, progressRes] = await Promise.all([
        supabase.from('profiles').select('id', { count: 'exact', head: true }),
        supabase.from('courses').select('id', { count: 'exact', head: true }),
        supabase.from('subscriptions').select('id', { count: 'exact', head: true }).eq('status', 'active'),
        supabase.from('user_progress').select('progress_pct'),
      ]);

      const progressData = progressRes.data || [];
      const avgCompletion = progressData.length
        ? Math.round(progressData.reduce((acc, p) => acc + (p.progress_pct || 0), 0) / progressData.length)
        : 0;

      setStats({
        users: profilesRes.count || 0,
        courses: coursesRes.count || 0,
        activeSubscriptions: subsRes.count || 0,
        completionRate: avgCompletion,
      });
    }
    loadStats();
  }, []);

  const cards = [
    { title: 'Utilisateurs', value: stats.users, icon: Users, desc: 'Inscrits sur la plateforme' },
    { title: 'Cours', value: stats.courses, icon: BookOpen, desc: 'Cours créés' },
    { title: 'Abonnements actifs', value: stats.activeSubscriptions, icon: CreditCard, desc: 'Abonnements en cours' },
    { title: 'Taux de complétion', value: `${stats.completionRate}%`, icon: TrendingUp, desc: 'Moyenne de progression' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="font-display text-2xl font-bold">Tableau de bord</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{card.title}</CardTitle>
              <card.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-xs text-muted-foreground">{card.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
