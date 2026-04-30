import React from 'react'
import { useTranslations } from 'next-intl'
import Button from '@/components/ui/Button'
import { Band, Inner, Copy } from './style.js'

export default function CtaBand({ titleKey, ledeKey, ctaKey, namespace = 'home' }) {
  const t = useTranslations(namespace)
  const tNav = useTranslations('nav')
  return (
    <Band>
      <Inner>
        <Copy>
          <h2>{t(titleKey || 'ctaBandTitle')}</h2>
          <p>{t(ledeKey || 'ctaBandLede')}</p>
        </Copy>
        <Button href="/contact" variant="accent" size="lg">
          {tNav(ctaKey || 'enroll')}
        </Button>
      </Inner>
    </Band>
  )
}
