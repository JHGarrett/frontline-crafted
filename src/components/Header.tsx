import {
  AppBar,
  Box,
  Container,
  Link,
  Stack,
  Toolbar,
  Typography,
  IconButton,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logo from '../assets/logos/frontline-crafted-logo.jpg';

type NavItem = {
  label: string;
  href: string;
};

type HeaderProps = {
  navItems: NavItem[];
};

export const Header = ({ navItems }: HeaderProps) => {
  const location = useLocation();

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
        backdropFilter: 'blur(12px)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Frontline Crafted"
                sx={{
                  height: 48,
                  width: 'auto',
                  display: 'block',
                }}
              />
            </Box>

            <Box>
              <Typography
                variant="caption"
                sx={{ letterSpacing: '0.22em', color: 'text.secondary' }}
              >
                Veteran Built • Crafted With Honor
              </Typography>
            </Box>
          </Box>

          <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => {
              const isAnchorLink = item.href.startsWith('#');

              if (isAnchorLink) {
                const anchorHref = location.pathname === '/' ? item.href : `/${item.href}`;

                return (
                  <Link
                    key={item.label}
                    href={anchorHref}
                    underline="none"
                    color="text.secondary"
                    sx={{
                      fontWeight: 500,
                      transition: 'color 0.2s ease',
                      '&:hover': { color: 'text.primary' },
                    }}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.label}
                  component={RouterLink}
                  to={item.href}
                  underline="none"
                  color="text.secondary"
                  sx={{
                    fontWeight: 500,
                    transition: 'color 0.2s ease',
                    '&:hover': { color: 'text.primary' },
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton
              component="a"
              href="https://www.facebook.com/frontlinecrafted"
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              <FacebookIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.instagram.com/frontlinecrafted"
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              <InstagramIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
