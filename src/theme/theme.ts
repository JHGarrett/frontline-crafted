import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#d4a373',
        },
        background: {
            default: '#0f0d0b',
            paper: '#181411',
        },
        text: {
            primary: '#f5f0ea',
            secondary: '#b8aea3',
        },
    },

    shape: {
        borderRadius: 20,
    },

    typography: {
        fontFamily: 'Inter, Arial, sans-serif',
        h1: {
            fontWeight: 800,
            textTransform: 'uppercase',
        },
        h2: {
            fontWeight: 700,
            textTransform: 'uppercase',
        },
        button: {
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
        },
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    scrollBehavior: 'smooth',
                },
                section: {
                    scrollMarginTop: '100px',
                },
            },
        },
    },
});