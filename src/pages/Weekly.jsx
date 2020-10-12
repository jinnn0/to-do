import React, { useContext } from 'react';
import useUnmount from '../utils/useUnmount';
import HeaderShared from '../components/shared/HeaderShared';
import TodoList from '../components/shared/TodoList.jsx';
import { GlobalContext } from '../contexts/GlobalState';

function Weekly() {
  const { today, handleClickOutsideForm, sortedTodoList, sortValue } = useContext(GlobalContext);

  let thisWeek = [];
  for (let i = 0; i < 7; i++) {
    const nextDayConstructor = new Date(today.year, today.month, today.date + i);

    const TodosForEachDay = sortedTodoList.filter((todo) => {
      return (
        todo.dateInfo.year === today.year &&
        todo.dateInfo.month === today.month &&
        todo.dateInfo.date === today.date + i
      );
    });

    const eachDay = {
      dateInfo: {
        year: nextDayConstructor.getFullYear(),
        month: nextDayConstructor.getMonth(),
        date: nextDayConstructor.getDate(),
        day: nextDayConstructor.toLocaleString('default', { weekday: 'long' })
      },
      todos: TodosForEachDay
    };

    thisWeek.push(eachDay);
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

  function showNoTodoMessage(todos) {
    let message = "There's no todo";
    if (sortValue === 'completed' && !todos.length) {
      message = 'No completed todos yet';
    } else if (sortValue === 'active' && !todos.length) {
      message = 'No active todo';
    }

    return message;
  }

  return (
    <div className="weekly" onClick={handleClickOutsideForm}>
      <div className="main-display container">
        <HeaderShared title={'Weekly'} />

        <div className="weekly-list">
          {thisWeek.map((eachDay) => (
            <div key={eachDay.dateInfo.date} className="list sm">
              <h2>
                {eachDay.dateInfo.day} <span className="date">{eachDay.dateInfo.date}</span>
                <span className="date-ordinal">{getOrdinalNum(eachDay.dateInfo)}</span>
              </h2>
              {eachDay.todos.length ? (
                <TodoList today={today} todoForToday={eachDay.todos} />
              ) : (
                <span className="no-todo-message">{showNoTodoMessage(eachDay)}</span>
              )}
            </div>
          ))}
        </div>

        {/* needed for extra space at the end of weekly-list */}
        <section>
          <div></div>
        </section>
      </div>

      <div className="side-display"></div>
    </div>
  );
}

export default Weekly;
