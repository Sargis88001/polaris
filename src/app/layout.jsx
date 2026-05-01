import React from 'react'
import './globals.css'

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Polaris Center',
    template: '%s | Polaris Center',
  },
  description:
    "A modern children's educational and activity center in Yerevan, ages 3 to 16. Gymnastics, English, theatre, robotics, and creative development.",
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    type: 'website',
    siteName: 'Polaris Center',
    images: ['/images/hero-home.png'],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export const viewport = {
  themeColor: '#342d8b',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return children
}
