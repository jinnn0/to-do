import React from 'react';
import GlovalStyle from './styles/GlobalStyle';
import use100vh from './hooks/use100vh';
import Nav from './components/Nav';
import Home from './pages/Home';
import Daily from './pages/Daily';
import Weekly from './pages/Weekly';
import Monthly from './pages/Monthly';
import { Routes, Route } from 'react-router-dom';

function App() {
  // Fix for mobile 100vh
  use100vh();

  return (
    <div className="App">
      <GlovalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Daily />} />
        <Route path="/home" element={<Home />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/weekly" element={<Weekly />} />
        <Route path="/monthly" element={<Monthly />} />
      </Routes>
    </div>
  );
}

export default App;
