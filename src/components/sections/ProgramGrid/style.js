import theme from '@/helpers'
import styled from 'styled-components'

export const Section = styled.section`
  padding: var(--sectionDistance) 0;
`

export const Inner = styled.div`
  max-width: var(--maxContent);
  margin: 0 auto;
  padding: 0 var(--containerPadding);
`

export const Header = styled.div`
  max-width: 56ch;
  margin-bottom: var(--sp10x);

  h2 {
    font-size: var(--h2);
    line-height: 1.05;
    margin-bottom: var(--sp4x);
  }
  p {
    color: var(--textMuted);
    font-size: var(--p1);
    margin: 0;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp6x);

  ${theme.mediaQuery.tabletSize} {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--sp5x);
  }
  ${theme.mediaQuery.tabletSizeM} {
    grid-template-columns: 1fr;
    gap: var(--sp4x);
  }
`

export const ProgramCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--surfaceAlt);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: transform var(--trTime) var(--easeOut),
              box-shadow var(--trTime) var(--easeOut);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }

  a { display: block; height: 100%; }
`

export const CardImage = styled.div`
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--border);

  img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s var(--easeOut); }

  ${ProgramCard}:hover & img { transform: scale(1.04); }
`

export const CardBody = styled.div`
  padding: var(--sp6x);

  h3 {
    font-size: var(--h4);
    margin-bottom: var(--sp2x);
  }
  p {
    color: var(--textMuted);
    margin: 0 0 var(--sp4x);
    line-height: 1.55;
  }

  span {
    font-size: var(--p4);
    color: var(--primaryColor);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
`
