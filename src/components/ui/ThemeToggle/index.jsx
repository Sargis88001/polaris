'use client'

import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Sun, Moon } from 'lucide-react'
import { ToggleButton } from './style.js'

export default function ThemeToggle() {
  const t = useTranslations('theme')
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window === 'undefined') return
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = prefersDark ? 'dark' : 'light'
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  const handleToggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
  }

  const label = theme === 'dark' ? t('toggleLight') : t('toggleDark')

  return (
    <ToggleButton type="button" onClick={handleToggle} aria-label={label} title={label}>
      {mounted && theme === 'dark' ? <Sun /> : <Moon />}
    </ToggleButton>
  )
}
