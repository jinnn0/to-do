import React, { useEffect } from 'react';
import TimeDisplay from '../components/home/TimeDisplay';
import HomeMain from '../components/home/HomeMain';
import homeAnimation from '../animations/homeAnimation';

function Home() {
  useEffect(() => {
    // homeAnimation();
  }, []);

  return (
    <div className="home container">
      <TimeDisplay />
      <HomeMain />
    </div>
  );
}

export default Home;
