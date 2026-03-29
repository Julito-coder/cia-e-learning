import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Check, Lock, Play, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import type { Module } from '@/data/curriculum';
import { getCourseContent } from '@/data/course-content';
import type { CECRLevel } from '@/data/demo-courses';

interface LearningPathProps {
  modules: Module[];
  locked?: boolean;
  cecrLevel?: CECRLevel;
}

type NodeState = 'complete' | 'active' | 'available' | 'locked';

function getModuleState(mod: Module, locked: boolean): NodeState {
  if (locked) return 'locked';
  try {
    const savedProgress = JSON.parse(localStorage.getItem('course-progress') || '{}');
    const completed = mod.lessons.filter(l => savedProgress[`lesson-${l.id}`]?.completed).length;
    if (completed === mod.lessons.length) return 'complete';
    if (completed > 0) return 'active';
  } catch { /* noop */ }
  return 'available';
}

function getModuleProgress(mod: Module): number {
  try {
    const savedProgress = JSON.parse(localStorage.getItem('course-progress') || '{}');
    const completed = mod.lessons.filter(l => savedProgress[`lesson-${l.id}`]?.completed).length;
    return Math.round((completed / mod.lessons.length) * 100);
  } catch { return 0; }
}

const stateStyles = {
  complete: 'border-cia-success bg-cia-success text-primary-foreground shadow-lg',
  active: 'border-accent bg-accent text-accent-foreground shadow-lg shadow-accent/30 animate-pulse-soft',
  available: 'border-border bg-card text-foreground hover:border-accent hover:shadow-md cursor-pointer',
  locked: 'border-muted bg-muted text-muted-foreground cursor-not-allowed',
};

function ModulePopup({ mod, state, progress, onClose, index }: {
  mod: Module; state: NodeState; progress: number; onClose: () => void; index: number;
}) {
  const saved = useMemo(() => {
    try { return JSON.parse(localStorage.getItem('course-progress') || '{}'); }
    catch { return {}; }
  }, []);

  return (
    <>
      {/* Backdrop — always fixed full-screen */}
      <div className="fixed inset-0 z-40 bg-black/20" onClick={onClose} />

      {/* Mobile/Tablet: bottom sheet */}
      <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden animate-slide-up">
        <div className="bg-card border-t-2 border-border rounded-t-3xl p-5 pb-8 shadow-2xl max-h-[70vh] overflow-y-auto">
          <PopupContent mod={mod} state={state} progress={progress} saved={saved} onClose={onClose} />
        </div>
      </div>

      {/* Desktop: fixed centered dialog */}
      <div className="hidden lg:flex fixed inset-0 z-50 items-center justify-center p-6 pointer-events-none">
        <div className="card-duo p-5 w-full max-w-sm max-h-[70vh] overflow-y-auto pointer-events-auto animate-scale-in relative">
          <button onClick={onClose} className="absolute top-3 right-3 h-7 w-7 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80">
            <X className="h-3.5 w-3.5" />
          </button>
          <PopupContent mod={mod} state={state} progress={progress} saved={saved} onClose={onClose} />
        </div>
      </div>
    </>
  );
}

function PopupContent({ mod, state, progress, saved, onClose }: {
  mod: Module; state: NodeState; progress: number; saved: Record<string, any>; onClose: () => void;
}) {
  return (
    <>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{mod.badgeEmoji}</span>
        <div className="flex-1 min-w-0">
          <p className="font-display text-sm leading-tight">{mod.title}</p>
          <p className="text-[11px] text-muted-foreground truncate">{mod.theme}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
        <Badge variant="outline" className="text-[10px] font-bold">{mod.id}</Badge>
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
      <div className="space-y-1 max-h-48 overflow-y-auto mb-3">
        {mod.lessons.map(lesson => {
          const done = saved[`lesson-${lesson.id}`]?.completed;
          const hasContent = !!getCourseContent(`lesson-${lesson.id}`);
          return (
            <Link
              key={lesson.id}
              to={hasContent ? `/cours/lesson-${lesson.id}` : '#'}
              onClick={e => { if (!hasContent) e.preventDefault(); else onClose(); }}
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
      <Link to={`/programme?module=${mod.id}`} onClick={onClose}>
        <button className="w-full btn-duo bg-accent text-accent-foreground border-accent px-4 py-2.5 text-sm font-bold rounded-xl">
          {state === 'complete' ? 'Revoir' : state === 'active' ? 'Continuer' : 'Commencer'}
        </button>
      </Link>
    </>
  );
}

export function LearningPath({ modules, locked = false, cecrLevel = 'A1' }: LearningPathProps) {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  return (
    <div className="relative flex flex-col items-center py-2 pb-16">
      {modules.map((mod, i) => {
        const state = getModuleState(mod, locked);
        const progress = getModuleProgress(mod);
        const offset = i % 2 === 0 ? 'md:-translate-x-12 lg:-translate-x-16' : 'md:translate-x-12 lg:translate-x-16';
        const isExpanded = expandedModule === mod.id;

        return (
          <div key={mod.id} className="relative flex flex-col items-center">
            {/* SVG connector */}
            {i > 0 && (
              <svg className="w-32 md:w-40 h-8 md:h-10 -mt-1 mb-0" viewBox="0 0 160 40" fill="none">
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

            {/* Node + label */}
            <div className={`${offset} relative transition-transform duration-300`}>
              <button
                onClick={() => state !== 'locked' && setExpandedModule(isExpanded ? null : mod.id)}
                className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${stateStyles[state]}`}
              >
                {state === 'active' && progress > 0 && (
                  <svg className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 -rotate-90" viewBox="0 0 80 80">
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
                <span className="text-xl md:text-2xl relative z-10">
                  {state === 'complete' ? <Check className="h-5 w-5 md:h-7 md:w-7" strokeWidth={3} /> :
                   state === 'active' ? <Play className="h-5 w-5 md:h-6 md:w-6 ml-0.5" fill="currentColor" /> :
                   state === 'locked' ? <Lock className="h-5 w-5 md:h-6 md:w-6" /> :
                   mod.badgeEmoji}
                </span>
              </button>

              {/* Label */}
              <div className="mt-1.5 md:mt-2 text-center w-24 md:w-28 mx-auto">
                <Badge variant="outline" className="text-[9px] md:text-[10px] font-bold mb-0.5">{mod.id}</Badge>
                <p className="text-[11px] md:text-xs font-bold leading-tight line-clamp-2">{mod.title}</p>
                {state === 'active' && progress > 0 && (
                  <p className="text-[10px] text-accent font-bold mt-0.5">{progress}%</p>
                )}
              </div>

              {/* Module popup */}
              {isExpanded && state !== 'locked' && (
                <ModulePopup
                  mod={mod}
                  state={state}
                  progress={progress}
                  onClose={() => setExpandedModule(null)}
                  index={i}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
