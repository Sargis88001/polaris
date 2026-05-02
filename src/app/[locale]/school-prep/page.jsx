import React from 'react'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { Check } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import { programs } from '@/data/programs'
import { buildMetadata } from '@/lib/pageMetadata'

const slug = 'school-prep'

export async function generateMetadata({ params }) {
  return buildMetadata({ params, key: 'schoolPrep' })
}

const checklist = [
  { title: 'Reading readiness', text: 'Letter sounds, short words, and the early habits that make first-grade reading a joy.' },
  { title: 'Number sense', text: 'Counting, comparing, and a confident grasp of numbers up to twenty before September.' },
  { title: 'Fine motor', text: 'Pencil grip, scissors, and the small muscles that turn writing from a chore into a craft.' },
  { title: 'Listening stamina', text: 'Sitting through a story, following a sequence of three steps, and waiting your turn.' },
  { title: 'Self-care', text: 'Bag, jacket, water bottle, the practical independence school will quietly expect.' },
  { title: 'Curious mind', text: 'A child who asks why and is not afraid to try something they have never seen before.' },
]

export default async function SchoolPrepPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('schoolPrep')
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

      <section className="section">
        <div className="container">
          <div className="reveal" style={{ maxWidth: '60ch' }}>
            <span className="section-eyebrow">Outcomes</span>
            <h2 className="section-title">{t('outcomesTitle')}</h2>
          </div>
          <div className="checklist stagger" style={{ marginTop: 'var(--space-10)' }}>
            {checklist.map((c) => (
              <div key={c.title} className="check-item">
                <span className="check-item__icon" aria-hidden="true">
                  <Check size={18} />
                </span>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-surface-offset)' }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: '60ch' }}>
            <span className="section-eyebrow">Session structure</span>
            <h2 className="section-title">How a 90-minute session is built.</h2>
            <p className="section-lede">
              Children thrive on routine. Each session follows the same rhythm so
              they arrive knowing what to expect.
            </p>
          </div>
          <div className="method-steps stagger" style={{ marginTop: 'var(--space-10)' }}>
            <div className="method-step">
              <span className="method-step__num">Step 01</span>
              <h3>Morning circle</h3>
              <p>Calendar, weather, and a short discussion question to build language and settle the group.</p>
            </div>
            <div className="method-step">
              <span className="method-step__num">Step 02</span>
              <h3>Focused learning</h3>
              <p>Literacy or numeracy work at the table, a short, hands-on task with a clear goal.</p>
            </div>
            <div className="method-step">
              <span className="method-step__num">Step 03</span>
              <h3>Movement break</h3>
              <p>A game that practises a concept through the body, counting jumps, spelling with movement.</p>
            </div>
            <div className="method-step">
              <span className="method-step__num">Step 04</span>
              <h3>Creative close</h3>
              <p>Drawing, building, or writing. Children leave with something they made.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand namespace="schoolPrep" titleKey="ctaTitle" ledeKey="ctaLede" ctaKey="enroll" />
    </>
  )
}
