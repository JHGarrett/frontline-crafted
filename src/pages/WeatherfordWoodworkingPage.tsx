import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

export const WeatherfordWoodworkingPage = () => {
  return (
    <Box component="main">
      <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>
        <Stack spacing={4}>
          <Helmet>
            <title>Custom Furniture in Weatherford TX | Frontline Crafted</title>
            <meta
              name="description"
              content="Veteran-owned Frontline Crafted builds made-to-order dining tables, chairs, bedroom furniture, desks, and storage pieces for Weatherford and Parker County, TX."
            />
            <link
              rel="canonical"
              href="https://frontlinecrafted.com/weatherford-tx-custom-woodworking"
            />
            <meta
              property="og:url"
              content="https://frontlinecrafted.com/weatherford-tx-custom-woodworking"
            />
            <meta
              property="og:title"
              content="Custom Furniture in Weatherford TX | Frontline Crafted"
            />
            <meta
              property="og:description"
              content="Veteran-owned Frontline Crafted builds made-to-order dining tables, chairs, bedroom furniture, desks, and storage pieces for Weatherford and Parker County, TX."
            />
            <meta
              name="twitter:title"
              content="Custom Furniture in Weatherford TX | Frontline Crafted"
            />
            <meta
              name="twitter:description"
              content="Veteran-owned Frontline Crafted builds made-to-order dining tables, chairs, bedroom furniture, desks, and storage pieces for Weatherford and Parker County, TX."
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
              Custom Furniture in Weatherford, TX
            </Typography>
          </Box>

          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.05rem' }}>
            Frontline Crafted is a veteran-owned woodworking business serving Weatherford, Parker
            County, and surrounding areas with handcrafted furniture and custom builds designed
            around your home.
          </Typography>

          <Typography variant="body1" color="text.secondary">
            We build practical, durable, and attractive pieces designed for everyday use. Explore
            original designs or bring your sketches, inspiration photos, or ideas. We’ll plan the
            dimensions, materials, and details together to create furniture that fits your space.
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
                • Dining tables, chairs, and benches
              </Typography>
              <Typography variant="body1" color="text.secondary">
                • Lounge chairs, coffee tables, and record player stands
              </Typography>
              <Typography variant="body1" color="text.secondary">
                • Dressers, nightstands, and bedroom furniture
              </Typography>
              <Typography variant="body1" color="text.secondary">
                • Desks, console tables, wall organizers, and custom storage
              </Typography>
            </Stack>
          </Box>

          <Typography color="text.secondary">
            Pickup is available in the Poolville / Weatherford area, with delivery depending on
            location. Estimated build time is 3–4 weeks, confirmed with your quote.
          </Typography>
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
