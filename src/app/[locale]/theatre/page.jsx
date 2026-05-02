import React from 'react'
import Image from 'next/image'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import PageHero from '@/components/sections/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import { programs } from '@/data/programs'
import { buildMetadata } from '@/lib/pageMetadata'

const slug = 'theatre'

export async function generateMetadata({ params }) {
  return buildMetadata({ params, key: slug })
}

const pillars = [
  { num: '01', title: 'Confidence', text: 'Speaking up, holding a stage, and the small daily courage of being seen and heard.' },
  { num: '02', title: 'Expression', text: 'Voice, body, face. Children learn how a single shift in tone can change the whole story.' },
  { num: '03', title: 'Teamwork', text: 'A play is a team sport. Cues, listening, supporting a scene partner who forgets a line.' },
  { num: '04', title: 'Creativity', text: 'Improvisation, character invention, and the freedom to take a script in a fresh direction.' },
]

const productions = [
  { meta: 'Autumn term', title: 'Stone Soup', text: 'A warm, slapstick adaptation of the classic folk tale, performed with masks and live music.', image: '/images/hero-theatre.png' },
  { meta: 'Winter term', title: 'The Snow Queen', text: 'A staged retelling for the youngest cast, with shadow puppets and a small chamber choir.', image: '/images/blog-cover-2.png' },
  { meta: 'Spring term', title: 'Aladdin Reimagined', text: 'A bilingual production blending English and Armenian, ending with a public Saturday performance.', image: '/images/blog-cover-3.png' },
]

export default async function TheatrePage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('theatre')
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
            <span className="section-eyebrow">What we build</span>
            <h2 className="section-title">Four habits, every term.</h2>
          </div>
          <div className="pillar-grid stagger" style={{ marginTop: 'var(--space-10)' }}>
            {pillars.map((p) => (
              <article key={p.num} className="pillar-card">
                <span className="pillar-card__num">{p.num}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reveal" style={{ maxWidth: '60ch' }}>
            <span className="section-eyebrow">Productions</span>
            <h2 className="section-title">Three real shows a year.</h2>
            <p className="section-lede">
              Every term ends with a public performance. Friends, family, and a
              real audience. The applause is part of the lesson.
            </p>
          </div>
          <div className="prod-grid" style={{ marginTop: 'var(--space-10)' }}>
            {productions.map((p) => (
              <article key={p.title} className="prod-card">
                <div className="prod-card__cover">
                  <Image src={p.image} alt={p.title} width={640} height={480} />
                </div>
                <div className="prod-card__body">
                  <span className="prod-card__meta">{p.meta}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reveal" style={{ maxWidth: '60ch' }}>
            <span className="section-eyebrow">Term structure</span>
            <h2 className="section-title">Twelve weeks. One real performance.</h2>
            <p className="section-lede">
              Each term has its own arc. Children know where they are going from day one.
            </p>
          </div>
          <div className="method-steps stagger" style={{ marginTop: 'var(--space-10)' }}>
            <div className="method-step">
              <span className="method-step__num">Weeks 1 to 4</span>
              <h3>Workshops</h3>
              <p>Voice work, stage games, improvisation, and basic technique. Children meet the cast and read the script.</p>
            </div>
            <div className="method-step">
              <span className="method-step__num">Weeks 5 to 10</span>
              <h3>Rehearsals</h3>
              <p>Blocking, scene work, costume and prop building, and music or movement design.</p>
            </div>
            <div className="method-step">
              <span className="method-step__num">Weeks 11 to 12</span>
              <h3>Performance</h3>
              <p>Dress rehearsal, technical run, and a public performance for parents on the final Saturday.</p>
            </div>
            <div className="method-step">
              <span className="method-step__num">Reflection</span>
              <h3>What we learned</h3>
              <p>Cast notes, photos, and a written reflection that travels into the next term&apos;s plan.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand namespace="theatre" titleKey="ctaTitle" ledeKey="ctaLede" ctaKey="enroll" />
    </>
  )
}
