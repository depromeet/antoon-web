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
    margin: 0 auto;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    font-weight: 400;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
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
    max-width: 100%;
    border: none;
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
