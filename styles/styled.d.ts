import 'styled-components';


declare module 'styled-components' {
  export interface DefaultTheme {
    media: {
        tablet: "@media only screen and (min-width: 768px)",
        desktop: "@media only screen and (min-width: 1440px)",
    },
    colors: {
        peach: '#e7816b',
        light_peach: '#ffad9b',
        dark_grey: '#333136',
        light_grey: '#f1f3f5',
        black: '#1d1c1e',
    },
  }
}