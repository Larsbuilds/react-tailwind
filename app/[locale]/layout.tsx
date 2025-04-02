import { Inter } from "next/font/google"
import { getTranslations } from 'next-intl/server'
import { notFound } from "next/navigation"
import { Providers } from "../providers"
import { Header } from "../components/layout/Header"

const inter = Inter({ subsets: ["latin"] })

async function getMessages(locale: string) {
  try {
    return (await import(`../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers locale={locale} messages={messages}>
          <Header />
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
