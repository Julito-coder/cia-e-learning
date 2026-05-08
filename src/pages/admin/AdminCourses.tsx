import { useEffect, useMemo, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Plus, Edit, Eye, EyeOff, Trash2, Search, MoreVertical, BookOpen, Clock } from 'lucide-react';
import { notify } from '@/lib/notify';
import { AdminPageHeader } from '@/components/admin/AdminPageHeader';
import { EmptyState } from '@/components/states/EmptyState';
import { Skeleton } from '@/components/ui/skeleton';

const LEVELS = ['A1','A2','B1','B2','C1','C2'] as const;
const THEMES = ['Grammaire','Vocabulaire','Culture & Civilisation','Expression orale','Compréhension écrite','Compréhension orale'] as const;

interface Course {
  id: string;
  code: string;
  title: string;
  description: string | null;
  level: string;
  theme: string;
  duration_minutes: number | null;
  is_published: boolean | null;
  is_free: boolean | null;
  image_url: string | null;
  created_at: string;
}

const emptyCourse = { code: '', title: '', description: '', level: 'A1', theme: 'Grammaire', duration_minutes: 20, is_free: false };

export default function AdminCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [search, setSearch] = useState('');
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Partial<Course> | null>(null);
  const [form, setForm] = useState(emptyCourse);

  const fetchCourses = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('courses').select('*').order('created_at', { ascending: false });
    if (error) notify.error(error.message);
    setCourses((data as Course[]) || []);
    setLoading(false);
  };

  useEffect(() => { fetchCourses(); }, []);

  const filtered = useMemo(() => courses.filter((c) => {
    if (levelFilter !== 'all' && c.level !== levelFilter) return false;
    if (statusFilter === 'published' && !c.is_published) return false;
    if (statusFilter === 'draft' && c.is_published) return false;
    if (search) {
      const s = search.toLowerCase();
      if (!c.title.toLowerCase().includes(s) && !c.code.toLowerCase().includes(s)) return false;
    }
    return true;
  }), [courses, levelFilter, statusFilter, search]);

  const openCreate = () => { setEditingCourse(null); setForm(emptyCourse); setDialogOpen(true); };
  const openEdit = (course: Course) => {
    setEditingCourse(course);
    setForm({
      code: course.code, title: course.title, description: course.description || '',
      level: course.level, theme: course.theme,
      duration_minutes: course.duration_minutes || 20, is_free: course.is_free || false,
    });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.code || !form.title) { notify.error('Code et titre requis'); return; }
    const payload = {
      code: form.code, title: form.title, description: form.description,
      level: form.level, theme: form.theme,
      duration_minutes: form.duration_minutes, is_free: form.is_free,
    };
    if (editingCourse?.id) {
      const { error } = await supabase.from('courses').update(payload).eq('id', editingCourse.id);
      if (error) return notify.error(error.message);
      notify.success('Cours modifié');
    } else {
      const { error } = await supabase.from('courses').insert(payload);
      if (error) return notify.error(error.message);
      notify.success('Cours créé');
    }
    setDialogOpen(false);
    fetchCourses();
  };

  const togglePublish = async (course: Course) => {
    const { error } = await supabase.from('courses').update({ is_published: !course.is_published }).eq('id', course.id);
    if (error) notify.error(error.message);
    else { notify.success(course.is_published ? 'Cours dépublié' : 'Cours publié'); fetchCourses(); }
  };

  const deleteCourse = async (id: string) => {
    if (!confirm('Supprimer ce cours ?')) return;
    const { error } = await supabase.from('courses').delete().eq('id', id);
    if (error) notify.error(error.message);
    else { notify.success('Cours supprimé'); fetchCourses(); }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <AdminPageHeader
        title="Gestion des cours"
        description={`${filtered.length} cours${filtered.length > 1 ? '' : ''}`}
        actions={<Button onClick={openCreate} className="gap-2"><Plus className="h-4 w-4" /> Nouveau cours</Button>}
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Rechercher titre ou code..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
        </div>
        <Select value={levelFilter} onValueChange={setLevelFilter}>
          <SelectTrigger className="w-full sm:w-36"><SelectValue placeholder="Niveau" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous niveaux</SelectItem>
            {LEVELS.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-40"><SelectValue placeholder="Statut" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous</SelectItem>
            <SelectItem value="published">Publiés</SelectItem>
            <SelectItem value="draft">Brouillons</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-48 w-full rounded-xl" />)}
        </div>
      ) : filtered.length === 0 ? (
        <EmptyState
          icon={BookOpen}
          title="Aucun cours"
          description={search || levelFilter !== 'all' || statusFilter !== 'all'
            ? 'Essayez d\'ajuster vos filtres.'
            : 'Créez votre premier cours pour démarrer.'}
          action={{ label: 'Créer un cours', onClick: openCreate }}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((c) => (
            <Card key={c.id} className="group overflow-hidden transition-all hover:shadow-md hover:-translate-y-0.5">
              <div className="relative aspect-video bg-gradient-to-br from-primary/15 via-primary/5 to-cia-gold/15 flex items-center justify-center">
                {c.image_url ? (
                  <img src={c.image_url} alt={c.title} className="h-full w-full object-cover" loading="lazy" />
                ) : (
                  <BookOpen className="h-10 w-10 text-primary/40" />
                )}
                <div className="absolute top-2 right-2 flex gap-1.5">
                  <Badge variant={c.is_published ? 'default' : 'secondary'} className={c.is_published ? 'bg-cia-success' : ''}>
                    {c.is_published ? 'Publié' : 'Brouillon'}
                  </Badge>
                  {c.is_free && <Badge variant="outline" className="bg-background/90">Gratuit</Badge>}
                </div>
                <div className="absolute top-2 left-2">
                  <Badge variant="outline" className="bg-background/90 font-mono text-[10px]">{c.code}</Badge>
                </div>
              </div>
              <CardContent className="p-4 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display font-semibold leading-tight line-clamp-2 flex-1">{c.title}</h3>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-7 w-7 -mr-1 -mt-1 shrink-0">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => openEdit(c)}>
                        <Edit className="h-4 w-4 mr-2" /> Modifier
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => togglePublish(c)}>
                        {c.is_published
                          ? <><EyeOff className="h-4 w-4 mr-2" /> Dépublier</>
                          : <><Eye className="h-4 w-4 mr-2" /> Publier</>}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => deleteCourse(c.id)} className="text-destructive">
                        <Trash2 className="h-4 w-4 mr-2" /> Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 min-h-[2rem]">
                  {c.description || 'Aucune description'}
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <Badge variant="outline">{c.level}</Badge>
                  <span className="text-xs text-muted-foreground truncate">{c.theme}</span>
                  <span className="ml-auto inline-flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                    <Clock className="h-3 w-3" /> {c.duration_minutes ?? 0}min
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Create/Edit dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{editingCourse ? 'Modifier le cours' : 'Nouveau cours'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label>Code *</Label>
                <Input placeholder="B1-VOC-012" value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Durée (min)</Label>
                <Input type="number" value={form.duration_minutes} onChange={(e) => setForm({ ...form, duration_minutes: +e.target.value })} />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Titre *</Label>
              <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label>Niveau</Label>
                <Select value={form.level} onValueChange={(v) => setForm({ ...form, level: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>{LEVELS.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Thème</Label>
                <Select value={form.theme} onValueChange={(v) => setForm({ ...form, theme: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>{THEMES.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Switch checked={form.is_free} onCheckedChange={(v) => setForm({ ...form, is_free: v })} />
              <Label>Cours gratuit (accessible sans abonnement)</Label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Annuler</Button>
            <Button onClick={handleSave}>{editingCourse ? 'Enregistrer' : 'Créer'}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
