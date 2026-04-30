'use client'

import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme, { Variables, Typography, HelperClass } from '@/helpers'

export default function ThemeProviderClient({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Variables />
      <Typography />
      <HelperClass />
      {children}
    </ThemeProvider>
  )
}
