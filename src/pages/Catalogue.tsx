import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CourseCard } from '@/components/courses/CourseCard';
import { demoCourses, CECR_LEVELS, COURSE_THEMES, type CECRLevel, type CourseTheme } from '@/data/demo-courses';

export default function Catalogue() {
  const [search, setSearch] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<CECRLevel | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<CourseTheme | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [showFilters, setShowFilters] = useState(false);

  const filteredCourses = useMemo(() => {
    return demoCourses.filter((course) => {
      if (search && !course.title.toLowerCase().includes(search.toLowerCase()) && !course.code.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedLevel && course.level !== selectedLevel) return false;
      if (selectedTheme && course.theme !== selectedTheme) return false;
      if (showNew && !course.isNew) return false;
      return true;
    });
  }, [search, selectedLevel, selectedTheme, showNew]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const hasFilters = selectedLevel || selectedTheme || showNew;

  return (
    <div className="container py-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold mb-2">Catalogue des cours</h1>
        <p className="text-muted-foreground">
          {demoCourses.length} cours disponibles — du niveau A1 au C2
        </p>
      </div>

      {/* Search & filter bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher un cours, un code (ex: B1-VOC-012)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button
          variant={showFilters ? 'default' : 'outline'}
          onClick={() => setShowFilters(!showFilters)}
          className="gap-2 sm:w-auto w-full"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filtres
          {hasFilters && (
            <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 justify-center rounded-full text-[10px]">
              {[selectedLevel, selectedTheme, showNew].filter(Boolean).length}
            </Badge>
          )}
        </Button>
      </div>

      {/* Filters panel */}
      {showFilters && (
        <div className="bg-card border rounded-lg p-4 mb-6 space-y-4 animate-fade-in">
          <div>
            <p className="text-sm font-medium mb-2">Niveau CECRL</p>
            <div className="flex flex-wrap gap-2">
              {CECR_LEVELS.map((level) => (
                <Button
                  key={level.value}
                  variant={selectedLevel === level.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedLevel(selectedLevel === level.value ? null : level.value)}
                >
                  {level.value}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium mb-2">Thème</p>
            <div className="flex flex-wrap gap-2">
              {COURSE_THEMES.map((theme) => (
                <Button
                  key={theme}
                  variant={selectedTheme === theme ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedTheme(selectedTheme === theme ? null : theme)}
                >
                  {theme}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant={showNew ? 'default' : 'outline'}
              size="sm"
              onClick={() => setShowNew(!showNew)}
            >
              🆕 Nouveautés uniquement
            </Button>
            {hasFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => { setSelectedLevel(null); setSelectedTheme(null); setShowNew(false); }}
                className="text-destructive gap-1"
              >
                <X className="h-3 w-3" /> Réinitialiser
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Results */}
      {filteredCourses.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground mb-2">Aucun cours trouvé</p>
          <p className="text-sm text-muted-foreground">Essayez de modifier vos critères de recherche.</p>
        </div>
      ) : (
        <>
          <p className="text-sm text-muted-foreground mb-4">{filteredCourses.length} résultat(s)</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                isFavorite={favorites.has(course.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
