import { ProductCardSkeleton } from '@/features/Products/components/ProductCardSkeleton';
import { ProductsView } from '@/features/Products/views/ProductsView';

import { Suspense } from 'react';

// как реализовать ssr

const ProductsPage = async ({ searchParams }: { searchParams: Promise<{ page?: string }> }) => {
  const params = await searchParams; // что это
  const currentPage = Number(params.page) || 1;

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mt-6">Каталог товаров</h1>
      <Suspense // компонент loading и error
        fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
            {Array.from({ length: 16 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        }>
        <ProductsView page={currentPage} />
      </Suspense>
    </div>
  );
};

export default ProductsPage;
