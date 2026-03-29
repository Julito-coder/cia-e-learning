import { useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones, Play, CheckCircle2, XCircle, Volume2, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ListeningStep as ListeningStepType } from '@/data/course-content';
import { getCharacter, getCharacterEvolution } from '@/data/characters';
import { CharacterBubble } from './CharacterBubble';
import { useUserProgress } from '@/hooks/useUserProgress';

interface Props {
  step: ListeningStepType;
  onNext: (correct: boolean) => void;
}

export function ListeningStep({ step, onNext }: Props) {
  const { t } = useTranslation();
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasListened, setHasListened] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioBlobUrlRef = useRef<string | null>(null);
  const isCorrect = selected === step.correctIndex;

  const handlePlay = useCallback(async () => {
    if (playing || loading) return;

    // If we already have the audio cached, just replay it
    if (audioBlobUrlRef.current) {
      const audio = new Audio(audioBlobUrlRef.current);
      audioRef.current = audio;
      audio.onplay = () => setPlaying(true);
      audio.onended = () => { setPlaying(false); setHasListened(true); };
      audio.onerror = () => { setPlaying(false); setHasListened(true); };
      await audio.play();
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/elevenlabs-tts`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ text: step.text }),
        }
      );

      if (!response.ok) {
        throw new Error(`TTS request failed: ${response.status}`);
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      audioBlobUrlRef.current = audioUrl;

      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      audio.onplay = () => setPlaying(true);
      audio.onended = () => { setPlaying(false); setHasListened(true); };
      audio.onerror = () => { setPlaying(false); setHasListened(true); };

      setLoading(false);
      await audio.play();
    } catch (error) {
      console.error('ElevenLabs TTS error:', error);
      setLoading(false);
      setHasListened(true);
    }
  }, [playing, loading, step.text]);

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
              disabled={playing || loading}
              className={cn(
                'h-20 w-20 rounded-full flex items-center justify-center transition-all',
                loading
                  ? 'bg-muted animate-pulse'
                  : playing
                    ? 'bg-primary/20 animate-pulse'
                    : 'bg-primary hover:bg-primary/90 cursor-pointer',
              )}
            >
              {loading ? (
                <Loader2 className="h-8 w-8 text-muted-foreground animate-spin" />
              ) : playing ? (
                <Volume2 className="h-8 w-8 text-primary" />
              ) : (
                <Play className="h-8 w-8 text-primary-foreground ml-1" />
              )}
            </button>
            <p className="text-sm text-muted-foreground">
              {loading
                ? t('player.generating', 'Génération de l\'audio...')
                : playing
                  ? t('player.listening')
                  : hasListened
                    ? t('player.clickToReplay')
                    : t('player.clickToListen')}
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
          {t('player.continue')}
        </Button>
      )}
    </div>
  );
}
