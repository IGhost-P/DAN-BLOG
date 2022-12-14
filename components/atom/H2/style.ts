/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { ThemeProps } from "types";

export const H2Style = styled.h2<ThemeProps>`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 27.78px;
  font-family: "Inter", sans-serif;
  color: ${({ colorTheme }) => colorTheme.MAIN};
`;
