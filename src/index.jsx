import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { GlobalContextProvider } from './contexts/GlobalState';

// React Router 5 added "#/" to the address on first load; React Router 7 doesn't, so keep it.
if (!window.location.hash) window.history.replaceState(null, '', '#/');

createRoot(document.getElementById('root')).render(
  <HashRouter basename="/">
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </HashRouter>
);

