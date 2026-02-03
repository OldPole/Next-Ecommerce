import { ProductService } from '@/features/Products/services/product.service';
import { ProductDetailView } from '@/features/Products/views/ProductDetailView';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const ids = await ProductService.getAllIds();
  return ids.map((id) => ({ id: String(id) }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const product = await ProductService.getProductById(id).catch(() => null);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <ProductDetailView product={product} />
    </div>
  );
}
