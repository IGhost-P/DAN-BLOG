import React, { useContext } from "react";
import { ThemeContext } from "pages/_app";
import * as S from "./style";
interface Props {
  children: React.ReactNode;
}

export function H1({ children, ...props }: Props) {
  const { colorTheme, toggleColorTheme } = useContext(ThemeContext);
  return <S.H1Style colorTheme={colorTheme}>{children}</S.H1Style>;
}
