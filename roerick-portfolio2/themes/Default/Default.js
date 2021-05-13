import React from 'react'
import { Mail } from 'styled-icons/entypo'

const icons = {
  Message:  <Mail />
}
const theme = {
  breakpoints: ['670px', '870px', '870px'],
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
    0, 4, 8, 16, 24, 32, 48, 64, 96, 128, 192, 256, 512
  ],
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    heading: 'JetBrains Mono'
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