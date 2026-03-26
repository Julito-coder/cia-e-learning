import { Badge } from '@/components/ui/badge';
import { CECR_LEVELS, type CECRLevel } from '@/data/demo-courses';

export function LevelBadge({ level }: { level: CECRLevel }) {
  const info = CECR_LEVELS.find((l) => l.value === level);
  return <Badge className={info?.color}>{level}</Badge>;
}
