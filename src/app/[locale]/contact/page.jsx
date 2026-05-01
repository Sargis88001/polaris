import React from 'react'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import ContactForm from '@/components/ui/ContactForm'
import { buildMetadata } from '@/lib/pageMetadata'
import {
  HeroSection,
  HeroInner,
  HeroTitle,
  HeroLede,
  Section,
  Inner,
  Layout,
  InfoStack,
  InfoCard,
  InfoIcon,
} from './style.js'

export async function generateMetadata({ params }) {
  return buildMetadata({ params, key: 'contact' })
}

export default async function ContactPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('contact')
  const tInfo = await getTranslations('contact.info')

  return (
    <>
      <HeroSection>
        <HeroInner>
          <span>{t('title') ? '' : ''}</span>
          <HeroTitle>{t('title')}</HeroTitle>
          <HeroLede>{t('lede')}</HeroLede>
        </HeroInner>
      </HeroSection>

      <Section>
        <Inner>
          <Layout>
            <ContactForm />
            <InfoStack>
              <InfoCard>
                <InfoIcon><Phone size={18} /></InfoIcon>
                <div>
                  <h4>{tInfo('phoneTitle')}</h4>
                  <a href="tel:+37410000000">+374 10 000 000</a>
                </div>
              </InfoCard>
              <InfoCard>
                <InfoIcon><Mail size={18} /></InfoIcon>
                <div>
                  <h4>{tInfo('emailTitle')}</h4>
                  <a href="mailto:hello@polaris.am">hello@polaris.am</a>
                </div>
              </InfoCard>
              <InfoCard>
                <InfoIcon><Clock size={18} /></InfoIcon>
                <div>
                  <h4>{tInfo('hoursTitle')}</h4>
                  <p>{tInfo('hoursWeek')}<br />{tInfo('hoursWeekend')}</p>
                </div>
              </InfoCard>
              <InfoCard>
                <InfoIcon><MapPin size={18} /></InfoIcon>
                <div>
                  <h4>{tInfo('addressTitle')}</h4>
                  <p>{tInfo('address')}</p>
                </div>
              </InfoCard>
            </InfoStack>
          </Layout>
        </Inner>
      </Section>
    </>
  )
}
