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

interface Props {
  content: CourseContent;
  courseTitle: string;
  onExit: () => void;
  onComplete: (score: number) => void;
}

export function CoursePlayer({ content, courseTitle, onExit, onComplete }: Props) {
  const [currentStep, setCurrentStep] = useState(() => {
    const saved = localStorage.getItem(`course-step-${content.courseId}`);
    return saved ? Math.min(parseInt(saved), content.steps.length - 1) : 0;
  });
  const [correctCount, setCorrectCount] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const step = content.steps[currentStep];
  const progressPct = ((currentStep + 1) / content.steps.length) * 100;

  useEffect(() => {
    localStorage.setItem(`course-step-${content.courseId}`, String(currentStep));
  }, [currentStep, content.courseId]);

  const handleNext = (correct?: boolean) => {
    if (correct !== undefined) {
      setTotalQuestions(t => t + 1);
      if (correct) setCorrectCount(c => c + 1);
    }

    if (currentStep + 1 >= content.steps.length) {
      const score = totalQuestions > 0 ? Math.round((correctCount + (correct ? 1 : 0)) / (totalQuestions + 1) * 100) : 100;
      localStorage.removeItem(`course-step-${content.courseId}`);
      onComplete(score);
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const renderStep = (s: CourseStep) => {
    // Key includes step id to force remount
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
