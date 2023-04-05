import {extendTheme} from 'native-base';

export const MAIN = extendTheme({
  colors: {
    primary: {
      300: '#08090a',
    },
    yellow: {
      300: '#eea12f',
    },
  },

  fontConfig: {
    Magnitude: {
      700: {
        normal: 'Magnitude-Regular',
      },
    },
    Rubik: {
      100: {
        normal: 'Rubik-Light',
        italic: 'Rubik-LightItalic',
      },
      200: {
        normal: 'Rubik-Light',
        italic: 'Rubik-LightItalic',
      },
      300: {
        normal: 'Rubik-Light',
        italic: 'Rubik-LightItalic',
      },
      400: {
        normal: 'Rubik-Regular',
        italic: 'Rubik-Italic',
      },
      500: {
        normal: 'Rubik-Medium',
      },
      600: {
        normal: 'Rubik-Medium',
        italic: 'Rubik-MediumItalic',
      },
      700: {
        normal: 'Rubik-Bold',
      },
      800: {
        normal: 'Rubik-Bold',
        italic: 'Rubik-BoldItalic',
      },
    },
  },
  fonts: {
    body: 'Rubik',
    mono: 'Magnitude',
  },
});
