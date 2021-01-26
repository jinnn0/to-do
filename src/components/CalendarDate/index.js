import React, { useState, useRef, useContext } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { GlobalContext } from '../../contexts/GlobalState';
import { CalendarDateContainer } from './style';

function CalendarDate({ date, dateInfo, className }) {
  const { todoList } = useContext(GlobalContext);
  const [selected, setSelected] = useState(false);
  const todos = todoList.filter((todo) => {
    return (
      todo.dateInfo.year === dateInfo.year &&
      todo.dateInfo.month === dateInfo.month &&
      todo.dateInfo.date === dateInfo.date
    );
  });

  const dateRef = useRef();
  const toggleSelected = () => {
    if (todos.length) return;
    setSelected(!selected);
  };

  useOnClickOutside(dateRef, () => setSelected(false));

  return (
    <CalendarDateContainer
      ref={dateRef}
      data-id={dateInfo.date}
      className={`${className} ${selected ? 'no-todo-message' : ''}`}
      onClick={toggleSelected}
    >
      {date}
    </CalendarDateContainer>
  );
}

export default CalendarDate;
