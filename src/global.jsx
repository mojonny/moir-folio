import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  

  :root {
  font-family: Inter, system-ui, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: #f7fed4;
  background-color: teal;
  /* background-color: #242424; */

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

* {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: Inter, system-ui, Helvetica, Arial, sans-serif;
  }


a {
  font-weight: 500;
  color: #f7fed4;
  text-decoration: inherit;
}
a:hover {
  color: #f7fed4;
  opacity: 0.5;
  background-color: teal;
}

body,html {
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

/* button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: teal;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #f7fed4;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
} */



`;
