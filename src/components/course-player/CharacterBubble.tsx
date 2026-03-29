import { cn } from '@/lib/utils';
import type { Character, CharacterEvolution } from '@/data/characters';

interface Props {
  character: Character;
  evolution: CharacterEvolution;
  size?: 'sm' | 'md' | 'lg';
  showBio?: boolean;
}

export function CharacterBubble({ character, evolution, size = 'md', showBio = false }: Props) {
  const sizeClasses = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-12 w-12 text-sm',
    lg: 'h-16 w-16 text-base',
  };

  const initials = character.name
    .split(' ')
    .map((w) => w[0])
    .join('');

  return (
    <div className="flex items-start gap-3">
      <div
        className={cn(
          'rounded-full flex items-center justify-center font-bold shrink-0 ring-2 ring-background shadow-md',
          character.color,
          sizeClasses[size],
        )}
        title={character.name}
      >
        {initials}
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm">{character.name}</span>
          <span className="text-xs text-muted-foreground">{character.role}</span>
        </div>
        {showBio && (
          <p className="text-xs text-muted-foreground mt-0.5 italic">
            « {evolution.catchphrase} »
          </p>
        )}
      </div>
    </div>
  );
}
