import React, { useContext } from 'react';
import useUnmount from '../utils/useUnmount';
import TodoList from '../components/shared/TodoList.jsx';
import HeaderShared from '../components/shared/HeaderShared';
import { GlobalContext } from '../contexts/GlobalState';

function Daily() {
  const { today, todoList, sortedTodoList, selectedSort, hideAddNewTodoForm } = useContext(GlobalContext);

  const generateTodos = (todos) => {
    return todos.filter(
      (todo) =>
        todo.dateInfo.year === today.year &&
        todo.dateInfo.month === today.month &&
        todo.dateInfo.date === today.date
    );
  };

  const unsortedTodosToday = generateTodos(todoList);
  const sortedTodosToday = generateTodos(sortedTodoList);

  const showNoTodoMessage = () => {
    let message;
    if (!unsortedTodosToday.length) {
      message = 'Add new todo at the top right corner';
    } else if (selectedSort === 'completed' && unsortedTodosToday.length && !sortedTodosToday.length) {
      message = 'No completed todos yet';
    } else if (selectedSort === 'active' && unsortedTodosToday.length && !sortedTodosToday.length) {
      message = 'All todos are completed';
    }

    return message;
  };

  useUnmount();

  return (
    <div className="daily" onClick={hideAddNewTodoForm}>
      <div className="main-display container">
        <HeaderShared title={'Today'} />
        <div className="list md">
          <TodoList today={today} todoForToday={sortedTodosToday} />
          <span className="no-todo-message">{showNoTodoMessage()}</span>
        </div>
      </div>
      <div className="side-display"></div>
    </div>
  );
}

export default Daily;
