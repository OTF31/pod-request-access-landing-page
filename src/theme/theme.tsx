import { MantineThemeOverride } from '@mantine/core';

import chivo from '@/assets/fonts/Chivo-VariableFont_wght.ttf';

const theme: MantineThemeOverride = {
  globalStyles: () => ({
    '@font-face': { fontFamily: 'Chivo', src: `url(${chivo}) format('truetype')` },
  }),
  breakpoints: { xs: '23.4375em', sm: '48em', xl: '90em' },
  fontFamily: 'Chivo, Ubuntu, sans-serif',
  colors: {
    screenGlow: [
      '#EEFDF7',
      '#DDFAEF',
      '#CCF8E7',
      '#BBF5DF',
      '#98F0CF',
      '#76EBBF',
      '#54E6AF',
      '#43B88C',
      '#328A69',
      '#225C46',
    ],
    bunting: [
      '#EAEBED',
      '#D5D6DB',
      '#C0C2C9',
      '#ABAEB7',
      '#808593',
      '#565D6F',
      '#2C344B',
      '#232A3C',
      '#1A1F2D',
      '#12151E',
    ],
    riverStyx: [
      '#E7E8E9',
      '#D0D1D3',
      '#B8B9BE',
      '#A0A2A8',
      '#71747C',
      '#414551',
      '#121725',
      '#0E121E',
      '#0B0E16',
      '#07090F',
    ],
    allegiance: [
      '#EFF0F3',
      '#DEE0E8',
      '#CED1DC',
      '#BDC2D0',
      '#9CA3B9',
      '#7B85A1',
      '#5A668A',
      '#48526E',
      '#363D53',
      '#242937',
    ],
    periwinkleGrey: [
      '#F9FAFC',
      '#F3F5FA',
      '#EDEFF7',
      '#E7EAF5',
      '#DAE0EF',
      '#CED5EA',
      '#C2CBE5',
      '#9BA2B7',
      '#747A89',
      '#4E515C',
    ],
  },
};

export { theme };
