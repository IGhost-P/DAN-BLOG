/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { ThemeProps } from "types";

export const H1Style = styled.h1<ThemeProps>`
  font-size: 1.4rem;
  font-weight: 900;
  line-height: 27.11px;
  font-family: "Inter", sans-serif;
  color: ${({ colorTheme }) => colorTheme.MAIN};
`;
