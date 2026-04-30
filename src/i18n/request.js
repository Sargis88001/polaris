import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales, defaultLocale } from './config.js'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale
  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale
  }

  let messages
  try {
    messages = (await import(`../messages/${locale}.json`)).default
  } catch (err) {
    notFound()
  }

  return { locale, messages }
})
