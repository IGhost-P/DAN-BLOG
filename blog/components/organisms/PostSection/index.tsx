/** @jsxImportSource @emotion/react */
import { H1, PostThumNail, CategoriesArticle } from "components";
import * as S from "./style";

interface Props {}

export function PostSection() {
  return (
    <section css={S.Container}>
      <S.Div>
        <H1>Categiries</H1>
        <CategoriesArticle />
      </S.Div>
      <S.Div>
        <H1>Popular Posts</H1>
        <PostThumNail />
      </S.Div>
      <S.Div>
        <H1>Latest Post</H1>
        <PostThumNail />
        <PostThumNail />
      </S.Div>
    </section>
  );
}
