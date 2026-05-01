const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin('./src/i18n/request.js')

const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

const longCacheHeader = {
  key: 'Cache-Control',
  value: 'public, max-age=31536000, immutable',
}

const noCacheHeader = {
  key: 'Cache-Control',
  value: 'public, max-age=0, must-revalidate',
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  compress: true,
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  env: {
    APP_LANG_KEY: 'lang',
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        source: '/_next/static/:path*',
        headers: [longCacheHeader],
      },
      {
        source: '/images/:path*',
        headers: [longCacheHeader],
      },
      {
        source: '/fonts/:path*',
        headers: [longCacheHeader],
      },
      {
        source: '/((?!_next/data|_next/static|api|images|fonts).*)',
        headers: [noCacheHeader],
      },
    ]
  },
}

module.exports = withNextIntl(nextConfig)
