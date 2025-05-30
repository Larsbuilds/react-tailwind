import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Header } from '@/components/layout/Header';
import { locales } from '@/config/i18n.config';

import { getMessages } from '@/config/i18n.config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider>
        <div className="relative min-h-screen bg-background font-sans antialiased">
          <div>
            <Header />
            <main className="relative">
              {children}
            </main>

          </div>
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
