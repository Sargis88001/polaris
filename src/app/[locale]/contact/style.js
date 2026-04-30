import theme from '@/helpers'
import styled from 'styled-components'

export const HeroSection = styled.section`
  padding: var(--sp16x) 0 var(--sp8x);
`

export const HeroInner = styled.div`
  max-width: var(--maxContent);
  margin: 0 auto;
  padding: 0 var(--containerPadding);
`

export const HeroTitle = styled.h1`
  font-size: var(--h1);
  line-height: 1.04;
  margin-bottom: var(--sp4x);
  letter-spacing: -0.025em;
`

export const HeroLede = styled.p`
  font-size: var(--p1);
  color: var(--textMuted);
  max-width: 60ch;
  margin: 0;
`

export const Section = styled.section`
  padding: var(--sp10x) 0 var(--sectionDistance);
`

export const Inner = styled.div`
  max-width: var(--maxContent);
  margin: 0 auto;
  padding: 0 var(--containerPadding);
`

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: var(--sp10x);
  align-items: start;

  ${theme.mediaQuery.tabletSize} {
    grid-template-columns: 1fr;
    gap: var(--sp6x);
  }
`

export const InfoStack = styled.aside`
  display: flex;
  flex-direction: column;
  gap: var(--sp4x);
`

export const InfoCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--sp4x);
  padding: var(--sp6x);
  background: var(--surfaceAlt);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);

  h4 {
    margin: 0 0 var(--sp1x);
    font-family: 'Cabinet Grotesk', sans-serif;
    font-size: var(--p4);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--textMuted);
  }

  p, a {
    margin: 0;
    font-size: var(--p3);
    color: var(--textColor);
    line-height: 1.5;
  }

  a:hover { color: var(--primaryColor); }
`

export const InfoIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--primaryColor);
  flex-shrink: 0;
`
