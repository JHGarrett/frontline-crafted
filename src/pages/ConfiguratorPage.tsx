import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { ConfiguratorWizard } from '../components/ConfiguratorWizard.tsx';

export const ConfiguratorPage = () => {
  return (
    <Box component="main" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Stack spacing={3}>
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              letterSpacing: '0.2em',
            }}
          >
            Frontline Crafted Configurator
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.2rem', md: '3.25rem' },
              lineHeight: 1.1,
            }}
          >
            Build your custom project estimate
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 720,
              fontSize: { xs: '1rem', md: '1.1rem' },
            }}
          >
            Enter your dimensions, get a rough estimate, and send your build request when
            you&apos;re ready to move forward.
          </Typography>

          <Box
            sx={(theme) => ({
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              border: `1px solid ${theme.palette.divider}`,
              backgroundColor: 'background.paper',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            })}
          >
            <ConfiguratorWizard />
          </Box>

          <Box>
            <Button component={RouterLink} to="/" variant="text">
              Back to home
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
