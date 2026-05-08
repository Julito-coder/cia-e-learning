import { Skeleton } from '@/components/ui/skeleton';

interface Props {
  rows?: number;
  cols?: number;
}

export function AdminTableSkeleton({ rows = 6, cols = 6 }: Props) {
  return (
    <div className="space-y-2 p-4">
      <div className="flex gap-3 border-b pb-2">
        {Array.from({ length: cols }).map((_, i) => (
          <Skeleton key={i} className="h-4 flex-1" />
        ))}
      </div>
      {Array.from({ length: rows }).map((_, r) => (
        <div key={r} className="flex gap-3 py-2">
          {Array.from({ length: cols }).map((_, c) => (
            <Skeleton key={c} className="h-5 flex-1" />
          ))}
        </div>
      ))}
    </div>
  );
}