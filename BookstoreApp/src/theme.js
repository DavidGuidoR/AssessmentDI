import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#121212', 
      paper: '#1e1e1e', 
    },
    text: {
      primary: '#ffffff', 
      secondary: '#b0bec5',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h3: {
      fontWeight: 700,
      color: '#90caf9',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '12px',
          border: '2px solid #00C6FF',
          '&:hover': {
            boxShadow: '0 0 15px #00C6FF',
            transform: 'scale(1.05)',
          },
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
  },
});

export default theme;
