import { Truck, ShieldCheck, Zap } from 'lucide-react';
import { Feature, Slide } from '../types/home.types';

export const FEATURES: Feature[] = [
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'Free Shipping',
    desc: 'Upgrade your style today and get FREE shipping on all orders!',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Satisfaction Guarantee',
    desc: 'Shop confidently with our Satisfaction Guarantee.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Secure Payment',
    desc: 'Your security is our priority. Your payments are secure.',
  },
];

export const SLIDES: Slide[] = [
  {
    url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000',
    title: 'PREMIUM SHIRTS COLLECTION',
    label: 'New Arrivals',
    category: 'mens-shirts',
  },
  {
    url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000',
    title: 'MODERN VEHICLES & ACCESSORIES',
    label: 'Exclusive Choice',
    category: 'vehicle',
  },
  {
    url: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=2000',
    title: 'NEXT-GEN ELECTRONICS',
    label: 'Smart Living',
    category: 'smartphones',
  },
];
