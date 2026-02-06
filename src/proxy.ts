import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  const isAuthPage = pathname === '/login';

  const isProtectedPage = pathname.startsWith('/account') || pathname.startsWith('/cart');

  if (!token && isProtectedPage) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/account', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/account', '/login', '/cart'],
};
