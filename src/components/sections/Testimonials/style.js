import styled from 'styled-components'

export const Section = styled.section`
  padding: var(--sectionDistance) 0;
  background: var(--surfaceAlt);
`

export const Inner = styled.div`
  max-width: var(--maxContent);
  margin: 0 auto;
  padding: 0 var(--containerPadding);
`

export const Header = styled.div`
  text-align: center;
  margin-bottom: var(--sp10x);

  h2 {
    font-size: var(--h2);
    margin: 0;
  }
`

export const CarouselWrap = styled.div`
  max-width: 820px;
  margin: 0 auto;
`
