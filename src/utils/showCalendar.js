import React from 'react';
import styled from 'styled-components';
import CalendarDate from '../components/CalendarDate';

const CalendarWeek = styled.div`
  width: 100%;
  flex: 1;
  font-weight: 500;
  display: flex;
  justify-content: space-between;

  .date-prev-month,
  .date-next-month {
    color: rgb(192, 192, 192);
  }

  .today {
    background-color: rgba(255, 227, 184, 0.411);
  }

  .weekend {
    color: rgb(123, 123, 123);
  }

  .no-todo-message::before {
    content: 'No todo';
    position: absolute;
    left: 130%;
    width: 80px;
    height: 50px;
    border-radius: 3px;
    background-color: rgb(242, 242, 242);
    color: rgb(123, 123, 123);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  /* small tail on the right border */
  .no-todo-message:after {
    content: '';
    display: block;
    width: 0;
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    border-color: rgba(0, 0, 0, 0) rgba(242, 242, 242, 0.762);
    border-style: solid;
    border-width: 15px;
    border-left-width: 0;
  }
`;

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
      <CalendarWeek key={i} className={' week-' + i}>
        {row}
      </CalendarWeek>
    );
  }

  return weeks;
};
