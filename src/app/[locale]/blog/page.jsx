import React from 'react'
import Image from 'next/image'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { blogPosts } from '@/data/blogPosts'
import { buildMetadata } from '@/lib/pageMetadata'
import {
  HeroSection,
  HeroInner,
  HeroKicker,
  HeroTitle,
  HeroLede,
  ListSection,
  ListInner,
  Grid,
  PostCard,
  Cover,
  Body,
  Meta,
} from './style.js'

export async function generateMetadata({ params }) {
  return buildMetadata({ params, key: 'blog' })
}

const formatDate = (iso, locale) =>
  new Date(iso).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })

export default async function BlogIndexPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('blog')
  const tCommon = await getTranslations('common')

  const sorted = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <>
      <HeroSection>
        <HeroInner>
          <HeroKicker>{tCommon('fromTheJournal')}</HeroKicker>
          <HeroTitle>{t('title')}</HeroTitle>
          <HeroLede>{t('lede')}</HeroLede>
        </HeroInner>
      </HeroSection>

      <ListSection>
        <ListInner>
          <Grid>
            {sorted.map((post) => (
              <PostCard key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <Cover>
                    <Image
                      src={post.cover}
                      alt={post.coverAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </Cover>
                  <Body>
                    <Meta>
                      <span>{post.categoryLabel}</span>
                      <span>·</span>
                      <span>{formatDate(post.date, locale)}</span>
                    </Meta>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                  </Body>
                </Link>
              </PostCard>
            ))}
          </Grid>
        </ListInner>
      </ListSection>
    </>
  )
}
