import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CssBaseline, ThemeProvider } from '@mui/material';
import App from './App';
import { theme } from './theme/theme';

export function render(url: string) {
  return renderToString(
    <HelmetProvider>
      <StaticRouter location={url}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StaticRouter>
    </HelmetProvider>,
  );
}
