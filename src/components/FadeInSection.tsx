import type { PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';

interface FadeInSectionProps extends PropsWithChildren {
  delay?: number;
}

export const FadeInSection = ({ children, delay = 0 }: FadeInSectionProps) => {
  const reducedMotion = useReducedMotion();
  return (
    <Box
      component={motion.div}
      initial={reducedMotion ? false : { y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </Box>
  );
};
