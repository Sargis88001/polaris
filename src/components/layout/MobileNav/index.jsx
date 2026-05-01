'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import gsap from 'gsap'
import { X } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import ThemeToggle from '@/components/ui/ThemeToggle'
import {
  Backdrop,
  Drawer,
  DrawerHeader,
  CloseButton,
  NavList,
  NavItem,
  Footer,
} from './style.js'

export default function MobileNav({ open, onClose, links, isActive }) {
  const t = useTranslations('nav')
  const backdropRef = useRef(null)
  const drawerRef = useRef(null)

  useEffect(() => {
    if (!backdropRef.current || !drawerRef.current) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dur = reduce ? 0.001 : 0.42

    if (open) {
      document.body.style.overflow = 'hidden'
      gsap.to(backdropRef.current, {
        autoAlpha: 1,
        pointerEvents: 'auto',
        duration: dur,
        ease: 'power2.out',
        overwrite: true,
      })
      gsap.to(drawerRef.current, {
        x: 0,
        duration: dur,
        ease: 'power3.out',
        overwrite: true,
      })
    } else {
      document.body.style.overflow = ''
      gsap.to(backdropRef.current, {
        autoAlpha: 0,
        pointerEvents: 'none',
        duration: dur,
        ease: 'power2.in',
        overwrite: true,
      })
      gsap.to(drawerRef.current, {
        x: '100%',
        duration: dur,
        ease: 'power3.in',
        overwrite: true,
      })
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <>
      <Backdrop
        ref={backdropRef}
        onClick={onClose}
        aria-hidden={!open}
      />
      <Drawer
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!open}
      >
        <DrawerHeader>
          <strong>Polaris</strong>
          <CloseButton type="button" onClick={onClose} aria-label={t('closeMenu')}>
            <X size={20} />
          </CloseButton>
        </DrawerHeader>
        <NavList>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={onClose}>
              <NavItem $active={isActive(l.href)}>{t(l.key)}</NavItem>
            </Link>
          ))}
        </NavList>
        <Footer>
          <LanguageSwitcher />
          <ThemeToggle />
        </Footer>
      </Drawer>
    </>
  )
}
