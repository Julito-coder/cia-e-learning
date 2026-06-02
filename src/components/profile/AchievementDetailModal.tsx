import { useTranslation } from 'react-i18next';
import { Lock, Check, GraduationCap, Flame, Sparkles, Crown, Medal, Target, Trophy, Star, Rocket, Heart } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import type { Achievement, AchievementIcon, AchievementRarity } from '@/data/achievements';

const ICONS: Record<AchievementIcon, React.ComponentType<{ className?: string }>> = {
  graduation: GraduationCap, flame: Flame, sparkles: Sparkles, crown: Crown,
  medal: Medal, target: Target, trophy: Trophy, star: Star, rocket: Rocket, heart: Heart,
};

const RARITY_RING: Record<AchievementRarity, string> = {
  common:    'bg-gradient-to-br from-cia-blue-100 to-cia-blue-200 text-cia-blue-700',
  rare:      'bg-gradient-to-br from-cia-gold-100 to-cia-gold-200 text-cia-gold-700',
  epic:      'bg-gradient-to-br from-cia-spark-light/20 to-cia-spark-mid/25 text-cia-blue-700',
  legendary: 'bg-gradient-to-br from-cia-gold-100 to-cia-gold-200 text-cia-gold-700',
};

interface Props {
  achievement: Achievement | null;
  unlocked: boolean;
  onClose: () => void;
}

export function AchievementDetailModal({ achievement, unlocked, onClose }: Props) {
  const { t } = useTranslation();
  const Icon = achievement ? ICONS[achievement.icon] : null;

  return (
    <Dialog open={!!achievement} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="sm:max-w-sm rounded-2xl">
        {achievement && Icon && (
          <>
            <DialogHeader className="items-center text-center space-y-3">
              <div className={cn('relative h-24 w-24 rounded-full flex items-center justify-center', unlocked ? RARITY_RING[achievement.rarity] : 'bg-muted text-muted-foreground grayscale')}>
                <Icon className="h-12 w-12" />
                {unlocked ? (
                  <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-success text-success-foreground border-4 border-background flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </div>
                ) : (
                  <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-background border-2 border-border flex items-center justify-center">
                    <Lock className="h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">
                  {t(`achievements.rarity.${achievement.rarity}`)}
                </p>
                <DialogTitle className="font-display text-xl">{t(achievement.titleKey)}</DialogTitle>
              </div>
            </DialogHeader>
            <DialogDescription className="text-center text-sm text-muted-foreground">
              {t(achievement.descriptionKey)}
            </DialogDescription>
            {!unlocked && (
              <p className="text-center text-xs text-muted-foreground mt-2">
                {t('profile.achievements.howToUnlock')}
              </p>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}