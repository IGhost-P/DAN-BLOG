/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { ThemeProps } from "types";

export const FooterTextStyle = styled.h1<ThemeProps>`
  font-size: 0.5rem;
  font-weight: 900;
  line-height: 9.68px;
  font-family: "Inter", sans-serif;
  color: ${({ colorTheme }) => colorTheme.MAIN};
`;
