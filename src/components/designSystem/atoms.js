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
    blackAlpha: "rgba(0, 0, 0, 0.75)",
    whiteAlpha: "rgba(255, 255, 255, 0.75)",
    wash: "#fefefe",
    site: "#e33d26",
    text: "#222",
    subhead: "#555",
    meta: "#44464B",
    mark: "rgba(255, 200, 0, 0.15)",
    highlight: "#ffc800",
    complementary: "#058cff",
    additive: "rgba(0,0,0,.05)",
  },
  font: {
    family: {
      sans: `"IBM Plex", -apple-system, system-ui, BlinkMacSystemFont, sans-serif`,
      serif: `IBM Plex Serif`,
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
