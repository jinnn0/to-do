import React, { useContext } from 'react';
import useUnmount from '../utils/useUnmount';
import HeaderShared from '../components/shared/HeaderShared';
import TodoList from '../components/shared/TodoList.jsx';
import { GlobalContext } from '../contexts/GlobalState';

function Weekly() {
  const { today, todoList, sortedTodoList, selectedSort, hideAddNewTodoForm } = useContext(GlobalContext);

  const generateTodos = (todos, counter) => {
    return todos.filter(
      (todo) =>
        todo.dateInfo.year === today.year &&
        todo.dateInfo.month === today.month &&
        todo.dateInfo.date === today.date + counter
    );
  };

  let unsortedTodosThisWeek = [];
  let sortedTodosThisWeek = [];
  let thisWeek = [];
  for (let i = 0; i < 7; i++) {
    const nextDayConstructor = new Date(today.year, today.month, today.date + i);

    const eachDay = {
      dateInfo: {
        year: nextDayConstructor.getFullYear(),
        month: nextDayConstructor.getMonth(),
        date: nextDayConstructor.getDate(),
        day: nextDayConstructor.toLocaleString('default', { weekday: 'long' })
      },
      todos: generateTodos(sortedTodoList, i)
    };

    thisWeek.push(eachDay);
    unsortedTodosThisWeek.push(generateTodos(todoList, i));
    sortedTodosThisWeek.push(generateTodos(sortedTodoList, i));
  }

  thisWeek[0].dateInfo.day = 'Today';
  thisWeek[1].dateInfo.day = 'Tomorrow';

  const getOrdinalNum = function (eachDay) {
    if (eachDay.dateInfo > 3 && eachDay.dateInfo < 21) return 'th';
    switch (eachDay.dateInfo % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  useUnmount();

  const showNoTodoMessage = (eachDay, index) => {
    let message;
    if (!unsortedTodosThisWeek[index].length) {
      message = 'Add new todo at the top right corner';
    } else if (selectedSort === 'completed' && !eachDay.todos.length && unsortedTodosThisWeek[index].length) {
      message = 'No completed todos yet';
    } else if (selectedSort === 'active' && !eachDay.todos.length && unsortedTodosThisWeek[index].length) {
      message = 'All todos are completed';
    }

    return message;
  };

  return (
    <div className="weekly" onClick={hideAddNewTodoForm}>
      <div className="main-display container">
        <HeaderShared title={'Weekly'} />

        <div className="weekly-list">
          {thisWeek.map((eachDay, index) => (
            <div key={eachDay.dateInfo.date} className="list sm">
              <h2>
                {eachDay.dateInfo.day} <span className="date">{eachDay.dateInfo.date}</span>
                <span className="date-ordinal">{getOrdinalNum(eachDay.dateInfo)}</span>
              </h2>

              <TodoList today={today} todosToday={eachDay.todos} />
              <span className="no-todo-message">{showNoTodoMessage(eachDay, index)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="side-display"></div>
    </div>
  );
}

export default Weekly;
