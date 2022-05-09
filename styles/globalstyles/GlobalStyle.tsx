import { Global, css } from '@emotion/react';

export default function GlobalStyle() {
  return <Global styles={global} />;
}

const global = css`
  @font-face {
    font-family: Pretendard;
    font-weight: 900;
    font-display: swap;
    src: local('Pretendard Black'),
      url('./fonts/woff2/Pretendard-Black.woff2') format('woff2');
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 800;
    font-display: swap;
    src: local('Pretendard ExtraBold'),
      url('./fonts/woff2/Pretendard-ExtraBold.woff2') format('woff2');
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 700;
    font-display: swap;
    src: local('Pretendard Bold'),
      url('./fonts/woff2/Pretendard-Bold.woff2') format('woff2');
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 600;
    font-display: swap;
    src: local('Pretendard SemiBold'),
      url('./fonts/woff2/Pretendard-SemiBold.woff2') format('woff2');
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 500;
    font-display: swap;
    src: local('Pretendard Medium'),
      url('./fonts/woff2/Pretendard-Medium.woff2') format('woff2');
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 400;
    font-display: swap;
    src: local('Pretendard Regular'),
      url('./fonts/woff2/Pretendard-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 300;
    font-display: swap;
    src: local('Pretendard Light'),
      url('./fonts/woff2/Pretendard-Light.woff2') format('woff2');
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 200;
    font-display: swap;
    src: local('Pretendard ExtraLight'),
      url('./fonts/woff2/Pretendard-ExtraLight.woff2') format('woff2');
  }

  @font-face {
    font-family: Pretendard;
    font-weight: 100;
    font-display: swap;
    src: local('Pretendard Thin'),
      url('./fonts/woff2/Pretendard-Thin.woff2') format('woff2');
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    background-color: #f1ede9;
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
