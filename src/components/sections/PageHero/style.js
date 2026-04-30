import theme from '@/helpers'
import styled from 'styled-components'

export const Section = styled.section`
  padding: var(--sp16x) 0 var(--sp10x);
`

export const Inner = styled.div`
  max-width: var(--maxContent);
  margin: 0 auto;
  padding: 0 var(--containerPadding);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp16x);
  align-items: center;

  ${theme.mediaQuery.tabletSize} {
    grid-template-columns: 1fr;
    gap: var(--sp10x);
  }
`

export const Kicker = styled.span`
  display: inline-block;
  font-size: var(--p4);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--primaryColor);
  font-weight: 600;
  margin-bottom: var(--sp4x);
`

export const Title = styled.h1`
  font-size: var(--h1);
  line-height: 1.04;
  margin-bottom: var(--sp5x);
  letter-spacing: -0.025em;
`

export const Lede = styled.p`
  font-size: var(--p1);
  color: var(--textMuted);
  line-height: 1.55;
  max-width: 56ch;
  margin: 0;
`

export const Visual = styled.div`
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--surfaceAlt);

  img { width: 100%; height: 100%; object-fit: cover; }

  ${theme.mediaQuery.tabletSize} {
    aspect-ratio: 16 / 11;
  }
`
