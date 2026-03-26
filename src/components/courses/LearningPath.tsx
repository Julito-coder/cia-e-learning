import { Link } from 'react-router-dom';
import { Check, Lock, Star, Play } from 'lucide-react';
import type { Course } from '@/data/demo-courses';

interface LearningPathProps {
  courses: Course[];
}

function getNodeState(course: Course) {
  if (course.progress === 100) return 'complete';
  if (course.progress && course.progress > 0) return 'active';
  return 'available';
}

const nodeColors = {
  complete: 'bg-cia-success border-cia-success text-primary-foreground',
  active: 'bg-accent border-accent text-accent-foreground animate-pulse-soft',
  available: 'bg-card border-border text-foreground hover:border-accent hover:scale-110',
  locked: 'bg-muted border-muted text-muted-foreground',
};

export function LearningPath({ courses }: LearningPathProps) {
  return (
    <div className="relative flex flex-col items-center gap-2 py-4">
      {courses.map((course, i) => {
        const state = getNodeState(course);
        const offset = i % 2 === 0 ? '-translate-x-8' : 'translate-x-8';

        return (
          <div key={course.id} className="relative flex flex-col items-center">
            {/* Connector line */}
            {i > 0 && (
              <div className="w-1 h-6 bg-border -mt-2 mb-1 rounded-full" />
            )}
            {/* Node */}
            <Link
              to={`/cours/${course.id}`}
              className={`${offset} level-node w-16 h-16 rounded-full border-4 ${nodeColors[state]} transition-all duration-300 group`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {state === 'complete' && <Check className="h-6 w-6" strokeWidth={3} />}
              {state === 'active' && <Play className="h-5 w-5 ml-0.5" fill="currentColor" />}
              {state === 'available' && <Star className="h-5 w-5" />}
              {state === 'locked' && <Lock className="h-5 w-5" />}
            </Link>
            {/* Label */}
            <div className={`${offset} mt-1 text-center max-w-[120px]`}>
              <p className="text-xs font-bold leading-tight line-clamp-2">{course.title}</p>
              {course.progress !== undefined && course.progress > 0 && course.progress < 100 && (
                <p className="text-[10px] text-accent font-semibold">{course.progress}%</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
