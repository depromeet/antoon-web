import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export default function GlobalStyle() {
  return <Global styles={global} />;
}

const global = css`
  ${emotionReset}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    font-weight: 400;
  }

  a {
    cursor: pointer;
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
