import { useState } from 'react';
import { CHARACTERS, getCharacterEvolution } from '@/data/characters';
import { CharacterStoryModal } from '@/components/characters/CharacterStoryModal';
import type { CECRLevel } from '@/data/demo-courses';

interface CharacterShowcaseProps {
  cecrLevel: CECRLevel;
}

export function CharacterShowcase({ cecrLevel }: CharacterShowcaseProps) {
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const selectedCharacter = selectedCharacterId
    ? CHARACTERS.find(c => c.id === selectedCharacterId)
    : null;

  return (
    <div className="relative">
      {/* Mobile: horizontal scroll / Tablet: 4-col / Desktop: 8-col row */}
      <div className="flex gap-2 overflow-x-auto pb-2 sm:grid sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 sm:overflow-visible sm:pb-0 snap-x snap-mandatory scrollbar-hide">
        {CHARACTERS.map((char, i) => {
          const evo = getCharacterEvolution(char, cecrLevel);
          const isHovered = hoveredId === char.id;
          const isSelected = selectedCharacterId === char.id;

          return (
            <button
              key={char.id}
              className="flex flex-col items-center gap-1 p-1.5 sm:p-2 rounded-2xl transition-all duration-200 hover:bg-accent/10 cursor-pointer select-none animate-fade-in flex-shrink-0 snap-center w-[72px] sm:w-auto"
              style={{ animationDelay: `${i * 60}ms`, perspective: 600 }}
              onClick={() => setSelectedCharacterId(isSelected ? null : char.id)}
              onPointerEnter={() => setHoveredId(char.id)}
              onPointerLeave={() => setHoveredId(null)}
            >
              <div
                className="relative transition-transform duration-700 ease-out"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isHovered ? 'rotateY(360deg)' : 'rotateY(0deg)',
                }}
              >
                <img
                  src={char.avatarPath}
                  alt={char.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-[2.5px] transition-all duration-300"
                  style={{
                    borderColor: isSelected
                      ? 'hsl(var(--accent))'
                      : 'hsl(var(--border))',
                    boxShadow: isSelected
                      ? '0 4px 12px -3px hsl(var(--accent) / 0.4)'
                      : '0 2px 6px -2px hsl(var(--foreground) / 0.1)',
                  }}
                  draggable={false}
                />
                {!isHovered && (
                  <div
                    className="absolute inset-0 rounded-full animate-character-idle"
                    style={{ pointerEvents: 'none' }}
                  />
                )}
              </div>

              <span className={`text-[10px] sm:text-[11px] font-bold leading-tight text-center transition-colors ${
                isSelected ? 'text-accent' : 'text-foreground'
              }`}>
                {char.name.split(' ')[0]}
              </span>

              <span className="text-[8px] sm:text-[9px] text-muted-foreground leading-tight text-center line-clamp-1 hidden sm:block">
                {char.role}
              </span>
            </button>
          );
        })}
      </div>

      {selectedCharacter && (
        <CharacterStoryModal
          character={selectedCharacter}
          currentLevel={cecrLevel}
          onClose={() => setSelectedCharacterId(null)}
        />
      )}
    </div>
  );
}