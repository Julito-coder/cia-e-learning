import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, FileText, Headphones, Video, BookOpen, Mic, Play, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { LevelBadge } from '@/components/courses/LevelBadge';
import { demoCourses } from '@/data/demo-courses';
import { getCourseContent } from '@/data/course-content';
import { CoursePlayer } from '@/components/course-player/CoursePlayer';

const contentTypeLabels: Record<string, { label: string; icon: React.ElementType }> = {
  text: { label: 'Texte', icon: FileText },
  audio: { label: 'Audio', icon: Headphones },
  video: { label: 'Vidéo', icon: Video },
  qcm: { label: 'QCM', icon: BookOpen },
  'drag-drop': { label: 'Glisser-déposer', icon: BookOpen },
  'fill-blank': { label: 'Texte à trous', icon: FileText },
  flashcard: { label: 'Flashcards', icon: BookOpen },
  voice: { label: 'Enregistrement vocal', icon: Mic },
};

export default function CourseDetail() {
  const { id } = useParams();
  const course = demoCourses.find((c) => c.id === id);
  const content = id ? getCourseContent(id) : undefined;
  const [playing, setPlaying] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  if (!course) {
    return (
      <div className="container py-16 text-center">
        <p className="text-lg text-muted-foreground">Cours introuvable.</p>
        <Link to="/catalogue">
          <Button variant="outline" className="mt-4">Retour au catalogue</Button>
        </Link>
      </div>
    );
  }

  if (playing && content) {
    return (
      <CoursePlayer
        content={content}
        courseTitle={course.title}
        onExit={() => setPlaying(false)}
        onComplete={(score) => {
          setFinalScore(score);
          setCompleted(true);
          setPlaying(false);
          // Save progress
          const progress = JSON.parse(localStorage.getItem('course-progress') || '{}');
          progress[course.id] = { score, completed: true, date: new Date().toISOString() };
          localStorage.setItem('course-progress', JSON.stringify(progress));
        }}
      />
    );
  }

  // Check saved progress
  const savedProgress = JSON.parse(localStorage.getItem('course-progress') || '{}');
  const courseProgress = savedProgress[course.id];
  const displayScore = completed ? finalScore : courseProgress?.score;
  const isCompleted = completed || courseProgress?.completed;

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={course.imageUrl} alt={course.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
          <div className="container">
            <Link to="/catalogue" className="inline-flex items-center gap-1 text-sm opacity-80 hover:opacity-100 mb-3">
              <ArrowLeft className="h-4 w-4" /> Catalogue
            </Link>
            <div className="flex items-center gap-2 mb-2">
              <LevelBadge level={course.level} />
              <Badge variant="outline" className="text-primary-foreground border-primary-foreground/30">
                {course.theme}
              </Badge>
              {course.isNew && <Badge className="bg-accent text-accent-foreground">Nouveau</Badge>}
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-bold">{course.title}</h1>
            <p className="text-sm font-mono opacity-70 mt-1">{course.code}</p>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main */}
          <div className="lg:col-span-2 space-y-6">
            {/* Completed banner */}
            {isCompleted && (
              <div className="flex items-center gap-4 p-4 rounded-xl bg-green-50 border-2 border-green-200 dark:bg-green-950 dark:border-green-800">
                <Trophy className="h-8 w-8 text-green-600" />
                <div>
                  <p className="font-bold text-green-700 dark:text-green-400">Cours terminé !</p>
                  <p className="text-sm text-green-600 dark:text-green-500">Score : {displayScore}/100</p>
                </div>
              </div>
            )}

            <Card>
              <CardHeader><CardTitle>Description</CardTitle></CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{course.description}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Contenu du cours</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {content ? (
                    content.steps.map((s, i) => {
                      const typeInfo = contentTypeLabels[s.type] || { label: s.type, icon: BookOpen };
                      const Icon = typeInfo.icon;
                      return (
                        <div key={s.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                          <span className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                            {i + 1}
                          </span>
                          <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                            <Icon className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium">{s.title}</span>
                          <Badge variant="outline" className="ml-auto text-xs capitalize">{s.type}</Badge>
                        </div>
                      );
                    })
                  ) : (
                    course.contentTypes.map((type) => {
                      const info = contentTypeLabels[type];
                      if (!info) return null;
                      const Icon = info.icon;
                      return (
                        <div key={type} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                          <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                            <Icon className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium">{info.label}</span>
                          <Badge variant="outline" className="ml-auto text-xs">Bientôt</Badge>
                        </div>
                      );
                    })
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <Card>
              <CardContent className="p-5 space-y-4">
                {content ? (
                  <Button size="lg" className="w-full gap-2" onClick={() => setPlaying(true)}>
                    <Play className="h-4 w-4" />
                    {isCompleted ? 'Refaire le cours' : courseProgress ? 'Continuer le cours' : 'Commencer le cours'}
                  </Button>
                ) : (
                  <Button size="lg" className="w-full gap-2" disabled>
                    <Play className="h-4 w-4" /> Bientôt disponible
                  </Button>
                )}
                {content && (
                  <p className="text-xs text-muted-foreground text-center">
                    {content.steps.length} étapes interactives
                  </p>
                )}
                {displayScore !== undefined && (
                  <>
                    <Separator />
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Score</span>
                      <span className="font-medium">{displayScore}/100</span>
                    </div>
                  </>
                )}
                <Separator />
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  Durée estimée : {course.duration} minutes
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
