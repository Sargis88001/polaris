import theme from '@/helpers'
import styled from 'styled-components'

export const HeroSection = styled.section`
  padding: var(--sp16x) 0 var(--sp8x);
`

export const HeroInner = styled.div`
  max-width: var(--maxContent);
  margin: 0 auto;
  padding: 0 var(--containerPadding);
`

export const HeroKicker = styled.span`
  display: inline-block;
  font-size: var(--p4);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--primaryColor);
  font-weight: 600;
  margin-bottom: var(--sp4x);
`

export const HeroTitle = styled.h1`
  font-size: var(--h1);
  line-height: 1.04;
  margin-bottom: var(--sp4x);
  max-width: 18ch;
  letter-spacing: -0.025em;
`

export const HeroLede = styled.p`
  font-size: var(--p1);
  color: var(--textMuted);
  max-width: 60ch;
  margin: 0;
`

export const ListSection = styled.section`
  padding: var(--sp10x) 0 var(--sectionDistance);
`

export const ListInner = styled.div`
  max-width: var(--maxContent);
  margin: 0 auto;
  padding: 0 var(--containerPadding);
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sp6x);

  ${theme.mediaQuery.tabletSize} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${theme.mediaQuery.tabletSizeM} {
    grid-template-columns: 1fr;
  }
`

export const PostCard = styled.article`
  background: var(--surfaceAlt);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: transform var(--trTime) var(--easeOut),
              box-shadow var(--trTime) var(--easeOut);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }

  a { display: block; height: 100%; }
`

export const Cover = styled.div`
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--border);

  img { width: 100%; height: 100%; object-fit: cover; }
`

export const Body = styled.div`
  padding: var(--sp6x);

  h3 { font-size: var(--h5); margin-bottom: var(--sp3x); }
  p { color: var(--textMuted); margin: 0; line-height: 1.55; }
`

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--sp2x);
  margin-bottom: var(--sp3x);
  font-size: var(--p4);
  color: var(--textMuted);
  text-transform: uppercase;
  letter-spacing: 0.06em;

  span:first-child {
    color: var(--primaryColor);
    font-weight: 600;
  }
`

/* Post detail page */
export const PostHero = styled.section`
  padding: var(--sp16x) 0 var(--sp6x);
`

export const PostInner = styled.article`
  max-width: 760px;
  margin: 0 auto;
  padding: 0 var(--containerPadding);
`

export const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--sp3x);
  font-size: var(--p4);
  color: var(--textMuted);
  margin-bottom: var(--sp5x);
  text-transform: uppercase;
  letter-spacing: 0.06em;

  span:first-child {
    color: var(--primaryColor);
    font-weight: 600;
  }
`

export const PostTitle = styled.h1`
  font-size: clamp(34px, 4.4vw, 60px);
  line-height: 1.05;
  margin-bottom: var(--sp6x);
  letter-spacing: -0.025em;
`

export const PostCover = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: var(--sp10x);
  background: var(--border);

  img { width: 100%; height: 100%; object-fit: cover; }
`

export const PostBody = styled.div`
  font-size: var(--p1);
  line-height: 1.7;
  color: var(--textColor);

  p { margin: 0 0 var(--sp5x); }
`

export const BackLink = styled.div`
  margin-top: var(--sp10x);

  a {
    display: inline-flex;
    align-items: center;
    gap: var(--sp2x);
    font-size: var(--p3);
    color: var(--primaryColor);
    font-weight: 600;
  }
`
