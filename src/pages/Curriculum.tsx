import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Lock, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { curriculum } from '@/data/curriculum';
import { CECR_LEVELS, type CECRLevel } from '@/data/demo-courses';
import { useUserProgress } from '@/hooks/useUserProgress';
import { isModuleUnlocked } from '@/hooks/useModuleUnlock';
import { LearningPath } from '@/components/courses/LearningPath';

const levelEmojis: Record<string, string> = { A0: '🌰', A1: '🌱', A2: '🌿', B1: '🌊', B2: '⚡', C1: '🔥', C2: '👑' };

const levelBgColors: Record<string, string> = {
  A1: 'from-emerald-500/10 to-emerald-500/5 border-emerald-300/40',
  A2: 'from-green-500/10 to-green-500/5 border-green-300/40',
  B1: 'from-sky-500/10 to-sky-500/5 border-sky-300/40',
  B2: 'from-blue-500/10 to-blue-500/5 border-blue-300/40',
  C1: 'from-violet-500/10 to-violet-500/5 border-violet-300/40',
  C2: 'from-purple-500/10 to-purple-500/5 border-purple-300/40',
};

export default function CurriculumPage() {
  const { t } = useTranslation();
  const { cecrLevel } = useUserProgress();
  const [searchParams] = useSearchParams();
  const [selectedLevel, setSelectedLevel] = useState<CECRLevel | null>(null);
  const levelRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Scroll to module from URL param
  useEffect(() => {
    const moduleParam = searchParams.get('module');
    if (moduleParam) {
      // Find the level for this module
      const levelData = curriculum.find(l => l.modules.some(m => m.id === moduleParam));
      if (levelData) {
        setTimeout(() => {
          levelRefs.current[levelData.level]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }, [searchParams]);

  const filteredLevels = selectedLevel
    ? curriculum.filter(l => l.level === selectedLevel)
    : curriculum;

  return (
    <div className="container py-8 animate-fade-in pb-32 max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="font-display text-3xl mb-1">Mon Parcours</h1>
        <p className="text-muted-foreground font-semibold">
          300 leçons · 30 modules · 6 niveaux CECRL
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <Badge className="bg-accent text-accent-foreground">
            {levelEmojis[cecrLevel]} Niveau actuel : {cecrLevel}
          </Badge>
        </div>
      </div>

      {/* Level filter chips */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-hide justify-center">
        <button
          onClick={() => setSelectedLevel(null)}
          className={`chip-filter whitespace-nowrap ${!selectedLevel ? 'chip-active' : ''}`}
        >
          Tout
        </button>
        {CECR_LEVELS.filter(l => l.value !== 'A0').map((level) => (
          <button
            key={level.value}
            onClick={() => {
              setSelectedLevel(selectedLevel === level.value ? null : level.value);
              setTimeout(() => {
                levelRefs.current[level.value]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 100);
            }}
            className={`chip-filter whitespace-nowrap ${selectedLevel === level.value ? 'chip-active' : ''}`}
          >
            {levelEmojis[level.value]} {level.value}
          </button>
        ))}
      </div>

      {/* Visual path per level */}
      <div className="space-y-8">
        {filteredLevels.map((levelData) => {
          const locked = !levelData.modules.some(m => isModuleUnlocked(m.id));
          const isCurrentLevel = levelData.level === cecrLevel;

          return (
            <div
              key={levelData.level}
              ref={el => { levelRefs.current[levelData.level] = el; }}
            >
              {/* Level banner */}
              <div className={`relative rounded-2xl border-2 bg-gradient-to-r p-4 mb-4 ${levelBgColors[levelData.level] || 'border-border'} ${locked ? 'opacity-50' : ''}`}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{levelEmojis[levelData.level]}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="font-display text-xl">{levelData.level} — {levelData.title}</h2>
                      {locked && <Lock className="h-4 w-4 text-muted-foreground" />}
                      {isCurrentLevel && (
                        <Badge className="bg-accent/20 text-accent border border-accent/30 text-xs">
                          <Star className="h-3 w-3 mr-1" /> En cours
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-0.5">{levelData.objective}</p>
                  </div>
                </div>
              </div>

              {/* Module path */}
              <LearningPath modules={levelData.modules} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
