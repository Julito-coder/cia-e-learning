import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { pageTransition } from '@/lib/animations';
import { GamificationOverlay } from '@/components/gamification/GamificationOverlay';
import { OnboardingFlow } from '@/components/onboarding/OnboardingFlow';

export function AppLayout() {
  const location = useLocation();
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <GamificationOverlay />
      <OnboardingFlow />
    </div>
  );
}
