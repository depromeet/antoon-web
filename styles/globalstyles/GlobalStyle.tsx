import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export default function GlobalStyle() {
  return <Global styles={global} />;
}

const global = css`
  ${emotionReset}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: inherit;
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
`;
