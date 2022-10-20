/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ToggleStyle = styled.div`
  position: relative;
  top: 9px;
  left: 20%;

  @media (max-width: 768px) {
    left: 0;
  }
`;
