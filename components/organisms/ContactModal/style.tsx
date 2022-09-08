//style
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 11.6189px 124.28px rgba(37, 72, 153, 0.17);
  border-radius: 23.2377px;
  padding: 16px;
  width: 473px;
  height: 476px;
  position: relative;
  background: #fff;

  //   @media (max-width: 768px) {
  //     width: 100%;
  //     height: 100%;
  //     padding: 0;
  //     border-radius: 0;
  //     box-shadow: none;
  //   }
`;

export const Container = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const ModalHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 16px;
`;

export const InputDiv = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.75rem;
  box-sizing: border-box;
  gap: 1rem;
`;

export const Label = styled.label`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 0.960366px solid rgba(86, 103, 137, 0.26);
  border-radius: 7.68293px;
  box-sizing: border-box;
  padding: 0 1rem;
  margin-top: 0.5rem;
`;

export const TextArea = styled.textarea`
  margin-top: 0.5rem;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  border: 0.960366px solid rgba(86, 103, 137, 0.26);
  border-radius: 7.68293px;
  resize: none;
  overflow: auto;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 10px;
  border-radius: 7.68293px;
  background-color: #fff;
  color: #000;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  text-indent: 0px;
  text-transform: none;
  text-decoration: none;
`;

export const TextAreaSpan = styled.span`
  position: absolute;
  bottom: 4px;
  right: 8px;
  font-size: 0.75rem;
  color: #6a6a6a;
  margin-top: 0.5rem;
`;

export const BtnContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 1rem;
`;
