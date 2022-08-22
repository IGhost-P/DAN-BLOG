import React, { ReactElement, useContext } from "react";
import { ThemeContext } from "pages/_app";
import styled from "@emotion/styled";
import { lightTheme, ColorTheme } from "styles/theme";

interface ToggleProps {
  colorTheme: ColorTheme;
}

export function DarkModeToggle() {
  // 1. useContext를 통해서 colorTheme, toggleColorTheme를 구독한다
  const { colorTheme, toggleColorTheme } = useContext(ThemeContext);

  return (
    // 2. 버튼을 클릭하면 toggleColorTheme을 작동한다
    <ToggleButton onClick={toggleColorTheme} colorTheme={colorTheme}>
      {colorTheme === lightTheme ? "다크 모드" : "라이트 모드"}
    </ToggleButton>
  );
}

// 3. colorTheme을 prop으로 가져와 css를 적용한다.
const ToggleButton = styled("button")<ToggleProps>`
  display: flex;
  color: ${({ colorTheme }) => colorTheme.MAIN};
  cursor: pointer;
  background: ${({ colorTheme }) => colorTheme.BACKGROUND};
  box-shadow: 3px 3px 10px rgb(0 0 0 / 20%);

  &:hover {
    filter: brightness(
      ${({ colorTheme }) => (colorTheme === lightTheme ? "0.9" : "1.13")}
    );
  }
`;

export default DarkModeToggle;
