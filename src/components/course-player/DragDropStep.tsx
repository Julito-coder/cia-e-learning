import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GripVertical, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { DragDropStep as DragDropStepType } from '@/data/course-content';
import { StepCharacterBubble } from './StepCharacterBubble';

interface Props {
  step: DragDropStepType;
  onNext: (correct: boolean) => void;
}

export function DragDropStep({ step, onNext }: Props) {
  const { t } = useTranslation();
  const [available, setAvailable] = useState<string[]>(() => 
    [...step.items].sort(() => Math.random() - 0.5)
  );
  const [placed, setPlaced] = useState<string[]>([]);
  const [answered, setAnswered] = useState(false);
  const isCorrect = JSON.stringify(placed) === JSON.stringify(step.correctOrder);

  const handleAdd = (item: string) => {
    if (answered) return;
    setPlaced([...placed, item]);
    setAvailable(available.filter((_, i) => i !== available.indexOf(item)));
  };

  const handleRemove = (index: number) => {
    if (answered) return;
    const item = placed[index];
    setAvailable([...available, item]);
    setPlaced(placed.filter((_, i) => i !== index));
  };

  const handleCheck = () => {
    setAnswered(true);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <StepCharacterBubble characterId={step.characterId} message={step.characterMessage} />
      <div className="flex items-center gap-3 mb-2">
        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <GripVertical className="h-5 w-5 text-primary" />
        </div>
        <h2 className="text-xl font-bold font-display">{step.title}</h2>
      </div>

      <Card className="border-2">
        <CardContent className="p-6 space-y-4">
          <p className="text-muted-foreground mb-2">{step.instruction}</p>

          {/* Placed zone */}
          <div className={cn(
            'min-h-[56px] p-3 rounded-xl border-2 border-dashed flex flex-wrap gap-2',
            placed.length === 0 && 'items-center justify-center',
            answered && isCorrect && 'border-green-500 bg-green-50 dark:bg-green-950',
            answered && !isCorrect && 'border-destructive bg-destructive/10',
          )}>
            {placed.length === 0 && (
              <span className="text-sm text-muted-foreground">{t('player.clickWordsBelow')}</span>
            )}
            {placed.map((item, i) => (
              <button
                key={`${item}-${i}`}
                onClick={() => handleRemove(i)}
                disabled={answered}
                className={cn(
                  'px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all',
                  !answered && 'hover:bg-primary/80 cursor-pointer',
                )}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Available items */}
          <div className="flex flex-wrap gap-2">
            {available.map((item, i) => (
              <button
                key={`${item}-${i}`}
                onClick={() => handleAdd(item)}
                disabled={answered}
                className={cn(
                  'px-3 py-1.5 rounded-lg border-2 font-medium text-sm transition-all',
                  !answered && 'hover:border-primary hover:bg-primary/5 cursor-pointer',
                  answered && 'opacity-40',
                )}
              >
                {item}
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
          <p className={cn('font-bold', isCorrect ? 'text-green-700 dark:text-green-400' : 'text-destructive')}>
            {isCorrect ? `🎉 ${t('player.perfect')}` : `❌ ${t('player.incorrect')}`}
          </p>
          {!isCorrect && (
            <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
              {t('player.correctAnswer')} : {step.correctOrder.join(' ')}
            </p>
          )}
        </div>
      )}

      {!answered && placed.length === step.correctOrder.length && (
        <Button size="lg" className="w-full" onClick={handleCheck}>
          <CheckCircle2 className="h-4 w-4 mr-2" /> {t('player.check')}
        </Button>
      )}

      {answered && (
        <Button size="lg" className="w-full" onClick={() => onNext(isCorrect)}>
          {t('player.continue')} <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      )}
    </div>
  );
}
