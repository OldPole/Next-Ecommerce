'use client';

import Cookies from 'js-cookie';
import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/core/ui/button';
import { Lock } from 'lucide-react';

interface Props {
  children: ReactNode;
}

export const AuthCheckContainer = ({ children }: Props) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const token = Cookies.get('token');
    setIsAuth(!!token);
  }, []);

  if (isAuth === null) {
    return <div className="h-16 w-full bg-slate-100 animate-pulse rounded-2xl" />;
  }

  if (!isAuth) {
    return (
      <Button
        asChild
        className="w-full py-8 text-xl font-bold rounded-2xl bg-black text-white hover:bg-slate-800 transition-all cursor-pointer">
        <Link href="/login">
          <Lock className="mr-2 h-6 w-6" /> Login to Buy
        </Link>
      </Button>
    );
  }

  return children;
};
