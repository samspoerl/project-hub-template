import { NextRequest, NextResponse } from 'next/server'
import { auth } from './lib/auth'

export default async function middleware(req: NextRequest) {
  if (process.env.USE_AUTH === 'false') {
    return NextResponse.next()
  }

  const path = req.nextUrl.pathname
  const session = await auth()
  const user = session?.user

  // Redirect to or away from /login depending on auth status.
  if (path !== '/login' && !user) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  } else if (path === '/login' && user) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }

  return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
