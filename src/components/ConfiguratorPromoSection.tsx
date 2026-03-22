import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const ConfiguratorPromoSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider',
        background: 'rgba(255,255,255,0.02)',
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={3} textAlign="center" alignItems="center">
          <Typography variant="overline" sx={{ letterSpacing: '0.2em', color: 'text.secondary' }}>
            Custom Builds
          </Typography>

          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            Looking for a custom build?
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 720,
            }}
          >
            Try the configurator to get a rough idea of pricing for your project. It’s a quick way
            to explore sizes, options, and estimated cost before reaching out for a custom quote.
          </Typography>

          <Button component={RouterLink} to="/configurator" variant="contained" size="large">
            Get a Rough Estimate
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};
