/** @jsxImportSource @emotion/react */
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import java from "react-syntax-highlighter/dist/cjs/languages/prism/java";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import { H1, PostThumNail, CategoriesArticle } from "components";
import { IPost } from "types";
import * as S from "./style";

interface Props {}

SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("java", java);
SyntaxHighlighter.registerLanguage("jsx", jsx);

export function PostContent({ post }: { post: IPost }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div css={S.ImgaeDiv}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
              objectFit="contain"
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          children={String(children).replace(/\n$/, "")}
          style={dracula}
          language={match[1]}
          PreTag="div"
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },

    small: ({ node, ...props }: any) => <small className="md" {...props} />,
    ul: ({ node, ...props }: any) => <ul className="md" {...props} />,
    h1: ({ node, ...props }: any) => <h1 className="md" {...props} />,
    h2: ({ node, ...props }: any) => <h2 className="md" {...props} />,
    h3: ({ node, ...props }: any) => <h3 className="md" {...props} />,
  };

  return (
    <section css={S.Container}>
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </section>
  );
}
