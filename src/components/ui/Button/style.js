import styled, { css } from 'styled-components'

const variantStyles = {
  primary: css`
    background: var(--primaryColor);
    color: var(--white);
    &:hover { background: var(--primaryColorHover); }
  `,
  accent: css`
    background: var(--accentColor);
    color: var(--white);
    &:hover { background: var(--accentColorHover); }
  `,
  outline: css`
    background: transparent;
    color: var(--textColor);
    border: 1px solid var(--border);
    &:hover { border-color: var(--primaryColor); color: var(--primaryColor); }
  `,
  ghost: css`
    background: transparent;
    color: var(--textColor);
    &:hover { background: var(--surfaceAlt); }
  `,
}

const sizeStyles = {
  sm: css`
    padding: var(--sp2x) var(--sp4x);
    font-size: var(--p4);
    min-height: 36px;
  `,
  md: css`
    padding: var(--sp3x) var(--sp6x);
    font-size: var(--p3);
    min-height: 44px;
  `,
  lg: css`
    padding: var(--sp4x) var(--sp8x);
    font-size: var(--p2);
    min-height: 52px;
  `,
}

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--sp2x);
  border-radius: var(--radius-pill);
  font-family: 'Cabinet Grotesk', 'Satoshi', system-ui, sans-serif;
  font-weight: 600;
  letter-spacing: -0.005em;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background var(--trTimeFast) var(--easeOut),
              color var(--trTimeFast) var(--easeOut),
              border-color var(--trTimeFast) var(--easeOut),
              transform var(--trTimeFast) var(--easeOut);

  &:focus-visible {
    outline: 2px solid var(--primaryColor);
    outline-offset: 3px;
  }

  &:active { transform: translateY(1px); }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  ${({ $variant = 'primary' }) => variantStyles[$variant]}
  ${({ $size = 'md' }) => sizeStyles[$size]}
  ${({ $fullWidth }) => $fullWidth && css`width: 100%;`}
`
