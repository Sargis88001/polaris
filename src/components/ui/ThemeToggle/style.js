import styled from 'styled-components'

export const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-pill);
  background: var(--surfaceAlt);
  color: var(--textColor);
  border: 1px solid var(--border);
  transition: background var(--trTimeFast) var(--easeOut),
              border-color var(--trTimeFast) var(--easeOut),
              color var(--trTimeFast) var(--easeOut);

  &:hover {
    border-color: var(--primaryColor);
    color: var(--primaryColor);
  }

  &:focus-visible {
    outline: 2px solid var(--primaryColor);
    outline-offset: 3px;
  }

  svg { width: 20px; height: 20px; }
`
