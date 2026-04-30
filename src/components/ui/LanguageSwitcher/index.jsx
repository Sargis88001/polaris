'use client'

import React, { useTransition } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { locales, localeLabels, localeNames } from '@/i18n/config'
import { Switcher, LangButton } from './style.js'

export default function LanguageSwitcher() {
  const t = useTranslations('language')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const handleSwitch = (next) => {
    if (next === locale) return
    startTransition(() => {
      router.replace(pathname, { locale: next })
    })
  }

  return (
    <Switcher role="group" aria-label={t('label')}>
      {locales.map((loc) => (
        <LangButton
          key={loc}
          type="button"
          $active={locale === loc}
          aria-pressed={locale === loc}
          aria-label={localeNames[loc]}
          disabled={isPending}
          onClick={() => handleSwitch(loc)}
        >
          {localeLabels[loc]}
        </LangButton>
      ))}
    </Switcher>
  )
}
