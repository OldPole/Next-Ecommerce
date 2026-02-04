import { Suspense } from 'react';
import { getCategories } from '@/core/api/product.api';
import { AppBreadcrumbs } from '@/core/ui/appBreadcrumbs';
import { ProductToolbar } from '../components/ProductToolbar';
import { ProductList } from '../components/ProductList';
import { ProductsSkeleton } from '../components/ProductSkeleton';
import { ProductSearchParams } from '@/core/api/api.types';

export const ProductsView = async ({ searchParams }: { searchParams: ProductSearchParams }) => {
  const categories = await getCategories();

  return (
    <div className="container mx-auto flex flex-col gap-6 p-4">
      <AppBreadcrumbs items={['Products']} />
      <ProductToolbar categories={categories} />

      <Suspense key={JSON.stringify(searchParams)} fallback={<ProductsSkeleton />}>
        <ProductList searchParams={searchParams} />
      </Suspense>
    </div>
  );
};
