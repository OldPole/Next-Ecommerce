import { ProductResponse, ProductFilters } from '../types/product.types';

const BASE_URL = 'https://dummyjson.com';

export const ProductService = {
  async getProducts(params: ProductFilters): Promise<ProductResponse> {
    const { limit = 16, skip = 0, search, category, sortBy, order } = params;

    let url = `${BASE_URL}/products`;
    if (search) url += `/search?q=${encodeURIComponent(search)}&`;
    else if (category) url += `/category/${category}?`;
    else url += '?';

    const query = new URLSearchParams({
      limit: limit.toString(),
      skip: skip.toString(),
      ...(sortBy && { sortBy }),
      ...(order && { order }),
    });

    const res = await fetch(url + query.toString(), { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  },

  async getCategories(): Promise<string[]> {
    const res = await fetch(`${BASE_URL}/products/category-list`);
    return res.json();
  },
};
