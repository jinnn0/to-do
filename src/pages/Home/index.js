import React from 'react';
import { HomeContainer } from './style';
import TimeDisplay from '../../components/home/TimeDisplay/index.js';
import HomeMain from '../../components/home/HomeMain/index.js';

function Home() {
  return (
    <HomeContainer>
      <TimeDisplay />
      <HomeMain />
    </HomeContainer>
  );
}

export default Home;
