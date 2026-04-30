import styled from 'styled-components'

export const AccordionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--sp3x);
`

export const AccordionItem = styled.div`
  background: var(--surfaceAlt);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
`

export const AccordionButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--sp4x);
  padding: var(--sp5x) var(--sp6x);
  text-align: left;
  font-family: 'Cabinet Grotesk', 'Satoshi', sans-serif;
  font-size: var(--p2);
  font-weight: 600;
  color: var(--textColor);
  cursor: pointer;
  min-height: 44px;
  transition: background var(--trTimeFast) var(--easeOut);

  &:hover { background: var(--surface); }
  &:focus-visible {
    outline: 2px solid var(--primaryColor);
    outline-offset: -2px;
  }

  svg {
    flex-shrink: 0;
    transition: transform var(--trTime) var(--easeOut);
  }

  &[aria-expanded='true'] svg {
    transform: rotate(45deg);
  }
`

export const AccordionPanel = styled.div`
  height: 0;
  overflow: hidden;
`

export const AccordionInner = styled.div`
  padding: 0 var(--sp6x) var(--sp5x);
  color: var(--textMuted);
  line-height: 1.6;
`
