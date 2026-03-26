import { Flame, Target } from 'lucide-react';
import { CircularProgress } from './CircularProgress';

interface DailyGoalProps {
  completed: number;
  goal: number;
  streak: number;
}

export function DailyGoal({ completed, goal, streak }: DailyGoalProps) {
  const pct = Math.min(Math.round((completed / goal) * 100), 100);

  return (
    <div className="card-duo p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Target className="h-5 w-5 text-accent" />
          <h3 className="font-display text-base">Objectif du jour</h3>
        </div>
        <div className="stat-bubble bg-cia-streak/15 text-cia-streak">
          <Flame className="h-4 w-4" />
          {streak}
        </div>
      </div>
      <div className="flex items-center gap-5">
        <CircularProgress value={pct} size={72} strokeWidth={7} color="stroke-cia-success">
          <span className="text-lg font-bold">{completed}/{goal}</span>
        </CircularProgress>
        <div className="flex-1 space-y-1">
          <p className="text-sm font-semibold">
            {pct >= 100 ? '🎉 Objectif atteint !' : `Encore ${goal - completed} exercice${goal - completed > 1 ? 's' : ''}`}
          </p>
          <p className="text-xs text-muted-foreground">
            {pct >= 100
              ? 'Revenez demain pour maintenir votre série !'
              : 'Complétez vos exercices pour maintenir votre série.'}
          </p>
          <div className="flex gap-1 mt-2">
            {Array.from({ length: goal }).map((_, i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                  i < completed ? 'bg-cia-success' : 'bg-border'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
