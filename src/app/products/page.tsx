import { ProductSearchParams } from '@/core/api/api.types';
import { ProductsView } from '@/features/Products/views/ProductsView';

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<ProductSearchParams>;
}) {
  const params = await searchParams;
  return <ProductsView searchParams={params} />;
}
