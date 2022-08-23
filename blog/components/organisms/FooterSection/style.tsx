/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ColorTheme } from "styles/theme";

export const Container = css`
  width: 75%;
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
  justify-content: center;
`;

export const Icon = (colorTheme: ColorTheme) => css`
  margin-left: 0.313rem;
  color: ${colorTheme.MAIN};
`;
