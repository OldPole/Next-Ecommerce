import { Suspense } from 'react';
import { ProductsView } from '@/features/Products/views/ProductsView';
import { ProductsSkeleton } from '@/features/Products/components/ProductSkeleton';
import { ProductToolbar } from '@/features/Products/components/ProductToolbar';
import { ProductService } from '@/features/Products/services/product.service';
import { AppBreadcrumbs } from '@/core/ui/appBreadcrumbs';

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;

  const categories = await ProductService.getCategories();

  return (
    <div className="container mx-auto flex flex-col gap-6">
      <AppBreadcrumbs items={['Products']} />

      <Suspense fallback={<ProductsSkeleton />}>
        <ProductToolbar categories={categories} />
        <ProductsView searchParams={params} />
      </Suspense>
    </div>
  );
}
