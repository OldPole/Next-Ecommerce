import { ProductService } from '../services/product.service';
import { ProductCard } from '../components/ProductCard';
import { ProductPagination } from '../components/ProductPagination';

interface Props {
  page: number;
}

export const ProductsView = async ({ page }: Props) => {
  const limit = 16;
  const skip = (page - 1) * limit;

  const { products, total } = await ProductService.getProducts(limit, skip);
  const totalPages = Math.ceil(total / limit);

  return (
    <section className="py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {totalPages > 1 && <ProductPagination currentPage={page} totalPages={totalPages} />}
    </section>
  );
};
