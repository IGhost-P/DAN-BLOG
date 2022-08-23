/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { ColorTheme } from "styles/theme";
interface Props {
  toggle: boolean;
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
  src: url(assets/images/Moon.svg);
  width: 30px;
  height: 30px;
  border-radius: 50px;
  position: absolute;
  right: 0;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.toggle &&
    `
    transform: translate(-30px, 0);
    transition: all 0.5s ease-in-out;
    `}
`;
