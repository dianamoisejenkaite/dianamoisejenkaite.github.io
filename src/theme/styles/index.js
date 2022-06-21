/* eslint-disable import/no-anonymous-default-export */
// Global style overrides
// import styles from "./styles"

export default {
  body: {
    color: 'gray.900',
    bg: 'white',
  },
  a: {
    cursor: 'pointer',
  },
  svg: {
    fill: 'currentColor',
    overflow: 'visible',
  },
  '@font-face': [
    {
      fontFamily: `'Quicksand'`,
      fontStyle: 'normal',
      fontWeight: 400,
      fontDisplay: 'swap',
      src: `url('/fonts/Quicksand-Regular.ttf') format('truetype')`,
    },
    {
      fontFamily: `'Quicksand'`,
      fontStyle: 'normal',
      fontWeight: 500,
      fontDisplay: 'swap',
      src: `url('/fonts/Quicksand-Medium.ttf') format('truetype')`,
    },
  ],
}
