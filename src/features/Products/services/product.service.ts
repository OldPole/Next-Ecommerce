import { ProductResponse } from '../types/product.types';

const BASE_URL = 'https://dummyjson.com';

export const ProductService = {
  async getProducts(limit: number = 9, skip: number = 0): Promise<ProductResponse> {
    const res = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error('Failed to fetch products');

    return res.json();
  },
};
