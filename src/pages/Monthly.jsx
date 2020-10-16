import React, { useState, useContext, useRef } from 'react';
import useUnmount from '../utils/useUnmount';
import HeaderMonthly from '../components/monthly/HeaderMonthly';
import MonthlyList from '../components/monthly/MonthlyList';
import Calendar from '../components/monthly/Calendar';
import { GlobalContext } from '../contexts/GlobalState';

function Monthly() {
  const { today, hideAddNewTodoForm } = useContext(GlobalContext);
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

  useUnmount();

  return (
    <div className="monthly" onClick={hideAddNewTodoForm}>
      <div className="main-display container">
        <HeaderMonthly
          currentMonthName={currentMonthName}
          selectedYear={selectedYear}
          moveToPrevMonth={moveToPrevMonth}
          moveToNextMonth={moveToNextMonth}
          goBackToToday={goBackToToday}
        />
        <div className="main" ref={parent} onClick={handleDateScroll}>
          <Calendar selectedYear={selectedYear} selectedMonth={selectedMonth} />
          <MonthlyList
            currentMonthName={currentMonthName}
            selectedYear={selectedYear}
            selectedMonth={selectedMonth}
          />
        </div>
      </div>
      <div className="side-display"></div>
    </div>
  );
}

export default Monthly;
