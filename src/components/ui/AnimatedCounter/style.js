import styled from 'styled-components'

export const CounterValue = styled.span`
  display: inline-block;
  font-family: 'Cabinet Grotesk', 'Satoshi', sans-serif;
  font-weight: 700;
  font-feature-settings: 'tnum' 1;
  color: var(--primaryColor);
  letter-spacing: -0.025em;
  font-size: var(--h2);
  line-height: 1;
`

export const CounterWrap = styled.div`
  display: inline-flex;
  align-items: baseline;
  gap: var(--sp1x);
`

export const CounterSuffix = styled.span`
  font-family: 'Cabinet Grotesk', 'Satoshi', sans-serif;
  font-size: var(--h3);
  font-weight: 700;
  color: var(--primaryColor);
  line-height: 1;
`
