import theme from '@/helpers'
import styled from 'styled-components'

export const HeroSection = styled.section`
  padding: var(--sp16x) 0 var(--sectionDistance);
`

export const HeroGrid = styled.div`
  max-width: var(--maxContent);
  margin: 0 auto;
  padding: 0 var(--containerPadding);
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: var(--sp16x);
  align-items: center;

  ${theme.mediaQuery.tabletSize} {
    grid-template-columns: 1fr;
    gap: var(--sp10x);
  }
`

export const Kicker = styled.span`
  display: inline-flex;
  padding: 8px 16px;
  border-radius: var(--radius-pill);
  background: rgba(31, 42, 85, 0.08);
  color: var(--primaryColor);
  font-family: 'Cabinet Grotesk', sans-serif;
  font-size: var(--p4);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: var(--sp6x);

  [data-theme='dark'] & {
    background: rgba(255, 255, 255, 0.08);
    color: var(--textColor);
  }
`

export const Title = styled.h1.attrs({ className: 'hero-title' })`
  display: block;
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 5vw, 5rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.025em;
  margin-bottom: var(--sp6x);

  em {
    font-family: var(--font-display);
    font-style: italic;
    color: var(--color-primary);
  }
`

export const Lede = styled.p`
  font-size: var(--p1);
  line-height: 1.55;
  color: var(--textMuted);
  max-width: 52ch;
  margin-bottom: var(--sp8x);
`

export const Actions = styled.div`
  display: flex;
  gap: var(--sp3x);
  flex-wrap: wrap;
`

export const Visual = styled.div`
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--surfaceAlt);
  box-shadow: var(--shadow-lg);

  img { width: 100%; height: 100%; object-fit: cover; }

  ${theme.mediaQuery.tabletSize} {
    aspect-ratio: 16 / 11;
  }
`

export const StatsBadge = styled.div`
  position: absolute;
  bottom: var(--sp6x);
  left: var(--sp6x);
  background: var(--surface);
  border-radius: var(--radius-md);
  padding: var(--sp4x) var(--sp5x);
  display: flex;
  align-items: center;
  gap: var(--sp4x);
  box-shadow: var(--shadow-md);

  span:last-child {
    font-size: var(--p4);
    color: var(--textMuted);
    max-width: 18ch;
    line-height: 1.3;
  }
`
