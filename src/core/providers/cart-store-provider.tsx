'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import { useStore } from 'zustand';
import { createCartStore } from '@/features/Cart/store/cart-store';
import { CartStore } from '@/features/Cart/types/cart-store.types';

export type CartStoreApi = ReturnType<typeof createCartStore>;

export const CartStoreContext = createContext<CartStoreApi | undefined>(undefined);

export interface CartStoreProviderProps {
  children: ReactNode;
}

export const CartStoreProvider = ({ children }: CartStoreProviderProps) => {
  const [store] = useState(() => createCartStore());

  return <CartStoreContext.Provider value={store}>{children}</CartStoreContext.Provider>;
};

export const useCartStore = <T,>(selector: (store: CartStore) => T): T => {
  const cartStoreContext = useContext(CartStoreContext);

  if (!cartStoreContext) {
    throw new Error(`useCartStore must be used within CartStoreProvider`);
  }

  return useStore(cartStoreContext, selector);
};
