import React from 'react';
import Link from 'next/link';
import { Button } from '@/core/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-24 sm:py-32">
      <div className="max-w-190 mx-auto space-y-6">
        <span className="text-7xl" role="img" aria-label="confused face">
          😕
        </span>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900">
          Ничего не найдено
        </h1>

        <p className="text-xl sm:text-2xl text-slate-600">
          К сожалению, данная страница отсутствует в нашем интернет-магазине
        </p>

        <div className="pt-6">
          <Button asChild variant="default" size="lg">
            <Link href="/">Вернуться на главную</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
