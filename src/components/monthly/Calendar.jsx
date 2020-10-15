import React, { useState } from 'react';
import showCalendar from '../../utils/showCalendar';

function Calendar({ selectedYear, selectedMonth }) {
  const daysArray = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <div className="calendar">
      <div className="calendar__header">
        {daysArray.map((day, index) => (
          <span key={index}>{day}</span>
        ))}
      </div>

      {showCalendar(selectedYear, selectedMonth)}
    </div>
  );
}

export default Calendar;
