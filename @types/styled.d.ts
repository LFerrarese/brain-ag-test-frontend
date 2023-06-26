import "styled-components";
import Theme from "~/styles/theme/light";

type CustomTheme = typeof Theme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
