/** @jsxImportSource @emotion/react */
import { DarkModeToggle, DateText, H2, Logo, P } from "components";
import Image from "next/image";
import tempImg from "assets/images/tempImg.png";
import * as S from "./style";

interface Props {
  post?: any;
}

export function PostThumNail({ post }: Props) {
  const title =
    "Form validation with React Hooks WITHOUT a library: The Complete Guide";

  const date = "July 7, 2021";

  const content =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.";

  return (
    <article css={S.Container}>
      <Image src={tempImg} alt="tempImg" width={120} height={80} />
      <S.Content>
        <H2>{title}</H2>
        <DateText>{date}</DateText>
        <P>{content}</P>
      </S.Content>
    </article>
  );
}
