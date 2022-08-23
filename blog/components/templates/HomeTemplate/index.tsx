/** @jsxImportSource @emotion/react */
import { Hearder, SectionSearch, PostSection } from "components";

import * as S from "./style";
export function HomeTemplate() {
  return (
    <div css={S.Container}>
      <Hearder />
      <main css={S.Main}>
        <SectionSearch />
        <PostSection />
      </main>
      <footer>마무리글</footer>
    </div>
  );
}
