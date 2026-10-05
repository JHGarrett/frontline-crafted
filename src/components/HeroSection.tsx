import { useRef, useState } from 'react';
import { Box, Button, Container, Stack, Typography, useMediaQuery } from '@mui/material';

type HeroSectionProps = {
  title: string;
  description: string;
  image: string;
  video?: string;
  featuredName: string;
  featuredType: string;
};

export const HeroSection = ({
  title,
  description,
  image,
  video,
  featuredName,
  featuredType,
}: HeroSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  return (
    <Box component="section">
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 7 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'minmax(0, 0.85fr) minmax(0, 1.4fr)' },
            gap: { xs: 4, md: 7 },
            alignItems: 'center',
          }}
        >
          <Box sx={{ py: { md: 4 }, order: { xs: 2, md: 1 } }}>
            <Typography variant="overline" sx={{ letterSpacing: '0.2em', color: 'primary.main' }}>
              Handcrafted in Parker County, Texas
            </Typography>
            <Typography
              variant="h1"
              sx={{
                mt: 2,
                fontSize: { xs: '3.1rem', md: '4.8rem' },
                lineHeight: 1.04,
                maxWidth: 560,
              }}
            >
              {title}
            </Typography>
            <Typography sx={{ mt: 3, maxWidth: 460, color: 'text.secondary', lineHeight: 1.85 }}>
              {description}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
              <Button href="#pieces" variant="contained">
                Explore the collection
              </Button>
              <Button href="#custom" variant="outlined">
                Create something custom
              </Button>
            </Stack>
            <Typography
              sx={{ mt: 4, color: 'text.secondary', fontSize: '0.8rem', letterSpacing: '0.08em' }}
            >
              VETERAN OWNED · MADE TO ORDER
            </Typography>
          </Box>
          <Box sx={{ order: { xs: 1, md: 2 } }}>
            {video ? (
              <Box
                component="video"
                ref={videoRef}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                src={video}
                poster={image}
                autoPlay={!reducedMotion}
                muted
                loop
                playsInline
                controls={reducedMotion}
                aria-label={`${featuredName} ${featuredType} showcase`}
                sx={{ width: '100%', aspectRatio: '16 / 9', display: 'block', objectFit: 'cover' }}
              />
            ) : (
              <Box
                component="img"
                src={image}
                alt={`${featuredName} by Frontline Crafted`}
                sx={{ width: '100%', display: 'block' }}
              />
            )}
            {video && (
              <Button
                variant="text"
                size="small"
                aria-label={playing ? 'Pause furniture animation' : 'Play furniture animation'}
                onClick={() => {
                  if (videoRef.current?.paused) {
                    void videoRef.current.play().catch(() => setPlaying(false));
                  } else {
                    videoRef.current?.pause();
                  }
                }}
                sx={{ mt: 1 }}
              >
                {playing ? 'Pause animation' : 'Play animation'}
              </Button>
            )}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={0.5}
              justifyContent="space-between"
              sx={{ mt: 1.5, borderBottom: '1px solid', borderColor: 'divider', pb: 1.5 }}
            >
              <Typography sx={{ fontSize: '0.85rem' }}>{featuredName}</Typography>
              <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>
                {featuredType}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          borderTop: '1px solid',
          borderBottom: '1px solid',
          borderColor: 'divider',
          py: 2,
          px: 3,
        }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 5 }}
          justifyContent="center"
          textAlign="center"
        >
          {[
            'Built around your space',
            'Handcrafted one at a time',
            'Local pickup & delivery options',
          ].map((text) => (
            <Typography key={text} sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>
              {text}
            </Typography>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
