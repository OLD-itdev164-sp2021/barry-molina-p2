import React from 'react'
import { Mail } from 'styled-icons/entypo'

const icons = {
  Message:  <Mail />
}
const theme = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [
    12, 14, 16, 18, 20, 24, 32, 48, 64
  ],
  colors: {
    primary: '#9F2B68',
    border: 'rgba(0, 0, 0, .25)',
    text: '#333333',
    white: '#fff'
  },
  space: [
    0, 4, 8, 16, 24, 32, 48, 64, 128, 256, 512
  ],
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    heading: 'inherit'
  },
  fontWeights: {
    body: 300,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .5)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
}

export default { ...theme, icons }