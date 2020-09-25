import React from "react";
import CalendarMain from "./CalendarMain";
import { showCalendar } from "../../utils/calendarHelper";

function Calendar({ selectedYear, selectedMonth }) {
  return (
    <div className="calendar-container">
      <CalendarMain showCalendar={showCalendar(selectedYear, selectedMonth)} />
    </div>
  );
}

export default Calendar;
