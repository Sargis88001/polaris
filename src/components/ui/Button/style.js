import styled, { css } from 'styled-components'

const variantStyles = {
  primary: css`
    background: var(--color-primary);
    color: var(--white);
    border-color: var(--color-primary);

    &:hover {
      background: var(--color-primary-hover);
      border-color: var(--color-primary-hover);
      color: var(--white);
    }

    &:active {
      background: var(--color-primary-active);
      border-color: var(--color-primary-active);
    }
  `,
  accent: css`
    background: var(--color-primary);
    color: var(--white);
    border-color: var(--color-primary);

    &:hover {
      background: var(--color-primary-hover);
      border-color: var(--color-primary-hover);
    }
  `,
  outline: css`
    background: transparent;
    color: var(--color-text);
    border-color: var(--color-border-strong);

    &:hover {
      border-color: var(--color-primary);
      color: var(--color-primary);
      background: var(--color-primary-highlight);
    }
  `,
  ghost: css`
    background: transparent;
    color: var(--color-text);
    border-color: transparent;

    &:hover {
      background: var(--color-surface-offset);
      color: var(--color-text);
    }
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
  border-radius: var(--radius-md);
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: -0.005em;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background var(--trTimeFast) var(--easeOut),
              color var(--trTimeFast) var(--easeOut),
              border-color var(--trTimeFast) var(--easeOut),
              transform var(--trTimeFast) var(--easeOut),
              box-shadow var(--trTimeFast) var(--easeOut);

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  ${({ $variant = 'primary' }) => variantStyles[$variant] || variantStyles.primary}
  ${({ $size = 'md' }) => sizeStyles[$size] || sizeStyles.md}
  ${({ $fullWidth }) => $fullWidth && css`width: 100%;`}
`
