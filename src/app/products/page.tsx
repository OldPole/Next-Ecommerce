import { Suspense } from 'react';
import { headers } from 'next/headers';
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
  await headers();
  const params = await searchParams;

  const categories = await ProductService.getCategories();

  return (
    <div className="container mx-auto flex flex-col gap-6">
      <AppBreadcrumbs items={['Products']} />

      <ProductToolbar categories={categories} />

      <Suspense fallback={<ProductsSkeleton />}>
        <ProductsView searchParams={params} />
      </Suspense>
    </div>
  );
}
