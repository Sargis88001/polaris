import React from 'react'
import { useTranslations } from 'next-intl'
import Carousel from '@/components/ui/Carousel'
import { Section, Inner, Header, CarouselWrap } from './style.js'

const items = [
  {
    quote:
      'My daughter started in beginner gymnastics terrified of forward rolls. Two terms in, she is competing, and her confidence at school has changed completely.',
    author: 'Mariam P., parent',
  },
  {
    quote:
      'The English program is the first one she actually wants to attend. The lessons are full of conversation, not worksheets.',
    author: 'Anush S., parent',
  },
  {
    quote:
      'Real teachers, real progress, and a building that feels like a home. We have recommended BrightPath to half the parents we know.',
    author: 'David K., parent',
  },
  {
    quote:
      'My son built his first robot here when he was eight. He is twelve now and still asks for the next class on Tuesday morning.',
    author: 'Lilit B., parent',
  },
]

export default function Testimonials() {
  const t = useTranslations('home')
  return (
    <Section>
      <Inner>
        <Header>
          <h2>{t('testimonialsTitle')}</h2>
        </Header>
        <CarouselWrap>
          <Carousel items={items} ariaLabel={t('testimonialsTitle')} />
        </CarouselWrap>
      </Inner>
    </Section>
  )
}
