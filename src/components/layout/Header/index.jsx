'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Menu, ChevronDown } from 'lucide-react'
import { Link, usePathname } from '@/i18n/navigation'
import Button from '@/components/ui/Button'
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
  DropdownWrapper,
  DropdownTrigger,
  DropdownPanel,
  DropdownItem,
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

const programLinks = [
  { href: '/gymnastics', key: 'gymnastics' },
  { href: '/development', key: 'development' },
  { href: '/english', key: 'english' },
  { href: '/theatre', key: 'theatre' },
  { href: '/school-prep', key: 'schoolPrep' },
  { href: '/robotics', key: 'robotics' },
]

const condensedDesktop = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { type: 'dropdown', key: 'programs' },
  { href: '/blog', key: 'blog' },
  { href: '/faq', key: 'faq' },
  { href: '/contact', key: 'contact' },
]

function PolarisMark() {
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

function ProgramsDropdown({ programLinks, programLabels, isActive, isAnyActive }) {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)
  const closeTimerRef = useRef(null)

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }

  const scheduleClose = () => {
    clearCloseTimer()
    closeTimerRef.current = setTimeout(() => setOpen(false), 150)
  }

  const openNow = () => {
    clearCloseTimer()
    setOpen(true)
  }

  useEffect(() => {
    if (!open) return
    const onClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => () => clearCloseTimer(), [])

  return (
    <DropdownWrapper
      ref={wrapperRef}
      onMouseEnter={openNow}
      onMouseLeave={scheduleClose}
      onFocus={openNow}
      onBlur={(e) => {
        if (!wrapperRef.current?.contains(e.relatedTarget)) {
          scheduleClose()
        }
      }}
    >
      <DropdownTrigger
        type="button"
        $active={isAnyActive}
        data-open={open ? 'true' : 'false'}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {programLabels.programs}
        <ChevronDown size={16} aria-hidden="true" />
      </DropdownTrigger>
      {open && (
        <DropdownPanel role="menu">
          {programLinks.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              passHref
              legacyBehavior
            >
              <DropdownItem
                role="menuitem"
                $active={isActive(p.href)}
                onClick={() => setOpen(false)}
              >
                {programLabels[p.key]}
              </DropdownItem>
            </Link>
          ))}
        </DropdownPanel>
      )}
    </DropdownWrapper>
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

  const isProgramActive = programLinks.some((p) => isActive(p.href))

  const programLabels = {
    programs: t('programs'),
    gymnastics: t('gymnastics'),
    development: t('development'),
    english: t('english'),
    theatre: t('theatre'),
    schoolPrep: t('schoolPrep'),
    robotics: t('robotics'),
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
              {condensedDesktop.map((l) => {
                if (l.type === 'dropdown') {
                  return (
                    <ProgramsDropdown
                      key="programs-dropdown"
                      programLinks={programLinks}
                      programLabels={programLabels}
                      isActive={isActive}
                      isAnyActive={isProgramActive}
                    />
                  )
                }
                return (
                  <li key={l.href}>
                    <Link href={l.href} aria-current={isActive(l.href) ? 'page' : undefined}>
                      <NavLink $active={isActive(l.href)}>{t(l.key)}</NavLink>
                    </Link>
                  </li>
                )
              })}
            </NavList>
          </Nav>

          <Actions>
            <DesktopOnly>
              <LanguageSwitcher />
              <Button href="/contact" $size="sm">
                {t('enroll')}
              </Button>
            </DesktopOnly>
            <HamburgerButton
              type="button"
              aria-label={t('openMenu')}
              onClick={() => setDrawerOpen(true)}
            >
              <Menu size={22} />
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
