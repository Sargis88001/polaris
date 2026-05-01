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

function PolarisMark() {
  return (
    <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="32" height="32" rx="8" fill="#342d8b" />
      {/* Polaris star: 4-point star with small accent */}
      <path
        d="M18 8 L20 16 L28 18 L20 20 L18 28 L16 20 L8 18 L16 16 Z"
        fill="#ffffff"
      />
      <circle cx="27" cy="9" r="1.8" fill="#ffffff" opacity="0.9" />
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
            <Link href="/" aria-label="Polaris Center home">
              <PolarisMark />
              Polaris
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
