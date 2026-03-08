import type {PropsWithChildren} from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

interface FadeInSectionProps extends PropsWithChildren {
    delay?: number;
}

export const FadeInSection = ({ children, delay = 0 }: FadeInSectionProps) => {
    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay, ease: 'easeOut' }}
        >
            {children}
        </Box>
    );
};