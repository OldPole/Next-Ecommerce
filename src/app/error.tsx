'use client';

import { useEffect } from 'react';
import { Button } from '@/core/ui/button';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Something went wrong!</h2>
      <p className="text-slate-500 mb-8">
        An error occurred while loading data. Please try refreshing the page.
      </p>
      <Button onClick={() => reset()} variant="outline" className="rounded-xl cursor-pointer">
        Try again
      </Button>
    </div>
  );
}
