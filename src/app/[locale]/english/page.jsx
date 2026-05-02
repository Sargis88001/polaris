import React from 'react'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import PageHero from '@/components/sections/PageHero'
import ProgramSchedule from '@/components/sections/ProgramSchedule'
import CtaBand from '@/components/sections/CtaBand'
import { programs } from '@/data/programs'
import { buildMetadata } from '@/lib/pageMetadata'

const slug = 'english'

export async function generateMetadata({ params }) {
  return buildMetadata({ params, key: slug })
}

export default async function EnglishPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('english')
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
            <span className="section-eyebrow">Levels we teach</span>
            <h2 className="section-title">From first words to fluency.</h2>
            <p className="section-lede">
              Four CEFR-aligned levels, each running across a full school year so
              children have time to absorb, practise, and own the language.
            </p>
          </div>
          <div className="levels-strip reveal" style={{ marginTop: 'var(--space-8)' }}>
            <div className="level-step">
              <div className="level-step__index">01</div>
              <h3>Starter A1</h3>
              <p>First words, songs, pictures, and short questions. Ages 5 to 8.</p>
            </div>
            <div className="level-step">
              <div className="level-step__index">02</div>
              <h3>Elementary A2</h3>
              <p>Short conversations, basic reading, and writing about familiar life.</p>
            </div>
            <div className="level-step">
              <div className="level-step__index">03</div>
              <h3>Pre-Intermediate B1</h3>
              <p>Real opinions, longer texts, and the first taste of fluent speaking.</p>
            </div>
            <div className="level-step">
              <div className="level-step__index">04</div>
              <h3>Intermediate B1</h3>
              <p>Confident speakers handling discussion, debate, and creative writing.</p>
            </div>
          </div>
        </div>
      </section>

      <ProgramSchedule
        title={t('scheduleTitle')}
        rows={program.schedule}
        columns={['Level', 'Days', 'Time', 'Group size']}
      />

      <section className="section">
        <div className="container">
          <div className="reveal" style={{ maxWidth: '60ch' }}>
            <span className="section-eyebrow">A typical lesson</span>
            <h2 className="section-title">75 minutes. Four parts.</h2>
            <p className="section-lede">
              Every lesson follows the same rhythm so children know what to expect
              and teachers can go deeper, not wider.
            </p>
          </div>
          <div className="method-steps stagger" style={{ marginTop: 'var(--space-10)' }}>
            <div className="method-step">
              <span className="method-step__num">Step 01</span>
              <h3>Warm-up, 10 min</h3>
              <p>Greeting, song, recap of last lesson.</p>
            </div>
            <div className="method-step">
              <span className="method-step__num">Step 02</span>
              <h3>New language, 20 min</h3>
              <p>Story, video, or visual context introducing today&apos;s structure.</p>
            </div>
            <div className="method-step">
              <span className="method-step__num">Step 03</span>
              <h3>Practice, 30 min</h3>
              <p>Pair and group activities, the meat of the lesson.</p>
            </div>
            <div className="method-step">
              <span className="method-step__num">Step 04</span>
              <h3>Closing game, 15 min</h3>
              <p>Speaking task that uses everything from today.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand namespace="english" titleKey="ctaTitle" ledeKey="ctaLede" ctaKey="enroll" />
    </>
  )
}
