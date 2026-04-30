import styled from 'styled-components'

export const Switcher = styled.div`
  display: inline-flex;
  align-items: center;
  background: var(--surfaceAlt);
  border: 1px solid var(--border);
  border-radius: var(--radius-pill);
  padding: 4px;
`

export const LangButton = styled.button`
  padding: 6px 12px;
  border-radius: var(--radius-pill);
  font-family: 'Cabinet Grotesk', 'Satoshi', sans-serif;
  font-size: var(--p4);
  font-weight: 600;
  letter-spacing: 0.04em;
  min-width: 38px;
  min-height: 32px;
  color: ${({ $active }) => ($active ? 'var(--white)' : 'var(--textMuted)')};
  background: ${({ $active }) => ($active ? 'var(--primaryColor)' : 'transparent')};
  transition: background var(--trTimeFast) var(--easeOut),
              color var(--trTimeFast) var(--easeOut);

  &:hover {
    color: ${({ $active }) => ($active ? 'var(--white)' : 'var(--textColor)')};
  }

  &:focus-visible {
    outline: 2px solid var(--primaryColor);
    outline-offset: 3px;
  }
`
