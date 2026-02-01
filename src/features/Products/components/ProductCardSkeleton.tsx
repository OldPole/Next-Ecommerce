import { Skeleton } from '@/core/ui/skeleton';

export const ProductCardSkeleton = () => (
  <div className="space-y-10">
    <Skeleton className="aspect-square w-full rounded-xl" />
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-4 w-1/4" />
  </div>
);
