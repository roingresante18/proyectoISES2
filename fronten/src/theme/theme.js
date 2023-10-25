import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h6: {
      margin:"20px",
      // fontSize:"10px",
      '&:hover': {
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Agrega una sombra suave al hacer hover
        transition: 'font-size 0.5s', // Agrega una transición suave de 0.3 segundos
        fontSize:"27px",
      },
    },
  },
});

export default theme;