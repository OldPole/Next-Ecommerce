import { getAllProductIds } from '@/core/api/product.api';
import { ProductDetailView } from '@/features/Products/views/ProductDetailView';

export async function generateStaticParams() {
  const ids = await getAllProductIds();
  return ids.map((id) => ({ id: String(id) }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <ProductDetailView id={id} />;
}
