import React from 'react'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import PageHero from '@/components/sections/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import { programs } from '@/data/programs'
import { buildMetadata } from '@/lib/pageMetadata'

const slug = 'robotics'

export async function generateMetadata({ params }) {
  return buildMetadata({ params, key: slug })
}

const techStack = [
  { name: 'LEGO Mindstorms', level: 'Ages 7 to 9' },
  { name: 'Arduino', level: 'Ages 10 to 13' },
  { name: 'Raspberry Pi', level: 'Ages 12 to 16' },
  { name: 'Python', level: 'Ages 11 plus' },
  { name: 'C / C++', level: 'Advanced track' },
  { name: 'Web tools', level: 'All levels' },
]

export default async function RoboticsPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('robotics')
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
          <div className="intro-grid">
            <div className="reveal">
              <span className="section-eyebrow">The curriculum</span>
              <h2 className="section-title">What every level builds.</h2>
            </div>
            <div className="reveal">
              <p className="section-lede">
                We teach in projects, not textbooks. Every skill appears because
                it is needed to finish the build, not because it is next in the chapter.
              </p>
              <p className="section-lede" style={{ marginTop: 'var(--space-4)' }}>
                Every term ends with a working prototype students take home.
              </p>
            </div>
          </div>
          <div className="pillar-grid stagger" style={{ marginTop: 'var(--space-12)' }}>
            <article className="pillar-card">
              <span className="pillar-card__num">01</span>
              <h3>Logical thinking</h3>
              <p>If/then reasoning, loops, and the habit of breaking a problem into the smallest possible steps.</p>
            </article>
            <article className="pillar-card pillar-card--featured">
              <span className="pillar-card__num">02</span>
              <h3>Electronics</h3>
              <p>Voltage, current, sensors, and the joy of a circuit that finally lights up. Real breadboards, real components.</p>
            </article>
            <article className="pillar-card">
              <span className="pillar-card__num">03</span>
              <h3>Collaboration</h3>
              <p>Pair programming, code reviews, and the polite art of disagreeing about design decisions.</p>
            </article>
            <article className="pillar-card">
              <span className="pillar-card__num">04</span>
              <h3>Debugging</h3>
              <p>The most underrated engineering skill. Reading an error message calmly and finding the real cause.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reveal" style={{ maxWidth: '60ch' }}>
            <span className="section-eyebrow">Tech stack</span>
            <h2 className="section-title">Tools that grow with the student.</h2>
          </div>
          <div className="tech-grid stagger" style={{ marginTop: 'var(--space-10)' }}>
            {techStack.map((tech) => (
              <div key={tech.name} className="tech-card">
                <h4>{tech.name}</h4>
                <p>{tech.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand namespace="robotics" titleKey="ctaTitle" ledeKey="ctaLede" ctaKey="enroll" />
    </>
  )
}
