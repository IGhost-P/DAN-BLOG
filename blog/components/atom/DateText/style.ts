/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { ThemeProps } from "types";

export const DateStyle = styled.p<ThemeProps>`
  font-size: 0.8rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 1rem;
  line-height: 9.68px;
  font-family: "Inter", sans-serif;
  color: ${({ colorTheme }) => colorTheme.MAIN};
`;
