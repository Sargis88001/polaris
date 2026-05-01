'use client'

import { createGlobalStyle } from 'styled-components'

const Typography = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
    scroll-padding-top: var(--header-h, 72px);
  }

  html, body {
    background: var(--color-bg);
    color: var(--color-text);
    font-family: var(--font-body);
    font-size: var(--text-base);
    line-height: 1.6;
    transition: background var(--trTime) var(--easeOut), color var(--trTime) var(--easeOut);
  }

  body {
    min-height: 100dvh;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6,
  .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: var(--font-display);
    margin: 0 0 var(--sp4x);
    color: var(--color-text);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.1;
    text-wrap: balance;
  }

  h1, .h1 { font-size: var(--h1); line-height: 1.02; letter-spacing: -0.025em; }
  h2, .h2 { font-size: var(--h2); line-height: 1.05; }
  h3, .h3 { font-size: var(--h3); line-height: 1.12; }
  h4, .h4 { font-size: var(--h4); line-height: 1.2; }
  h5, .h5 { font-size: var(--h5); line-height: 1.3; }
  h6, .h6 { font-size: var(--h6); line-height: 1.4; }

  p, .p1, .p2, .p3, .p4, .p5 {
    margin: 0 0 var(--sp4x);
    font-family: var(--font-body);
    color: var(--color-text);
    text-wrap: pretty;
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
  a:hover { color: var(--color-primary); }

  img, picture, svg, video {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    list-style: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    color: inherit;
    padding: 0;
  }

  input, textarea, select, button {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }

  a, button, [role='button'], input, textarea, select {
    transition:
      color var(--transition-interactive),
      background var(--transition-interactive),
      border-color var(--transition-interactive),
      box-shadow var(--transition-interactive),
      transform var(--transition-interactive);
  }

  ::selection {
    background: var(--color-primary);
    color: var(--color-text-inverse);
  }

  :focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
    border-radius: var(--radius-sm);
  }

  .sr-only,
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`

export default Typography
