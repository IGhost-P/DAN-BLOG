/** @jsxImportSource @emotion/react */
import { useContext } from "react";
import { ThemeContext } from "pages/_app";
import * as S from "./style";

interface Props {
  text: string;
  onClick: () => void;
  isBlack?: boolean;
}

export function SquareBtn({ text, onClick, isBlack }: Props) {
  return (
    <S.Btn onClick={onClick} isBlack={isBlack}>
      {text}
    </S.Btn>
  );
}
