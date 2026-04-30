import React from 'react'
import { StyledCard, CardKicker, CardTitle, CardText, CardImageWrap } from './style.js'

export default function Card({ kicker, title, text, hoverable, children, ...rest }) {
  return (
    <StyledCard $hoverable={hoverable} {...rest}>
      {kicker && <CardKicker>{kicker}</CardKicker>}
      {title && <CardTitle>{title}</CardTitle>}
      {text && <CardText>{text}</CardText>}
      {children}
    </StyledCard>
  )
}

export { CardKicker, CardTitle, CardText, CardImageWrap }
