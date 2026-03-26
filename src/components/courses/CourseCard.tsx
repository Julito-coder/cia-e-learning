import { Link } from 'react-router-dom';
import { Clock, Heart, BookOpen, Headphones, Video, FileText, Mic, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CircularProgress } from '@/components/gamification/CircularProgress';
import type { Course } from '@/data/demo-courses';
import { CECR_LEVELS } from '@/data/demo-courses';

const contentTypeIcons: Record<string, { icon: React.ElementType; color: string }> = {
  text: { icon: FileText, color: 'bg-blue-100 text-blue-600' },
  audio: { icon: Headphones, color: 'bg-purple-100 text-purple-600' },
  video: { icon: Video, color: 'bg-red-100 text-red-600' },
  qcm: { icon: BookOpen, color: 'bg-green-100 text-green-600' },
  flashcard: { icon: BookOpen, color: 'bg-amber-100 text-amber-600' },
  voice: { icon: Mic, color: 'bg-pink-100 text-pink-600' },
};

const levelBorderColors: Record<string, string> = {
  A1: 'border-b-emerald-400',
  A2: 'border-b-green-400',
  B1: 'border-b-sky-400',
  B2: 'border-b-blue-400',
  C1: 'border-b-violet-400',
  C2: 'border-b-purple-400',
};

interface CourseCardProps {
  course: Course;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export function CourseCard({ course, isFavorite, onToggleFavorite }: CourseCardProps) {
  const levelInfo = CECR_LEVELS.find((l) => l.value === course.level);
  const isComplete = course.progress === 100;

  return (
    <div className={`card-duo border-b-4 ${levelBorderColors[course.level] || 'border-b-border'} group`}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 flex gap-1.5">
          <Badge className={`${levelInfo?.color} font-bold text-xs`}>{course.level}</Badge>
          {course.isNew && (
            <Badge className="bg-cia-gold text-primary-foreground font-bold text-xs">✨ Nouveau</Badge>
          )}
        </div>
        {onToggleFavorite && (
          <button
            className="absolute top-2 right-2 h-8 w-8 rounded-full bg-card/90 backdrop-blur flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
            onClick={(e) => {
              e.preventDefault();
              onToggleFavorite(course.id);
            }}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-destructive text-destructive' : 'text-muted-foreground'}`} />
          </button>
        )}
        {/* Progress overlay */}
        {course.progress !== undefined && course.progress > 0 && (
          <div className="absolute bottom-2 right-2">
            <CircularProgress value={course.progress} size={44} strokeWidth={4} color={isComplete ? 'stroke-cia-success' : 'stroke-accent'}>
              {isComplete
                ? <Check className="h-4 w-4 text-cia-success" strokeWidth={3} />
                : <span className="text-[10px] font-bold">{course.progress}%</span>
              }
            </CircularProgress>
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-[10px] font-bold text-muted-foreground tracking-wider mb-1">{course.code}</p>
        <h3 className="font-display text-sm leading-tight mb-1.5 line-clamp-2">
          {course.title}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{course.description}</p>

        <div className="flex items-center justify-between mb-3">
          <span className="flex items-center gap-1 text-xs text-muted-foreground font-semibold">
            <Clock className="h-3 w-3" /> {course.duration} min
          </span>
          <div className="flex gap-1">
            {course.contentTypes.slice(0, 3).map((type) => {
              const info = contentTypeIcons[type];
              if (!info) return null;
              const Icon = info.icon;
              return (
                <div key={type} className={`h-6 w-6 rounded-md flex items-center justify-center ${info.color}`}>
                  <Icon className="h-3 w-3" />
                </div>
              );
            })}
          </div>
        </div>

        <Link to={`/cours/${course.id}`}>
          <Button
            size="sm"
            className={`w-full btn-duo text-xs font-bold ${
              isComplete
                ? 'bg-cia-success hover:bg-cia-success/90 text-primary-foreground'
                : course.progress && course.progress > 0
                  ? 'bg-accent hover:bg-accent/90 text-accent-foreground'
                  : ''
            }`}
          >
            {isComplete ? '✅ Revoir' : course.progress && course.progress > 0 ? '▶ Continuer' : '🚀 Commencer'}
          </Button>
        </Link>
      </div>
    </div>
  );
}
