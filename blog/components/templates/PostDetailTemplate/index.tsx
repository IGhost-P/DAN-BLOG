/** @jsxImportSource @emotion/react */
import {
  Hearder,
  SectionSearch,
  PostSection,
  FooterSection,
  PostContent,
} from "components";
import { IPost } from "types";
import * as S from "./style";
export function PostDetailTemplate({ post }: { post: IPost }) {
  return (
    <div css={S.Container}>
      <Hearder />
      <main css={S.Main}>
        <PostContent post={post} />
      </main>
      <FooterSection />
    </div>
  );
}
