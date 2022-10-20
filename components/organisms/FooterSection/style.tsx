/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ColorTheme } from "styles/theme";

export const Container = css`
  position: absolute;
  bottom: 0%;
  width: 100%;
  max-width: 1100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 2.188rem;
  gap: 1.875rem;
`;

export const Div = styled.div`
  width: calc(100% / 3);
  display: flex;
  align-items: center;
`;

export const front = css`
  justify-content: flex-start;
`;
export const mid = css`
  justify-content: center;
`;
export const back = css`
  justify-content: flex-end;
`;

export const Icon = (colorTheme: ColorTheme) => css`
  margin-left: 0.313rem;
  color: ${colorTheme.MAIN};
`;
