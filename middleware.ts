import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function middleware(request: NextRequest) {
  // Skip authentication for public routes
  const publicPaths = ['/sign-in', '/sign-up', '/api/auth', '/_next', '/favicon.ico'];
  const isPublicPath = publicPaths.some(path => request.nextUrl.pathname.startsWith(path));
  
  if (isPublicPath) {
    return NextResponse.next();
  }

  // Check for session using cookies instead of auth.api to reduce bundle size
  const sessionCookie = request.cookies.get('better-auth.session_token');
  
  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sign-in|sign-up|assets).*)"],
};
