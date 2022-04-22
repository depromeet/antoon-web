import { Global, css } from '@emotion/react';

export default function GlobalStyle() {
  return <Global styles={global} />;
}

const global = css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Preahvihear&display=swap');

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0;
  }

  html {
    font-family: Pretendard;
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

  input,
  button {
    outline: none;
    border: none;
    background-color: transparent;
  }

  button {
    cursor: pointer;
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
