import { Skeleton } from '@/components/ui/skeleton';

export function ProfileHeaderSkeleton() {
  return (
    <div className="rounded-2xl border border-border/50 bg-card p-5 sm:p-6">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
        <Skeleton className="h-28 w-28 rounded-full" />
        <div className="flex-1 w-full space-y-3">
          <Skeleton className="h-5 w-48 rounded" />
          <Skeleton className="h-3 w-64 rounded" />
          <div className="flex gap-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
          <Skeleton className="h-2 w-full rounded-full" />
        </div>
      </div>
    </div>
  );
}