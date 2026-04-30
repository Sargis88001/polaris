import theme from '@/helpers'
import styled, { css } from 'styled-components'

export const StyledCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--sp4x);
  background: var(--surfaceAlt);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--sp8x);
  transition: transform var(--trTime) var(--easeOut),
              box-shadow var(--trTime) var(--easeOut);

  ${({ $hoverable }) =>
    $hoverable &&
    css`
      &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);
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
  color: var(--primaryColor);
  font-weight: 600;
`

export const CardTitle = styled.h3`
  font-size: var(--h4);
  margin-bottom: var(--sp2x);
`

export const CardText = styled.p`
  color: var(--textMuted);
  margin-bottom: 0;
`

export const CardImageWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--border);

  img { width: 100%; height: 100%; object-fit: cover; }
`
