export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  thumbnail: string;
}

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductFilters {
  limit?: number;
  skip?: number;
  search?: string;
  category?: string;
  sortBy?: 'price';
  order?: 'asc' | 'desc';
}
