import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Coachmark } from './Coachmark';

interface CoachmarkTourProps {
  onDone: () => void;
}

const SPOTS = [
  { selector: '[data-onboard="header-xp"]', titleKey: 'onboarding.coach.xp.title', descKey: 'onboarding.coach.xp.desc' },
  { selector: '[data-onboard="nav-programme"]', titleKey: 'onboarding.coach.programme.title', descKey: 'onboarding.coach.programme.desc' },
  { selector: '[data-onboard="nav-catalogue"]', titleKey: 'onboarding.coach.catalogue.title', descKey: 'onboarding.coach.catalogue.desc' },
  { selector: '[data-onboard="nav-daily"]', titleKey: 'onboarding.coach.daily.title', descKey: 'onboarding.coach.daily.desc' },
  { selector: '[data-onboard="nav-classement"]', titleKey: 'onboarding.coach.classement.title', descKey: 'onboarding.coach.classement.desc' },
];

export function CoachmarkTour({ onDone }: CoachmarkTourProps) {
  const { t } = useTranslation();
  const [idx, setIdx] = useState(0);
  const spot = SPOTS[idx];
  const isLast = idx === SPOTS.length - 1;

  return (
    <Coachmark
      targetSelector={spot.selector}
      title={t(spot.titleKey)}
      description={t(spot.descKey)}
      step={idx + 1}
      total={SPOTS.length}
      onPrev={() => setIdx((i) => Math.max(0, i - 1))}
      onNext={() => (isLast ? onDone() : setIdx((i) => i + 1))}
      onSkip={onDone}
      isLast={isLast}
    />
  );
}