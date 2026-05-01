import theme from '@/helpers'
import styled, { css } from 'styled-components'

export const HeaderRoot = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: color-mix(in srgb, var(--color-bg) 85%, transparent);
  backdrop-filter: saturate(160%) blur(10px);
  -webkit-backdrop-filter: saturate(160%) blur(10px);
  border-bottom: 1px solid transparent;
  transition: background var(--trTimeFast) var(--easeOut),
              border-color var(--trTimeFast) var(--easeOut),
              box-shadow var(--trTimeFast) var(--easeOut);

  &.scrolled {
    background: color-mix(in srgb, var(--color-surface) 95%, transparent);
    border-bottom-color: var(--color-border);
    box-shadow: var(--shadow-sm);
  }
`

export const Inner = styled.div`
  max-width: var(--maxContent);
  margin: 0 auto;
  padding: 0 var(--containerPadding);
  height: var(--headerHeight);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp6x);
`

export const LogoLink = styled.div`
  a {
    display: inline-flex;
    align-items: center;
    gap: var(--sp3x);
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 22px;
    letter-spacing: -0.01em;
    color: var(--color-text);
  }

  a:hover {
    color: var(--color-primary);
  }

  svg {
    width: 42px;
    height: 42px;
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: var(--sp4x);

  ${theme.mediaQuery.tabletSize} {
    display: none;
  }
`

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: var(--sp3x);
  padding: 8px;
  margin: 0;
  list-style: none;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-sm);
`

export const NavLink = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  border-radius: var(--radius-full);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.01em;
  color: var(--color-text-muted);
  cursor: pointer;
  transition: background var(--trTimeFast) var(--easeOut),
              color var(--trTimeFast) var(--easeOut);

  ${({ $active }) =>
    $active &&
    css`
      background: var(--color-primary);
      color: var(--white);
      box-shadow: var(--shadow-sm);
    `}

  &:hover {
    color: ${({ $active }) => ($active ? 'var(--white)' : 'var(--color-text)')};
    background: ${({ $active }) =>
      $active ? 'var(--color-primary-hover)' : 'var(--color-surface-offset)'};
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--sp3x);
`

export const HamburgerButton = styled.button`
  display: none;
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text);

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  ${theme.mediaQuery.tabletSize} {
    display: inline-flex;
  }
`

export const DropdownWrapper = styled.li`
  position: relative;
  display: inline-flex;
  align-items: center;
`

export const DropdownTrigger = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 12px 24px;
  border-radius: var(--radius-full);
  border: none;
  background: transparent;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.01em;
  color: var(--color-text-muted);
  cursor: pointer;
  transition: background var(--trTimeFast) var(--easeOut),
              color var(--trTimeFast) var(--easeOut);

  svg {
    transition: transform var(--trTimeFast) var(--easeOut);
  }

  &[data-open='true'] svg {
    transform: rotate(180deg);
  }

  ${({ $active }) =>
    $active &&
    css`
      background: var(--color-primary);
      color: var(--white);
      box-shadow: var(--shadow-sm);
    `}

  &:hover {
    color: ${({ $active }) => ($active ? 'var(--white)' : 'var(--color-text)')};
    background: ${({ $active }) =>
      $active ? 'var(--color-primary-hover)' : 'var(--color-surface-offset)'};
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
`

export const DropdownPanel = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  min-width: 220px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: var(--sp2x);
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 60;
`

export const DropdownItem = styled.a`
  display: block;
  width: 100%;
  padding: 10px 16px;
  border-radius: var(--radius-md);
  font-family: var(--font-display);
  font-size: var(--p3);
  font-weight: 500;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: background var(--trTimeFast) var(--easeOut),
              color var(--trTimeFast) var(--easeOut);

  &:hover {
    background: var(--color-surface-offset);
    color: var(--color-text);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  ${({ $active }) =>
    $active &&
    css`
      background: var(--color-primary-soft);
      color: var(--color-primary);

      &:hover {
        background: var(--color-primary-soft);
        color: var(--color-primary);
      }
    `}
`

export const DesktopOnly = styled.div`
  display: flex;
  align-items: center;
  gap: var(--sp4x);

  ${theme.mediaQuery.tabletSize} {
    display: none;
  }
`
