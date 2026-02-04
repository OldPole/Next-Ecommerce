import { Truck, ShieldCheck, Star } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Button } from '@/core/ui/button';
import { ProductGallery } from '../components/ProductGallery';

import { getProductById } from '@/core/api/product.api';

export const ProductDetailView = async ({ id }: { id: string }) => {
  const product = await getProductById(id, { next: { revalidate: 3600 } }).catch(() => null);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto flex flex-col gap-16 py-10 px-4">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProductGallery images={product.images} title={product.title} />

        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase">
              {product.category}
            </span>
          </div>

          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{product.title}</h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1 bg-black text-white px-3 py-1 rounded-lg">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-bold text-sm">{product.rating}</span>
            </div>
            <span className="text-slate-400 text-sm font-medium">
              Based on {product.reviews?.length} reviews
            </span>
          </div>

          <div className="text-4xl font-black mb-8 text-slate-900">${product.price}</div>

          <p className="text-slate-600 text-lg leading-relaxed mb-10 border-l-4 border-slate-200 pl-6 italic">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="p-4 bg-slate-50 rounded-2xl flex items-center gap-4">
              <Truck className="w-6 h-6 text-slate-400" />
              <div className="text-xs text-slate-500 uppercase font-bold">
                Shipping <br />
                <span className="text-slate-900 normal-case font-medium">
                  {product.shippingInformation}
                </span>
              </div>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl flex items-center gap-4">
              <ShieldCheck className="w-6 h-6 text-slate-400" />
              <div className="text-xs text-slate-500 uppercase font-bold">
                Warranty <br />
                <span className="text-slate-900 normal-case font-medium">
                  {product.warrantyInformation}
                </span>
              </div>
            </div>
          </div>

          <Button className="w-full cursor-pointer py-8 text-xl font-bold rounded-2xl bg-black text-white hover:bg-slate-800 transition-all">
            Add to cart
          </Button>
        </div>
      </section>

      <section className="border-t border-slate-100 pt-16">
        <h2 className="text-3xl font-black mb-10 flex items-center gap-4">
          Customer Reviews
          <span className="text-slate-300 text-xl font-normal">({product.reviews?.length})</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.reviews?.map((review, index) => (
            <div key={index} className="border border-slate-100 p-8 rounded-3xl shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold uppercase">
                  {review.reviewerName.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{review.reviewerName}</div>
                  <div className="text-xs text-slate-400">
                    {new Date(review.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div className="flex gap-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-slate-200'}`}
                  />
                ))}
              </div>
              <p className="text-slate-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
