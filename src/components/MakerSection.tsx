import { Box, Container, Grid, Typography } from '@mui/material';
import cibBadge from '../assets/images/Combat_Infantry_Badge.svg.png';

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
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 5,
                borderRadius: 6,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: '#111',
              }}
            >
              <Box
                component="img"
                src={cibBadge}
                alt="Combat Infantryman Badge"
                sx={{
                  maxWidth: 160,
                  height: 'auto',
                  display: 'block',
                }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.3em' }}>
              The Maker
            </Typography>

            <Typography variant="h2" sx={{ mt: 2, fontSize: { xs: '2rem', md: '2.75rem' } }}>
              Built with the same discipline I learned in the infantry.
            </Typography>

            <Typography
              sx={{
                mt: 3,
                color: 'text.secondary',
                lineHeight: 1.9,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              Frontline Crafted was born out of my time after military service. I served 9 years in
              the infantry, including multiple deployments to Iraq and Afghanistan. That experience
              shaped the way I approach everything I do: with discipline, attention to detail, and
              pride in the finished work.
            </Typography>

            <Typography
              sx={{
                mt: 3,
                color: 'text.secondary',
                lineHeight: 1.9,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              Woodworking became more than just a hobby for me. It became a way to slow down, focus,
              and work with my hands in a meaningful way. In many ways, it is a form of therapy.
              Taking raw materials and turning them into something strong, useful, and lasting
              brings a sense of purpose that means a lot to me.
            </Typography>

            <Typography
              sx={{
                mt: 3,
                color: 'text.secondary',
                lineHeight: 1.9,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              Every piece I build carries the same mindset I learned in the military: do the job
              right, build it to last, and take pride in the craftsmanship. Frontline Crafted is my
              way of bringing that mindset into every chair, planter, and custom build that leaves
              the shop.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
