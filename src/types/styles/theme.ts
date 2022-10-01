import { PaletteColor } from '@mui/material';

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    myColor: PaletteColor
  }

  interface Palette {
    myColor: PaletteColor
  }
}

export { };
