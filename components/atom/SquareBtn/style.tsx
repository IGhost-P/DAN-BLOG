/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { ColorTheme } from "styles/theme";

interface BtnProps {
  isBlack?: boolean;
}

export const Btn = styled.div<BtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 56px;
  border-radius: 8px;
  background-color: ${(props) => (props.isBlack ? "#000000" : "#F5F7FB")};
  color: ${(props) => (props.isBlack ? "#ffffff" : "#6A6A6A")};
  " : "#000000")};
  font-size: 1.5rem;
`;
