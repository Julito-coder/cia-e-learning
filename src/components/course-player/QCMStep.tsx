import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { QCMStep as QCMStepType } from '@/data/course-content';

interface Props {
  step: QCMStepType;
  onNext: (correct: boolean) => void;
}

export function QCMStep({ step, onNext }: Props) {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const isCorrect = selected === step.correctIndex;

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div className="flex items-center gap-3 mb-2">
        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <HelpCircle className="h-5 w-5 text-primary" />
        </div>
        <h2 className="text-xl font-bold font-display">{step.title}</h2>
      </div>

      <Card className="border-2">
        <CardContent className="p-6">
          <p className="text-lg font-medium mb-6">{step.question}</p>
          <div className="grid gap-3">
            {step.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={answered}
                className={cn(
                  'w-full text-left p-4 rounded-xl border-2 transition-all font-medium',
                  !answered && 'hover:border-primary hover:bg-primary/5 cursor-pointer',
                  answered && i === step.correctIndex && 'border-green-500 bg-green-50 dark:bg-green-950',
                  answered && selected === i && i !== step.correctIndex && 'border-destructive bg-destructive/10 animate-[shake_0.5s_ease-in-out]',
                  !answered && selected === i && 'border-primary bg-primary/10',
                  answered && i !== step.correctIndex && selected !== i && 'opacity-50',
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="h-8 w-8 rounded-full border-2 flex items-center justify-center text-sm font-bold shrink-0">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span>{opt}</span>
                  {answered && i === step.correctIndex && <CheckCircle2 className="h-5 w-5 text-green-600 ml-auto" />}
                  {answered && selected === i && i !== step.correctIndex && <XCircle className="h-5 w-5 text-destructive ml-auto" />}
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {answered && (
        <div className={cn(
          'p-4 rounded-xl border-2 animate-fade-in',
          isCorrect ? 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800' : 'bg-destructive/10 border-destructive/30'
        )}>
          <p className={cn('font-bold mb-1', isCorrect ? 'text-green-700 dark:text-green-400' : 'text-destructive')}>
            {isCorrect ? `🎉 ${t('player.correct')}` : `❌ ${t('player.incorrect')}`}
          </p>
          <p className="text-sm text-muted-foreground">{step.explanation}</p>
        </div>
      )}

      {answered && (
        <Button size="lg" className="w-full" onClick={() => onNext(isCorrect)}>
          {t('player.continue')}
        </Button>
      )}
    </div>
  );
}
