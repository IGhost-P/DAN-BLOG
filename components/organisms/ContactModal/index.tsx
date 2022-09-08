import { useRef, useCallback, useState } from "react";
import { Portal, H1, SquareBtn } from "components";
import * as S from "./style";
export function ContactModal({ children, onClick }: any) {
  const focusRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [textArea, setTextArea] = useState(0);

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

  const onNameChange = useCallback((e: any) => {
    setName(e.target.value);
  }, []);

  const onEmailChange = useCallback((e: any) => {
    setEmail(e.target.value);
  }, []);

  const onSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();
      if (name === "" || email === "" || message === "") {
        alert("모든 항목을 입력해주세요.");
        return;
      }

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        });

        if (!res.ok) {
          return;
        }

        alert("전송되었습니다.");
        onClick();
      } catch (e) {
        console.log(e);
      }
    },
    [email, message, name, onClick]
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
                <S.Input
                  type="text"
                  placeholder="name"
                  onChange={onNameChange}
                />
              </S.Label>
              <S.Label htmlFor="email">
                <span>Email</span>
                <S.Input
                  type="text"
                  placeholder="example@eamil.com"
                  onChange={onEmailChange}
                />
              </S.Label>
            </S.InputDiv>
            <S.Label htmlFor="message">
              <span>Message</span>
              <S.TextArea
                ref={textRef}
                onChange={() => {
                  if (textRef.current) {
                    setTextArea(textRef.current.value.length);
                    setMessage(textRef.current.value);
                  }
                }}
                maxLength={200}
              />
              <S.TextAreaSpan>{textArea}/200</S.TextAreaSpan>
            </S.Label>
            <S.BtnContainer>
              <SquareBtn text="Cancel" onClick={onClick} isBlack={false} />
              <SquareBtn text="Submit" onClick={onSubmit} isBlack={true} />
            </S.BtnContainer>
          </S.Container>
        </S.Content>
      </S.Background>
    </Portal>
  );
}
