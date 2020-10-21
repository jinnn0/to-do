import React, { useContext } from 'react';
import useUnmount from '../utils/useUnmount';
import TodoList from '../components/shared/TodoList.jsx';
import HeaderShared from '../components/shared/HeaderShared';
import { GlobalContext } from '../contexts/GlobalState';

function Daily() {
  const { sortedTodosToday, overdueTodoList, sortedOverdueTodoList, hideAddNewTodoForm } = useContext(
    GlobalContext
  );

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
    } else if (selectedSort === 'completed' && !sortedTodosToday.length && unsortedTodosToday.length) {
      message = 'No completed todos yet';
    } else if (selectedSort === 'active' && !sortedTodosToday.length && unsortedTodosToday.length) {
      message = 'All todos are completed';
    }

    return message;
  };

  useUnmount();

  return (
    <div className="daily" onClick={hideAddNewTodoForm}>
      <div className="main-display container">
        <HeaderShared title={'Today'} />
        {overdueTodoList.length ? (
          <div className="list md overdue-list">
            <h2>
              Overdue <RiPushpin2Line className="pin-icon" />
            </h2>
            <TodoList todosToday={sortedOverdueTodoList} isOverdueList />
          </div>
        ) : null}
        <div className="list md">
          <TodoList todosToday={sortedTodosToday} />
        </div>
      </div>
      <div className="side-display"></div>
    </div>
  );
}

export default Daily;
