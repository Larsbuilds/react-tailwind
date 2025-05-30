import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'de'] as const;
export const defaultLocale = 'en' as const;

export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/products': '/products',
  '/contact': '/contact',
  '/blog': '/blog',
  '/blog/[slug]': '/blog/[slug]',
  '/legal': '/legal',
  '/privacy': '/privacy',
  '/terms': '/terms',
  '/404': '/404',
} as const;

export type AppPathnames = keyof typeof pathnames;

export async function getMessages(locale: string) {
  return (await import(`../i18n/messages/${locale}.json`)).default;
}

export default getRequestConfig(async ({ locale = 'en' }) => {
  const messages = await getMessages(locale);
  return {
    messages,
    timeZone: 'Europe/Berlin',
    now: new Date(),
    locale: locale
  };
});