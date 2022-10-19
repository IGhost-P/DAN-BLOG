import Head from "next/head";
import { HomeTemplate } from "components";
import { getAllPosts } from "lib/post-util";
import { IPosts } from "types";
import * as S from "./style";

const Home = ({ posts }: IPosts) => {
  return (
    <S.Container>
      <Head>
        <title>CMD + SPACE</title>
        <meta name="description" content="Dan blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTemplate posts={posts} />
    </S.Container>
  );
};

export default Home;

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};
