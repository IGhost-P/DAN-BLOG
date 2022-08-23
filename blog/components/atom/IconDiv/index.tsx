import Image from "next/image";
import JS from "assets/images/JS.svg";
import * as S from "./style";

interface Props {
  children?: React.ReactNode;
}

export function IconDiv({ children, ...props }: Props) {
  return (
    <S.IconDivStyle {...props}>
      <Image src={JS} alt="JS" width={31} height={31} />
    </S.IconDivStyle>
  );
}
