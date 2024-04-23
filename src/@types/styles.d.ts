import "styled-components";
import { defultTheme } from "../styles/themes/defult";

type ThemeType = typeof defultTheme;

declare module "styled-components" {
  export interface defultTheme extends ThemeType {}
}
