import { useState } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { LevelBadge } from '@/components/courses/LevelBadge';
import { demoGlossary } from '@/data/demo-courses';

export default function Glossaire() {
  const [search, setSearch] = useState('');

  const filtered = demoGlossary.filter(
    (t) =>
      t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.definition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold mb-2">Glossaire</h1>
        <p className="text-muted-foreground">Termes et définitions clés du français langue étrangère.</p>
      </div>

      <div className="relative max-w-md mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Rechercher un terme..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="space-y-3">
        {filtered.map((term) => (
          <Card key={term.id}>
            <CardContent className="p-4 flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display font-semibold">{term.term}</h3>
                  <LevelBadge level={term.level} />
                </div>
                <p className="text-sm text-muted-foreground">{term.definition}</p>
              </div>
            </CardContent>
          </Card>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-8">Aucun terme trouvé.</p>
        )}
      </div>
    </div>
  );
}
