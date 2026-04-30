'use client'

import { createGlobalStyle } from 'styled-components'

const HelperClass = createGlobalStyle`
  .container {
    width: 100%;
    max-width: var(--maxContent);
    margin: 0 auto;
    padding-left: var(--containerPadding);
    padding-right: var(--containerPadding);
  }

  .section {
    padding-top: var(--sectionDistance);
    padding-bottom: var(--sectionDistance);
  }

  .section--top { padding-top: var(--sectionDistance); padding-bottom: 0; }
  .section--bottom { padding-top: 0; padding-bottom: var(--sectionDistance); }

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

  .text-muted { color: var(--textMuted); }
  .text-center { text-align: center; }
  .uppercase { text-transform: uppercase; letter-spacing: 0.08em; }

  .grid {
    display: grid;
    gap: var(--gutter);
  }

  .stack {
    display: flex;
    flex-direction: column;
    gap: var(--sp4x);
  }

  .reveal { opacity: 0; transform: translateY(24px); }
  .reveal.is-visible { opacity: 1; transform: none; transition: opacity 0.7s var(--easeOut), transform 0.7s var(--easeOut); }
`

export default HelperClass
