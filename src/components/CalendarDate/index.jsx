import { todoTypes } from '../../utils/todo';
import { formatShortDate } from '../../utils/date';
import { DateButton, DayNumber, Dots, Dot } from './style';

const colorOf = Object.fromEntries(todoTypes.map((type) => [type.value, type.color]));

// One day in the month calendar, with a dot per tag that has open tasks that day (up to three).
function CalendarDate({ date, todos, inMonth, isToday, isSelected, onSelect }) {
  const openTags = [...new Set(todos.filter((todo) => !todo.completed).map((todo) => todo.type))].slice(0, 3);
  const weekday = (date.getDay() + 6) % 7;
  const label = `${formatShortDate(date)}, ${todos.length ? `${todos.length} task${todos.length > 1 ? 's' : ''}` : 'no tasks'}`;

  return (
    <DateButton
      type="button"
      aria-label={label}
      aria-pressed={isSelected}
      aria-current={isToday ? 'date' : undefined}
      $inMonth={inMonth}
      $weekend={weekday > 4}
      $today={isToday}
      $selected={isSelected}
      onClick={() => onSelect(date)}
    >
      <DayNumber>{date.getDate()}</DayNumber>
      <Dots aria-hidden="true">
        {openTags.map((tag) => (
          <Dot key={tag} $color={colorOf[tag]} />
        ))}
        {!openTags.length && todos.length > 0 && <Dot $color="var(--text-3)" />}
      </Dots>
    </DateButton>
  );
}

export default CalendarDate;
