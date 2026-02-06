import type { Metadata } from 'next';
import '@/core/assets/css/App.css';
import { Header } from '@/core/layouts/Header';
import { Footer } from '@/core/layouts/Footer';
import { CartStoreProvider } from '@/core/providers/cart-store-provider';

export const metadata: Metadata = {
  title: 'Next Ecommerce',
  description: 'Best products with Next.js 16 and DummyJSON API',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <CartStoreProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grow container mx-auto px-4">{children}</main>
            <Footer />
          </div>
        </CartStoreProvider>
      </body>
    </html>
  );
}
