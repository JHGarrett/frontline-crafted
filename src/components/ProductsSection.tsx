import { useState } from 'react';
import { Box, Button, Container, Grid, Chip, Stack, Typography } from '@mui/material';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import type { Product } from '../types';

type ProductsSectionProps = {
  products: Product[];
  onInquire?: (title: string) => void;
};

export const ProductsSection = ({ products, onInquire }: ProductsSectionProps) => {
  const [category, setCategory] = useState('All pieces');
  const categories = [
    'All pieces',
    ...new Set(products.map((product) => product.category ?? 'Other')),
  ];
  const visibleProducts =
    category === 'All pieces'
      ? products
      : products.filter((product) => (product.category ?? 'Other') === category);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <Box
      id="pieces"
      component="section"
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
        background:
          'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(181, 148, 105, 0.06) 100%)',
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 9, md: 12 } }}>
        <Stack
          spacing={2}
          sx={{
            mb: { xs: 5, md: 6 },
            maxWidth: 760,
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              letterSpacing: '0.28em',
              fontWeight: 700,
            }}
          >
            Original designs. Made for you.
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.9rem' },
              lineHeight: 1.1,
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            The collection
          </Typography>

          <Typography
            sx={{
              maxWidth: 700,
              color: 'text.secondary',
              lineHeight: 1.8,
              fontSize: { xs: '1rem', md: '1.05rem' },
            }}
          >
            Find a piece that speaks to you. Explore its details, then make it your own with custom
            dimensions, materials, and finishes.
          </Typography>
        </Stack>

        <Stack
          direction="row"
          useFlexGap
          flexWrap="wrap"
          spacing={1}
          sx={{ mb: 4 }}
          aria-label="Filter furniture collection"
        >
          {categories.map((item) => (
            <Chip
              key={item}
              label={item}
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              color={category === item ? 'primary' : 'default'}
              variant={category === item ? 'filled' : 'outlined'}
            />
          ))}
        </Stack>
        <Typography role="status" sx={{ mb: 2, color: 'text.secondary', fontSize: '0.85rem' }}>
          {visibleProducts.length} pieces
        </Typography>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {visibleProducts.map((product) => (
            <Grid key={product.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <ProductCard product={product} onSelect={setSelectedProduct} />
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: { xs: 5, md: 6 },
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper',
            textAlign: 'center',
          }}
        >
          <Stack spacing={2} alignItems="center">
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Have something else in mind?
            </Typography>

            <Typography
              sx={{
                maxWidth: 680,
                color: 'text.secondary',
                lineHeight: 1.8,
              }}
            >
              Start with an original idea or adapt a design from the collection. Let’s build
              something around your space.
            </Typography>

            <Button component="a" href="#contact" variant="contained" size="large">
              Discuss a custom build
            </Button>
          </Stack>
        </Box>

        <ProductModal
          open={!!selectedProduct}
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onInquire={onInquire}
        />
      </Container>
    </Box>
  );
};
