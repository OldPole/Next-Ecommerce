import { ProductResponse } from '../types/product.types';

const BASE_URL = 'https://dummyjson.com';

export const ProductService = {
  async getProducts(limit: number = 16, skip: number = 0): Promise<ProductResponse> {
    const res = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`, {
      cache: 'no-store',
    });

    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
  },
};
