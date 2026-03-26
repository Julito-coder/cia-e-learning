import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Plus, Edit, Eye, EyeOff, Trash2, Search } from 'lucide-react';
import { toast } from 'sonner';

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
  created_at: string;
}

const emptyCourse = { code: '', title: '', description: '', level: 'A1', theme: 'Grammaire', duration_minutes: 20, is_free: false };

export default function AdminCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Partial<Course> | null>(null);
  const [form, setForm] = useState(emptyCourse);

  const fetchCourses = async () => {
    setLoading(true);
    const { data } = await supabase.from('courses').select('*').order('created_at', { ascending: false });
    setCourses(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchCourses(); }, []);

  const filtered = courses.filter((c) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return c.title.toLowerCase().includes(s) || c.code.toLowerCase().includes(s);
  });

  const openCreate = () => {
    setEditingCourse(null);
    setForm(emptyCourse);
    setDialogOpen(true);
  };

  const openEdit = (course: Course) => {
    setEditingCourse(course);
    setForm({
      code: course.code,
      title: course.title,
      description: course.description || '',
      level: course.level,
      theme: course.theme,
      duration_minutes: course.duration_minutes || 20,
      is_free: course.is_free || false,
    });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.code || !form.title) { toast.error('Code et titre requis'); return; }
    if (editingCourse?.id) {
      const { error } = await supabase.from('courses').update({
        code: form.code, title: form.title, description: form.description,
        level: form.level, theme: form.theme, duration_minutes: form.duration_minutes, is_free: form.is_free,
      }).eq('id', editingCourse.id);
      if (error) toast.error(error.message);
      else toast.success('Cours modifié');
    } else {
      const { error } = await supabase.from('courses').insert({
        code: form.code, title: form.title, description: form.description,
        level: form.level, theme: form.theme, duration_minutes: form.duration_minutes, is_free: form.is_free,
      });
      if (error) toast.error(error.message);
      else toast.success('Cours créé');
    }
    setDialogOpen(false);
    fetchCourses();
  };

  const togglePublish = async (course: Course) => {
    const { error } = await supabase.from('courses').update({ is_published: !course.is_published }).eq('id', course.id);
    if (error) toast.error(error.message);
    else {
      toast.success(course.is_published ? 'Cours dépublié' : 'Cours publié');
      fetchCourses();
    }
  };

  const deleteCourse = async (id: string) => {
    if (!confirm('Supprimer ce cours ?')) return;
    const { error } = await supabase.from('courses').delete().eq('id', id);
    if (error) toast.error(error.message);
    else { toast.success('Cours supprimé'); fetchCourses(); }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold">Gestion des cours</h1>
        <Button onClick={openCreate} className="gap-2"><Plus className="h-4 w-4" /> Nouveau cours</Button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Rechercher un cours..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Titre</TableHead>
                <TableHead>Niveau</TableHead>
                <TableHead>Thème</TableHead>
                <TableHead>Durée</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Gratuit</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow><TableCell colSpan={8} className="text-center py-8 text-muted-foreground">Chargement...</TableCell></TableRow>
              ) : filtered.length === 0 ? (
                <TableRow><TableCell colSpan={8} className="text-center py-8 text-muted-foreground">Aucun cours</TableCell></TableRow>
              ) : (
                filtered.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell className="font-mono text-sm">{c.code}</TableCell>
                    <TableCell className="font-medium max-w-[200px] truncate">{c.title}</TableCell>
                    <TableCell><Badge variant="outline">{c.level}</Badge></TableCell>
                    <TableCell className="text-sm">{c.theme}</TableCell>
                    <TableCell>{c.duration_minutes} min</TableCell>
                    <TableCell>
                      <Badge variant={c.is_published ? 'default' : 'secondary'} className={c.is_published ? 'bg-cia-success' : ''}>
                        {c.is_published ? 'Publié' : 'Brouillon'}
                      </Badge>
                    </TableCell>
                    <TableCell>{c.is_free ? '✓' : '—'}</TableCell>
                    <TableCell className="text-right space-x-1">
                      <Button variant="ghost" size="icon" onClick={() => togglePublish(c)} title={c.is_published ? 'Dépublier' : 'Publier'}>
                        {c.is_published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => openEdit(c)}><Edit className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" onClick={() => deleteCourse(c.id)} className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

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
            <Button className="w-full" onClick={handleSave}>
              {editingCourse ? 'Enregistrer les modifications' : 'Créer le cours'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <p className="text-sm text-muted-foreground">{filtered.length} cours</p>
    </div>
  );
}
