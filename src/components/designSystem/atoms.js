const BASELINE = 1.5

const scales = {
  xxsmall: 0.125,
  xsmall: 0.5,
  small: 0.75,
  medium: 1,
  large: 1.5,
  xlarge: 2,
}

const widths = {
  auto: "auto",
  fill: "100%",
  container: "40rem",
}

widths.page = `calc(${widths.container} + ${BASELINE * scales.medium * 2}rem)`

// Not entirely sure where this stray .25rem comes from, but it’s needed to align things properly
widths.content = `calc(.25rem + (100vw - ${widths.page}) / 2)`

export default {
  baseline: BASELINE,
  widths,
  breakpoints: {
    medium: `60rem`,
    narrow: `31rem`,
  },
  colors: {
    wash: "#F7FAFC",
    site: "#3182CE",
    text: "#2D3748",
    subhead: "#718096",
  },
  font: {
    family: {
      sans: `"IBM Plex", -apple-system, system-ui, BlinkMacSystemFont, sans-serif`,
      serif: `"IBM Plex Serif", serif`,
      serif,
      mono: `"IBM Plex Mono", monospace`,
    },
    size: {
      xsmall: `${scales.xsmall}rem`,
      small: `${scales.small}rem`,
      regular: `${scales.medium}rem`,
      h1: `${scales.xlarge}rem`,
      h2: `${scales.large}rem`,
    },
  },
  scales,
  // This confusing little function takes `scales` and creates
  // rem-based values for each size
  spacing: Object.assign(
    {},
    ...Object.keys(scales).map(n => ({
      // e.g. small: '(BASELINE * 0.875)rem'
      [n]: `${BASELINE * scales[n]}rem`,
    }))
  ),
}
