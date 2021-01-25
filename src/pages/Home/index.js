import React from 'react';
import { HomeContainer } from './style';
import TimeDisplay from '../../components/TimeDisplay/index';
import HomeMain from '../../components/HomeMain/index';

function Home() {
  return (
    <HomeContainer>
      <TimeDisplay />
      <HomeMain />
    </HomeContainer>
  );
}

export default Home;
