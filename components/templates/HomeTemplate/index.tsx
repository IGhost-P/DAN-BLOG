/** @jsxImportSource @emotion/react */
import { useState } from "react";
import {
  Hearder,
  SectionSearch,
  PostSection,
  FooterSection,
  ContactModal,
} from "components";
import { IPosts } from "types";

import * as S from "./style";
export function HomeTemplate({ posts }: IPosts) {
  const [modalOn, setModalOn] = useState(false);

  return (
    <div css={S.Container}>
      <Hearder />
      <main css={S.Main}>
        {/* <SectionSearch /> */}
        <PostSection posts={posts} />
      </main>
      <FooterSection onClick={() => setModalOn(!modalOn)} />
      {modalOn && <ContactModal onClick={() => setModalOn(false)} />}
    </div>
  );
}
