import React, { useState, useRef, useContext } from 'react';
import useOnClickOutside from '../../utils/useOnClickOutside';
import { GlobalContext } from '../../contexts/GlobalState';

export default function CalendarDate({ date, dateInfo, className }) {
  const { todoList } = useContext(GlobalContext);
  const [selected, setSelected] = useState(false);
  const dateRef = useRef();
  const todos = todoList.filter((todo) => {
    return (
      todo.dateInfo.year === dateInfo.year &&
      todo.dateInfo.month === dateInfo.month &&
      todo.dateInfo.date === dateInfo.date
    );
  });

  const toggleSelected = () => {
    if (todos.length) return;
    setSelected(!selected);
  };

  useOnClickOutside(dateRef, () => setSelected(false));

  return (
    <span
      ref={dateRef}
      className={`${className} ${selected ? 'no-todo-message' : ''}`}
      onClick={toggleSelected}
    >
      {date}
    </span>
  );
}
