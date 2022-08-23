// hooks/useDarkMode.ts

import { useEffect, useState } from "react";
import { lightTheme, darkTheme, ColorTheme } from "styles/theme";

export const useDarkMode = () => {
  // 1. 초기 colorTheme은 lightTheme를 가진다.
  const [colorTheme, setColorTheme] = useState<ColorTheme>(lightTheme);

  // 4. state의 값도 변경 + local 저장 값도 변경
  const setMode = (mode: ColorTheme) => {
    mode === lightTheme
      ? window.localStorage.setItem("theme", "light")
      : window.localStorage.setItem("theme", "dark");
    setColorTheme(mode);
  };

  // 3. 사용자가 toggleColorTheme을 하면 setMode를 통해 기존의 colorTheme과 반대 값을 저장한다.
  const toggleColorTheme = () => {
    colorTheme === lightTheme ? setMode(darkTheme) : setMode(lightTheme);
  };

  // 2. 마운트 되면 localStorage에 'theme'이 있는지 찾는다.
  // - 새로고침시 다크모드/라이트모드 바로 적용
  // - 페이지 로드가 처음이면 이 과정은 무시된다
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme !== null) {
      // localTheme이 존재한다면
      if (localTheme === "dark") {
        setColorTheme(darkTheme);
      } else {
        setColorTheme(lightTheme);
      }
    }
  }, []);

  return { colorTheme, toggleColorTheme };
};
