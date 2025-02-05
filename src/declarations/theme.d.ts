import { ITheme } from "@/lib/theme";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
