export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

// Desktop first
const BREAKPOINTS = {
  phone: 600, // 600
  tablet: 950, // 950
  laptop: 1300, // 1300
};

export const QUERIES = {
  phoneAndDown: `(max-width: ${BREAKPOINTS.phone / 16}rem)`, // 37.5
  tabletAndDown: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`, // 59.375
  laptopAndDown: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`, // 81.25
};
