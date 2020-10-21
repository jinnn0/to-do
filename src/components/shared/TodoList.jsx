import React, { useContext } from 'react';
import TodoItem from './TodoItem.jsx';
import { GlobalContext } from '../../contexts/GlobalState';

function TodoList({ size, todosToday, isOverdueList }) {
  const {
    sortedTodosToday,
    unsortedTodosToday,
    overdueTodoList,
    sortedOverdueTodoList,
    selectedSort
  } = useContext(GlobalContext);

  const showNoTodoMessage = (isOverdueList) => {
    let unSortedTodos = isOverdueList ? overdueTodoList : unsortedTodosToday;
    let sortedTodos = isOverdueList ? sortedOverdueTodoList : sortedTodosToday;
    let message;
    if (!unSortedTodos.length) {
      message = isOverdueList ? 'No overdue todos' : 'Add new todo at the top right corner';
    } else if (selectedSort === 'completed' && !sortedTodos.length && unSortedTodos.length) {
      message = isOverdueList ? 'No completed overdue todos yet' : 'No completed todos yet';
    } else if (selectedSort === 'active' && !sortedTodos.length && unSortedTodos.length) {
      message = isOverdueList ? 'All overdue todos are completed' : 'All todos are completed';
    }

    return message;
  };

  return (
    <>
      <ul className="todo-list">
        {todosToday.map((todo) => (
          <TodoItem key={todo.id} todo={todo} size={size} />
        ))}
      </ul>
      <span className="no-todo-message">{showNoTodoMessage(isOverdueList)}</span>
    </>
  );
}

export default TodoList;
