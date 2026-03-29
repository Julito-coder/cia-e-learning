import { useState, useRef, useCallback } from 'react';
import type { Character, CharacterEvolution } from '@/data/characters';

interface Character3DAvatarProps {
  character: Character;
  evolution: CharacterEvolution;
  isSelected: boolean;
  onClick: () => void;
  size?: number;
}

export function Character3DAvatar({
  character,
  evolution,
  isSelected,
  onClick,
  size = 64,
}: Character3DAvatarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isSelected || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rawX = (e.clientY - centerY) / 10;
      const rawY = (e.clientX - centerX) / 10;
      setRotation({
        x: Math.max(-15, Math.min(15, rawX)),
        y: Math.max(-15, Math.min(15, rawY)),
      });
    },
    [isSelected],
  );

  const handlePointerLeave = useCallback(() => {
    setRotation({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center gap-1 cursor-pointer select-none"
      style={{ perspective: 800 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={onClick}
    >
      {/* 3D container */}
      <div
        className={`relative transition-transform duration-200 ${
          isSelected ? 'animate-character-walk' : 'animate-character-idle'
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)${
            isSelected ? '' : ''
          }`,
          width: size,
          height: size,
        }}
      >
        {/* Avatar image */}
        <img
          src={character.avatarPath}
          alt={character.name}
          className="w-full h-full rounded-full object-cover border-[3px] transition-all duration-300"
          style={{
            borderColor: isSelected
              ? 'hsl(var(--accent))'
              : 'hsl(var(--border))',
            boxShadow: isSelected
              ? `0 ${8 + rotation.x}px ${16 + Math.abs(rotation.x)}px -4px hsl(var(--accent) / 0.35)`
              : '0 4px 8px -2px hsl(var(--foreground) / 0.1)',
          }}
          draggable={false}
        />

        {/* Glow ring when selected */}
        {isSelected && (
          <div
            className="absolute inset-0 rounded-full border-2 border-accent/40 animate-pulse"
            style={{ transform: 'translateZ(2px)' }}
          />
        )}
      </div>

      {/* Name label */}
      <span
        className={`text-[10px] font-bold leading-tight text-center max-w-[80px] truncate transition-colors ${
          isSelected ? 'text-accent' : 'text-muted-foreground'
        }`}
      >
        {character.name.split(' ')[0]}
      </span>

      {/* Dynamic shadow */}
      <div
        className="rounded-full bg-foreground/10 transition-all duration-200"
        style={{
          width: size * 0.6,
          height: 6,
          filter: `blur(${isSelected ? 4 : 2}px)`,
          transform: `translateX(${rotation.y * 0.5}px) scaleX(${
            1 - Math.abs(rotation.y) * 0.01
          })`,
          marginTop: -4,
        }}
      />
    </div>
  );
}
