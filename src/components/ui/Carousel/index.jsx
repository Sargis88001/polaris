'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import gsap from 'gsap'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  CarouselWrap,
  Track,
  Slides,
  Slide,
  Controls,
  Dots,
  Dot,
  NavButtons,
  NavButton,
} from './style.js'

const SWIPE_THRESHOLD = 50
const AUTOPLAY_MS = 5500

export default function Carousel({ items, autoPlay = true, ariaLabel = 'Carousel' }) {
  const slidesRef = useRef(null)
  const wrapRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const touchStart = useRef(0)

  const goTo = useCallback(
    (next) => {
      const total = items.length
      const clamped = ((next % total) + total) % total
      setIndex(clamped)
    },
    [items.length]
  )

  useEffect(() => {
    if (!slidesRef.current) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    gsap.to(slidesRef.current, {
      xPercent: -100 * index,
      duration: reduce ? 0.001 : 0.55,
      ease: 'power3.out',
      overwrite: true,
    })
  }, [index])

  useEffect(() => {
    if (!autoPlay || hovered) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [autoPlay, hovered, items.length])

  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - touchStart.current
    if (Math.abs(delta) < SWIPE_THRESHOLD) return
    if (delta < 0) goTo(index + 1)
    else goTo(index - 1)
  }

  return (
    <CarouselWrap
      ref={wrapRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <Track onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <Slides ref={slidesRef}>
          {items.map((item, i) => (
            <Slide key={i} aria-hidden={i !== index}>
              <blockquote>{item.quote}</blockquote>
              <cite>{item.author}</cite>
            </Slide>
          ))}
        </Slides>
      </Track>
      <Controls>
        <Dots role="tablist">
          {items.map((_, i) => (
            <Dot
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              $active={i === index}
              onClick={() => goTo(i)}
            />
          ))}
        </Dots>
        <NavButtons>
          <NavButton
            type="button"
            aria-label="Previous slide"
            onClick={() => goTo(index - 1)}
          >
            <ChevronLeft size={20} />
          </NavButton>
          <NavButton
            type="button"
            aria-label="Next slide"
            onClick={() => goTo(index + 1)}
          >
            <ChevronRight size={20} />
          </NavButton>
        </NavButtons>
      </Controls>
    </CarouselWrap>
  )
}
