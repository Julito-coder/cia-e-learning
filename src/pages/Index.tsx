import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, BookOpen, Star, Trophy, Users, Zap, Flame, Play, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CourseCard } from '@/components/courses/CourseCard';
import { CircularProgress } from '@/components/gamification/CircularProgress';
import { AnimatedCounter } from '@/components/gamification/AnimatedCounter';
import { useDailyChallenge } from '@/hooks/useDailyChallenge';
import { Achievements } from '@/components/gamification/Achievements';
import { LearningPath } from '@/components/courses/LearningPath';
import { CharacterShowcase } from '@/components/characters/CharacterShowcase';
import { demoCourses, CECR_LEVELS } from '@/data/demo-courses';
import { curriculum } from '@/data/curriculum';
import { useAuth } from '@/hooks/useAuth';
import { useUserProgress } from '@/hooks/useUserProgress';
import { Progress } from '@/components/ui/progress';

const leaderboard = [
  { name: 'Lucas', xp: 2100, avatar: '👨‍🎓' },
  { name: 'Marie', xp: 1250, avatar: '👩‍🎓' },
  { name: 'Yuki', xp: 1180, avatar: '🧑‍🎓' },
  { name: 'Sofia', xp: 980, avatar: '👩‍💻' },
  { name: 'Ahmed', xp: 870, avatar: '👨‍💻' },
];

export default function Index() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { totalXP, cecrLevel, xpProgress } = useUserProgress();
  const { dailyLesson, streak, isDoneToday } = useDailyChallenge();

  const userName = user?.user_metadata?.first_name || user?.email?.split('@')[0] || 'Apprenant';
  const recentCourses = demoCourses.filter((c) => c.progress && c.progress > 0).slice(0, 3);
  const newCourses = demoCourses.filter((c) => c.isNew).slice(0, 4);
  // Get first level's modules for path preview
  const currentLevelData = curriculum.find(l => l.level === cecrLevel) || curriculum[0];
  const pathModules = currentLevelData.modules;

  return (
    <div className="animate-fade-in pb-24 md:pb-0">
      {/* Hero section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent/70 text-primary-foreground">
        {/* Modern geometric pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-primary-foreground/30" />
          <div className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full border border-primary-foreground/20" />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full border border-primary-foreground/20" />
        </div>
        <div className="container relative py-10 md:py-14">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl animate-float">👋</span>
                <Badge className="bg-primary-foreground/20 text-primary-foreground border-0 font-bold">
                  {t('hero.level', { level: cecrLevel })}
                </Badge>
              </div>
              <h1 className="font-display text-3xl md:text-4xl mb-2">
                {t('hero.greeting', { name: userName })}
              </h1>
              <p className="text-lg opacity-90 mb-3 max-w-lg">
                {t('hero.subtitle')}
              </p>
              {/* XP progress bar */}
              <div className="max-w-sm mb-5">
                <div className="flex justify-between text-xs opacity-80 mb-1">
                  <span>{cecrLevel}</span>
                  <span>{xpProgress.current} / {xpProgress.needed} XP</span>
                </div>
                <div className="h-2.5 bg-primary-foreground/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-foreground/60 rounded-full transition-all duration-700" style={{ width: `${xpProgress.progress}%` }} />
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/catalogue">
                  <Button size="lg" className="btn-duo gap-2 bg-destructive text-destructive-foreground hover:bg-destructive/90 font-bold">
                    <BookOpen className="h-4 w-4" />
                    {t('hero.explore')}
                  </Button>
                </Link>
                <Link to="/test-niveau">
                  <Button size="lg" variant="outline" className="btn-duo gap-2 border-2 border-primary-foreground/40 text-primary font-bold bg-primary-foreground hover:bg-primary-foreground/90">
                    <Star className="h-4 w-4" />
                    {t('hero.test')}
                  </Button>
                </Link>
              </div>
            </div>
            {/* Stats bubbles */}
            <div className="flex md:flex-col gap-3">
              <div className="card-duo !bg-primary-foreground/15 !border-primary-foreground/20 p-3 text-center min-w-[80px]">
                <p className="text-2xl font-bold"><AnimatedCounter target={totalXP} /></p>
                <p className="text-[10px] font-semibold mt-1 opacity-80">{t('hero.xpTotal')}</p>
              </div>
              <div className="card-duo !bg-primary-foreground/15 !border-primary-foreground/20 p-3 text-center min-w-[80px]">
                <p className="text-2xl font-bold">{cecrLevel}</p>
                <p className="text-[10px] font-semibold opacity-80">Niveau</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-8 space-y-8">
        {/* Stats row */}
        {/* Stats row — fills better on tablet */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: <Zap className="h-5 w-5" />, value: 0, label: t('stats.coursesCompleted'), bg: 'bg-cia-success/15', color: 'text-cia-success' },
            { icon: <span className="text-lg">🔥</span>, value: 0, label: t('stats.streak'), bg: 'bg-cia-streak/15', color: 'text-cia-streak' },
            { icon: <span className="text-lg">⚡</span>, value: totalXP, label: 'XP Total', bg: 'bg-cia-xp/15', color: 'text-cia-xp' },
            { icon: <span className="text-lg">🏆</span>, value: cecrLevel as any, label: 'Niveau CECRL', bg: 'bg-accent/15', color: 'text-accent', isText: true },
          ].map((stat, i) => (
            <div key={i} className="card-duo p-4 flex items-center gap-3" style={{ animationDelay: `${i * 100}ms` }}>
              <div className={`h-11 w-11 rounded-xl ${stat.bg} flex items-center justify-center ${stat.color}`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {(stat as any).isText ? stat.value : <AnimatedCounter target={stat.value as number} />}
                </p>
                <p className="text-xs text-muted-foreground font-semibold">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Daily goal */}
            <DailyGoal completed={0} goal={5} streak={0} />

            {/* Continue courses */}
            {recentCourses.length > 0 && (
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display text-xl">{t('sections.continue')}</h2>
                  <Link to="/catalogue" className="text-sm text-destructive hover:underline flex items-center gap-1 font-bold">
                    {t('sections.seeAll')} <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {recentCourses.map((course) => (
                    <CourseCard key={course.id} course={course} userLevel={cecrLevel} />
                  ))}
                </div>
              </section>
            )}

            {/* New courses */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-xl">
                  {t('sections.new')}
                  <Badge className="ml-2 bg-cia-gold text-primary-foreground text-[10px]">
                    {newCourses.length}
                  </Badge>
                </h2>
                <Link to="/catalogue?filter=new" className="text-sm text-destructive hover:underline flex items-center gap-1 font-bold">
                  {t('sections.seeAll')} <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {newCourses.slice(0, 4).map((course, i) => (
                  <div key={course.id} className="animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                    <CourseCard course={course} userLevel={cecrLevel} />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right sidebar — level + leaderboard + achievements */}
          <div className="space-y-6 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 lg:grid-cols-1 lg:space-y-6 lg:block">
            {/* Level progress */}
            <div className="card-duo p-5">
              <h3 className="font-display text-base mb-4">{t('sections.levels')}</h3>
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
                <h3 className="font-display text-base">{t('sections.leaderboard')}</h3>
                <Users className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                {leaderboard.map((u, i) => (
                  <div
                    key={u.name}
                    className={`flex items-center gap-3 p-2 rounded-xl transition-all ${
                      u.name === 'Marie' ? 'bg-accent/10 border border-accent/20' : ''
                    }`}
                  >
                    <span className="text-sm font-bold w-5 text-center">
                      {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}`}
                    </span>
                    <span className="text-xl">{u.avatar}</span>
                    <span className="flex-1 text-sm font-bold">{u.name}</span>
                    <span className="text-xs font-bold text-cia-xp">{u.xp} XP</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <Achievements />
          </div>
        </div>

        {/* Characters — full-width section */}
        <section>
          <div className="card-duo p-4 md:p-5">
            <h3 className="font-display text-base mb-3">Nos personnages</h3>
            <CharacterShowcase cecrLevel={cecrLevel} />
          </div>
        </section>

        {/* Learning Path — full-width section */}
        <section>
          <div className="card-duo p-4 md:p-5 overflow-visible">
            <h3 className="font-display text-base mb-2">{t('sections.path')}</h3>
            <LearningPath modules={pathModules} />
          </div>
        </section>
      </div>
    </div>
  );
}