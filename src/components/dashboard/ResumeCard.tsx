import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Play, RotateCcw, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import type { LastLessonView } from '@/hooks/useLastLessonOpened';
import { readCoursePlayerProgress } from '@/lib/courseProgress';

interface Props {
  lastLesson: LastLessonView | null;
}

export function ResumeCard({ lastLesson }: Props) {
  const { t } = useTranslation();

  if (!lastLesson) {
    // New learner empty state — CTA to placement test
    return (
      <Card variant="elevated" tone="blue" className="p-7 md:p-8 h-full flex flex-col gap-4">
        <p className="font-mono text-[11px] uppercase tracking-wider text-cia-blue-500">
          {t('dashboard.resume.tag_start')}
        </p>
        <div className="flex-1">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-cia-blue-900 dark:text-foreground">
            {t('dashboard.resume.empty_title')}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {t('dashboard.resume.empty_desc')}
          </p>
        </div>
        <Button asChild variant="gradient" size="lg" className="self-start gap-2 group">
          <Link to="/test-niveau">
            <Sparkles className="h-4 w-4" />
            {t('dashboard.resume.empty_cta')}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </Card>
    );
  }

  // Compute lesson-internal progress (steps / totalQuestions)
  const playerProgress = readCoursePlayerProgress(lastLesson.courseId);
  const totalQuestions = playerProgress?.totalQuestions ?? 0;
  const step = playerProgress?.step ?? 0;
  const progressPct = lastLesson.completed
    ? 100
    : totalQuestions > 0
      ? Math.min(100, Math.round((step / Math.max(totalQuestions, 1)) * 100))
      : 0;

  const ctaLabel = lastLesson.completed
    ? t('dashboard.resume.replay')
    : progressPct > 0
      ? t('dashboard.resume.continue')
      : t('dashboard.resume.start');

  const Icon = lastLesson.completed ? RotateCcw : Play;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.08 }}
    >
      <Card variant="elevated" tone="blue" className="p-7 md:p-8 h-full flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <p className="font-mono text-[11px] uppercase tracking-wider text-cia-blue-500">
            {t('dashboard.resume.tag_resume')}
          </p>
          {lastLesson.level && (
            <Badge variant="level" className="shrink-0">
              {lastLesson.level}
            </Badge>
          )}
        </div>

        <div className="flex-1">
          <h2 className="font-display font-extrabold text-xl md:text-2xl leading-snug">
            {lastLesson.title}
          </h2>
          {lastLesson.moduleId && (
            <p className="mt-1 text-sm text-muted-foreground">
              {t('dashboard.resume.module_label')} {lastLesson.moduleId}
            </p>
          )}
        </div>

        {progressPct > 0 && !lastLesson.completed && (
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs text-muted-foreground">
              <span>{t('dashboard.resume.progress_label')}</span>
              <span className="tabular-nums font-semibold text-foreground">{progressPct}%</span>
            </div>
            <Progress value={progressPct} className="h-2" />
          </div>
        )}

        {lastLesson.completed && lastLesson.score != null && (
          <div className="inline-flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">{t('dashboard.resume.score_label')}</span>
            <span className="tabular-nums font-bold text-success-600">{lastLesson.score}/100</span>
          </div>
        )}

        <Button asChild variant="gradient" size="lg" className="self-start gap-2 group">
          <Link to={`/cours/${lastLesson.courseId}`}>
            <Icon className="h-4 w-4" />
            {ctaLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </Card>
    </motion.div>
  );
}
