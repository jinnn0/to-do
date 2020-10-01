import React, { useEffect } from "react";
import homeAnimation from "../animations/homeAnimation";
import TimeDisplay from "../components/home/TimeDisplay";
import HomeMain from "../components/home/HomeMain";

function Home() {
  useEffect(() => {
    homeAnimation();
  }, []);

  return (
    <div className="home container">
      <TimeDisplay />
      <HomeMain />
      {/* <div className="background-circle one"></div>
      <div className="background-circle two"></div> */}
    </div>
  );
}

export default Home;