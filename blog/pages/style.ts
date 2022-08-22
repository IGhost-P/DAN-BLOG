/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { lightTheme, ColorTheme } from "styles/theme";

interface ThemeProps {
  colorTheme: ColorTheme;
}

export const Container = styled.div<ThemeProps>`
  background: ${({ colorTheme }) => colorTheme.BACKGROUND};
`;
