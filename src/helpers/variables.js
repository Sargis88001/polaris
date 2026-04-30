'use client'

import { createGlobalStyle } from 'styled-components'
import theme from './theme.js'

const Variables = createGlobalStyle`
  :root {
    /* Brand */
    --primaryColor: ${theme.colors.primaryColor};
    --primaryColorHover: ${theme.colors.primaryColorHover};
    --accentColor: ${theme.colors.accentColor};
    --accentColorHover: ${theme.colors.accentColorHover};

    /* Surfaces and text (light mode default) */
    --surface: ${theme.colors.surface};
    --surfaceAlt: ${theme.colors.surfaceAlt};
    --textColor: ${theme.colors.textColor};
    --textMuted: ${theme.colors.textMuted};
    --border: ${theme.colors.border};

    /* Neutrals */
    --white: ${theme.colors.white};
    --black: ${theme.colors.black};
    --success: ${theme.colors.success};
    --error: ${theme.colors.error};

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

    /* Layout */
    --containerPadding: 24px;
    --gutter: 24px;
    --sectionDistance: 96px;
    --headerHeight: 80px;
    --maxContent: 1280px;

    /* Motion */
    --trTime: 0.3s;
    --trTimeFast: 0.18s;
    --trTimeSlow: 0.5s;
    --easeOut: cubic-bezier(0.22, 1, 0.36, 1);

    /* Radius */
    --radius-sm: 6px;
    --radius-md: 12px;
    --radius-lg: 20px;
    --radius-pill: 999px;

    /* Type scale (fluid) */
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

    /* Shadows */
    --shadow-sm: 0 1px 2px rgba(20, 21, 28, 0.06), 0 1px 1px rgba(20, 21, 28, 0.04);
    --shadow-md: 0 8px 24px rgba(20, 21, 28, 0.08);
    --shadow-lg: 0 24px 60px rgba(20, 21, 28, 0.12);
  }

  /* Dark theme overrides */
  [data-theme='dark'] {
    --surface: ${theme.colors.surfaceDark};
    --surfaceAlt: ${theme.colors.surfaceAltDark};
    --textColor: ${theme.colors.textDark};
    --textMuted: ${theme.colors.textMutedDark};
    --border: ${theme.colors.borderDark};
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.45);
    --shadow-lg: 0 24px 60px rgba(0, 0, 0, 0.55);
  }

  /* Tablet large */
  ${theme.mediaQuery.tabletSize} {
    :root {
      --containerPadding: 20px;
      --gutter: 20px;
      --sectionDistance: 72px;
      --headerHeight: 72px;
      --p1: 18px;
      --p2: 17px;
      --p3: 15px;
    }
  }

  /* Tablet small */
  ${theme.mediaQuery.tabletSizeM} {
    :root {
      --containerPadding: 16px;
      --gutter: 16px;
      --sectionDistance: 56px;
      --headerHeight: 64px;
    }
  }

  /* Mobile */
  ${theme.mediaQuery.mobileSize} {
    :root {
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
