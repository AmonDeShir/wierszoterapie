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

  #___gatsby, main, body, html {
    width: 100%;
  }
`;