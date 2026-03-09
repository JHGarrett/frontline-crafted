import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

export const WeatherfordWoodworkingPage = () => {
  return (
    <Box component="main">
      <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>
        <Stack spacing={4}>
          <Helmet>
            <title>Custom Woodworking in Weatherford TX | Frontline Crafted</title>
            <meta
              name="description"
              content="Frontline Crafted builds custom woodworking projects in Weatherford, TX including cedar planters, outdoor furniture, and handcrafted patio pieces for Parker County."
            />
          </Helmet>
          <Box>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em' }}>
              Frontline Crafted
            </Typography>

            <Typography
              variant="h1"
              sx={{
                mt: 1,
                fontSize: { xs: '2.5rem', md: '4rem' },
                lineHeight: 1.1,
              }}
            >
              Custom Woodworking in Weatherford, TX
            </Typography>
          </Box>

          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.05rem' }}>
            Frontline Crafted is a veteran-owned woodworking business serving Weatherford, Parker
            County, and surrounding areas with handcrafted furniture, cedar planters, patio pieces,
            and custom-built wood projects.
          </Typography>

          <Typography variant="body1" color="text.secondary">
            We build practical, durable, and attractive pieces designed for everyday use. Whether
            you are looking for outdoor furniture, planter boxes, porch pieces, or a custom project
            built to fit your space, we focus on quality craftsmanship and clean, lasting results.
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Our custom woodworking services are available for customers in Weatherford, Aledo,
            Hudson Oaks, Willow Park, Springtown, Azle, Fort Worth, and nearby Parker County
            communities.
          </Typography>

          <Box>
            <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
              What We Build
            </Typography>

            <Stack spacing={1.5}>
              <Typography variant="body1" color="text.secondary">
                • Cedar planter boxes
              </Typography>
              <Typography variant="body1" color="text.secondary">
                • Patio chairs and outdoor furniture
              </Typography>
              <Typography variant="body1" color="text.secondary">
                • Porch and garden pieces
              </Typography>
              <Typography variant="body1" color="text.secondary">
                • Custom wood builds for home and outdoor spaces
              </Typography>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
              Request a Custom Quote
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Have a project in mind? Reach out to Frontline Crafted to discuss your ideas, sizing,
              wood choices, and build details. We would be glad to help create something custom for
              your space.
            </Typography>

            <Button variant="contained" size="large" href="/#contact">
              Contact Frontline Crafted
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
