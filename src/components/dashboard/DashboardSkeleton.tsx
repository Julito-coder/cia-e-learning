import { Skeleton } from '@/components/ui/skeleton';

export function DashboardSkeleton() {
  return (
    <div className="container py-6 md:py-10 space-y-8" aria-busy="true" aria-label="Chargement du tableau de bord">
      <Skeleton className="h-40 md:h-48 w-full rounded-3xl" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Skeleton className="lg:col-span-2 h-56 rounded-3xl" />
        <Skeleton className="h-56 rounded-3xl" />
      </div>
      <div>
        <Skeleton className="h-8 w-48 rounded mb-5" />
        <div className="grid grid-cols-4 gap-4">
          <Skeleton className="h-20 md:h-24 rounded-full" />
          <Skeleton className="h-20 md:h-24 rounded-full mt-6" />
          <Skeleton className="h-20 md:h-24 rounded-full" />
          <Skeleton className="h-20 md:h-24 rounded-full mt-6" />
        </div>
      </div>
      <div>
        <Skeleton className="h-8 w-48 rounded mb-5" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Skeleton className="h-40 rounded-3xl" />
          <Skeleton className="h-40 rounded-3xl" />
          <Skeleton className="h-40 rounded-3xl" />
        </div>
      </div>
    </div>
  );
}
