/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { lightTheme, ColorTheme } from "styles/theme";
interface Props {
  toggle: boolean;
  colorTheme: ColorTheme;
}

export const ToggleBtn = styled.button<Props>`
  width: 60px;
  height: 25px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;
`;
export const Circle = styled.div<Props>`
  width: 29px;
  height: 29px;
  border-radius: 50px;
  position: absolute;
  left: 1px;
  transition: all 0.5s ease-in-out;
  ${({ colorTheme }) =>
    colorTheme === lightTheme &&
    `
    transform: translate(29px, 0);
    transition: all 0.5s ease-in-out;
    `}
`;
