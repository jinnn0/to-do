import React, { useState, useContext } from 'react';
import useUnmount from '../utils/useUnmount';
import HeaderMonthly from '../components/monthly/HeaderMonthly';
import Calendar from '../components/monthly/Calendar';
import { GlobalContext } from '../contexts/GlobalState';

function Monthly() {
  const { today, handleClickOutsideForm } = useContext(GlobalContext);

  // prettier-ignore
  const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October","November","December"];
  const [selectedYear, setSelectedYear] = useState(today.year);
  const [selectedMonth, setSelectedMonth] = useState(today.month);
  const currentMonthName = monthsArray[selectedMonth];

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

  useUnmount();

  return (
    <div className="monthly" onClick={handleClickOutsideForm}>
      <div className="main-display container">
        <HeaderMonthly
          currentMonthName={currentMonthName}
          selectedYear={selectedYear}
          moveToPrevMonth={moveToPrevMonth}
          moveToNextMonth={moveToNextMonth}
        />
        <Calendar selectedYear={selectedYear} selectedMonth={selectedMonth} />
      </div>
      <div className="side-display"></div>
    </div>
  );
}

export default Monthly;
