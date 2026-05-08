import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { useAchievements } from '@/hooks/useAchievements';
import { AchievementCard } from './AchievementCard';
import { AchievementDetailModal } from './AchievementDetailModal';
import type { Achievement } from '@/data/achievements';

type Filter = 'all' | 'unlocked' | 'locked';

export function AchievementsShowcase() {
  const { t } = useTranslation();
  const { achievements, unlocked } = useAchievements();
  const [filter, setFilter] = useState<Filter>('all');
  const [selected, setSelected] = useState<Achievement | null>(null);

  const unlockedSet = useMemo(() => new Set(unlocked.map((a) => a.id)), [unlocked]);

  const visible = useMemo(() => {
    if (filter === 'unlocked') return achievements.filter((a) => unlockedSet.has(a.id));
    if (filter === 'locked')   return achievements.filter((a) => !unlockedSet.has(a.id));
    return achievements;
  }, [achievements, unlockedSet, filter]);

  const total = achievements.length;
  const done = unlocked.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <div className="flex items-baseline justify-between">
          <p className="text-sm font-bold">
            {t('profile.achievements.unlockedCount', { done, total })}
          </p>
          <span className="text-xs text-muted-foreground tabular-nums">{pct}%</span>
        </div>
        <Progress value={pct} className="h-2" />
      </div>

      <Tabs value={filter} onValueChange={(v) => setFilter(v as Filter)}>
        <TabsList className="rounded-xl">
          <TabsTrigger value="all"      className="rounded-lg">{t('profile.achievements.all')}</TabsTrigger>
          <TabsTrigger value="unlocked" className="rounded-lg">{t('profile.achievements.unlocked')}</TabsTrigger>
          <TabsTrigger value="locked"   className="rounded-lg">{t('profile.achievements.locked')}</TabsTrigger>
        </TabsList>
      </Tabs>

      {visible.length === 0 ? (
        <p className="py-10 text-center text-sm text-muted-foreground">
          {t('profile.achievements.empty')}
        </p>
      ) : (
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.04 } } }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {visible.map((a) => (
            <AchievementCard
              key={a.id}
              achievement={a}
              unlocked={unlockedSet.has(a.id)}
              onClick={() => setSelected(a)}
            />
          ))}
        </motion.div>
      )}

      <AchievementDetailModal
        achievement={selected}
        unlocked={selected ? unlockedSet.has(selected.id) : false}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}