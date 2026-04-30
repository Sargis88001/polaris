import React from 'react'
import Image from 'next/image'
import { Section, Inner, Kicker, Title, Lede, Visual } from './style.js'

export default function PageHero({ kicker, title, lede, image, imageAlt }) {
  return (
    <Section>
      <Inner>
        <div>
          {kicker && <Kicker>{kicker}</Kicker>}
          <Title>{title}</Title>
          {lede && <Lede>{lede}</Lede>}
        </div>
        {image && (
          <Visual>
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </Visual>
        )}
      </Inner>
    </Section>
  )
}
