import createMiddleware from 'next-intl/middleware';
import { locales, pathnames, defaultLocale } from './app/config/i18n.config';

export default createMiddleware({
  defaultLocale,
  locales,
  pathnames,
  localePrefix: 'always'
});

export const config = {
  matcher: [
    '/',
    '/(de|en)/:path*'
  ]
};
