import { Hero } from '@/components/landing/Hero';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { CECRJourney } from '@/components/landing/CECRJourney';
import { GamificationShowcase } from '@/components/landing/GamificationShowcase';
import { Personas } from '@/components/landing/Personas';
import { Pricing } from '@/components/landing/Pricing';
import { Testimonials } from '@/components/landing/Testimonials';
import { CTASection } from '@/components/landing/CTASection';

export default function Index() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <CECRJourney />
      <GamificationShowcase />
      <Personas />
      <Pricing />
      <Testimonials />
      <CTASection />
    </>
  );
}
