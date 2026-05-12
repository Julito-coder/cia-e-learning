import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { pageTransition } from '@/lib/animations';
import { GamificationOverlay } from '@/components/gamification/GamificationOverlay';
import { OnboardingFlow } from '@/components/onboarding/OnboardingFlow';
import { useInterfaceLanguage } from '@/hooks/useInterfaceLanguage';

export function AppLayout() {
  const location = useLocation();
  // Sync interface language from DB on login
  useInterfaceLanguage();
  return (
    <div className="flex min-h-screen flex-col pl-safe pr-safe">
      <Header />
      <main className="flex-1 pb-safe">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
            style={pageTransition.style}
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
