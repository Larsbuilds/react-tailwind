import createMiddleware from 'next-intl/middleware';
import { locales, pathnames, defaultLocale } from './i18n.config';

export default createMiddleware({
  defaultLocale,
  locales,
  pathnames,
  localePrefix: 'always'
});

export const config = {
  matcher: [
    '/',
    '/(de|en)/:path*',
    '/((?!api|_next|_vercel|.*\\.).*)'
  ]
};
