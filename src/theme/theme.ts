import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#795338', contrastText: '#fffaf4' },
    background: { default: '#f7f4ee', paper: '#fffdf9' },
    text: { primary: '#292923', secondary: '#666459' },
    divider: '#ded8cd',
  },
  shape: { borderRadius: 6 },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    h1: { fontFamily: 'Georgia, serif', fontWeight: 400, letterSpacing: '-0.045em' },
    h2: { fontFamily: 'Georgia, serif', fontWeight: 400, letterSpacing: '-0.035em' },
    h3: { fontFamily: 'Georgia, serif', fontWeight: 400 },
    h5: { fontFamily: 'Georgia, serif', fontWeight: 400 },
    button: { fontWeight: 600, textTransform: 'none', letterSpacing: '0.02em' },
  },
  components: {
    MuiButton: {
      styleOverrides: { root: { borderRadius: 2, boxShadow: 'none', padding: '12px 24px' } },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        section: { scrollMarginTop: '100px' },
        '::selection': { background: '#dfc9ac' },
        '@media (prefers-reduced-motion: reduce)': { html: { scrollBehavior: 'auto' } },
      },
    },
  },
});
