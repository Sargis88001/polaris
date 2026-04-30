import theme from '@/helpers'
import styled from 'styled-components'

export const Band = styled.section`
  background: var(--primaryColor);
  color: var(--white);
  padding: var(--sp16x) 0;
  margin: var(--sectionDistance) 0;
`

export const Inner = styled.div`
  max-width: var(--maxContent);
  margin: 0 auto;
  padding: 0 var(--containerPadding);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--sp10x);

  ${theme.mediaQuery.tabletSize} {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--sp6x);
  }
`

export const Copy = styled.div`
  max-width: 60ch;

  h2 {
    font-size: var(--h2);
    color: var(--white);
    margin: 0 0 var(--sp3x);
    line-height: 1.05;
  }
  p {
    color: rgba(255, 255, 255, 0.78);
    font-size: var(--p1);
    margin: 0;
    line-height: 1.55;
  }
`
