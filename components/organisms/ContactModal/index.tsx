import { useRef, useCallback, useState } from "react";
import { Portal, H1, SquareBtn } from "components";
import * as S from "./style";
export function ContactModal({ children, onClick }: any) {
  const focusRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [maxTextLength, setMaxTextLength] = useState(0);

  // 모달이 아닌 영역을 클릭했을 때 모달을 닫는다.
  const onLeaveFocusLogin = useCallback(
    (e: any) => {
      if (!focusRef.current) return;
      if (!focusRef.current.contains(e.target)) {
        onClick();
      }
    },
    [onClick]
  );

  return (
    <Portal>
      <S.Background onClick={onLeaveFocusLogin}>
        <S.Content ref={focusRef}>
          <S.Container>
            <S.ModalHeader>Contact</S.ModalHeader>
            <S.InputDiv>
              <S.Label htmlFor="name">
                <span>Name</span>
                <S.Input type="text" placeholder="name" />
              </S.Label>
              <S.Label htmlFor="email">
                <span>Email</span>
                <S.Input type="text" placeholder="example@eamil.com" />
              </S.Label>
            </S.InputDiv>
            <S.Label htmlFor="message">
              <span>Message</span>
              <S.TextArea
                ref={textRef}
                onChange={() => {
                  if (textRef.current)
                    setMaxTextLength(textRef.current.value.length);
                }}
              />
              <S.TextAreaSpan>{maxTextLength}/200</S.TextAreaSpan>
            </S.Label>
            <S.BtnContainer>
              <SquareBtn text="Cancel" onClick={onClick} isBlack={false} />
              <SquareBtn text="Submit" onClick={onClick} isBlack={true} />
            </S.BtnContainer>
          </S.Container>
        </S.Content>
      </S.Background>
    </Portal>
  );
}
