import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PenLine, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { FillBlankStep as FillBlankStepType } from '@/data/course-content';
import { StepCharacterBubble } from './StepCharacterBubble';
import { StepFeedback } from './StepFeedback';

interface Props {
  step: FillBlankStepType;
  onNext: (correct: boolean) => void;
}

export function FillBlankStep({ step, onNext }: Props) {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const isCorrect = selected === step.correctAnswer;

  const handleSelect = (opt: string) => {
    if (answered) return;
    setSelected(opt);
    setAnswered(true);
  };

  const parts = step.sentence.split('___');

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <StepCharacterBubble characterId={step.characterId} message={step.characterMessage} />
      <div className="flex items-center gap-3 mb-2">
        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <PenLine className="h-5 w-5 text-primary" />
        </div>
        <h2 className="text-xl font-bold font-display">{step.title}</h2>
      </div>

      <Card className="border-2">
        <CardContent className="p-6">
          <p className="text-lg font-medium mb-6 leading-relaxed">
            {parts[0]}
            <span className={cn(
              'inline-block min-w-[80px] px-3 py-1 mx-1 rounded-lg border-2 border-dashed text-center font-bold',
              !selected && 'border-primary/50 text-muted-foreground',
              answered && isCorrect && 'border-success bg-success/10 text-success',
              answered && !isCorrect && 'border-destructive bg-destructive/10 text-destructive',
            )}>
              {selected || '…'}
            </span>
            {parts[1]}
          </p>

          <div className="flex flex-wrap gap-2">
            {step.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleSelect(opt)}
                disabled={answered}
                className={cn(
                  'px-4 py-2 rounded-full border-2 font-medium transition-all',
                  !answered && 'hover:border-primary hover:bg-primary/5 cursor-pointer',
                  selected === opt && !answered && 'border-primary bg-primary/10',
                  answered && opt === step.correctAnswer && 'border-success bg-success/10 text-success',
                  answered && selected === opt && opt !== step.correctAnswer && 'border-destructive bg-destructive/10',
                  answered && opt !== step.correctAnswer && selected !== opt && 'opacity-40',
                )}
              >
                <span className="flex items-center gap-1.5">
                  {opt}
                  {answered && opt === step.correctAnswer && <CheckCircle2 className="h-4 w-4 text-success" />}
                  {answered && selected === opt && opt !== step.correctAnswer && <XCircle className="h-4 w-4 text-destructive" />}
                </span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <StepFeedback
        status={answered ? (isCorrect ? 'correct' : 'incorrect') : 'idle'}
        hint={!isCorrect && answered ? t('player.correctAnswerWas', { answer: step.correctAnswer }) : undefined}
      />

      {answered && (
        <Button variant="default" size="cta" className="w-full gap-2" onClick={() => onNext(isCorrect)}>
          {t('player.continue')} <ArrowRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
