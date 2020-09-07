import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
  }

  html,
  body,
  #root {
    font-family: 'Roboto', sans-serif;
    height: 100vh;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  a,button {
    cursor: pointer;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }


`;
