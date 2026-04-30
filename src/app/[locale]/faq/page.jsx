import React from 'react'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import FaqSearchable from './FaqSearchable.jsx'
import CtaBand from '@/components/sections/CtaBand'
import { faqGroups } from '@/data/faq'
import { buildMetadata } from '@/lib/pageMetadata'
import { HeroSection, HeroInner, HeroTitle, HeroLede } from './style.js'

export async function generateMetadata({ params }) {
  return buildMetadata({ params, key: 'faq' })
}

export default async function FaqPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('faq')

  return (
    <>
      <HeroSection>
        <HeroInner>
          <HeroTitle>{t('title')}</HeroTitle>
          <HeroLede>{t('lede')}</HeroLede>
        </HeroInner>
      </HeroSection>
      <FaqSearchable
        groups={faqGroups}
        searchPlaceholder={t('searchPlaceholder')}
        emptyState={t('emptyState')}
      />
      <CtaBand namespace="faq" titleKey="ctaTitle" ledeKey="ctaLede" ctaKey="contact" />
    </>
  )
}
