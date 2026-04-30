'use client'

import { createGlobalStyle } from 'styled-components'

const Typography = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }

  html, body {
    margin: 0;
    padding: 0;
    background: var(--surface);
    color: var(--textColor);
    font-family: 'Satoshi', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    font-size: var(--p3);
    line-height: 1.55;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background var(--trTime) var(--easeOut), color var(--trTime) var(--easeOut);
  }

  body {
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6,
  .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: 'Cabinet Grotesk', 'Satoshi', system-ui, sans-serif;
    margin: 0 0 var(--sp4x);
    color: var(--textColor);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.08;
  }

  h1, .h1 { font-size: var(--h1); line-height: 1.02; letter-spacing: -0.025em; }
  h2, .h2 { font-size: var(--h2); line-height: 1.05; }
  h3, .h3 { font-size: var(--h3); line-height: 1.12; }
  h4, .h4 { font-size: var(--h4); line-height: 1.2; }
  h5, .h5 { font-size: var(--h5); line-height: 1.3; }
  h6, .h6 { font-size: var(--h6); line-height: 1.4; }

  p, .p1, .p2, .p3, .p4, .p5 {
    margin: 0 0 var(--sp4x);
    font-family: 'Satoshi', system-ui, sans-serif;
    color: var(--textColor);
  }

  .p1 { font-size: var(--p1); line-height: 1.55; }
  .p2 { font-size: var(--p2); line-height: 1.55; }
  p, .p3 { font-size: var(--p3); line-height: 1.6; }
  .p4 { font-size: var(--p4); line-height: 1.55; }
  .p5 { font-size: var(--p5); line-height: 1.5; letter-spacing: 0.04em; text-transform: uppercase; }

  a {
    color: inherit;
    text-decoration: none;
    transition: color var(--trTimeFast) var(--easeOut), opacity var(--trTimeFast) var(--easeOut);
  }
  a:hover { color: var(--primaryColor); }

  img, svg, video { display: block; max-width: 100%; height: auto; }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    color: inherit;
    padding: 0;
  }

  ul, ol { margin: 0 0 var(--sp4x); padding: 0 0 0 var(--sp5x); }
  li { margin-bottom: var(--sp1x); }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }

  ::selection { background: var(--primaryColor); color: var(--white); }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
      scroll-behavior: auto !important;
    }
  }
`

export default Typography
