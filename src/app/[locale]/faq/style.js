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
  max-width: 18ch;
`

export const HeroLede = styled.p`
  font-size: var(--p1);
  color: var(--textMuted);
  max-width: 60ch;
  margin: 0;
`

export const SearchSection = styled.section`
  padding: var(--sp6x) 0 var(--sectionDistance);
`

export const SearchInner = styled.div`
  max-width: var(--maxContent);
  margin: 0 auto;
  padding: 0 var(--containerPadding);
`

export const SearchField = styled.div`
  position: relative;
  margin-bottom: var(--sp10x);
  max-width: 560px;

  svg {
    position: absolute;
    left: var(--sp4x);
    top: 50%;
    transform: translateY(-50%);
    color: var(--textMuted);
    pointer-events: none;
  }

  input {
    width: 100%;
    padding: var(--sp4x) var(--sp4x) var(--sp4x) calc(var(--sp4x) + 28px);
    border-radius: var(--radius-pill);
    background: var(--surfaceAlt);
    border: 1px solid var(--border);
    font-size: var(--p3);
    color: var(--textColor);
    transition: border-color var(--trTimeFast) var(--easeOut);

    &:focus {
      outline: none;
      border-color: var(--primaryColor);
    }
  }
`

export const Group = styled.section`
  margin-bottom: var(--sp10x);

  h2 {
    font-size: var(--h4);
    margin-bottom: var(--sp5x);
    color: var(--primaryColor);
  }
`

export const Empty = styled.div`
  padding: var(--sp10x);
  border: 1px dashed var(--border);
  border-radius: var(--radius-lg);
  background: var(--surfaceAlt);
  text-align: center;
  color: var(--textMuted);
`
