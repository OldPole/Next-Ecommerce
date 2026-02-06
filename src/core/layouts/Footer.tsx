import Link from 'next/link';
import { Facebook, Instagram, Youtube, CreditCard, Wallet, Banknote, Store } from 'lucide-react';

const supportLinks = [
  { text: 'FAQ', href: '/faq' },
  { text: 'Terms of Use', href: '/terms' },
  { text: 'Privacy Policy', href: '/privacy' },
];

const shopLinks = [
  { text: 'My Account', href: '/account' },
  { text: 'Products', href: '/products' },
  { text: 'Cart', href: '/cart' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t mt-auto text-slate-600">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-black">
            <Store className="w-6 h-6 text-primary" />
            <span>Ecommerce</span>
          </Link>
          <div className="flex gap-4">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
            <Youtube className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-black">Support</h3>
          {supportLinks.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className="text-sm hover:text-primary hover:underline transition-colors">
              {link.text}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-black">Shop</h3>
          {shopLinks.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className="text-sm hover:text-primary hover:underline transition-colors">
              {link.text}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-black">Accepted Payments</h3>
          <div className="flex gap-4">
            <CreditCard className="w-6 h-6" strokeWidth={1.5} />
            <Wallet className="w-6 h-6" strokeWidth={1.5} />
            <Banknote className="w-6 h-6" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      <div className="border-t py-6 text-center text-sm">
        &copy; {currentYear} Ecommerce. All rights reserved.
      </div>
    </footer>
  );
};
