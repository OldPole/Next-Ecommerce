import { getProducts } from '@/core/api/product.api';
import { ProductCard } from './ProductCard';
import { ProductPagination } from './ProductPagination';
import { ProductSearchParams } from '@/core/api/api.types';

export const ProductList = async ({ searchParams }: { searchParams: ProductSearchParams }) => {
  const page = Number(searchParams.page) || 1;
  const limit = 16;
  const skip = (page - 1) * limit;

  const data = await getProducts(
    {
      limit,
      skip,
      search: searchParams.search,
      category: searchParams.category,
      sortBy: searchParams.sortBy as 'price',
      order: searchParams.order as 'asc' | 'desc',
    },
    { cache: 'no-store' },
  );

  const totalPages = Math.ceil(data.total / limit);

  return (
    <div className="flex flex-col gap-10">
      {data.products.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            {data.products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center pb-12">
              <ProductPagination currentPage={page} totalPages={totalPages} />
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-24 text-slate-500 text-xl">No products found</div>
      )}
    </div>
  );
};
