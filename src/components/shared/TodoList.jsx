import React from 'react';
import TodoItem from './TodoItem.jsx';

function TodoList({ size, todoForToday }) {
  return (
    <ul className="todo-list">
      {todoForToday.map((todo, index) => (
        <TodoItem key={index} todo={todo} size={size} />
      ))}
    </ul>
  );
}

export default TodoList;
