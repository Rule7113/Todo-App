import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: dark;
  }

  * {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji';
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 ${({ theme }) => theme.spacing.md};
    line-height: 1.2;
  }

  p {
    margin: 0 0 ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.textMuted};
  }

  input, button {
    font: inherit;
  }
`


