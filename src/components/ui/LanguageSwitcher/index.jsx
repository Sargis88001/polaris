'use client'

import React, { useTransition } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { locales, localeLabels } from '@/i18n/config'
import { LangSelect } from './style.js'

export default function LanguageSwitcher() {
  const t = useTranslations('language')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const switchLang = (next) => {
    if (next === locale) return
    startTransition(() => {
      router.replace(pathname, { locale: next })
    })
  }

  return (
    <LangSelect
      className="lang-select"
      aria-label={t('label')}
      value={locale}
      disabled={isPending}
      onChange={(e) => switchLang(e.target.value)}
    >
      {locales.map((loc) => (
        <option key={loc} value={loc}>
          {localeLabels[loc]}
        </option>
      ))}
    </LangSelect>
  )
}
