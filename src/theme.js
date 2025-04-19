import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00a0c3',
      hover: '#0cf2ff',
    },
    secondary: {
      main: '#1e0a28',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevents automatic uppercase transformation
        },
      },
    },
  },
});

export default theme;