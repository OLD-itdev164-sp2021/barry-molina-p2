import React from 'react'

const theme = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [
    12, 14, 16, 20
  ],
  colors: {
    primary: '#9F2B68',
    purple: '#9F2B68',
    white: '#fff'
  },
  space: [
    0, 4, 8, 16, 32, 64, 128, 256, 512
  ],
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    heading: 'inherit'
  }
}

export const Gray = { ...theme }