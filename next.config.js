const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin('./src/i18n/request.js')

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
}

module.exports = withNextIntl(nextConfig)