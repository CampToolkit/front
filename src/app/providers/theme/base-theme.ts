import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none', // убираем подчеркивание
          color: '#1976d2', // свой цвет
          fontWeight: 500, // полужирный
          '&:hover': {
            textDecoration: 'underline', // при наведении — подчеркивание
          },
        },
      },
    },
  },
});

export { baseTheme };
