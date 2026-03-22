import { useState } from 'react';
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: 0 }}>
              <Box
                component={RouterLink}
                to="/"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  flexShrink: 0,
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

              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
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

              <IconButton
                onClick={() => setMobileMenuOpen(true)}
                color="inherit"
                sx={{ display: { xs: 'inline-flex', md: 'none' } }}
                aria-label="Open navigation menu"
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={mobileMenuOpen} onClose={handleCloseMenu}>
        <Box
          sx={{
            width: 280,
            height: '100%',
            p: 2,
            bgcolor: 'background.default',
            color: 'text.primary',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <IconButton onClick={handleCloseMenu} aria-label="Close navigation menu">
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {navItems.map((item) => {
              const isAnchorLink = item.href.startsWith('#');

              if (isAnchorLink) {
                const anchorHref = location.pathname === '/' ? item.href : `/${item.href}`;

                return (
                  <ListItemButton
                    key={item.label}
                    component="a"
                    href={anchorHref}
                    onClick={handleCloseMenu}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                );
              }

              return (
                <ListItemButton
                  key={item.label}
                  component={RouterLink}
                  to={item.href}
                  onClick={handleCloseMenu}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
