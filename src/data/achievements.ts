export type AchievementRarity = 'common' | 'rare' | 'epic' | 'legendary';
export type AchievementIcon =
  | 'graduation' | 'flame' | 'sparkles' | 'crown' | 'medal'
  | 'target' | 'trophy' | 'star' | 'rocket' | 'heart';

export interface UserGameState {
  totalXP: number;
  cecrLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  dailyStreak: number;
  league: 'bronze' | 'argent' | 'or' | null;
  placementTestTaken: boolean;
  isPremium?: boolean;
}

export interface Achievement {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: AchievementIcon;
  rarity: AchievementRarity;
  isUnlocked: (state: UserGameState) => boolean;
}

const LEVEL_INDEX: Record<UserGameState['cecrLevel'], number> = {
  A1: 0, A2: 1, B1: 2, B2: 3, C1: 4, C2: 5,
};

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'placement_done', titleKey: 'achievements.placement_done.title', descriptionKey: 'achievements.placement_done.desc', icon: 'target',     rarity: 'common',    isUnlocked: (s) => s.placementTestTaken },
  { id: 'first_xp',       titleKey: 'achievements.first_xp.title',       descriptionKey: 'achievements.first_xp.desc',       icon: 'sparkles',   rarity: 'common',    isUnlocked: (s) => s.totalXP > 0 },
  { id: 'xp_500',         titleKey: 'achievements.xp_500.title',         descriptionKey: 'achievements.xp_500.desc',         icon: 'graduation', rarity: 'common',    isUnlocked: (s) => s.totalXP >= 500 },
  { id: 'xp_2500',        titleKey: 'achievements.xp_2500.title',        descriptionKey: 'achievements.xp_2500.desc',        icon: 'rocket',     rarity: 'rare',      isUnlocked: (s) => s.totalXP >= 2500 },
  { id: 'xp_10000',       titleKey: 'achievements.xp_10000.title',       descriptionKey: 'achievements.xp_10000.desc',       icon: 'star',       rarity: 'epic',      isUnlocked: (s) => s.totalXP >= 10000 },
  { id: 'streak_7',       titleKey: 'achievements.streak_7.title',       descriptionKey: 'achievements.streak_7.desc',       icon: 'flame',      rarity: 'common',    isUnlocked: (s) => s.dailyStreak >= 7 },
  { id: 'streak_30',      titleKey: 'achievements.streak_30.title',      descriptionKey: 'achievements.streak_30.desc',      icon: 'flame',      rarity: 'rare',      isUnlocked: (s) => s.dailyStreak >= 30 },
  { id: 'streak_100',     titleKey: 'achievements.streak_100.title',     descriptionKey: 'achievements.streak_100.desc',     icon: 'flame',      rarity: 'legendary', isUnlocked: (s) => s.dailyStreak >= 100 },
  { id: 'level_a2',       titleKey: 'achievements.level_a2.title',       descriptionKey: 'achievements.level_a2.desc',       icon: 'medal',      rarity: 'common',    isUnlocked: (s) => LEVEL_INDEX[s.cecrLevel] >= 1 },
  { id: 'level_b1',       titleKey: 'achievements.level_b1.title',       descriptionKey: 'achievements.level_b1.desc',       icon: 'medal',      rarity: 'rare',      isUnlocked: (s) => LEVEL_INDEX[s.cecrLevel] >= 2 },
  { id: 'level_b2',       titleKey: 'achievements.level_b2.title',       descriptionKey: 'achievements.level_b2.desc',       icon: 'medal',      rarity: 'epic',      isUnlocked: (s) => LEVEL_INDEX[s.cecrLevel] >= 3 },
  { id: 'level_c1',       titleKey: 'achievements.level_c1.title',       descriptionKey: 'achievements.level_c1.desc',       icon: 'crown',      rarity: 'legendary', isUnlocked: (s) => LEVEL_INDEX[s.cecrLevel] >= 4 },
  { id: 'league_silver',  titleKey: 'achievements.league_silver.title',  descriptionKey: 'achievements.league_silver.desc',  icon: 'trophy',     rarity: 'rare',      isUnlocked: (s) => s.league === 'argent' || s.league === 'or' },
  { id: 'league_gold',    titleKey: 'achievements.league_gold.title',    descriptionKey: 'achievements.league_gold.desc',    icon: 'crown',      rarity: 'epic',      isUnlocked: (s) => s.league === 'or' },
  { id: 'premium',        titleKey: 'achievements.premium.title',        descriptionKey: 'achievements.premium.desc',        icon: 'sparkles',   rarity: 'legendary', isUnlocked: (s) => s.isPremium === true },
];