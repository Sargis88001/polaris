'use client'

import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Menu } from 'lucide-react'
import { Link, usePathname } from '@/i18n/navigation'
import Button from '@/components/ui/Button'
import ThemeToggle from '@/components/ui/ThemeToggle'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import MobileNav from '@/components/layout/MobileNav'
import {
  HeaderRoot,
  Inner,
  LogoLink,
  Nav,
  NavList,
  NavLink,
  Actions,
  HamburgerButton,
  DesktopOnly,
} from './style.js'

const navLinks = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/gymnastics', key: 'gymnastics' },
  { href: '/development', key: 'development' },
  { href: '/english', key: 'english' },
  { href: '/theatre', key: 'theatre' },
  { href: '/school-prep', key: 'schoolPrep' },
  { href: '/robotics', key: 'robotics' },
  { href: '/blog', key: 'blog' },
  { href: '/faq', key: 'faq' },
  { href: '/contact', key: 'contact' },
]

const condensedDesktop = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/blog', key: 'blog' },
  { href: '/faq', key: 'faq' },
  { href: '/contact', key: 'contact' },
]

function BrightPathMark() {
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

export default function Header() {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <HeaderRoot className={scrolled ? 'scrolled' : ''}>
        <Inner>
          <LogoLink>
            <Link href="/">
              <BrightPathMark />
              BrightPath
            </Link>
          </LogoLink>

          <Nav aria-label="Primary">
            <NavList>
              {condensedDesktop.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} aria-current={isActive(l.href) ? 'page' : undefined}>
                    <NavLink $active={isActive(l.href)}>{t(l.key)}</NavLink>
                  </Link>
                </li>
              ))}
            </NavList>
          </Nav>

          <Actions>
            <DesktopOnly>
              <LanguageSwitcher />
              <ThemeToggle />
              <Button href="/contact" $size="sm">
                {t('enroll')}
              </Button>
            </DesktopOnly>
            <HamburgerButton
              type="button"
              aria-label={t('openMenu')}
              onClick={() => setDrawerOpen(true)}
            >
              <Menu size={20} />
            </HamburgerButton>
          </Actions>
        </Inner>
      </HeaderRoot>

      <MobileNav
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        links={navLinks}
        isActive={isActive}
      />
    </>
  )
}
