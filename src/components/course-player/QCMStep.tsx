import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, XCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { QCMStep as QCMStepType } from '@/data/course-content';
import { StepCharacterBubble } from './StepCharacterBubble';
import { StepFeedback } from './StepFeedback';

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
    <div className="max-w-2xl mx-auto space-y-6">
      <StepCharacterBubble characterId={step.characterId} message={step.characterMessage} />
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
            {step.options.map((opt, i) => {
              const isWrongPicked = answered && selected === i && i !== step.correctIndex;
              return (
              <motion.button
                whileTap={{ scale: answered ? 1 : 0.97 }}
                animate={isWrongPicked ? { x: [-4, 4, -3, 3, 0] } : { x: 0 }}
                transition={isWrongPicked ? { duration: 0.3, ease: 'easeOut' } : { duration: 0.2 }}
                key={i}
                onClick={() => handleSelect(i)}
                disabled={answered}
                className={cn(
                  'w-full text-left p-4 rounded-2xl border-2 transition-colors duration-200 font-medium min-h-touch',
                  'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cia-spark-mid/30',
                  !answered && 'hover:border-cia-blue-500 hover:bg-cia-blue-50/40 cursor-pointer',
                  answered && i === step.correctIndex && 'border-success-500 bg-success-500/10 text-success-700',
                  isWrongPicked && 'border-error-500 bg-error-500/10 text-error-600',
                  !answered && selected === i && 'border-cia-blue-500 bg-cia-blue-50/40',
                  answered && i !== step.correctIndex && selected !== i && 'opacity-50',
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="h-8 w-8 rounded-full border-2 flex items-center justify-center text-sm font-bold shrink-0 tabular-nums">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span>{opt}</span>
                  {answered && i === step.correctIndex && <CheckCircle2 className="h-5 w-5 text-success-600 ml-auto" />}
                  {isWrongPicked && <XCircle className="h-5 w-5 text-error-500 ml-auto" />}
                </div>
              </motion.button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <StepFeedback
        status={answered ? (isCorrect ? 'correct' : 'incorrect') : 'idle'}
        hint={step.explanation}
      />

      {answered && (
        <Button variant="default" size="cta" className="w-full gap-2" onClick={() => onNext(isCorrect)}>
          {t('player.continue')} <ArrowRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
