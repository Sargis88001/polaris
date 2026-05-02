import React from 'react'
import Image from 'next/image'
import { Section, Container, Bg, Eyebrow, Title, Lede } from './style.js'

export default function PageHero({ kicker, title, lede, image, imageAlt }) {
  return (
    <Section className="page-hero page-hero--full">
      {image && (
        <Bg className="page-hero__bg">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            sizes="100vw"
            priority
          />
        </Bg>
      )}
      <Container className="container">
        {kicker && <Eyebrow className="section-eyebrow">{kicker}</Eyebrow>}
        <Title className="page-hero__title">{title}</Title>
        {lede && <Lede className="page-hero__lede">{lede}</Lede>}
      </Container>
    </Section>
  )
}
