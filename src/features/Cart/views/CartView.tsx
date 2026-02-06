'use client';

import { useCartStore } from '@/core/providers/cart-store-provider';
import { CartItemCard } from '../components/CartItemCard';
import { Button } from '@/core/ui/button';
import { CreditCard } from 'lucide-react';
import { AppBreadcrumbs } from '@/core/ui/appBreadcrumbs';

export const CartView = () => {
  const items = useCartStore((store) => store.items);
  const total = useCartStore((store) => store.getTotalPrice());

  return (
    <div className="container mx-auto pb-20">
      <AppBreadcrumbs items={['Cart']} />

      {items.length === 0 ? (
        <div className="py-20 text-center text-slate-400 text-2xl">Your cart is empty</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-6">
            {items.map((item) => (
              <CartItemCard key={item.id} item={item} />
            ))}
          </div>

          <div className="bg-slate-900 rounded-[40px] p-10 text-white h-fit sticky top-10">
            <h2 className="text-2xl font-bold mb-8 text-slate-400">Summary</h2>
            <div className="flex justify-between items-end mb-10">
              <span className="text-slate-400 font-medium">Total Amount</span>
              <span className="text-5xl font-black">${total.toFixed(2)}</span>
            </div>
            <Button className="w-full py-8 rounded-2xl bg-white text-black hover:bg-slate-200 text-xl font-black transition-transform active:scale-95 cursor-pointer">
              <CreditCard className="mr-3" /> Pay Now
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
