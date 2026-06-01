import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, TrendingUp, CreditCard, UserPlus, Sparkles, BarChart3, ArrowRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { AdminPageHeader } from '@/components/admin/AdminPageHeader';
import { StatCard } from '@/components/admin/StatCard';
import { AdminSectionCard } from '@/components/admin/AdminSectionCard';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';

interface RecentUser {
  id: string;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  cecr_level: string | null;
  created_at: string;
}

interface RecentXP {
  id: string;
  amount: number;
  source: string;
  created_at: string;
}

export default function AdminDashboard() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ users: 0, courses: 0, activeSubscriptions: 0, completionRate: 0 });
  const [recentUsers, setRecentUsers] = useState<RecentUser[]>([]);
  const [recentXP, setRecentXP] = useState<RecentXP[]>([]);
  const [firstName, setFirstName] = useState<string>('');

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const [profilesRes, coursesRes, subsRes, progressRes, recentUsersRes, recentXPRes, meRes] =
        await Promise.all([
          supabase.from('profiles').select('id', { count: 'exact', head: true }),
          supabase.from('courses').select('id', { count: 'exact', head: true }),
          supabase.from('subscriptions').select('id', { count: 'exact', head: true }).eq('status', 'active'),
          supabase.from('user_progress').select('progress_pct'),
          supabase.from('profiles').select('id, first_name, last_name, email, cecr_level, created_at').order('created_at', { ascending: false }).limit(5),
          supabase.from('xp_audit_log').select('id, amount, source, created_at').order('created_at', { ascending: false }).limit(5),
          user ? supabase.from('profiles').select('first_name').eq('user_id', user.id).maybeSingle() : Promise.resolve({ data: null }),
        ]);

      if (cancelled) return;
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
      setRecentUsers(recentUsersRes.data || []);
      setRecentXP(recentXPRes.data || []);
      setFirstName(meRes.data?.first_name || '');
      setLoading(false);
    }
    load();
    return () => { cancelled = true; };
  }, [user]);

  return (
    <div className="space-y-6 animate-fade-in">
      <AdminPageHeader
        title={`Bonjour${firstName ? `, ${firstName}` : ''} 👋`}
        description="Vue d'ensemble de la plateforme CIA"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Utilisateurs" value={stats.users} icon={Users} tint="primary" loading={loading} description="Inscrits sur la plateforme" />
        <StatCard label="Cours" value={stats.courses} icon={BookOpen} tint="gold" loading={loading} description="Cours créés" />
        <StatCard label="Abonnements actifs" value={stats.activeSubscriptions} icon={CreditCard} tint="success" loading={loading} description="Premium & école" />
        <StatCard label="Taux de complétion" value={`${stats.completionRate}%`} icon={TrendingUp} tint="muted" loading={loading} description="Moyenne globale" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AdminSectionCard
          title="Inscriptions récentes"
          description="Les 5 derniers comptes créés"
          action={
            <Button asChild variant="ghost" size="sm" className="gap-1">
              <Link to="/admin/utilisateurs">Voir tout <ArrowRight className="h-3 w-3" /></Link>
            </Button>
          }
          className="lg:col-span-2"
        >
          {loading ? (
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} className="h-10 w-full" />)}
            </div>
          ) : recentUsers.length === 0 ? (
            <p className="text-sm text-muted-foreground py-4 text-center">Aucun utilisateur</p>
          ) : (
            <ul className="divide-y">
              {recentUsers.map((u) => (
                <li key={u.id} className="flex items-center justify-between py-2.5 gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium truncate">
                      {u.first_name || u.last_name ? `${u.first_name ?? ''} ${u.last_name ?? ''}`.trim() : u.email || 'Sans nom'}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">{u.email}</p>
                  </div>
                  <Badge variant="outline" className="shrink-0">{u.cecr_level || 'A1'}</Badge>
                  <span className="text-xs text-muted-foreground shrink-0 hidden sm:inline">
                    {new Date(u.created_at).toLocaleDateString('fr-FR')}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </AdminSectionCard>

        <AdminSectionCard title="Actions rapides" description="Raccourcis fréquents">
          <div className="grid gap-2">
            <Button asChild variant="outline" className="justify-start gap-2">
              <Link to="/admin/utilisateurs"><UserPlus className="h-4 w-4" /> Créer un utilisateur</Link>
            </Button>
            <Button asChild variant="outline" className="justify-start gap-2">
              <Link to="/admin/cours"><Sparkles className="h-4 w-4" /> Créer un cours</Link>
            </Button>
            <Button asChild variant="outline" className="justify-start gap-2">
              <Link to="/admin/analytics"><BarChart3 className="h-4 w-4" /> Voir analytics</Link>
            </Button>
            <Button asChild variant="outline" className="justify-start gap-2">
              <Link to="/admin/abonnements"><CreditCard className="h-4 w-4" /> Abonnements</Link>
            </Button>
          </div>
        </AdminSectionCard>
      </div>

      <AdminSectionCard
        title="Activité XP récente"
        description="Les derniers gains d'XP enregistrés sur la plateforme"
      >
        {loading ? (
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} className="h-8 w-full" />)}
          </div>
        ) : recentXP.length === 0 ? (
          <p className="text-sm text-muted-foreground py-4 text-center">Aucune activité enregistrée</p>
        ) : (
          <ul className="divide-y">
            {recentXP.map((x) => (
              <li key={x.id} className="flex items-center justify-between py-2 gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="inline-flex items-center justify-center rounded-full bg-cia-gold/15 text-cia-gold h-7 w-7 text-xs font-bold">
                    +{x.amount}
                  </span>
                  <span className="text-sm capitalize truncate">{x.source.replace(/_/g, ' ')}</span>
                </div>
                <span className="text-xs text-muted-foreground shrink-0">
                  {new Date(x.created_at).toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' })}
                </span>
              </li>
            ))}
          </ul>
        )}
      </AdminSectionCard>
    </div>
  );
}
