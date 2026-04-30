import { createNavigation } from 'next-intl/navigation'
import { locales, defaultLocale } from './config.js'

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation({
  locales,
  defaultLocale,
  localePrefix: 'always',
})
