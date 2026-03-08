import { useState } from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import type { Product } from '../types';

type ProductsSectionProps = {
    products: Product[];
};

export const ProductsSection = ({ products }: ProductsSectionProps) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    return (
        <Box
            id="pieces"
            component="section"
            sx={{
                borderBottom: '1px solid',
                borderColor: 'divider',
                background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(181, 148, 105, 0.06) 100%)',
            }}>
            <Container maxWidth="lg" sx={{ py: { xs: 9, md: 12 } }}>
                <Stack
                    spacing={2}
                    sx={{
                        mb: { xs: 5, md: 6 },
                        maxWidth: 760,
                    }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: 'primary.main',
                            letterSpacing: '0.28em',
                            fontWeight: 700,
                        }}>
                        Handcrafted Furniture
                                      </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2rem', md: '2.9rem' },
                            lineHeight: 1.1,
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                        }}>
                        Featured Pieces
                    </Typography>

                    <Typography
                        sx={{
                            maxWidth: 700,
                            color: 'text.secondary',
                            lineHeight: 1.8,
                            fontSize: { xs: '1rem', md: '1.05rem' },
                        }}>
                        Browse current builds and open each piece to view more photos, details, and custom order options.                    </Typography>
                </Stack>

                <Grid container spacing={{ xs: 3, md: 4 }}>
                    {products.map((product) => (
                        <Grid key={product.title} size={{ xs: 12, sm: 6, md: 4 }}>
                            <ProductCard product={product} onSelect={setSelectedProduct} />
                        </Grid>
                    ))}
                </Grid>

                <ProductModal
                    open={!!selectedProduct}
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            </Container>
        </Box>
    );
};