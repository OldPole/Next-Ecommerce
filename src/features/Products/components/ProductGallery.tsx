'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/core/ui/button';

interface Props {
  images: string[];
  title: string;
}

export const ProductGallery = ({ images, title }: Props) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative border border-slate-200 rounded-2xl p-8 h-125">
        <Image
          src={images[activeImage]}
          alt={title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-6 transition-transform hover:scale-105 duration-300"
        />
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((img, index) => (
          <Button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`relative cursor-pointer bg-white hover:bg-slate-200 min-w-22 h-22 border-2 rounded-xl shrink-0 transition-all ${
              activeImage === index
                ? 'border-black scale-95'
                : 'border-transparent opacity-60 hover:opacity-100'
            }`}>
            <Image src={img} alt={`${title} view ${index}`} fill className="object-cover" />
          </Button>
        ))}
      </div>
    </div>
  );
};
