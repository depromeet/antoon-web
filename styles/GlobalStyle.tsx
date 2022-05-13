import { Global, css } from '@emotion/react';

export default function GlobalStyle() {
  return <Global styles={global} />;
}

const global = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: inherit;
  }

  html {
    background-color: #eceff4;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-size: 62.5%;
    font-weight: 400;
  }

  a {
    margin: 0;
    background: transparent;
    cursor: pointer;
    padding: 0;
    vertical-align: baseline;
    text-decoration: none;
    color: inherit;
    font-size: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  input {
    outline: none;
    border: none;
    background-color: transparent;
  }

  button {
    margin: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
    background: inherit;
    cursor: pointer;
    padding: 0;
    overflow: visible;
  }

  img {
    border: none;
    max-width: 100%;
    vertical-align: middle;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
`;
