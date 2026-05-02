import React from 'react'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import PageHero from '@/components/sections/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import { programs } from '@/data/programs'
import { buildMetadata } from '@/lib/pageMetadata'


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
      <section className="section" style={{ background: 'var(--color-surface-offset)' }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: '60ch' }}>
            <span className="section-eyebrow">Pillars</span>
            <h2 className="section-title">{t('pillarsTitle')}</h2>
          </div>
          <div className="pillar-grid stagger" style={{ marginTop: 'var(--space-10)' }}>
            {pillars.map((p, i) => (
              <article key={i} className="pillar-card">
                <span className="pillar-card__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand namespace="home" titleKey="ctaBandTitle" ledeKey="ctaBandLede" />
    </>
  )
}
