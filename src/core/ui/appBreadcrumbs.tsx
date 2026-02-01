import Link from 'next/link';
import React from 'react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface Props {
  items: (string | BreadcrumbItem)[];
}

export const AppBreadcrumbs = ({ items = [] }: Props) => {
  const lastItem = items[items.length - 1];
  const title = typeof lastItem === 'string' ? lastItem : lastItem?.label;

  return (
    <div className="w-full">
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">{title}</h1>

        <nav className="flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Ecommerce
          </Link>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const label = typeof item === 'string' ? item : item.label;
            const path = typeof item === 'object' ? item.path : null;

            return (
              <React.Fragment key={index}>
                <span className="select-none text-slate-400">{'>'}</span>

                {path && !isLast ? (
                  <Link href={path} className="hover:text-slate-900 transition-colors">
                    {label}
                  </Link>
                ) : (
                  <span className={isLast ? 'text-slate-900 font-semibold' : ''}>{label}</span>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
