import React from 'react';
import showCalendar from '../../utils/showCalendar';
import { CalendarContainer, CalendarHeader } from './style';

function Calendar({ selectedYear, selectedMonth }) {
  const daysArray = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <CalendarContainer>
      <CalendarHeader>
        {daysArray.map((day, index) => (
          <span key={index}>{day}</span>
        ))}
      </CalendarHeader>

      {showCalendar(selectedYear, selectedMonth)}
    </CalendarContainer>
  );
}

export default Calendar;
