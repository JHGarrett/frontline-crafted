import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import type { ValueProp } from '../types';

type AboutSectionProps = {
  description: string;
  values: ValueProp[];
};

export const AboutSection = ({ description, values }: AboutSectionProps) => {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 9, md: 12 } }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                letterSpacing: '0.3em',
                fontWeight: 700,
              }}
            >
              The Frontline Crafted approach
            </Typography>

            <Typography
              variant="h2"
              sx={{
                mt: 2,
                fontSize: { xs: '2rem', md: '2.75rem' },
                lineHeight: 1.1,
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Built with discipline. Crafted with purpose.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.9,
                maxWidth: 760,
              }}
            >
              {description}
            </Typography>

            <Grid container spacing={3} sx={{ mt: 4 }}>
              {values.map((value) => (
                <Grid key={value.title} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      bgcolor: 'background.default',
                      border: '1px solid',
                      borderColor: 'divider',
                      boxShadow: 'none',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3.5 }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 3,
                          borderRadius: 999,
                          bgcolor: 'primary.main',
                          mb: 2.5,
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: 'text.primary',
                        }}
                      >
                        {value.title}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 2,
                          color: 'text.secondary',
                          lineHeight: 1.8,
                          fontSize: '0.95rem',
                        }}
                      >
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
