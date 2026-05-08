import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CourseCard, type CourseCardProps } from '@/components/courses/CourseCard';
import { EmptyState } from '@/components/states/EmptyState';
import { staggerContainer, staggerItem, slideUp } from '@/lib/animations';
import { curriculum } from '@/data/curriculum';
import { useUserProgress, isLevelAccessible } from '@/hooks/useUserProgress';
import type { CECRLevel } from '@/data/demo-courses';

const LEVELS = ['all', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
type LevelFilter = typeof LEVELS[number];
type StatusFilter = 'all' | 'free' | 'premium' | 'in_progress' | 'completed';
type SortBy = 'level_asc' | 'level_desc' | 'duration_asc' | 'xp_desc' | 'alpha';

export default function Catalogue() {
  const { t } = useTranslation();
  const { cecrLevel } = useUserProgress();
  const [search, setSearch] = useState('');
  const [levelFilter, setLevelFilter] = useState<LevelFilter>('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [sortBy, setSortBy] = useState<SortBy>('level_asc');
  const [showFilters, setShowFilters] = useState(false);

  const allCourses = useMemo<CourseCardProps[]>(() => {
    const out: CourseCardProps[] = [];
    curriculum.forEach((lvl) => {
      lvl.modules.forEach((mod) => {
        const totalLessons = mod.lessons?.length ?? 0;
        const isFree = lvl.level === 'A1';
        out.push({
          id: mod.id,
          title: mod.title,
          description: mod.theme,
          level: lvl.level,
          theme: mod.theme,
          durationMinutes: totalLessons * 12,
          totalLessons,
          xpReward: totalLessons * 50,
          isFree,
          isLocked: !isLevelAccessible(lvl.level, cecrLevel),
          progress: 0,
        });
      });
    });
    return out;
  }, [cecrLevel]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let r = allCourses.filter((c) => {
      if (levelFilter !== 'all' && c.level !== levelFilter) return false;
      if (statusFilter === 'free' && !c.isFree) return false;
      if (statusFilter === 'premium' && c.isFree) return false;
      if (statusFilter === 'in_progress' && !((c.progress ?? 0) > 0 && (c.progress ?? 0) < 100)) return false;
      if (statusFilter === 'completed' && c.progress !== 100) return false;
      if (q && !(c.title.toLowerCase().includes(q) || c.theme?.toLowerCase().includes(q))) return false;
      return true;
    });
    const order: Record<string, number> = { A1: 0, A2: 1, B1: 2, B2: 3, C1: 4, C2: 5 };
    r = [...r].sort((a, b) => {
      switch (sortBy) {
        case 'level_asc':    return (order[a.level] ?? 0) - (order[b.level] ?? 0);
        case 'level_desc':   return (order[b.level] ?? 0) - (order[a.level] ?? 0);
        case 'duration_asc': return (a.durationMinutes ?? 0) - (b.durationMinutes ?? 0);
        case 'xp_desc':      return (b.xpReward ?? 0) - (a.xpReward ?? 0);
        case 'alpha':        return a.title.localeCompare(b.title);
      }
    });
    return r;
  }, [allCourses, search, levelFilter, statusFilter, sortBy]);

  const activeFilters = [
    levelFilter !== 'all' && { key: 'level', label: levelFilter, reset: () => setLevelFilter('all') },
    statusFilter !== 'all' && { key: 'status', label: t(`catalogue.status.${statusFilter}`), reset: () => setStatusFilter('all') },
  ].filter(Boolean) as { key: string; label: string; reset: () => void }[];

  return (
    <motion.div initial="hidden" animate="visible" variants={slideUp} className="container py-8 pb-24 md:pb-8">
      <header className="mb-6">
        <h1 className="font-display text-3xl mb-1">{t('catalogue.title')}</h1>
        <p className="text-muted-foreground font-semibold">{t('catalogue.subtitle', { level: cecrLevel })}</p>
      </header>

      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t('catalogue.search_placeholder')}
            className="pl-9 h-11"
          />
        </div>
        <Button variant="outline" onClick={() => setShowFilters((s) => !s)} className="md:hidden gap-2">
          <SlidersHorizontal className="h-4 w-4" /> {t('catalogue.filters')}
        </Button>
        <div className="hidden md:flex gap-2">
          <Select value={levelFilter} onValueChange={(v) => setLevelFilter(v as LevelFilter)}>
            <SelectTrigger className="w-[160px] h-11"><SelectValue /></SelectTrigger>
            <SelectContent>
              {LEVELS.map((l) => <SelectItem key={l} value={l}>{l === 'all' ? t('catalogue.all_levels') : l}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={(v) => setStatusFilter(v as StatusFilter)}>
            <SelectTrigger className="w-[160px] h-11"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('catalogue.status.all')}</SelectItem>
              <SelectItem value="free">{t('catalogue.status.free')}</SelectItem>
              <SelectItem value="premium">{t('catalogue.status.premium')}</SelectItem>
              <SelectItem value="in_progress">{t('catalogue.status.in_progress')}</SelectItem>
              <SelectItem value="completed">{t('catalogue.status.completed')}</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortBy)}>
            <SelectTrigger className="w-[200px] h-11"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="level_asc">{t('catalogue.sort.level_asc')}</SelectItem>
              <SelectItem value="level_desc">{t('catalogue.sort.level_desc')}</SelectItem>
              <SelectItem value="duration_asc">{t('catalogue.sort.duration_asc')}</SelectItem>
              <SelectItem value="xp_desc">{t('catalogue.sort.xp_desc')}</SelectItem>
              <SelectItem value="alpha">{t('catalogue.sort.alpha')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {showFilters && (
        <div className="md:hidden grid grid-cols-1 gap-2 mb-4">
          <Select value={levelFilter} onValueChange={(v) => setLevelFilter(v as LevelFilter)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {LEVELS.map((l) => <SelectItem key={l} value={l}>{l === 'all' ? t('catalogue.all_levels') : l}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={(v) => setStatusFilter(v as StatusFilter)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('catalogue.status.all')}</SelectItem>
              <SelectItem value="free">{t('catalogue.status.free')}</SelectItem>
              <SelectItem value="premium">{t('catalogue.status.premium')}</SelectItem>
              <SelectItem value="in_progress">{t('catalogue.status.in_progress')}</SelectItem>
              <SelectItem value="completed">{t('catalogue.status.completed')}</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortBy)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="level_asc">{t('catalogue.sort.level_asc')}</SelectItem>
              <SelectItem value="level_desc">{t('catalogue.sort.level_desc')}</SelectItem>
              <SelectItem value="duration_asc">{t('catalogue.sort.duration_asc')}</SelectItem>
              <SelectItem value="xp_desc">{t('catalogue.sort.xp_desc')}</SelectItem>
              <SelectItem value="alpha">{t('catalogue.sort.alpha')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {activeFilters.map((f) => (
            <button key={f.key} onClick={f.reset}>
              <Badge variant="secondary" className="gap-1 cursor-pointer hover:bg-secondary/70">
                {f.label} <X className="h-3 w-3" />
              </Badge>
            </button>
          ))}
          {activeFilters.length > 1 && (
            <button
              onClick={() => { setLevelFilter('all'); setStatusFilter('all'); setSearch(''); }}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors font-semibold"
            >
              {t('catalogue.clear_all')}
            </button>
          )}
        </div>
      )}

      <p className="text-xs text-muted-foreground font-bold mb-4">{t('catalogue.results_count', { count: filtered.length })}</p>

      {filtered.length === 0 ? (
        <EmptyState
          icon={Search}
          title={t('catalogue.empty_title')}
          description={t('catalogue.empty_subtitle')}
          action={
            activeFilters.length > 0 || search
              ? {
                  label: t('catalogue.clear_all'),
                  onClick: () => {
                    setLevelFilter('all');
                    setStatusFilter('all');
                    setSearch('');
                  },
                }
              : undefined
          }
        />
      ) : (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filtered.map((course) => (
            <motion.div key={course.id} variants={staggerItem}>
              <CourseCard {...course} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
