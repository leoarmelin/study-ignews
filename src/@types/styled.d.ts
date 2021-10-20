import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      grayLighter: string;
      grayLight: string;
      grayNormal: string;
      grayDark: string;
      grayDarkTwo: string;
      grayDarker: string;
      cyan: string;
      yellow: string;
    };
  }
}
