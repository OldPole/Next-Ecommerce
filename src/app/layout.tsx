import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/core/assets/css/App.css';
import { Header } from '@/core/layouts/Header';
import { Footer } from '@/core/layouts/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Next Ecommerce',
  description: 'Лучшие товары на базе Next.js 15 и DummyJSON API',
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="grow container mx-auto px-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
