import { motion, useAnimation, animate } from 'framer-motion';
import { Sparkles, Medal, Trophy, Crown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useUserProgress } from '@/hooks/useUserProgress';
import { useLeague } from '@/hooks/useLeague';
import { useDailyChallenge } from '@/hooks/useDailyChallenge';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { StreakFlame } from '@/components/gamification/StreakFlame';

interface UserIndicatorsProps {
  compact?: boolean;
  align?: 'horizontal' | 'vertical';
}

const LEAGUE_ICON = { bronze: Medal, argent: Trophy, or: Crown } as const;
const LEAGUE_BADGE_VARIANT = {
  bronze: 'league-bronze',
  argent: 'league-silver',
  or: 'league-gold',
} as const;

export function UserIndicators({ compact = false, align = 'horizontal' }: UserIndicatorsProps) {
  const { t } = useTranslation();
  const { totalXP, cecrLevel } = useUserProgress();
  const { myLeague: currentLeague } = useLeague();
  const { streak } = useDailyChallenge();
  const xpControls = useAnimation();
  const prevXP = useRef(totalXP);
  const [displayedXP, setDisplayedXP] = useState(totalXP);
  const prevXPCountRef = useRef<number>(totalXP);

  useEffect(() => {
    if (totalXP > prevXP.current) {
      xpControls.start({
        scale: [1, 1.08, 1],
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
      });
    }
    prevXP.current = totalXP;
  }, [totalXP, xpControls]);

  useEffect(() => {
    if (totalXP === prevXPCountRef.current) return;
    const controls = animate(prevXPCountRef.current, totalXP, {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplayedXP(Math.round(v)),
    });
    prevXPCountRef.current = totalXP;
    return () => controls.stop();
  }, [totalXP]);

  const LeagueIcon = currentLeague ? LEAGUE_ICON[currentLeague] : Medal;
  const directionClass = align === 'vertical' ? 'flex-col gap-3' : 'flex-row gap-2';

  return (
    <TooltipProvider delayDuration={200}>
      <motion.div data-onboard="header-xp" className={`flex ${directionClass} items-center`} variants={staggerContainer} initial="hidden" animate="visible">
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div variants={staggerItem} animate={xpControls} data-xp-origin>
              <Badge variant="xp" className="gap-1.5 px-2.5 py-1">
                <Sparkles className="h-3.5 w-3.5" />
                <span className="tabular-nums">{displayedXP.toLocaleString('fr-FR')}</span>
                {!compact && <span className="text-xs opacity-70">XP</span>}
              </Badge>
            </motion.div>
          </TooltipTrigger>
          <TooltipContent>{t('indicators.xp_tooltip', { count: totalXP })}</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div variants={staggerItem}>
              <Badge variant="streak" className="gap-1.5 px-2.5 py-1">
                <StreakFlame streak={streak} />
                <span className="tabular-nums">{streak}</span>
                {!compact && <span className="text-xs opacity-70">j</span>}
              </Badge>
            </motion.div>
          </TooltipTrigger>
          <TooltipContent>{t('indicators.streak_tooltip', { count: streak })}</TooltipContent>
        </Tooltip>

        {!compact && (
          <>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div variants={staggerItem}>
                  <Badge variant="level" className="px-2.5 py-1">{cecrLevel}</Badge>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>{t('indicators.level_tooltip', { level: cecrLevel })}</TooltipContent>
            </Tooltip>

            {currentLeague && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div variants={staggerItem}>
                    <Badge
                      variant={LEAGUE_BADGE_VARIANT[currentLeague]}
                      className="gap-1.5 px-2.5 py-1 capitalize"
                    >
                      <LeagueIcon className="h-3.5 w-3.5" />
                      {currentLeague}
                    </Badge>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent>{t('indicators.league_tooltip', { league: currentLeague })}</TooltipContent>
              </Tooltip>
            )}
          </>
        )}
      </motion.div>
    </TooltipProvider>
  );
}
