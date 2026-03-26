import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

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
    const { data } = await query;
    setSubs((data as unknown as Subscription[]) || []);
    setLoading(false);
  };

  useEffect(() => { fetchSubs(); }, [planFilter]);

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from('subscriptions').update({ status }).eq('id', id);
    if (error) toast.error(error.message);
    else { toast.success('Statut mis à jour'); fetchSubs(); }
  };

  const updatePlan = async (id: string, plan: string) => {
    const { error } = await supabase.from('subscriptions').update({ plan }).eq('id', id);
    if (error) toast.error(error.message);
    else { toast.success('Plan mis à jour'); fetchSubs(); }
  };

  const planColors: Record<string, string> = {
    free: 'bg-secondary text-secondary-foreground',
    premium: 'bg-cia-gold text-primary-foreground',
    school: 'bg-primary text-primary-foreground',
  };

  const statusColors: Record<string, string> = {
    active: 'bg-cia-success text-primary-foreground',
    expired: 'bg-destructive text-destructive-foreground',
    cancelled: 'bg-muted text-muted-foreground',
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold">Gestion des abonnements</h1>
        <Select value={planFilter} onValueChange={setPlanFilter}>
          <SelectTrigger className="w-40"><SelectValue placeholder="Plan" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les plans</SelectItem>
            <SelectItem value="free">Gratuit</SelectItem>
            <SelectItem value="premium">Premium</SelectItem>
            <SelectItem value="school">École</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Utilisateur</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Début</TableHead>
                <TableHead>Expiration</TableHead>
                <TableHead>Code promo</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow><TableCell colSpan={8} className="text-center py-8 text-muted-foreground">Chargement...</TableCell></TableRow>
              ) : subs.length === 0 ? (
                <TableRow><TableCell colSpan={8} className="text-center py-8 text-muted-foreground">Aucun abonnement</TableCell></TableRow>
              ) : (
                subs.map((s) => (
                  <TableRow key={s.id}>
                    <TableCell className="font-medium">{s.profiles?.first_name} {s.profiles?.last_name}</TableCell>
                    <TableCell>{s.profiles?.email}</TableCell>
                    <TableCell>
                      <Select value={s.plan} onValueChange={(v) => updatePlan(s.id, v)}>
                        <SelectTrigger className="h-7 w-24"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="free">Gratuit</SelectItem>
                          <SelectItem value="premium">Premium</SelectItem>
                          <SelectItem value="school">École</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell><Badge className={statusColors[s.status] || ''}>{s.status}</Badge></TableCell>
                    <TableCell>{new Date(s.starts_at).toLocaleDateString('fr-FR')}</TableCell>
                    <TableCell>{s.expires_at ? new Date(s.expires_at).toLocaleDateString('fr-FR') : '—'}</TableCell>
                    <TableCell>{s.promo_code || '—'}</TableCell>
                    <TableCell className="text-right">
                      {s.status === 'active' && (
                        <Button variant="ghost" size="sm" onClick={() => updateStatus(s.id, 'cancelled')} className="text-destructive">
                          Annuler
                        </Button>
                      )}
                      {s.status !== 'active' && (
                        <Button variant="ghost" size="sm" onClick={() => updateStatus(s.id, 'active')}>
                          Réactiver
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <p className="text-sm text-muted-foreground">{subs.length} abonnement(s)</p>
    </div>
  );
}
