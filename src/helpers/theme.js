export const colors = {
  primaryColor: '#1f2a55',
  primaryColorHover: '#2c3a73',
  accentColor: '#e0834c',
  accentColorHover: '#d2723b',
  surface: '#f7f2e7',
  surfaceAlt: '#fbf7ec',
  surfaceDark: '#14151c',
  surfaceAltDark: '#1a1c25',
  textColor: '#1c1d24',
  textMuted: '#5a5d6c',
  textDark: '#f0ecde',
  textMutedDark: '#a3a4b0',
  border: '#e6dcc4',
  borderDark: '#2a2c38',
  white: '#ffffff',
  black: '#0c0d12',
  success: '#3a8a5b',
  error: '#c84b3a',
}

// Pixel widths used to build min/max media queries.
// Each "size" key has a max-width media query (mobile-first negative direction)
// and each "sizeMin" key has a min-width media query.
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
