import React, { useState, useContext, useRef } from 'react';
import MonthlyHeader from '../../components/MonthlyHeader';
import MonthlyList from '../../components/MonthlyList';
import Calendar from '../../components/Calendar';
import { GlobalContext } from '../../contexts/GlobalState';
import { MainContainer, Main, Side } from '../../styles/shared';
import { CalendarWrapper } from './style';

function Monthly() {
  const { today } = useContext(GlobalContext);
  const [selectedYear, setSelectedYear] = useState(today.year);
  const [selectedMonth, setSelectedMonth] = useState(today.month);
  const currentMonthName = new Date(selectedYear, selectedMonth).toLocaleString('default', { month: 'long' });
  const parent = useRef();

  const moveToPrevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedYear((prev) => prev - 1);
      setSelectedMonth(12);
    }
    setSelectedMonth((prev) => prev - 1);
  };

  const moveToNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedYear((prev) => prev + 1);
    }

    setSelectedMonth((prev) => (prev + 1) % 12);
  };

  const goBackToToday = () => {
    setSelectedYear(today.year);
    setSelectedMonth(today.month);
  };

  const handleDateScroll = (e) => {
    const HTMLCollection = parent.current.childNodes[1].childNodes[2].children;
    const refList = [...HTMLCollection];
    const listToScroll = refList.find(
      (list) => list.getAttribute('data-id') === e.target.getAttribute('data-id')
    );

    if (listToScroll) listToScroll.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MainContainer className="monthly">
      <Main>
        <MonthlyHeader
          currentMonthName={currentMonthName}
          selectedYear={selectedYear}
          moveToPrevMonth={moveToPrevMonth}
          moveToNextMonth={moveToNextMonth}
          goBackToToday={goBackToToday}
        />
        <CalendarWrapper ref={parent} onClick={handleDateScroll}>
          <Calendar selectedYear={selectedYear} selectedMonth={selectedMonth} />
          <MonthlyList
            currentMonthName={currentMonthName}
            selectedYear={selectedYear}
            selectedMonth={selectedMonth}
          />
        </CalendarWrapper>
      </Main>
      <Side></Side>
    </MainContainer>
  );
}

export default Monthly;
