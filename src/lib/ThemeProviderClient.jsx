'use client'

import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import theme, { Variables, Typography, HelperClass } from '@/helpers'

export default function ThemeProviderClient({ children }) {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light')
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Variables />
      <Typography />
      <HelperClass />
      {children}
    </ThemeProvider>
  )
}
