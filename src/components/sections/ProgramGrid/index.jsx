import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { programs, programKeys } from '@/data/programs'
import { Section, Inner, Header, Grid, ProgramCard, CardImage, CardBody } from './style.js'

export default function ProgramGrid() {
  const t = useTranslations('programs.list')
  const tHome = useTranslations('home')

  return (
    <Section>
      <Inner>
        <Header>
          <h2>{tHome('programsTitle')}</h2>
          <p>{tHome('programsLede')}</p>
        </Header>
        <Grid>
          {programs.map((p) => {
            const key = programKeys[p.slug]
            return (
              <ProgramCard key={p.slug}>
                <Link href={`/${p.slug}`}>
                  <CardImage>
                    <Image
                      src={p.image}
                      alt={t(`${key}.title`)}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </CardImage>
                  <CardBody>
                    <h3>{t(`${key}.title`)}</h3>
                    <p>{t(`${key}.summary`)}</p>
                    <span>{t(`${key}.ageRange`)}</span>
                  </CardBody>
                </Link>
              </ProgramCard>
            )
          })}
        </Grid>
      </Inner>
    </Section>
  )
}
