import { useContext, useEffect, useId, useRef, useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import MonthlyListSubList from '../MonthlyListSubList';
import { GlobalContext } from '../../contexts/GlobalState';
import { formatShortDate, isOnDay } from '../../utils/date';
import { Count } from '../../styles/shared';
import { MonthlyListContainer, ListHeader, MonthName, SearchField, ListWrapper, Note } from './style';

// The month's tasks grouped by day, with search. Selecting a day in the calendar scrolls to it.
function MonthlyList({ currentMonthName, selectedYear, selectedMonth, selectedDay }) {
  const { todoList } = useContext(GlobalContext);
  const [query, setQuery] = useState('');
  const searchId = useId();
  const groupRefs = useRef(new Map());

  // The month view has no sort menu, so it always lists tasks by time.
  const inMonth = todoList
    .filter((todo) => todo.dateInfo.year === selectedYear && todo.dateInfo.month === selectedMonth)
    .sort((a, b) => a.timestamp - b.timestamp);
  const search = query.trim().toLowerCase();
  const matching = search ? inMonth.filter((todo) => todo.task.toLowerCase().includes(search)) : inMonth;

  // Group by day, in date order.
  const groups = Object.values(
    matching.reduce((byDay, todo) => {
      (byDay[todo.dateInfo.date] ??= []).push(todo);
      return byDay;
    }, {})
  ).sort((a, b) => a[0].dateInfo.date - b[0].dateInfo.date);

  const selectedHasTasks = selectedDay && matching.some((todo) => isOnDay(todo.dateInfo, selectedDay));

  useEffect(() => {
    if (!selectedDay) return;
    groupRefs.current.get(selectedDay.getDate())?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [selectedDay]);

  return (
    <MonthlyListContainer aria-labelledby={`${searchId}-title`}>
      <ListHeader>
        <MonthName id={`${searchId}-title`}>
          {currentMonthName} <Count>{inMonth.length}</Count>
        </MonthName>
        <SearchField>
          <FiSearch aria-hidden="true" />
          <input
            id={searchId}
            type="search"
            placeholder="Search this month"
            aria-label="Search this month's tasks"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button type="button" aria-label="Clear search" onClick={() => setQuery('')}>
              <FiX aria-hidden="true" />
            </button>
          )}
        </SearchField>
      </ListHeader>

      {selectedDay && !selectedHasTasks && (
        <Note>
          {search ? 'No matching tasks on' : 'No tasks on'} {formatShortDate(selectedDay)}
        </Note>
      )}

      <ListWrapper>
        {groups.map((todos) => {
          const date = todos[0].dateInfo.date;
          return (
            <MonthlyListSubList
              key={date}
              ref={(el) => (el ? groupRefs.current.set(date, el) : groupRefs.current.delete(date))}
              todos={todos}
              isSelected={selectedDay?.getDate() === date && selectedHasTasks}
            />
          );
        })}
        {!groups.length && <Note>{search ? `No tasks match “${query.trim()}”` : 'No tasks this month'}</Note>}
      </ListWrapper>
    </MonthlyListContainer>
  );
}

export default MonthlyList;
