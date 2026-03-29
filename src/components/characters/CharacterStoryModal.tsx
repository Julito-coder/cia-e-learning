import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, MapPin, Briefcase, Quote, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Character } from '@/data/characters';
import { getCharacterEvolution } from '@/data/characters';
import type { CECRLevel } from '@/data/demo-courses';

interface CharacterStoryModalProps {
  character: Character;
  currentLevel: CECRLevel;
  onClose: () => void;
}

const LEVEL_ORDER: CECRLevel[] = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export function CharacterStoryModal({ character, currentLevel, onClose }: CharacterStoryModalProps) {
  const currentEvo = getCharacterEvolution(character, currentLevel);
  const currentIdx = LEVEL_ORDER.indexOf(currentLevel);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <>
      <div className="fixed inset-0 z-[110] bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div className="fixed inset-0 z-[111] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6">
        <div className="bg-card border border-border rounded-t-3xl sm:rounded-3xl p-4 sm:p-5 md:p-6 shadow-2xl w-full sm:max-w-md md:max-w-lg max-h-[88vh] overflow-y-auto animate-enter relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 h-8 w-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
          <ModalContent character={character} currentEvo={currentEvo} currentLevel={currentLevel} currentIdx={currentIdx} onClose={onClose} />
        </div>
      </div>
    </>,
    document.body
  );
}

function ModalContent({
  character,
  currentEvo,
  currentLevel,
  currentIdx,
  onClose,
}: {
  character: Character;
  currentEvo: ReturnType<typeof getCharacterEvolution>;
  currentLevel: CECRLevel;
  currentIdx: number;
  onClose: () => void;
}) {
  return (
    <div className="space-y-4 sm:space-y-5">
      {/* Header */}
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="relative">
          <img
            src={character.avatarPath}
            alt={character.name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-accent shadow-lg"
          />
          <Badge className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground text-[10px] font-bold">
            {currentLevel}
          </Badge>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-base sm:text-lg leading-tight">{character.name}</h3>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground mt-1">
            <Briefcase className="h-3.5 w-3.5" />
            <span className="font-semibold">{character.role}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground mt-0.5">
            <MapPin className="h-3.5 w-3.5" />
            <span>{character.nationality} · {character.age} ans</span>
          </div>
        </div>
      </div>

      {/* Catchphrase */}
      <div className="bg-accent/10 border border-accent/20 rounded-2xl p-3 sm:p-4">
        <div className="flex items-start gap-2">
          <Quote className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm font-semibold italic text-foreground">
            « {currentEvo.catchphrase} »
          </p>
        </div>
      </div>

      {/* Bio */}
      <div>
        <h4 className="text-[11px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
          Son histoire au CIA
        </h4>
        <p className="text-xs sm:text-sm leading-relaxed">{currentEvo.bio}</p>
      </div>

      {/* Level evolution timeline */}
      <div>
        <h4 className="text-[11px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
          Évolution par niveau
        </h4>
        <div className="space-y-0">
          {character.evolution.map((evo, i) => {
            const isActive = evo.level === currentLevel;
            const isPast = i <= currentIdx;
            return (
              <div key={evo.level} className="flex items-start gap-3">
                {/* Timeline line + dot */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-3 h-3 rounded-full flex-shrink-0 border-2 transition-colors ${
                      isActive
                        ? 'bg-accent border-accent'
                        : isPast
                        ? 'bg-accent/30 border-accent/50'
                        : 'bg-muted border-border'
                    }`}
                  />
                  {i < character.evolution.length - 1 && (
                    <div
                      className={`w-0.5 h-8 ${
                        isPast ? 'bg-accent/30' : 'bg-border'
                      }`}
                    />
                  )}
                </div>
                {/* Content */}
                <div className={`pb-3 -mt-0.5 ${isActive ? '' : 'opacity-60'}`}>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={isActive ? 'default' : 'outline'}
                      className={`text-[10px] font-bold ${
                        isActive ? 'bg-accent text-accent-foreground' : ''
                      }`}
                    >
                      {evo.level}
                    </Badge>
                    {isActive && (
                      <ChevronRight className="h-3 w-3 text-accent" />
                    )}
                  </div>
                  {isActive && (
                    <p className="text-[11px] sm:text-xs text-muted-foreground mt-1 leading-relaxed">
                      {evo.bio}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
