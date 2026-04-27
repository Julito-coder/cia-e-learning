import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, BookOpen, Star, Trophy, Users, Zap, Flame, Play, Check, Sparkles } from 'lucide-react';
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
import { useLeague } from '@/hooks/useLeague';
import { Progress } from '@/components/ui/progress';

const LEAGUE_META: Record<'bronze' | 'argent' | 'or', { label: string; emoji: string; ring: string; chip: string }> = {
  bronze: { label: 'Bronze',  emoji: '🥉', ring: 'ring-amber-700/30',  chip: 'bg-amber-700/10 text-amber-700' },
  argent: { label: 'Argent', emoji: '🥈', ring: 'ring-slate-400/40',  chip: 'bg-slate-400/15 text-slate-500' },
  or:     { label: 'Or',     emoji: '🥇', ring: 'ring-yellow-400/40', chip: 'bg-yellow-400/15 text-yellow-600' },
};

export default function Index() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { totalXP, cecrLevel, xpProgress } = useUserProgress();
  const { dailyLesson, streak, isDoneToday } = useDailyChallenge();
  const { myLeague, myWeeklyXP, members } = useLeague();

  const myRank = (() => {
    if (!user) return null;
    const idx = members.findIndex((m) => m.user_id === user.id);
    return idx >= 0 ? idx + 1 : null;
  })();
  const leagueMeta = LEAGUE_META[myLeague];

  const userName = user?.user_metadata?.first_name || user?.email?.split('@')[0] || 'Apprenant';
  const recentCourses = demoCourses.filter((c) => c.progress && c.progress > 0).slice(0, 3);
  const newCourses = demoCourses.filter((c) => c.isNew).slice(0, 4);
  // Get first level's modules for path preview
  const currentLevelData = curriculum.find(l => l.level === cecrLevel) || curriculum[0];
  const pathModules = currentLevelData.modules;

  return (
    <div className="animate-fade-in pb-24 md:pb-0">
      {/* Hero — moderne, clair et minimaliste */}
      <section className="relative overflow-hidden border-b border-border/40 bg-card">
        {/* Décor : halos de couleur très doux */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
              backgroundSize: '28px 28px',
            }}
          />
        </div>

        <div className="container relative py-10 md:py-14">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                <Sparkles className="h-3.5 w-3.5" />
                {t('hero.level', { level: cecrLevel })}
              </div>
              <h1 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight mb-3">
                {t('hero.greeting', { name: userName })}{' '}
                <span className="text-3xl md:text-5xl">👋</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-6">
                {t('hero.subtitle')}
              </p>

              {/* XP progress */}
              <div className="max-w-md mb-6">
                <div className="flex justify-between text-xs font-semibold text-muted-foreground mb-1.5">
                  <span>Progression {cecrLevel}</span>
                  <span className="tabular-nums">
                    {xpProgress.current} / {xpProgress.needed} XP
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700"
                    style={{ width: `${xpProgress.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link to="/catalogue">
                  <Button size="lg" className="btn-duo gap-2 font-bold">
                    <BookOpen className="h-4 w-4" />
                    {t('hero.explore')}
                  </Button>
                </Link>
                <Link to="/test-niveau">
                  <Button size="lg" variant="outline" className="btn-duo gap-2 font-bold border-2">
                    <Star className="h-4 w-4" />
                    {t('hero.test')}
                  </Button>
                </Link>
                <Link to="/classement">
                  <Button size="lg" variant="ghost" className="btn-duo gap-2 font-bold">
                    <Trophy className="h-4 w-4" />
                    Classement
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stat cards — glass minimal */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:w-44">
              <div className="rounded-2xl border border-border bg-background/60 backdrop-blur p-4 text-center">
                <p className="text-3xl font-bold text-cia-xp tabular-nums">
                  <AnimatedCounter target={totalXP} />
                </p>
                <p className="text-[10px] font-semibold mt-1 text-muted-foreground uppercase tracking-wide">
                  {t('hero.xpTotal')}
                </p>
              </div>
              <Link
                to="/classement"
                className="rounded-2xl border border-border bg-background/60 backdrop-blur p-4 text-center hover:border-primary/50 hover:bg-primary/5 transition-colors group"
              >
                <p className="text-3xl font-bold text-primary inline-flex items-center gap-1.5 justify-center">
                  <Trophy className="h-5 w-5" />
                  {cecrLevel}
                </p>
                <p className="text-[10px] font-semibold mt-1 text-muted-foreground uppercase tracking-wide group-hover:text-primary">
                  Mon niveau
                </p>
              </Link>
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
            {/* Daily challenge highlight */}
            <Link to="/defi-du-jour" className="block">
              <div className={`card-duo p-5 transition-all hover:scale-[1.01] ${
                isDoneToday
                  ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 border-green-300'
                  : 'bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 border-orange-300'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`h-12 w-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    isDoneToday ? 'bg-green-500 text-white' : 'bg-gradient-to-br from-orange-400 to-red-500 text-white shadow-lg'
                  }`}>
                    {isDoneToday ? <Check className="h-6 w-6" /> : <Flame className="h-6 w-6" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className={isDoneToday ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'}>
                        DÉFI DU JOUR
                      </Badge>
                      <span className="text-xs font-bold text-cia-streak inline-flex items-center gap-1">
                        <Flame className="h-3.5 w-3.5" /> {streak} {streak > 1 ? 'jours' : 'jour'}
                      </span>
                    </div>
                    <h3 className="font-display text-base leading-tight">
                      {dailyLesson ? dailyLesson.title : 'Pas de leçon disponible'}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {isDoneToday ? '🎉 Bravo ! Reviens demain.' : `Niveau ${cecrLevel} · +25 XP bonus`}
                    </p>
                  </div>
                  {!isDoneToday && (
                    <button className="hidden sm:flex h-10 w-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white items-center justify-center shadow-md flex-shrink-0">
                      <Play className="h-4 w-4 ml-0.5" fill="currentColor" />
                    </button>
                  )}
                </div>
              </div>
            </Link>

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

            {/* Mini ligue → vraie ligue de l'utilisateur */}
            <Link to="/classement" className="card-duo p-5 block hover:border-primary/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-base">Ma ligue</h3>
                <span className="text-xs font-bold text-primary inline-flex items-center gap-1">
                  Voir tout <ArrowRight className="h-3 w-3" />
                </span>
              </div>

              {/* Ma carte ligue */}
              <div className={`flex items-center gap-3 p-3 rounded-2xl bg-muted/40 ring-1 ${leagueMeta.ring} mb-3`}>
                <div className="text-3xl leading-none">{leagueMeta.emoji}</div>
                <div className="flex-1 min-w-0">
                  <p className="font-display text-base leading-tight">Ligue {leagueMeta.label}</p>
                  <p className="text-[11px] text-muted-foreground font-semibold">
                    {user
                      ? myRank
                        ? <>Rang <span className="text-foreground font-bold">#{myRank}</span> · {myWeeklyXP} XP cette semaine</>
                        : <>{myWeeklyXP} XP cette semaine</>
                      : 'Connecte-toi pour participer'}
                  </p>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold ${leagueMeta.chip}`}>
                  {leagueMeta.label.toUpperCase()}
                </span>
              </div>

              {/* Top 5 de ma ligue */}
              <div className="space-y-1.5">
                {members.slice(0, 5).map((m, i) => {
                  const isMe = user?.id === m.user_id;
                  const name = (m.first_name || m.last_name)
                    ? `${m.first_name || ''} ${m.last_name ? m.last_name[0] + '.' : ''}`.trim()
                    : 'Apprenant';
                  const initial = (m.first_name?.[0] || m.last_name?.[0] || '?').toUpperCase();
                  return (
                    <div
                      key={m.user_id}
                      className={`flex items-center gap-3 p-2 rounded-xl transition-all ${
                        isMe ? 'bg-primary/10 border border-primary/30' : ''
                      }`}
                    >
                      <span className="text-sm font-bold w-5 text-center">
                        {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}`}
                      </span>
                      {m.avatar_url ? (
                        <img src={m.avatar_url} alt="" className="h-7 w-7 rounded-full object-cover" />
                      ) : (
                        <div className="h-7 w-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">{initial}</div>
                      )}
                      <span className="flex-1 text-sm font-bold truncate">
                        {name}{isMe && <span className="ml-1 text-[10px] text-primary">(vous)</span>}
                      </span>
                      <span className="text-xs font-bold text-cia-xp tabular-nums">{m.weekly_xp} XP</span>
                    </div>
                  );
                })}
                {members.length === 0 && (
                  <p className="text-xs text-muted-foreground text-center py-3">
                    Termine des leçons pour entrer dans le classement de la semaine 🚀
                  </p>
                )}
              </div>
            </Link>

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