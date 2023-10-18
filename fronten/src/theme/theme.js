import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {   
    h6: {
      '&:hover': {
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Agrega una sombra suave al hacer hover
        transition: 'box-shadow 0.3s', // Agrega una transición suave de 0.3 segundos
      },
    },
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: '40%', // Ajusta la posición horizontal
            transform: 'translateX(-50%)', // Ajusta la posición horizontal
            width: '60%', // Ajusta el ancho de la línea
            height: '1px', // Ajusta el grosor de la línea
            backgroundColor: '#000', // Color de la línea
          },
        },
      },
    },
  },
});

export default theme;