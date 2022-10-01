import { createTheme } from '@mui/material';
import { lightGreen } from '@mui/material/colors';

const { palette } = createTheme();

const theme = createTheme({
  palette: {
    primary: {
      main: lightGreen[800],
    },
    myColor: palette.augmentColor({
      color: {
        main: '#007399',
      },
    }),
  },
});

export default theme;
