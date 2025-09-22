export const theme = {
  colors: {
    background: '#0b1020',
    surface: '#121933',
    surfaceElevated: '#19224a',
    border: '#2a3566',
    text: '#e6e9f5',
    textMuted: '#b3bcdf',
    primary: '#6aa0ff',
    primaryHover: '#5a8ae0',
    success: '#35c17e',
    warning: '#ffaf38',
    danger: '#ff5c70',
    shadow: 'rgba(0, 0, 0, 0.35)'
  },
  spacing: {
    xs: '6px',
    sm: '10px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  radii: {
    sm: '6px',
    md: '10px',
    lg: '14px'
  },
  shadows: {
    sm: '0 2px 10px rgba(0,0,0,0.25)',
    md: '0 6px 24px rgba(0,0,0,0.35)'
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px'
  }
} as const;

export type AppTheme = typeof theme;

