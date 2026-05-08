import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Trophy, Heart, CheckCircle2, XCircle, Star, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { FinalQuizStep as FinalQuizStepType } from '@/data/course-content';
import { StepCharacterBubble } from './StepCharacterBubble';
import { StepFeedback } from './StepFeedback';

interface Props {
  step: FinalQuizStepType;
  onNext: (correct: boolean) => void;
}

export function FinalQuizStep({ step, onNext }: Props) {
  const { t } = useTranslation();
  const [qIndex, setQIndex] = useState(0);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  const currentQ = step.questions[qIndex];
  const isCorrect = selected === currentQ?.correctIndex;
  const passed = score >= Math.ceil(step.questions.length * 0.6);

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
    if (index === currentQ.correctIndex) {
      setScore(score + 1);
    } else {
      setLives(lives - 1);
    }
  };

  const handleContinue = () => {
    if (lives <= 0 && !isCorrect) {
      setFinished(true);
      return;
    }
    if (qIndex + 1 >= step.questions.length) {
      setFinished(true);
      return;
    }
    setQIndex(qIndex + 1);
    setSelected(null);
    setAnswered(false);
  };

  if (finished || lives <= 0) {
    return (
      <div className="max-w-2xl mx-auto space-y-6 text-center">
        <div className={cn(
          'h-24 w-24 rounded-full mx-auto flex items-center justify-center',
          passed ? 'bg-success/15' : 'bg-destructive/10'
        )}>
          {passed ? <Trophy className="h-12 w-12 text-success" /> : <XCircle className="h-12 w-12 text-destructive" />}
        </div>
        <h2 className="text-2xl font-bold font-display">
          {passed ? `🎉 ${t('player.congratulations')}` : t('player.courseNotPassed')}
        </h2>
        <p className="text-muted-foreground">
          {t('player.score')} : {score}/{step.questions.length}
          {passed && ` — ${t('player.validated')}`}
          {!passed && ` — ${t('player.keepPracticing')}`}
        </p>
        <div className="max-w-xs mx-auto">
          <Progress value={Math.round((score / Math.max(1, step.questions.length)) * 100)} className="h-3" />
        </div>
        <div className="flex justify-center gap-1">
          {Array.from({ length: step.questions.length }).map((_, i) => (
            <Star key={i} className={cn('h-6 w-6', i < score ? 'text-accent fill-accent' : 'text-muted')} />
          ))}
        </div>
        <Button variant="gradient" size="cta" className="w-full gap-2" onClick={() => onNext(passed)}>
          {passed ? t('player.finishCourse') : t('player.backToCourse')}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <StepCharacterBubble characterId={step.characterId} message={step.characterMessage} />
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-accent/20 flex items-center justify-center">
            <Trophy className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-display">{step.title}</h2>
            <p className="text-sm text-muted-foreground">{t('player.question')} {qIndex + 1}/{step.questions.length}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <Heart key={i} className={cn('h-5 w-5', i < lives ? 'text-destructive fill-destructive' : 'text-muted')} />
          ))}
        </div>
      </div>

      <Card className="border-2 border-accent/30">
        <CardContent className="p-6">
          <Progress value={((qIndex) / step.questions.length) * 100} className="h-1.5 mb-4" />
          <p className="text-lg font-medium mb-6">{currentQ.question}</p>
          <div className="grid gap-3">
            {currentQ.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={answered}
                className={cn(
                  'w-full text-left p-4 rounded-xl border-2 transition-all duration-200 font-medium',
                  !answered && 'hover:border-accent hover:bg-accent/5 cursor-pointer',
                  answered && i === currentQ.correctIndex && 'border-success bg-success/10 text-success',
                  answered && selected === i && i !== currentQ.correctIndex && 'border-destructive bg-destructive/10',
                  answered && i !== currentQ.correctIndex && selected !== i && 'opacity-50',
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="h-7 w-7 rounded-full border-2 flex items-center justify-center text-xs font-bold shrink-0">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-sm">{opt}</span>
                  {answered && i === currentQ.correctIndex && <CheckCircle2 className="h-5 w-5 text-success ml-auto" />}
                  {answered && selected === i && i !== currentQ.correctIndex && <XCircle className="h-5 w-5 text-destructive ml-auto" />}
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <StepFeedback status={answered ? (isCorrect ? 'correct' : 'incorrect') : 'idle'} />

      {answered && (
        <Button variant="gradient" size="cta" className="w-full gap-2" onClick={handleContinue}>
          {qIndex + 1 >= step.questions.length ? t('player.seeResult') : t('player.nextQuestion')}
          <ArrowRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
