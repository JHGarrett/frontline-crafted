import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';

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
            }}>
            <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
                <Grid container spacing={6} alignItems="center">
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.3em' }}>
                            Veteran-Owned Woodworking
                        </Typography>

                        <Typography variant="h1" sx={{ mt: 2, fontSize: { xs: '3rem', md: '5rem' }, lineHeight: 1.05 }}>
                            {title}
                        </Typography>

                        <Typography
                            sx={{
                                mt: 3,
                                maxWidth: 640,
                                color: 'text.secondary',
                                fontSize: { xs: '1rem', md: '1.125rem' },
                                lineHeight: 1.8,
                            }}>
                            {description}
                        </Typography>

                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
                            <Button href="#pieces" variant="contained" size="large" sx={{ px: 4, py: 1.5 }}>
                                View Available Pieces
                            </Button>
                            <Button
                                href="#contact"
                                variant="outlined"
                                size="large"
                                sx={{ px: 4, py: 1.5, borderColor: 'rgba(255,255,255,0.2)', color: 'text.primary' }}>
                                Request a Custom Build
                            </Button>
                        </Stack>
                    </Grid>

                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box
                            component="img"
                            src={image}
                            alt="Handcrafted outdoor furniture"
                            sx={{
                                width: '100%',
                                height: { xs: 380, md: 520 },
                                objectFit: 'cover',
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