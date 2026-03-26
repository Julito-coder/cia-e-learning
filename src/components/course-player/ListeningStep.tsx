import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones, Play, CheckCircle2, XCircle, Volume2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ListeningStep as ListeningStepType } from '@/data/course-content';

interface Props {
  step: ListeningStepType;
  onNext: (correct: boolean) => void;
}

export function ListeningStep({ step, onNext }: Props) {
  const [playing, setPlaying] = useState(false);
  const [hasListened, setHasListened] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const isCorrect = selected === step.correctIndex;

  const handlePlay = () => {
    if (playing) return;
    const utterance = new SpeechSynthesisUtterance(step.text);
    utterance.lang = 'fr-FR';
    utterance.rate = 0.85;
    utterance.onstart = () => setPlaying(true);
    utterance.onend = () => { setPlaying(false); setHasListened(true); };
    utterance.onerror = () => { setPlaying(false); setHasListened(true); };
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div className="flex items-center gap-3 mb-2">
        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Headphones className="h-5 w-5 text-primary" />
        </div>
        <h2 className="text-xl font-bold font-display">{step.title}</h2>
      </div>

      {/* Audio player */}
      <Card className="border-2">
        <CardContent className="p-6">
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={handlePlay}
              disabled={playing}
              className={cn(
                'h-20 w-20 rounded-full flex items-center justify-center transition-all',
                playing
                  ? 'bg-primary/20 animate-pulse'
                  : 'bg-primary hover:bg-primary/90 cursor-pointer',
              )}
            >
              {playing ? (
                <Volume2 className="h-8 w-8 text-primary" />
              ) : (
                <Play className="h-8 w-8 text-primary-foreground ml-1" />
              )}
            </button>
            <p className="text-sm text-muted-foreground">
              {playing ? 'Écoute en cours…' : hasListened ? 'Cliquez pour réécouter' : 'Cliquez pour écouter'}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Question */}
      {hasListened && (
        <Card className="border-2 animate-fade-in">
          <CardContent className="p-6">
            <p className="text-lg font-medium mb-4">{step.question}</p>
            <div className="grid gap-3">
              {step.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={answered}
                  className={cn(
                    'w-full text-left p-3 rounded-xl border-2 transition-all font-medium text-sm',
                    !answered && 'hover:border-primary hover:bg-primary/5 cursor-pointer',
                    answered && i === step.correctIndex && 'border-green-500 bg-green-50 dark:bg-green-950',
                    answered && selected === i && i !== step.correctIndex && 'border-destructive bg-destructive/10',
                    answered && i !== step.correctIndex && selected !== i && 'opacity-50',
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span>{opt}</span>
                    {answered && i === step.correctIndex && <CheckCircle2 className="h-4 w-4 text-green-600 ml-auto" />}
                    {answered && selected === i && i !== step.correctIndex && <XCircle className="h-4 w-4 text-destructive ml-auto" />}
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {answered && (
        <Button size="lg" className="w-full" onClick={() => onNext(isCorrect)}>
          Continuer
        </Button>
      )}
    </div>
  );
}
