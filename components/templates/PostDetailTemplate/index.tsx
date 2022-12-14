/** @jsxImportSource @emotion/react */
import { useState } from "react";
import {
  Hearder,
  FooterSection,
  PostContent,
  ContactModal,
  Comment,
} from "components";
import { IPost } from "types";
import * as S from "./style";
export function PostDetailTemplate({ post }: { post: IPost }) {
  const [modalOn, setModalOn] = useState(false);
  return (
    <div css={S.Container}>
      <Hearder />
      <main css={S.Main}>
        <PostContent post={post} />
      </main>
      <Comment repo="IGhost-P/DAN-BLOG" />
      <FooterSection onClick={() => setModalOn(!modalOn)} />
      {modalOn && <ContactModal onClick={() => setModalOn(false)} />}
    </div>
  );
}
