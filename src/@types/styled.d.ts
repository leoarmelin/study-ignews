import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      grayLighter: string;
      grayLight: string;
      grayDark: string;
      cyan: string;
      yellow: string;
    };
  }
}
