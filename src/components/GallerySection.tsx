import { Box, Container, Grid, Button, Stack, Typography } from '@mui/material';

import { useState } from 'react';
import { PhotoViewer } from './PhotoViewer';

type GallerySectionProps = {
  images: string[];
};

export const GallerySection = ({ images }: GallerySectionProps) => {
  const [expanded, setExpanded] = useState(false);
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);
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
          {(expanded ? images : images.slice(0, 6)).map((image, index) => (
            <Grid key={image} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                component="button"
                type="button"
                onClick={() => setPhotoIndex(index)}
                aria-label={`Enlarge shop photo ${index + 1}`}
                sx={{
                  p: 0,
                  border: 0,
                  width: '100%',
                  display: 'block',
                  cursor: 'zoom-in',
                  bgcolor: 'transparent',
                }}
              >
                <Box
                  component="img"
                  src={image}
                  loading="lazy"
                  alt={`Frontline Crafted gallery ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: 320,
                    objectFit: 'cover',
                    borderRadius: 1,
                    display: 'block',
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
        {images.length > 6 && (
          <Button
            variant="outlined"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            sx={{ mt: 4 }}
          >
            {expanded ? 'Show fewer photos' : `View all ${images.length} photos`}
          </Button>
        )}
        <PhotoViewer
          images={images}
          index={photoIndex}
          onChange={setPhotoIndex}
          title="From the shop"
        />
      </Container>
    </Box>
  );
};
