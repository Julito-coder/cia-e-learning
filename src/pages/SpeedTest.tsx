import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Zap, Trophy, Timer, ArrowLeft, RotateCcw, Crown, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { SPEED_TEST_QUESTIONS, SPEED_TEST_DURATION, type SpeedQuestion } from '@/data/speed-test-questions';
import { useUserProgress } from '@/hooks/useUserProgress';
import { curriculum } from '@/data/curriculum';
import { isModuleComplete } from '@/hooks/useModuleUnlock';
import type { CECRLevel } from '@/data/demo-courses';
import { toast } from 'sonner';

type Phase = 'intro' | 'playing' | 'done';

const shuffle = <T,>(arr: T[]) => [...arr].sort(() => Math.random() - 0.5);

function shuffleQuestion(q: SpeedQuestion): SpeedQuestion {
  const correct = q.options[q.correctIndex];
  const opts = shuffle(q.options);
  return { question: q.question, options: opts, correctIndex: opts.indexOf(correct) };
}

export default function SpeedTest() {
  const { level: levelParam } = useParams();
  const level = (levelParam as CECRLevel) || 'A1';
  const navigate = useNavigate();
  const { addXP } = useUserProgress();

  const [phase, setPhase] = useState<Phase>('intro');
  const [questions, setQuestions] = useState<SpeedQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [errors, setErrors] = useState(0);
  const [timeLeft, setTimeLeft] = useState(SPEED_TEST_DURATION);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [xpEarned, setXpEarned] = useState(0);
  const [newRecord, setNewRecord] = useState(false);

  const bestKey = `speed-test-best:${level}`;
  const bestScore = useMemo(() => {
    const v = localStorage.getItem(bestKey);
    return v ? parseInt(v, 10) : 0;
  }, [bestKey, phase]);

  const intervalRef = useRef<number | null>(null);
  const phaseRef = useRef(phase);
  phaseRef.current = phase;

  // Check unlock: at least one module of the level fully completed
  const levelData = curriculum.find((l) => l.level === level);
  const unlocked = useMemo(() => {
    if (!levelData) return false;
    return levelData.modules.some((m) => isModuleComplete(m));
  }, [levelData]);

  const finish = useCallback(async (finalScore: number) => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setPhase('done');
    let xp = finalScore * 10;
    let record = false;
    if (finalScore > bestScore) {
      localStorage.setItem(bestKey, String(finalScore));
      xp += 50;
      record = true;
    }
    setXpEarned(xp);
    setNewRecord(record);
    if (xp > 0) {
      await addXP(xp);
      toast.success(`+${xp} XP gagnés !`);
    }
  }, [addXP, bestKey, bestScore]);

  // Timer
  useEffect(() => {
    if (phase !== 'playing') return;
    intervalRef.current = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 0.1) {
          if (intervalRef.current) window.clearInterval(intervalRef.current);
          // use ref to access latest score
          return 0;
        }
        return Math.max(0, t - 0.1);
      });
    }, 100);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [phase]);

  // Trigger finish when timer hits 0
  useEffect(() => {
    if (phase === 'playing' && timeLeft <= 0) {
      finish(score);
    }
  }, [timeLeft, phase, score, finish]);

  const start = () => {
    const pool = SPEED_TEST_QUESTIONS[level] || SPEED_TEST_QUESTIONS.A1;
    const shuffled = shuffle(pool).map(shuffleQuestion);
    setQuestions(shuffled);
    setCurrentIdx(0);
    setScore(0);
    setErrors(0);
    setTimeLeft(SPEED_TEST_DURATION);
    setFeedback(null);
    setXpEarned(0);
    setNewRecord(false);
    setPhase('playing');
  };

  const answer = (idx: number) => {
    if (feedback || phaseRef.current !== 'playing') return;
    const q = questions[currentIdx];
    const correct = idx === q.correctIndex;
    setFeedback(correct ? 'correct' : 'wrong');
    if (correct) setScore((s) => s + 1);
    else setErrors((e) => e + 1);
    setTimeout(() => {
      setFeedback(null);
      setCurrentIdx((i) => {
        const next = i + 1;
        if (next >= questions.length) {
          // re-shuffle pool to keep going
          const pool = SPEED_TEST_QUESTIONS[level] || SPEED_TEST_QUESTIONS.A1;
          setQuestions(shuffle(pool).map(shuffleQuestion));
          return 0;
        }
        return next;
      });
    }, 350);
  };

  const stop = () => finish(score);

  // ─── Locked screen ──────────────────────────────────
  if (!unlocked) {
    return (
      <div className="container py-12 max-w-2xl">
        <Link to="/programme" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Programme
        </Link>
        <Card className="p-8 text-center rounded-3xl">
          <div className="inline-flex h-16 w-16 rounded-2xl bg-muted items-center justify-center mb-4">
            <Lock className="h-8 w-8 text-muted-foreground" />
          </div>
          <h1 className="font-display text-2xl text-primary mb-2">Test de vitesse {level} verrouillé</h1>
          <p className="text-muted-foreground text-sm mb-6">
            Termine au moins un module du niveau {level} à 100% pour débloquer ce challenge chronométré.
          </p>
          <Link to="/programme">
            <Button className="rounded-xl">Retourner au programme</Button>
          </Link>
        </Card>
      </div>
    );
  }

  // ─── Intro ──────────────────────────────────
  if (phase === 'intro') {
    return (
      <div className="container py-8 max-w-2xl">
        <Link to="/programme" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Programme
        </Link>
        <Card className="p-8 text-center rounded-3xl bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/20 border-2 border-yellow-300">
          <div className="inline-flex h-20 w-20 rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 items-center justify-center mb-4 shadow-xl animate-pulse">
            <Zap className="h-10 w-10 text-white" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl text-primary mb-2">Test de vitesse {level}</h1>
          <p className="text-muted-foreground mb-6">Réponds correctement au plus de questions possible en 1 min 30 !</p>

          <div className="grid grid-cols-3 gap-3 mb-6 text-sm">
            <div className="p-3 rounded-2xl bg-card border">
              <Timer className="h-5 w-5 mx-auto mb-1 text-primary" />
              <p className="font-bold">90 sec</p>
              <p className="text-[10px] text-muted-foreground">de challenge</p>
            </div>
            <div className="p-3 rounded-2xl bg-card border">
              <Zap className="h-5 w-5 mx-auto mb-1 text-cia-xp" />
              <p className="font-bold">+10 XP</p>
              <p className="text-[10px] text-muted-foreground">par bonne rép.</p>
            </div>
            <div className="p-3 rounded-2xl bg-card border">
              <Crown className="h-5 w-5 mx-auto mb-1 text-yellow-500" />
              <p className="font-bold">+50 XP</p>
              <p className="text-[10px] text-muted-foreground">si record</p>
            </div>
          </div>

          {bestScore > 0 && (
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-sm font-bold">
              <Trophy className="h-4 w-4" /> Ton record : {bestScore} bonnes réponses
            </div>
          )}

          <Button size="lg" onClick={start} className="w-full rounded-2xl text-base font-bold gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
            <Zap className="h-5 w-5" /> Commencer le test
          </Button>
        </Card>
      </div>
    );
  }

  // ─── Done ──────────────────────────────────
  if (phase === 'done') {
    const total = score + errors;
    const accuracy = total > 0 ? Math.round((score / total) * 100) : 0;
    return (
      <div className="container py-8 max-w-2xl">
        <Card className="p-8 text-center rounded-3xl bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/20 border-2 border-yellow-300">
          {newRecord && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400 text-white text-sm font-bold mb-4 animate-bounce">
              <Crown className="h-4 w-4" /> NOUVEAU RECORD !
            </div>
          )}
          <Trophy className="h-16 w-16 mx-auto mb-4 text-yellow-500" />
          <h1 className="font-display text-3xl text-primary mb-2">Terminé !</h1>
          <p className="text-muted-foreground mb-6">Bravo pour ce challenge {level}</p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="p-4 rounded-2xl bg-card border-2 border-cia-success/30">
              <p className="text-3xl font-extrabold text-cia-success">{score}</p>
              <p className="text-xs text-muted-foreground font-bold">Bonnes</p>
            </div>
            <div className="p-4 rounded-2xl bg-card border-2 border-destructive/30">
              <p className="text-3xl font-extrabold text-destructive">{errors}</p>
              <p className="text-xs text-muted-foreground font-bold">Erreurs</p>
            </div>
            <div className="p-4 rounded-2xl bg-card border-2 border-primary/30">
              <p className="text-3xl font-extrabold text-primary">{accuracy}%</p>
              <p className="text-xs text-muted-foreground font-bold">Précision</p>
            </div>
          </div>

          <div className="mb-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cia-xp/15 text-cia-xp font-extrabold">
            <Zap className="h-5 w-5" /> +{xpEarned} XP
          </div>

          <div className="flex gap-3">
            <Button onClick={start} size="lg" className="flex-1 rounded-2xl gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
              <RotateCcw className="h-4 w-4" /> Rejouer
            </Button>
            <Button onClick={() => navigate('/programme')} size="lg" variant="outline" className="flex-1 rounded-2xl">
              Programme
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // ─── Playing ──────────────────────────────────
  const q = questions[currentIdx];
  const timePct = (timeLeft / SPEED_TEST_DURATION) * 100;
  const danger = timeLeft <= 10;
  const warn = timeLeft <= 30 && !danger;

  return (
    <div className="container py-6 max-w-2xl">
      {/* Top bar: timer + score */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className={`flex items-center gap-2 font-extrabold text-lg ${danger ? 'text-destructive animate-pulse' : warn ? 'text-orange-500' : 'text-primary'}`}>
            <Timer className="h-5 w-5" />
            {Math.ceil(timeLeft)}s
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 rounded-full bg-cia-success/15 text-cia-success text-sm font-bold">✓ {score}</div>
            <div className="px-3 py-1 rounded-full bg-destructive/15 text-destructive text-sm font-bold">✗ {errors}</div>
            <Button size="sm" variant="ghost" onClick={stop} className="text-xs">Stop</Button>
          </div>
        </div>
        <Progress value={timePct} className={`h-3 ${danger ? '[&>div]:bg-destructive' : warn ? '[&>div]:bg-orange-500' : ''}`} />
      </div>

      {/* Question */}
      <Card className={`p-6 rounded-3xl transition-all ${
        feedback === 'correct' ? 'bg-cia-success/10 border-cia-success ring-4 ring-cia-success/30' :
        feedback === 'wrong' ? 'bg-destructive/10 border-destructive ring-4 ring-destructive/30' : ''
      }`}>
        <p className="text-xs text-muted-foreground font-bold mb-2">QUESTION {currentIdx + 1}</p>
        <h2 className="text-xl md:text-2xl font-bold mb-6 leading-snug">{q?.question}</h2>
        <div className="grid gap-3">
          {q?.options.map((opt, i) => {
            const isCorrect = feedback && i === q.correctIndex;
            const isWrong = feedback === 'wrong' && i !== q.correctIndex;
            return (
              <button
                key={i}
                onClick={() => answer(i)}
                disabled={!!feedback}
                className={`w-full text-left p-4 rounded-2xl border-2 font-semibold transition-all ${
                  isCorrect ? 'bg-cia-success text-primary-foreground border-cia-success' :
                  isWrong ? 'opacity-40 border-border' :
                  'bg-card border-border hover:border-primary hover:bg-muted active:scale-[0.98]'
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
