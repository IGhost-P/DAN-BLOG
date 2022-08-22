// pages/_app.tsx
import React, { createContext } from "react";
import { css, Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { lightTheme, darkTheme, ColorTheme } from "styles/theme";
import { reset } from "styles/reset";
import { useDarkMode } from "hooks/useDarkMode";

// createContext 타입지정
interface ContextProps {
  colorTheme: ColorTheme;
  toggleColorTheme: () => void;
}

// Context 생성
export const ThemeContext = createContext<ContextProps>({
  colorTheme: lightTheme, // 초기 값으로 lightTheme를 넣어줍니다.
  toggleColorTheme: () => {
    // light || dark mode를 토글합니다.
    return null;
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  // ❗️useDarkMode hook을 통해 theme과 toggleTheme return;
  const { colorTheme, toggleColorTheme } = useDarkMode();

  return (
    <ThemeContext.Provider value={{ colorTheme, toggleColorTheme }}>
      <Global
        styles={css`
          ${reset}
        `}
      />
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
