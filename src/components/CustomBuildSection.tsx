import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';

const steps = [
  [
    'Tell me about your space',
    'Start with a design from the collection or share a new idea. Bring your dimensions, inspiration, and how you want the piece to work.',
  ],
  [
    'Make it your own',
    'We’ll work through proportions, materials, finishes, and storage. Your quote will confirm the details, price, and estimated timeline.',
  ],
  [
    'From my shop to your home',
    'I build your piece one at a time. When it’s ready, we’ll arrange pickup in the Poolville / Weatherford area or discuss delivery.',
  ],
];
export const CustomBuildSection = () => (
  <Box component="section" id="custom" sx={{ bgcolor: '#eae4d9', py: { xs: 8, md: 12 } }}>
    <Container maxWidth="lg">
      <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em' }}>
        Made to order
      </Typography>
      <Typography
        variant="h2"
        sx={{ mt: 2, fontSize: { xs: '2.5rem', md: '3.5rem' }, maxWidth: 650 }}
      >
        Your space. Your style.
        <br />A piece made for both.
      </Typography>
      <Grid container spacing={5} sx={{ mt: 3 }}>
        {steps.map(([title, body], index) => (
          <Grid key={title} size={{ xs: 12, md: 4 }}>
            <Typography sx={{ color: 'primary.main', mb: 2, fontSize: '0.85rem' }}>
              0{index + 1}
            </Typography>
            <Typography variant="h5" sx={{ mb: 2 }}>
              {title}
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{body}</Typography>
          </Grid>
        ))}
      </Grid>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 5 }}>
        <Button href="#contact" variant="contained">
          Let’s talk about your build
        </Button>
      </Stack>
    </Container>
  </Box>
);
