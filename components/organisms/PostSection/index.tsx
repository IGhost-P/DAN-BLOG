/** @jsxImportSource @emotion/react */
import { v4 as uuidv4 } from "uuid";
import { H1, PostThumNail, CategoriesArticle } from "components";
import { IPosts, IPost } from "types";
import * as S from "./style";

interface Props {}

export function PostSection({ posts }: IPosts) {
  const post = {
    slug: "",
    title: "asb",
    excerpt: "aasd",
    date: "123123",
    image: "asda",
    content: "asdasd",
    isFeatured: false,
  };

  return (
    <section css={S.Container}>
      {/* 추후에 추가 */}
      {/* <S.Div>
        <H1>Categiries</H1>
        <CategoriesArticle />
      </S.Div>
      <S.Div>
        <H1>Popular Posts</H1>
        <PostThumNail /> 
      </S.Div> */}
      <S.Div>
        <H1>Latest Post</H1>
        <section css={S.ThumNailSection}>
          {posts.map((post: IPost) => (
            <PostThumNail key={uuidv4()} post={post} />
          ))}
        </section>
      </S.Div>
    </section>
  );
}
