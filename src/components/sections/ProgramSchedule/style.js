import styled from 'styled-components'

export const Section = styled.section`
  padding: var(--sectionDistance) 0;
`

export const Inner = styled.div`
  max-width: var(--maxContent);
  margin: 0 auto;
  padding: 0 var(--containerPadding);
`

export const Title = styled.h2`
  font-size: var(--h3);
  margin-bottom: var(--sp8x);
`

export const TableWrap = styled.div`
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surfaceAlt);
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--p3);

  th, td {
    padding: var(--sp4x) var(--sp5x);
    text-align: left;
    border-bottom: 1px solid var(--border);
  }

  th {
    font-family: 'Cabinet Grotesk', sans-serif;
    font-weight: 600;
    font-size: var(--p4);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--textMuted);
    background: var(--surface);
  }

  tr:last-child td { border-bottom: 0; }
`
