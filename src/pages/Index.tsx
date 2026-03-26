import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Star, Trophy, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CourseCard } from '@/components/courses/CourseCard';
import { CircularProgress } from '@/components/gamification/CircularProgress';
import { AnimatedCounter } from '@/components/gamification/AnimatedCounter';
import { DailyGoal } from '@/components/gamification/DailyGoal';
import { Achievements } from '@/components/gamification/Achievements';
import { LearningPath } from '@/components/courses/LearningPath';
import { demoCourses, CECR_LEVELS } from '@/data/demo-courses';

const demoUser = {
  name: 'Marie',
  level: 'B1' as const,
  coursesCompleted: 12,
  totalCourses: 45,
  hoursStudied: 18,
  streak: 5,
  xp: 1250,
  gems: 42,
  dailyCompleted: 3,
  dailyGoal: 5,
};

const leaderboard = [
  { name: 'Lucas', xp: 2100, avatar: '👨‍🎓' },
  { name: 'Marie', xp: 1250, avatar: '👩‍🎓' },
  { name: 'Yuki', xp: 1180, avatar: '🧑‍🎓' },
  { name: 'Sofia', xp: 980, avatar: '👩‍💻' },
  { name: 'Ahmed', xp: 870, avatar: '👨‍💻' },
];

export default function Index() {
  const recentCourses = demoCourses.filter((c) => c.progress && c.progress > 0).slice(0, 3);
  const newCourses = demoCourses.filter((c) => c.isNew).slice(0, 4);
  const pathCourses = demoCourses.slice(0, 6);
  const overallProgress = Math.round((demoUser.coursesCompleted / demoUser.totalCourses) * 100);

  return (
    <div className="animate-fade-in pb-20 md:pb-0">
      {/* Hero section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent/80 text-primary-foreground">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 text-[200px] font-display">🇫🇷</div>
        </div>
        <div className="container relative py-10 md:py-14">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl animate-float">👋</span>
                <Badge className="bg-primary-foreground/20 text-primary-foreground border-0 font-bold">
                  Niveau {demoUser.level}
                </Badge>
              </div>
              <h1 className="font-display text-3xl md:text-4xl mb-2">
                Bonjour, {demoUser.name} !
              </h1>
              <p className="text-lg opacity-90 mb-5 max-w-lg">
                Continuez votre progression — vous êtes sur une belle lancée ! 🚀
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/catalogue">
                  <Button size="lg" className="btn-duo gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold">
                    <BookOpen className="h-4 w-4" />
                    Explorer les cours
                  </Button>
                </Link>
                <Link to="/test-niveau">
                  <Button size="lg" variant="outline" className="btn-duo gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bold">
                    <Star className="h-4 w-4" />
                    Test de niveau
                  </Button>
                </Link>
              </div>
            </div>
            {/* Stats bubbles */}
            <div className="flex md:flex-col gap-3">
              <div className="card-duo !bg-primary-foreground/15 !border-primary-foreground/20 p-3 text-center min-w-[80px]">
                <CircularProgress value={overallProgress} size={56} strokeWidth={5} color="stroke-primary-foreground">
                  <span className="text-sm font-bold">{overallProgress}%</span>
                </CircularProgress>
                <p className="text-[10px] font-semibold mt-1 opacity-80">Progression</p>
              </div>
              <div className="card-duo !bg-primary-foreground/15 !border-primary-foreground/20 p-3 text-center min-w-[80px]">
                <p className="text-2xl font-bold"><AnimatedCounter target={demoUser.xp} /></p>
                <p className="text-[10px] font-semibold opacity-80">⚡ XP total</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-8 space-y-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { icon: <Zap className="h-5 w-5" />, value: demoUser.coursesCompleted, label: 'Cours terminés', bg: 'bg-cia-success/15', color: 'text-cia-success' },
            { icon: <span className="text-lg">🔥</span>, value: demoUser.streak, label: 'Jours de série', bg: 'bg-cia-streak/15', color: 'text-cia-streak', suffix: '' },
            { icon: <span className="text-lg">⏱️</span>, value: demoUser.hoursStudied, label: 'Heures d\'étude', bg: 'bg-accent/15', color: 'text-accent', suffix: 'h' },
            { icon: <span className="text-lg">💎</span>, value: demoUser.gems, label: 'Gemmes', bg: 'bg-cia-gems/15', color: 'text-cia-gems' },
          ].map((stat, i) => (
            <div key={i} className="card-duo p-4 flex items-center gap-3" style={{ animationDelay: `${i * 100}ms` }}>
              <div className={`h-11 w-11 rounded-xl ${stat.bg} flex items-center justify-center ${stat.color}`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl font-bold">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix || ''} />
                </p>
                <p className="text-xs text-muted-foreground font-semibold">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Daily goal */}
            <DailyGoal completed={demoUser.dailyCompleted} goal={demoUser.dailyGoal} streak={demoUser.streak} />

            {/* Continue courses */}
            {recentCourses.length > 0 && (
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display text-xl">📖 Reprendre</h2>
                  <Link to="/catalogue" className="text-sm text-accent hover:underline flex items-center gap-1 font-bold">
                    Tout voir <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recentCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </section>
            )}

            {/* New courses */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-xl">
                  ✨ Nouveautés
                  <Badge className="ml-2 bg-cia-gold text-primary-foreground text-[10px]">
                    {newCourses.length}
                  </Badge>
                </h2>
                <Link to="/catalogue?filter=new" className="text-sm text-accent hover:underline flex items-center gap-1 font-bold">
                  Tout voir <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {newCourses.slice(0, 4).map((course, i) => (
                  <div key={course.id} className="animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            {/* Level progress */}
            <div className="card-duo p-5">
              <h3 className="font-display text-base mb-4">📊 Niveaux CECRL</h3>
              <div className="space-y-3">
                {CECR_LEVELS.slice(0, 4).map((level) => {
                  const levelCourses = demoCourses.filter((c) => c.level === level.value);
                  const completed = levelCourses.filter((c) => c.progress === 100).length;
                  const pct = levelCourses.length ? Math.round((completed / levelCourses.length) * 100) : 0;
                  return (
                    <div key={level.value} className="flex items-center gap-3">
                      <Badge className={`${level.color} w-10 justify-center text-xs font-bold`}>{level.value}</Badge>
                      <div className="flex-1 h-3 bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent rounded-full transition-all duration-1000"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground font-bold w-10 text-right">
                        {completed}/{levelCourses.length}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mini leaderboard */}
            <div className="card-duo p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-base">🏆 Classement</h3>
                <Users className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                {leaderboard.map((user, i) => (
                  <div
                    key={user.name}
                    className={`flex items-center gap-3 p-2 rounded-xl transition-all ${
                      user.name === 'Marie' ? 'bg-accent/10 border border-accent/20' : ''
                    }`}
                  >
                    <span className="text-sm font-bold w-5 text-center">
                      {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}`}
                    </span>
                    <span className="text-xl">{user.avatar}</span>
                    <span className="flex-1 text-sm font-bold">{user.name}</span>
                    <span className="text-xs font-bold text-cia-xp">{user.xp} XP</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <Achievements />

            {/* Learning path preview */}
            <div className="card-duo p-5">
              <h3 className="font-display text-base mb-2">🗺️ Parcours</h3>
              <LearningPath courses={pathCourses} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
