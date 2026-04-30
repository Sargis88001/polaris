import styled from 'styled-components'

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 80;
  background: rgba(12, 13, 18, 0.4);
  backdrop-filter: blur(4px);
  opacity: 0;
  pointer-events: none;
`

export const Drawer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 90;
  height: 100dvh;
  width: min(420px, 100vw);
  background: var(--surface);
  border-left: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  will-change: transform;
`

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--sp5x) var(--sp6x);
  border-bottom: 1px solid var(--border);
`

export const CloseButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: var(--radius-pill);
  background: var(--surfaceAlt);
  border: 1px solid var(--border);
  color: var(--textColor);
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const NavList = styled.nav`
  flex: 1;
  overflow-y: auto;
  padding: var(--sp4x) var(--sp4x) var(--sp8x);
  display: flex;
  flex-direction: column;
  gap: var(--sp1x);
`

export const NavItem = styled.span`
  display: block;
  padding: var(--sp4x) var(--sp5x);
  border-radius: var(--radius-md);
  font-family: 'Cabinet Grotesk', 'Satoshi', sans-serif;
  font-weight: 500;
  font-size: var(--p2);
  color: ${({ $active }) => ($active ? 'var(--white)' : 'var(--textColor)')};
  background: ${({ $active }) => ($active ? 'var(--primaryColor)' : 'transparent')};
  cursor: pointer;
  transition: background var(--trTimeFast) var(--easeOut), color var(--trTimeFast) var(--easeOut);

  &:hover {
    background: ${({ $active }) => ($active ? 'var(--primaryColorHover)' : 'var(--surfaceAlt)')};
  }
`

export const Footer = styled.div`
  padding: var(--sp5x) var(--sp6x);
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp4x);
`
