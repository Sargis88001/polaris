import React from 'react'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import PageHero from '@/components/sections/PageHero'
import ProgramSchedule from '@/components/sections/ProgramSchedule'
import CtaBand from '@/components/sections/CtaBand'
import { programs } from '@/data/programs'
import { buildMetadata } from '@/lib/pageMetadata'

const slug = 'gymnastics'

export async function generateMetadata({ params }) {
  return buildMetadata({ params, key: slug })
}

export default async function GymnasticsPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('gymnastics')
  const tCommon = await getTranslations('common')
  const program = programs.find((p) => p.slug === slug)

  return (
    <>
      <PageHero
        kicker={tCommon('ages')}
        title={t('heroTitle')}
        lede={t('heroLede')}
        image={program.image}
        imageAlt={t('title')}
      />

      <ProgramSchedule
        title={t('scheduleTitle')}
        rows={program.schedule}
        columns={['Level', 'Days', 'Time', 'Age']}
      />

      <section className="section">
        <div className="container">
          <div className="level-grid">
            <article className="level-card">
              <span className="level-card__tag">Level 01</span>
              <h3>Foundations</h3>
              <p>
                First rolls, balances, and shapes. Children learn how to fall safely,
                how to listen on the mat, and how to celebrate small wins together.
              </p>
            </article>
            <article className="level-card">
              <span className="level-card__tag">Level 02</span>
              <h3>Skill builders</h3>
              <p>
                Cartwheels, handstands, and the first tumbling lines. Conditioning
                becomes a game and stronger bodies meet stronger minds.
              </p>
            </article>
            <article className="level-card">
              <span className="level-card__tag">Level 03</span>
              <h3>Competition path</h3>
              <p>
                For children who want to take it further. Routine work, technical
                detail, and friendly meets with other clubs in Yerevan.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reveal" style={{ maxWidth: '60ch' }}>
            <span className="section-eyebrow">By the numbers</span>
            <h2 className="section-title">A gym built around children.</h2>
          </div>
          <div className="stats-grid stagger" style={{ marginTop: 'var(--space-10)' }} data-stats>
            <div className="stat">
              <div className="stat__num"><span data-counter="12">12</span></div>
              <div className="stat__label">years coaching children in Yerevan</div>
            </div>
            <div className="stat">
              <div className="stat__num"><span data-counter="400">400</span><span className="suffix">+</span></div>
              <div className="stat__label">students trained across all levels</div>
            </div>
            <div className="stat">
              <div className="stat__num"><span data-counter="8">8</span></div>
              <div className="stat__label">max group size, everyone is seen</div>
            </div>
            <div className="stat">
              <div className="stat__num"><span data-counter="100">100</span><span className="suffix">%</span></div>
              <div className="stat__label">certified coaches with competition backgrounds</div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        namespace="gymnastics"
        titleKey="ctaTitle"
        ledeKey="ctaLede"
        ctaKey="enroll"
      />
    </>
  )
}
