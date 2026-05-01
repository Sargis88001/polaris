import React from 'react'
import { CounterWrap, CounterValue, CounterSuffix } from './style.js'

export default function AnimatedCounter({ value = 0, suffix = '' }) {
  return (
    <CounterWrap>
      <CounterValue>{Number(value).toLocaleString()}</CounterValue>
      {suffix && <CounterSuffix>{suffix}</CounterSuffix>}
    </CounterWrap>
  )
}
