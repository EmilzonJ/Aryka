import {createTheme} from "@mui/material/styles";
import { esES as gridEs} from '@mui/x-data-grid';
import {esES} from '@mui/material/locale';

export const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#FF4081',
        dark: '#7B1FA2',

      },
      secondary: {
        main: '#9C27B0',
      },
      divider: '#BDBDBD',
    },
    typography: {
      button: {
        textTransform: 'none',
        width: 'auto',
        height: 'auto'
      }
    }
  },
  esES,
  gridEs
);
