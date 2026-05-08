import { Skeleton } from '@/components/ui/skeleton';

export function LeaderboardRowSkeleton() {
  return (
    <div className="flex items-center gap-3 p-3 rounded-2xl border border-border/40 bg-card">
      <Skeleton className="h-5 w-7 rounded" />
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="flex-1 space-y-1.5">
        <Skeleton className="h-3 w-32 rounded" />
        <Skeleton className="h-2.5 w-20 rounded" />
      </div>
      <Skeleton className="h-6 w-20 rounded-full" />
    </div>
  );
}

export function LeaderboardSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: count }).map((_, i) => (
        <LeaderboardRowSkeleton key={i} />
      ))}
    </div>
  );
}