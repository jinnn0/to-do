import React, { useContext } from 'react';
import TodoList from '../components/shared/TodoList.jsx';
import HeaderShared from '../components/shared/HeaderShared';
import { RiPushpin2Line } from 'react-icons/ri';
import { GlobalContext } from '../contexts/GlobalState';

function Daily() {
  const {
    today,
    selectedSort,
    todoList,
    sortedTodoList,
    overdueTodoList,
    sortedOverdueTodoList
  } = useContext(GlobalContext);

  const todosToday = (todos) => {
    return todos.filter(
      (todo) =>
        todo.dateInfo.year === today.year &&
        todo.dateInfo.month === today.month &&
        todo.dateInfo.date === today.date
    );
  };

  const unsortedTodosToday = todosToday(todoList);
  const sortedTodosToday = todosToday(sortedTodoList);

  const showNoTodoMessage = (isOverdueList) => {
    let unSortedTodos = isOverdueList ? overdueTodoList : unsortedTodosToday;
    let sortedTodos = isOverdueList ? sortedOverdueTodoList : sortedTodosToday;
    let message;

    if (!unSortedTodos.length) {
      message = 'Add new todo at the top right corner';
    } else if (selectedSort === 'completed' && !sortedTodos.length && unSortedTodos.length) {
      message = isOverdueList ? 'No completed overdue todos yet' : 'No completed todos yet';
    } else if (selectedSort === 'active' && !sortedTodos.length && unSortedTodos.length) {
      message = isOverdueList ? 'All overdue todos are completed' : 'All todos are completed';
    }

    return message;
  };

  return (
    <div className="daily">
      <div className="main-display container">
        <HeaderShared title={'Today'} />
        {overdueTodoList.length ? (
          <div className="list md overdue-list">
            <h2>
              Overdue <RiPushpin2Line className="pin-icon" />
            </h2>
            <TodoList todosToday={sortedOverdueTodoList} isOverdueList />
            <span className="no-todo-message">{showNoTodoMessage(true)}</span>
          </div>
        ) : null}
        <div className="list md">
          <TodoList todosToday={sortedTodosToday} />
          <span className="no-todo-message">{showNoTodoMessage()}</span>
        </div>
      </div>
      <div className="side-display"></div>
    </div>
  );
}

export default Daily;
