import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateInput({ startDate, handleDateSelect, handleDateChange }) {
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        onSelect={handleDateSelect}
        showTimeInput
        showWeekNumbers
        shouldCloseOnSelect={false}
        timeInputLabel="Time:"
      />
    </div>
  );
}

export default DateInput;
