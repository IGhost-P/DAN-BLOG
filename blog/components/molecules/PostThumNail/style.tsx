/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = css`
  width: 100%;
  height: 88px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  margin-top: 0.625rem;
  margin-left: 0.625rem;
  gap: 1.188rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
