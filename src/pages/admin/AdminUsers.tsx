import { useEffect, useMemo, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious,
} from '@/components/ui/pagination';
import { Search, Download, Plus, MoreHorizontal, UserCheck, UserX, KeyRound, Eye, Users as UsersIcon } from 'lucide-react';
import { notify } from '@/lib/notify';
import { AdminPageHeader } from '@/components/admin/AdminPageHeader';
import { AdminTableSkeleton } from '@/components/states/skeletons/AdminTableSkeleton';
import { EmptyState } from '@/components/states/EmptyState';

interface UserProfile {
  id: string;
  user_id: string;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  nationality: string | null;
  cecr_level: string | null;
  is_cia_student: boolean | null;
  is_active: boolean | null;
  created_at: string;
}

const PAGE_SIZE = 20;

export default function AdminUsers() {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [search, setSearch] = useState('');
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [createOpen, setCreateOpen] = useState(false);
  const [newUser, setNewUser] = useState({ email: '', password: '', first_name: '', last_name: '', cecr_level: 'A1' });

  const fetchUsers = async () => {
    setLoading(true);
    // Use SECURITY DEFINER admin RPC to read full profiles (email/phone/nationality).
    const { data, error } = await supabase.rpc('admin_list_profiles', {
      _level: levelFilter !== 'all' ? levelFilter : undefined,
    });
    if (error) notify.error(error.message);
    let rows = (data as UserProfile[] | null) || [];
    if (statusFilter === 'active') rows = rows.filter((u) => u.is_active === true);
    if (statusFilter === 'inactive') rows = rows.filter((u) => u.is_active === false);
    if (typeFilter === 'cia') rows = rows.filter((u) => (u as any).is_cia_student === true);
    if (typeFilter === 'external') rows = rows.filter((u) => (u as any).is_cia_student === false);
    setUsers(rows);
    setLoading(false);
  };

  useEffect(() => { fetchUsers(); /* eslint-disable-next-line */ }, [levelFilter, statusFilter, typeFilter]);
  useEffect(() => { setPage(1); }, [search, levelFilter, statusFilter, typeFilter]);

  const filteredUsers = useMemo(() => users.filter((u) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return (
      u.email?.toLowerCase().includes(s) ||
      u.first_name?.toLowerCase().includes(s) ||
      u.last_name?.toLowerCase().includes(s) ||
      u.nationality?.toLowerCase().includes(s)
    );
  }), [users, search]);

  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / PAGE_SIZE));
  const pageUsers = filteredUsers.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleExportCSV = () => {
    const headers = ['Prénom', 'Nom', 'Email', 'Nationalité', 'Niveau', 'Étudiant CIA', 'Actif', 'Inscrit le'];
    const rows = filteredUsers.map((u) => [
      u.first_name || '', u.last_name || '', u.email || '', u.nationality || '',
      u.cecr_level || '', u.is_cia_student ? 'Oui' : 'Non', u.is_active ? 'Oui' : 'Non',
      new Date(u.created_at).toLocaleDateString('fr-FR'),
    ]);
    const csv = '\uFEFF' + [headers.join(','), ...rows.map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `utilisateurs_cia_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
    notify.success('Export CSV téléchargé');
  };

  const handleCreateUser = async () => {
    if (!newUser.email || !newUser.password) { notify.error('Email et mot de passe requis'); return; }
    const { error } = await supabase.auth.signUp({
      email: newUser.email,
      password: newUser.password,
      options: { data: { first_name: newUser.first_name, last_name: newUser.last_name } },
    });
    if (error) {
      notify.error(error.message);
    } else {
      notify.success('Utilisateur créé avec succès');
      setCreateOpen(false);
      setNewUser({ email: '', password: '', first_name: '', last_name: '', cecr_level: 'A1' });
      fetchUsers();
    }
  };

  const toggleUserActive = async (profile: UserProfile) => {
    const { error } = await supabase.from('profiles').update({ is_active: !profile.is_active }).eq('id', profile.id);
    if (error) notify.error(error.message);
    else {
      notify.success(profile.is_active ? 'Utilisateur désactivé' : 'Utilisateur activé');
      fetchUsers();
    }
  };

  const resetFilters = () => {
    setSearch(''); setLevelFilter('all'); setStatusFilter('all'); setTypeFilter('all');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <AdminPageHeader
        title="Gestion des utilisateurs"
        description={`${filteredUsers.length} compte(s) au total`}
        actions={
          <>
            <Button variant="outline" onClick={handleExportCSV} className="gap-2">
              <Download className="h-4 w-4" /> Export CSV
            </Button>
            <Dialog open={createOpen} onOpenChange={setCreateOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2"><Plus className="h-4 w-4" /> Créer un compte</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Créer un compte utilisateur</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label>Prénom</Label>
                      <Input value={newUser.first_name} onChange={(e) => setNewUser({ ...newUser, first_name: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label>Nom</Label>
                      <Input value={newUser.last_name} onChange={(e) => setNewUser({ ...newUser, last_name: e.target.value })} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input type="email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label>Mot de passe</Label>
                    <Input type="password" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label>Niveau CECRL</Label>
                    <Select value={newUser.cecr_level} onValueChange={(v) => setNewUser({ ...newUser, cecr_level: v })}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {['A1','A2','B1','B2','C1','C2'].map((l) => (
                          <SelectItem key={l} value={l}>{l}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full" onClick={handleCreateUser}>Créer le compte</Button>
                </div>
              </DialogContent>
            </Dialog>
          </>
        }
      />

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Rechercher nom, email, nationalité..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
        </div>
        <Select value={levelFilter} onValueChange={setLevelFilter}>
          <SelectTrigger className="w-full sm:w-36"><SelectValue placeholder="Niveau" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous niveaux</SelectItem>
            {['A1','A2','B1','B2','C1','C2'].map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-36"><SelectValue placeholder="Statut" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous statuts</SelectItem>
            <SelectItem value="active">Actifs</SelectItem>
            <SelectItem value="inactive">Inactifs</SelectItem>
          </SelectContent>
        </Select>
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-full sm:w-36"><SelectValue placeholder="Type" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous types</SelectItem>
            <SelectItem value="cia">Étudiants CIA</SelectItem>
            <SelectItem value="external">Externes</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          {loading ? (
            <AdminTableSkeleton rows={6} cols={7} />
          ) : filteredUsers.length === 0 ? (
            <div className="p-6">
              <EmptyState
                icon={UsersIcon}
                title="Aucun utilisateur trouvé"
                description="Essayez d'ajuster vos filtres ou créez un nouveau compte."
                action={{ label: 'Réinitialiser les filtres', onClick: resetFilters }}
              />
            </div>
          ) : (
            <>
            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Nationalité</TableHead>
                    <TableHead>Niveau</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Inscrit le</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pageUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.first_name} {user.last_name}</TableCell>
                      <TableCell className="text-sm">{user.email}</TableCell>
                      <TableCell>{user.nationality || '—'}</TableCell>
                      <TableCell><Badge variant="outline">{user.cecr_level}</Badge></TableCell>
                      <TableCell>
                        <Badge variant={user.is_cia_student ? 'default' : 'secondary'}>
                          {user.is_cia_student ? 'CIA' : 'Externe'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={user.is_active ? 'default' : 'destructive'} className={user.is_active ? 'bg-cia-success' : ''}>
                          {user.is_active ? 'Actif' : 'Inactif'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm">{new Date(user.created_at).toLocaleDateString('fr-FR')}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => notify.info('Détail utilisateur — bientôt')}>
                              <Eye className="h-4 w-4 mr-2" /> Voir le détail
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => toggleUserActive(user)}>
                              {user.is_active
                                ? <><UserX className="h-4 w-4 mr-2" /> Désactiver</>
                                : <><UserCheck className="h-4 w-4 mr-2" /> Activer</>}
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => notify.info('Réinitialisation par email — bientôt')}>
                              <KeyRound className="h-4 w-4 mr-2" /> Réinitialiser le mot de passe
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            {/* Mobile cards */}
            <ul className="md:hidden divide-y divide-border">
              {pageUsers.map((user) => (
                <li key={user.id} className="p-4 flex items-start gap-3">
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <p className="font-semibold text-sm truncate">
                      {user.first_name} {user.last_name || <span className="text-muted-foreground">—</span>}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <Badge variant="outline" className="text-[10px]">{user.cecr_level}</Badge>
                      <Badge variant={user.is_cia_student ? 'default' : 'secondary'} className="text-[10px]">
                        {user.is_cia_student ? 'CIA' : 'Externe'}
                      </Badge>
                      <Badge
                        variant={user.is_active ? 'default' : 'destructive'}
                        className={`text-[10px] ${user.is_active ? 'bg-cia-success' : ''}`}
                      >
                        {user.is_active ? 'Actif' : 'Inactif'}
                      </Badge>
                    </div>
                    <p className="text-[11px] text-muted-foreground">
                      Inscrit le {new Date(user.created_at).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="min-h-touch min-w-touch shrink-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => notify.info('Détail utilisateur — bientôt')}>
                        <Eye className="h-4 w-4 mr-2" /> Voir le détail
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => toggleUserActive(user)}>
                        {user.is_active
                          ? <><UserX className="h-4 w-4 mr-2" /> Désactiver</>
                          : <><UserCheck className="h-4 w-4 mr-2" /> Activer</>}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => notify.info('Réinitialisation par email — bientôt')}>
                        <KeyRound className="h-4 w-4 mr-2" /> Réinitialiser le mot de passe
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              ))}
            </ul>
            </>
          )}
        </CardContent>
      </Card>

      {!loading && filteredUsers.length > PAGE_SIZE && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => { e.preventDefault(); setPage((p) => Math.max(1, p - 1)); }}
                aria-disabled={page === 1}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>{page}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <span className="px-3 text-sm text-muted-foreground">/ {totalPages}</span>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => { e.preventDefault(); setPage((p) => Math.min(totalPages, p + 1)); }}
                aria-disabled={page === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
