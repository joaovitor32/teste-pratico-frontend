'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0500FF',
      light: '#E1E6FF',
    },
    secondary: {
      main: '#000000',
      light: '#B8B8B8',
    },
    background: {
      default: '#F0F0F0',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B8B8B8',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontFamily: 'Helvetica',
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '24px',
    },
    h2: {
      fontFamily: 'Helvetica',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '20px',
    },
    h3: {
      fontFamily: 'Helvetica',
      fontWeight: 400,
      fontSize: '16px',
    },
  },
  spacing: (factor) => `${factor * 8}px`,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#F0F0F0',
          overflowX: 'hidden'
        },
      },
    },
  },
});

export default theme;
