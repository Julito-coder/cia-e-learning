import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Sparkles, Trophy, ArrowRight, RotateCcw } from 'lucide-react';
import type { CourseContent, CourseStep } from '@/data/course-content';
import { LessonStep } from './LessonStep';
import { QCMStep } from './QCMStep';
import { FillBlankStep } from './FillBlankStep';
import { DragDropStep } from './DragDropStep';
import { FlashcardStep } from './FlashcardStep';
import { ListeningStep } from './ListeningStep';
import { FinalQuizStep } from './FinalQuizStep';
import { readCoursePlayerProgress, writeCoursePlayerProgress, clearCoursePlayerProgress } from '@/lib/courseProgress';
import { SparkPresence } from '@/components/spark';
import type { SparkMood } from '@/components/spark/Spark';
import { useUserProgress } from '@/hooks/useUserProgress';

interface Props {
  content: CourseContent;
  courseTitle: string;
  onExit: () => void;
  onComplete: (score: number) => void;
}

interface SavedProgress {
  step: number;
  correctCount: number;
  totalQuestions: number;
}

function loadProgress(courseId: string): SavedProgress {
  const parsed = readCoursePlayerProgress(courseId);
  if (parsed) {
    return {
      step: parsed.step ?? 0,
      correctCount: parsed.correctCount ?? 0,
      totalQuestions: parsed.totalQuestions ?? 0,
    };
  }
  return { step: 0, correctCount: 0, totalQuestions: 0 };
}

function saveProgress(courseId: string, progress: SavedProgress) {
  writeCoursePlayerProgress(courseId, progress);
}

export function CoursePlayer({ content, courseTitle, onExit, onComplete }: Props) {
  const { t } = useTranslation();
  const { cecrLevel } = useUserProgress();
  const saved = loadProgress(content.courseId);
  const [currentStep, setCurrentStep] = useState(Math.min(saved.step, content.steps.length - 1));
  const [correctCount, setCorrectCount] = useState(saved.correctCount);
  const [totalQuestions, setTotalQuestions] = useState(saved.totalQuestions);
  const [completed, setCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [startedAt] = useState(() => Date.now());
  const [durationSeconds, setDurationSeconds] = useState(0);
  const [mascotMood, setMascotMood] = useState<SparkMood>('idle');

  const step = content.steps[currentStep];
  const totalSteps = content.steps.length;
  const progressPct = completed
    ? 100
    : ((currentStep + (totalQuestions > 0 ? 0.5 : 0)) / totalSteps) * 100;
  const xpPreview = useMemo(() => correctCount * 5, [correctCount]);

  useEffect(() => {
    if (!completed) {
      saveProgress(content.courseId, { step: currentStep, correctCount, totalQuestions });
    }
  }, [currentStep, correctCount, totalQuestions, content.courseId, completed]);

  const handleNext = (correct?: boolean) => {
    const newCorrect = correctCount + (correct === true ? 1 : 0);
    const newTotal = totalQuestions + (correct !== undefined ? 1 : 0);

    if (correct !== undefined) {
      setTotalQuestions(newTotal);
      if (correct) setCorrectCount(newCorrect);
      setMascotMood(correct ? 'encouraging' : 'sad');
    }

    if (currentStep + 1 >= totalSteps) {
      const score = newTotal > 0 ? Math.round((newCorrect / newTotal) * 100) : 100;
      clearCoursePlayerProgress(content.courseId);
      setFinalScore(score);
      setDurationSeconds(Math.floor((Date.now() - startedAt) / 1000));
      setCompleted(true);
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const renderStep = (s: CourseStep) => {
    switch (s.type) {
      case 'lesson': return <LessonStep step={s} onNext={() => handleNext()} />;
      case 'qcm': return <QCMStep step={s} onNext={(c) => handleNext(c)} />;
      case 'fill-blank': return <FillBlankStep step={s} onNext={(c) => handleNext(c)} />;
      case 'drag-drop': return <DragDropStep step={s} onNext={(c) => handleNext(c)} />;
      case 'flashcard': return <FlashcardStep step={s} onNext={() => handleNext()} />;
      case 'listening': return <ListeningStep step={s} onNext={(c) => handleNext(c)} />;
      case 'final-quiz': return <FinalQuizStep step={s} onNext={(c) => handleNext(c)} />;
      default: return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col">
      {/* Sticky header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b">
        <div className="px-4 py-3 flex items-center gap-3 max-w-4xl mx-auto w-full">
          <Button variant="ghost" size="icon" onClick={onExit} aria-label={t('player.exit')}>
            <X className="h-5 w-5" />
          </Button>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-muted-foreground truncate">{courseTitle}</span>
              <span className="text-xs font-mono text-muted-foreground shrink-0 ml-2">
                {Math.min(currentStep + 1, totalSteps)} / {totalSteps}
              </span>
            </div>
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cia-blue-500 to-cia-gold-500"
                initial={false}
                animate={{ width: `${progressPct}%` }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>

          {xpPreview > 0 && !completed && (
            <Badge variant="secondary" className="gap-1 shrink-0 hidden sm:inline-flex">
              <Sparkles className="h-3.5 w-3.5 text-cia-gold-500" />
              <span className="font-mono">+{xpPreview} tokens</span>
            </Badge>
          )}
        </div>
      </header>

      {/* Body */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className="px-4 py-8 w-full">
          <div className="grid lg:grid-cols-[180px_1fr] gap-8 lg:gap-10 max-w-5xl mx-auto">
            {/* Mascot sidebar — desktop only */}
            <aside className="hidden lg:flex flex-col items-center pt-4" aria-hidden="true">
              <div className="sticky top-24">
                <SparkPresence
                  mood={completed ? 'celebrating' : mascotMood}
                  size={120}
                  embers={completed}
                />
              </div>
            </aside>

            {/* Step zone */}
            <div className="min-w-0 max-w-3xl mx-auto w-full">
              <AnimatePresence mode="wait" initial={false}>
                {!completed && step && (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {renderStep(step)}
                  </motion.div>
                )}

                {completed && (
                  <motion.div
                    key="completion"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <CompletionScreen
                      courseTitle={courseTitle}
                      score={finalScore}
                      totalSteps={totalSteps}
                      durationSeconds={durationSeconds}
                      onContinue={() => onComplete(finalScore)}
                      onExit={onExit}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompletionScreen({
  courseTitle, score, totalSteps, durationSeconds, onContinue, onExit,
}: {
  courseTitle: string;
  score: number;
  totalSteps: number;
  durationSeconds: number;
  onContinue: () => void;
  onExit: () => void;
}) {
  const { t } = useTranslation();
  const xpEarned = Math.max(5, Math.round(score * 5));
  const minutes = Math.floor(durationSeconds / 60);
  const seconds = durationSeconds % 60;
  const formattedTime = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;

  return (
    <div className="max-w-xl mx-auto text-center space-y-8 py-8">
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-cia-gold-400 to-cia-gold-600 flex items-center justify-center shadow-xl"
      >
        <Trophy className="h-12 w-12 text-white" />
      </motion.div>

      <div className="space-y-2">
        <h2 className="text-3xl font-bold font-display">{t('player.completion.title')}</h2>
        <p className="text-muted-foreground">{courseTitle}</p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.3, type: 'spring', damping: 13, stiffness: 200 }}
        className="flex justify-center"
      >
        <SparkPresence mood="celebrating" size={120} embers />
      </motion.div>

      <div className="grid grid-cols-3 gap-3">
        <div className="p-4 rounded-xl bg-cia-gold-50 border border-cia-gold-200">
          <p className="text-2xl font-bold font-mono text-cia-gold-700">+{xpEarned}</p>
          <p className="text-xs text-muted-foreground mt-1">Tokens</p>
        </div>
        <div className="p-4 rounded-xl bg-muted border">
          <p className="text-2xl font-bold font-mono">{totalSteps}</p>
          <p className="text-xs text-muted-foreground mt-1">{t('player.completion.steps')}</p>
        </div>
        <div className="p-4 rounded-xl bg-muted border">
          <p className="text-2xl font-bold font-mono">{formattedTime}</p>
          <p className="text-xs text-muted-foreground mt-1">{t('player.completion.time')}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Button variant="gradient" size="cta" onClick={onContinue} className="gap-2">
          {t('player.completion.next_course')} <ArrowRight className="h-4 w-4" />
        </Button>
        <Button variant="outline" onClick={onExit} className="gap-2">
          <RotateCcw className="h-4 w-4" /> {t('player.completion.back_catalogue')}
        </Button>
      </div>
    </div>
  );
}
