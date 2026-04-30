import React from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { ArrowLeft } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { blogPosts } from '@/data/blogPosts'
import { locales } from '@/i18n/config'
import {
  PostHero,
  PostInner,
  PostMeta,
  PostTitle,
  PostCover,
  PostBody,
  BackLink,
} from '../style.js'

export function generateStaticParams() {
  const params = []
  for (const locale of locales) {
    for (const post of blogPosts) {
      params.push({ locale, slug: post.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }) {
  const { slug, locale } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}

  const t = await getTranslations({ locale, namespace: 'site' })
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${t('name')}`,
      description: post.excerpt,
      type: 'article',
      images: [post.cover],
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

const formatDate = (iso, locale) =>
  new Date(iso).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })

export default async function BlogPostPage({ params }) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const t = await getTranslations('blog')

  return (
    <PostHero>
      <PostInner>
        <PostMeta>
          <span>{post.categoryLabel}</span>
          <span>·</span>
          <span>{formatDate(post.date, locale)}</span>
          <span>·</span>
          <span>{t('readingTime', { minutes: post.minutes })}</span>
        </PostMeta>
        <PostTitle>{post.title}</PostTitle>
        <PostCover>
          <Image
            src={post.cover}
            alt={post.coverAlt}
            fill
            sizes="(max-width: 768px) 100vw, 760px"
            priority
          />
        </PostCover>
        <PostBody>
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </PostBody>
        <BackLink>
          <Link href="/blog">
            <ArrowLeft size={16} /> {t('backToBlog')}
          </Link>
        </BackLink>
      </PostInner>
    </PostHero>
  )
}
