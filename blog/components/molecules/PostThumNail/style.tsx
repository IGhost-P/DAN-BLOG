/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = css`
  width: 95%;
  height: 80px;
  display: flex;
  align-items: flex-start;
  justify-content: felx-start;
  flex-direction: row;
  margin-top: 0.625rem;
  margin-left: 0.625rem;
  gap: 1.188rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
