import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent, CardFooter } from '@/core/ui/card';
import { Product } from '../types/product.types';

export const ProductCard = ({ id, title, price, images }: Product) => {
  return (
    <Link href={`/product/${id}`} className="group">
      <Card className="overflow-hidden border-none transition-all hover:ring-1 hover:ring-slate-200">
        <div className="relative aspect-square overflow-hidden bg-slate-100">
          <Image
            src={images[0]}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="100vw"
          />
        </div>
        <CardContent className="">
          <h3 className="font-semibold text-base line-clamp-1">{title}</h3>
        </CardContent>
        <CardFooter className="">
          <p className="font-bold text-base">{price} $</p>
        </CardFooter>
      </Card>
    </Link>
  );
};
