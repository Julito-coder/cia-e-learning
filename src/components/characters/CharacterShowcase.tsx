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
      <h3 className="font-display text-base text-center">Nos personnages</h3>
      <div className="grid grid-cols-2 gap-3">
        {CHARACTERS.map((char, i) => {
          const evo = getCharacterEvolution(char, cecrLevel);
          const isHovered = hoveredId === char.id;
          const isSelected = selectedCharacterId === char.id;

          return (
            <button
              key={char.id}
              className="flex flex-col items-center gap-1.5 p-2 rounded-2xl transition-all duration-200 hover:bg-accent/10 cursor-pointer select-none animate-fade-in"
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
                  width: 72,
                  height: 72,
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
                {/* Idle breathing animation overlay */}
                {!isHovered && (
                  <div
                    className="absolute inset-0 rounded-full animate-character-idle"
                    style={{ pointerEvents: 'none' }}
                  />
                )}
              </div>

              {/* Name */}
              <span className={`text-[11px] font-bold leading-tight text-center transition-colors ${
                isSelected ? 'text-accent' : 'text-foreground'
              }`}>
                {char.name.split(' ')[0]}
              </span>

              {/* Role */}
              <span className="text-[9px] text-muted-foreground leading-tight text-center line-clamp-1">
                {char.role}
              </span>

              {/* Dynamic shadow */}
              <div
                className="rounded-full bg-foreground/10 transition-all duration-300"
                style={{
                  width: 40,
                  height: 5,
                  filter: `blur(${isHovered ? 5 : 2}px)`,
                  transform: `scaleX(${isHovered ? 0.6 : 1})`,
                  marginTop: -2,
                }}
              />
            </button>
          );
        })}
      </div>

      {/* Story modal */}
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
