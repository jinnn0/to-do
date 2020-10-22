import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateInput({ startDate, handleDateSelect, handleDateChange }) {
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        onSelect={handleDateSelect}
        onClick={() => console.log('clicked')}
        showWeekNumbers
        minDate={new Date()}
      />
    </div>
  );
}

export default DateInput;
