'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import gsap from 'gsap'
import {
  AccordionWrap,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionInner,
} from './style.js'

function PlusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

function Item({ id, q, a, isOpen, onToggle, onKeyNav }) {
  const panelRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    if (!panelRef.current || !innerRef.current) return

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const tween = gsap.to(panelRef.current, {
      height: isOpen ? innerRef.current.offsetHeight : 0,
      duration: reduce ? 0.001 : 0.4,
      ease: 'power2.out',
      overwrite: true,
    })

    return () => {
      tween.kill()
    }
  }, [isOpen])

  return (
    <AccordionItem>
      <AccordionButton
        type="button"
        aria-expanded={isOpen}
        aria-controls={`acc-panel-${id}`}
        id={`acc-btn-${id}`}
        onClick={() => onToggle(id)}
        onKeyDown={(e) => onKeyNav(e, id)}
      >
        <span>{q}</span>
        <PlusIcon />
      </AccordionButton>
      <AccordionPanel
        ref={panelRef}
        role="region"
        aria-labelledby={`acc-btn-${id}`}
        id={`acc-panel-${id}`}
      >
        <AccordionInner ref={innerRef}>{a}</AccordionInner>
      </AccordionPanel>
    </AccordionItem>
  )
}

export default function Accordion({ items, multi = false, defaultOpen = null }) {
  const [openIds, setOpenIds] = useState(() => {
    if (defaultOpen == null) return new Set()
    return new Set([defaultOpen])
  })

  const toggle = useCallback(
    (id) => {
      setOpenIds((prev) => {
        const next = new Set(multi ? prev : [])
        if (prev.has(id)) {
          next.delete(id)
        } else {
          next.add(id)
        }
        return next
      })
    },
    [multi]
  )

  const handleKeyNav = useCallback((e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle(id)
      return
    }
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
    e.preventDefault()
    const idx = items.findIndex((it) => it.id === id)
    const nextIdx =
      e.key === 'ArrowDown'
        ? (idx + 1) % items.length
        : (idx - 1 + items.length) % items.length
    const next = document.getElementById(`acc-btn-${items[nextIdx].id}`)
    next?.focus()
  }, [items, toggle])

  return (
    <AccordionWrap>
      {items.map((it) => (
        <Item
          key={it.id}
          id={it.id}
          q={it.q}
          a={it.a}
          isOpen={openIds.has(it.id)}
          onToggle={toggle}
          onKeyNav={handleKeyNav}
        />
      ))}
    </AccordionWrap>
  )
}
