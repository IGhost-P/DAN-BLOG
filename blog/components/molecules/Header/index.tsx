/** @jsxImportSource @emotion/react */
import { DarkModeToggle, Logo } from "components";
import * as S from "./style";

export function Hearder() {
  return (
    <header css={S.Container}>
      <S.ToggleStyle>
        <DarkModeToggle />
      </S.ToggleStyle>
      <Logo />
    </header>
  );
}
