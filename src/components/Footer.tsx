import { Box, Container, Stack, Typography } from '@mui/material';

type FooterProps = {
    year: number;
};

export const Footer = ({ year }: FooterProps) => {
    return (
        <Box component="footer" sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5} justifyContent="space-between">
                    <Typography variant="body2" color="text.secondary">
                        © {year} Frontline Crafted. All rights reserved.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Veteran Built • Crafted With Honor
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
};