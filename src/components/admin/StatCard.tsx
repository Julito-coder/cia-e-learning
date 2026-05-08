import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Props {
  label: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  delta?: number;
  tint?: 'primary' | 'success' | 'gold' | 'destructive' | 'muted';
  loading?: boolean;
}

const TINTS: Record<NonNullable<Props['tint']>, string> = {
  primary: 'bg-primary/10 text-primary',
  success: 'bg-cia-success/10 text-cia-success',
  gold: 'bg-cia-gold/15 text-cia-gold',
  destructive: 'bg-destructive/10 text-destructive',
  muted: 'bg-muted text-muted-foreground',
};

export function StatCard({ label, value, icon: Icon, description, delta, tint = 'primary', loading }: Props) {
  return (
    <Card className="overflow-hidden border-border/60 transition-shadow hover:shadow-md">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1 min-w-0">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {label}
            </p>
            {loading ? (
              <div className="h-8 w-20 animate-pulse rounded bg-muted" />
            ) : (
              <p className="text-3xl font-bold leading-tight">{value}</p>
            )}
            {description && !loading && (
              <p className="text-xs text-muted-foreground line-clamp-1">{description}</p>
            )}
            {typeof delta === 'number' && !loading && (
              <div className={cn(
                'inline-flex items-center gap-1 text-xs font-medium',
                delta >= 0 ? 'text-cia-success' : 'text-destructive',
              )}>
                {delta >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {delta >= 0 ? '+' : ''}{delta}%
              </div>
            )}
          </div>
          <div className={cn('rounded-xl p-2.5 shrink-0', TINTS[tint])}>
            <Icon className="h-5 w-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}