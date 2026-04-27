import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { X, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { CourseContent, CourseStep } from '@/data/course-content';
import { LessonStep } from './LessonStep';
import { QCMStep } from './QCMStep';
import { FillBlankStep } from './FillBlankStep';
import { DragDropStep } from './DragDropStep';
import { FlashcardStep } from './FlashcardStep';
import { ListeningStep } from './ListeningStep';
import { FinalQuizStep } from './FinalQuizStep';
import { readCoursePlayerProgress, writeCoursePlayerProgress, clearCoursePlayerProgress } from '@/lib/courseProgress';

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
  const saved = loadProgress(content.courseId);
  const [currentStep, setCurrentStep] = useState(Math.min(saved.step, content.steps.length - 1));
  const [correctCount, setCorrectCount] = useState(saved.correctCount);
  const [totalQuestions, setTotalQuestions] = useState(saved.totalQuestions);

  const step = content.steps[currentStep];
  const progressPct = ((currentStep + 1) / content.steps.length) * 100;

  useEffect(() => {
    saveProgress(content.courseId, { step: currentStep, correctCount, totalQuestions });
  }, [currentStep, correctCount, totalQuestions, content.courseId]);

  const handleNext = (correct?: boolean) => {
    const newCorrect = correctCount + (correct === true ? 1 : 0);
    const newTotal = totalQuestions + (correct !== undefined ? 1 : 0);

    if (correct !== undefined) {
      setTotalQuestions(newTotal);
      if (correct) setCorrectCount(newCorrect);
    }

    if (currentStep + 1 >= content.steps.length) {
      const score = newTotal > 0 ? Math.round(newCorrect / newTotal * 100) : 100;
      clearCoursePlayerProgress(content.courseId);
      onComplete(score);
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const renderStep = (s: CourseStep) => {
    switch (s.type) {
      case 'lesson': return <LessonStep key={s.id} step={s} onNext={() => handleNext()} />;
      case 'qcm': return <QCMStep key={s.id} step={s} onNext={(c) => handleNext(c)} />;
      case 'fill-blank': return <FillBlankStep key={s.id} step={s} onNext={(c) => handleNext(c)} />;
      case 'drag-drop': return <DragDropStep key={s.id} step={s} onNext={(c) => handleNext(c)} />;
      case 'flashcard': return <FlashcardStep key={s.id} step={s} onNext={() => handleNext()} />;
      case 'listening': return <ListeningStep key={s.id} step={s} onNext={(c) => handleNext(c)} />;
      case 'final-quiz': return <FinalQuizStep key={s.id} step={s} onNext={(c) => handleNext(c)} />;
      default: return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col">
      {/* Top bar */}
      <div className="border-b px-4 py-3 flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onExit}>
          <X className="h-5 w-5" />
        </Button>
        <div className="flex-1">
          <Progress value={progressPct} className="h-3" />
        </div>
        <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">
          {currentStep + 1}/{content.steps.length}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-8">
        {renderStep(step)}
      </div>
    </div>
  );
}
