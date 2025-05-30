import {getRequestConfig} from 'next-intl/server';
import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'de'] as const;
export const defaultLocale = 'en' as const;

export const pathnames = {
  '/': '/',
  '/about': {
    en: '/about',
    de: '/ueber-uns'
  },
  '/product': {
    en: '/product',
    de: '/produkt'
  }
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;

export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`./messages/${locale}.json`)).default
}));