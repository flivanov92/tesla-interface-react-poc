import { createGlobalStyle } from 'styled-components';

export const ResetCss = createGlobalStyle`
  /* :root {
    --my-padding: 20px
  } */

  html,
  body {
    height: 100%;
    font-family: 'Albert Sans' ;

  }

  html {
    scroll-behavior: smooth ;
  }

  *, 
  *::before,
  *::after {
    box-sizing: border-box ;
    margin: 0;
  }

`;

// https://fonts.googleapis.com/css2?family=Albert+Sans:wght@100&display=swap
export const Font = createGlobalStyle`
  @font-face {
    font-family: 'Albert Sans';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/albertsans/v1/i7dZIFdwYjGaAMFtZd_QA3xXSKZqhr-TenSHq5LPpYf3bRUz17ZtCcA.woff2') format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }

  @font-face {
    font-family: 'Albert Sans';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/albertsans/v1/i7dZIFdwYjGaAMFtZd_QA3xXSKZqhr-TenSHq5LPq4f3bRUz17Zt.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`;
