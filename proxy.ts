// proxy.ts
import createMiddleware from 'next-intl/middleware';
import { type NextRequest } from 'next/server';

// const intlMiddleware = createMiddleware({
//   // A list of all locales that are supported
//   locales: ['en', 'el', 'tr'],
//   // Used when no locale matches
//   defaultLocale: 'en'
// });

// export default function proxy(request: NextRequest) {
//   // This replaces the old middleware export
//   return intlMiddleware(request);
// }

// export const config = {
//   // Matcher ignoring /api, /_next, and static files
//   matcher: ['/((?!api|_next|.*\\..*).*)']
// };

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'el', 'tr'],
  
  // Used when no locale matches (e.g. hitting localhost:3000 directly)
  defaultLocale: 'en'
});

export const config = {
  // Match all pathnames except for
  // - /api (API routes)
  // - /_next (Next.js internals)
  // - /_vercel (Vercel internals)
  // - all files inside /public (e.g. /favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};