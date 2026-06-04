import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
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

const HOVER = { y: -4, scale: 1.005 };
const TAP = { scale: 0.98 };

export function DailyChallengeCard({ streak, isDoneToday, loading }: Props) {
  const { t } = useTranslation();
  const reduced = useReducedMotion();
  const hoverProps = reduced ? {} : { whileHover: HOVER, whileTap: TAP };

  return (
    <motion.div
      {...hoverProps}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="h-full"
    >
      <Card className="shadow-elev-lg p-6 md:p-7 h-full flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <Badge variant={isDoneToday ? 'success' : 'default'} className="gap-1.5">
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
          /* Ghost CTA — charte v2 §3 : secondaire pour ne pas concurrencer le
             primaire bleu de ResumeCard. Bordure ink-200, hover spark-mid,
             pas de 3D, pas de doré. */
          <Button
            asChild
            variant="outline"
            className="self-start gap-2 group h-12 border-ink-200 hover:border-cia-spark-mid hover:bg-cia-blue-50/40 text-cia-blue-700 dark:text-cia-blue-300"
            disabled={loading}
          >
            <Link to="/defi-du-jour">
              {t('dashboard.daily.cta')}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
            </Link>
          </Button>
        )}
      </Card>
    </motion.div>
  );
}
