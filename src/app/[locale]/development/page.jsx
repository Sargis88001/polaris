import React from 'react'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import PageHero from '@/components/sections/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import { programs } from '@/data/programs'
import { buildMetadata } from '@/lib/pageMetadata'
import { PillarsSection, PillarsInner, PillarTitle, PillarsGrid, Pillar } from './style.js'

const slug = 'development'

export async function generateMetadata({ params }) {
  return buildMetadata({ params, key: slug })
}

export default async function DevelopmentPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('development')
  const tCommon = await getTranslations('common')
  const program = programs.find((p) => p.slug === slug)
  const pillars = t.raw('pillars')

  return (
    <>
      <PageHero
        kicker={tCommon('ages')}
        title={t('heroTitle')}
        lede={t('heroLede')}
        image={program.image}
        imageAlt={t('title')}
      />
      <PillarsSection>
        <PillarsInner>
          <PillarTitle>{t('pillarsTitle')}</PillarTitle>
          <PillarsGrid>
            {pillars.map((p, i) => (
              <Pillar key={i}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Pillar>
            ))}
          </PillarsGrid>
        </PillarsInner>
      </PillarsSection>
      <CtaBand namespace="home" titleKey="ctaBandTitle" ledeKey="ctaBandLede" />
    </>
  )
}
