import { Link } from 'react-router-dom';
import { Clock, Heart, BookOpen, Headphones, Video, FileText, Mic } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import type { Course } from '@/data/demo-courses';
import { CECR_LEVELS } from '@/data/demo-courses';

const contentTypeIcons: Record<string, React.ElementType> = {
  text: FileText,
  audio: Headphones,
  video: Video,
  qcm: BookOpen,
  flashcard: BookOpen,
  voice: Mic,
};

interface CourseCardProps {
  course: Course;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export function CourseCard({ course, isFavorite, onToggleFavorite }: CourseCardProps) {
  const levelInfo = CECR_LEVELS.find((l) => l.value === course.level);

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 flex gap-1.5">
          <Badge className={levelInfo?.color}>{course.level}</Badge>
          {course.isNew && (
            <Badge className="bg-cia-gold text-primary-foreground">Nouveau</Badge>
          )}
        </div>
        {onToggleFavorite && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 h-8 w-8 bg-card/80 backdrop-blur hover:bg-card"
            onClick={(e) => {
              e.preventDefault();
              onToggleFavorite(course.id);
            }}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-destructive text-destructive' : ''}`} />
          </Button>
        )}
      </div>
      <CardContent className="p-4">
        <p className="text-xs font-mono text-muted-foreground mb-1">{course.code}</p>
        <h3 className="font-display font-semibold text-base leading-tight mb-1.5 line-clamp-2">
          {course.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{course.description}</p>

        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> {course.duration} min
          </span>
          <div className="flex gap-1">
            {course.contentTypes.slice(0, 3).map((type) => {
              const Icon = contentTypeIcons[type] || FileText;
              return <Icon key={type} className="h-3.5 w-3.5" />;
            })}
          </div>
        </div>

        {course.progress !== undefined && course.progress > 0 && (
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Progression</span>
              <span className="font-medium">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-1.5" />
          </div>
        )}

        <Link to={`/cours/${course.id}`}>
          <Button variant="outline" size="sm" className="w-full mt-3">
            {course.progress && course.progress > 0 ? 'Continuer' : 'Commencer'}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
