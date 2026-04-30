import React from 'react'

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'BrightPath Academy',
    template: '%s | BrightPath Academy',
  },
  description:
    "A modern children's educational and activity center in Yerevan, ages 3 to 16. Gymnastics, English, theatre, robotics, and creative development.",
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    type: 'website',
    siteName: 'BrightPath Academy',
    images: ['/images/hero-home.png'],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export const viewport = {
  themeColor: '#1f2a55',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return children
}
