import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Lock, Star, Play } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import type { Module } from '@/data/curriculum';
import { getCourseContent } from '@/data/course-content';

interface LearningPathProps {
  modules: Module[];
  locked?: boolean;
}

type NodeState = 'complete' | 'active' | 'available' | 'locked';

function getModuleState(mod: Module, locked: boolean): NodeState {
  if (locked) return 'locked';
  const savedProgress = JSON.parse(localStorage.getItem('course-progress') || '{}');
  const completed = mod.lessons.filter(l => savedProgress[`lesson-${l.id}`]?.completed).length;
  if (completed === mod.lessons.length) return 'complete';
  if (completed > 0) return 'active';
  // Check if any lesson has content
  const hasAnyContent = mod.lessons.some(l => !!getCourseContent(`lesson-${l.id}`));
  return hasAnyContent ? 'available' : 'available';
}

function getModuleProgress(mod: Module): number {
  const savedProgress = JSON.parse(localStorage.getItem('course-progress') || '{}');
  const completed = mod.lessons.filter(l => savedProgress[`lesson-${l.id}`]?.completed).length;
  return Math.round((completed / mod.lessons.length) * 100);
}

const stateStyles = {
  complete: 'border-cia-success bg-cia-success text-primary-foreground shadow-lg',
  active: 'border-accent bg-accent text-accent-foreground shadow-lg shadow-accent/30 animate-pulse-soft',
  available: 'border-border bg-card text-foreground hover:border-accent hover:shadow-md cursor-pointer',
  locked: 'border-muted bg-muted text-muted-foreground cursor-not-allowed',
};

export function LearningPath({ modules, locked = false }: LearningPathProps) {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  return (
    <div className="relative flex flex-col items-center py-2">
      {modules.map((mod, i) => {
        const state = getModuleState(mod, locked);
        const progress = getModuleProgress(mod);
        const offset = i % 2 === 0 ? 'md:-translate-x-16' : 'md:translate-x-16';
        const isExpanded = expandedModule === mod.id;

        return (
          <div key={mod.id} className="relative flex flex-col items-center">
            {/* SVG connector */}
            {i > 0 && (
              <svg className="w-40 h-10 -mt-1 mb-0" viewBox="0 0 160 40" fill="none">
                <path
                  d={i % 2 === 0
                    ? 'M 120 0 C 120 20, 40 20, 40 40'
                    : 'M 40 0 C 40 20, 120 20, 120 40'
                  }
                  stroke="hsl(var(--border))"
                  strokeWidth="3"
                  strokeDasharray={state === 'locked' ? '6 4' : 'none'}
                  strokeLinecap="round"
                />
              </svg>
            )}

            {/* Node + popup container */}
            <div className={`${offset} relative transition-transform duration-300`}>
              {/* Node circle */}
              <button
                onClick={() => state !== 'locked' && setExpandedModule(isExpanded ? null : mod.id)}
                className={`relative w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${stateStyles[state]}`}
              >
                {/* Progress ring for active */}
                {state === 'active' && progress > 0 && (
                  <svg className="absolute inset-0 w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="36" fill="none" stroke="hsl(var(--accent) / 0.2)" strokeWidth="4" />
                    <circle
                      cx="40" cy="40" r="36" fill="none"
                      stroke="hsl(var(--accent-foreground))"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 36}`}
                      strokeDashoffset={`${2 * Math.PI * 36 * (1 - progress / 100)}`}
                    />
                  </svg>
                )}
                {/* Inner icon/emoji */}
                <span className="text-2xl relative z-10">
                  {state === 'complete' ? <Check className="h-7 w-7" strokeWidth={3} /> : 
                   state === 'active' ? <Play className="h-6 w-6 ml-0.5" fill="currentColor" /> :
                   state === 'locked' ? <Lock className="h-6 w-6" /> :
                   mod.badgeEmoji}
                </span>
              </button>

              {/* Label below node */}
              <div className="mt-2 text-center w-28 mx-auto">
                <Badge variant="outline" className="text-[10px] font-bold mb-0.5">{mod.id}</Badge>
                <p className="text-xs font-bold leading-tight line-clamp-2">{mod.title}</p>
                {state === 'active' && progress > 0 && (
                  <p className="text-[10px] text-accent font-bold mt-0.5">{progress}%</p>
                )}
              </div>

              {/* Expanded popup */}
              {isExpanded && state !== 'locked' && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-30 w-64 animate-fade-in">
                  <div className="card-duo p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{mod.badgeEmoji}</span>
                      <div>
                        <p className="font-display text-sm">{mod.title}</p>
                        <p className="text-[10px] text-muted-foreground">{mod.theme}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <span className="font-bold">{mod.lessons.length} leçons</span>
                      <span>·</span>
                      <span className="font-bold">🏅 {mod.badge}</span>
                    </div>
                    {progress > 0 && (
                      <div className="mb-3">
                        <Progress value={progress} className="h-2" />
                        <p className="text-[10px] text-right text-muted-foreground mt-0.5">{progress}%</p>
                      </div>
                    )}
                    {/* Lesson list preview */}
                    <div className="space-y-1 max-h-40 overflow-y-auto mb-3">
                      {mod.lessons.map(lesson => {
                        const saved = JSON.parse(localStorage.getItem('course-progress') || '{}');
                        const done = saved[`lesson-${lesson.id}`]?.completed;
                        const hasContent = !!getCourseContent(`lesson-${lesson.id}`);
                        return (
                          <Link
                            key={lesson.id}
                            to={hasContent ? `/cours/lesson-${lesson.id}` : '#'}
                            onClick={e => !hasContent && e.preventDefault()}
                            className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs transition-colors ${
                              done ? 'bg-cia-success/10' : hasContent ? 'hover:bg-muted' : 'opacity-40'
                            }`}
                          >
                            <span className={`h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${
                              done ? 'bg-cia-success text-primary-foreground' : 'bg-muted text-muted-foreground'
                            }`}>
                              {done ? <Check className="h-3 w-3" /> : lesson.id}
                            </span>
                            <span className="truncate font-semibold">{lesson.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                    <Link to={`/programme?module=${mod.id}`}>
                      <button className="w-full btn-duo bg-accent text-accent-foreground border-accent px-4 py-2 text-xs font-bold rounded-xl">
                        {state === 'complete' ? 'Revoir' : state === 'active' ? 'Continuer' : 'Commencer'}
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
