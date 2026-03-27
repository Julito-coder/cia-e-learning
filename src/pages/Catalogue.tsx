import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { CourseCard } from '@/components/courses/CourseCard';
import { demoCourses, CECR_LEVELS, COURSE_THEMES, type CECRLevel, type CourseTheme } from '@/data/demo-courses';
import { useFavorites } from '@/hooks/useFavorites';
import { useUserProgress } from '@/hooks/useUserProgress';

const levelEmojis: Record<string, string> = { A0: '🌰', A1: '🌱', A2: '🌿', B1: '🌊', B2: '⚡', C1: '🔥', C2: '👑' };

export default function Catalogue() {
  const { t } = useTranslation();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const isFavoritesPage = location.pathname === '/favoris';
  const [search, setSearch] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<CECRLevel | null>(
    (searchParams.get('level') as CECRLevel) || null
  );
  const [selectedTheme, setSelectedTheme] = useState<CourseTheme | null>(null);
  const [showNew, setShowNew] = useState(false);
  const { favorites, toggleFavorite } = useFavorites();
  const { cecrLevel } = useUserProgress();

  const filteredCourses = useMemo(() => {
    return demoCourses.filter((course) => {
      if (isFavoritesPage && !favorites.has(course.id)) return false;
      if (search && !course.title.toLowerCase().includes(search.toLowerCase()) && !course.code.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedLevel && course.level !== selectedLevel) return false;
      if (selectedTheme && course.theme !== selectedTheme) return false;
      if (showNew && !course.isNew) return false;
      return true;
    });
  }, [search, selectedLevel, selectedTheme, showNew, isFavoritesPage, favorites]);

  const hasFilters = selectedLevel || selectedTheme || showNew;

  return (
    <div className="container py-8 animate-fade-in pb-24 md:pb-8">
      <div className="mb-6">
        <h1 className="font-display text-3xl mb-1">
          {isFavoritesPage ? t('nav.favorites') : t('catalogue.title')}
        </h1>
        <p className="text-muted-foreground font-semibold">
          {isFavoritesPage
            ? `${favorites.size} cours en favoris`
            : t('catalogue.subtitle', { count: demoCourses.length })}
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={t('catalogue.search')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-11 h-12 rounded-2xl border-2 text-sm font-semibold"
        />
      </div>

      {!isFavoritesPage && (
        <>
          {/* Level chips */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-3 scrollbar-hide">
            {CECR_LEVELS.filter(l => l.value !== 'A0').map((level) => (
              <button
                key={level.value}
                onClick={() => setSelectedLevel(selectedLevel === level.value ? null : level.value)}
                className={`chip-filter whitespace-nowrap ${selectedLevel === level.value ? 'chip-active' : ''}`}
              >
                {levelEmojis[level.value]} {level.value}
              </button>
            ))}
          </div>

          {/* Theme chips */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-3 scrollbar-hide">
            {COURSE_THEMES.map((theme) => (
              <button
                key={theme}
                onClick={() => setSelectedTheme(selectedTheme === theme ? null : theme)}
                className={`chip-filter whitespace-nowrap text-xs ${selectedTheme === theme ? 'chip-active' : ''}`}
              >
                {theme}
              </button>
            ))}
          </div>

          {/* Extra filters */}
          <div className="flex gap-2 mb-5">
            <button
              onClick={() => setShowNew(!showNew)}
              className={`chip-filter text-xs ${showNew ? 'chip-active' : ''}`}
            >
              {t('catalogue.newFilter')}
            </button>
            {hasFilters && (
              <button
                onClick={() => { setSelectedLevel(null); setSelectedTheme(null); setShowNew(false); }}
                className="chip-filter text-xs !border-destructive/30 !text-destructive hover:!bg-destructive/5"
              >
                <X className="h-3 w-3" /> {t('catalogue.reset')}
              </button>
            )}
          </div>
        </>
      )}

      {/* Results */}
      {filteredCourses.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">{isFavoritesPage ? '❤️' : '🔍'}</div>
          <p className="text-lg font-bold text-muted-foreground mb-1">
            {isFavoritesPage ? 'Aucun cours en favoris' : t('catalogue.noResults')}
          </p>
          <p className="text-sm text-muted-foreground">
            {isFavoritesPage ? 'Ajoutez des cours en favoris depuis le catalogue' : t('catalogue.noResultsHint')}
          </p>
        </div>
      ) : (
        <>
          <p className="text-xs text-muted-foreground font-bold mb-4">{t('catalogue.results', { count: filteredCourses.length })}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredCourses.map((course, i) => (
              <div key={course.id} className="animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                <CourseCard
                  course={course}
                  isFavorite={favorites.has(course.id)}
                  onToggleFavorite={toggleFavorite}
                  userLevel={cecrLevel}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
