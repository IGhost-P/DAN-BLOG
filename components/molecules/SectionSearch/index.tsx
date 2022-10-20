/** @jsxImportSource @emotion/react */
import { DarkModeToggle, Logo, SearchInput } from "components";
import * as S from "./style";

export function SectionSearch() {
  return (
    <section css={S.Container}>
      <SearchInput />
    </section>
  );
}
