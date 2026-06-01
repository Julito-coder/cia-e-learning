import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Flame, ArrowRight, Check } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { StreakFlame } from '@/components/gamification/StreakFlame';

interface Props {
  streak: number;
  isDoneToday: boolean;
  loading?: boolean;
}

export function DailyChallengeCard({ streak, isDoneToday, loading }: Props) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.12 }}
      className="h-full"
    >
      <Card
        variant={isDoneToday ? 'default' : 'gradient'}
        tone="gold"
        className="p-6 md:p-7 h-full flex flex-col gap-4"
      >
        <div className="flex items-center justify-between gap-2">
          <Badge variant={isDoneToday ? 'success' : 'gold'} className="gap-1.5">
            <Flame className="h-3 w-3" />
            {t('dashboard.daily.tag')}
          </Badge>
          {streak > 0 && (
            <div className="inline-flex items-center gap-1 text-sm font-bold">
              <StreakFlame streak={streak} animateOnChange={false} />
              <span className="tabular-nums">{streak}</span>
            </div>
          )}
        </div>

        <div className="flex-1">
          <h3 className="font-display font-bold text-lg md:text-xl">
            {isDoneToday ? t('dashboard.daily.done_title') : t('dashboard.daily.todo_title')}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {isDoneToday ? t('dashboard.daily.done_desc') : t('dashboard.daily.todo_desc')}
          </p>
        </div>

        {isDoneToday ? (
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-success-700 dark:text-success-500">
            <Check className="h-4 w-4" />
            {t('dashboard.daily.completed_label')}
          </div>
        ) : (
          <Button asChild variant="gold" size="lg" className="self-start gap-2 group" disabled={loading}>
            <Link to="/defi-du-jour">
              {t('dashboard.daily.cta')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        )}
      </Card>
    </motion.div>
  );
}
