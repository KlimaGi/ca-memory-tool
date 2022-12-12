import { PaletteColor } from '@mui/material';

// todo: pervadinti i theme.d.ts
// vadinama kol kas .ts , tam kad butu matomos klaidos

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    myColor: PaletteColor
  }

  interface Palette {
    myColor: PaletteColor
  }
}

export { };
