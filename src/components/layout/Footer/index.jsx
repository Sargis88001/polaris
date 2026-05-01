import React from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { FooterRoot, Inner, Top, Brand, Col, Bottom, ContactLine, BrandAccent } from './style.js'

const programLinks = [
  { href: '/gymnastics', key: 'gymnastics' },
  { href: '/development', key: 'development' },
  { href: '/english', key: 'english' },
  { href: '/theatre', key: 'theatre' },
  { href: '/school-prep', key: 'schoolPrep' },
  { href: '/robotics', key: 'robotics' },
]

const companyLinks = [
  { href: '/about', key: 'about' },
  { href: '/blog', key: 'blog' },
  { href: '/contact', key: 'contact' },
]

const resourceLinks = [
  { href: '/faq', key: 'faq' },
  { href: '/contact', key: 'enroll' },
]

function FooterMark() {
  return (
    <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="32" height="32" rx="8" fill="#342d8b" />
      <path
        d="M18 8 L20 16 L28 18 L20 20 L18 28 L16 20 L8 18 L16 16 Z"
        fill="#ffffff"
      />
      <circle cx="27" cy="9" r="1.8" fill="#ffffff" opacity="0.9" />
    </svg>
  )
}

export default function Footer() {
  const t = useTranslations()
  const year = new Date().getFullYear()

  return (
    <FooterRoot>
      <BrandAccent aria-hidden="true" />
      <Inner>
        <Top>
          <Brand>
            <FooterMark />
            <strong>Polaris Center</strong>
            <p>{t('footer.tagline')}</p>
            <ContactLine>
              {t('footer.address')}
              <br />
              {t('footer.phone')}
              <br />
              <a href={`mailto:${t('footer.email')}`}>{t('footer.email')}</a>
            </ContactLine>
          </Brand>

          <Col>
            <h4>{t('footer.programs')}</h4>
            <ul>
              {programLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{t(`nav.${l.key}`)}</Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col>
            <h4>{t('footer.company')}</h4>
            <ul>
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{t(`nav.${l.key}`)}</Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col>
            <h4>{t('footer.resources')}</h4>
            <ul>
              {resourceLinks.map((l) => (
                <li key={l.key}>
                  <Link href={l.href}>{t(`nav.${l.key}`)}</Link>
                </li>
              ))}
            </ul>
          </Col>
        </Top>

        <Bottom>
          <span>
            © {year} Polaris Center · {t('footer.rights')}
          </span>
          <span>{t('common.yerevan')}</span>
        </Bottom>
      </Inner>
    </FooterRoot>
  )
}
