import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useUserProgress } from '@/hooks/useUserProgress';
import { useDailyChallenge } from '@/hooks/useDailyChallenge';
import { useLastLessonOpened } from '@/hooks/useLastLessonOpened';
import { useRecommendedLessons } from '@/hooks/useRecommendedLessons';
import { DashboardHero } from '@/components/dashboard/DashboardHero';
import { ResumeCard } from '@/components/dashboard/ResumeCard';
import { DailyChallengeCard } from '@/components/dashboard/DailyChallengeCard';
import { MiniZigzag } from '@/components/dashboard/MiniZigzag';
import { RecommendedCarousel } from '@/components/dashboard/RecommendedCarousel';
import { QuickShortcuts } from '@/components/dashboard/QuickShortcuts';
import { DashboardSkeleton } from '@/components/dashboard/DashboardSkeleton';

/**
 * Reveal premium :
 *   1) DashboardHero gère sa propre stagger interne (eyebrow → h1 → sub → Spark).
 *   2) Le bloc « cards » prend le relais via un stagger global à delayChildren:0.5
 *      pour ne pas concurrencer le hero. Spring stiffness 260 / damping 26.
 *   Tout est gated `useReducedMotion`.
 */
const SPRING = { type: 'spring' as const, stiffness: 260, damping: 26 };

export default function Dashboard() {
  const { user } = useAuth();
  const { cecrLevel, loading: progressLoading } = useUserProgress();
  const { streak, isDoneToday, loading: dailyLoading } = useDailyChallenge();
  const lastLesson = useLastLessonOpened();
  const recommended = useRecommendedLessons(cecrLevel, 3);
  const reduced = useReducedMotion();

  const [firstName, setFirstName] = useState<string | null>(null);
  const [firstNameLoading, setFirstNameLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setFirstName(null);
      setFirstNameLoading(false);
      return;
    }
    let cancelled = false;
    supabase
      .from('profiles')
      .select('first_name')
      .eq('user_id', user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (cancelled) return;
        setFirstName(data?.first_name ?? null);
        setFirstNameLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [user]);

  const initialLoading = (progressLoading || dailyLoading || firstNameLoading) && !lastLesson;
  if (initialLoading) {
    return <DashboardSkeleton />;
  }

  const isFirstTime = !lastLesson && recommended.length === 0;

  const cardsContainer = reduced
    ? { hidden: {}, visible: { transition: { duration: 0 } } }
    : { hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.5 } } };

  const cardItem = reduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: SPRING } };

  return (
    <div className="container py-6 md:py-10 space-y-8">
      <DashboardHero firstName={firstName} streak={streak} isFirstTime={isFirstTime} />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardsContainer}
        className="space-y-8"
      >
        <motion.div variants={cardItem} className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2">
            <ResumeCard lastLesson={lastLesson} />
          </div>
          <DailyChallengeCard streak={streak} isDoneToday={isDoneToday} loading={dailyLoading} />
        </motion.div>

        <motion.div variants={cardItem}>
          <MiniZigzag currentLevel={cecrLevel} />
        </motion.div>

        <motion.div variants={cardItem}>
          <RecommendedCarousel lessons={recommended} />
        </motion.div>

        <motion.div variants={cardItem}>
          <QuickShortcuts />
        </motion.div>
      </motion.div>
    </div>
  );
}
