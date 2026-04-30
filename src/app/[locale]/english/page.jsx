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
      <ProgramSchedule
        title={t('scheduleTitle')}
        rows={program.schedule}
        columns={['Level', 'Days', 'Time', 'Group size']}
      />
      <CtaBand namespace="english" titleKey="ctaTitle" ledeKey="ctaLede" ctaKey="enroll" />
    </>
  )
}
