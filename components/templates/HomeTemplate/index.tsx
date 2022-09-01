/** @jsxImportSource @emotion/react */
import { Hearder, SectionSearch, PostSection, FooterSection } from "components";
import { IPosts } from "types";

import * as S from "./style";
export function HomeTemplate({ posts }: IPosts) {
  return (
    <div css={S.Container}>
      <Hearder />
      <main css={S.Main}>
        <SectionSearch />
        <PostSection posts={posts} />
      </main>
      <FooterSection />
    </div>
  );
}
