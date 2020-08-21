import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 16px;
    background-color: #f5f6fb;
  }
`;

export default GlobalStyle;
