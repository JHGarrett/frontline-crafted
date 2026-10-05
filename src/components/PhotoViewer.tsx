import { Dialog, Box, IconButton, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type Props = {
  images: string[];
  index: number | null;
  onChange: (index: number | null) => void;
  title: string;
};
export const PhotoViewer = ({ images, index, onChange, title }: Props) => {
  const move = (direction: number) =>
    onChange(((index ?? 0) + direction + images.length) % images.length);
  return (
    <Dialog
      open={index !== null}
      onClose={() => onChange(null)}
      maxWidth="xl"
      fullWidth
      aria-label={`${title} enlarged photo`}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          move(-1);
        }
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          move(1);
        }
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 2, py: 1 }}
      >
        <Typography>
          {title} · {(index ?? 0) + 1} / {images.length}
        </Typography>
        <IconButton aria-label="Close enlarged photo" onClick={() => onChange(null)}>
          <CloseIcon />
        </IconButton>
      </Stack>
      {index !== null && (
        <Box
          component="img"
          src={images[index]}
          alt={`${title}, photo ${index + 1}`}
          sx={{ width: '100%', height: '70dvh', objectFit: 'contain' }}
        />
      )}
      <Stack direction="row" justifyContent="center" spacing={4} sx={{ py: 1 }}>
        <IconButton aria-label="Previous photo" onClick={() => move(-1)}>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton aria-label="Next photo" onClick={() => move(1)}>
          <ChevronRightIcon />
        </IconButton>
      </Stack>
    </Dialog>
  );
};
