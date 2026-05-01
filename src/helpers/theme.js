// Polaris Center brand palette
// Primary brand color: #342d8b (deep indigo/violet)
// Text on brand color: white (#ffffff)
export const colors = {
  // Primary (light mode)
  primaryColor: '#342d8b',
  primaryColorHover: '#2a2470',
  primaryColorActive: '#1f1a55',
  primaryHighlight: '#e8e7f5',
  primarySoft: '#e8e7f5',

  // Primary (dark mode)
  primaryColorDark: '#6c63d4',
  primaryColorHoverDark: '#8178dc',
  primaryColorActiveDark: '#9991e4',
  primarySoftDark: '#241f4d',

  // Surfaces - warm white/off-white neutrals (NOT blue-tinted) - light
  bg: '#f7f7f9',
  surface: '#ffffff',
  surfaceAlt: '#f7f7f9',
  surfaceOffset: '#f0f0f4',

  // Surfaces - dark
  bgDark: '#0f0e1a',
  surfaceDark: '#16152a',
  surfaceAltDark: '#1e1c36',
  surfaceOffsetDark: '#23213f',

  // Text - light
  textColor: '#1a1a2e',
  textMuted: '#6b6b8a',
  textFaint: '#b0b0c8',
  textInverse: '#ffffff',

  // Text - dark
  textDark: '#e8e8f5',
  textMutedDark: '#9090b8',
  textFaintDark: '#5e5e7a',
  textInverseDark: '#0f0e1a',

  // Borders
  border: '#e3e3ec',
  borderStrong: '#cdcdd9',
  borderDark: '#2a2845',
  borderStrongDark: '#3a3858',

  // Neutrals
  white: '#ffffff',
  black: '#0a0a14',

  // Status
  success: '#2f7a4d',
  error: '#b3304a',
  warning: '#b8841a',
}

// Pixel widths used to build min/max media queries.
const sizes = {
  desktopSizeXL: 1920,
  desktopSizeL: 1680,
  desktopSizeM: 1440,
  desktopSizeS: 1280,
  tabletSize: 1024,
  tabletSizeX: 900,
  tabletSizeM: 768,
  tabletSizeS: 600,
  mobileSize: 480,
}

const buildMediaQueries = (input) => {
  const out = {}
  Object.entries(input).forEach(([key, value]) => {
    out[key] = `@media only screen and (max-width: ${value}px)`
    out[`${key}Min`] = `@media only screen and (min-width: ${value + 1}px)`
  })
  return out
}

export const mediaQuery = buildMediaQueries(sizes)

export const breakpoints = sizes

export const spacingUnit = 4

export const transitions = {
  fast: '0.2s',
  base: '0.3s',
  slow: '0.5s',
}

const theme = {
  colors,
  mediaQuery,
  breakpoints,
  spacingUnit,
  transitions,
}

export default theme
