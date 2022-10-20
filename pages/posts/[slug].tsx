import { PostDetailTemplate } from "components/templates/PostDetailTemplate";
import { getPostData, getPostsFiles } from "lib/post-util";
import Head from "next/head";
import { IPost } from "types";
import * as S from "styles/post_style";

export default function PostDetailPage({ post }: { post: IPost }) {
  //   const { markdownRemark: post } = data;
  // <Layout>
  //   <SEO title={post.frontmatter.title} />
  //   <h1>{post.frontmatter.title}</h1>
  //   <div dangerouslySetInnerHTML={{ __html: post.html }} />
  // </Layout>
  return (
    <S.Container>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostDetailTemplate post={post} />
    </S.Container>
  );
}

export function getStaticProps(context: { params: { slug: string } }) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
