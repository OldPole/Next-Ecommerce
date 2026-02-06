'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShoppingCart, User, Store, LogOut } from 'lucide-react';
import { Button } from '@/core/ui/button';
import { useCartStore } from '@/core/providers/cart-store-provider';

export const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    setMounted(true);
    setIsAuth(!!Cookies.get('token'));
  }, []);

  const handleLogout = () => {
    Cookies.remove('token');
    setIsAuth(false);
    clearCart();
    router.refresh();
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter ">
            <Store className="w-6 h-6 text-primary" />
            <span>Ecommerce</span>
          </Link>

          <nav className="hidden md:flex gap-2">
            <Link
              href="/"
              className="text-sm font-black px-3 py-2 uppercase rounded-2xl transition-colors hover:bg-slate-100">
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-black px-3 py-2 uppercase rounded-2xl transition-colors hover:bg-slate-100">
              Products
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 min-w-35 justify-end">
          {mounted ? (
            <>
              <Link href="/cart" className="p-3 hover:bg-slate-100 rounded-full relative mr-1">
                <ShoppingCart className="w-5 h-5" />
                {isAuth && cartCount > 0 && (
                  <span className="absolute top-1 right-1 bg-black text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                    {cartCount}
                  </span>
                )}
              </Link>

              {isAuth ? (
                <div className="flex items-center gap-2">
                  <Link
                    href="/account"
                    className="p-3 hover:bg-slate-100 rounded-full flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span className="text-xs font-black uppercase hidden sm:inline">Profile</span>
                  </Link>
                  <Button
                    onClick={handleLogout}
                    variant="ghost"
                    size="icon"
                    className="rounded-full cursor-pointer hover:bg-red-50 hover:text-red-500">
                    <LogOut className="w-5 h-5" />
                  </Button>
                </div>
              ) : (
                <Button asChild className="rounded-xl px-6 font-black uppercase text-xs h-10">
                  <Link href="/login">Login</Link>
                </Button>
              )}
            </>
          ) : (
            <div className="flex items-center gap-4">
              <div className="w-50 h-10 bg-slate-100 rounded-xl animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
