import { Box, Container, Link, Stack, Typography } from '@mui/material';

type FooterProps = {
  year: number;
};

export const Footer = ({ year }: FooterProps) => {
  return (
    <Box component="footer" sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Stack spacing={2}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={1.5}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', md: 'center' }}
          >
            <Typography variant="body2" color="text.secondary">
              © {year} Frontline Crafted. All rights reserved.
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Veteran Built • Crafted With Honor
            </Typography>
          </Stack>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 3 }}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
          >
            <Link
              href="/weatherford-tx-custom-woodworking"
              underline="hover"
              color="text.secondary"
              variant="body2"
            >
              Custom Woodworking in Weatherford, TX
            </Link>

            <Link
              href="mailto:john@frontlinecrafted.com"
              underline="hover"
              color="text.secondary"
              variant="body2"
            >
              john@frontlinecrafted.com
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
