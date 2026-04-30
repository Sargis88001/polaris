import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Button from '@/components/ui/Button'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import {
  HeroSection,
  HeroGrid,
  Kicker,
  Title,
  Lede,
  Actions,
  Visual,
  StatsBadge,
} from './style.js'

export default function Hero() {
  const t = useTranslations('home')
  const tCommon = useTranslations('common')
  const titleTemplate = t('heroTitle')
  const accent = t('heroAccent')
  const parts = titleTemplate.split('{accent}')

  return (
    <HeroSection>
      <HeroGrid>
        <div>
          <Kicker>{t('kicker')}</Kicker>
          <Title>
            {parts[0]}
            <em>{accent}</em>
            {parts[1]}
          </Title>
          <Lede>{t('heroLede')}</Lede>
          <Actions>
            <Button href="/contact" variant="primary" size="lg">
              {t('ctaPrimary')}
            </Button>
            <Button href="/about" variant="outline" size="lg">
              {tCommon('learnMore')}
            </Button>
          </Actions>
        </div>
        <Visual>
          <Image
            src="/images/hero-home.png"
            alt="Children learning together at a bright communal table"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <StatsBadge>
            <AnimatedCounter value={820} suffix="+" />
            <span>{t('statsLabel')}</span>
          </StatsBadge>
        </Visual>
      </HeroGrid>
    </HeroSection>
  )
}
