import React from 'react';
import CalendarDate from '../components/monthly/CalendarDate';

export const showCalendar = (year, month) => {
  const today = new Date();
  let firstDay = new Date(year, month).getDay() - 1; // starting on Mon as index 0
  if (firstDay === -1) firstDay = 6; // convert Sun index( 0-1 = -1 ) to 6
  const daysInMonth = (year, month) => {
    return 32 - new Date(year, month, 32).getDate();
  };

  const weeks = [];
  const getDaysPrevMonth = 1 - firstDay;
  let date = 1;
  let daysPrevMonth = new Date(year, month, getDaysPrevMonth).getDate();
  let daysNextMonth = 1;

  // render 6 rows with 7 columns of calendar
  for (let i = 0; i < 6; i++) {
    const row = [];

    for (let j = 0; j < 7; j++) {
      let dateInfo = { date, month, year };
      let className;

      // render last days of prev month
      if (i === 0 && j < firstDay) {
        dateInfo.date = daysPrevMonth;
        dateInfo.month = month - 1 === -1 ? 11 : month - 1;
        dateInfo.year = dateInfo.month === 11 ? year - 1 : year;
        className = 'days-prev-month';

        row.push(renderDate(j, className, daysPrevMonth, dateInfo, showDateInfo));
        daysPrevMonth++;
      }

      // render first days of next month
      else if (date > daysInMonth(year, month)) {
        dateInfo.date = daysNextMonth;
        dateInfo.month = month + 1 === 12 ? 0 : month + 1;
        dateInfo.year = dateInfo.month === 0 ? year + 1 : year;
        className = 'days-next-month';

        row.push(renderDate(j, className, daysNextMonth, dateInfo, showDateInfo));
        daysNextMonth += 1;
      }

      // render dates of this month
      else {
        className = j === 5 || j === 6 ? 'weekend ' : '';
        if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
          className += 'today';
        }
        row.push(renderDate(j, className, date, dateInfo, showDateInfo));
        date++;
      }
    }

    weeks.push(
      <div key={i} className={'week week-' + i}>
        {row}
      </div>
    );
  }

  return weeks;
};

const renderDate = (id, className, daysPrevMonth, dateInfo, showDateInfo) => {
  return (
    <CalendarDate
      key={id}
      className={className}
      date={daysPrevMonth}
      dateInfo={dateInfo}
      showDateInfo={showDateInfo}
    />
  );
};

const showDateInfo = (dateInfo) => {
  console.log('show date info..', dateInfo);
};
