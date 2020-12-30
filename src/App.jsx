import React from 'react';
import useResizeWindow from './hooks/useResizeWindow';
import './styles/App.scss';
import Nav from './components/shared/Nav';
import Home from './pages/Home';
import Daily from './pages/Daily';
import Weekly from './pages/Weekly';
import Monthly from './pages/Monthly';
import { Switch, Route } from 'react-router-dom';

function App() {
  // 1. Window resize
  // 2. Fix for mobile 100vh
  const [windowSize] = useResizeWindow();

  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/daily" component={Daily} />
        <Route exact path="/weekly" component={Weekly} />
        <Route exact path="/monthly" component={Monthly} />
      </Switch>
    </div>
  );
}

export default App;
