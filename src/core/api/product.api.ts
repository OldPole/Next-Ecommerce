import { Product, ProductFilters, ProductResponse } from '@/core/api/api.types';
import { BASE_URL } from './api.constants';

export const getProducts = async (
  params: ProductFilters = {},
  init?: RequestInit,
): Promise<ProductResponse> => {
  const { limit = 16, skip = 0, search, category, sortBy, order } = params;
  const path = search
    ? '/products/search'
    : category
      ? `/products/category/${category}`
      : '/products';

  const query = new URLSearchParams({
    limit: limit.toString(),
    skip: skip.toString(),
    ...(search && { q: search }),
    ...(sortBy && { sortBy }),
    ...(order && { order }),
  });

  const res = await fetch(`${BASE_URL}${path}?${query.toString()}`, init);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
};

export const getProductById = async (id: string, init?: RequestInit): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/products/${id}`, init);
  if (!res.ok) throw new Error(`Product ${id} not found`);
  return res.json();
};

export const getAllProductIds = async (init?: RequestInit): Promise<number[]> => {
  const res = await fetch(`${BASE_URL}/products?limit=0`, init);
  if (!res.ok) throw new Error('Products not found');
  const data = await res.json();
  return data.products.map((p: { id: number }) => p.id);
};

export const getCategories = async (init?: RequestInit): Promise<string[]> => {
  const res = await fetch(`${BASE_URL}/products/category-list`, init);
  if (!res.ok) throw new Error('Categories not found');
  return res.json();
};
