import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { PhotoViewer } from './PhotoViewer';
import type { Product } from '../types';

type ProductModalProps = {
  open: boolean;
  product: Product | null;
  onClose: () => void;
  onInquire?: (title: string) => void;
};

export const ProductModal = ({ open, product, onClose, onInquire }: ProductModalProps) => {
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [selectedImage, setSelectedImage] = useState('');
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);

  useEffect(() => {
    if (product?.images?.length) {
      setSelectedImage(product.video ?? product.images[0]);
      setPhotoIndex(null);
    }
  }, [product, open]);

  if (!product) {
    return null;
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      aria-labelledby="product-modal-title"
      PaperProps={{
        sx: {
          bgcolor: 'background.paper',
          borderRadius: 1,
          border: '1px solid',
          borderColor: 'divider',
          overflow: 'hidden',
          boxShadow: '0 24px 80px rgba(0,0,0,0.16)',
          backgroundImage:
            'linear-gradient(180deg, rgba(181, 148, 105, 0.05) 0%, rgba(255,255,255,0) 22%)',
        },
      }}
    >
      <DialogContent sx={{ p: { xs: 2, md: 4 }, position: 'relative' }}>
        <IconButton
          onClick={onClose}
          aria-label="Close product details"
          sx={{
            position: 'absolute',
            top: 14,
            right: 14,
            color: 'text.secondary',
            bgcolor: 'rgba(255,255,255,0.9)',
            border: '1px solid',
            borderColor: 'divider',
            zIndex: 2,
            '&:hover': {
              bgcolor: 'background.paper',
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'minmax(0, 1fr)',
              md: 'minmax(0, 1.08fr) minmax(0, 0.92fr)',
            },
            gap: { xs: 3, md: 5 },
            alignItems: 'start',
          }}
        >
          <Box>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 1,
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.default',
              }}
            >
              {product.badge ? (
                <Chip
                  label={product.badge}
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    zIndex: 1,
                    fontWeight: 700,
                    bgcolor: 'rgba(17, 17, 17, 0.78)',
                    color: 'common.white',
                    backdropFilter: 'blur(6px)',
                  }}
                />
              ) : null}

              {product.video && selectedImage === product.video ? (
                <Box
                  component="video"
                  src={product.video}
                  poster={product.images[0]}
                  autoPlay={!reducedMotion}
                  muted
                  loop
                  playsInline
                  controls
                  aria-label={`${product.title} showcase`}
                  sx={{
                    width: '100%',
                    height: { xs: 320, md: 540 },
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              ) : (
                <Box
                  component="img"
                  src={selectedImage}
                  alt={`${product.title} — ${product.eyebrow ?? 'handcrafted furniture'}`}
                  onClick={() => setPhotoIndex(product.images.indexOf(selectedImage))}
                  sx={{
                    cursor: 'zoom-in',
                    width: '100%',
                    height: { xs: 320, md: 540 },
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              )}
            </Box>

            {selectedImage !== product.video && (
              <Button onClick={() => setPhotoIndex(product.images.indexOf(selectedImage))}>
                Enlarge photo
              </Button>
            )}
            {(product.video || product.images.length > 1) && (
              <Stack
                direction="row"
                spacing={1.5}
                sx={{
                  mt: 2,
                  flexWrap: 'wrap',
                }}
              >
                {product.video && (
                  <Button
                    onClick={() => setSelectedImage(product.video!)}
                    aria-pressed={selectedImage === product.video}
                    variant="outlined"
                  >
                    Watch showcase
                  </Button>
                )}
                {product.images.map((image, index) => (
                  <Box
                    key={image}
                    component="button"
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    aria-label={`View ${product.title} photo ${index + 1}`}
                    aria-pressed={selectedImage === image}
                    sx={{
                      p: 0,
                      border: 'none',
                      background: 'transparent',
                      cursor: 'pointer',
                      lineHeight: 0,
                      borderRadius: 2.5,
                    }}
                  >
                    <Box
                      component="img"
                      src={image}
                      alt={`${product.title} — ${product.eyebrow ?? 'handcrafted furniture'}`}
                      sx={{
                        width: 88,
                        height: 88,
                        objectFit: 'contain',
                        borderRadius: 2.5,
                        border: '2px solid',
                        borderColor: selectedImage === image ? 'primary.main' : 'divider',
                        opacity: selectedImage === image ? 1 : 0.78,
                        transform: selectedImage === image ? 'scale(1)' : 'scale(0.98)',
                        transition: 'all 0.2s ease',
                        display: 'block',
                        '&:hover': {
                          opacity: 1,
                          borderColor: 'primary.main',
                        },
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            )}
          </Box>

          <Box sx={{ pr: { md: 2 }, pt: { xs: 0, md: 1 } }}>
            <Stack spacing={2}>
              <Box>
                <Typography
                  variant="overline"
                  sx={{
                    color: 'primary.main',
                    letterSpacing: '0.28em',
                    fontWeight: 700,
                  }}
                >
                  Frontline Crafted
                </Typography>

                {product.eyebrow ? (
                  <Typography
                    sx={{
                      mt: 1,
                      color: 'text.secondary',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {product.eyebrow}
                  </Typography>
                ) : null}

                <Typography
                  id="product-modal-title"
                  variant="h3"
                  sx={{
                    mt: 1.25,
                    fontSize: { xs: '2rem', md: '2.6rem' },
                    lineHeight: 1.08,
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {product.title}
                </Typography>
              </Box>

              {product.priceLabel ? (
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'primary.main',
                  }}
                >
                  {product.priceLabel}
                </Typography>
              ) : null}

              <Box
                sx={{
                  pt: 2,
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  alignItems: 'center',
                }}
              >
                <Button
                  href="#contact"
                  variant="contained"
                  size="large"
                  onClick={() => {
                    onInquire?.(product.title);
                    onClose();
                  }}
                  sx={{
                    px: 4,
                    minWidth: 220,
                    borderRadius: 999,
                    textTransform: 'none',
                    fontWeight: 700,
                  }}
                >
                  Inquire About {product.title}
                </Button>

                <Typography
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.95rem',
                  }}
                >
                  Custom builds and finish options available.
                </Typography>
              </Box>
              {!!product.details?.length && (
                <Stack spacing={1.25} sx={{ pt: 1 }}>
                  {product.details.map((detail) => (
                    <Box
                      key={detail}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 1.25,
                      }}
                    >
                      <Box
                        sx={{
                          width: 7,
                          height: 7,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                          mt: '0.65rem',
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.8,
                        }}
                      >
                        {detail}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              )}

              <Typography
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.9,
                  fontSize: '1rem',
                }}
              >
                {product.description}
              </Typography>

              {product.sections?.map((section) => (
                <Box key={section.title}>
                  <Typography variant="h6">{section.title}</Typography>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mt: 1 }}>
                    {section.body}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>
      </DialogContent>
      <PhotoViewer
        images={product.images}
        index={photoIndex}
        onChange={setPhotoIndex}
        title={product.title}
      />
    </Dialog>
  );
};
