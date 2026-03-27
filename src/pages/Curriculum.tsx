import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight, Lock, Play, CheckCircle, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { curriculum, type Module, type Lesson } from '@/data/curriculum';
import { CECR_LEVELS, type CECRLevel } from '@/data/demo-courses';
import { useUserProgress, isLevelAccessible } from '@/hooks/useUserProgress';
import { getCourseContent } from '@/data/course-content';

const levelEmojis: Record<string, string> = { A0: '🌰', A1: '🌱', A2: '🌿', B1: '🌊', B2: '⚡', C1: '🔥', C2: '👑' };

export default function CurriculumPage() {
  const { t } = useTranslation();
  const { cecrLevel } = useUserProgress();
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<CECRLevel | null>(null);

  const filteredLevels = selectedLevel
    ? curriculum.filter(l => l.level === selectedLevel)
    : curriculum;

  const savedProgress = JSON.parse(localStorage.getItem('course-progress') || '{}');

  const isLessonCompleted = (lessonId: number) => savedProgress[`lesson-${lessonId}`]?.completed;
  const hasContent = (lessonId: number) => !!getCourseContent(`lesson-${lessonId}`);

  const getModuleProgress = (mod: Module) => {
    const completed = mod.lessons.filter(l => isLessonCompleted(l.id)).length;
    return Math.round((completed / mod.lessons.length) * 100);
  };

  return (
    <div className="container py-8 animate-fade-in pb-24 md:pb-8">
      <div className="mb-6">
        <h1 className="font-display text-3xl mb-1">Programme complet</h1>
        <p className="text-muted-foreground font-semibold">
          300 leçons · 30 modules · 6 niveaux CECRL
        </p>
      </div>

      {/* Level filter */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-hide">
        <button
          onClick={() => setSelectedLevel(null)}
          className={`chip-filter whitespace-nowrap ${!selectedLevel ? 'chip-active' : ''}`}
        >
          Tous les niveaux
        </button>
        {CECR_LEVELS.filter(l => l.value !== 'A0').map((level) => (
          <button
            key={level.value}
            onClick={() => setSelectedLevel(selectedLevel === level.value ? null : level.value)}
            className={`chip-filter whitespace-nowrap ${selectedLevel === level.value ? 'chip-active' : ''}`}
          >
            {levelEmojis[level.value]} {level.value} — {level.label.split('—')[1]?.trim()}
          </button>
        ))}
      </div>

      {/* Levels & Modules */}
      <div className="space-y-8">
        {filteredLevels.map((levelData) => {
          const locked = !isLevelAccessible(levelData.level, cecrLevel);
          const levelInfo = CECR_LEVELS.find(l => l.value === levelData.level);

          return (
            <div key={levelData.level}>
              {/* Level header */}
              <div className={`flex items-center gap-3 mb-4 ${locked ? 'opacity-50' : ''}`}>
                <div className="text-2xl">{levelEmojis[levelData.level]}</div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-display text-xl">{levelData.level} — {levelData.title}</h2>
                    {locked && <Lock className="h-4 w-4 text-muted-foreground" />}
                  </div>
                  <p className="text-sm text-muted-foreground">{levelData.objective}</p>
                </div>
              </div>

              {/* Modules grid */}
              <div className="grid gap-3">
                {levelData.modules.map((mod) => {
                  const isExpanded = expandedModule === mod.id;
                  const progress = getModuleProgress(mod);
                  const moduleLocked = locked;

                  return (
                    <div key={mod.id} className={`card-duo ${moduleLocked ? 'opacity-50 pointer-events-none' : ''}`}>
                      {/* Module header */}
                      <button
                        className="w-full flex items-center gap-3 p-4 text-left"
                        onClick={() => setExpandedModule(isExpanded ? null : mod.id)}
                      >
                        <div className="text-2xl flex-shrink-0">{mod.badgeEmoji}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge className={`${levelInfo?.color} text-xs font-bold`}>{mod.id}</Badge>
                            <span className="text-xs text-muted-foreground font-semibold">{mod.lessons.length} leçons</span>
                          </div>
                          <h3 className="font-display text-base truncate">{mod.title}</h3>
                          <p className="text-xs text-muted-foreground truncate">{mod.theme}</p>
                          {progress > 0 && (
                            <div className="mt-2">
                              <Progress value={progress} className="h-1.5" />
                            </div>
                          )}
                        </div>
                        <ChevronRight className={`h-5 w-5 text-muted-foreground transition-transform flex-shrink-0 ${isExpanded ? 'rotate-90' : ''}`} />
                      </button>

                      {/* Lessons list */}
                      {isExpanded && (
                        <div className="border-t px-4 pb-4 pt-2 space-y-1 animate-fade-in">
                          {mod.lessons.map((lesson, i) => {
                            const completed = isLessonCompleted(lesson.id);
                            const available = hasContent(lesson.id);
                            const isExam = lesson.title.includes('Examen') || lesson.title.includes('EXAMEN');
                            const isRevision = lesson.title.includes('Révision');

                            return (
                              <Link
                                key={lesson.id}
                                to={available ? `/cours/lesson-${lesson.id}` : '#'}
                                className={`flex items-center gap-3 p-2.5 rounded-xl transition-all text-sm ${
                                  completed
                                    ? 'bg-green-50 dark:bg-green-950/30'
                                    : available
                                      ? 'hover:bg-muted/70'
                                      : 'opacity-50 cursor-default'
                                }`}
                                onClick={e => !available && e.preventDefault()}
                              >
                                <span className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                                  completed
                                    ? 'bg-green-500 text-white'
                                    : isExam
                                      ? 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300'
                                      : isRevision
                                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                                        : 'bg-muted text-muted-foreground'
                                }`}>
                                  {completed ? <CheckCircle className="h-4 w-4" /> : lesson.id}
                                </span>
                                <div className="flex-1 min-w-0">
                                  <p className="font-semibold truncate">{lesson.title}</p>
                                  <p className="text-xs text-muted-foreground truncate">{lesson.competence} · {lesson.description}</p>
                                </div>
                                {available ? (
                                  <Play className="h-4 w-4 text-primary flex-shrink-0" />
                                ) : (
                                  <BookOpen className="h-4 w-4 text-muted-foreground/40 flex-shrink-0" />
                                )}
                              </Link>
                            );
                          })}
                          <div className="pt-2 text-center">
                            <Badge variant="outline" className="text-xs">
                              🏅 Badge : {mod.badge}
                            </Badge>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
