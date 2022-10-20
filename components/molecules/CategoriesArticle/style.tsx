/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = css`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 15px 0 15px 15px;
  box-sizing: border-box;
  gap: 1.563rem;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
