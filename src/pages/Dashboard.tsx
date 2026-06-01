import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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

export default function Dashboard() {
  const { user } = useAuth();
  const { cecrLevel, loading: progressLoading } = useUserProgress();
  const { streak, isDoneToday, loading: dailyLoading } = useDailyChallenge();
  const lastLesson = useLastLessonOpened();
  const recommended = useRecommendedLessons(cecrLevel, 3);

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="container py-6 md:py-10 space-y-8"
    >
      <DashboardHero firstName={firstName} streak={streak} isFirstTime={isFirstTime} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <ResumeCard lastLesson={lastLesson} />
        </div>
        <DailyChallengeCard streak={streak} isDoneToday={isDoneToday} loading={dailyLoading} />
      </div>

      <MiniZigzag currentLevel={cecrLevel} />

      <RecommendedCarousel lessons={recommended} />

      <QuickShortcuts />
    </motion.div>
  );
}
