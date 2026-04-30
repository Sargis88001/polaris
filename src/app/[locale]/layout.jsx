import React from 'react'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import StyledComponentsRegistry from '@/lib/registry'
import ThemeProviderClient from '@/lib/ThemeProviderClient'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { locales } from '@/i18n/config'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!locales.includes(locale)) notFound()
  return {
    alternates: {
      canonical: `/${locale}`,
      languages: locales.reduce((acc, loc) => {
        acc[loc] = `/${loc}`
        return acc
      }, {}),
    },
  }
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params
  if (!locales.includes(locale)) notFound()

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/fonts/font.css" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProviderClient>
              <Header />
              <main>{children}</main>
              <Footer />
            </ThemeProviderClient>
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
