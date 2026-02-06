'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Card, CardContent } from '@/core/ui/card';
import { Button } from '@/core/ui/button';
import { useCartStore } from '@/core/providers/cart-store-provider';
import { CartItem } from '../types/cart-store.types';

export const CartItemCard = ({ item }: { item: CartItem }) => {
  const updateQuantity = useCartStore((store) => store.updateQuantity);
  const removeItem = useCartStore((store) => store.removeItem);

  return (
    <Card className="overflow-hidden rounded-[30px] border-none bg-slate-50 shadow-sm">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link
            href={`/products/${item.id}`}
            className="relative h-24 w-24 rounded-2xl bg-white p-2 border border-slate-100 ">
            <Image
              src={item.thumbnail}
              alt={item.title}
              fill
              sizes="96px"
              className="object-contain p-2"
            />
          </Link>

          <div className="flex-1 text-center sm:text-left">
            <Link href={`/products/${item.id}`} className="hover:underline">
              <h3 className="text-lg font-bold text-slate-900 line-clamp-1">{item.title}</h3>
            </Link>
            <p className="text-sm text-slate-500">{item.category}</p>
            <p className="mt-1 text-xl font-black">${item.price}</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center bg-white rounded-xl border border-slate-200 p-1">
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer h-8 w-8"
                onClick={() => updateQuantity(item.id, -1)}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer h-8 w-8"
                onClick={() => updateQuantity(item.id, 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="text-slate-300 hover:text-red-500 cursor-pointer"
              onClick={() => removeItem(item.id)}>
              <Trash2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
