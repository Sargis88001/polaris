import theme from '@/helpers'
import styled, { css } from 'styled-components'

export const StyledCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--sp4x);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--sp8x);
  box-shadow: var(--shadow-sm);
  transition: transform var(--trTime) var(--easeOut),
              box-shadow var(--trTime) var(--easeOut),
              border-color var(--trTime) var(--easeOut);

  ${({ $hoverable }) =>
    $hoverable &&
    css`
      &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);
        border-color: var(--color-border-strong);
      }
    `}

  ${theme.mediaQuery.tabletSizeM} {
    padding: var(--sp6x);
  }
`

export const CardKicker = styled.span`
  font-size: var(--p5);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-primary);
  font-weight: 600;
`

export const CardTitle = styled.h3`
  font-size: var(--h4);
  margin-bottom: var(--sp2x);
`

export const CardText = styled.p`
  color: var(--color-text-muted);
  margin-bottom: 0;
`

export const CardImageWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--color-surface-offset);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
