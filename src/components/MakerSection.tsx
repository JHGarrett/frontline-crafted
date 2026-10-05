import { Box, Button, Container, Grid, Typography } from '@mui/material';
import afghanistanMe from '../assets/images/Afghanistan-Me.jpg';

export const MakerSection = () => {
  return (
    <Box
      id="maker"
      component="section"
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 9, md: 12 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                borderRadius: 1,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: '#111',
                overflow: 'hidden',
                boxShadow: 'none',
              }}
            >
              <Box
                component="img"
                src={afghanistanMe}
                loading="lazy"
                alt="John during military service in Afghanistan"
                sx={{
                  width: '100%',
                  height: { xs: 420, md: 520 },
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Box>
            <Typography sx={{ mt: 1.5, color: 'text.secondary', fontSize: '0.85rem' }}>
              John during his military service in Afghanistan.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.3em' }}>
              Meet the maker
            </Typography>

            <Typography variant="h2" sx={{ mt: 2, fontSize: { xs: '2rem', md: '2.75rem' } }}>
              Built with purpose. Crafted by hand.
            </Typography>

            <Typography
              sx={{
                mt: 3,
                color: 'text.secondary',
                lineHeight: 1.9,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              I’m John, the maker behind Frontline Crafted in Parker County, Texas. I spent nine
              years in the infantry, with deployments to Iraq and Afghanistan. That experience
              shaped how I work: pay attention to the details, follow through, and take pride in the
              finished piece.
            </Typography>

            <Typography
              sx={{
                mt: 3,
                color: 'text.secondary',
                lineHeight: 1.9,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              After military service, woodworking gave me a way to slow down, focus, and create
              something useful with my hands. Turning raw materials into furniture brought a sense
              of purpose that became Frontline Crafted.
            </Typography>

            <Typography
              sx={{
                mt: 3,
                color: 'text.secondary',
                lineHeight: 1.9,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              Today, I build each piece one at a time, from the designs in my collection to custom
              projects inspired by your ideas. We’ll work through the proportions, materials, and
              details together to create something that fits your home.
            </Typography>
            <Button href="#contact" variant="contained" sx={{ mt: 4 }}>
              Tell me about your idea
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
