import { useEffect, useMemo, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CreditCard, Crown, GraduationCap, AlarmClock } from 'lucide-react';
import { notify } from '@/lib/notify';
import { AdminPageHeader } from '@/components/admin/AdminPageHeader';
import { StatCard } from '@/components/admin/StatCard';
import { EmptyState } from '@/components/states/EmptyState';
import { AdminTableSkeleton } from '@/components/states/skeletons/AdminTableSkeleton';

interface Subscription {
  id: string;
  user_id: string;
  plan: string;
  status: string;
  starts_at: string;
  expires_at: string | null;
  promo_code: string | null;
  profiles?: { first_name: string | null; last_name: string | null; email: string | null } | null;
}

export default function AdminSubscriptions() {
  const [subs, setSubs] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [planFilter, setPlanFilter] = useState<string>('all');

  const fetchSubs = async () => {
    setLoading(true);
    let query = supabase.from('subscriptions').select('*, profiles(first_name, last_name, email)').order('created_at', { ascending: false });
    if (planFilter !== 'all') query = query.eq('plan', planFilter);
    const { data, error } = await query;
    if (error) notify.error(error.message);
    setSubs((data as unknown as Subscription[]) || []);
    setLoading(false);
  };

  useEffect(() => { fetchSubs(); /* eslint-disable-next-line */ }, [planFilter]);

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from('subscriptions').update({ status }).eq('id', id);
    if (error) notify.error(error.message);
    else { notify.success('Statut mis à jour'); fetchSubs(); }
  };

  const updatePlan = async (id: string, plan: string) => {
    const { error } = await supabase.from('subscriptions').update({ plan }).eq('id', id);
    if (error) notify.error(error.message);
    else { notify.success('Plan mis à jour'); fetchSubs(); }
  };

  const kpis = useMemo(() => {
    const now = Date.now();
    const in30 = now + 30 * 86400000;
    return {
      total: subs.length,
      premium: subs.filter((s) => s.plan === 'premium' && s.status === 'active').length,
      school: subs.filter((s) => s.plan === 'school' && s.status === 'active').length,
      expiring: subs.filter((s) => s.status === 'active' && s.expires_at && new Date(s.expires_at).getTime() <= in30 && new Date(s.expires_at).getTime() >= now).length,
    };
  }, [subs]);

  const statusColors: Record<string, string> = {
    active: 'bg-cia-success text-primary-foreground',
    expired: 'bg-destructive text-destructive-foreground',
    cancelled: 'bg-muted text-muted-foreground',
  };

  const renderExpires = (s: Subscription) => {
    if (!s.expires_at) return <span className="text-muted-foreground">—</span>;
    const days = Math.ceil((new Date(s.expires_at).getTime() - Date.now()) / 86400000);
    const dateStr = new Date(s.expires_at).toLocaleDateString('fr-FR');
    if (days < 0) return <span className="text-muted-foreground">{dateStr}</span>;
    return (
      <div className="flex flex-col">
        <span className="text-sm">{dateStr}</span>
        <span className={`text-xs ${days < 7 ? 'text-destructive font-medium' : 'text-muted-foreground'}`}>
          dans {days} j
        </span>
      </div>
    );
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <AdminPageHeader
        title="Gestion des abonnements"
        description={`${kpis.total} abonnement(s)`}
        actions={
          <Select value={planFilter} onValueChange={setPlanFilter}>
            <SelectTrigger className="w-40"><SelectValue placeholder="Plan" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les plans</SelectItem>
              <SelectItem value="free">Gratuit</SelectItem>
              <SelectItem value="premium">Premium</SelectItem>
              <SelectItem value="school">École</SelectItem>
            </SelectContent>
          </Select>
        }
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total" value={kpis.total} icon={CreditCard} tint="primary" loading={loading} />
        <StatCard label="Premium actifs" value={kpis.premium} icon={Crown} tint="gold" loading={loading} />
        <StatCard label="École actifs" value={kpis.school} icon={GraduationCap} tint="success" loading={loading} />
        <StatCard label="Expirent <30j" value={kpis.expiring} icon={AlarmClock} tint="destructive" loading={loading} />
      </div>

      <Card>
        <CardContent className="p-0">
          {loading ? (
            <AdminTableSkeleton rows={6} cols={7} />
          ) : subs.length === 0 ? (
            <div className="p-6">
              <EmptyState
                icon={CreditCard}
                title="Aucun abonnement"
                description="Aucun abonnement ne correspond aux filtres sélectionnés."
              />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Utilisateur</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Début</TableHead>
                    <TableHead>Expire</TableHead>
                    <TableHead>Promo</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subs.map((s) => (
                    <TableRow key={s.id}>
                      <TableCell className="font-medium">{s.profiles?.first_name} {s.profiles?.last_name}</TableCell>
                      <TableCell className="text-sm">{s.profiles?.email}</TableCell>
                      <TableCell>
                        <Select value={s.plan} onValueChange={(v) => updatePlan(s.id, v)}>
                          <SelectTrigger className="h-8 w-28"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="free">Gratuit</SelectItem>
                            <SelectItem value="premium">Premium</SelectItem>
                            <SelectItem value="school">École</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell><Badge className={statusColors[s.status] || ''}>{s.status}</Badge></TableCell>
                      <TableCell className="text-sm">{new Date(s.starts_at).toLocaleDateString('fr-FR')}</TableCell>
                      <TableCell>{renderExpires(s)}</TableCell>
                      <TableCell className="text-sm">{s.promo_code || '—'}</TableCell>
                      <TableCell className="text-right">
                        {s.status === 'active' ? (
                          <Button variant="ghost" size="sm" onClick={() => updateStatus(s.id, 'cancelled')} className="text-destructive">
                            Annuler
                          </Button>
                        ) : (
                          <Button variant="ghost" size="sm" onClick={() => updateStatus(s.id, 'active')}>
                            Réactiver
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
