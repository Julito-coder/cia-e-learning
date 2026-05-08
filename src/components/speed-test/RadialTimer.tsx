import { Timer } from 'lucide-react';

interface RadialTimerProps {
  timeLeft: number;
  total: number;
  size?: number;
}

export function RadialTimer({ timeLeft, total, size = 80 }: RadialTimerProps) {
  const pct = Math.max(0, Math.min(1, timeLeft / total));
  const radius = size / 2 - 6;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - pct);
  const danger = timeLeft <= 10;
  const warn = !danger && timeLeft <= 30;
  const colorClass = danger
    ? 'text-destructive'
    : warn
    ? 'text-cia-gold-500'
    : 'text-primary';

  return (
    <div className={`relative ${danger ? 'animate-pulse' : ''}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={6}
          fill="transparent"
          className="text-muted/40 stroke-current"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={6}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={`stroke-current ${colorClass}`}
          style={{ transition: 'stroke-dashoffset 0.1s linear, color 0.3s' }}
        />
      </svg>
      <div className={`absolute inset-0 flex flex-col items-center justify-center ${colorClass}`}>
        <Timer className="h-3.5 w-3.5 mb-0.5" />
        <span className="text-lg font-extrabold tabular-nums leading-none">{Math.ceil(timeLeft)}</span>
      </div>
    </div>
  );
}