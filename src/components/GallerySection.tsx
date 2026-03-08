import { Box, Container, Grid, Stack, Typography } from '@mui/material';

type GallerySectionProps = {
  images: string[];
};

export const GallerySection = ({ images }: GallerySectionProps) => {
  return (
    <Box
      id="gallery"
      component="section"
      sx={{ borderBottom: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 9, md: 12 } }}>
        <Stack spacing={2} sx={{ mb: 5 }}>
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.3em' }}>
            Gallery
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' } }}>
            From the shop
          </Typography>
        </Stack>

        <Grid container spacing={2}>
          {images.map((image, index) => (
            <Grid key={image} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                component="img"
                src={image}
                alt={`Frontline Crafted gallery ${index + 1}`}
                sx={{
                  width: '100%',
                  height: 320,
                  objectFit: 'cover',
                  borderRadius: 5,
                  display: 'block',
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
