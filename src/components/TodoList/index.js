import React from 'react';
import TodoItem from '../TodoItem';

function TodoList({ size, todosToday }) {
  return (
    <ul className="todo-list">
      {todosToday.map((todo) => (
        <TodoItem key={todo.id} todo={todo} size={size} />
      ))}
    </ul>
  );
}

export default TodoList;
