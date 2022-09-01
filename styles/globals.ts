/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import reset from "styled-reset";
import { ColorTheme } from "./theme";
export const GlobalStyle = (colorTheme: ColorTheme) => css`
  ${reset};
  body {
    background: ${colorTheme.BACKGROUND};
  }
  h1.md {
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
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  h2.md {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    color: ${colorTheme.MAIN};
    font-family: "Merriweather", "Georgia", serif;
    font-weight: 900;
    text-rendering: optimizeLegibility;
    font-size: 1.73286rem;
    line-height: 1.1;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin-bottom: 1.75rem;
  }

  h3.md {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    color: ${colorTheme.MAIN};
    font-family: "Merriweather", "Georgia", serif;
    font-weight: 900;
    text-rendering: optimizeLegibility;
    font-size: 1.4427rem;
    line-height: 1.1;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin-bottom: 1.75rem;
  }

  h1.md,
  h2.md,
  h3.md,
  h4.md,
  h5.md,
  h6.md {
    margin-top: 3.5rem;
  }

  ul,
  ol {
    list-style: circle;
  }
  li {
    margin-left: 1rem;
  }
  article p,
  p {
    display: block;
    box-sizing: border-box;
    font-family: Merriweather, Georgia, serif;
    line-height: 28px;
    font-size: 1rem;
    margin-bottom: 1.75rem;
    padding: 0;
    word-break: keep-all;
    word-wrap: break-word;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: ${colorTheme.MAIN};
  }

  hr {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: calc(1.75rem - 1px);
    background: ${colorTheme.MAIN};
    border: none;
    height: 1px;
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

  div.md-wrapper {
    margin-bottom: 1.75rem;
  }

  ul.md {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  ul.md li {
    color: ${colorTheme.MAIN};
    font-size: 1rem;
    margin-bottom: calc(1.75rem / 2);
  }

  strong {
    box-sizing: border-box;
    font-family: Merriweather, Georgia, serif;
    font-weight: 700;
    line-height: 28px;
    word-break: keep-all;
    word-wrap: break-word;
  }
  .img-md {
    width: 100%;
    margin-bottom: 1.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
