import React from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { FooterRoot, Inner, Top, Brand, Col, Bottom, ContactLine } from './style.js'

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
      <rect x="2" y="2" width="32" height="32" rx="8" fill="#1f2a55" />
      <path
        d="M12 10h7.5a4.5 4.5 0 010 9H12V10zm0 9h8a4.5 4.5 0 010 9h-8v-9z"
        stroke="#f7f2e7"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="26" cy="9" r="2" fill="#e0834c" />
    </svg>
  )
}

export default function Footer() {
  const t = useTranslations()
  const year = new Date().getFullYear()

  return (
    <FooterRoot>
      <Inner>
        <Top>
          <Brand>
            <FooterMark />
            <strong>BrightPath Academy</strong>
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
            © {year} BrightPath Academy · {t('footer.rights')}
          </span>
          <span>{t('common.yerevan')}</span>
        </Bottom>
      </Inner>
    </FooterRoot>
  )
}
