import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get('autenticado')?.value === 'true'
  const isLoginPage = request.nextUrl.pathname === '/'

  if (!isAuthenticated && !isLoginPage) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (isAuthenticated && isLoginPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*']
}
