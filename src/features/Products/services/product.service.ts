import { ProductResponse, ProductFilters, Product } from '../types/product.types';

const BASE_URL = 'https://dummyjson.com';

// take out logic to general

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
    if (!res.ok) throw new Error('Categories not found');
    return res.json();
  },

  async getAllIds(): Promise<number[]> {
    const res = await fetch(`${BASE_URL}/products`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error('Products not found');
    const data = await res.json();
    return data.products.map((product: { id: number }) => product.id);
  },

  async getProductById(id: string): Promise<Product> {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`Product ${id} not found`);
    return res.json();
  },
};

// import { createApi } from '@reduxjs/toolkit/query/react';
// import { baseQuery } from './config';

// export const productsApi = createApi({
//   reducerPath: 'productsApi',
//   baseQuery: baseQuery,
//   endpoints: builder => ({
//     getCategories: builder.query({
//       query: () => 'products/category-list',
//     }),
//     getProductById: builder.query({
//       query: id => `products/${id}`,
//     }),
//     getProducts: builder.query({
//       query: ({ search, category, sortBy, order, limit = 9, skip = 0 }) => {
//         let queryStr = `limit=${limit}&skip=${skip}`;

//         if (sortBy) queryStr += `&sortBy=${sortBy}&order=${order || 'asc'}`;

//         if (search) return `products/search?q=${search}&${queryStr}`;
//         if (category) return `products/category/${category}?${queryStr}`;

//         return `products?${queryStr}`;
//       },
//     }),
//   }),
// });

// export const {
//   useGetProductsQuery,
//   useGetCategoriesQuery,
//   useGetProductByIdQuery,
// } = productsApi;
