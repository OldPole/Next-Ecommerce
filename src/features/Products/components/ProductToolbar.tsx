'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/core/ui/button';
import { Input } from '@/core/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/core/ui/select';
import { useDebounce } from '../hooks/useDebounce';
import { X } from 'lucide-react';

export const ProductToolbar = ({ categories }: { categories: string[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const currentSearch = params.get('search') || '';

    if (!debouncedSearch && !currentSearch) return;

    if (debouncedSearch === currentSearch) return;

    if (debouncedSearch) {
      params.set('search', debouncedSearch);
      params.delete('category');
    } else {
      params.delete('search');
    }

    params.set('page', '1');
    router.push(`?${params.toString()}`, { scroll: false });
  }, [debouncedSearch, router]);

  const handleCategoryChange = (value: string) => {
    setSearchTerm('');
    const params = new URLSearchParams(window.location.search);
    params.delete('search');

    if (value !== 'all') params.set('category', value);
    else params.delete('category');

    params.set('page', '1');
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(window.location.search);
    if (value === 'default') {
      params.delete('sortBy');
      params.delete('order');
    } else {
      const [field, order] = value.split('-');
      params.set('sortBy', field);
      params.set('order', order);
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleReset = () => {
    setSearchTerm('');
    router.push('/products', { scroll: false });
  };

  const isResetDisabled = !searchParams.toString();

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-8 bg-white">
      <Input
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="md:w-1/3"
      />

      <Select value={searchParams.get('category') || 'all'} onValueChange={handleCategoryChange}>
        <SelectTrigger className="md:w-1/4 cursor-pointer">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all" className="cursor-pointer">
            All Categories
          </SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category} className="cursor-pointer">
              {category.replace(/-/g, ' ')}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={searchParams.get('order') ? `price-${searchParams.get('order')}` : 'default'}
        onValueChange={handleSortChange}>
        <SelectTrigger className="md:w-1/4 cursor-pointer">
          <SelectValue placeholder="Sort by Price" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="default" className="cursor-pointer">
            Default
          </SelectItem>
          <SelectItem value="price-asc" className="cursor-pointer">
            Price: Low to High
          </SelectItem>
          <SelectItem value="price-desc" className="cursor-pointer">
            Price: High to Low
          </SelectItem>
        </SelectContent>
      </Select>

      <Button
        variant="outline"
        onClick={handleReset}
        disabled={isResetDisabled}
        className="flex items-center gap-2 text-slate-500 cursor-pointer">
        <X className="w-4 h-4" />
        Reset Filters
      </Button>
    </div>
  );
};
