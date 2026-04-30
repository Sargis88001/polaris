import theme from '@/helpers'
import styled from 'styled-components'

export const FooterRoot = styled.footer`
  background: var(--surfaceAlt);
  border-top: 1px solid var(--border);
  padding: var(--sectionDistance) 0 var(--sp10x);
  margin-top: var(--sectionDistance);
`

export const Inner = styled.div`
  max-width: var(--maxContent);
  margin: 0 auto;
  padding: 0 var(--containerPadding);
`

export const Top = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: var(--sp10x);
  padding-bottom: var(--sp10x);
  border-bottom: 1px solid var(--border);

  ${theme.mediaQuery.tabletSize} {
    grid-template-columns: 1fr 1fr;
    gap: var(--sp8x);
  }
  ${theme.mediaQuery.tabletSizeS} {
    grid-template-columns: 1fr;
    gap: var(--sp6x);
  }
`

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--sp4x);

  svg { width: 44px; height: 44px; }

  p {
    color: var(--textMuted);
    margin: 0;
    max-width: 28ch;
    line-height: 1.55;
  }

  strong {
    font-family: 'Cabinet Grotesk', sans-serif;
    font-size: var(--h5);
    letter-spacing: -0.01em;
  }
`

export const ContactLine = styled.p`
  font-size: var(--p4);
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--sp3x);

  h4 {
    margin: 0 0 var(--sp2x);
    font-family: 'Cabinet Grotesk', sans-serif;
    font-size: var(--p4);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--textMuted);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--sp2x);
  }

  a {
    font-size: var(--p3);
    color: var(--textColor);

    &:hover { color: var(--primaryColor); }
  }
`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--sp6x);
  font-size: var(--p4);
  color: var(--textMuted);
  flex-wrap: wrap;
  gap: var(--sp4x);
`
