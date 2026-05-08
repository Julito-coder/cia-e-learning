import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, Lock, Sparkles, CheckCircle2, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { hoverLift } from '@/lib/animations';
import type { CECRLevel } from '@/data/demo-courses';

export interface CourseCardProps {
  id: string;
  title: string;
  description?: string;
  level: CECRLevel;
  theme?: string;
  durationMinutes?: number;
  totalLessons?: number;
  xpReward?: number;
  progress?: number;
  isLocked?: boolean;
  isFree?: boolean;
  isCompleted?: boolean;
}

const LEVEL_BG: Record<string, string> = {
  A1: 'from-emerald-400/30 to-emerald-200/10',
  A2: 'from-green-400/30 to-green-200/10',
  B1: 'from-sky-400/30 to-sky-200/10',
  B2: 'from-blue-400/30 to-blue-200/10',
  C1: 'from-violet-400/30 to-violet-200/10',
  C2: 'from-purple-400/30 to-purple-200/10',
};

export function CourseCard(props: CourseCardProps) {
  const {
    id, title, description, level, theme, durationMinutes, totalLessons,
    xpReward, progress = 0, isLocked = false, isFree = true, isCompleted = false,
  } = props;

  const inner = (
    <motion.div
      variants={hoverLift}
      initial="rest"
      whileHover={isLocked ? 'rest' : 'hover'}
      animate="rest"
      className="h-full"
    >
      <Card className={`h-full overflow-hidden flex flex-col ${isLocked ? 'opacity-60' : ''}`}>
        <div className={`relative h-24 bg-gradient-to-br ${LEVEL_BG[level] ?? 'from-muted to-muted/30'}`}>
          <div className="absolute top-2 left-2 flex gap-1.5 flex-wrap">
            <Badge variant="level">{level}</Badge>
            {!isFree && (
              <Badge className="bg-cia-gold-500 text-white border-transparent gap-1">
                <Sparkles className="h-3 w-3" /> Premium
              </Badge>
            )}
            {isCompleted && (
              <Badge className="bg-cia-success text-white border-transparent gap-1">
                <CheckCircle2 className="h-3 w-3" /> Complété
              </Badge>
            )}
          </div>
          {isLocked && (
            <div className="absolute inset-0 grid place-items-center bg-background/40 backdrop-blur-sm">
              <Lock className="h-6 w-6 text-muted-foreground" />
            </div>
          )}
        </div>

        <div className="p-4 flex-1 flex flex-col gap-2">
          {theme && <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">{theme}</p>}
          <h3 className="font-display text-base font-extrabold leading-tight line-clamp-2">{title}</h3>
          {description && <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>}

          <div className="mt-auto pt-3 flex items-center gap-3 text-xs text-muted-foreground font-semibold flex-wrap">
            {durationMinutes != null && (
              <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {durationMinutes} min</span>
            )}
            {totalLessons != null && (
              <span className="inline-flex items-center gap-1"><BookOpen className="h-3 w-3" /> {totalLessons} leçons</span>
            )}
            {xpReward != null && (
              <span className="inline-flex items-center gap-1 text-xp"><Zap className="h-3 w-3" /> {xpReward} XP</span>
            )}
          </div>

          {progress > 0 && progress < 100 && !isLocked && (
            <div className="mt-2">
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-accent rounded-full"
                />
              </div>
              <p className="text-[10px] text-muted-foreground mt-1 font-semibold">{progress}% complété</p>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );

  if (isLocked) return <div>{inner}</div>;
  return <Link to={`/cours/${id}`} className="block h-full">{inner}</Link>;
}
