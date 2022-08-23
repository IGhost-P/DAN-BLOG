/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { reset } from "styles/reset";
import { ColorTheme } from "./theme";
export const GlobalStyle = (colorTheme: ColorTheme) => css`
  ${reset}
  body {
    background: ${colorTheme.BACKGROUND};
  }
`;
