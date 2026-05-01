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
              box-shadow var(--trTimeFast) var(--easeOut),
              height var(--trTimeFast) var(--easeOut);

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
  transition: height var(--trTimeFast) var(--easeOut);

  .scrolled & {
    height: calc(var(--headerHeight) - 8px);
  }
`

export const LogoLink = styled.div`
  a {
    display: inline-flex;
    align-items: center;
    gap: var(--sp2x);
    font-family: var(--font-display);
    font-weight: 700;
    font-size: var(--p1);
    letter-spacing: -0.01em;
    color: var(--color-text);
  }

  a:hover {
    color: var(--color-primary);
  }

  svg {
    width: 32px;
    height: 32px;
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
  gap: var(--sp1x);
  padding: 4px;
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
  padding: 8px 14px;
  border-radius: var(--radius-full);
  font-family: var(--font-display);
  font-weight: 500;
  font-size: var(--p4);
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
  width: 44px;
  height: 44px;
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

export const DesktopOnly = styled.div`
  display: flex;
  align-items: center;
  gap: var(--sp3x);

  ${theme.mediaQuery.tabletSize} {
    display: none;
  }
`
