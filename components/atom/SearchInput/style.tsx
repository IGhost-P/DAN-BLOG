/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import styled from "@emotion/styled";
export const Container = styled.div`
  position: relative;
  width: 610px;
  height: 50px;

  @media (max-width: 768px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

export const SearchInputStyle = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding-left: 47px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;

  &: focus {
    outline: none;
  }
`;

export const IconContainer = css`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
  color: #94949d;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
`;
