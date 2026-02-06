import { Product } from '@/core/api/api.types';

export interface CartItem extends Product {
  quantity: number;
}

export type CartState = {
  items: CartItem[];
};

export type CartActions = {
  addItem: (product: Product) => void;
  updateQuantity: (id: number, delta: number) => void;
  removeItem: (id: number) => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
};

export type CartStore = CartState & CartActions;
