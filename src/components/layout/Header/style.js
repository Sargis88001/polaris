import theme from '@/helpers'
import styled, { css } from 'styled-components'

export const HeaderRoot = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--surface);
  border-bottom: 1px solid transparent;
  transition: background var(--trTimeFast) var(--easeOut),
              border-color var(--trTimeFast) var(--easeOut),
              box-shadow var(--trTimeFast) var(--easeOut);

  &.scrolled {
    background: var(--surface);
    border-bottom-color: var(--border);
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
    gap: var(--sp2x);
    font-family: 'Cabinet Grotesk', sans-serif;
    font-weight: 700;
    font-size: var(--p1);
    letter-spacing: -0.01em;
    color: var(--textColor);
  }

  svg {
    width: 36px;
    height: 36px;
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
  background: var(--surfaceAlt);
  border: 1px solid var(--border);
  border-radius: var(--radius-pill);
`

export const NavLink = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  border-radius: var(--radius-pill);
  font-family: 'Cabinet Grotesk', 'Satoshi', sans-serif;
  font-weight: 500;
  font-size: var(--p4);
  color: var(--textMuted);
  cursor: pointer;
  transition: background var(--trTimeFast) var(--easeOut),
              color var(--trTimeFast) var(--easeOut);

  ${({ $active }) =>
    $active &&
    css`
      background: var(--surface);
      color: var(--textColor);
      box-shadow: var(--shadow-sm);
    `}

  &:hover {
    color: var(--textColor);
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
  border-radius: var(--radius-pill);
  background: var(--surfaceAlt);
  border: 1px solid var(--border);
  color: var(--textColor);

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
