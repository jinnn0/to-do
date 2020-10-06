import React, { useContext } from 'react';
import useUnmount from '../utils/useUnmount';
import TodoList from '../components/shared/TodoList.jsx';
import HeaderShared from '../components/shared/HeaderShared';
import { GlobalContext } from '../contexts/GlobalState';

function Daily() {
  const { today, handleClickOutsideForm, sortedTodoList } = useContext(GlobalContext);
  const TodosForEachDay = sortedTodoList.filter((todo) => {
    return (
      todo.dateInfo.year === today.year &&
      todo.dateInfo.month === today.month &&
      todo.dateInfo.date === today.date
    );
  });

  useUnmount();

  return (
    <div className="daily" onClick={handleClickOutsideForm}>
      <div className="main-display container">
        <HeaderShared title={'Today'} />
        <div className="list md">
          {TodosForEachDay.length ? (
            <TodoList today={today} todoForToday={TodosForEachDay} />
          ) : (
            <span className="no-todo-message">Add new todo at the top right</span>
          )}
        </div>
      </div>
      <div className="side-display"></div>
    </div>
  );
}

export default Daily;
