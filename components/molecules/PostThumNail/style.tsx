/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: felx-start;
  flex-direction: row;
  gap: 2rem;
  &:hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
