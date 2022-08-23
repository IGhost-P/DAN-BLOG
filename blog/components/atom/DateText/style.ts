/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { ThemeProps } from "types";

export const DateStyle = styled.h1<ThemeProps>`
  font-size: 0.5rem;
  font-weight: 400;
  line-height: 9.68px;
  font-family: "Inter", sans-serif;
  color: ${({ colorTheme }) => colorTheme.MAIN};
`;
