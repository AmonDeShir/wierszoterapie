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

  :root {
    font-size: 5px;
    font-family: 'Source Serif 4';
    color: #333;
    font-weight: normal;

    @media (max-width: 500px) or (max-height: 500px) {
      font-size: 4px;
    }
  }
`;