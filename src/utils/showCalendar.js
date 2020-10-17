import React from 'react';
import CalendarDate from '../components/monthly/CalendarDate';

export default (selectedYear, selectedMonth) => {
  const renderDate = (date, dateInfo, className) => {
    return <CalendarDate key={date} date={date} dateInfo={dateInfo} className={className} />;
  };

  const today = new Date();
  let firstDay = new Date(selectedYear, selectedMonth).getDay() - 1; // starting on Mon as index 0
  if (firstDay === -1) firstDay = 6; // convert Sun index( 0-1 = -1 ) to 6
  const daysInMonth = (selectedYear, selectedMonth) => {
    return 32 - new Date(selectedYear, selectedMonth, 32).getDate();
  };

  const weeks = [];
  const getDatePrevMonth = 1 - firstDay;
  let date = 1;
  let datePrevMonth = new Date(selectedYear, selectedMonth, getDatePrevMonth).getDate();
  let dateNextMonth = 1;

  // render 6 rows with 7 columns of calendar
  for (let i = 0; i < 6; i++) {
    const row = [];

    for (let j = 0; j < 7; j++) {
      let dateInfo = { year: selectedYear, month: selectedMonth, date };
      let className;

      // render last days of prev month
      if (i === 0 && j < firstDay) {
        dateInfo.date = datePrevMonth;
        dateInfo.month = selectedMonth - 1 === -1 ? 11 : selectedMonth - 1;
        dateInfo.year = dateInfo.month === 11 ? selectedYear - 1 : selectedYear;
        className = 'date date-prev-month';

        row.push(renderDate(datePrevMonth, dateInfo, className));
        datePrevMonth++;
      }

      // render first days of next month
      else if (date > daysInMonth(selectedYear, selectedMonth)) {
        dateInfo.date = dateNextMonth;
        dateInfo.month = selectedMonth + 1 === 12 ? 0 : selectedMonth + 1;
        dateInfo.year = dateInfo.month === 0 ? selectedYear + 1 : selectedYear;
        className = 'date date-next-month';

        row.push(renderDate(dateNextMonth, dateInfo, className));
        dateNextMonth += 1;
      }

      // render dates of this month
      else {
        className = j === 5 || j === 6 ? 'date weekend ' : 'date';
        if (
          date === today.getDate() &&
          selectedYear === today.getFullYear() &&
          selectedMonth === today.getMonth()
        ) {
          className += ' today show-message-box';
        }
        row.push(renderDate(date, dateInfo, className));
        date++;
      }
    }

    weeks.push(
      <div key={i} className={'calendar__week week-' + i}>
        {row}
      </div>
    );
  }

  return weeks;
};
