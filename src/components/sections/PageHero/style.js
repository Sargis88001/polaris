import styled from 'styled-components'

export const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 480px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding: 0;
  color: var(--color-text-inverse);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      oklch(0.12 0.02 250 / 0.92) 0%,
      oklch(0.12 0.02 250 / 0.55) 50%,
      oklch(0.12 0.02 250 / 0.15) 100%
    );
    z-index: 1;
  }
`

export const Bg = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

export const Container = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: var(--maxContent, var(--content-wide, 1280px));
  margin: 0 auto;
  padding: clamp(3rem, 8vw, 6rem) var(--containerPadding, 1.5rem);
`

export const Eyebrow = styled.span`
  display: block;
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  color: var(--color-primary);
  opacity: 1;
`

export const Title = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(2rem, 4.5vw, 4.2rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.022em;
  max-width: 700px;
  margin-bottom: 1.25rem;
  color: var(--color-text-inverse);
`

export const Lede = styled.p`
  font-family: var(--font-body);
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  font-weight: 400;
  line-height: 1.65;
  max-width: 520px;
  opacity: 0.85;
  color: var(--color-text-inverse);
`
