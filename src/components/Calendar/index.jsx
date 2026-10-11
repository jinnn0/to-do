import { useContext } from 'react';
import CalendarDate from '../CalendarDate';
import { GlobalContext } from '../../contexts/GlobalState';
import { monthGrid, weekdayLabels } from '../../utils/calendar';
import { isOnDay } from '../../utils/date';
import { CalendarContainer, Weekdays, Days } from './style';

const sameDay = (a, b) => a && b && a.toDateString() === b.toDateString();

function Calendar({ selectedYear, selectedMonth, selectedDay, onSelectDay }) {
  const { todoList } = useContext(GlobalContext);
  const today = new Date();

  return (
    <CalendarContainer aria-label="Calendar">
      <Weekdays aria-hidden="true">
        {weekdayLabels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </Weekdays>
      <Days>
        {monthGrid(selectedYear, selectedMonth).map(({ date, inMonth }) => (
          <CalendarDate
            key={date.toDateString()}
            date={date}
            inMonth={inMonth}
            todos={todoList.filter((todo) => isOnDay(todo.dateInfo, date))}
            isToday={sameDay(date, today)}
            isSelected={sameDay(date, selectedDay)}
            onSelect={onSelectDay}
          />
        ))}
      </Days>
    </CalendarContainer>
  );
}

export default Calendar;
