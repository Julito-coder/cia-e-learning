import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Lock, Check, GraduationCap, Flame, Sparkles, Crown, Medal, Target, Trophy, Star, Rocket, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Achievement, AchievementIcon, AchievementRarity } from '@/data/achievements';

const ICONS: Record<AchievementIcon, React.ComponentType<{ className?: string }>> = {
  graduation: GraduationCap, flame: Flame, sparkles: Sparkles, crown: Crown,
  medal: Medal, target: Target, trophy: Trophy, star: Star, rocket: Rocket, heart: Heart,
};

const RARITY_RING: Record<AchievementRarity, string> = {
  common:    'bg-gradient-to-br from-cia-blue-100 to-cia-blue-200 text-cia-blue-700 border-cia-blue-300',
  rare:      'bg-gradient-to-br from-cia-gold-100 to-cia-gold-200 text-cia-gold-700 border-cia-gold-300',
  epic:      'bg-gradient-to-br from-purple-100 to-purple-200 text-purple-700 border-purple-300',
  legendary: 'bg-gradient-to-br from-amber-100 to-orange-200 text-orange-700 border-orange-400 shadow-glow',
};

const RARITY_LABEL_CLASS: Record<AchievementRarity, string> = {
  common:    'bg-cia-blue-50 text-cia-blue-700',
  rare:      'bg-cia-gold-50 text-cia-gold-700',
  epic:      'bg-purple-50 text-purple-700',
  legendary: 'bg-orange-50 text-orange-700',
};

interface Props {
  achievement: Achievement;
  unlocked: boolean;
  onClick?: () => void;
}

export function AchievementCard({ achievement, unlocked, onClick }: Props) {
  const { t } = useTranslation();
  const Icon = ICONS[achievement.icon];

  return (
    <motion.button
      type="button"
      onClick={onClick}
      variants={{
        hidden: { opacity: 0, y: 10 },
        show:   { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      className={cn(
        'group relative flex flex-col items-center gap-2 rounded-2xl border bg-card p-4 text-center transition-all',
        unlocked ? 'border-border hover:border-primary/40 hover:shadow-md' : 'border-border/60 opacity-70 hover:opacity-100',
      )}
    >
      <div
        className={cn(
          'relative h-16 w-16 rounded-full border-2 flex items-center justify-center',
          unlocked ? RARITY_RING[achievement.rarity] : 'bg-muted text-muted-foreground border-border grayscale',
        )}
      >
        <Icon className="h-7 w-7" />
        {!unlocked && (
          <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-background border border-border flex items-center justify-center">
            <Lock className="h-3 w-3 text-muted-foreground" />
          </div>
        )}
        {unlocked && (
          <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-success text-success-foreground border-2 border-background flex items-center justify-center">
            <Check className="h-3 w-3" />
          </div>
        )}
      </div>
      <div className="space-y-1 min-w-0 w-full">
        <p className="font-bold text-sm leading-tight truncate">{t(achievement.titleKey)}</p>
        <p className="text-[11px] text-muted-foreground line-clamp-2 leading-snug">{t(achievement.descriptionKey)}</p>
      </div>
      <span className={cn('text-[9px] uppercase tracking-wider font-bold rounded-full px-2 py-0.5', RARITY_LABEL_CLASS[achievement.rarity])}>
        {t(`achievements.rarity.${achievement.rarity}`)}
      </span>
    </motion.button>
  );
}