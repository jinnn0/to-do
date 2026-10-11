import MonthlyListSubListItem from '../MonthlyListSubListItem';
import { toDate } from '../../utils/date';
import { ListContainer, ListHeader, DateNumber, DayName, TodayBadge } from './style';

// One day's tasks in the month list.
function MonthlyListSubList({ todos, isSelected, ref }) {
  const date = toDate(todos[0].dateInfo);
  const isToday = date.toDateString() === new Date().toDateString();

  return (
    <ListContainer ref={ref} $selected={isSelected}>
      <ListHeader>
        <DateNumber>{date.getDate()}</DateNumber>
        <DayName>{date.toLocaleDateString('default', { weekday: 'long' })}</DayName>
        {isToday && <TodayBadge>Today</TodayBadge>}
      </ListHeader>
      <ul>
        {todos.map((todo, index) => (
          <MonthlyListSubListItem key={todo.id} todo={todo} index={index} />
        ))}
      </ul>
    </ListContainer>
  );
}

export default MonthlyListSubList;
