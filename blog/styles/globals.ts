/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import reset from "styled-reset";
import { ColorTheme } from "./theme";
export const GlobalStyle = (colorTheme: ColorTheme) => css`
  ${reset};
  body {
    background: ${colorTheme.BACKGROUND};
  }
  h1 {
    color: ${colorTheme.MAIN};
    box-sizing: border-box;
    font-family: Montserrat, sans-serif;
    font-size: 3rem;
    font-weight: 900;
    line-height: 1.1;
    padding: 0;
    text-rendering: optimizelegibility;
    word-break: keep-all;
    word-wrap: break-word;
  }
  body.dark h1 {
    color: ${colorTheme.MAIN};
  }
  h2 {
    color: ${colorTheme.MAIN};
    box-sizing: border-box;
    font-family: Montserrat, sans-serif;
    font-size: 2.2rem;
    font-weight: 900;
    line-height: 1.1;
    padding: 0;
    text-rendering: optimizelegibility;
    word-break: keep-all;
    word-wrap: break-word;
  }
  h2.detail {
    margin: 30px 0;
  }
  body.dark h2 {
    color: ${colorTheme.MAIN};
  }
  h3 {
    color: ${colorTheme.MAIN};
    box-sizing: border-box;
    font-family: Montserrat, sans-serif;
    font-size: 1.9rem;
    font-weight: 900;
    line-height: 1.1;
    padding: 0;
    text-rendering: optimizelegibility;
    word-break: keep-all;
    word-wrap: break-word;
  }
  body.dark h3 {
    color: ${colorTheme.MAIN};
  }
  h3.detail {
    margin: 30px 0;
  }
  ul,
  ol {
    list-style: circle;
  }
  li {
    margin-left: 1rem;
  }
  article p,
  p.detail {
    box-sizing: border-box;
    font-family: Merriweather, Georgia, serif;
    line-height: 28px;
    margin: 1.75rem 0;
    padding: 0;
    word-break: keep-all;
    word-wrap: break-word;
    font-size: 1.5rem;
    color: ${colorTheme.MAIN};
  }
  blockquote {
    border-left: 0.32813rem solid ${colorTheme.MAIN};
    box-sizing: border-box;

    font-family: Merriweather, Georgia, serif;
    font-size: 1.20112rem;
    font-style: italic;
    line-height: 1.75rem;
    margin: 0 1.75rem 1.75rem -1.75rem;
    opacity: 0.8;
    padding: 0 0 0 1.42188rem;
    word-break: keep-all;
    word-wrap: break-word;
  }
  body.dark blockquote {
    border-left: 0.32813rem solid ${colorTheme.MAIN};
  }
  div.detail-wrapper {
    margin-bottom: 20px;
  }
  ul.detail {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  ul.detail li {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
  strong {
    box-sizing: border-box;
    font-family: Merriweather, Georgia, serif;
    font-weight: 700;
    line-height: 28px;
    word-break: keep-all;
    word-wrap: break-word;
  }
  .img-detail {
    width: 100%;
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  body.dark .p-blog > a {
    color: ${colorTheme.MAIN};
  }
  body.dark .p-blog {
    color: rgba(255, 255, 255, 0.88);
  }
  body.dark footer {
    color: rgba(255, 255, 255, 0.88);
  }
  @media (max-width: 620px) {
    body.dark .toggle-button-switch {
      left: 20px;
    }
  }
`;
