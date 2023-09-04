import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      black: string;
      white: string;
      lilac: string;
      gray: string;
      grayLight: string;
      grayDark: string;
    };
  }
}
