import { Skeleton } from '@/core/ui/skeleton';

export const ProductsSkeleton = () => {
  return (
    <div className="space-y-6 py-6">
      {/* Имитируем AppBreadcrumbs */}
      <div className="space-y-2">
        <Skeleton className="h-8 w-48" /> {/* Заголовок */}
        <Skeleton className="h-4 w-64" /> {/* Пути */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="aspect-square w-full rounded-xl" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/4" />
          </div>
        ))}
      </div>
    </div>
  );
};
