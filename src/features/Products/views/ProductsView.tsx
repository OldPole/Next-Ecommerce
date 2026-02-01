import { ProductList } from '../components/ProductList';
import { ProductPagination } from '../components/ProductPagination';
import { ProductService } from '../services/product.service';
import { AppBreadcrumbs } from '@/core/ui/appBreadcrumbs';

interface Props {
  page: number;
}

export const ProductsView = async ({ page }: Props) => {
  const limit = 16;
  const skip = (page - 1) * limit;

  const { products, total } = await ProductService.getProducts(limit, skip);
  const totalPages = Math.ceil(total / limit);

  return (
    <section>
      <AppBreadcrumbs items={['Products']} />
      <ProductList products={products} />
      {totalPages > 1 && <ProductPagination currentPage={page} totalPages={totalPages} />}
    </section>
  );
};
