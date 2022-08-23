import React, { useContext } from "react";
import { ThemeContext } from "pages/_app";
import * as S from "./style";
interface Props {
  children: React.ReactNode;
}

export function FootText({ children, ...props }: Props) {
  const { colorTheme, toggleColorTheme } = useContext(ThemeContext);
  return (
    <S.FooterTextStyle colorTheme={colorTheme}>{children}</S.FooterTextStyle>
  );
}
