import React from 'react'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import PageHero from '@/components/sections/PageHero'
import CtaBand from '@/components/sections/CtaBand'
import { milestones, team } from '@/data/team'
import { buildMetadata } from '@/lib/pageMetadata'
import {
  Section,
  Inner,
  TwoCol,
  StatementCard,
  Timeline,
  TimelineItem,
  TeamGrid,
  TeamCard,
} from './style.js'

export async function generateMetadata({ params }) {
  return buildMetadata({ params, key: 'about' })
}

export default async function AboutPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('about')
  const tCommon = await getTranslations('common')

  return (
    <>
      <PageHero
        kicker={tCommon('yerevan')}
        title={t('heroTitle')}
        lede={t('heroLede')}
        image="/images/hero-about.png"
        imageAlt={t('title')}
      />

      <Section>
        <Inner>
          <TwoCol>
            <StatementCard>
              <h3>{t('missionTitle')}</h3>
              <p>{t('missionText')}</p>
            </StatementCard>
            <StatementCard $tone="dark">
              <h3>{t('visionTitle')}</h3>
              <p>{t('visionText')}</p>
            </StatementCard>
          </TwoCol>
        </Inner>
      </Section>

      <Section>
        <Inner>
          <h2>{t('timelineTitle')}</h2>
          <Timeline>
            {milestones.map((m) => (
              <TimelineItem key={m.year}>
                <span>{m.year}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </TimelineItem>
            ))}
          </Timeline>
        </Inner>
      </Section>

      <Section>
        <Inner>
          <h2>{t('valuesTitle')}</h2>
          <TeamGrid>
            {team.map((person) => (
              <TeamCard key={person.name}>
                <h3>{person.name}</h3>
                <span>{person.role}</span>
                <p>{person.bio}</p>
              </TeamCard>
            ))}
          </TeamGrid>
        </Inner>
      </Section>

      <CtaBand namespace="home" titleKey="ctaBandTitle" ledeKey="ctaBandLede" />
    </>
  )
}
