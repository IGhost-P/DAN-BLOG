/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { ThemeProps } from "types";

export const PStyle = styled.h1<ThemeProps>`
  width: 100%;
  font-size: 1em;
  font-weight: 500;
  line-height: 2.5rem;
  font-family: "Inter", sans-serif;
  color: ${({ colorTheme }) => colorTheme.MAIN};
`;
