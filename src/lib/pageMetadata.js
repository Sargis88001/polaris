import { getTranslations } from 'next-intl/server'

export async function buildMetadata({ params, key }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  const tSite = await getTranslations({ locale, namespace: 'site' })

  const title = t(`${key}.title`)
  const description = t(`${key}.description`)
  const siteName = tSite('name')

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      type: 'website',
      locale,
      siteName,
      images: ['/images/hero-home.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteName}`,
      description,
    },
  }
}
