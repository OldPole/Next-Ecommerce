import { ProductsSkeleton } from '@/features/Products/components/ProductSkeleton';
import { ProductsView } from '@/features/Products/views/ProductsView';

import { Suspense } from 'react';

const ProductsPage = async ({ searchParams }: { searchParams: Promise<{ page?: string }> }) => {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  return (
    <div className="container mx-auto">
      <Suspense fallback={<ProductsSkeleton />}>
        <ProductsView page={currentPage} />
      </Suspense>
    </div>
  );
};

export default ProductsPage;

// export const dynamic = 'force-dynamic';
