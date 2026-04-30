import theme from '@/helpers'
import styled from 'styled-components'

export const CarouselWrap = styled.div`
  position: relative;
  width: 100%;
`

export const Track = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-lg);
`

export const Slides = styled.div`
  display: flex;
  width: 100%;
  will-change: transform;
`

export const Slide = styled.div`
  flex: 0 0 100%;
  background: var(--surfaceAlt);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--sp10x);

  blockquote {
    font-family: 'Cabinet Grotesk', 'Satoshi', sans-serif;
    font-size: var(--h4);
    line-height: 1.35;
    margin: 0 0 var(--sp6x);
    color: var(--textColor);
  }

  cite {
    font-style: normal;
    font-size: var(--p4);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--textMuted);
  }

  ${theme.mediaQuery.tabletSizeM} {
    padding: var(--sp6x);
    blockquote { font-size: var(--p1); }
  }
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: var(--sp5x);
  gap: var(--sp4x);
`

export const Dots = styled.div`
  display: flex;
  gap: var(--sp2x);
  align-items: center;
`

export const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? 'var(--primaryColor)' : 'var(--border)')};
  transition: background var(--trTimeFast) var(--easeOut);

  &:focus-visible {
    outline: 2px solid var(--primaryColor);
    outline-offset: 3px;
  }
`

export const NavButtons = styled.div`
  display: flex;
  gap: var(--sp2x);
`

export const NavButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: var(--radius-pill);
  background: var(--surfaceAlt);
  border: 1px solid var(--border);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--textColor);
  transition: background var(--trTimeFast) var(--easeOut),
              border-color var(--trTimeFast) var(--easeOut);

  &:hover { border-color: var(--primaryColor); color: var(--primaryColor); }
  &:focus-visible { outline: 2px solid var(--primaryColor); outline-offset: 3px; }
`
