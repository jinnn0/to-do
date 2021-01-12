import { createGlobalStyle } from 'styled-components';

export const colors = {
  purple: '#6966ff'
};

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0; 
    margin: 0;
  }

  :root {
    --nav-height: 60px;
    --header-height: 120px;
    --time-display-height: 50px;
    --mobile-100vh-fix: calc(var(--vh, 1vh) * 100);
    --container-padding: 20px;
    --header-margin-bottom: 2.5em;

    @media (min-width: 750px) {
      --header-margin-bottom: 4.5em;
    }

    @media (min-width: 900px) {
      --nav-height: 72px;
      --container-padding: 50px;
    }
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    background-color: white;
  }

  .App {
    min-width: 320px;
  }

  ul {
    list-style-type: none;
  }
`;

export default GlobalStyle;
