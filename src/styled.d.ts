import { ColorsType } from "./types/index";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsType;
  }
}
