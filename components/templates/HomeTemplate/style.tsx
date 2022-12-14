/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 2.188rem;
`;

export const Main = css`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  min-height: calc(100vh - 430px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1.875rem;
`;

export const SectionContainer = css`
  width: 100%;
`;
