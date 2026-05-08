import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { staggerContainer, staggerItem, slideUp } from '@/lib/animations';
import { glossary, type GlossaryEntry } from '@/data/glossary';

const LEVELS = ['all', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
const CATEGORIES = ['all', 'verbe', 'nom', 'adjectif', 'adverbe', 'expression', 'grammaire'] as const;
type LevelFilter = typeof LEVELS[number];
type CategoryFilter = typeof CATEGORIES[number];

export default function Glossaire() {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [levelFilter, setLevelFilter] = useState<LevelFilter>('all');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return glossary
      .filter((e) => {
        if (levelFilter !== 'all' && e.level !== levelFilter) return false;
        if (categoryFilter !== 'all' && e.category !== categoryFilter) return false;
        if (q) {
          const m =
            e.term.toLowerCase().includes(q) ||
            e.translation_en.toLowerCase().includes(q) ||
            e.definition_fr.toLowerCase().includes(q);
          if (!m) return false;
        }
        return true;
      })
      .sort((a, b) => a.term.localeCompare(b.term, 'fr'));
  }, [search, levelFilter, categoryFilter]);

  const grouped = useMemo(() => {
    const groups: Record<string, GlossaryEntry[]> = {};
    filtered.forEach((e) => {
      const letter = e.term[0].toUpperCase();
      (groups[letter] ||= []).push(e);
    });
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <motion.div initial="hidden" animate="visible" variants={slideUp} className="container py-8 pb-24 md:pb-8 max-w-5xl">
      <header className="mb-6">
        <h1 className="font-display text-3xl mb-1">{t('glossary.title')}</h1>
        <p className="text-muted-foreground font-semibold">{t('glossary.subtitle')}</p>
      </header>

      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t('glossary.search_placeholder')}
            className="pl-9 h-11"
          />
        </div>
        <Select value={levelFilter} onValueChange={(v) => setLevelFilter(v as LevelFilter)}>
          <SelectTrigger className="md:w-[160px] h-11"><SelectValue /></SelectTrigger>
          <SelectContent>
            {LEVELS.map((l) => (
              <SelectItem key={l} value={l}>{l === 'all' ? t('catalogue.all_levels') : l}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={categoryFilter} onValueChange={(v) => setCategoryFilter(v as CategoryFilter)}>
          <SelectTrigger className="md:w-[200px] h-11"><SelectValue /></SelectTrigger>
          <SelectContent>
            {CATEGORIES.map((c) => (
              <SelectItem key={c} value={c}>
                {c === 'all' ? t('glossary.all_categories') : t(`glossary.categories.${c}`)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <p className="text-xs text-muted-foreground font-bold mb-6">
        {t('glossary.results_count', { count: filtered.length })}
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">📚</div>
          <p className="text-lg font-bold text-muted-foreground mb-1">{t('glossary.empty_title')}</p>
          <p className="text-sm text-muted-foreground">{t('glossary.empty_subtitle')}</p>
        </div>
      ) : (
        <div className="space-y-8">
          {grouped.map(([letter, entries]) => (
            <section key={letter}>
              <div className="sticky top-16 z-10 -mx-2 px-2 py-2 mb-3 bg-background/80 backdrop-blur-sm flex items-baseline gap-3 border-b border-border">
                <div className="h-9 w-9 rounded-lg bg-cia-blue-500 text-white grid place-items-center font-display text-lg font-extrabold shadow-sm">
                  {letter}
                </div>
                <p className="text-xs text-muted-foreground font-semibold">
                  {entries.length} {entries.length > 1 ? t('glossary.entries') : t('glossary.entry')}
                </p>
              </div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-3"
              >
                {entries.map((e) => (
                  <motion.div key={e.id} variants={staggerItem}>
                    <Card className="p-4 h-full hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-display text-lg font-extrabold leading-tight">{e.term}</h3>
                        <div className="flex gap-1.5 flex-wrap shrink-0">
                          <Badge variant="level">{e.level}</Badge>
                          <Badge variant="secondary" className="text-[10px]">
                            {t(`glossary.categories.${e.category}`)}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground italic mb-1.5">→ {e.translation_en}</p>
                      <p className="text-sm leading-relaxed">{e.definition_fr}</p>
                      {e.example && (
                        <p className="text-xs text-muted-foreground italic mt-2 pl-3 border-l-2 border-cia-gold-300">
                          {e.example}
                        </p>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          ))}
        </div>
      )}
    </motion.div>
  );
}
