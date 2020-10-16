import React, { useContext } from 'react';
import useUnmount from '../utils/useUnmount';
import TodoList from '../components/shared/TodoList.jsx';
import HeaderShared from '../components/shared/HeaderShared';
import { GlobalContext } from '../contexts/GlobalState';

function Daily() {
  const { today, sortedTodoList, selectedSort, hideAddNewTodoForm } = useContext(GlobalContext);
  const TodosForEachDay = sortedTodoList.filter((todo) => {
    return (
      todo.dateInfo.year === today.year &&
      todo.dateInfo.month === today.month &&
      todo.dateInfo.date === today.date
    );
  });

  useUnmount();

  function showNoTodoMessage(todos) {
    let message = 'Add new todo at the top right';
    if (selectedSort === 'completed' && !todos.length) {
      message = 'No completed todos yet';
    } else if (selectedSort === 'active' && !todos.length) {
      message = 'No active todo';
    }

    return message;
  }

  return (
    <div className="daily" onClick={hideAddNewTodoForm}>
      <div className="main-display container">
        <HeaderShared title={'Today'} />
        <div className="list md">
          {TodosForEachDay.length ? (
            <TodoList today={today} todoForToday={TodosForEachDay} />
          ) : (
            <span className="no-todo-message">{showNoTodoMessage(TodosForEachDay)}</span>
          )}
        </div>
      </div>
      <div className="side-display"></div>
    </div>
  );
}

export default Daily;
