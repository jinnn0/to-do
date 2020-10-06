import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import Nav from './components/shared/Nav';
import Home from './pages/Home';
import Daily from './pages/Daily';
import Weekly from './pages/Weekly';
import Monthly from './pages/Monthly';
import { Switch, Route } from 'react-router-dom';

function App() {
  // window resize for all pages
  let [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    let vh = windowSize.height * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize]);

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
