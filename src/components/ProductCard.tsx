import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import type { Product } from '../types';

type ProductCardProps = {
  product: Product;
  onSelect: (product: Product) => void;
};

export const ProductCard = ({ product, onSelect }: ProductCardProps) => {
  return (
    <Card
      sx={{
        height: '100%',
        borderRadius: 3,
        overflow: 'hidden',
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 18px 40px rgba(0,0,0,0.08)',
          borderColor: 'rgba(0,0,0,0.12)',
        },
        '&:hover img': {
          transform: 'scale(1.04)',
        },
      }}
    >
      <CardActionArea
        onClick={() => onSelect(product)}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <CardMedia
            component="img"
            image={product.images[0]}
            alt={product.title}
            sx={{
              height: 280,
              width: '100%',
              objectFit: 'cover',
              transition: 'transform 0.35s ease',
            }}
          />

          {product.badge ? (
            <Chip
              label={product.badge}
              size="small"
              sx={{
                position: 'absolute',
                top: 16,
                left: 16,
                fontWeight: 700,
                bgcolor: 'rgba(17, 17, 17, 0.78)',
                color: 'common.white',
                backdropFilter: 'blur(6px)',
              }}
            />
          ) : null}
        </Box>

        <CardContent
          sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
          }}
        >
          <Stack spacing={1.5} sx={{ flexGrow: 1 }}>
            {product.eyebrow ? (
              <Typography
                sx={{
                  color: 'primary.main',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                {product.eyebrow}
              </Typography>
            ) : null}

            <Typography
              variant="h5"
              sx={{
                fontSize: '1.3rem',
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              {product.title}
            </Typography>

            <Typography
              sx={{
                color: 'text.secondary',
                lineHeight: 1.75,
                flexGrow: 1,
              }}
            >
              {product.description}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            sx={{ mt: 3 }}
          >
            <Typography
              sx={{
                color: 'text.primary',
                fontWeight: 600,
                fontSize: '0.95rem',
              }}
            >
              {product.priceLabel}
            </Typography>

            <Typography
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontSize: '0.78rem',
              }}
            >
              View Details
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
