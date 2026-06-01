import { SparkBubble } from './SparkBubble';

interface Props {
  /** Optional `characterId` from legacy pedagogical content. Ignored after Sprint 2
   *  (the field will be removed from `src/data/*-content.ts` when content moves
   *  to Supabase in Sprint 4). All narrative bubbles now use Spark. */
  characterId?: string;
  message?: string;
}

/** Wrapper that renders a Spark dialogue bubble if a message is provided. */
export function StepCharacterBubble({ message }: Props) {
  if (!message) return null;
  return (
    <div className="mb-4">
      <SparkBubble message={message} />
    </div>
  );
}
