import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { GlobalContextProvider } from './contexts/GlobalState';

ReactDOM.render(
  <HashRouter basename="/">
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </HashRouter>,
  document.getElementById('root')
);

