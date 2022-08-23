/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { ThemeProps } from "types";

export const PStyle = styled.h1<ThemeProps>`
  font-size: 0.688rem;
  font-weight: 500;
  line-height: 13.31px;
  font-family: "Inter", sans-serif;
  color: ${({ colorTheme }) => colorTheme.MAIN};
`;
