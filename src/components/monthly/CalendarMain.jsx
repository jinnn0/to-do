import React from 'react';

function CalendarMain({ showCalendar }) {
  const daysArray = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <div className="calendar-main">
      <div className="days">
        {daysArray.map((day, index) => (
          <span key={index}>{day}</span>
        ))}
      </div>

      {showCalendar}
    </div>
  );
}

export default CalendarMain;
