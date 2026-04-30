import React from 'react'
import { setRequestLocale } from 'next-intl/server'
import Hero from '@/components/sections/Hero'
import ProgramGrid from '@/components/sections/ProgramGrid'
import Testimonials from '@/components/sections/Testimonials'
import CtaBand from '@/components/sections/CtaBand'
import { buildMetadata } from '@/lib/pageMetadata'

export async function generateMetadata({ params }) {
  return buildMetadata({ params, key: 'home' })
}

export default async function HomePage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)
  return (
    <>
      <Hero />
      <ProgramGrid />
      <Testimonials />
      <CtaBand />
    </>
  )
}
