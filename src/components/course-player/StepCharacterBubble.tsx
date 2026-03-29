import { getCharacter, getCharacterEvolution } from '@/data/characters';
import { CharacterBubble } from './CharacterBubble';
import { useUserProgress } from '@/hooks/useUserProgress';

interface Props {
  characterId?: string;
  message?: string;
}

/** Reusable wrapper: shows a CharacterBubble if a characterId is provided */
export function StepCharacterBubble({ characterId, message }: Props) {
  const { cecrLevel } = useUserProgress();
  if (!characterId) return null;

  const character = getCharacter(characterId);
  if (!character) return null;

  const evolution = getCharacterEvolution(character, cecrLevel);

  return (
    <div className="mb-4">
      <CharacterBubble character={character} evolution={evolution} showBio message={message} />
    </div>
  );
}
