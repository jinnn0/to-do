import { createGlobalStyle } from 'styled-components';

export const colors = {
  purple: '#6966ff',
  blue: '#75cdff',
  pink: '#ffb8c0',
  orange: '#ffaf75',
  lightBlack: 'rgba(0, 0, 0, 0.515)',
  formBg: 'rgb(242, 242, 242)'
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

    /* Colours and sizes for the month calendar and its task list. */
    --surface: #ffffff;
    --surface-2: #f1f1f5;
    --surface-hover: #ececf2;
    --border: rgba(20, 20, 43, 0.08);
    --border-strong: rgba(20, 20, 43, 0.14);
    --text: #17171f;
    --text-2: #5d5d6c;
    --text-3: #6e6e7d;
    --accent: ${colors.purple};
    --accent-soft: rgba(105, 102, 255, 0.12);
    --accent-text: #4f4ce0;
    --danger: #d93036;
    --danger-soft: rgba(229, 72, 77, 0.1);
    --shadow-sm: 0 1px 2px rgba(20, 20, 43, 0.05);
    --shadow: 0 1px 2px rgba(20, 20, 43, 0.04), 0 4px 16px rgba(20, 20, 43, 0.05);
    --radius: 12px;
    --radius-lg: 16px;

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
