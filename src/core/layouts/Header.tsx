import Link from 'next/link';
import { ShoppingCart, User, Store } from 'lucide-react';
import { Button } from '@/core/ui/button';

export const Header = () => {
  const isAuth = false;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity">
            <Store className="w-6 h-6 text-primary" />
            <span>Ecommerce</span>
          </Link>

          <nav className="hidden md:flex gap-2">
            <Link
              href="/"
              className="text-sm font-medium px-3 py-2 rounded-md hover:bg-slate-100 hover:text-primary transition-all active:scale-95">
              HOME
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium px-3 py-2 rounded-md hover:bg-slate-100 hover:text-primary transition-all active:scale-95">
              PRODUCTS
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="relative p-2 hover:bg-slate-100 rounded-full transition-all active:scale-90">
            <ShoppingCart className="w-5 h-5" />
          </Link>

          {isAuth ? (
            <Link
              href="/account"
              className="p-2 hover:bg-slate-100 rounded-full transition-all active:scale-90">
              <User className="w-5 h-5" />
            </Link>
          ) : (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-full shadow-sm hover:bg-slate-100 transition-all active:scale-95">
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
