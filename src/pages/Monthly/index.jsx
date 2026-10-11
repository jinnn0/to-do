import { useState } from 'react';
import MonthlyHeader from '../../components/MonthlyHeader';
import MonthlyList from '../../components/MonthlyList';
import Calendar from '../../components/Calendar';
import { MainContainer, Main, Side } from '../../styles/shared';
import { CalendarWrapper } from './style';

const firstOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1);

function Monthly() {
  const [month, setMonth] = useState(() => firstOfMonth(new Date()));
  const [selectedDay, setSelectedDay] = useState(null);
  const selectedYear = month.getFullYear();
  const selectedMonth = month.getMonth();
  const currentMonthName = month.toLocaleString('default', { month: 'long' });

  const showMonth = (date) => {
    setMonth(firstOfMonth(date));
    setSelectedDay(null);
  };

  // Selecting a day highlights it and scrolls the list to it; picking a day from a
  // neighbouring month moves to that month. Selecting it again clears the selection.
  const selectDay = (day) => {
    if (day.getMonth() !== selectedMonth) setMonth(firstOfMonth(day));
    setSelectedDay((current) => (current?.toDateString() === day.toDateString() ? null : day));
  };

  return (
    <MainContainer className="monthly">
      <Main>
        <MonthlyHeader
          currentMonthName={currentMonthName}
          selectedYear={selectedYear}
          moveToPrevMonth={() => showMonth(new Date(selectedYear, selectedMonth - 1))}
          moveToNextMonth={() => showMonth(new Date(selectedYear, selectedMonth + 1))}
          goBackToToday={() => showMonth(new Date())}
        />
        <CalendarWrapper>
          <Calendar
            selectedYear={selectedYear}
            selectedMonth={selectedMonth}
            selectedDay={selectedDay}
            onSelectDay={selectDay}
          />
          <MonthlyList
            currentMonthName={currentMonthName}
            selectedYear={selectedYear}
            selectedMonth={selectedMonth}
            selectedDay={selectedDay}
          />
        </CalendarWrapper>
      </Main>
      <Side></Side>
    </MainContainer>
  );
}

export default Monthly;
