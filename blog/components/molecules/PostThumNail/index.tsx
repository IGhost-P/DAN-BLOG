/** @jsxImportSource @emotion/react */
import { DarkModeToggle, DateText, H2, Logo, P } from "components";
import Image from "next/image";
import tempImg from "assets/images/tempImg.png";
import * as S from "./style";
import { IPost } from "types";
import Link from "next/link";

interface Props {
  post: IPost;
}

export function PostThumNail({ post }: Props) {
  const { slug, title, excerpt, date, image } = post;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <Link href={`/posts/${slug}`}>
      <article css={S.Container}>
        <Image
          src={imagePath}
          alt={title}
          loading="lazy"
          width={120}
          height={80}
        />
        <S.Content>
          <H2>{title}</H2>
          <DateText>{date}</DateText>
          <P>{excerpt}</P>
        </S.Content>
      </article>
    </Link>
  );
}
