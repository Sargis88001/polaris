import theme from '@/helpers'
import styled, { css } from 'styled-components'

export const Section = styled.section`
  padding: var(--sectionDistance) 0;

  & + & { padding-top: 0; }
`

export const Inner = styled.div`
  max-width: var(--maxContent);
  margin: 0 auto;
  padding: 0 var(--containerPadding);

  > h2 {
    font-size: var(--h2);
    margin-bottom: var(--sp10x);
  }
`

export const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp6x);

  ${theme.mediaQuery.tabletSizeM} {
    grid-template-columns: 1fr;
  }
`

export const StatementCard = styled.article`
  padding: var(--sp10x);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  background: var(--surfaceAlt);

  ${({ $tone }) =>
    $tone === 'dark' &&
    css`
      background: var(--primaryColor);
      color: var(--white);
      border-color: transparent;
      h3 { color: var(--white); }
      p { color: rgba(255, 255, 255, 0.85); }
    `}

  h3 {
    font-size: var(--p4);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--primaryColor);
    margin-bottom: var(--sp4x);
  }

  p {
    font-family: 'Cabinet Grotesk', sans-serif;
    font-size: var(--h4);
    line-height: 1.3;
    margin: 0;
    letter-spacing: -0.015em;
  }
`

export const Timeline = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--sp6x);
`

export const TimelineItem = styled.li`
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: var(--sp6x);
  padding: var(--sp6x) 0;
  border-bottom: 1px solid var(--border);

  &:last-child { border-bottom: 0; }

  span {
    font-family: 'Cabinet Grotesk', sans-serif;
    font-size: var(--h4);
    color: var(--primaryColor);
    font-weight: 700;
  }

  h3 { font-size: var(--h5); margin-bottom: var(--sp2x); }
  p { color: var(--textMuted); margin: 0; line-height: 1.55; }

  ${theme.mediaQuery.tabletSizeM} {
    grid-template-columns: 1fr;
    gap: var(--sp2x);
  }
`

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--sp5x);

  ${theme.mediaQuery.tabletSizeM} {
    grid-template-columns: 1fr;
  }
`

export const TeamCard = styled.article`
  background: var(--surfaceAlt);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--sp8x);

  h3 { font-size: var(--h5); margin-bottom: var(--sp1x); }
  span {
    display: block;
    margin-bottom: var(--sp4x);
    font-size: var(--p4);
    color: var(--primaryColor);
    font-weight: 600;
  }
  p { color: var(--textMuted); margin: 0; line-height: 1.55; }
`
