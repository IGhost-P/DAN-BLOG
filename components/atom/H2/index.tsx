import React, { useContext } from "react";
import { ThemeContext } from "pages/_app";
import * as S from "./style";
interface Props {
  children: React.ReactNode;
}

export function H2({ children, ...props }: Props) {
  const { colorTheme, toggleColorTheme } = useContext(ThemeContext);
  return <S.H2Style colorTheme={colorTheme}>{children}</S.H2Style>;
}
