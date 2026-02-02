import { ProductService } from '../services/product.service';
import { ProductList } from '../components/ProductList';
import { ProductPagination } from '../components/ProductPagination';

export const ProductsView = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const page = Number(searchParams.page) || 1;
  const limit = 16;

  const data = await ProductService.getProducts({
    limit,
    skip: (page - 1) * limit,
    search: searchParams.search,
    category: searchParams.category,
    sortBy: searchParams.sortBy === 'price' ? 'price' : undefined,
    order: (searchParams.order as 'asc' | 'desc') || undefined,
  });

  const totalPages = Math.ceil(data.total / limit);

  return (
    <div className="flex flex-col gap-10">
      {data.products.length !== 0 ? (
        <ProductList products={data.products} />
      ) : (
        <div className="text-center py-24 text-slate-500 text-xl">No products found</div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center pb-12">
          <ProductPagination currentPage={page} totalPages={totalPages} />
        </div>
      )}
    </div>
  );
};
