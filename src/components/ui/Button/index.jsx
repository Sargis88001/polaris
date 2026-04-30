'use client'

import React from 'react'
import { Link } from '@/i18n/navigation'
import { StyledButton } from './style.js'

export default function Button({
  as,
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  ...rest
}) {
  if (href) {
    return (
      <StyledButton
        as={Link}
        href={href}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        {...rest}
      >
        {children}
      </StyledButton>
    )
  }

  return (
    <StyledButton
      as={as}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}
