import theme from '@/helpers'
import styled from 'styled-components'

export const PillarsSection = styled.section`
  padding: var(--sectionDistance) 0;
  background: var(--surfaceAlt);
`

export const PillarsInner = styled.div`
  max-width: var(--maxContent);
  margin: 0 auto;
  padding: 0 var(--containerPadding);
`

export const PillarTitle = styled.h2`
  font-size: var(--h2);
  margin-bottom: var(--sp10x);
  max-width: 22ch;
`

export const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--sp6x);

  ${theme.mediaQuery.tabletSizeM} {
    grid-template-columns: 1fr;
    gap: var(--sp4x);
  }
`

export const Pillar = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--sp8x);

  h3 {
    font-size: var(--h4);
    margin-bottom: var(--sp3x);
  }
  p {
    color: var(--textMuted);
    margin: 0;
    line-height: 1.6;
  }
`
