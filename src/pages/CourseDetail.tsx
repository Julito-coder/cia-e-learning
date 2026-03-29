import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, FileText, Headphones, Video, BookOpen, Mic, Play, Trophy, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { LevelBadge } from '@/components/courses/LevelBadge';
import { demoCourses } from '@/data/demo-courses';
import { getCourseContent } from '@/data/course-content';
import { getLessonById, curriculum } from '@/data/curriculum';
import { CoursePlayer } from '@/components/course-player/CoursePlayer';
import { useUserProgress, isLevelAccessible } from '@/hooks/useUserProgress';
import { getNewlyUnlockedModules, isModuleComplete, computeLevelFromProgress } from '@/hooks/useModuleUnlock';
import { toast } from 'sonner';

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
  
  // Check if this is a curriculum lesson (lesson-N) or a legacy demo course
  const isCurriculumLesson = id?.startsWith('lesson-');
  const lessonId = isCurriculumLesson ? parseInt(id!.replace('lesson-', '')) : null;
  const curriculumData = lessonId ? getLessonById(lessonId) : null;
  
  const course = isCurriculumLesson ? null : demoCourses.find((c) => c.id === id);
  const content = id ? getCourseContent(id) : undefined;
  const [playing, setPlaying] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const { cecrLevel, addXP, setLevel } = useUserProgress();

  // Build a virtual course object for curriculum lessons
  const displayCourse = course || (curriculumData ? {
    id: id!,
    code: `${curriculumData.module.id}-${String(curriculumData.lesson.id).padStart(3, '0')}`,
    title: curriculumData.lesson.title,
    description: curriculumData.lesson.description,
    level: curriculumData.level.level,
    theme: curriculumData.module.theme as any,
    duration: 10,
    isNew: false,
    imageUrl: 'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=800&h=500&fit=crop&q=80',
    contentTypes: ['text', 'qcm', 'fill-blank'] as any[],
  } : null);

  if (!displayCourse) {
    return (
      <div className="container py-16 text-center">
        <p className="text-lg text-muted-foreground">Cours introuvable.</p>
        <Link to="/programme">
          <Button variant="outline" className="mt-4">Retour au programme</Button>
        </Link>
      </div>
    );
  }

  const locked = !isLevelAccessible(displayCourse.level, cecrLevel);

  if (playing && content && !locked) {
    return (
      <CoursePlayer
        content={content}
        courseTitle={displayCourse.title}
        onExit={() => setPlaying(false)}
        onComplete={async (score) => {
          setFinalScore(score);
          setCompleted(true);
          setPlaying(false);

          // Save progress
          const progress = JSON.parse(localStorage.getItem('course-progress') || '{}');
          progress[displayCourse.id] = { score, completed: true, date: new Date().toISOString() };
          localStorage.setItem('course-progress', JSON.stringify(progress));

          // Award XP based on score
          const xpEarned = Math.round(score * 5);
          const { leveledUp, newLevel } = await addXP(xpEarned);
          toast.success(`+${xpEarned} XP gagnés !`);

          // Check if a module was just completed and unlock notifications
          if (curriculumData) {
            const mod = curriculumData.module;
            if (isModuleComplete(mod)) {
              // Badge earned toast
              toast.success(`🏅 Badge obtenu : ${mod.badgeEmoji} ${mod.badge}`, { duration: 5000 });

              // Check newly unlocked modules
              const unlocked = getNewlyUnlockedModules(mod.id);
              for (const u of unlocked) {
                setTimeout(() => {
                  toast(`🔓 Module débloqué : ${u.badgeEmoji} ${u.id} — ${u.title}`, { duration: 6000 });
                }, 1500);
              }

              // Update CECR level based on progress
              const newComputedLevel = computeLevelFromProgress();
              if (newComputedLevel !== cecrLevel) {
                await setLevel(newComputedLevel as any);
                toast.success(`🎉 Niveau supérieur ! Vous êtes maintenant ${newComputedLevel} !`, { duration: 5000 });
              }
            }
          }
        }}
      />
    );
  }

  // Check saved progress
  const savedProgress = JSON.parse(localStorage.getItem('course-progress') || '{}');
  const courseProgress = savedProgress[displayCourse.id];
  const displayScore = completed ? finalScore : courseProgress?.score;
  const isCompleted = completed || courseProgress?.completed;

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={displayCourse.imageUrl} alt={displayCourse.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
          <div className="container">
            <Link to="/catalogue" className="inline-flex items-center gap-1 text-sm opacity-80 hover:opacity-100 mb-3">
              <ArrowLeft className="h-4 w-4" /> Catalogue
            </Link>
            <div className="flex items-center gap-2 mb-2">
              <LevelBadge level={displayCourse.level} />
              <Badge variant="outline" className="text-primary-foreground border-primary-foreground/30">
                {displayCourse.theme}
              </Badge>
              {displayCourse.isNew && <Badge className="bg-accent text-accent-foreground">Nouveau</Badge>}
              {locked && <Badge className="bg-destructive text-destructive-foreground">🔒 Verrouillé</Badge>}
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-bold">{displayCourse.title}</h1>
            <p className="text-sm font-mono opacity-70 mt-1">{displayCourse.code}</p>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main */}
          <div className="lg:col-span-2 space-y-6">
            {/* Locked banner */}
            {locked && (
              <div className="flex items-center gap-4 p-4 rounded-xl bg-amber-50 border-2 border-amber-200 dark:bg-amber-950 dark:border-amber-800">
                <Lock className="h-8 w-8 text-amber-600" />
                <div>
                  <p className="font-bold text-amber-700 dark:text-amber-400">Cours verrouillé</p>
                  <p className="text-sm text-amber-600 dark:text-amber-500">
                    Atteignez le niveau {displayCourse.level} (5000 XP par niveau) pour débloquer ce cours.
                    Votre niveau actuel : {cecrLevel}
                  </p>
                </div>
              </div>
            )}

            {/* Completed banner */}
            {!locked && isCompleted && (
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
                <p className="text-muted-foreground">{displayCourse.description}</p>
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
                    displayCourse.contentTypes.map((type) => {
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
                {locked ? (
                  <Button size="lg" className="w-full gap-2" disabled>
                    <Lock className="h-4 w-4" /> Niveau {displayCourse.level} requis
                  </Button>
                ) : content ? (
                  <Button size="lg" className="w-full gap-2" onClick={() => setPlaying(true)}>
                    <Play className="h-4 w-4" />
                    {isCompleted ? 'Refaire le cours' : courseProgress ? 'Continuer le cours' : 'Commencer le cours'}
                  </Button>
                ) : (
                  <Button size="lg" className="w-full gap-2" disabled>
                    <Play className="h-4 w-4" /> Bientôt disponible
                  </Button>
                )}
                {content && !locked && (
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
                  Durée estimée : {displayCourse.duration} minutes
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
