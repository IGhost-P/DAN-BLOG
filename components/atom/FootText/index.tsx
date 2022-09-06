import React, { useContext } from "react";
import { ThemeContext } from "pages/_app";
import * as S from "./style";
interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

export function FootText({ children, onClick }: Props) {
  const { colorTheme, toggleColorTheme } = useContext(ThemeContext);
  return (
    <S.FooterTextStyle onClick={onClick} colorTheme={colorTheme}>
      {children}
    </S.FooterTextStyle>
  );
}
