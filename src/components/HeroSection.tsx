import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

type HeroSectionProps = {
  title: string;
  description: string;
  image: string;
};

export const HeroSection = ({ title, description, image }: HeroSectionProps) => {
  return (
    <Box
      component="section"
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
        background: 'radial-gradient(circle at top, rgba(212,163,115,0.18), transparent 30%)',
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.3em' }}>
              Veteran-Owned Woodworking
            </Typography>

            <Typography
              variant="h1"
              sx={{
                mt: 2,
                maxWidth: 720,
                fontSize: { xs: '3rem', md: '5rem' },
                lineHeight: 1.05,
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                mt: 3,
                maxWidth: 640,
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.8,
                whiteSpace: 'pre-line',
              }}
            >
              {description}
            </Typography>

            <Typography
              sx={{
                mt: 2,
                fontWeight: 600,
                color: 'text.primary',
              }}
            >
              🇺🇸 Veteran-Owned & Operated | Handcrafted in Texas
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
              <Button href="#pieces" variant="contained" size="large" sx={{ px: 4, py: 1.5 }}>
                View Available Pieces
              </Button>

              <Button
                component={RouterLink}
                to="/configurator"
                variant="outlined"
                size="large"
                sx={{ px: 4, py: 1.5 }}
              >
                Get a Price Estimate
              </Button>

              <Button
                href="#contact"
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderColor: 'rgba(255,255,255,0.2)',
                  color: 'text.primary',
                }}
              >
                Request a Custom Build
              </Button>
            </Stack>

            <Typography
              sx={{
                mt: 2,
                color: 'text.secondary',
                fontSize: '0.95rem',
              }}
            >
              Prefer to talk through your project?{' '}
              <Box
                component="a"
                href="sms:8173309747"
                sx={{
                  color: 'text.primary',
                  fontWeight: 600,
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                Text (817) 330-9747
              </Box>
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component="img"
              src={image}
              loading="eager"
              alt="Handcrafted outdoor furniture"
              sx={{
                width: '100%',
                height: { xs: 380, md: 520 },
                objectFit: 'cover',
                objectPosition: '85% center',
                borderRadius: 6,
                display: 'block',
                boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
