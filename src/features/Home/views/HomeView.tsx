import { ProductService } from '@/features/Products/services/product.service';
import { ProductCard } from '@/features/Products/components/ProductCard';

import { HeroSlider } from '../components/HeroSlider';
import { FEATURES } from '../constants/home.constants';

export const HomeView = async () => {
  const { products } = await ProductService.getProducts({
    limit: 5,
    category: 'mens-shirts',
  });

  return (
    <div className="flex flex-col gap-16 p-20">
      <HeroSlider />

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map(({ icon, title, desc }, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-4xl">
              <div className="mb-4">{icon}</div>
              <h4 className="font-bold text-xl mb-2">{title}</h4>
              <p className="text-slate-500 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter">Best Selling</h2>
            <div className="h-1.5 w-20 bg-black mt-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`lg:col-span-2 ${index === 3 ? 'lg:col-start-2' : ''}`}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
