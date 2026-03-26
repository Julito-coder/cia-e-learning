import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Award, Clock, ArrowRight, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CourseCard } from '@/components/courses/CourseCard';
import { demoCourses, CECR_LEVELS } from '@/data/demo-courses';

// Demo user data
const demoUser = {
  name: 'Marie',
  level: 'B1' as const,
  coursesCompleted: 12,
  totalCourses: 45,
  hoursStudied: 18,
  streak: 5,
};

export default function Index() {
  const recentCourses = demoCourses.filter((c) => c.progress && c.progress > 0).slice(0, 3);
  const newCourses = demoCourses.filter((c) => c.isNew).slice(0, 4);
  const recommendedCourses = demoCourses.filter((c) => c.level === demoUser.level).slice(0, 3);
  const overallProgress = Math.round((demoUser.coursesCompleted / demoUser.totalCourses) * 100);

  return (
    <div className="animate-fade-in">
      {/* Hero section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/cia-logo-1.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative py-12 md:py-16">
          <div className="max-w-2xl">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Bonjour, {demoUser.name} ! 👋
            </h1>
            <p className="text-lg opacity-90 mb-6">
              Continuez votre apprentissage du français. Vous êtes au niveau{' '}
              <span className="font-semibold">{demoUser.level}</span> — bravo pour vos progrès !
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/catalogue">
                <Button size="lg" variant="secondary" className="gap-2">
                  <BookOpen className="h-4 w-4" />
                  Explorer les cours
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Star className="h-4 w-4" />
                Passer le test de niveau
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-8 space-y-10">
        {/* Stats cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">{overallProgress}%</p>
                <p className="text-xs text-muted-foreground">Progression globale</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-cia-success/20 flex items-center justify-center">
                <Award className="h-5 w-5 text-cia-success" />
              </div>
              <div>
                <p className="text-2xl font-bold">{demoUser.coursesCompleted}</p>
                <p className="text-xs text-muted-foreground">Cours terminés</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-cia-gold/20 flex items-center justify-center">
                <Clock className="h-5 w-5 text-cia-gold" />
              </div>
              <div>
                <p className="text-2xl font-bold">{demoUser.hoursStudied}h</p>
                <p className="text-xs text-muted-foreground">Heures d'étude</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-destructive/20 flex items-center justify-center">
                <span className="text-lg">🔥</span>
              </div>
              <div>
                <p className="text-2xl font-bold">{demoUser.streak} jours</p>
                <p className="text-xs text-muted-foreground">Série en cours</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Level progress */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Votre progression par niveau</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {CECR_LEVELS.slice(0, 4).map((level) => {
              const levelCourses = demoCourses.filter((c) => c.level === level.value);
              const completed = levelCourses.filter((c) => c.progress === 100).length;
              const pct = levelCourses.length ? Math.round((completed / levelCourses.length) * 100) : 0;
              return (
                <div key={level.value} className="flex items-center gap-4">
                  <Badge className={`${level.color} w-12 justify-center`}>{level.value}</Badge>
                  <div className="flex-1">
                    <Progress value={pct} className="h-2" />
                  </div>
                  <span className="text-sm text-muted-foreground w-16 text-right">
                    {completed}/{levelCourses.length}
                  </span>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Recent courses */}
        {recentCourses.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-xl font-semibold">Reprendre vos cours</h2>
              <Link to="/catalogue" className="text-sm text-accent hover:underline flex items-center gap-1">
                Voir tout <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {recentCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>
        )}

        {/* New courses */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-semibold">
              Nouveaux cours
              <Badge className="ml-2 bg-cia-gold text-primary-foreground">
                {newCourses.length} nouveautés
              </Badge>
            </h2>
            <Link to="/catalogue?filter=new" className="text-sm text-accent hover:underline flex items-center gap-1">
              Voir tout <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {newCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Recommended */}
        {recommendedCourses.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-xl font-semibold">
                Recommandés pour vous
                <span className="text-sm font-body font-normal text-muted-foreground ml-2">(niveau {demoUser.level})</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {recommendedCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
