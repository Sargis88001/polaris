'use client'

import { createGlobalStyle } from 'styled-components'
import theme from './theme.js'

const Variables = createGlobalStyle`
  :root,
  [data-theme='light'] {
    /* Brand - Polaris Center */
    --color-primary: ${theme.colors.primaryColor};
    --color-primary-hover: ${theme.colors.primaryColorHover};
    --color-primary-active: ${theme.colors.primaryColorActive};
    --color-primary-highlight: ${theme.colors.primaryHighlight};
    --color-primary-soft: ${theme.colors.primarySoft};

    /* Legacy aliases (kept so existing components keep working) */
    --primaryColor: ${theme.colors.primaryColor};
    --primaryColorHover: ${theme.colors.primaryColorHover};
    --primaryColorActive: ${theme.colors.primaryColorActive};
    --accentColor: ${theme.colors.primaryColor};
    --accentColorHover: ${theme.colors.primaryColorHover};

    /* Surfaces (warm-neutral, not blue tinted) */
    --color-bg: ${theme.colors.bg};
    --color-surface: ${theme.colors.surface};
    --color-surface-2: ${theme.colors.surfaceAlt};
    --color-surface-offset: ${theme.colors.surfaceOffset};

    --surface: ${theme.colors.surface};
    --surfaceAlt: ${theme.colors.surfaceAlt};
    --surfaceOffset: ${theme.colors.surfaceOffset};
    --bg: ${theme.colors.bg};

    /* Text */
    --color-text: ${theme.colors.textColor};
    --color-text-muted: ${theme.colors.textMuted};
    --color-text-faint: ${theme.colors.textFaint};
    --color-text-inverse: ${theme.colors.textInverse};

    --textColor: ${theme.colors.textColor};
    --textMuted: ${theme.colors.textMuted};
    --textFaint: ${theme.colors.textFaint};
    --textInverse: ${theme.colors.textInverse};

    /* Borders */
    --color-border: ${theme.colors.border};
    --color-border-strong: ${theme.colors.borderStrong};
    --border: ${theme.colors.border};
    --borderStrong: ${theme.colors.borderStrong};

    /* Neutrals */
    --white: ${theme.colors.white};
    --black: ${theme.colors.black};
    --success: ${theme.colors.success};
    --error: ${theme.colors.error};
    --warning: ${theme.colors.warning};

    /* Spacing scale (4px base) */
    --sp1x: 4px;
    --sp2x: 8px;
    --sp3x: 12px;
    --sp4x: 16px;
    --sp5x: 20px;
    --sp6x: 24px;
    --sp8x: 32px;
    --sp10x: 40px;
    --sp12x: 48px;
    --sp16x: 64px;
    --sp20x: 80px;
    --sp24x: 96px;
    --sp32x: 128px;

    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-10: 2.5rem;
    --space-12: 3rem;
    --space-16: 4rem;
    --space-20: 5rem;
    --space-24: 6rem;
    --space-32: 8rem;

    /* Layout */
    --containerPadding: 24px;
    --gutter: 24px;
    --sectionDistance: 96px;
    --headerHeight: 72px;
    --header-h: 72px;
    --maxContent: 1280px;
    --content-narrow: 720px;
    --content-default: 1080px;
    --content-wide: 1280px;

    /* Motion */
    --trTime: 0.3s;
    --trTimeFast: 0.18s;
    --trTimeSlow: 0.5s;
    --easeOut: cubic-bezier(0.22, 1, 0.36, 1);
    --transition-interactive: 200ms cubic-bezier(0.16, 1, 0.3, 1);

    /* Radius */
    --radius-sm: 6px;
    --radius-md: 10px;
    --radius-lg: 16px;
    --radius-xl: 24px;
    --radius-pill: 999px;
    --radius-full: 9999px;

    /* Type scale (fluid) - ported from index.html */
    --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
    --text-sm: clamp(0.875rem, 0.82rem + 0.3vw, 1rem);
    --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
    --text-lg: clamp(1.125rem, 1rem + 0.6vw, 1.375rem);
    --text-xl: clamp(1.5rem, 1.2rem + 1.2vw, 2.25rem);
    --text-2xl: clamp(2rem, 1.4rem + 2.5vw, 3.25rem);
    --text-3xl: clamp(2.5rem, 1.4rem + 4vw, 4.5rem);
    --text-hero: clamp(3rem, 1.6rem + 5.5vw, 6rem);

    /* Legacy heading scale */
    --h1: clamp(40px, 5.6vw, 80px);
    --h2: clamp(32px, 4vw, 56px);
    --h3: clamp(26px, 3vw, 40px);
    --h4: clamp(22px, 2.4vw, 30px);
    --h5: clamp(19px, 1.8vw, 22px);
    --h6: clamp(17px, 1.5vw, 19px);
    --p1: 20px;
    --p2: 18px;
    --p3: 16px;
    --p4: 14px;
    --p5: 12px;

    --font-display: 'Cabinet Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif;
    --font-body: 'Satoshi', 'Inter', system-ui, sans-serif;

    /* Shadows */
    --shadow-sm: 0 1px 2px rgba(26, 26, 46, 0.05), 0 1px 1px rgba(26, 26, 46, 0.04);
    --shadow-md: 0 6px 20px rgba(26, 26, 46, 0.08);
    --shadow-lg: 0 18px 40px rgba(26, 26, 46, 0.12);
  }

  /* Dark theme overrides */
  [data-theme='dark'] {
    --color-primary: ${theme.colors.primaryColorDark};
    --color-primary-hover: ${theme.colors.primaryColorHoverDark};
    --color-primary-active: ${theme.colors.primaryColorActiveDark};
    --color-primary-highlight: ${theme.colors.primarySoftDark};
    --color-primary-soft: ${theme.colors.primarySoftDark};

    --primaryColor: ${theme.colors.primaryColorDark};
    --primaryColorHover: ${theme.colors.primaryColorHoverDark};
    --primaryColorActive: ${theme.colors.primaryColorActiveDark};
    --accentColor: ${theme.colors.primaryColorDark};
    --accentColorHover: ${theme.colors.primaryColorHoverDark};

    --color-bg: ${theme.colors.bgDark};
    --color-surface: ${theme.colors.surfaceDark};
    --color-surface-2: ${theme.colors.surfaceAltDark};
    --color-surface-offset: ${theme.colors.surfaceOffsetDark};

    --surface: ${theme.colors.surfaceDark};
    --surfaceAlt: ${theme.colors.surfaceAltDark};
    --surfaceOffset: ${theme.colors.surfaceOffsetDark};
    --bg: ${theme.colors.bgDark};

    --color-text: ${theme.colors.textDark};
    --color-text-muted: ${theme.colors.textMutedDark};
    --color-text-faint: ${theme.colors.textFaintDark};
    --color-text-inverse: ${theme.colors.textInverseDark};

    --textColor: ${theme.colors.textDark};
    --textMuted: ${theme.colors.textMutedDark};
    --textFaint: ${theme.colors.textFaintDark};
    --textInverse: ${theme.colors.textInverseDark};

    --color-border: ${theme.colors.borderDark};
    --color-border-strong: ${theme.colors.borderStrongDark};
    --border: ${theme.colors.borderDark};
    --borderStrong: ${theme.colors.borderStrongDark};

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.40);
    --shadow-md: 0 6px 20px rgba(0, 0, 0, 0.45);
    --shadow-lg: 0 18px 40px rgba(0, 0, 0, 0.55);
  }

  /* Tablet large */
  ${theme.mediaQuery.tabletSize} {
    :root,
    [data-theme='light'],
    [data-theme='dark'] {
      --containerPadding: 20px;
      --gutter: 20px;
      --sectionDistance: 72px;
      --headerHeight: 64px;
      --header-h: 64px;
      --p1: 18px;
      --p2: 17px;
      --p3: 15px;
    }
  }

  /* Tablet small */
  ${theme.mediaQuery.tabletSizeM} {
    :root,
    [data-theme='light'],
    [data-theme='dark'] {
      --containerPadding: 16px;
      --gutter: 16px;
      --sectionDistance: 56px;
      --headerHeight: 60px;
      --header-h: 60px;
    }
  }

  /* Mobile */
  ${theme.mediaQuery.mobileSize} {
    :root,
    [data-theme='light'],
    [data-theme='dark'] {
      --containerPadding: 16px;
      --gutter: 14px;
      --sectionDistance: 48px;
      --p1: 17px;
      --p2: 16px;
      --p3: 15px;
      --p4: 13px;
    }
  }
`

export default Variables
