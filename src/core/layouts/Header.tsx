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

  const items = useCartStore(state => state.items);
  const clearCart = useCartStore(state => state.clearCart);
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
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tighter"
          >
            <Store className="text-primary h-6 w-6" />
            <span>Ecommerce</span>
          </Link>

          <nav className="hidden gap-2 md:flex">
            <Link
              href="/"
              className="rounded-2xl px-3 py-2 text-sm font-black uppercase transition-colors hover:bg-slate-100"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="rounded-2xl px-3 py-2 text-sm font-black uppercase transition-colors hover:bg-slate-100"
            >
              Products
            </Link>
          </nav>
        </div>

        <div className="flex min-w-35 items-center justify-end gap-2">
          {mounted ? (
            <>
              <Link
                href="/cart"
                className="relative mr-1 rounded-full p-3 hover:bg-slate-100"
              >
                <ShoppingCart className="h-5 w-5" />
                {isAuth && cartCount > 0 && (
                  <span className="absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-black text-[10px] font-black text-white">
                    {cartCount}
                  </span>
                )}
              </Link>

              {isAuth ? (
                <div className="flex items-center gap-2">
                  <Link
                    href="/account"
                    className="flex items-center gap-2 rounded-full p-3 hover:bg-slate-100"
                  >
                    <User className="h-5 w-5" />
                    <span className="hidden text-xs font-black uppercase sm:inline">
                      Profile
                    </span>
                  </Link>
                  <Button
                    onClick={handleLogout}
                    variant="ghost"
                    size="icon"
                    className="cursor-pointer rounded-full hover:bg-red-50 hover:text-red-500"
                  >
                    <LogOut className="h-5 w-5" />
                  </Button>
                </div>
              ) : (
                <Button
                  asChild
                  className="h-10 rounded-xl px-6 text-xs font-black uppercase"
                >
                  <Link href="/login">Login</Link>
                </Button>
              )}
            </>
          ) : (
            <div className="flex items-center gap-4">
              <div className="h-10 w-50 animate-pulse rounded-xl bg-slate-100" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
