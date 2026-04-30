'use client'

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CounterWrap, CounterValue, CounterSuffix } from './style.js'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AnimatedCounter({ value = 0, suffix = '', duration = 1.5 }) {
  const valueRef = useRef(null)
  const containerRef = useRef(null)

  useGSAP(
    () => {
      if (!valueRef.current) return

      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduce) {
        valueRef.current.textContent = String(value)
        return
      }

      const obj = { v: 0 }
      const tween = gsap.to(obj, {
        v: value,
        duration,
        ease: 'power2.out',
        onUpdate: () => {
          if (valueRef.current) {
            valueRef.current.textContent = Math.round(obj.v).toLocaleString()
          }
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          once: true,
        },
      })

      return () => tween.kill()
    },
    { scope: containerRef, dependencies: [value, duration] }
  )

  return (
    <CounterWrap ref={containerRef}>
      <CounterValue ref={valueRef}>0</CounterValue>
      {suffix && <CounterSuffix>{suffix}</CounterSuffix>}
    </CounterWrap>
  )
}
