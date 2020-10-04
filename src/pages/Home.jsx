import React from 'react';
import TimeDisplay from '../components/home/TimeDisplay';
import HomeMain from '../components/home/HomeMain';

function Home() {
  return (
    <div className="home container">
      <TimeDisplay />
      <HomeMain />
    </div>
  );
}

export default Home;
