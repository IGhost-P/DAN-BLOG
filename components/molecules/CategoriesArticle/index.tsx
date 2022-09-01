/** @jsxImportSource @emotion/react */
import { IconDiv } from "components";
import Image from "next/image";
import tempImg from "assets/images/tempImg.png";
import * as S from "./style";

interface Props {
  post?: any;
}

export function CategoriesArticle({ post }: Props) {
  return (
    <article css={S.Container}>
      <IconDiv />
      <IconDiv />
      <IconDiv />
      <IconDiv />
      <IconDiv />
      <IconDiv />
      <IconDiv />
      <IconDiv />
      <IconDiv />
      <IconDiv />
      <IconDiv />
      <IconDiv />
      <IconDiv />
      <IconDiv />
    </article>
  );
}
