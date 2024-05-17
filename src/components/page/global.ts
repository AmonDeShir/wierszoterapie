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

  #___gatsby, #gatsby-focus-wrapper, main, body, html {
    width: 100%;
    height: 100%;

    @media (max-height: 450px){
      height: 107%;
    }

    @media (max-height: 325px){
      height: 111%;
    }
  }

  .link, .link:hover, .link:focus, .link:active {
    color: inherit;
  }
`;