import { createTheme } from '@mui/material/styles';

// Color palette definitions
const colorPalette = {
  dark: {
    background: '#1A1A1A',
    primary: '#1A1A1A',
    secondary: '#948979',
    textPrimary: '#DFD0B8',
    textSecondary: '#B0B0B0',
    surface: '#1A1A1A',
    navbar: '#393E46',
    hover: '#393E46',
    hoverBorder: '#948979',
  },
  light: {
    background: '#FDF7E4',
    primary: '#BBAB8C',
    secondary: '#DED0B6',
    textPrimary: '#2C2C2C',
    textSecondary: '#5F6368',
    surface: '#FAEED1',
    navbar: '#BBAB8C',
    hover: '#F8F8F0',
    hoverBorder: '#DED0B6',
  },
};

const createTypography = () => ({
  fontFamily: '"Work Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  h1: { fontFamily: '"Work Sans", sans-serif', fontWeight: 600 },
  h2: { fontFamily: '"Work Sans", sans-serif', fontWeight: 600 },
  h3: { fontFamily: '"Work Sans", sans-serif', fontWeight: 600 },
  h4: { fontFamily: '"Work Sans", sans-serif', fontWeight: 600 },
  h5: { fontFamily: '"Work Sans", sans-serif', fontWeight: 600 },
  h6: { fontFamily: '"Work Sans", sans-serif', fontWeight: 600 },
  body1: { fontFamily: '"Inter", sans-serif' },
  body2: { fontFamily: '"Inter", sans-serif' },
});

const createAccordionStyles = (mode: 'light' | 'dark') => {
  const colors = colorPalette[mode];
  
  return {
    root: {
      backgroundColor: colors.surface,
      borderRadius: '24px',
      marginBottom: '16px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
      '&:before': { display: 'none' },
      '&:after': { display: 'none' },
      '&:hover': {
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      },
      '&.Mui-expanded': {
        margin: '0 0 16px 0',
      },
      '&:first-of-type': { borderRadius: '24px' },
      '&:last-of-type': { borderRadius: '24px' },
    },
  };
};

const createAccordionSummaryStyles = (mode: 'light' | 'dark') => {
  const colors = colorPalette[mode];
  
  return {
    root: {
      borderRadius: '24px',
      padding: '16px 24px',
      minHeight: '64px',
      '&:hover': {
        backgroundColor: colors.hover,
        border: `1px solid ${colors.hoverBorder}`,
        borderRadius: '24px',
      },
      '&.Mui-expanded': {
        minHeight: '64px',
        borderRadius: '24px 24px 0 0',
      },
      '&:first-of-type': { borderRadius: '24px' },
      '&:last-of-type': { borderRadius: '24px' },
    },
    content: {
      margin: '0',
      '&.Mui-expanded': { margin: '0' },
    },
  };
};

export const createAppTheme = (mode: 'light' | 'dark') => {
  const colors = colorPalette[mode];
  
  return createTheme({
    palette: {
      mode,
      primary: {
        main: colors.primary,
        contrastText: colors.textPrimary,
      },
      secondary: {
        main: colors.secondary,
        contrastText: colors.textPrimary,
      },
      background: {
        default: colors.background,
        paper: colors.surface,
      },
      text: {
        primary: colors.textPrimary,
        secondary: colors.textSecondary,
      },
    },
    typography: createTypography(),
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: colors.navbar,
            color: colors.textPrimary,
          },
        },
      },
      MuiAccordion: {
        styleOverrides: createAccordionStyles(mode),
      },
      MuiAccordionSummary: {
        styleOverrides: createAccordionSummaryStyles(mode),
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: {
            padding: '0 24px 24px 24px',
            borderRadius: '0 0 24px 24px',
          },
        },
      },
    },
  });
}; 