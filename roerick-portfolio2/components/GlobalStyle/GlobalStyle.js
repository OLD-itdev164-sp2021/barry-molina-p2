import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap'); */
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.body };
    /* font-family: 'JetBrains Mono', 'monospace'; */
    /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */
    color: ${({ theme }) => theme.colors.text}
  }
  /* h1 {
    font-family: 'JetBrains Mono', 'monospace';
  } */

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle