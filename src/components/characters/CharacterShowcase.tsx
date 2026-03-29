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
    <div className="space-y-3">
      {/* Mobile/Tablet: horizontal scroll — Desktop: 2-col grid */}
      <div className="flex gap-3 overflow-x-auto pb-2 lg:grid lg:grid-cols-2 lg:overflow-visible lg:pb-0 snap-x snap-mandatory">
        {CHARACTERS.map((char, i) => {
          const evo = getCharacterEvolution(char, cecrLevel);
          const isHovered = hoveredId === char.id;
          const isSelected = selectedCharacterId === char.id;

          return (
            <button
              key={char.id}
              className="flex flex-col items-center gap-1.5 p-2 rounded-2xl transition-all duration-200 hover:bg-accent/10 cursor-pointer select-none animate-fade-in flex-shrink-0 snap-center w-20 lg:w-auto"
              style={{ animationDelay: `${i * 80}ms`, perspective: 600 }}
              onClick={() => setSelectedCharacterId(isSelected ? null : char.id)}
              onPointerEnter={() => setHoveredId(char.id)}
              onPointerLeave={() => setHoveredId(null)}
            >
              {/* Avatar container with 3D spin */}
              <div
                className="relative transition-transform duration-700 ease-out"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isHovered ? 'rotateY(360deg)' : 'rotateY(0deg)',
                  width: 64,
                  height: 64,
                }}
              >
                <img
                  src={char.avatarPath}
                  alt={char.name}
                  className="w-full h-full rounded-full object-cover border-[3px] transition-all duration-300"
                  style={{
                    borderColor: isSelected
                      ? 'hsl(var(--accent))'
                      : 'hsl(var(--border))',
                    boxShadow: isSelected
                      ? '0 6px 16px -4px hsl(var(--accent) / 0.4)'
                      : '0 3px 8px -2px hsl(var(--foreground) / 0.1)',
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

              <span className={`text-[11px] font-bold leading-tight text-center transition-colors ${
                isSelected ? 'text-accent' : 'text-foreground'
              }`}>
                {char.name.split(' ')[0]}
              </span>

              <span className="text-[9px] text-muted-foreground leading-tight text-center line-clamp-1">
                {char.role}
              </span>

              <div
                className="rounded-full bg-foreground/10 transition-all duration-300"
                style={{
                  width: 36,
                  height: 4,
                  filter: `blur(${isHovered ? 5 : 2}px)`,
                  transform: `scaleX(${isHovered ? 0.6 : 1})`,
                  marginTop: -2,
                }}
              />
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