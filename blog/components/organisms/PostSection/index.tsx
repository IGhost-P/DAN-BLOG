/** @jsxImportSource @emotion/react */
import { H1, PostThumNail } from "components";
import * as S from "./style";

interface Props {}

export function PostSection() {
  return (
    <section css={S.Container}>
      <div>
        <H1>Categiries</H1>
        <PostThumNail />
      </div>
      <div>
        <H1>Popular Posts</H1>
        <PostThumNail />
      </div>
      <div>
        <H1>Latest Post</H1>
        <PostThumNail />
        <PostThumNail />
      </div>
    </section>
  );
}
