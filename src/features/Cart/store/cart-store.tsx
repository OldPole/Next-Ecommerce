import { createStore } from 'zustand/vanilla';
import { persist, createJSONStorage } from 'zustand/middleware';
import Cookies from 'js-cookie';
import { StateStorage } from 'zustand/middleware';
import { CartState, CartStore } from '../types/cart-store.types';

const cookieStorage: StateStorage = {
  getItem: (name: string): string | null => {
    return Cookies.get(name) ?? null;
  },
  setItem: (name: string, value: string): void => {
    Cookies.set(name, value, { expires: 7 });
  },
  removeItem: (name: string): void => {
    Cookies.remove(name);
  },
};

export const createCartStore = (initState: CartState = { items: [] }) => {
  return createStore<CartStore>()(
    persist(
      (set, get) => ({
        ...initState,
        addItem: (product) => {
          const items = get().items;
          const exists = items.find((item) => item.id === product.id);
          if (exists) {
            set({
              items: items.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
              ),
            });
          } else {
            set({ items: [...items, { ...product, quantity: 1 }] });
          }
        },
        updateQuantity: (id, delta) =>
          set({
            items: get()
              .items.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + delta } : item,
              )
              .filter((item) => item.quantity > 0),
          }),
        removeItem: (id) => set({ items: get().items.filter((item) => item.id !== id) }),
        getTotalPrice: () =>
          get().items.reduce((total, item) => total + item.price * item.quantity, 0),
        getTotalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),
      }),
      {
        name: 'cart-storage',
        storage: createJSONStorage(() => cookieStorage),
      },
    ),
  );
};
