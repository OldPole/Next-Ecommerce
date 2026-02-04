'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/core/ui/carousel';
import { Button } from '@/core/ui/button';
import { SLIDES } from '../constants/home.constants';

export const HeroSlider = () => {
  return (
    <section className="w-full group">
      <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}>
        <CarouselContent>
          {SLIDES.map(({ url, title, category, label }, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-100 flex items-center justify-center">
                <Image src={url} alt={title} fill priority={index === 0} className="object-cover" />

                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 container mx-auto px-12 md:px-24 flex flex-col items-start text-white">
                  <span className="font-bold tracking-[0.2em] uppercase mb-2 text-xs md:text-sm opacity-90">
                    {label}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black max-w-xl leading-tight mb-6">
                    {title}
                  </h2>

                  <Button
                    asChild
                    size="default"
                    className="rounded-full px-8 bg-white text-black hover:bg-slate-200 transition-all font-bold uppercase text-xs">
                    <Link href={`/products?category=${category}`}>Shop Now</Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4 cursor-pointer bg-white text-black hover:bg-slate-200" />
        <CarouselNext className="right-4 cursor-pointer bg-white text-black hover:bg-slate-200" />
      </Carousel>
    </section>
  );
};
