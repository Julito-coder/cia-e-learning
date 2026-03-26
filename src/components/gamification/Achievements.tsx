import { Lock } from 'lucide-react';

interface Achievement {
  id: string;
  icon: string;
  title: string;
  description: string;
  unlocked: boolean;
}

const achievements: Achievement[] = [
  { id: '1', icon: '🎯', title: 'Premier pas', description: 'Terminer votre premier cours', unlocked: true },
  { id: '2', icon: '🔥', title: 'En feu !', description: 'Série de 7 jours consécutifs', unlocked: true },
  { id: '3', icon: '💯', title: 'Score parfait', description: 'Obtenir 100% à un exercice', unlocked: true },
  { id: '4', icon: '📚', title: 'Bibliophile', description: 'Terminer 10 cours', unlocked: false },
  { id: '5', icon: '🌍', title: 'Polyglotte', description: 'Atteindre le niveau B2', unlocked: false },
  { id: '6', icon: '⚡', title: 'Éclair', description: 'Terminer un cours en -10 min', unlocked: false },
  { id: '7', icon: '👑', title: 'Maître', description: 'Atteindre le niveau C1', unlocked: false },
  { id: '8', icon: '🏆', title: 'Champion', description: 'Top 3 du classement', unlocked: false },
];

export function Achievements() {
  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  return (
    <div className="card-duo p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-base">🏅 Badges</h3>
        <span className="text-sm font-semibold text-muted-foreground">{unlockedCount}/{achievements.length}</span>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {achievements.map((badge) => (
          <div
            key={badge.id}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 ${
              badge.unlocked
                ? 'bg-cia-gold/10 hover:scale-105 cursor-pointer'
                : 'bg-muted/50 opacity-50'
            }`}
            title={badge.description}
          >
            <div className={`text-2xl ${badge.unlocked ? 'animate-bounce-in' : ''}`}>
              {badge.unlocked ? badge.icon : <Lock className="h-5 w-5 text-muted-foreground" />}
            </div>
            <span className="text-[10px] font-semibold text-center leading-tight">{badge.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
