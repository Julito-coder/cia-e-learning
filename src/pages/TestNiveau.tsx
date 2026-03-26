import { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle2, XCircle, ChevronRight, RotateCcw, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CircularProgress } from '@/components/gamification/CircularProgress';
import { getRandomTest, calculateLevel } from '@/data/demo-test';
import type { TestQuestion } from '@/data/demo-test';
import type { CECRLevel } from '@/data/demo-courses';

type Phase = 'intro' | 'test' | 'result';

const levelDescriptions: Record<CECRLevel, string> = {
  A1: 'Découverte — Vous comprenez des expressions familières du quotidien.',
  A2: 'Survie — Vous pouvez communiquer lors de tâches simples.',
  B1: 'Seuil — Vous pouvez vous débrouiller dans la plupart des situations.',
  B2: 'Avancé — Vous communiquez avec spontanéité et aisance.',
  C1: 'Autonome — Vous vous exprimez de façon fluide et structurée.',
  C2: 'Maîtrise — Vous comprenez pratiquement tout sans effort.',
};

const levelColors: Record<CECRLevel, string> = {
  A1: 'bg-emerald-500', A2: 'bg-green-500', B1: 'bg-accent', B2: 'bg-blue-500', C1: 'bg-violet-500', C2: 'bg-purple-500',
};

export default function TestNiveau() {
  const { t } = useTranslation();
  const [phase, setPhase] = useState<Phase>('intro');
  const [questions, setQuestions] = useState<TestQuestion[]>(() => getRandomTest());
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [fillBlankInput, setFillBlankInput] = useState('');

  const question = questions[currentQ];
  const progress = ((currentQ) / questions.length) * 100;

  const handleAnswer = useCallback((answer: string) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
    const isCorrect = answer.trim().toLowerCase() === question.correctAnswer.trim().toLowerCase();
    setAnswers((prev) => ({ ...prev, [question.id]: isCorrect }));
  }, [question]);

  const nextQuestion = useCallback(() => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    setFillBlankInput('');
    if (currentQ + 1 >= questions.length) {
      setPhase('result');
    } else {
      setCurrentQ((prev) => prev + 1);
    }
  }, [currentQ, questions.length]);

  const restart = () => {
    setQuestions(getRandomTest());
    setPhase('intro');
    setCurrentQ(0);
    setAnswers({});
    setSelectedAnswer(null);
    setShowFeedback(false);
    setFillBlankInput('');
  };

  // INTRO
  if (phase === 'intro') {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 pb-24 md:pb-0">
        <div className="max-w-lg w-full text-center space-y-6 animate-fade-in">
          <div className="text-6xl mb-2 animate-float">🇫🇷</div>
          <h1 className="font-display text-3xl md:text-4xl">{t('test.title')}</h1>
          <p className="text-muted-foreground text-lg">
            {t('test.intro', { count: questions.length })}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {(['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as CECRLevel[]).map((lvl) => (
              <Badge key={lvl} variant="outline" className="text-xs">{lvl}</Badge>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            {t('test.progressive')}
          </p>
          <Button size="lg" className="btn-duo gap-2 text-lg px-8 bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={() => setPhase('test')}>
            {t('test.start')} <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    );
  }

  // RESULT
  if (phase === 'result') {
    const result = calculateLevel(answers, questions);
    const totalCorrect = Object.values(answers).filter(Boolean).length;
    const totalPct = Math.round((totalCorrect / questions.length) * 100);

    return (
      <div className="container max-w-2xl py-12 space-y-8 animate-fade-in pb-24 md:pb-12">
        <div className="text-center space-y-4">
          <div className="text-5xl animate-bounce-in">🎉</div>
          <h1 className="font-display text-3xl">{t('test.resultTitle')}</h1>
          <div className="flex justify-center">
            <CircularProgress value={totalPct} size={120} strokeWidth={10} color="stroke-accent">
              <div className="text-center">
                <p className="text-2xl font-bold">{totalCorrect}/{questions.length}</p>
                <p className="text-xs text-muted-foreground">{t('test.correctAnswers')}</p>
              </div>
            </CircularProgress>
          </div>
        </div>

        <div className="card-duo p-6 text-center space-y-3">
          <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">{t('test.estimatedLevel')}</p>
          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl text-primary-foreground ${levelColors[result.level]}`}>
            <span className="text-3xl font-display">{result.level}</span>
          </div>
          <p className="text-muted-foreground">{levelDescriptions[result.level]}</p>
        </div>

        <div className="card-duo p-5 space-y-3">
          <h3 className="font-display text-base">{t('test.detailByLevel')}</h3>
          {(Object.entries(result.scores) as [CECRLevel, { correct: number; total: number }][]).map(([lvl, s]) => (
            <div key={lvl} className="flex items-center gap-3">
              <Badge variant="outline" className="w-10 justify-center text-xs">{lvl}</Badge>
              <div className="flex-1 h-3 bg-border rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${levelColors[lvl]}`}
                  style={{ width: s.total > 0 ? `${(s.correct / s.total) * 100}%` : '0%' }}
                />
              </div>
              <span className="text-sm font-semibold w-12 text-right">{s.correct}/{s.total}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline" className="gap-2" onClick={restart}>
            <RotateCcw className="h-4 w-4" /> {t('test.retake')}
          </Button>
          <Link to="/catalogue">
            <Button className="btn-duo gap-2 w-full sm:w-auto bg-destructive text-destructive-foreground hover:bg-destructive/90">
              <BookOpen className="h-4 w-4" /> {t('test.seeCourses', { level: result.level })}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // TEST
  const isCorrect = selectedAnswer?.trim().toLowerCase() === question.correctAnswer.trim().toLowerCase();

  return (
    <div className="min-h-[70vh] flex flex-col pb-24 md:pb-0">
      {/* Progress bar */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur border-b px-4 py-3">
        <div className="container max-w-2xl flex items-center gap-3">
          <span className="text-sm font-bold text-muted-foreground">{currentQ + 1}/{questions.length}</span>
          <div className="flex-1 h-3 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <Badge variant="outline" className="text-xs">{question.level}</Badge>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="max-w-2xl w-full space-y-6 animate-slide-up" key={currentQ}>
          {/* Question */}
          <div className="card-duo p-6">
            <p className="text-sm font-semibold text-accent mb-2">
              {question.type === 'qcm' ? t('test.qcmHint') : t('test.fillHint')}
            </p>
            <h2 className="font-display text-xl md:text-2xl leading-relaxed">{question.question}</h2>
          </div>

          {/* Answers */}
          {question.type === 'qcm' && question.options && (
            <div className="space-y-3">
              {question.options.map((opt) => {
                let cls = 'card-duo p-4 cursor-pointer text-left w-full font-semibold transition-all';
                if (showFeedback) {
                  if (opt === question.correctAnswer) cls += ' !border-cia-success !bg-cia-success/10';
                  else if (opt === selectedAnswer) cls += ' !border-destructive !bg-destructive/10 animate-shake';
                } else if (opt === selectedAnswer) {
                  cls += ' !border-accent';
                }
                return (
                  <button
                    key={opt}
                    className={cls}
                    onClick={() => !showFeedback && handleAnswer(opt)}
                    disabled={showFeedback}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex-1">{opt}</span>
                      {showFeedback && opt === question.correctAnswer && <CheckCircle2 className="h-5 w-5 text-cia-success" />}
                      {showFeedback && opt === selectedAnswer && opt !== question.correctAnswer && <XCircle className="h-5 w-5 text-destructive" />}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {question.type === 'fill-blank' && (
            <div className="space-y-3">
              <div className="card-duo p-4">
                <input
                  type="text"
                  value={fillBlankInput}
                  onChange={(e) => setFillBlankInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && fillBlankInput && !showFeedback && handleAnswer(fillBlankInput)}
                  placeholder={t('test.placeholder')}
                  className="w-full bg-transparent text-lg font-semibold outline-none placeholder:text-muted-foreground/50"
                  disabled={showFeedback}
                  autoFocus
                />
              </div>
              {!showFeedback && (
                <Button
                  className="btn-duo w-full"
                  disabled={!fillBlankInput}
                  onClick={() => handleAnswer(fillBlankInput)}
                >
                  {t('test.validate')}
                </Button>
              )}
            </div>
          )}

          {/* Feedback */}
          {showFeedback && (
            <div className={`card-duo p-4 animate-slide-up ${isCorrect ? '!border-cia-success' : '!border-destructive'}`}>
              <div className="flex items-start gap-3">
                {isCorrect
                  ? <CheckCircle2 className="h-6 w-6 text-cia-success flex-shrink-0 animate-bounce-in" />
                  : <XCircle className="h-6 w-6 text-destructive flex-shrink-0" />
                }
                <div>
                  <p className={`font-bold ${isCorrect ? 'text-cia-success' : 'text-destructive'}`}>
                    {isCorrect ? t('test.correct') : t('test.incorrect')}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{question.explanation}</p>
                  {!isCorrect && (
                    <p className="text-sm font-semibold mt-1">{t('test.answer', { answer: question.correctAnswer })}</p>
                  )}
                </div>
              </div>
              <Button className="btn-duo w-full mt-4 gap-2" onClick={nextQuestion}>
                {currentQ + 1 >= questions.length ? t('test.seeResults') : t('test.next')}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
