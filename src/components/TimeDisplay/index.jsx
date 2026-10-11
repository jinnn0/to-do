import React, { useState, useEffect, useContext } from 'react';
import { TimeDisplayContainer, Time, Day } from './style';
import { GlobalContext } from '../../contexts/GlobalState';

function TimeDisplay() {
  const { today } = useContext(GlobalContext);
  const [currentTime, setCurrentTime] = useState({
    hour: today.hour,
    minute: today.minute
  });

  useEffect(() => {
    let timeId = setTimeout(() => {
      setCurrentTime({
        hour: new Date().getHours(),
        minute: new Date().getMinutes()
      });
    }, 60000 - 1000 * new Date().getSeconds());

    return () => {
      clearTimeout(timeId);
    };
  }, [currentTime.minute]);

  return (
    <TimeDisplayContainer>
      <Time>
        {`${currentTime.hour < 10 ? '0' + currentTime.hour : currentTime.hour}:${
          currentTime.minute < 10 ? '0' + currentTime.minute : currentTime.minute
        }`}
      </Time>
      <Day>
        {today.day}, {today.monthName}
        <span className="date">{today.date}</span>
      </Day>
    </TimeDisplayContainer>
  );
}

export default TimeDisplay;
