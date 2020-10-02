import React from 'react';

function CalendarDate({ className, date, dateInfo, showDateInfo }) {
  return (
    <span className={className} onClick={() => showDateInfo(dateInfo)}>
      {date}
    </span>
  );
}

export default CalendarDate;
