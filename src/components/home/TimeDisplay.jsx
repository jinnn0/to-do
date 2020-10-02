import React, { useState, useEffect } from 'react';

function TimeDisplay() {
  let [currentTime, setCurrentTime] = useState({
    hour: null,
    minute: null,
    day: null,
    month: null,
    date: null
  });

  useEffect(() => {
    updateCurrentTime();
  }, [currentTime.minute]);

  const updateCurrentTime = () => {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let d = new Date();
    let current = {
      hour: d.getHours(),
      minute: d.getMinutes(),
      day: days[d.getDay()],
      month: months[d.getMonth()],
      date: d.getDate()
    };

    setCurrentTime(current);
  };

  return (
    <div className="time-display">
      <div className="time">
        {currentTime.hour}:{currentTime.minute < 10 ? '0' + currentTime.minute : currentTime.minute}
      </div>
      <div className="day">
        {currentTime.day}, {currentTime.month}
        <span className="date">{currentTime.date}</span>
      </div>
    </div>
  );
}

export default TimeDisplay;
