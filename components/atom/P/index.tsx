import React, { useContext } from "react";
import { ThemeContext } from "pages/_app";
import * as S from "./style";
interface Props {
  children: React.ReactNode;
}

export function P({ children, ...props }: Props) {
  const { colorTheme, toggleColorTheme } = useContext(ThemeContext);
  return <S.PStyle colorTheme={colorTheme}>{children}</S.PStyle>;
}
