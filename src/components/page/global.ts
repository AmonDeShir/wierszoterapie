import { css } from "@emotion/react";

export const global = css`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  *::before, *::after {
    box-sizing: border-box;
  }

  input {

  }

  :root {
    font-size: 5px;
    font-family: 'Source Serif 4';
    color: #333;
    font-weight: normal;
  }

  main {
    height: 100%;
    width: 100%;
  }

  body {
    width: 100vw;
    height: 100%;
    min-height: 100vh;
  }
`;