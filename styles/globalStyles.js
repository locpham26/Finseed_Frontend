import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
        Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  input,
  textarea,
  span,
  div,
  img,
  svg {
    &::selection {
      background: rgba(0,0,0,0.6);
      color: #fff;
    }
    font-family: 'Roboto', sans-serif;
  }

  .dp-space-bw {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .dp-space-around {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }

  .dp-flex-end {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
  }

  .dp-center {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .dp-block-center {
    display: block;
    margin: auto;
  }
  .dp-center-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .fw {
    width: 100%;
  }

  .fh {
    height: 100%;
  }

  // scroll bar custom

  .scrollbar-custom::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    border-radius: 3px;
  }
  .scrollbar-custom::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .section-title {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }

  /* pagination */
  
`;

export default GlobalStyles;
