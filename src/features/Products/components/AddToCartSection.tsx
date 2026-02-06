'use client';

import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { Button } from '@/core/ui/button';
import { useCartStore } from '@/core/providers/cart-store-provider';
import { Product } from '@/core/api/api.types';

export const AddToCartSection = ({ product }: { product: Product }) => {
  const items = useCartStore((store) => store.items);
  const addItem = useCartStore((store) => store.addItem);
  const updateQuantity = useCartStore((store) => store.updateQuantity);

  const cartItem = items.find((item) => item.id === product.id);

  if (!cartItem) {
    return (
      <Button
        onClick={() => addItem(product)}
        className="w-full py-8 text-xl font-bold rounded-2xl bg-black text-white hover:bg-slate-800 transition-all cursor-pointer">
        <ShoppingCart className="mr-2 h-6 w-6" /> Add to cart
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-4 bg-slate-100 rounded-2xl p-1.5 border-2 border-slate-200">
      <Button
        variant="ghost"
        className="h-12 w-12 cursor-pointer"
        onClick={() => updateQuantity(product.id, -1)}>
        <Minus className="h-6 w-6" />
      </Button>
      <span className="flex-1 text-center text-2xl font-black text-slate-900">
        {cartItem.quantity}
      </span>
      <Button
        variant="ghost"
        className="h-12 w-12 cursor-pointer"
        onClick={() => updateQuantity(product.id, 1)}>
        <Plus className="h-6 w-6" />
      </Button>
    </div>
  );
};
