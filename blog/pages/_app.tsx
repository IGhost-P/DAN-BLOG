/** @jsxImportSource @emotion/react */
import React, { createContext } from "react";
import { css, Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { lightTheme, darkTheme, ColorTheme } from "styles/theme";
import { GlobalStyle } from "styles/globals";
import { reset } from "styles/reset";
import { useDarkMode } from "hooks/useDarkMode";

interface ContextProps {
  colorTheme: ColorTheme;
  toggleColorTheme: () => void;
}

export const ThemeContext = createContext<ContextProps>({
  colorTheme: lightTheme,
  toggleColorTheme: () => {
    return null;
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const { colorTheme, toggleColorTheme } = useDarkMode();

  return (
    <ThemeContext.Provider value={{ colorTheme, toggleColorTheme }}>
      <Global styles={GlobalStyle(colorTheme)} />
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
