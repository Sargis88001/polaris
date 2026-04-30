import theme from '@/helpers'
import styled, { css } from 'styled-components'

export const FormWrap = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp5x);
  background: var(--surfaceAlt);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--sp10x);

  ${theme.mediaQuery.tabletSizeM} {
    grid-template-columns: 1fr;
    padding: var(--sp6x);
    gap: var(--sp4x);
  }
`

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: var(--sp2x);
  font-size: var(--p4);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--textMuted);

  ${({ $full }) =>
    $full &&
    css`
      grid-column: 1 / -1;
    `}
`

const inputBase = css`
  width: 100%;
  padding: var(--sp4x);
  border-radius: var(--radius-md);
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--textColor);
  font-size: var(--p3);
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
  transition: border-color var(--trTimeFast) var(--easeOut),
              background var(--trTimeFast) var(--easeOut);

  &:focus {
    outline: none;
    border-color: var(--primaryColor);
    background: var(--surfaceAlt);
  }
`

export const Input = styled.input`${inputBase}`
export const Select = styled.select`${inputBase} appearance: none; padding-right: var(--sp10x);`
export const TextArea = styled.textarea`
  ${inputBase}
  min-height: 140px;
  resize: vertical;
`

export const ErrorText = styled.span`
  color: var(--error);
  font-size: var(--p4);
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0;
`

export const Actions = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: var(--sp4x);
  flex-wrap: wrap;
`

export const StatusMessage = styled.div`
  grid-column: 1 / -1;
  padding: var(--sp4x) var(--sp5x);
  border-radius: var(--radius-md);
  font-size: var(--p3);
  text-transform: none;
  letter-spacing: 0;
  font-weight: 500;
  border: 1px solid;

  ${({ $variant }) =>
    $variant === 'success'
      ? css`
          background: rgba(58, 138, 91, 0.08);
          border-color: var(--success);
          color: var(--success);
        `
      : css`
          background: rgba(200, 75, 58, 0.08);
          border-color: var(--error);
          color: var(--error);
        `}
`
