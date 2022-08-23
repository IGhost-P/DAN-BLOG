/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { ThemeProps } from "types";

export const Container = styled.div<ThemeProps>`
  background: ${({ colorTheme }) => colorTheme.BACKGROUND};
  width: 100vw;
  height: 100vh;
`;
